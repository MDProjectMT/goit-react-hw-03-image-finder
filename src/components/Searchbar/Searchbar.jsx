import { Component } from 'react';
import styles from './Searchbar.module.scss';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }
  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form
          className={styles.form}
          onSubmit={evt => this.props.onSubmit(evt, this.state.inputValue)}
        >
          <button type="submit" className={styles.button}>
            <span className={styles.label}>
              <img src="/src/" alt="Loupe" width="10" height="10" />
            </span>
          </button>

          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmite: PropTypes.func,
};
