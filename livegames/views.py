from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import requests
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import LiveGame
# from .tasks import call_url


# Client requests today's games
@api_view(['GET'])
def livegames_list(request):
    """
 List  livegames.
 """
    # if request.method == 'GET':
    #     data = []
    #     livegames = LiveGame.objects.all()

    return Response(
        requests.get('http://api.football-data.org/v1/fixtures/',
                     headers={
                         'X-Auth-Token': 'f8617d5c816742708d7e675a5a76a379'
                     }
                     ).json()
    )

@api_view(['GET'])
def livegames_detail(request, game_id):
    return Response(
        requests.get('http://api.football-data.org/v1/fixtures/{}'.format(game_id),
                     headers={
            'X-Auth-Token': 'f8617d5c816742708d7e675a5a76a379'
        }
        ).json()
    )
