import { Component } from 'react';
import { GrSearch } from 'react-icons/Gr';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleNameChange = e => {
    this.setState({ imageName: e.currentTarget.value.tolowerCase() });
  };

  handelFormSubmit = e => {
    e.preventDefault();

    const { imageName } = this.state;

    if (imageName.trim() === '') {
      return toast('Please enter search query');
    }

    this.props.onSubmit(imageName);
    this.setState({ imagesName: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handelFormSubmit}>
          <button type="submit" className={s.SearchFormBtn}>
            {/* <span className={s.SearchForm_button_label}>Search</span> */}
          </button>
          <GrSearch />

          <input
            value={this.state.imageName}
            onChange={this.handleNameChange}
            className={s.SearchForm_input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
