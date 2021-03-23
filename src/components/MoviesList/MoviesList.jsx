import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './MoviesList.module.css';
import PropTypes from 'prop-types';

class MoviesList extends Component {
  render() {
    return (
      <>
        <ul className={styles.movie_list}>
          {this.props.movies.map(movie => (
            <li key={movie.id} className={styles.movie_list_item}>
              <Link
                to={{
                  pathname: `movies/${movie.id}`,
                  state: {
                    from: this.props.location,
                  },
                }}
                className={styles.movie_list_link}
              >
                {movie.original_title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

MoviesList.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(MoviesList);
