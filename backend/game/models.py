from django.db import models

class Game(models.Model):
    id = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=40)
    description = models.TextField(max_length=256)
    state = models.JSONField()
    players = models.JSONField()
    # gm = models.ForeignKey(User, on_delete=models.CASCADE)