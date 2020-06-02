from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import Todoapp


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['username', 'password','email','first_name','last_name']
        extra_kwargs = {'password': {'write_only':True, 'required':True}}

    
    def create(self,validated_data):
        user=User.objects.create_user(**validated_data)
        user.save()
        Token.objects.create(user=user)
        return user

class TodoappSerializer(serializers.ModelSerializer):
    #user = UserSerializer(required=True)
    class Meta:
        model = Todoapp
        fields = '__all__'