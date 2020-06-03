from django.urls import path,include
from rest_framework import routers
from .views import ExpanseViewSet

router=routers.DefaultRouter()
router.register('expanselist',ExpanseViewSet)



urlpatterns=[
    path('',include(router.urls)),
    
]