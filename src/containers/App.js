import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import SearchBar from '../components/SearchBar';
import CharactersGrid from '../components/CharactersGrid';

import * as appActions from '../actions/app';

const mapStateToProps = state => ({
  characters: state.characters,
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
        <SearchBar onQueryChange={this.handleQueryChange} />
        <CharactersGrid characters={this.props.characters} onToggleBookmark={this.handleToggleBookmark}/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
