# Create your tasks here
import requests


def fetchGameDetails(gameId):
     # Request data from active game
    return requests.get(
        'http://api.football-data.org/v1/fixtures/{}/?head2head=999'.format(
            gameId),
        headers={'X-Auth-Token': 'f8617d5c816742708d7e675a5a76a379'}
    ).json()


def calculateResultPercentage(gameId):

    # Destructure data
    data = fetchGameDetails(gameId)

    current_game = data['fixture']

    # Info about previous games
    head2head = data['head2head']

    count, home_team_wins, away_team_wins, draws, previous_games = (
        head2head['count'],
        head2head['homeTeamWins'],
        head2head['awayTeamWins'],
        head2head['draws'],
        head2head['fixtures']
    )

    home_team_name, away_team_name = (
        current_game['homeTeamName'],
        current_game['awayTeamName']
    )

    print('{} is playing against {}'.format(home_team_name, away_team_name))

    # Get percentages of wins, losses, and draws
    return {
        'homeTeamWins': (home_team_wins / count),
        'draws': (draws / count),
        'awayTeamWins': (away_team_wins / count)
    }
    
