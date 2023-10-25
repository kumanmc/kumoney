from django.urls import path
from .views import account_info

urlpatterns = [
    path('account/', account_info, name='account_info'),
]
