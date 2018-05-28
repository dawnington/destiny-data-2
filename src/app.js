import React from 'react';
import ApiService from './service';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      players: [],
      version: 'd2',
      selectedWeapons: [],
      platform: 2,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.input.value;
    ApiService().getBungieId(name, this.state.platform)
      .then((response) => {
        const players = this.state.players;
        const newPlayer = response.data.Response[0];
        players.push(newPlayer);
        this.setState({ players });
      })
  }

  render () {
    return (
      <div>
        <h2>Destiny Data</h2>
        <form onSubmit={this.handleSubmit}>
          <fieldset disabled={this.state.players.length === 3}>
            <label htmlFor="username">Username:
              <input
                id="username"
                type="text"
                name="username"
                ref={(input) => this.input = input}
              />
            </label>
            <button>Search</button>
          </fieldset>
        </form>
        <h3>Players</h3>
        <ul>
          {this.state.players.map((player) => {
            return (
              <li>{player.displayName}: {player.membershipId}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default App;
