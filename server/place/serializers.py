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


class PlaceSerializer(serializers.ModelSerializer):
    host = HostSerializer(read_only=True)
    images = serializers.SerializerMethodField(read_only=True)
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

    def get_images(self, obj):
        return [
            self.context["request"].build_absolute_uri(img) for img in obj.images.all()
        ]
