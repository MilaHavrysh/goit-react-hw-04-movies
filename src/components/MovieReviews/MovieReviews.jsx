import React, { Component } from 'react';
import styles from './MovieReviews.module.css';
import PropTypes from 'prop-types';

class MovieReviews extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.props.movieId}/reviews?api_key=ef67f56e6a03a8573aa8d4dddcc93e68&language=en-US`,
    )
      .then(response => response.json())
      .then(result => {
        this.setState({ reviews: result.results });
        console.log(result);
      })
      .catch(error => alert('Server connection error'));
  }
  render() {
    return (
      <>
        {this.state.reviews.length !== 0 ? (
          <ul className={styles.reviews_list}>
            {this.state.reviews.map(review => (
              <li key={review.id} className={styles.reviews_list_item}>
                <p className={styles.reviews_author}>AUTHOR:{review.author}</p>
                <p className={styles.reviews_content}>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.reviews_no_reviews}>The film has no reviews</p>
        )}
      </>
    );
  }
}
MovieReviews.propTypes = {
  movieId: PropTypes.number.isRequired,
};
export default MovieReviews;
