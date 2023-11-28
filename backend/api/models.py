from django.db import models

class Bank(models.Model):
    symbol = models.CharField(max_length=20)
    goal = models.FloatField()

    def __str__(self):
        return f"{self.symbol} - Goal: {self.goal}"
