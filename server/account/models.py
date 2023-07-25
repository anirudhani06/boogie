from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)
import uuid
from django.utils.translation import gettext_lazy as _


class UserManager(BaseUserManager):
    def create_user(self, username, email, password=None, **others):
        if not username:
            raise ValueError(_("Please enter your username"))
        if not email:
            raise ValueError(_("Please enter your email"))
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, **others)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None, **others):
        others.setdefault("is_staff", True)
        others.setdefault("is_superuser", True)

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
    avatar = models.ImageField(upload_to="user", default="default/avatar.jpg")
    email = models.EmailField(max_length=255, unique=True)
    phone = models.CharField(max_length=12, unique=True, blank=True, null=True)
    bio = models.TextField(blank=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    objects = UserManager()

    def __str__(self) -> str:
        return self.username

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["name", "email"]

    class Meta:
        ordering = ["-date_joined"]
        verbose_name = "User"
        verbose_name_plural = "Users"
