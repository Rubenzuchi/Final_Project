from django.db import models

# Create your models here.

class Notas(models.Model):
    curso = models.IntegerField()
    universidad = models.CharField(max_length=100)
    peticion = models.IntegerField()
    grado = models.CharField(max_length=300)
    centro = models.CharField(max_length=300)
    area = models.CharField(max_length=300)
    general = models.FloatField()

    def __str__(self):
        return f"Año {self.curso}, Universidad: {self.universidad}, Grado: {self.grado}"