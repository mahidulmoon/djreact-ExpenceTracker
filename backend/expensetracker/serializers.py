from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import ExpenseTracker


class ExpanseTrackerSerializer(serializers.ModelSerializer):
    #user = UserSerializer(required=True)
    class Meta:
        model = ExpenseTracker
        fields = '__all__'