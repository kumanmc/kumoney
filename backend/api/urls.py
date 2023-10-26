from django.urls import path
from .views import AccountInfoView

urlpatterns = [
    path('account/', AccountInfoView.as_view(), name='account_info'),
]
