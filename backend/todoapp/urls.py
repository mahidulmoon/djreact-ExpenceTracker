from django.urls import path,include
from rest_framework import routers
from .views import TodoViewSet,UserViewSet

router=routers.DefaultRouter()
router.register('todo',TodoViewSet)
router.register('registration',UserViewSet)


urlpatterns=[
    path('',include(router.urls)),
]