from django.http import JsonResponse
from .model import analyze_sentiment

def analyze_sentiment_view(request):
    if request.method == "GET":
        text = request.GET.get("text", "")
        sentiment = analyze_sentiment(text)
        return JsonResponse({"sentiment": sentiment})
    else:
        return JsonResponse({"error": "Invalid request method"})
