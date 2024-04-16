# api/binance/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .services.binance_service import BinanceAPIService

# One class for each API end point

class AccountInfoView(APIView):
    def get(self, request, format=None):
        try:
            binance_service = BinanceAPIService()
            account_info = binance_service.get_account()
            return Response(account_info)
        except Exception as e:  # Es recomendable manejar errores específicos
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

