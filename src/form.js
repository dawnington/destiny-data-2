import React from 'react';
import classNames from 'classnames'

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
    const isPS4 = this.state.platform === 2;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <fieldset disabled={this.props.disabled}>
            <div className="btn-group btn-group-sm" role="group" aria-label="platform">
              <button
                className={classNames('btn btn-sm', { 'btn-primary': isPS4, 'btn-outline-primary': !isPS4 })}
                onClick={this.handlePlatformChange(2)}
                type="button"
              >
                PS4
              </button>
              <button
                className={classNames('btn btn-sm', { 'btn-primary': !isPS4, 'btn-outline-primary': isPS4 })}
                onClick={this.handlePlatformChange(1)}
                type="button"
              >
                XBOX
              </button>
            </div>
            <label htmlFor="username">
              Username:
              <input
                id="username"
                type="text"
                name="username"
                ref={(input) => this.input = input}
              />
            </label>
            <input className="btn btn-primary btn-sm" type="submit" value="Search" />
          </fieldset>
        </div>
      </form>
    )
  }
};

export default SearchForm;
