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
def competition_table(request, competition_id):
    """
get competition table.
 """

    return Response(
        requests.get(
            'http://api.football-data.org/v1/competitions/{}/leagueTable'.format(
                competition_id),
            headers={
                'X-Auth-Token': 'f8617d5c816742708d7e675a5a76a379'
            }
        ).json()
    )
