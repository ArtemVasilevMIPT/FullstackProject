from django.contrib import admin
from .models import Asset

class AssetAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'file')

admin.site.register(Asset, AssetAdmin)