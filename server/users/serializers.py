from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.db import IntegrityError
from django.db.transaction import atomic
from django.utils.translation import gettext_lazy as _

USER = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = USER
        fields = (
            "id",
            "name",
            "username",
            "avatar",
            "email",
            "phone",
            "bio",
            "created_at",
            "updated_at",
        )


class RegisterSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["re_password"] = serializers.CharField(
            style={"input_type": "password"}, write_only=True
        )

    class Meta:
        model = USER
        fields = ("name", "username", "email", "password")

    def validate(self, attrs):
        self.fields.pop("re_password", None)
        attrs["username"] = attrs.get("username").lower()
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
        raise serializers.ValidationError(_("Password not matching"))

    def create(self, validated_data):
        try:
            user = self.perform_create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError(_("cannot create user"))
        return user

    def perform_create(self, validated_data):
        with atomic():
            user = USER.objects.create_user(**validated_data)
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=20)
    password = serializers.CharField(style={"input_type": "password"}, max_length=20)


class PasswordSerializer(serializers.Serializer):
    new_password = serializers.CharField(style={"input_type": "password"})

    def validate(self, attrs):
        user = getattr(self, "user", None) or self.context["request"].user
        assert user is not None
        try:
            validate_password(attrs["new_password"], user)
        except ValidationError as e:
            error = serializers.as_serializer_error(e)
            raise serializers.ValidationError(error)

        return super().validate(attrs)


class CurrentPasswordSerializer(serializers.Serializer):
    current_password = serializers.CharField(style={"input_type": "password"})

    def validate_current_password(self, value):
        is_valid_password = self.context["request"].user.check_password(value)
        if is_valid_password:
            return value

        raise serializers.ValidationError("Invalid password")


class PasswordRetypeSerializer(PasswordSerializer):
    re_password = serializers.CharField(
        style={"input_type": "password"}, write_only=True
    )

    def validate(self, attrs):
        new_password = attrs["new_password"]
        re_password = attrs["re_password"]

        if new_password == re_password:
            return super().validate(attrs)

        raise serializers.ValidationError(_("Password not macthing"))


class ChangePasswordSerializer(CurrentPasswordSerializer, PasswordRetypeSerializer):
    pass
