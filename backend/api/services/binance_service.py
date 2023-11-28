# api/services.py
from binance.spot import Spot
import os
from ..logic.logic_service import LogicService

class BinanceAPIService:
    def __init__(self):
        self.spot = Spot(key=os.environ.get('BINANCE_API_KEY'), secret=os.environ.get('BINANCE_API_SECRET'))

    def get_account(self):
        return LogicService.get_account(self.spot.account())


