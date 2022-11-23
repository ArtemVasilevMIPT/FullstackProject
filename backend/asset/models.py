from django.db import models


class Asset(models.Model):
    id = models.BigIntegerField(primary_key=True)
    #user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=256)
    file = models.FileField()

    def __str__(self) -> str:
        return self.name