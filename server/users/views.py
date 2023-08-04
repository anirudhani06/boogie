from rest_framework import viewsets, generics, status
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAuthenticatedOrReadOnly,
)
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import (
    UserSerializer,
    RegisterSerializer,
    LoginSerializer,
    CurrentPasswordSerializer,
    ChangePasswordSerializer,
)
from place.serializers import PlaceSerializer
from place.models import Place
from django.contrib.auth import get_user_model, authenticate

USER = get_user_model()


class UserModelViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = UserSerializer
    queryset = USER.objects.all()
    lookup_url_kwarg = "id"

    def get_instance(self):
        return self.request.user

    def get_serializer_class(self):
        if self.action == "register":
            return RegisterSerializer
        elif self.action == "login":
            return LoginSerializer
        elif self.action == "me" and self.request and self.request.method == "DELETE":
            return CurrentPasswordSerializer
        elif self.action == "change_password":
            return ChangePasswordSerializer
        elif self.action == "places":
            return PlaceSerializer
        elif self.action == "favourites":
            return PlaceSerializer

        return UserSerializer

    def get_permissions(self):
        if self.action == "list":
            self.permission_classes = [IsAuthenticatedOrReadOnly]
        if self.action == "retrieve":
            self.permission_classes = [IsAuthenticated]
        return super().get_permissions()

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    def retrieve(self, request, *args, **kwargs):
        serializer = self.get_serializer(instance=self.get_object())
        data = serializer.data
        data["places"] = PlaceSerializer(
            Place.objects.filter(host=self.get_object()), many=True
        ).data

        return Response(data, status=status.HTTP_200_OK)

    @action(detail=False, methods=["POST"], permission_classes=[AllowAny])
    def register(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=["POST"], permission_classes=[AllowAny])
    def login(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        username = serializer.data.get("username").lower()
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

    @action(detail=False, methods=["POST"], permission_classes=[AllowAny])
    def refresh_token(self, request, *args, **kwargs):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)

            return Response(
                {"access": str(token.access_token)}, status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": "Invalid token or error occured"},
                status=status.HTTP_400_BAD_REQUEST,
            )

    @action(detail=False, methods=["POST"], permission_classes=[IsAuthenticated])
    def logout(self, request, *args, **kwargs):
        try:
            refresh_token = request.data["refresh_token"]
            RefreshToken(refresh_token).blacklist()

            return Response({"message": "logout successful"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(
                {"error": "Invalid token or error occured"},
                status=status.HTTP_400_BAD_REQUEST,
            )

    @action(
        detail=False,
        methods=["GET", "PUT", "PATCH", "DELETE"],
        permission_classes=[IsAuthenticated],
    )
    def me(self, request, *args, **kwargs):
        instance = self.get_instance()
        if request.method == "GET":
            serializer = self.get_serializer(instance)
            return Response(serializer.data, status=status.HTTP_200_OK)
        elif request.method == "PUT":
            serializer = self.get_serializer(instance, data=request.data, partial=False)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        elif request.method == "PATCH":
            serializer = self.get_serializer(instance, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        elif request.method == "DELETE":
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_destroy(instance)
            return Response({}, status=status.HTTP_404_NOT_FOUND)

    @action(detail=False, methods=["POST"], permission_classes=[IsAuthenticated])
    def change_password(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = self.get_instance()
        user.set_password(serializer.data.get("new_password"))
        user.save()

        return Response(
            {"message": "password changes successfuly"}, status=status.HTTP_200_OK
        )

    @action(detail=False, methods=["GET"], permission_classes=[IsAuthenticated])
    def places(self, request, *args, **kwargs):
        my_places = self.get_instance().places.all()
        serializer = self.get_serializer(my_places, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(detail=False, methods=["GET"], permission_classes=[IsAuthenticated])
    def favourites(self, request, *args, **kwargs):
        my_favourites = Place.objects.filter(favourites__user=self.get_instance())
        serializer = self.get_serializer(my_favourites, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
