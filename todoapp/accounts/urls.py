from django.urls import path, include

from knox.views import LogoutView

from .api import UserAPIView, RegisterAPIView, LoginAPIView

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/user', UserAPIView.as_view()),
    path('api/auth/register', RegisterAPIView.as_view()),
    path('api/auth/login', LoginAPIView.as_view()),
    path('api/auth/logout', LogoutView.as_view(), name='knox_logout')
]
