from django.contrib import admin

# Register your models here.
from .models import Goals
admin.site.register(Goals)

from .models import Habits
admin.site.register(Habits)