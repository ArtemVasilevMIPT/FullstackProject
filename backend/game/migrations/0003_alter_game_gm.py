# Generated by Django 4.1.3 on 2022-12-18 08:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0002_game_gm'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='gm',
            field=models.BigIntegerField(default=0),
            preserve_default=False,
        ),
    ]
