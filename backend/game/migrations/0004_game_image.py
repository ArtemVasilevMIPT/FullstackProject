# Generated by Django 4.1.3 on 2022-12-18 09:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0003_alter_game_gm'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='image',
            field=models.ImageField(default='default_game_pic.jpg', upload_to=''),
        ),
    ]