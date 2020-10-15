from django.urls import path
from .api import RegistrationAPI, LoginAPI, UserAPI

from .views import GoalsList, GoalsDetail, GoalsUserDetail

urlpatterns = [
    path('', GoalsList.as_view()),
    path('<int:id>/', GoalsDetail.as_view()),
    path('username/<int:username>/', GoalsUserDetail.as_view()),
    path('register/', RegistrationAPI.as_view()),
    path('login/', LoginAPI.as_view()),
    path('user/', UserAPI.as_view())
]