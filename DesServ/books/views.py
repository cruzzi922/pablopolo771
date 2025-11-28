
from django.http import JsonResponse 
from django.views.decorators.http import require_http_methods
from .models import Cliente  
import json


def listar_clientes(request):
    clientes = Cliente.objects.all().values('id', 'nombre', 'email')
    return JsonResponse(list(clientes), safe=False)

@require_http_methods(["GET"])
def listar_clientes(request):
    clientes = Cliente.objects.all().values(
        'id', 
        'nombre', 
        'email', 
    )
    return JsonResponse(list(clientes), safe=False)


def crear_cliente(request):
    if request.method == "POST":
        data = json.loads(request.body)
        cliente = Cliente.objects.create(
            nombre=data.get("nombre"),
            email=data.get("email")
        )
        return JsonResponse(
            {"id": cliente.id, "nombre": cliente.nombre, "email": cliente.email},
            status=201
        )
    return JsonResponse({"error": "Método no permitido"}, status=405)