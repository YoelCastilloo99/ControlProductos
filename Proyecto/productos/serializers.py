from rest_framework import serializers
from .models import Producto, Venta

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = ('empleado', 'nombre', 'descripcion', 'categoria', 'precio')

class VentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venta
        fields = ('producto', 'cantidad', 'descripcion', 'fecha', 'total', 'comprador')