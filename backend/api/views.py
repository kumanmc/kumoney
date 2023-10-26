# api/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .services import BinanceAPIManager

# One class for each API end point

class AccountInfoView(APIView):
    def get(self, request, format=None):
        try:
            binance_manager = BinanceAPIManager()
            account_info = binance_manager.get_account()
            return Response(account_info)
        except Exception as e:  # Es recomendable manejar errores específicos
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
