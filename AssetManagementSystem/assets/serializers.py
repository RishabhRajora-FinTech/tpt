from rest_framework import serializers
from .models import Portfolio, Transaction, POS

class PortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portfolio
        fields = '__all__'

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'

class POSSerializer(serializers.ModelSerializer):
    class Meta:
        model = POS
        fields = '__all__'
