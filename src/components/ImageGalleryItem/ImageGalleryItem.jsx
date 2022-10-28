import PropTypes from 'prop-types';
import { Image, ImageItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ items, onClick }) => {
  return (
    <>
      {items.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageItem key={id}>
          <Image
            src={webformatURL}
            alt={tags}
            onClick={() => onClick(largeImageURL)}
          />
        </ImageItem>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
