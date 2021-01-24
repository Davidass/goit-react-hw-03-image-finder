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
    arePicturesOver: false,
    totalHits: 0,
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

      this.fetchImage(1);
    }
    if (prevPage !== nextPage && nextPage !== 1) {
      this.fetchImage(nextPage);
    }
  }

  fetchImage = page => {
    const { imageName } = this.props;
    this.setState({ status: Status.PENDING });

    pixabayAPI
      .fetchPixabay(imageName, page)
      .then(newImages => {
        if (newImages.total !== 0) {
          this.setState(prevState => ({
            images: [...prevState.images, ...newImages.hits],
            totalHits:
              prevState.totalHits > 0
                ? prevState.totalHits
                : Math.ceil(newImages.totalHits / 12),
            status: Status.RESOLVED,
          }));
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }

        return Promise.reject(new Error('Invalid request'));
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }));
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    this.setState({ arePicturesOver: true });
  };

  render() {
    const { error, status } = this.state;

    if (status === 'idle') {
      return <p>Please enter a value for search images</p>;
    }

    if (status === 'rejected') {
      return <ImagesErrorView message={error.message} />;
    }

    if (status === 'resolved' || status === 'pending') {
      return (
        <>
          <ImageGallery images={this.state.images} />

          {this.state.RESOLVED && (
            <Button onClick={this.onLoadMore} page={this.state.page} />
          )}
        </>
      );
    }
    if (status === 'pending') {
      return <LoaderView />;
    }
  }
}

ImagesInfo.propTypes = {
  imageName: PropTypes.string.isRequired,
};
