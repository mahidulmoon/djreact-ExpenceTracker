from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import ExpenseTracker,History


class ExpanseTrackerSerializer(serializers.ModelSerializer):
    #user = UserSerializer(required=True)
    class Meta:
        model = ExpenseTracker
        fields = '__all__'

class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = History
        fields = '__all__'