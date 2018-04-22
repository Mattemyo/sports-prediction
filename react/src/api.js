import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';

export default {
  liveGames: {
    fetchAll: () => axios.get(`${baseUrl}/livegames`).then((res) => res.data),
    fetchActiveGameDetails: (gameId) =>
      axios.get(`${baseUrl}/livegame/${gameId}`).then((res) => res.data),
    fetchHomeTeamDetails: (homeTeamId) =>
      axios.get(`${baseUrl}/team/${homeTeamId}`).then((res) => res.data),
    fetchAwayTeamDetails: (awayTeamId) =>
      axios.get(`${baseUrl}/team/${awayTeamId}`).then((res) => res.data),
    fetchActiveGamePrediction: (gameId) =>
      axios
        .get(`${baseUrl}/livegame/prediction/${gameId}`)
        .then((res) => res.data)
  },
  competition: {
    fetchActiveCompetition: (competitionId) =>
      axios
        .get(`${baseUrl}/competition/${competitionId}`)
        .then((res) => res.data)
  }
};
