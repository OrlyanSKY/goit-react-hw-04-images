import { Component } from 'react';
import { toast } from 'react-toastify';
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

    if (this.state.query.trim() === '') {
      return toast.error('Enter search query, please!', {
        position: 'top-center',
        autoClose: 3000,
      });
    }
    this.props.onSubmit(this.state.query.toLowerCase());
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchHead>
        <SearchForm onSubmit={this.handleFormSubmit}>
          <SearchFormBtn type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </SearchFormBtn>

          <Input
            onChange={this.handleInputChange}
            value={this.state.query}
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
