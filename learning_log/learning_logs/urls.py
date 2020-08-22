""" Defins URL patterns for learning_logs """
from django.urls import path 
from . import views

app_name = 'learning_logs'
urlpatterns = [
    # Homepage
    path('', views.index, name='index'),
    # Page to show all topics
    path('topics/', views.topics, name='topics'),
    # Detail page for a single topic
    path('topics<int:topic_id>/', views.topic, name='topic'), !!!STOP POINT!!!!
]