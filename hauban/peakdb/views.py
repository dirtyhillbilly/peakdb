from django.shortcuts import render
from rest_framework import viewsets
from rest_framework_gis.filters import InBBoxFilter
from .models import Peak
from .serializers import PeakSerializer


class PeakViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows peaks to be viewed or edited.
    """
    queryset = Peak.objects.all()
    serializer_class = PeakSerializer
    lookup_field = 'name'
    bbox_filter_field = 'location'
    filter_backends = (InBBoxFilter,)
    bbox_filter_include_overlapping = True  # Optional


def homepage(request):
    return render(request, 'peak.html', None)
