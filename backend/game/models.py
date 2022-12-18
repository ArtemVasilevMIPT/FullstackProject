from django.db import models
from user.models import User


class Game(models.Model):
    id = models.BigIntegerField(primary_key=True)
    date_created = models.DateField()
    name = models.CharField(max_length=40)
    description = models.TextField(max_length=256)
    state = models.JSONField()
    players = models.JSONField()
    image = models.ImageField(default="default_game_pic.jpg")
    gm = models.BigIntegerField()
