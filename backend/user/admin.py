from django.contrib import admin
from .models import User


class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'nickname')


admin.site.register(User, UserAdmin)