from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class ExpenseTracker(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    totalbalance = models.FloatField(default=0.00,blank=False)
    income = models.FloatField(default=0.00,blank=False)
    expense = models.FloatField(default=0.00,blank=False)


class History(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    amount = models.FloatField(blank=False)