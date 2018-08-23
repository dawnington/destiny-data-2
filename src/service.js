import axios from 'axios';

const url = 'https://www.bungie.net/Platform';

const ApiService = () => {
  const instance = axios.create({
    headers: {
      'X-Api-Key': process.env.BUNGIE_API_KEY,
    }
  })

  return {
    getBungieId: (username, consoleType) => (
      instance.get(`${url}/Destiny2/SearchDestinyPlayer/${consoleType}/${username}/`)
    ),
    getPvPStats: (player) => (
      instance.get(`${url}/Destiny2/${player.membershipType}/Account/${player.membershipId}/Stats/`)
    ),
  }
};

export default ApiService;
