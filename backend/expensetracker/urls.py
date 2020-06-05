from django.urls import path,include
from rest_framework import routers
from .views import ExpanseViewSet,HistoryViewSet

router=routers.DefaultRouter()
router.register('expanselist',ExpanseViewSet)
router.register('history',HistoryViewSet)



urlpatterns=[
    path('',include(router.urls)),
    
]