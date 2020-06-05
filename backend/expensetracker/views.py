from django.shortcuts import render
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import ExpanseTrackerSerializer,HistorySerializer
from rest_framework.authtoken.models import Token
from .models import ExpenseTracker,History
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.authtoken.views import ObtainAuthToken

# Create your views here.

class ExpanseViewSet(viewsets.ModelViewSet):
    queryset=ExpenseTracker.objects.all()
    serializer_class=ExpanseTrackerSerializer


class HistoryViewSet(viewsets.ModelViewSet):
    queryset = History.objects.all()
    serializer_class = HistorySerializer