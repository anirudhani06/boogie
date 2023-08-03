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
from .models import Place, PlaceImages, Perks, Favourites
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
        elif self.action == "fav_add":
            self.permission_classes = [IsAuthenticated]
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

    @action(detail=True, methods=["POST"], permission_classes=[IsAuthenticated])
    def fav_add(self, request, *args, **kwargs):
        fav = Favourites.objects.filter(
            user=self.get_instance(), place=self.get_object()
        ).first()

        if fav is None:
            Favourites.objects.create(user=self.get_instance(), place=self.get_object())

            return Response(
                {"message": "place added into your favourite"},
                status=status.HTTP_200_OK,
            )

        return Response(
            {"message": "place already in your favourite"},
            status=status.HTTP_200_OK,
        )

    @action(detail=True, methods=["POST"], permission_classes=[IsAuthenticated])
    def fav_rem(self, request, *args, **kwargs):
        fav = Favourites.objects.filter(
            user=self.get_instance(), place=self.get_object()
        ).first()

        if fav is not None:
            fav.delete()

            return Response(
                {"message": "place removed from  your favourite"},
                status=status.HTTP_200_OK,
            )

        return Response(
            {"message": "place already not in your favourite"},
            status=status.HTTP_200_OK,
        )
