
from models import Cliente, Pedido

def crear_cliente(nif, nombre, email, activo=True):
    cliente = Cliente.objects.create(
        nif=nif, nombre=nombre, email=email, activo=activo
    )
    return cliente

def crear_pedido(cliente, codigo, importe_total, estado='pendiente'):
    pedido = Pedido.objects.create(
        cliente=cliente,
        codigo=codigo,
        importe_total=importe_total,
        estado=estado,
    )
    return pedido

def buscar_pedidos_minimo_importe(min_importe):
    return Pedido.objects.filter(importe_total=min_importe)

def buscar_clientes_con_pedidos_pagados():
    return Cliente.objects.filter(pedidos__estado='pagado')





".\.venv\Scripts\activate"