from django.contrib import admin
from .models import Game


class GameAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'players')


admin.site.register(Game, GameAdmin)
