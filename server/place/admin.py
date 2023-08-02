from django.contrib import admin
from .models import Place, PlaceImages, Perks

# Register your models here.

admin.site.register([Place, PlaceImages, Perks])
