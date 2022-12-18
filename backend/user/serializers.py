from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    date_joined = serializers.ReadOnlyField()
    profile_pic = serializers.SerializerMethodField()

    class Meta(object):
        model = User
        fields = ('id', 'email', 'nickname', 'date_joined', 'password', 'profile_pic')
        extra_kwargs = {'password': {'write_only': True}}

    def get_profile_pic(self, user):
        request = self.context.get('request')
        profile_pic = user.profile_pic.url
        return request.build_absolute_uri(profile_pic)
