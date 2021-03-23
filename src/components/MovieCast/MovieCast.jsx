import React, { Component } from 'react';
import styles from './MovieCast.module.css';
import PropTypes from 'prop-types';

class MovieCast extends Component {
  state = {
    cast: [],
  };
  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.props.movieId}/credits?api_key=ef67f56e6a03a8573aa8d4dddcc93e68&language=en-US`,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.setState({ ...result });
        console.log(result);
      })
      .catch(error => alert('Server connection error'));
  }
  render() {
    return (
      this.state.cast.length !== 0 && (
        <>
          <ul className={styles.cast_list}>
            {this.state.cast.map(actor => (
              <li key={actor.id} className={styles.cast_list_item}>
                {actor.profile_path !== null && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                    alt=""
                    width="150px"
                    hight="170px"
                  />
                )}
                <p className={styles.cast_list_name}>{actor.original_name}</p>
                <p className={styles.cast_list_character}>{actor.character}</p>
              </li>
            ))}
          </ul>
        </>
      )
    );
  }
}

MovieCast.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default MovieCast;
