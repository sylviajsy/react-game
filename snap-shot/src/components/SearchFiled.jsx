import React from 'react'
import { useRef } from 'react';
import { Form, Button,InputGroup } from 'react-bootstrap';

const SearchFiled = () => {
    // useRef is a React hook that allows you to directly access a DOM element (like an input field) 
    // to get its value without triggering a component re-render.
    const searchInput = useRef(null);
  return (
    <Form>
        <InputGroup>
        {/* <Input> giving styling */}
        <Form.Control 
            type='search'
            placeholder='Search Anything ...'
            ref={searchInput} />
        <Button type="submit">
            Search
        </Button>
        </InputGroup>
    </Form>
  )
}

export default SearchFiled;
