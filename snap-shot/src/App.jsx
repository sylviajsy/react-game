import { useState } from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchFiled from './components/SearchFiled';

function App() {
  const [image, setImage] = useState([]);

  const fetchData = async(searchTerm) => {
    const access_key = import .meta.env.UNSPLASH_ACCESS_KEY;
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?client_id=${access_key}&query=${searchTerm}`
      );
      const data = await response.json();
      setImage(data);
    } catch (error){
      console.warn(error);
    }
  }
  
  return (
    <div className='Container'>
      <h1>Photo Snap</h1>
      <div className='search-section'>
        <SearchFiled />
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

