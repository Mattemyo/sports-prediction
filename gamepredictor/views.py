from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view

from .tasks import fetchGameDetails

# Create your views here.


@api_view(['GET'])
def games_detail(request, game_id):
    return Response(fetchGameDetails(game_id))
