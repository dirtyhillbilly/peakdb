from .models import Peak
from rest_framework import serializers
#from rest_framework_gis.serializers import GeoFeatureModelSerializer


class PeakSerializer(serializers.ModelSerializer):
    class Meta:
        model = Peak
        fields = ['name', 'location', 'altitude']
