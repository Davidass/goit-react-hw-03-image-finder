import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from 'components/LoaderView/LoaderView.module.css';

class LoaderView extends Component {
  //other logic
  render() {
    return (
      <Loader
        className={s.loader}
        type="Rings"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000} //3 secs
      />
    );
  }
}

export default LoaderView;
