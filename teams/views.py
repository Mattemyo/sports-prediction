from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import requests
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
# from .tasks import call_url


# Client requests today's games
@api_view(['GET'])
def team_detail(request, team_id):
    """
get team details.
 """

    return Response(
        requests.get(
            'http://api.football-data.org/v1/teams/{}/'.format(team_id),
            headers={
                'X-Auth-Token': 'f8617d5c816742708d7e675a5a76a379'
            }
        ).json()
    )
