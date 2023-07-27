from django.db import models
from django.contrib.auth import get_user_model
import uuid

USER = get_user_model()


class Place(models.Model):
    id = models.UUIDField(
        default=uuid.uuid4, primary_key=True, unique=True, editable=False
    )
    host = models.ForeignKey(USER, on_delete=models.CASCADE, related_name="places")
    title = models.CharField(max_length=40)
    image = models.ImageField(upload_to="place", blank=True, null=True)
    location = models.CharField(max_length=100)
    description = models.TextField()
    extra = models.TextField()
    max_guest = models.IntegerField(default=1)
    price = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "place"
        verbose_name_plural = "places"


class PlaceImage(models.Model):
    place = models.ForeignKey(Place, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to="place", blank=True, null=True)

    def __str__(self) -> str:
        return self.image.url

    class Meta:
        verbose_name = "image"
        verbose_name_plural = "images"


class Perks(models.Model):
    place = models.OneToOneField(Place, on_delete=models.CASCADE, related_name="perks")
    wifi = models.BooleanField(default=False)
    workspace = models.BooleanField(default=False)
    parking = models.BooleanField(default=False)
    pets_allowed = models.BooleanField(default=False)
    kitchen = models.BooleanField(default=False)
    pool = models.BooleanField(default=False)
    heating = models.BooleanField(default=False)
    private_entrence = models.BooleanField(default=False)
    washing_machine = models.BooleanField(default=False)
    tv = models.BooleanField(default=False)
    securty_camera = models.BooleanField(default=False)
    air_conditioner = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.place.title

    class Meta:
        verbose_name = "perks"
        verbose_name_plural = "perks"


class Availability(models.Model):
    place = models.ForeignKey(
        Place, on_delete=models.CASCADE, related_name="availability"
    )
    date = models.DateField()

    def __str__(self) -> str:
        return str(self.date.strftime("%Y-%m-%d"))

    class Meta:
        verbose_name = "availability"
        verbose_name_plural = "availability"
