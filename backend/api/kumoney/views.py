# api/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .services.kumoney_service import KumoneyService

# One class for each API end point

class GetBankView(APIView):
    def get(self, request, format='json'):
        try:
            bank = KumoneyService.get_bank()
            return Response(bank)
        except Exception as e:  # Es recomendable manejar errores específicos
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
