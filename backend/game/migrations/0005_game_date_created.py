# Generated by Django 4.1.3 on 2022-12-18 09:46

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0004_game_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='date_created',
            field=models.DateField(default=datetime.datetime(2022, 12, 18, 9, 46, 10, 212641, tzinfo=datetime.timezone.utc)),
            preserve_default=False,
        ),
    ]