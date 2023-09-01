from django.urls import path
from . import views

urlpatterns = [
    path("analyze_sentiment/", views.analyze_sentiment_view, name="analyze_sentiment"),
]
