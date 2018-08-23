import React from 'react';
import ApiService from './service';

import SearchForm from './form';
import PlayerList from './playerList.js';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      players: {},
      version: 'd2',
      selectedWeapons: [],
    }
  }

  addPlayer = (name, platform) => {
    ApiService().getBungieId(name, platform)
      .then((response) => {
        const players = this.state.players;
        let newPlayer = response.data.Response[0];
        ApiService().getPvPStats(newPlayer)
          .then((response) => {
            newPlayer = {
              ...newPlayer,
              stats: response.data.Response.mergedAllCharacters.results.allPvP.allTime,
              consoleType: newPlayer.membershipType === 2 ? 'playstation' : 'xbox',
            };
            
            this.setState({
              players: {
                ...players,
                [newPlayer.displayName]: newPlayer,
              },
            });
          })
      })
  }

  removePlayer = (name) => () => {
    const players = this.state.players;
    delete(players[name]);
    this.setState({ players });
  }

  render () {
    return (
      <div className="page-container">
        <h2>Destiny Data</h2>
        <SearchForm disabled={this.state.players.length === 3} addPlayer={this.addPlayer} />
        <PlayerList players={Object.values(this.state.players)} removePlayer={this.removePlayer} />
      </div>
    )
  }
}

export default App;
