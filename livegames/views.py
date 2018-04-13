from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import LiveGame
from .serializers import *
from .tasks import add


# Client requests today's games
@api_view(['GET'])
def livegames_list(request):
    """
 List  livegames.
 """
    if request.method == 'GET':
        data = []
        livegames = LiveGame.objects.all()

        # request games from football data
        data = add.apply_sync(1, 1)

        # 'http://api.football-data.org/v1/fixtures/'

        serializer = LiveGameSerializer(
            data, context={'request': request}, many=True
        )

        return Response({
            'data': serializer.data
        })

# @api_view(['GET', 'PUT', 'DELETE'])
# def livegames_detail(request, pk):
#     """
#  Retrieve, update or delete a customer by id/pk.
#  """
#     try:
#         customer = Customer.objects.get(pk=pk)
#     except Customer.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'GET':
#         serializer = livegameserializer(customer,context={'request': request})
#         return Response(serializer.data)

#     elif request.method == 'PUT':
#         serializer = livegameserializer(customer, data=request.data,context={'request': request})
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     elif request.method == 'DELETE':
#         customer.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
