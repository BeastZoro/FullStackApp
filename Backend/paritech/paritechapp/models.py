from django.db import models

# Create your models here.

class Products(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
    desc = models.TextField(blank=True)
    image = models.ImageField(upload_to='products_images/')
    offer = models.CharField(max_length=50, blank=True)
    categories = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.name