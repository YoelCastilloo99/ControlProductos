from django.db import models
from django.utils import timezone

class Producto(models.Model):
    empleado = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    nombre = models.CharField(max_length=255)
    descripcion = models.CharField(max_length=255)
    categoria = models.CharField(max_length=255)
    precio = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return self.nombre  #'%s %s'%(self.empleado, self.nombre)


class Venta(models.Model):
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.IntegerField(null=False)
    descripcion = models.CharField(max_length=255, null=True)
    fecha = models.DateTimeField(default=timezone.now)
    total = models.IntegerField(null=False)
    comprador = models.CharField(max_length=255, null=True)

    def __str__(self):
        return '%s'%(self.producto.empleado) 