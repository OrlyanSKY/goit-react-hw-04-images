import { Component } from 'react';
import {
  SearchForm,
  SearchHead,
  SearchFormBtn,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };
  handleInputChange = e => {
    this.setState({
      query: e.currentTarget.value,
    });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=29482011-99768188be0395583a9f1e73d&image_type=photo&orientation=horizontal&per_page=12'
    );
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchHead className="searchbar">
        <SearchForm className="form" onSubmit={this.handleFormSubmit}>
          <SearchFormBtn type="submit" className="button">
            <ButtonLabel className="button-label">Search</ButtonLabel>
          </SearchFormBtn>

          <Input
            onChange={this.handleInputChange}
            value={this.state.query}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchHead>
    );
  }
}
