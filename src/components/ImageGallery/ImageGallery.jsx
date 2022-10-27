import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ items, onClick }) => {
  return (
    <>
      <Gallery>
        <ImageGalleryItem items={items} onClick={onClick} />
      </Gallery>
    </>
  );
};
