from django.shortcuts import render
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import TodoappSerializer, UserSerializer
from rest_framework.authtoken.models import Token
from .models import Todoapp
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# Create your views here.


class TodolistViewSet(viewsets.ModelViewSet):
    queryset=Todoapp.objects.all()
    serializer_class=TodoappSerializer

#     # def get_queryset(self,request, *args, **kwargs):
#     #     token = request.data['token']
#     #     user1 = Token.objects.get(key=token).user
#     #     queryset = Todoapp.objects.filter(user=user1)
#     #     return queryset

#     def post(self,request,*args, **kwargs):
#         token = request.data['token']
#         title = request.data['title']
#         print(token)
#         # user1 = Token.objects.filter(key=token).user
#         # todo = Todoapp(user=user1,title=title)
#         # todo.save()

@api_view(['DELETE'])
def delete_todo(request,pk):
    try:
        result = Todoapp.objects.get(pk=pk)
        

    except Todoapp.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)


    if request.method == 'DELETE':
        result.delete()
        #print(result)
        return Response(status=status.HTTP_204_NO_CONTENT)


# @api_view(['POST'])
# def Getuser(request):
#     if request.method == 'POST':
#         token = request.data['token']
#         user1 = Token.objects.get(key=token).user
#         return Response({ "username":user1 })


@api_view(['GET', 'POST'])
def TodoViewSet(request):
    if request.method == 'GET':
        # data = Student.objects.all()

        # serializer = StudentSerializer(data, context={'request': request}, many=True)

        # return Response(serializer.data)
        pass

    elif request.method == 'POST':
        token = request.data['token']
        title = request.data['title']
        user1 = Token.objects.get(key=token).user
        Todoapp.objects.create(user=user1,title=title)
        return Response(status=status.HTTP_201_CREATED)
        # data = {
        #     'user': user1,
        #     'title': title,
        # }
        # serializer = TodoappSerializer(data=data)
        # if serializer.is_valid():
        #     serializer.save()
        #     return Response(status=status.HTTP_201_CREATED)
            
        #return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserViewSet(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class=UserSerializer
