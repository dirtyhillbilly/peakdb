from django.contrib.gis.db import models


class Peak(models.Model):
    name = models.CharField(max_length=50)
    location = models.PointField()
    altitude = models.FloatField()

    def __str__(self):
        return self.name
