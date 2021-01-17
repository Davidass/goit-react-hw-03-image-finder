import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from 'components/Modal/Modal.module';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidmount');
    window.addEventListener('keydown', this.handleKeDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeDown);
  }

  hendleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handelBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props;
    return createPortal(
      <div className={s.Overlay} onClick={this.handelBackdropClick}>
        <div className={s.Modal}>
          <img src={src} alt={alt} />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Modal;
