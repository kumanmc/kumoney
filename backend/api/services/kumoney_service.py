from ..models import Bank
from django.core.serializers import serialize

class KumoneyService:

    def get_bank():
        data = list(Bank.objects.values())
        return data
