import { useRef, useState } from 'react'
import { Form } from 'react-bootstrap';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)
  // useRef is a React hook that allows you to directly access a DOM element (like an input field) 
  // to get its value without triggering a component re-render.
  const searchInput = useRef(null);
  return (
    <div className='Container'>
      <h1>Photo Snap</h1>
      <div className='search-section'>
        <Form>
          {/* <Input> giving styling */}
          <Form.Control 
          type='search'
          placeholder='Search Anything ...'
          ref={searchInput}/>
        </Form>
      </div>
    </div>
  )
}

export default App

// To-dos

// Parent Component
// 1. Home page
// - Display a default set of photos
// - Fetch photos when page loads
// - Show PhotoGrid
// - Fetch logic

// Child Component
// 1. Header -> Search
// 2. Show PhotoGrid
// 3. Photos found successfully
// 4. No result found

