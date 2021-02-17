from rest_framework import status
from productos.serializers import ProductoSerializer, VentaSerializer, UserSerializer, VentaReporteSerializer
from productos.models import Producto, Venta
from rest_framework.decorators import action
from django.contrib.auth.models import User
from rest_framework.response import Response 
from rest_framework.viewsets import GenericViewSet #reportes
from django.db.models import Sum, Avg

class reportesViewSet(GenericViewSet):
    #queryset = User.objects.all()
    @action(methods=['get'], detail=False)
    def reporteunodostres(self, request):

        #total de ventas global
        totalventas = Venta.objects.aggregate(totalsum = Sum('total'))['totalsum']

        #total de ventas por producto
        totalventasproduc = Producto.objects.annotate(totalsumve = Sum('venta_producto__total'))

        #promedio de precios por producto
        promedio_precios = Producto.objects.values('empleado__username').annotate( promedio =  Avg('precio')).order_by('empleado')

        data={
            'totalventasproduc':VentaReporteSerializer(totalventasproduc, many=True).data,
            'totalventas':totalventas,
            'promedio_precios':promedio_precios,
        }
        return Response(data, status=status.HTTP_200_OK)