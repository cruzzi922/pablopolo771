from django.urls import path
from . import views

urlpatterns = [
    path('api/clientes/', views.listar_clientes, name='listar_clientes'),
    path('api/clientes/crear/', views.crear_cliente, name='crear_cliente'),
]







