from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404, HttpResponseRedirect

from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Goals
from .serializers import GoalsSerializer

from .models import Habits
from .serializers import HabitsSerializer

# class ReadOnly(BasePermission):
#     def has_permission(self, request, view):
#         return request.method in SAFE_METHODS

class GoalsList(APIView):

    # permission_classes = [IsAuthenticated|ReadOnly]

    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        goals = Goals.objects.all()
        serializer = GoalsSerializer(goals, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = GoalsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GoalsDetail(APIView):

    permission_classes = [IsAuthenticated]

    def get_object(self, id):
        try:
            return Goals.objects.get(pk=id)
        except Goals.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):
        goal = self.get_object(id)
        serializer = GoalsSerializer(goal)
        return Response(serializer.data)

    def delete(self, request, id, format=None):
        goal = self.get_object(id)
        goal.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class GoalsUserDetail(APIView):

    permission_classes = [IsAuthenticated]

    def get_object(self, username):
        try:
            return Goals.objects.filter(username=username)
        except Goals.DoesNotExist:
            raise Http404

    def get(self, request, username, format=None):
        goal = self.get_object(username)
        serializer = GoalsSerializer(goal, many=True)
        return Response(serializer.data)

class HabitsList(APIView):

    # permission_classes = [IsAuthenticated|ReadOnly]

    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        habits = Habits.objects.all()
        serializer = HabitsSerializer(habits, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = HabitsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class HabitsDetail(APIView):

    permission_classes = [IsAuthenticated]

    def get_object(self, id):
        try:
            return Habits.objects.get(pk=id)
        except Habits.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):
        habits = self.get_object(id)
        serializer = HabitsSerializer(habits)
        return Response(serializer.data)

    def put(self, request, id, format=None):
        habits = self.get_object(id)
        serializer = HabitsSerializer(habits, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, format=None):
        habits = self.get_object(id)
        habits.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class HabitsUserDetail(APIView):

    permission_classes = [IsAuthenticated]

    def get_object(self, username):
        try:
            return Habits.objects.filter(username=username)
        except Habits.DoesNotExist:
            raise Http404

    def get(self, request, username, format=None):
        habits = self.get_object(username)
        serializer = HabitsSerializer(habits, many=True)
        return Response(serializer.data)