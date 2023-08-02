from rest_framework import generics, viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAuthenticatedOrReadOnly,
)
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from .serializers import PlaceSerializer
from .permissions import IsOwnerOrReadOnly
from .models import Place, PlaceImages, Perks
from .filters import PlaceFilter
from .paginations import Pagination


class PlaceModelViewSet(viewsets.ModelViewSet):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    ordering_field = ("created_at",)
    filterset_class = PlaceFilter
    lookup_url_kwarg = "id"
    pagination_class = Pagination

    def get_instance(self):
        return self.request.user

    def get_serializer_class(self):
        return super().get_serializer_class()

    def get_permissions(self):
        if self.action == "list":
            self.permission_classes = [IsAuthenticated]
        elif self.action == "create":
            self.permission_classes = [IsAuthenticated]
        elif (
            self.action == "destroy"
            or self.action == "partial_update"
            or self.action == "update"
        ):
            self.permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
        return super().get_permissions()

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        images = serializer.validated_data.pop("uploaded_images")
        perks = serializer.validated_data.pop("uploaded_perks")
        serializer.validated_data["host"] = self.get_instance()
        place_instance = serializer.save()

        for img in images:
            PlaceImages.objects.create(place=place_instance, image=img)

        Perks.objects.create(place=place_instance, **perks)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)
