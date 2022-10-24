import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchQuery: 'helloy',
  };
  getSearchQueryValue = value => {
    this.setState({
      searchQuery: value,
    });
  };
  componentDidMount(prevState, prevProps) {
    if (this.state.searchQuery) {
      // fetch(
      //   'https://pixabay.com/api/?q=cat&page=1&key=29482011-99768188be0395583a9f1e73d&image_type=photo&orientation=horizontal&per_page=12'
      // );
    }
  }
  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.getSearchQueryValue} />
        <ImageGallery />
      </div>
    );
  }
}
