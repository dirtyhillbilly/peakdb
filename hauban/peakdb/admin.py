from django.contrib import admin
from django.contrib.gis.admin import OSMGeoAdmin
from .models import Peak


@admin.register(Peak)
class PeakAdmin(OSMGeoAdmin):
    list_display = ('name', 'location', 'altitude')
