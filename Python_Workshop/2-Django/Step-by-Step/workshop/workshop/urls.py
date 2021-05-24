from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('events.urls')),  # Must be last in the list, else Django will always take this path
]
