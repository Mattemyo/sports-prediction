from django.db import models

# Create your models here.


class Live_Game(models.Model):
    game_id = models.CharField("Game Id", max_length=255)
    competition_id = models.CharField("Competition Id", max_length=255)

    date = models.DateTimeField("Date")
    matchday = models.CharField("Matchday", max_length=2)

    home_team_name = models.CharField("Home Team Name", max_length=255)
    home_team_id = models.CharField("Home Team Id", max_length=255)

    home_team_name = models.CharField("Away Team Name", max_length=255)
    away_team_id = models.CharField("Away Team Id", max_length=255)

    home_team_score = models.CharField("Home Team Score", max_length=255)
    away_team_score = models.CharField("Away Team Score", max_length=255)

    def __str__(self):
        return self.game_id


class Live_Game(models.Model):
