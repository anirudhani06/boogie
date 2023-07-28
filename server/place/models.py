from django.db import models
import uuid
from django.contrib.auth import get_user_model

USER = get_user_model()


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
    max_guest = models.IntegerField(default=1)
    price = models.IntegerField(default=0)
    startDate = models.DateField(auto_now_add=True)
    endDate = models.DateField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "place"
        verbose_name_plural = "places"


class PlaceImages(models.Model):
    place = models.ForeignKey(Place, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to="places", blank=True, null=True)

    def __str__(self) -> str:
        return self.image.url

    class Meta:
        verbose_name = "image"
        verbose_name_plural = "images"
