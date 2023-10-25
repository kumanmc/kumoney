
from django.http import JsonResponse
from binance.spot import Spot
import os

def account_info(request):
    api_key = os.getenv('BINANCE_API_KEY')
    api_secret = os.getenv('BINANCE_API_SECRET')

    client = Spot(key=api_key, secret=api_secret)
    try:
        info = client.account()
        return JsonResponse(info)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)
