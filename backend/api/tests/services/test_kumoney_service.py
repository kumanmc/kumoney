from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status
from unittest.mock import patch
import json, os

class TestAPI(TestCase):
    def setUp(self):
        self.client = APIClient()

    #Testing '/api/bank/'
    @patch('api.services.kumoney_service.KumoneyService.get_bank')
    def test_get_bank(self, mock_get_account):
        # This test just test that the api connects and returns value because we are mocking
        # data with @patch, so does not matter what we do processing information inside
        # because it overwrites the wole response.

        current_path = os.path.abspath(os.path.dirname(__file__))
        test_file = os.path.join(current_path, '../data/bank.json')
        print(test_file)
        with open(test_file, 'r') as file:
            mock_get_account.return_value = json.load(file)

        url = reverse('get_bank')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), mock_get_account.return_value)

        mock_get_account.assert_called_once()

        # self.assertEqual(len(response.json()['balances']), 9)


