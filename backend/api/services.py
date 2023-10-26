# api/services.py
from binance.spot import Spot
import os, copy
from .logic.logic_service import LogicService

class BinanceAPIManager:
    def __init__(self):
        self.spot = Spot(key=os.environ.get('BINANCE_API_KEY'), secret=os.environ.get('BINANCE_API_SECRET'))

    def get_account(self):
        return LogicService(self.spot.account())

