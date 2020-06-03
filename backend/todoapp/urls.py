from django.urls import path,include
from rest_framework import routers
from .views import TodoViewSet,UserViewSet,TodolistViewSet,delete_todo,CustomObtainAuthToken

router=routers.DefaultRouter()
router.register('todolist',TodolistViewSet)
router.register('registration',UserViewSet)


urlpatterns=[
    path('',include(router.urls)),
    path('todo/',TodoViewSet),
    path('delete/<int:pk>/',delete_todo),
    path('authenticate/', CustomObtainAuthToken.as_view()),
    #path('user/',Getuser),
]