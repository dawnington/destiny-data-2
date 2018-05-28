import axios from 'axios';

const url = 'https://www.bungie.net/Platform';

const ApiService = () => {
  const instance = axios.create({
    headers: {
      'X-Api-Key': 'c1eff700917547f9b7ace07118dd4e84',
    }
  })

  return {
    getBungieId: (username, consoleType) => (
      instance.get(`${url}/Destiny2/SearchDestinyPlayer/${consoleType}/${username}/`)
    ).then(response => response.data.Response[0].membershipId),
  }
};

export default ApiService;
