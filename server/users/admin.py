from django.contrib import admin
from django.contrib.auth.models import Group
from .models import User

# Register your models here.
admin.site.register(User)
# Unregister your model here.
admin.site.unregister(Group)
