import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  getSearchQueryValue = value => {
    this.setState({
      searchQuery: value,
    });
  };

  componentDidMount(prevState, prevProps) {}

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
        <ImageGallery searchQuery={this.state.searchQuery} />

        <ToastContainer position="top-center" autoClose={3000} theme="dark" />
      </div>
    );
  }
}
