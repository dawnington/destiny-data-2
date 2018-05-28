import React from 'react';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      players: [],
      version: 'd2',
      selectedWeapons: [],
    }
  }

  handleSubmit = (e) => {
    const name = this.input.value;
    debugger
  }

  render () {
    return (
      <div>
        <h2>Destiny Data</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username:
            <input
              id="username"
              type="text"
              name="username"
              ref={(input) => this.input = input}
            />
          </label>
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  }
}

export default App;
