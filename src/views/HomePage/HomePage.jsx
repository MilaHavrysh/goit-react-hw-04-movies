//import FilmListItem from '../../components/FilmListItem/FilmListItem';
import React, { Component } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import styles from './HomePage.module.css';
import PropTypes from 'prop-types';

class HomePage extends Component {
  state = {
    apiKey: 'ef67f56e6a03a8573aa8d4dddcc93e68',
    trendFilms: [],
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.state.apiKey}`,
    )
      .then(response => response.json())
      .then(res => {
        this.setState({ trendFilms: res.results });
      })
      .catch(error => alert('Server connection error'));
  }
  render() {
    return (
      <>
        <h1 className={styles.home_page_title}>Trending today</h1>
        <MoviesList movies={this.state.trendFilms} url={this.props.match.url} />
      </>
    );
  }
}
HomePage.propTypes = {
  match: PropTypes.object.isRequired,
};
export default HomePage;
//<a href="">{elem.title}</a>
//  <FilmListItem trendUrl={elem} />
