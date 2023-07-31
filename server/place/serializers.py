from rest_framework import serializers
from .models import Place, PlaceImages, Perks
from django.contrib.auth import get_user_model

USER = get_user_model()


class HostSerializer(serializers.ModelSerializer):
    class Meta:
        model = USER
        fields = ("id", "name")


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlaceImages
        fields = ("image",)


class PerkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Perks
        fields = (
            "wifi",
            "parking",
            "pets_allowed",
            "heating",
            "air_conditioner",
            "private_entrence",
            "tv",
            "washing_machine",
            "pool",
            "kitchen",
            "security_camera",
            "workspace",
        )


class PlaceSerializer(serializers.ModelSerializer):
    host = HostSerializer(read_only=True)
    images = ImageSerializer(many=True, read_only=True)
    uploaded_images = serializers.ListField(
        child=serializers.ImageField(), write_only=True
    )
    uploaded_perks = serializers.JSONField(write_only=True)
    perks = PerkSerializer(read_only=True)

    class Meta:
        model = Place
        fields = (
            "id",
            "host",
            "title",
            "location",
            "image",
            "images",
            "uploaded_images",
            "uploaded_perks",
            "perks",
            "description",
            "extra",
            "startDate",
            "endDate",
            "max_guest",
            "price",
            "created_at",
            "updated_at",
        )

    def create(self, validated_data):
        uploaded_images = validated_data.pop("uploaded_images")
        uploaded_perks = validated_data.pop("uploaded_perks")

        place = Place.objects.create(
            host=self.context["request"].user, **validated_data
        )

        for img in uploaded_images:
            PlaceImages.objects.create(place=place, image=img)

        Perks.objects.create(
            place=place,
            wifi=uploaded_perks.get("wifi"),
            workspace=uploaded_perks.get("workspace"),
            tv=uploaded_perks.get("tv"),
            air_conditioner=uploaded_perks.get("air_conditioner"),
            security_camera=uploaded_perks.get("security_camera"),
            kitchen=uploaded_perks.get("kitchen"),
            parking=uploaded_perks.get("parking"),
            pets_allowed=uploaded_perks.get("pets_allowed"),
            heating=uploaded_perks.get("heating"),
            washing_machine=uploaded_perks.get("washing_machine"),
            private_entrence=uploaded_perks.get("private_entrence"),
            pool=uploaded_perks.get("pool"),
        )
        return place
