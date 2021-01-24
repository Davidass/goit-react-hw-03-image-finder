import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pixabayAPI from '../../services/apiPixabay';
import ImagesErrorView from 'components/ImagesErrorView';
import LoaderView from 'components/LoaderView';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImagesInfo extends Component {
  state = {
    images: [],
    page: 1,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({
        page: 1,
        images: [],
        error: null,
        status: Status.IDLE,
      });

      // eslint-disable-next-line no-undef
      fetchImage(1);
    }
    if (prevPage !== nextPage && nextPage !== 1) {
      // eslint-disable-next-line no-undef
      fetchImage(nextPage);
    }
    // eslint-disable-next-line no-undef
    fetchImage = page => {
      const { imageName } = this.props;
      this.setState({ status: Status.PENDING });

      pixabayAPI
        .fetchPixabay(imageName, page)
        .then(newImages => {
          if (newImages.total !== 0) {
            this.setState(prevState => ({
              images: [...prevState.images, ...newImages.hits],
              status: Status.RESOLVED,
            }));
          }

          return Promise.reject(new Error('Invalid request'));
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    };
  }
  onClickLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { error, status } = this.state;

    if (status === 'idle') {
      return <p>Please enter a value for search images</p>;
    }

    if (status === 'pending') {
      return <LoaderView />;
    }

    if (status === 'rejected') {
      return <ImagesErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery images={this.state.images} />
          <Button onClick={this.onClickLoadMore} page={this.state.page} />
        </>
      );
    }
  }
}

ImagesInfo.propTypes = {
  imageName: PropTypes.string.isRequired,
};
