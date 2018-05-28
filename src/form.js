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
        <div className="form-group">
          <fieldset disabled={this.props.disabled}>
            <label htmlFor="username">Username:
              <input
                id="username"
                type="text"
                name="username"
                ref={(input) => this.input = input}
              />
            </label>
            <button className="btn btn-primary">Search</button>
          </fieldset>
        </div>
      </form>
    )
  }
};

export default SearchForm;
