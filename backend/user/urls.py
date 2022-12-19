from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from rest_framework import routers
router = routers.DefaultRouter()
router.register('ping', views.PingViewSet, basename="ping")

urlpatterns = [
    path('api/token/access/', TokenRefreshView.as_view(), name='token_get_access'),
    path('api/token/both/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/', include(router.urls)),
    path('api/user/create/', views.CreateUserAPIView.as_view()),
    path('api/user/auth/', views.authenticate_user),
    path('api/user/update/', views.UserRetrieveUpdateAPIView.as_view()),
    path('api/user/get/<id>/', views.UserByIdAPIView.as_view())
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
