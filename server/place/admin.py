from django.contrib import admin
from .models import Place, PlaceImage, Availability, Perks

# Register your models here.


@admin.register(Place)
class PlaceAdmin(admin.ModelAdmin):
    list_display = ["host", "title", "price"]


admin.site.register(PlaceImage)
admin.site.register(Availability)
admin.site.register(Perks)
