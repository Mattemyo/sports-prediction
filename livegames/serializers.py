from rest_framework import serializers
from .models import LiveGame


class LiveGameSerializer(serializers.ModelSerializer):

    class Meta:
        model = LiveGame
        fields = ('pk', 'first_name', 'last_name', 'email',
                  'phone', 'address', 'description')
