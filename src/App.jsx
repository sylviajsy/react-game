import { useState } from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchField from './components/SearchField';
import SearchCount from './components/SearchCount';
import SearchResult from './components/SearchResult';
import PhotoCard from './components/PhotoCard';

function App() {
  const [word, setWord] = useState("")
  const [image, setImage] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  const fetchData = async(searchTerm) => {
    const access_key = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
    setWord(searchTerm);
    setCount(prevCount => prevCount+1);

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?client_id=${access_key}&query=${searchTerm}`
      );
      const data = await response.json();
      console.log("API data:", data);
      setImage(data.results);
    } catch (error){
      console.warn(error);
    }
  }
  
  return (
    <div className='Container'>
      <h1>Photo Snap</h1>
      <div className='search-section'>
        <SearchField onSubmit={fetchData}/>
      </div>
      {word && <SearchCount count={count}/>}
      <SearchResult searchWord = {word}/>
      <div className="row">
          {image.map((images) => (
            <PhotoCard
              key={images.id}
              src={images.urls.small}
              alt={images.alt_description}
          />))}
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

