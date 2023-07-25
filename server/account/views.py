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
from .serializers import (
    RegisterSerializer,
    LoginSerializer,
    UserSerializer,
    UserUpdateSerializer,
)
from django.contrib.auth import get_user_model, authenticate


USER = get_user_model()


class UserViewSet(viewsets.ModelViewSet):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer
    queryset = USER.objects.all()
    lookup_field = "id"

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
        elif self.action == "me":
            self.permission_classes = [IsAuthenticated]
        return super().get_permissions()

    def get_serializer_class(self):
        if self.action == "register":
            return RegisterSerializer
        elif self.action == "login":
            return LoginSerializer
        elif self.action == "me" and self.request.method == "GET":
            return UserSerializer
        elif self.action == "me" and (
            self.request.method == "PATCH" or self.request.method == "PUT"
        ):
            return UserUpdateSerializer
        return self.serializer_class

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

    def partial_update(self, request, *args, **kwargs):
        instance = self.get_instance()
        data = request.data
        serializer = self.get_serializer(
            instance=instance, data=data, many=False, partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def update(self, request, *args, **kwargs):
        instance = self.get_instance()
        data = request.data
        serializer = self.get_serializer(
            instance=instance, data=data, many=False, partial=False
        )
        serializer.is_valid(raise_exception=True)

        self.perform_update(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_instance()
        self.perform_destroy(instance)
        return Response({}, status=status.HTTP_204_NO_CONTENT)

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

    @action(detail=False, methods=["GET", "PUT", "PATCH", "DELETE"])
    def me(self, request, *args, **kwargs):
        if request.method == "GET":
            instance = self.get_instance()
            serializer = self.get_serializer(instance)

            return Response(serializer.data, status=status.HTTP_200_OK)
        elif request.method == "PATCH":
            return self.partial_update(request, *args, **kwargs)
        elif request.method == "PUT":
            return self.update(request, *args, *kwargs)
        elif request.method == "DELETE":
            return self.destroy(request, *args, **kwargs)
