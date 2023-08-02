from django_filters import rest_framework as filters
from .models import Place


class PlaceFilter(filters.FilterSet):
    title = filters.CharFilter(field_name="title", lookup_expr="startswith")
    location = filters.CharFilter(field_name="location", lookup_expr="startswith")
    price = filters.NumberFilter(field_name="price", lookup_expr="exact")
    min_price = filters.NumberFilter(field_name="price", lookup_expr="gte")
    max_price = filters.NumberFilter(field_name="price", lookup_expr="lte")
    guest = filters.NumberFilter(field_name="max_guest", lookup_expr="exact")
    min_guest = filters.NumberFilter(field_name="max_guest", lookup_expr="gte")
    max_guest = filters.NumberFilter(field_name="max_guest", lookup_expr="lte")
    start_date = filters.DateFilter(field_name="startDate", lookup_expr="gte")
    end_date = filters.DateFilter(field_name="endDate", lookup_expr="lte")

    class Meta:
        model = Place
        fields = ("title", "price", "location", "max_guest", "startDate")
