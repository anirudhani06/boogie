from rest_framework import serializers
from .models import Place, PlaceImages, Perks
from django.contrib.auth import get_user_model

USER = get_user_model()


class HostSerializer(serializers.ModelSerializer):
    class Meta:
        model = USER
        fields = ("id", "name")


class PerkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Perks
        exclude = ("id", "created_at", "place")


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlaceImages
        fields = ("id", "image")


class PlaceSerializer(serializers.ModelSerializer):
    host = HostSerializer(read_only=True)
    images = ImageSerializer(read_only=True, many=True)
    uploaded_images = serializers.ListField(
        child=serializers.ImageField(
            max_length=1000, allow_empty_file=False, use_url=False
        ),
        write_only=True,
    )
    perks = PerkSerializer(read_only=True)
    uploaded_perks = serializers.JSONField(write_only=True)

    class Meta:
        model = Place
        fields = "__all__"
