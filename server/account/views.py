from rest_framework import status, generics, viewsets
from rest_framework.decorators import action

from rest_framework.permissions import (
    IsAuthenticated,
    IsAuthenticatedOrReadOnly,
    AllowAny,
)
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.response import Response
from .serializers import RegisterSerializer
from django.contrib.auth import get_user_model

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
        return super().get_permissions()

    def get_serializer_class(self):
        if self.action == "register":
            return RegisterSerializer
        return self.serializer_class

    @action(detail=False, methods=["POST"])
    def register(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
