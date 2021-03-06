"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from customers import views as customers_views
from livegames import views as livegames_views
from gamepredictor import views as gamepredictor_views
from teams import views as teams_views
from competitions import views as competitions_views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/customers/$', customers_views.customers_list),
    url(r'^api/customers/(?P<pk>[0-9]+)$', customers_views.customers_detail),
    path('api/livegames', livegames_views.livegames_list),
    url(r'^api/livegame/(?P<game_id>[0-9]+)$',
        livegames_views.livegames_detail),
    url(r'^api/livegame/prediction/(?P<game_id>[0-9]+)$',
        gamepredictor_views.games_detail),
    url(r'^api/team/(?P<team_id>[0-9]+)$', teams_views.team_detail),
    url(r'^api/competition/(?P<competition_id>[0-9]+)/leagueTable$',
        competitions_views.competition_table),
    url(r'^', TemplateView.as_view(template_name="main.html")),
]

urlpatterns += [
    url(r'^$', TemplateView.as_view(template_name="main.html"), name='base'),
    url(r'^(?:.*)/?$', TemplateView.as_view(template_name="main.html"), name='base')
]
