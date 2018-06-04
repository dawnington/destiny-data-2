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

  handlePlatformChange = (platform) => (e) => {
    e.preventDefault()
    this.setState({ platform });
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <fieldset disabled={this.props.disabled}>
            <div className="btn-group btn-group-sm" role="group" aria-label="platform">
              <button
                className={`btn btn${this.state.platform === 1 ? '-outline' : ''}-primary btn-sm`}
                onClick={this.handlePlatformChange(2)}
              >
                PS4
              </button>
              <button
                className={`btn btn${this.state.platform === 2 ? '-outline' : ''}-primary btn-sm`}
                onClick={this.handlePlatformChange(1)}
              >
                XBOX
              </button>
            </div>
            <label htmlFor="username">Username:
              <input
                id="username"
                type="text"
                name="username"
                ref={(input) => this.input = input}
              />
            </label>
            <button className="btn btn-primary btn-sm">Search</button>
          </fieldset>
        </div>
      </form>
    )
  }
};

export default SearchForm;
