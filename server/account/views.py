from rest_framework import status, generics, viewsets
from rest_framework.decorators import action

from rest_framework.permissions import (
    IsAuthenticated,
    IsAuthenticatedOrReadOnly,
    AllowAny,
)
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from .serializers import RegisterSerializer, LoginSerializer
from django.contrib.auth import get_user_model, authenticate


USER = get_user_model()


class UserViewSet(viewsets.ModelViewSet):
    authentication_classes = [JWTAuthentication]
    permission_classes = [AllowAny]
    queryset = USER.objects.all()

    def get_queryset(self):
        queryset = USER.objects.all()
        return queryset

    def get_instance(self):
        return self.request.user

    def get_permissions(self):
        if self.action == "register":
            self.permission_classes = [AllowAny]
        elif self.action == "login":
            self.permission_classes = [AllowAny]
        return super().get_permissions()

    def get_serializer_class(self):
        if self.action == "register":
            return RegisterSerializer
        elif self.action == "login":
            return LoginSerializer
        return self.serializer_class

    @action(detail=False, methods=["POST"])
    def register(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=["POST"])
    def login(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        username = serializer.data.get("username")
        password = serializer.data.get("password")

        user = USER.objects.filter(username=username).first()

        if user is None:
            return Response(
                {"message": "User not found"}, status=status.HTTP_404_NOT_FOUND
            )
        user = authenticate(username=username, password=password)

        if user is None:
            return Response(
                {"message": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST
            )

        refresh = RefreshToken.for_user(user)

        return Response(
            {"refresh": str(refresh), "access": str(refresh.access_token)},
            status=status.HTTP_200_OK,
        )
