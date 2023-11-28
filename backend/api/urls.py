from django.urls import path
from .views import AccountInfoView
from .views import GetBankView

# One line for each endpoint
# path(endPoint url, View object, method name in service)

urlpatterns = [
    path('account/', AccountInfoView.as_view(), name='account_info'),
    path('bank/', GetBankView.as_view(), name='get_bank'),
]
