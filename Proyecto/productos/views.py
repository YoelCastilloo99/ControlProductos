from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProductoSerializer, VentaSerializer
from .models import Producto, Venta

class ProductoView(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()

class VentaView(viewsets.ModelViewSet):
    serializer_class = VentaSerializer
    queryset = Venta.objects.all()
