import React from 'react';
import ApiService from './service';

import SearchForm from './form';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      players: [],
      version: 'd2',
      selectedWeapons: [],
    }
  }

  addPlayer = (name, platform) => {
    ApiService().getBungieId(name, platform)
      .then((response) => {
        const players = this.state.players;
        const newPlayer = response.data.Response[0];
        players.push(newPlayer);
        this.setState({ players });
      })
  }

  render () {
    return (
      <div className="page-container">
        <h2>Destiny Data</h2>
        <SearchForm disabled={this.state.players.length === 3} addPlayer={this.addPlayer} />
        <h3>Players</h3>
        <ul>
          {this.state.players.map((player) => {
            return (
              <li key={player.membershipId}>{player.displayName}: {player.membershipId}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default App;
