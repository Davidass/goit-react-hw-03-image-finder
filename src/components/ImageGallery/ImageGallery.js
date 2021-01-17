import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import s from 'components/ImageGallery/ImageGallery.module.css';

function ImageGallery({ images }) {
  return (
    <ul className={s.ImageGallery}>
      {images.map((image, id) => (
        <ImageGalleryItem
          key={id}
          src={image.webformatURL}
          alt={image.tags}
          largeImageUrl={image.largeImageURL}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
