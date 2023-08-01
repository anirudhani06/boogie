from rest_framework import viewsets, generics, status
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAuthenticatedOrReadOnly,
)
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer
from django.contrib.auth import get_user_model, authenticate

USER = get_user_model()


class UserModelViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = UserSerializer
    queryset = USER.objects.all()
    lookup_url_kwarg = "id"

    def get_serializer_class(self):
        if self.action == "list":
            return UserSerializer
        elif self.action == "register":
            return RegisterSerializer
        elif self.action == "login":
            return LoginSerializer

        return super().get_serializer_class()

    def get_permissions(self):
        if self.action == "list":
            self.permission_classes = [IsAuthenticatedOrReadOnly]
        elif self.action == "register":
            self.permission_classes = [AllowAny]
        elif self.action == "login":
            self.permission_classes = [AllowAny]
        return super().get_permissions()

    def list(self, request, *args, **kwargs):
        serializer = self.get_serializer(self.queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

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

        user = authenticate(username=username, password=password)

        if user is None:
            return Response(
                {"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST
            )

        refresh_token = RefreshToken.for_user(user)
        return Response(
            {"refresh": str(refresh_token), "access": str(refresh_token.access_token)},
            status=status.HTTP_200_OK,
        )
