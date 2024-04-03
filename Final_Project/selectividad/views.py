import json
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
from .models import Notas

grados = {}
todos_grados = Notas.objects.all()
for grado in todos_grados:
    if grado.grado not in grados:
        grados[grado.grado] = grado.area

grados = dict(sorted(grados.items()))

grados_nombre = []
for grado in todos_grados:
    if grado.grado not in grados_nombre:
        grados_nombre.append(grado.grado)

grados_nombre.sort()
     
def index(request):
    return render(request, "selectividad/index.html")

def nota_corte(request):
    if request.method == 'POST':
        universidad = request.POST['universidad']
        grado = request.POST['grado']
        año = request.POST['año']
        todasNotas = Notas.objects.filter(universidad__contains=universidad, curso__contains=año, grado__contains=grado)
        return render(request, "selectividad/notas.html", {
        "notas": todasNotas
    })
    else:
        todasNotas = Notas.objects.all()
        return render(request, "selectividad/notas.html", {
            "notas": todasNotas
        })
    
def calcular(request):
    return render(request, "selectividad/calcular.html")