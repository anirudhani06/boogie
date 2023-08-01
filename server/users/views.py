from rest_framework import viewsets, generics, status
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAuthenticatedOrReadOnly,
)
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import UserSerializer, RegisterSerializer
from django.contrib.auth import get_user_model

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
        return super().get_serializer_class()

    def get_permissions(self):
        if self.action == "list":
            self.permission_classes = [IsAuthenticatedOrReadOnly]
        elif self.action == "register":
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
