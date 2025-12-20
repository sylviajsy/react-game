import React from 'react'
import { useRef } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

const SearchField = ({ onSubmit }) => {
    // useRef is a React hook that allows you to directly access a DOM element (like an input field) 
    // to get its value without triggering a component re-render.
    const searchInput = useRef(null);

    const handleSearch = (event) => {
      event.preventDefault();
      onSubmit(searchInput.current.value,1);
    };
  return (
    <Form onSubmit={handleSearch}>
      {/* Making search bar and search button one line */}
        <InputGroup>
        {/* like <Input>, styling */}
        <Form.Control 
            type='search'
            placeholder='Search Anything ...'
            ref={searchInput} />
        <Button type='submit'>
            Search
        </Button>
        </InputGroup>
    </Form>
  )
}

export default SearchField;
