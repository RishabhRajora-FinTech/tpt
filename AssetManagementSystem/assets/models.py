from django.db import models
from django.contrib.auth.models import User

class Portfolio(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name

class Transaction(models.Model):
    portfolio = models.ForeignKey(Portfolio, on_delete=models.CASCADE)
    date = models.DateField()
    asset_name = models.CharField(max_length=100)
    quantity = models.FloatField()
    price = models.FloatField()

    def __str__(self):
        return f"{self.asset_name} - {self.date}"

class POS(models.Model):
    transaction = models.ForeignKey(Transaction, on_delete=models.CASCADE)
    pos_date = models.DateField()
    pos_amount = models.FloatField()

    def __str__(self):
        return f"POS {self.transaction} on {self.pos_date}"
