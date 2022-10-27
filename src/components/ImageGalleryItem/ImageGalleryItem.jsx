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
