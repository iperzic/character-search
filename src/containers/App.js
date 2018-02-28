import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import SearchBar from '../components/SearchBar';
import CharactersGrid from '../components/CharactersGrid';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';

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
  searchValue: state.app.searchValue,
  error: state.app.error,
  metadata: state.metadata,
  loading: state.app.loading,
});

const mapDispatchToProps = dispatch => ({
  searchCharacter: value => dispatch(appActions.searchCharacter(value)),
  toggleCharacterBookmark: id => dispatch(appActions.toggleCharacterBookmark(id)),
  changePage: offset => dispatch(appActions.changePage(offset)),
});

class App extends Component {
  constructor(props) {
    super(props);

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleToggleBookmark = this.handleToggleBookmark.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handleQueryChange(event) {
    const value = event.target.value;
    this.props.searchCharacter(value);
  }

  handleToggleBookmark(id) {
    this.props.toggleCharacterBookmark(id);
  }

  handlePageChange(offset) {
    this.props.changePage(offset);
  }

  render() {
    const isLoading = this.props.loading;
    const shouldPaginationDisplay = this.props.searchValue && !isLoading;
    return (
      <div className="App">
        {isLoading && <Loading />}
        <SearchBar onQueryChange={this.handleQueryChange} />
        {!isLoading && <CharactersGrid
          characters={this.props.searchValue ? this.props.characters : this.props.bookmarks}
          onToggleBookmark={this.handleToggleBookmark}
        />}
        {shouldPaginationDisplay && <Pagination metadata={this.props.metadata} onPageChange={this.handlePageChange} />}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
