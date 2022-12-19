from rest_framework import serializers
from .models import Game


class GameSerializer(serializers.ModelSerializer):
    date_created = serializers.ReadOnlyField()
    image = serializers.SerializerMethodField()

    class Meta(object):
        model = Game
        fields = ('id', 'name', 'date_created', 'description', 'state', 'players', 'image', 'gm')

    def get_image(self, game):
        request = self.context.get('request')
        image = game.image.url
        return request.build_absolute_uri(image)
