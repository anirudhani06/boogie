from django.db import IntegrityError
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from django.core.exceptions import ValidationError
from django.contrib.auth.password_validation import validate_password
from django.db import transaction

USER = get_user_model()


class RegisterSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["re_password"] = serializers.CharField(
            style={"input_type": "password"}, write_only=True
        )

    class Meta:
        model = USER
        fields = ("id", "name", "username", "email", "password")

    def validate(self, attrs):
        self.fields.pop("re_password", None)
        re_password = attrs.pop("re_password", None)
        password = attrs.get("password")
        user = USER(**attrs)
        if password == re_password:
            try:
                validate_password(password, user)
            except ValidationError as e:
                error = serializers.as_serializer_error(e)
                raise serializers.ValidationError(error)
            return attrs
        else:
            raise serializers.ValidationError(_("Password not matching"))

    def create(self, validated_data):
        try:
            user = self.perform_create(validated_data)
        except IntegrityError:
            raise ValueError(_("Cannot create user"))
        return user

    def perform_create(self, validated_data):
        user = USER.objects.create_user(**validated_data)

        return user
