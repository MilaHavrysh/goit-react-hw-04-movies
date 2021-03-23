import React, { Component } from 'react';
import styles from './SearchForm.module.css';

class SearchForm extends Component {
  state = {
    query: '',
  };

  setInputValue = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query !== '') {
      this.props.onChangeQuery(this.state.query);
      this.setState({ query: '' });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.search_form}>
        <input
          type="input"
          onChange={this.setInputValue}
          className={styles.search_input}
        />
        <button type="submit" className={styles.search_button}>
          Search
        </button>
      </form>
    );
  }
}

export default SearchForm;
