from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import requests
import asyncio
import aiohttp
import async_timeout
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import LiveGame
from .serializers import *
from .tasks import call_url


# Client requests today's games
@api_view(['GET'])
def livegames_list(request):
    """
 List  livegames.
 """
    if request.method == 'GET':
        data = []
        livegames = LiveGame.objects.all()

    return Response(
        requests.get('http://api.football-data.org/v1/fixtures/').json()
    )
