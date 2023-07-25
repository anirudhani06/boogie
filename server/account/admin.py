from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth import get_user_model

# Register your models here.
USER = get_user_model()


@admin.register(USER)
class UserAdmin(admin.ModelAdmin):
    list_display = ["username", "name", "email", "is_superuser", "avatar"]


# Unregister your models here.
admin.site.unregister(Group)
