from rest_framework import serializers
from .models import Producto, Venta
from django.contrib.auth.models import User


class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = ('id', 'empleado', 'nombre', 'descripcion', 'categoria', 'precio')

class VentaSerializer(serializers.ModelSerializer):
    #total = serializers.IntegerField()
    class Meta:
        model = Venta
        fields = '__all__'

class VentaReporteSerializer(serializers.ModelSerializer):
    totalsumve = serializers.IntegerField()
    class Meta:
        model = Producto
        fields = ('nombre', 'descripcion', 'totalsumve')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'username',
            'first_name',
            'last_name',
            'is_superuser',
            'is_staff',
            'email',
            'password',
        )
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        return user