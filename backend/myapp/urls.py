from django.urls import path, include
from rest_framework.routers import DefaultRouter
from myapp.views import FileCreateListAPi, CsvDataTableQuery


router = DefaultRouter()
router.register(r'csv-files', CsvDataTableQuery, basename='csv-files')

urlpatterns = [
    path('file-uploads/', FileCreateListAPi.as_view(), name='file-uploads'),
    path('', include(router.urls)),
]
