from django.contrib import admin
from .models import Game


class GameAdmin(admin.ModelAdmin):
    list_display = ('id', 'date_created', 'name', 'description', 'players', 'gm', 'image')


admin.site.register(Game, GameAdmin)
