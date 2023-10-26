# api/services.py
from binance.spot import Spot
import os, copy

class BinanceAPIManager:
    def __init__(self):
        self.spot = Spot(key=os.environ.get('BINANCE_API_KEY'), secret=os.environ.get('BINANCE_API_SECRET'))

    def get_account(self):
        data = self.spot.account()
        response = copy.deepcopy(data)

        response['balances'] = [
            balance for balance in data['balances']
            if float(balance["free"]) > 0.0 or float(balance['locked']) > 0.0
        ]

        # print(len(response['balances']))

        # print(self.json())
        # if response.status_code != 200:
        #     # Puedes manejar errores específicos y lanzar excepciones personalizadas si lo deseas
        #     raise Exception("Error querying Binance API - Status code: {}".format(response))
        
        # Asegúrate de devolver la información que necesitas, aquí estamos asumiendo que es un JSON
        return response