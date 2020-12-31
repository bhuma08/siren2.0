from django.db import models
from django.contrib.auth.models import User


# Create your models here.

# import datetime

# datetime_str = '2016-05-18T15:37:36.993048Z'
# old_format = '%Y-%m-%dT%H:%M:%S.%fZ'
# new_format = '%d-%m-%Y %H:%M:%S'

# start_time = datetime.datetime.strptime(datetime_str, old_format).strftime(new_format)


class Goals(models.Model):
    goal = models.CharField(max_length=100)
    actionOne = models.CharField(max_length=100, unique=True)
    actionTwo = models.CharField(max_length=100, unique=True)
    actionThree = models.CharField(max_length=100, unique=True)
    actionFour = models.CharField(max_length=100, unique=True)
    start_time = models.DateField()
    end_time = models.DateField()
    created_date = models.DateTimeField(auto_now_add=True)
    username = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.goal


class Habits(models.Model):
    habit = models.CharField(max_length=100)
    frequency = models.IntegerField() 
    progress = models.DecimalField(default=0, max_digits=5, decimal_places=2) 
    complete = models.BooleanField(default=False)
    username = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.habit
