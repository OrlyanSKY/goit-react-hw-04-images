import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import {
  SearchForm,
  SearchHead,
  SearchFormBtn,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return toast.error('Enter search query, please!');
    }
    onSubmit(query.toLowerCase());
    setQuery('');
  };

  return (
    <SearchHead>
      <SearchForm onSubmit={handleFormSubmit}>
        <SearchFormBtn type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </SearchFormBtn>

        <Input
          onChange={handleInputChange}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchHead>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
