from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from django.db.models import Q
from .models import Game
from user.models import User
from .serializers import GameSerializer


class CreateGameAPIView(APIView):
    def post(self, request):
        game = request.data
        serializer = GameSerializer(date=game)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class GetGameByUserAPIView(APIView):
    serializer_class = GameSerializer

    def get(self, request):
        user_id = int(request.GET.get('user'))
        all = request.GET.get('all')
        result = Game.objects.filter(Q(gm=user_id) | Q(players__contains=[{'players': user_id}]))
        if all == 'false':
            result = result[:3]

        result_dict = {'game_list': []}
        for game in result:
            serializer = self.serializer_class(game, context={"request": request})
            result_dict['game_list'].append(serializer.data)

        return Response(result_dict, status=status.HTTP_200_OK)
