# Generated by Django 3.0.6 on 2020-06-03 13:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('expensetracker', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='expensetracker',
            name='expense',
            field=models.FloatField(default=0.0),
        ),
        migrations.AlterField(
            model_name='expensetracker',
            name='income',
            field=models.FloatField(default=0.0),
        ),
    ]
