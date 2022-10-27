import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { pixabayAPI } from 'services/pixabayAPI';

import { Container } from './Container/Container.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import Button from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    items: [],
    loading: false,
    modalShow: false,
    largeImage: '',
  };

  getSearchQueryValue = value => {
    this.setState({
      searchQuery: value,
      page: 1,
      items: [],
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  showModal = image => {
    this.setState({ modalShow: true, largeImage: image });
  };

  async componentDidUpdate(_, prevState) {
    const { page, searchQuery } = this.state;

    if (prevState.page !== page || prevState.searchQuery !== searchQuery) {
      this.setState({ loading: true });
      try {
        const response = await pixabayAPI(searchQuery, page);
        if (response.length === 0) {
          return toast.error('There are no such images!');
        }

        this.setState(prevState => ({
          items: [...prevState.items, ...response],
        }));
      } catch (error) {
        return toast.error('Ooooops...try again later!');
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { items, loading, modalShow, largeImage } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.getSearchQueryValue} />
        <ImageGallery items={items} onClick={this.showModal} />

        {loading && <Loader />}
        {items.length !== 0 && <Button onClick={this.loadMore} />}
        {modalShow && <Modal image={largeImage} />}

        <ToastContainer position="top-center" autoClose={3000} theme="dark" />
      </Container>
    );
  }
}
