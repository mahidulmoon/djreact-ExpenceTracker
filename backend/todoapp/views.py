from django.shortcuts import render
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import TodoappSerializer, UserSerializer
from .models import Todoapp

# Create your views here.


class TodoViewSet(viewsets.ModelViewSet):
    queryset=Todoapp.objects.all()
    serializer_class=TodoappSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class=UserSerializer