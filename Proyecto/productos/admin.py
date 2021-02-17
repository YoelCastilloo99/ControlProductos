from django.contrib import admin
from .models import Producto, Venta

admin.site.register(Producto)
admin.site.register(Venta)
#@admin.register(Producto)
#class AdminProducto(admin.ModelAdmin):
#    list_display = ('nombre', 'categoria',)
#    list_filter = ('nombre', 'categoria',)
