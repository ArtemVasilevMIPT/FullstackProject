from django.urls import path, include
from . import views

urlpatterns = [
    path('api/games/get/', views.GetGameByUserAPIView.as_view()),
    path('api/games/create/', views.CreateGameAPIView.as_view())
]
