
from django.db import models
from django.http import JsonResponse
from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey('Author', on_delete=models.CASCADE)

class Author(models.Model):
    name = models.CharField(max_length=100)


class Cliente(models.Model):
    nif = models.CharField(max_length=20, unique=True)
    nombre = models.CharField(max_length=100)
    email = models.EmailField()
    activo = models.BooleanField(default=True)
    fecha_alta = models.DateField(auto_now_add=True)

    def pedidos_por_estado(self, estado):
        """Devuelve los pedidos de un cierto estado."""
        return self.pedidos.filter(estado=estado)

    def total_pagado(self):
        "Suma el importe de los pedidos pagados."
        return self.pedidos.filter(estado='pagado').aggregate(
            total=models.Sum('importe_total')
        )['total'] or 0

    def activar(self):
        self.activo = True
        self.save()

    def desactivar(self):
        self.activo = False
        self.save()

    def __str__(self):
        return f"{self.nombre} ({self.nif})"

class Pedido(models.Model):
    ESTADOS = [
        ('pendiente', 'Pendiente'),
        ('pagado', 'Pagado'),
        ('cancelado', 'Cancelado'),
    ]
    codigo = models.CharField(max_length=15, unique=True)
    fecha = models.DateField(auto_now_add=True)
    importe_total = models.DecimalField(max_digits=10, decimal_places=2)
    estado = models.CharField(max_length=10, choices=ESTADOS)
    cliente = models.ForeignKey(
        Cliente, related_name='pedidos', on_delete=models.CASCADE
    )

    def es_valido(self):
        return self.importe_total > 0

    def marcar_como_pagado(self):
        self.estado = 'pagado'
        self.save()

    def cambiar_importe(self, nuevo_importe):
        self.importe_total = nuevo_importe
        self.save()

    def __str__(self):
        return f"{self.codigo} · {self.estado} · {self.importe_total}"
    

def lista_clientes(request):
    clientes = list(Cliente.objects.values())
    return JsonResponse(clientes, safe=False)


    
    
