import { Component } from 'react';

import { toast } from 'react-toastify';

import { pixabayAPI } from 'services/pixabayAPI';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import { Loader } from 'components/Loader/Loader';
import Button from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    data: [],
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ isLoading: true });

      pixabayAPI(this.props.searchQuery, this.state.page)
        .then(res => {
          if (res.length === 0) {
            toast.error('Oooops( Nothing to show!!!');
          }
          this.setState({
            data: res,
          });
        })
        .catch(() => toast.error('Ooops...try again later'))
        .finally(
          setTimeout(() => {
            this.setState({
              isLoading: false,
            });
          }, 1000)
        );
    }
  }
  render() {
    return (
      <>
        <Gallery>
          <ImageGalleryItem data={this.state.data} />
        </Gallery>
        <Loader visible={this.state.isLoading} />
        {this.state.data.length !== 0 && <Button />}
      </>
    );
  }
}
