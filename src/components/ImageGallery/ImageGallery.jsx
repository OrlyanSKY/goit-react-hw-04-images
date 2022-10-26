import { Component } from 'react';
import axios from 'axios';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    data: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      return axios
        .get(
          `https://pixabay.com/api/?q=${this.props.searchQuery}&page=1&key=29482011-99768188be0395583a9f1e73d&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(response =>
          this.setState({
            data: response.data.hits,
          })
        );
    }
  }
  render() {
    return (
      <>
        <Gallery>
          <ImageGalleryItem data={this.state.data} />
        </Gallery>
      </>
    );
  }
}
