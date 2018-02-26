import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import SearchBar from '../components/SearchBar';
import CharactersGrid from '../components/CharactersGrid';

const mapStateToProps = state => ({
  characters: state.characters,
});

const mapDispatchToProps = dispatch => ({});

class App extends Component {
  constructor(props) {
    super(props);

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleToggleBookmark = this.handleToggleBookmark.bind(this);
  }

  handleQueryChange(event) {
    console.log(event.target.value)
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
