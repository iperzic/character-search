import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import SearchBar from '../components/SearchBar';
import CharactersGrid from '../components/CharactersGrid';

import * as appActions from '../actions/app';

const mapStateToProps = state => ({
  characters: state.characters.search.map(c => ({
    ...state.characters.byId[c],
    isBookmark: state.characters.bookmarks.includes(c),
  })),
  bookmarks: state.characters.bookmarks.map(c => ({
    ...state.characters.byId[c],
    isBookmark: true,
  })),
  searchValue: state.searchValue,
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  searchCharacter: value => dispatch(appActions.searchCharacter(value)),
  toggleCharacterBookmark: id => dispatch(appActions.toggleCharacterBookmark(id)),
});

class App extends Component {
  constructor(props) {
    super(props);

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleToggleBookmark = this.handleToggleBookmark.bind(this);
  }

  handleQueryChange(event) {
    const value = event.target.value;
    this.props.searchCharacter(value);
  }

  handleToggleBookmark(id) {
    this.props.toggleCharacterBookmark(id);
  }

  render() {
    return (
      <div className="App">
        {!this.props.error && <SearchBar onQueryChange={this.handleQueryChange} />}
        {!this.props.error &&
        <CharactersGrid
          characters={this.props.searchValue ? this.props.characters : this.props.bookmarks}
          onToggleBookmark={this.handleToggleBookmark}
        />}
        {this.props.error && 'An error has occurred'}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
