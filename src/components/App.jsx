import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { pixabayAPI } from 'services/pixabayAPI';

import { Container } from './Container/Container.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    getItems();
    async function getItems() {
      setLoading(true);
      try {
        const response = await pixabayAPI(searchQuery, page);
        setTotalHits(response.totalHits);
        if (response.hits.length === 0) {
          return toast.error('There are no such images!');
        }
        setItems(prevState => [...prevState, ...response.hits]);
      } catch (error) {
        return toast.error('Ooooops...try again later!');
      } finally {
        setLoading(false);
      }
    }
  }, [page, searchQuery]);

  const getSearchQueryValue = value => {
    setSearchQuery(value);
    setPage(1);
    setItems([]);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const showModal = image => {
    setLargeImage(image);
    toggleModal();
  };

  const toggleModal = () => {
    setModalShow(prevState => !prevState);
  };

  return (
    <Container>
      <Searchbar onSubmit={getSearchQueryValue} />
      <ImageGallery items={items} onClick={showModal} />

      <Loader visible={loading} />
      {items.length !== 0 && items.length < totalHits && (
        <Button onClick={loadMore} />
      )}
      {modalShow && <Modal image={largeImage} onClose={toggleModal} />}

      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
    </Container>
  );
};
