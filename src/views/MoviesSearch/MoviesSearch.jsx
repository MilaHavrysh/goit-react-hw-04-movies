import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesList from '../../components/MoviesList/MoviesList';
import PropTypes from 'prop-types';

class MoviesSearch extends Component {
  state = {
    apiKey: 'ef67f56e6a03a8573aa8d4dddcc93e68',
    searchFilms: [],
    inputValue: '',
    query: '',
  };

  onChangeQuery = query => {
    console.log(query);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.state.apiKey}&language=en-US&page=1&include_adult=false&query=${query}`,
    )
      .then(response => response.json())
      .then(res => this.setState({ searchFilms: res.results }))
      .catch(error => alert('Server connection error'));
  };

  render() {
    return (
      <>
        <SearchForm onChangeQuery={this.onChangeQuery} />
        <MoviesList
          movies={this.state.searchFilms}
          url={this.props.match.url}
        />
      </>
    );
  }
}

MoviesSearch.propTypes = {
  match: PropTypes.object.isRequired,
};

export default MoviesSearch;
