import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import routes from '../../routes';
import styles from './DetailsMovies.module.css';
import PropTypes from 'prop-types';

class DetailsMovies extends Component {
  state = {
    original_title: '',
    genres: [],
    poster_path: '',
    overview: '',
    id: null,
  };

  hadleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      history.push(location.state.from);
    } else {
      history.push(routes.home);
    }
    //history.push(location?.state?.from || routes.home);
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=ef67f56e6a03a8573aa8d4dddcc93e68&language=en-US`,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.setState({ ...result });
      });
  }

  render() {
    return (
      this.state.original_title !== '' && (
        <>
          <div className={styles.movie_card}>
            <button
              type="button"
              onClick={this.hadleGoBack}
              className={styles.movie_card_button}
            >
              Go back
            </button>
            <div className={styles.movie_container}>
              <img
                className={styles.movie_card_img}
                src={`https://image.tmdb.org/t/p/w500/${this.state.poster_path}`}
                alt=""
              />
              <div className={styles.movie_container_wrapper}>
                <h1 className={styles.movie_title}>
                  {this.state.original_title}
                </h1>
                <p>User score: {this.state.vote_average * 10} %</p>
                <h2>Owerviev</h2>
                <p className={styles.movie_overview}>{this.state.overview}</p>
                <h2>Genres</h2>
                <ul className={styles.movie_genres_list}>
                  {this.state.genres.map(genre => (
                    <li
                      key={genre.id}
                      className={styles.movie_genres_list_item}
                    >
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <h3 className={styles.movie_add_inform}>Additional information</h3>
            <ul className={styles.movie_add_inform_list}>
              <li className={styles.movie_add_inform_list_item}>
                <Link
                  to={`${this.props.match.url}/cast`}
                  className={styles.movie_add_inform_list_link}
                >
                  Cast
                </Link>
              </li>
              <li className={styles.movie_add_inform_list_item}>
                <Link
                  to={`${this.props.match.url}/reviews`}
                  className={styles.movie_add_inform_list_link}
                >
                  Reviews
                </Link>
              </li>
            </ul>
            <Switch>
              <Route
                path={`${this.props.match.url}/cast`}
                render={props => <MovieCast movieId={this.state.id} />}
              />
              <Route
                path={`${this.props.match.url}/reviews`}
                render={props => <MovieReviews movieId={this.state.id} />}
              />
            </Switch>
          </div>
        </>
      )
    );
  }
}

DetailsMovies.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
export default DetailsMovies;
//onClick={() =>
//this.props.history.push(this.props.location.state.from)
