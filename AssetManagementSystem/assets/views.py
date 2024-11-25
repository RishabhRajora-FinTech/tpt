from rest_framework import viewsets
from .models import Portfolio, Transaction, POS
from .serializers import PortfolioSerializer, TransactionSerializer, POSSerializer
from django.shortcuts import render


def index(request):
    return render(request, 'index.html')

class PortfolioViewSet(viewsets.ModelViewSet):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer

class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

class POSViewSet(viewsets.ModelViewSet):
    queryset = POS.objects.all()
    serializer_class = POSSerializer
