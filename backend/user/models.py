from django.db import models

class User(models.Model):
    id = models.BigIntegerField(primary_key=True) # User id
    name = models.CharField(max_length=20) # User name
    picture = models.ImageField() # Profile picture
    creation_date = models.DateField()

    def __str__(self) -> str:
        return self.name
