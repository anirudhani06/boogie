from .views import PlaceModelViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("", PlaceModelViewSet)
urlpatterns = router.urls
