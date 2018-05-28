import React from 'react';

class SearchForm extends React.Component {
  constructor (props) {
    super();

    this.state = { platform: 2 }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.input.value;
    this.input.value = '';
    this.props.addPlayer(name, this.state.platform);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset disabled={this.props.disabled}>
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
    )
  }
};

export default SearchForm;
