from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from django.utils.translation import gettext_lazy as _
import uuid

# Create your models here.


class UserManager(BaseUserManager):
    def create_user(self, username, email, password=None, **others):
        if username is None:
            raise ValueError(_("username must be set"))
        if email is None:
            raise ValueError(_("email must be set"))
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, **others)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None, **others):
        others.setdefault("is_active", True)
        others.setdefault("is_staff", True)
        others.setdefault("is_superuser", True)

        if others.get("is_active") is False:
            raise ValueError(_("is_active must set True for superuser"))
        if others.get("is_staff") is False:
            raise ValueError(_("is_staff must set True for superuser"))
        if others.get("is_superuser") is False:
            raise ValueError(_("is_superuser must set True for superuser"))

        return self.create_user(username, email, password, **others)


class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(
        default=uuid.uuid4, primary_key=True, unique=True, editable=False
    )
    username = models.CharField(max_length=40, unique=True)
    name = models.CharField(max_length=40)
    email = models.EmailField(max_length=250, unique=True)
    avatar = models.ImageField(upload_to="users/", default="default/avatar.jpg")
    phone = models.CharField(max_length=12, blank=True)
    bio = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    objects = UserManager()

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["name", "email"]

    def __str__(self) -> str:
        return self.username

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "User"
        verbose_name_plural = "Users"
