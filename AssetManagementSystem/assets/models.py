from django.db import models
from django.contrib.auth.models import User


class Portfolio(models.Model):
    
    portfolio_name = models.CharField(max_length=100,unique=True,primary_key = True)
    portfolio_code = models.CharField(max_length=100, unique=True)
    school_number = models.CharField(max_length=100, unique=True)
    full_name = models.CharField(max_length=100)
    portfolio_type = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    type_of_emp = models.CharField(max_length=100)
    father_name = models.CharField(max_length=100)
    mother_name = models.CharField(max_length=100)
    cusp = models.CharField(max_length=100)
    entered_by = models.CharField(max_length=100)
    confirmed = models.CharField(max_length=100)

    def __str__(self):
        return self.portfolio_name.name


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
