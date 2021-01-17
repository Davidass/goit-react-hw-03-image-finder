import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Button.module';

class Button extends Component {
  scroll = () => {
    this.props.onClick();
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 1000);
  };

  render() {
    return (
      <button type="button" className={s.Button} onClick={this.scroll}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};
