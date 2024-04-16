from django.test import TestCase
from ....models import Bank

class BankModelTests(TestCase):
    def test_create_bank(self):
        # Crea una instancia del modelo Bank
        bank = Bank.objects.create(
            symbol='TEST',
            goal=5000.0
        )

        # Obtiene la instancia del modelo desde la base de datos
        saved_bank = Bank.objects.get(symbol='TEST')

        # Comprueba que los datos almacenados coinciden con los datos proporcionados
        self.assertEqual(saved_bank.symbol, 'TEST')
        self.assertEqual(saved_bank.goal, 5000.0)
