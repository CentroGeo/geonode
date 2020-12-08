var NASAGIBS_ViirsEarthAtNight2012_2 = L.tileLayer('http://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
    attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
    bounds: [
        [-85.0511287776, -179.999999975],
        [85.0511287776, 179.999999975]
    ],
    minZoom: 1,
    maxZoom: 8,
    format: 'jpg',
    time: '',
    tilematrixset: 'GoogleMapsCompatible_Level'
});
var NASAGIBS_ModisTerraTrueColorCR_2 = L.tileLayer('http://map1.vis.earthdata.nasa.gov/wmts-webmerc/MODIS_Terra_CorrectedReflectance_TrueColor/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
    attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
    bounds: [
        [-85.0511287776, -179.999999975],
        [85.0511287776, 179.999999975]
    ],
    minZoom: 1,
    maxZoom: 9,
    format: 'jpg',
    time: '',
    tilematrixset: 'GoogleMapsCompatible_Level'
});
var OpenStreetMap_2 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
var CartoDB_DarkMatter_2 = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    subdomains: 'abcd',
    maxZoom: 19
});
var Stamen_Watercolor_2 = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 1,
    maxZoom: 16,
    ext: 'png'
});
var Stamen_TonerBackground_2 = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
});
var Hydda_Full_2 = L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
var Stamen_TerrainBackground_2 = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 18,
    ext: 'png'
});

var roadMutant_2 = L.gridLayer.googleMutant({
    maxZoom: 24,
    type: 'roadmap'
});
var satMutant_2 = L.gridLayer.googleMutant({
    maxZoom: 24,
    type: 'satellite'
});
var terrainMutant_2 = L.gridLayer.googleMutant({
    maxZoom: 24,
    type: 'terrain'
});
var hybridMutant_2 = L.gridLayer.googleMutant({
    maxZoom: 24,
    type: 'hybrid'
});
var styleMutant_2 = L.gridLayer.googleMutant({
    styles: [
        { elementType: 'labels', stylers: [{ visibility: 'off' }] },
        { featureType: 'water', stylers: [{ color: '#444444' }] },
        { featureType: 'landscape', stylers: [{ color: '#eeeeee' }] },
        { featureType: 'road', stylers: [{ visibility: 'off' }] },
        { featureType: 'poi', stylers: [{ visibility: 'off' }] },
        { featureType: 'transit', stylers: [{ visibility: 'off' }] },
        { featureType: 'administrative', stylers: [{ visibility: 'off' }] },
        { featureType: 'administrative.locality', stylers: [{ visibility: 'off' }] }
    ],
    maxZoom: 24,
    type: 'roadmap'
});
var trafficMutant_2 = L.gridLayer.googleMutant({
    maxZoom: 24,
    type: 'roadmap'
});
trafficMutant.addGoogleLayer('TrafficLayer');


var transitMutant_2 = L.gridLayer.googleMutant({
    maxZoom: 24,
    type: 'roadmap'
});
transitMutant.addGoogleLayer('TransitLayer');

var topographic_2 = L.esri.basemapLayer("Topographic"),
    streets_2 = L.esri.basemapLayer("Streets"),
    gray_2 = L.esri.basemapLayer("Gray"),
    nationalgeographic_2 = L.esri.basemapLayer("NationalGeographic"),
    oceans_2 = L.esri.basemapLayer("Oceans"),
    shadedrelief_2 = L.esri.basemapLayer("ShadedRelief"),
    imagery_2 = L.esri.basemapLayer("Imagery"),
    year_url = 'http://imagery.arcgisonline.com/arcgis/rest/services/LandsatGLS/GLS2010_Enhanced/ImageServer';

var landsat10_321_2 = L.esri.imageMapLayer({ url: year_url, opacity: 0.6, position: 'bottomright' }).setBandIds('3,2,1');
var landsat10_432_2 = L.esri.imageMapLayer({ url: year_url, opacity: 0.6, position: 'bottomright' }).setBandIds('4,3,2');

var sismo19s_2 = L.tileLayer.wms('http://idegeo.centrogeo.org.mx/geoserver/ows?', {
    layers: 'geonode:sismo19s',
    format: 'image/png',
    maxZoom: 24,
    attribution: '&copy; <a href="https://www.digitalglobe.com/">DigitalGlobe</a>'
});

var basemapsDict_2 = {
    "osm": [OpenStreetMap_2, 'Open Street Map'],
    "gray": [gray_2, 'Gris'],
    "topographic": [topographic_2, 'Topográfico'],
    "streets": [streets_2, 'Carreteras'],
    "oceans": [oceans_2, 'Oceanos'],
    "shadedRelief": [shadedrelief_2, 'Relieve'],
    "imagery": [imagery_2, 'Satélite'],
    "darkMatter": [CartoDB_DarkMatter_2, 'Negro'],
    "stamenToner": [Stamen_TonerBackground_2, 'Stamen Toner'],
    "stamenTerrain": [Stamen_TerrainBackground_2, 'Modelo Del Terreno Stamen'],
    "stamenWatercolor": [Stamen_Watercolor_2, 'Stamen Watercolor'],
    "natGeo": [nationalgeographic_2, 'National Geographic'],
    "satMutant": [satMutant_2, 'Satélite Google'],
    /*
    "Hydda_Full": Hydda_Full,
    "NASA GIBS Viirs Earth At Night 2012": NASAGIBS_ViirsEarthAtNight2012,
    "NASA GIBS Modis Terra True Color CR": NASAGIBS_ModisTerraTrueColorCR,
    "LandSat 2010 Falso Color": landsat10_321,
    "LandSat 2010 Color Verdadero": landsat10_432,
    "roadMutant": roadMutant,
    "terrainMutant": terrainMutant,
    "hybridMutant": hybridMutant,
    "styleMutant": styleMutant,
    "Tráfico Google": trafficMutant,
    "transitMutant": transitMutant,
    */
};