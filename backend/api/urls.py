from django.urls import path
from .views import AccountInfoView

# One line for each endpoint
# path(endPoint url, View object, method name in service)

urlpatterns = [
    path('account/', AccountInfoView.as_view(), name='account_info'),
]
