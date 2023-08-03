from django.contrib import admin
from .models import Place, PlaceImages, Perks, Favourites

# Register your models here.

admin.site.register([Place, PlaceImages, Perks, Favourites])
