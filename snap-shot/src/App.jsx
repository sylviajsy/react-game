import { useState } from 'react'
import { Form } from 'react-bootstrap';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='Container'>
      <h1>Photo Snap</h1>
      <div className='search-section'>
        <Form>
          {/* Input */}
          <Form.Control 
          type='search'
          placeholder='Search Anything ...'/>
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

