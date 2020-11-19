from django.conf.urls import include, url
from django.views.generic import TemplateView


urlpatterns = [
    # configure tools
    url(r'^$', views.farming, name='farming'),
    url(r'^getCropSiap/$', views.getCropSiap, name='getCropSiap'),
    url(r'^getCropList/$', views.getCropList, name='getCropList'),
    url(r'^getCropSiapCharts/$', views.getCropSiapCharts, name='getCropSiapCharts'),
    url(r'^getCropSiapLocationCode/$', views.getCropSiapLocationCode, name='getCropSiapLocationCode'),
    url(r'^updateYears/$', views.updateYears, name='updateYears'),
    url(r'^daca/$', views.daca, name='daca'), 
    url(r'^resetSIAP/$', views.resetSIAP, name='resetSIAP'),
    url(r'^getSumaryCrop/$', views.getSumaryCrop, name='getSumaryCrop'),
    url(r'^getValorNac/$', views.getValorNac, name='getValorNac'),
    url(r'^immigrant/$', views.immigrant, name='immigrant'), 
    url(r'^getCorrelationChart/$', views.getCorrelationChart, name='getCorrelationChart'),
    url(r'^getQueryReturn/$', views.getQueryReturn, name='getQueryReturn'),
    url(r'^getCorrelationChartMun/$', views.getCorrelationChartMun, name='getCorrelationChartMun'),
    url(r'^getTematizerMun/$', views.getTematizerMun, name='getTematizerMun'),
    url(r'^getDataExport/$', views.getDataExport, name='getDataExport'),
    url(r'^immigrant_page/$', views.immigrant_page, name='immigrant_page'), 
    url(r'^mapa1/$', views.mapa1, name='mapa1'), 
    url(r'^mapa2/$', views.mapa2, name='mapa2'), 
    url(r'^mapa3/$', views.mapa3, name='mapa3'), 
    url(r'^mapa4/$', views.mapa4, name='mapa4'), 
    url(r'^mapa5/$', views.mapa5, name='mapa5'), 
    url(r'^mapa6/$', views.mapa6, name='mapa6'), 
    url(r'^mapa7/$', views.mapa7, name='mapa7'), 
    url(r'^mapa8/$', views.mapa8, name='mapa8'), 
    url(r'^mapa9/$', views.mapa9, name='mapa9'), 
    url(r'^mapa10/$', views.mapa10, name='mapa10'), 
    url(r'^mapa11/$', views.mapa11, name='mapa11'), 
    url(r'^mapa12/$', views.mapa12, name='mapa12'), 
    url(r'^mapa13/$', views.mapa13, name='mapa13'), 
    url(r'^mapa14/$', views.mapa14, name='mapa14'), 
    url(r'^mapa15/$', views.mapa15, name='mapa15'), 
    url(r'^mapa16/$', views.mapa16, name='mapa16'), 
    url(r'^mapa17/$', views.mapa17, name='mapa17'), 
    url(r'^mapa18/$', views.mapa18, name='mapa18'), 
    url(r'^mapa19/$', views.mapa19, name='mapa19'), 
    url(r'^mapa20/$', views.mapa20, name='mapa20'), 
    url(r'^mapa21/$', views.mapa21, name='mapa21'), 
    url(r'^mapa22/$', views.mapa22, name='mapa22'), 
    url(r'^mapa23/$', views.mapa23, name='mapa23'), 
    url(r'^mapa24/$', views.mapa24, name='mapa24'), 
    url(r'^mapa25/$', views.mapa25, name='mapa25'), 
    url(r'^mapa26/$', views.mapa26, name='mapa26'), 
    url(r'^mapa27/$', views.mapa27, name='mapa27'), 
    url(r'^mapa28/$', views.mapa28, name='mapa28'), 
    url(r'^mapa29/$', views.mapa29, name='mapa29'), 
    url(r'^mapa30/$', views.mapa30, name='mapa30'), 
    url(r'^mapa31/$', views.mapa31, name='mapa31'), 
    url(r'^mapa32/$', views.mapa32, name='mapa32'), 
    url(r'^mapa33/$', views.mapa33, name='mapa33'), 
    url(r'^mapa34/$', views.mapa34, name='mapa34'), 
]