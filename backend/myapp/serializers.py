from rest_framework import serializers
from myapp.models import CsvFile


class FileUploadSerializer(serializers.Serializer):
    file = serializers.FileField()

class SaveFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CsvFile
        fields = "__all__"

