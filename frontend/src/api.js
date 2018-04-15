import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';

export default {
  liveGames: {
    fetchAll: () => axios.get(`${baseUrl}/livegames`).then((res) => res),
    fetchActiveGameDetails: (gameId) =>
      axios.get(`${baseUrl}/livegame/${gameId}`).then((res) => res.data)
  }
};
