from django.db import models
from django.contrib.postgres.fields import ArrayField
#from user.models import User


class Game(models.Model):
    date_created = models.DateField()
    name = models.CharField(max_length=40)
    description = models.TextField(max_length=256)
    state = models.JSONField()
    #players = models.JSONField()
    players = ArrayField(models.BigIntegerField(), blank=True)
    image = models.ImageField(default="default_game_pic.jpg")
    gm = models.BigIntegerField()
