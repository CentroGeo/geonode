import sys
import re
import os
import uuid
import logging
import psycopg2
from decimal import Decimal
from csvkit import convert
import agate
import agatesql
from sqlalchemy import create_engine, dialects

from django.db.models import signals
from django.conf import settings
from django.utils.text import slugify
from django.core.files import File
from geoserver.catalog import Catalog
from geoserver.store import datastore_from_index

from .models import DataTable, TableJoin
from geonode.geoserver.helpers import ogc_server_settings
from geonode.geoserver.signals import geoserver_pre_save
from geonode.layers.models import Layer, Attribute
from geonode.interactive.intercensal.models import TableAttribute, CustomTable
from geonode.interactive.alf_census.models import AlfTableAttribute, AlfTable
from geonode.geoserver.helpers import set_attributes

_user = settings.OGC_SERVER['default']['USER']
_password = settings.OGC_SERVER['default']['PASSWORD']

logger = logging.getLogger('geonode.contrib.datatables.utils')


def _clean_string(
        str,
        regex=r"(^[^a-zA-Z\._]+)|([^a-zA-Z\._0-9]+)",
        replace="_"):
    """
    Replaces a string that matches the regex with the replacement.
    """
    regex = re.compile(regex)

    if str[0].isdigit():
        str = replace + str

    return regex.sub(replace, str)


# Funcion para convertir excel a csv
def convert_to_csv(filename, newfilename):
    f = open(filename, 'rb')
    new_f = open(newfilename, "wb")
    converted = False
    try:
        new_f.write(convert.convert(f, 'xls'))
        converted = True
        print('Se realizo conversion')
    except:
        return None, str(sys.exc_info()[0])
    finally:
        f.close()
        new_f.close()

    return converted


def process_csv_file(instance, delimiter=",", no_header_row=False):
    csv_filename = instance.uploaded_file.path
    table_name = instance.table_name
    base_name, extension = os.path.splitext(instance.uploaded_file.name)
    ext = extension[1:]
    csv_table = None

    if ext == 'xls' or ext == 'xlsx':
        newfilename = csv_filename + ".csv"
        convert_to_csv(csv_filename, newfilename)
        f = open(newfilename, 'rb')
    else:
        f = open(csv_filename, 'rb')

    try:
        #csv_table = table.Table.from_csv(f,name=table_name, no_header_row=no_header_row,
        #                                 delimiter=delimiter)
        
        csv_table = agate.Table.from_csv(
                f,
                column_types=column_types,
                delimiter=delimiter,
                header=(not no_header_row)
            )
    except UnicodeDecodeError as e:
        f.close()
        pass
    except:
        instance.delete()
        return None, str(sys.exc_info()[0])

    if csv_table is None:
        f = open(csv_filename, 'rb')
        try:
            #csv_table = table.Table.from_csv(f,name=table_name, no_header_row=no_header_row,
            #                                 delimiter=delimiter, encoding='LATIN1')

            csv_table = agate.Table.from_csv(
                    f,
                    column_types=column_types,
                    delimiter=delimiter,
                    header=(not no_header_row)
                )
        except UnicodeDecodeError:
            instance.delete()
            return None, "El conjunto de caracteres seleccionados es incorrecto, vuelva intentarlo"
        except:
            instance.delete()
            return None, str(sys.exc_info()[0])

    csv_file = File(f)
    f.close()

    for column in csv_table:
        column.name = slugify(unicode(column.name)).replace('-','_')
        attribute, created = Attribute.objects.get_or_create(resource=instance,
            attribute=column.name, 
            attribute_label=column.name, 
            attribute_type=column.type.__name__, 
            display_order=column.order)

    # Create Database Table
    try:
        #sql_table = sql.make_table(csv_table,table_name)
        #create_table_sql = sql.make_create_table_statement(sql_table, dialect="postgresql")
        table.to_sql(
            connection,
            table_name
            )
        statement = table.to_sql_create_statement(table_name,dialect="postgresql")
        #instance.create_table_sql = create_table_sql
        instance.create_table_sql = statement
        instance.save()
    except:
        instance.delete()
        return None, str(sys.exc_info()[0])

    db = ogc_server_settings.datastore_db
    conn = psycopg2.connect(
        "dbname='" +
        db['NAME'] +
        "' user='" +
        db['USER'] +
        "'  password='" +
        db['PASSWORD'] +
        "' port=" +
        db['PORT'] +
        " host='" +
        db['HOST'] +
        "'")
    try:
        cur = conn.cursor()
        cur.execute('drop table if exists %s CASCADE;' % table_name) 
        cur.execute(create_table_sql)
        conn.commit()
    except Exception as e:
        logger.error(
            "Error Creating table %s:%s",
            instance.name,
            str(e))
    finally:
        conn.close()

    # Copy Data to postgres
    connection_string = "postgresql://%s:%s@%s:%s/%s" % (db['USER'], db['PASSWORD'], db['HOST'], db['PORT'], db['NAME'])
    try:
        engine = create_engine(connection_string)
    except ImportError:
        return None, str(sys.exc_info()[0])

    conn = engine.connect()
    trans = conn.begin()
 
    if csv_table.count_rows() > 0:
        insert = sql_table.insert()
        headers = csv_table.headers()
        try:
            conn.execute(insert, [dict(zip(headers, row)) for row in csv_table.to_rows()])
        except:
            # Clean up after ourselves
            instance.delete() 
            return None, str(sys.exc_info()[0])

    trans.commit()
    conn.close()
    f.close()
    
    return instance, ""


def process_custom_csv_file(instance, table_type, delimiter=",", no_header_row=False):
    csv_filename = instance.uploaded_file.path
    table_name = instance.table_name
    base_name, extension = os.path.splitext(instance.uploaded_file.name)
    ext = extension[1:]
    csv_table = None
    encoding = 'UTF-8'

    if ext == 'xls' or ext == 'xlsx':
        newfilename = csv_filename + ".csv"
        convert_to_csv(csv_filename, newfilename)
        f = open(newfilename, 'rb')
    else:
        f = open(csv_filename, 'rb')

    try:
        #csv_table = table.Table.from_csv(f, name=table_name, no_header_row=no_header_row,
        #                                 delimiter=delimiter)

        csv_table = agate.Table.from_csv(
                f,
                column_types=column_types,
                delimiter=delimiter,
                header=(not no_header_row)
            )
    except UnicodeDecodeError as e:
        f.close()
        pass
    except IOError as e:
        print("I/O error({0}): {1}".format(e.errno, e.strerror))
        instance.delete()
        return None, str(sys.exc_info()[0])

    if csv_table is None:
        f = open(csv_filename, 'rb')
        try:
            #csv_table = table.Table.from_csv(f, name=table_name, no_header_row=no_header_row,
            #                                 delimiter=delimiter, encoding='LATIN1')

            csv_table = agate.Table.from_csv(
                    f,
                    column_types=column_types,
                    delimiter=delimiter,
                    encoding='LATIN1',
                    header=(not no_header_row)
                )
            encoding = 'LATIN1'
        except UnicodeDecodeError:
            instance.delete()
            return None, "El conjunto de caracteres seleccionados es incorrecto, vuelva intentarlo"
        except:
            instance.delete()
            return None, str(sys.exc_info()[0])

    csv_file = File(f)
    f.close()
    if table_type == 'intercensal':
        for column in csv_table:
            column.name = slugify(unicode(column.name)).replace('-', '_')
            attribute, created = TableAttribute.objects.get_or_create(custom_table=instance,
                                                                 attribute=column.name,
                                                                 attribute_label=column.name,
                                                                 attribute_type=column.type.__name__,
                                                                 display_order=column.order)
    else:
        for column in csv_table:
            column.name = slugify(unicode(column.name)).replace('-', '_')
            attribute, created = AlfTableAttribute.objects.get_or_create(alf_table=instance,
                                                                 attribute=column.name,
                                                                 attribute_label=column.name,
                                                                 attribute_type=column.type.__name__,
                                                                 display_order=column.order)

    # Create Database Table
    try:
        #sql_table = sql.make_table(csv_table,table_name)
        #create_table_sql = sql.make_create_table_statement(sql_table, dialect="postgresql")
        table.to_sql(
            connection,
            table_name
            )
        statement = table.to_sql_create_statement(table_name,dialect="postgresql")
        #instance.create_table_sql = create_table_sql
        instance.charset = encoding
        instance.save()
    except:
        instance.delete()
        return None, str(sys.exc_info()[0])

    db = ogc_server_settings.datastore_db
    conn = psycopg2.connect(
        "dbname='" +
        db['NAME'] +
        "' user='" +
        db['USER'] +
        "'  password='" +
        db['PASSWORD'] +
        "' port=" +
        db['PORT'] +
        " host='" +
        db['HOST'] +
        "'")
    try:
        cur = conn.cursor()
        cur.execute('drop table if exists %s CASCADE;' % table_name)
        cur.execute(create_table_sql)
        conn.commit()
    except Exception as e:
        logger.error(
            "Error Creating table %s:%s",
            instance.table_name,
            str(e))
    finally:
        conn.close()

    # Copy Data to postgres
    connection_string = "postgresql://%s:%s@%s:%s/%s" % (db['USER'], db['PASSWORD'], 'localhost', 5432, db['NAME'])
    try:
        engine = create_engine(connection_string)
    except ImportError:
        return None, str(sys.exc_info()[0])

    conn = engine.connect()
    trans = conn.begin()

    if csv_table.count_rows() > 0:
        insert = sql_table.insert()
        headers = csv_table.headers()
        try:
            conn.execute(insert, [dict(zip(headers, row)) for row in csv_table.to_rows()])
        except:
            # Clean up after ourselves
            instance.delete()
            return None, str(sys.exc_info()[0])

    trans.commit()
    conn.close()
    #f.close()

    return instance, ""


def create_point_col_from_lat_lon(table_name, lat_column, lon_column):
    try:
        dt = DataTable.objects.get(table_name=table_name)
    except:
        msg = "Error: (%s) %s" % (str(e), table_name)
        return None, msg

    alter_table_sql = "ALTER TABLE %s ADD COLUMN geom geometry(POINT,4326);" % (table_name)
    update_table_sql = "UPDATE %s SET geom = ST_SetSRID(ST_MakePoint(%s,%s),4326);" % (table_name, lon_column, lat_column)
    create_index_sql = "CREATE INDEX idx_%s_geom ON %s USING GIST(geom);" % (table_name, table_name)

    try:
        db = ogc_server_settings.datastore_db
        conn = psycopg2.connect(
            "dbname='" +
            db['NAME'] +
            "' user='" +
            db['USER'] +
            "'  password='" +
            db['PASSWORD'] +
            "' port=" +
            db['PORT'] +
            " host='" +
            db['HOST'] +
            "'")
        cur = conn.cursor()
        cur.execute(alter_table_sql)
        cur.execute(update_table_sql)
        cur.execute(create_index_sql) 
        conn.commit()
        conn.close()
    except Exception as e:
        conn.close()
        msg =  "Error Creating Point Column from Latitude and Longitude %s" % (str(e[0]))
        return None, msg

    # Create the Layer in GeoServer from the table 
    try:
        cat = Catalog(settings.OGC_SERVER['default']['LOCATION'] + "rest",
                          _user, _password)
        workspace = cat.get_workspace(settings.DEFAULT_WORKSPACE)
        ds_list = cat.get_xml(workspace.datastore_url)
        datastores = [datastore_from_index(cat, workspace, n) for n in ds_list.findall("dataStore")]
        ds = None
        for datastore in datastores:
            if datastore.name == "datastore":
                ds = datastore
        ft = cat.publish_featuretype(table_name, ds, "EPSG:4326", srs="EPSG:4326")
        cat.save(ft)
    except Exception as e:
        tj.delete()
        msg = "Error creating GeoServer layer for %s: %s" % (table_name, str(e))
        return None, msg

    # Create the Layer in GeoNode from the GeoServer Layer
    try:
        signals.pre_save.disconnect(geoserver_pre_save, sender=Layer)
        layer, created = Layer.objects.get_or_create(name=table_name, defaults={
            "workspace": workspace.name,
            "store": ds.name,
            "storeType": ds.resource_type,
            "typename": "%s:%s" % (workspace.name.encode('utf-8'), ft.name.encode('utf-8')),
            "title": ft.title or 'No title provided',
            "abstract": ft.abstract or 'No abstract provided',
            "uuid": str(uuid.uuid4()),
            "bbox_x0": Decimal(ft.latlon_bbox[0]),
            "bbox_x1": Decimal(ft.latlon_bbox[1]),
            "bbox_y0": Decimal(ft.latlon_bbox[2]),
            "bbox_y1": Decimal(ft.latlon_bbox[3])
        })
        signals.pre_save.connect(geoserver_pre_save, sender=Layer) 
        set_attributes(layer, overwrite=True)
    except Exception as e:
        msg = "Error creating GeoNode layer for %s: %s" % (table_name, str(e))
        return None, msg

    return layer, ""
    

def setup_join(table_name, layer_typename, table_attribute_name, layer_attribute_name, inner_join='False'):

    # Setup the Table Join in GeoNode
    try:
        dt = DataTable.objects.get(table_name=table_name)
        layer = Layer.objects.get(typename=layer_typename)
        table_attribute = Attribute.objects.get(resource=dt,attribute=table_attribute_name)
        layer_attribute = layer.attributes.get(resource=layer, attribute=layer_attribute_name)
    except Exception as e:
        msg = "Error: (%s) %s:%s:%s:%s" % (str(e), table_name, layer_typename, table_attribute_name, layer_attribute_name)
        return None, msg

    try:
        tj_prev = TableJoin.objects.get(datatable=dt.id)
        tj_prev.delete()
    except:
        pass

    update_attr=None
    if table_attribute.attribute == layer_attribute.attribute:
        renamed = table_attribute.attribute+'_2'
        update_attr = 'alter table %s rename column %s to %s' % (dt.table_name, table_attribute, renamed)
        table_attribute.attribute = renamed
        table_attribute.attribute_label = renamed
        table_attribute.save()

    layer_name = layer.typename.split(':')[1]
    view_name = "join_%s_%s" % (layer_name, dt.table_name)

    if inner_join:
        view_sql = 'create materialized view %s as select la.*, tb.* from %s as la inner join %s as tb on la."%s" = tb."%s";' % \
            (view_name, layer_name, dt.table_name, layer_attribute.attribute, table_attribute.attribute)
    else:
        view_sql = 'create materialized view %s as select la.*, tb.* from %s as la left join %s as tb on la."%s" = tb."%s";' % \
            (view_name, layer_name, dt.table_name, layer_attribute.attribute, table_attribute.attribute)
    double_view_name = "view_%s" % view_name
    double_view_sql = "create view %s as select * from %s" % (double_view_name, view_name)
    matched_count_sql = 'select count(%s) from %s where %s.%s in (select "%s" from %s);' % (table_attribute.attribute, dt.table_name, dt.table_name, table_attribute.attribute, layer_attribute.attribute, layer_name)
    unmatched_count_sql = 'select count(%s) from %s where %s.%s not in (select "%s" from %s);' \
                          % (table_attribute.attribute, dt.table_name, dt.table_name, table_attribute.attribute, layer_attribute.attribute, layer_name)
    unmatched_list_sql = 'select %s from %s where %s.%s not in (select "%s" from %s) limit 100;' % (table_attribute.attribute, dt.table_name, dt.table_name, table_attribute.attribute, layer_attribute.attribute, layer_name)
    tj, created = TableJoin.objects.get_or_create(datatable=dt, source_layer = layer, table_attribute=table_attribute,
                                                  view_sql=view_sql, layer_attribute=layer_attribute, view_name=double_view_name)

    # Create the View (and double view)
    try:
        db = ogc_server_settings.datastore_db
        conn = psycopg2.connect(
            "dbname='" +
            db['NAME'] +
            "' user='" +
            db['USER'] +
            "'  password='" +
            db['PASSWORD'] +
            "' port=" +
            db['PORT'] +
            " host='" +
            db['HOST'] +
            "'")
        cur = conn.cursor()
        if update_attr is not None:
            cur.execute(update_attr)
        cur.execute('drop view if exists %s;' % double_view_name) 
        cur.execute('drop materialized view if exists %s;' % view_name) 
        cur.execute(view_sql)
        cur.execute(double_view_sql)
        cur.execute(matched_count_sql)
        tj.matched_records_count = cur.fetchone()[0]
        cur.execute(unmatched_count_sql)
        tj.unmatched_records_count = int(cur.fetchone()[0])
        cur.execute(unmatched_list_sql)
        tj.unmatched_records_list = ",".join([r[0] for r in cur.fetchall()])
        tj.join_layer = layer  # Esta asignacion es necesaria para guardar la instancia de tj
        conn.commit()
        conn.close()
        tj.save() # Se guarda la instancia en la BD
    except Exception as e:
        conn.close()
        tj.delete()
        msg =  "Error Joining table %s to layer %s: %s" % (table_name, layer_typename, str(e[0]))
        return None, msg

    # Create the Layer in GeoServer from the view
    try:
        cat = Catalog(settings.OGC_SERVER['default']['LOCATION'] + "rest",
                          _user, _password)
        workspace = cat.get_workspace(settings.DEFAULT_WORKSPACE)
        ds_list = cat.get_xml(workspace.datastore_url)
        datastores = [datastore_from_index(cat, workspace, n) for n in ds_list.findall("dataStore")]
        ds = None
        for datastore in datastores:
            if datastore.name == "datastore":
                ds = datastore
        ft = cat.publish_featuretype(double_view_name, ds, layer.srid, srs=layer.srid)
        cat.save(ft)
    except Exception as e:
        tj.delete()
        msg = "Error creating GeoServer layer for %s: %s" % (view_name, str(e))
        return None, msg
    """
    # Create the Layer in GeoNode from the GeoServer Layer
    try:
        signals.pre_save.disconnect(geoserver_pre_save, sender=Layer)
        layer, created = Layer.objects.get_or_create(name=view_name, defaults={
            "workspace": workspace.name,
            "store": ds.name,
            "storeType": ds.resource_type,
            "typename": "%s:%s" % (workspace.name.encode('utf-8'), ft.name.encode('utf-8')),
            "title": ft.title or 'No title provided',
            "abstract": ft.abstract or 'No abstract provided',
            "uuid": str(uuid.uuid4()),
            "bbox_x0": Decimal(ft.latlon_bbox[0]),
            "bbox_x1": Decimal(ft.latlon_bbox[1]),
            "bbox_y0": Decimal(ft.latlon_bbox[2]),
            "bbox_y1": Decimal(ft.latlon_bbox[3])
        })
        signals.pre_save.connect(geoserver_pre_save, sender=Layer)
        set_attributes(layer, overwrite=True)
        tj.join_layer = layer
        tj.save()
    except Exception as e:
        tj.delete()
        msg = "Error creating GeoNode layer for %s: %s" % (view_name, str(e))
        return None, msg"""

    return tj, ""


def get_valid_name(datatable_name, model='data'):
    """
    Create a brand new name
    """
    name = _clean_string(datatable_name)
    proposed_name = name
    count = 1
    if model == 'custom':
        query = CustomTable.objects.filter(table_name=proposed_name)
        qcount = query.count()
    elif model == 'alf_census':
        query = AlfTable.objects.filter(table_name=proposed_name)
        qcount = query.count()
    else:
        query = DataTable.objects.filter(table_name=proposed_name)
        qcount = query.count()

    while qcount > 0:
        proposed_name = "%s_%d" % (name, count)
        count += 1
        logger.info('Requested name already used; adjusting name '
                    '[%s] => [%s]', datatable_name, proposed_name)
        qcount -= 1
    else:
        logger.info("Using name as requested")

    return proposed_name
