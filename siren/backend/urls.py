from django.urls import path
from .api import RegistrationAPI, LoginAPI, UserAPI
from knox import views as knox_views

from .views import GoalsList, GoalsDetail, GoalsUserDetail, HabitsList, HabitsDetail, HabitsUserDetail

urlpatterns = [
    path('goals/', GoalsList.as_view()),
    path('goals/<int:id>/', GoalsDetail.as_view()),
    path('goals/username/<int:username>/', GoalsUserDetail.as_view()),
    path('habits/', HabitsList.as_view()),
    path('habits/<int:id>/', HabitsDetail.as_view()),
    path('habits/username/<int:username>/', HabitsUserDetail.as_view()),
    path('register/', RegistrationAPI.as_view()),
    path('login/', LoginAPI.as_view()),
    path('user/', UserAPI.as_view()),
    path('logout/', knox_views.LogoutView.as_view(), name='knox_logout')
]