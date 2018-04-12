from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Customer
from .serializers import *


@api_view(['GET'])
def livegames_list(request):
    """
 List  livegames.
 """
    if request.method == 'GET':
        data = []
        livegames = Customer.objects.all()
        

        return Response({'data': serializer.data, 'count': paginator.count, 'numpages': paginator.num_pages, 'nextlink': '/api/livegames/?page=' + str(nextPage), 'prevlink': '/api/livegames/?page=' + str(previousPage)})

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
