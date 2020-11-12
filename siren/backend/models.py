from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Goals(models.Model):
    goal = models.CharField(max_length=100)
    actionOne = models.CharField(max_length=100, unique=True)
    actionTwo = models.CharField(max_length=100, unique=True)
    actionThree = models.CharField(max_length=100, unique=True)
    actionFour = models.CharField(max_length=100, unique=True)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
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
