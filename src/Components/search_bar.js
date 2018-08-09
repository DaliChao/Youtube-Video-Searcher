import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <div className="search-bar-title">Search Youtube video here:</div>
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
        <br />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
