from django.contrib import admin
from .models import ExpenseTracker,History

# Register your models here.


admin.site.register(ExpenseTracker)
admin.site.register(History)