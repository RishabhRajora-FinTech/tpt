from rest_framework import viewsets
from .models import Portfolio
from .serializers import PortfolioSerializer
from django.shortcuts import render


def index(request):
    return render(request, 'index.html')

class PortfolioViewSet(viewsets.ModelViewSet):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer

