import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
import s from 'components/ImageGallery/ImageGallery.module.css';

function ImageGallery({ images }) {
  return (
    <ul className={s.ImageGallery}>
      {images.map((image, index) => (
        <ImageGalleryItem
          key={index}
          src={image.webformatURL}
          alt={image.tags}
          largeImageURL={image.largeImageURL}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
