from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("notas/", views.nota_corte, name="notas"),
    path("calcular/", views.calcular, name="calcular")
]