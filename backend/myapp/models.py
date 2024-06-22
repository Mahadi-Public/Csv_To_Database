from django.db import models

# Create your models here.
class CsvFile(models.Model):
    trade_code = models.CharField(max_length=255)
    high = models.DecimalField(max_digits=10, decimal_places=1)
    low = models.DecimalField(max_digits=10, decimal_places=1)
    open = models.DecimalField(max_digits=10, decimal_places=1)
    close = models.DecimalField(max_digits=10, decimal_places=1)
    volume = models.IntegerField()
    date = models.DateField()

