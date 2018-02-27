import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import SearchBar from '../components/SearchBar';
import CharactersGrid from '../components/CharactersGrid';

import * as appActions from '../actions/app';

const mapStateToProps = state => ({
  characters: state.characters,
  searchValue: state.searchValue,
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  searchCharacter: value => dispatch(appActions.searchCharacter(value)),
});

class App extends Component {
  constructor(props) {
    super(props);

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleToggleBookmark = this.handleToggleBookmark.bind(this);
  }

  handleQueryChange(event) {
    const value = event.target.value;
    value && this.props.searchCharacter(value);
  }

  handleToggleBookmark(id) {
    console.log(id)
  }

  render() {
    return (
      <div className="App">
        {!this.props.error && <SearchBar onQueryChange={this.handleQueryChange} />}
        {!this.props.error && <CharactersGrid characters={this.props.characters} onToggleBookmark={this.handleToggleBookmark}/>}
        {this.props.error && 'An error has occurred'}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
