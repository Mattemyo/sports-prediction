import axios from 'axios';

export default {
  liveGames: {
    fetchAll: () =>
      axios.get('http://127.0.0.1:8000/api/livegames').then((res) => res),
    fetchActiveGameDetails: (gameId) =>
      axios
        .get(`http://127.0.0.1:8000/api/livegame/${gameId}`)
        .then((res) => res)
  }
};
