import { Component } from 'react';
import PropTypes from 'prop-types';
import pixabayAPI from '../../services/apiPixabay';
import ImagesErrorView from 'components/ImagesErrorView';
import LoaderView from 'components/LoaderView';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

class ImagesInfo extends Component {
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
      this.setState({ page: 1 });
    }

    if (prevName !== nextName || prevPage !== nextPage) {
      this.setState({ status: 'pending' });

      pixabayAPI
        .fetchPixabay(nextName, nextPage)
        .then(newImages => {
          if (newImages.total !== 0) {
            this.setState(prevState => ({
              images: [...prevState.images, ...newImages.hits],
              status: 'resolved',
            }));
            return;
          }

          return Promise.reject(new Error('Invalid request'));
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
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

export default ImagesInfo;
