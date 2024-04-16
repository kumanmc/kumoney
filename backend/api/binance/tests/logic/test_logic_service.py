from django.test import TestCase
from api.binance.logic.logic_service import LogicService
import os, json

# Command: python manage.py test api.tests.test_logic_service

class TestLogicService(TestCase):
    def setUp(self):
        # Get file with data without filter
        current_path = os.path.abspath(os.path.dirname(__file__))
        test_file = os.path.join(current_path, '../data/account.json')
        with open(test_file, 'r') as file:
            self.data = json.load(file)


    # The rest aim is to check that we filter properly binance results
    # def test_get_account(self):
    #     self.assertEqual(len(self.data['balances']), 550)
    #     response = LogicService.get_account(self.data)
    #     self.assertEqual(len(response['balances']), 5)

