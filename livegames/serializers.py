from rest_framework import serializers
from .models import LiveGame

# TODO: change fields


class LiveGameSerializer(serializers.ModelSerializer):

    class Meta:
        model = LiveGame
        fields = (
            "Game Id", 'Competition Id', 'Date', 'Matchday',
            'Home Team Name', 'Home Team Id', 'Away Team Name',
            "Away Team Id", "Home Team Score", "Away Team Score"
        )
