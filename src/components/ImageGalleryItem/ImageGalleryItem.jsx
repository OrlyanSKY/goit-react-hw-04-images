import { Image, ImageItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ data }) => {
  return (
    <>
      {data.map(({ id, webformatURL, tags }) => (
        <ImageItem key={id}>
          <Image src={webformatURL} alt={tags} />
        </ImageItem>
      ))}
    </>
  );
};
