from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register("", views.UserViewSet)
urlpatterns = router.urls

urlpatterns += [
    path("<str:id>/", views.UserViewSet.retrieve),
]
