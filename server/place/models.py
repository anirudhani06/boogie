from django.db import models
from django.contrib.auth import get_user_model
import uuid

USER = get_user_model()
# Create your models here.


class Place(models.Model):
    id = models.UUIDField(
        default=uuid.uuid4, primary_key=True, unique=True, editable=False
    )
    host = models.ForeignKey(USER, on_delete=models.CASCADE, related_name="places")
    title = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    image = models.ImageField(upload_to="places", blank=True, null=True)
    description = models.TextField()
    extra = models.TextField()
    startDate = models.DateField()
    endDate = models.DateField()
    max_guest = models.IntegerField(default=1)
    price = models.FloatField(default=0.00)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.title

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "place"
        verbose_name_plural = "places"


class PlaceImages(models.Model):
    place = models.ForeignKey(Place, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to="places", blank=True, null=True)
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.image.url

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "place images"
        verbose_name_plural = "place images"


class Perks(models.Model):
    place = models.OneToOneField(Place, on_delete=models.CASCADE, related_name="perks")
    wifi = models.BooleanField(default=False)
    workspace = models.BooleanField(default=False)
    air_conditioner = models.BooleanField(default=False)
    heater = models.BooleanField(default=False)
    parking = models.BooleanField(default=False)
    pets_allowed = models.BooleanField(default=False)
    pool = models.BooleanField(default=False)
    tv = models.BooleanField(default=False)
    kitchen = models.BooleanField(default=False)
    security_camera = models.BooleanField(default=False)
    private_entrence = models.BooleanField(default=False)
    washing_machine = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.place.title

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "perks"
        verbose_name_plural = "perks"


class Favourites(models.Model):
    id = models.UUIDField(
        default=uuid.uuid4, primary_key=True, unique=True, editable=False
    )
    user = models.ForeignKey(USER, on_delete=models.CASCADE, related_name="favourites")
    place = models.ForeignKey(
        Place, on_delete=models.CASCADE, related_name="favourites"
    )
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.place.title

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "favourites"
        verbose_name_plural = "favourites"
