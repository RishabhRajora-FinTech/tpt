from django.db import models
from django.contrib.auth.models import User

class Portfolio(models.Model):
    portfolio_name = models.CharField(max_length=100, unique=True, primary_key=True)
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
        return self.portfolio_name

class Transaction(models.Model):
    fund = models.ForeignKey(Portfolio, to_field='portfolio_code', on_delete=models.CASCADE)
    invnum = models.CharField(max_length=100)
    td_num = models.CharField(max_length=100)
    bank_code = models.CharField(max_length=100)
    broker_code = models.CharField(max_length=100)
    commission = models.DecimalField(max_digits=10, decimal_places=2)
    cusip = models.CharField(max_length=100)
    entry_date = models.DateField()
    modify_date = models.DateField()
    orig_face = models.DecimalField(max_digits=10, decimal_places=2)
    source = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    trade_date = models.DateField()
    tran_type = models.CharField(max_length=100)
    price_currency = models.CharField(max_length=10)
    reviewed_by = models.CharField(max_length=100)
    entered_by = models.CharField(max_length=100)
    confirmed_by = models.CharField(max_length=100)
    version = models.IntegerField()
    entity = models.CharField(max_length=100)

    def __str__(self):
        return f"Transaction {self.invnum} for {self.fund.portfolio_code}"
