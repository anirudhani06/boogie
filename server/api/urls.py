from django.urls import path, include


urlpatterns = [
    path("user/", include("account.urls")),
    path("place/", include("place.urls")),
]
