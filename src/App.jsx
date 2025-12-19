import { useEffect, useState } from 'react'
import './index.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchField from './components/SearchField';
import SearchCount from './components/SearchCount';
import SearchResult from './components/SearchResult';
import PhotoCard from './components/PhotoCard';
import PageButton from './components/PageButton';
import { Container } from 'react-bootstrap';

const EXPIRATION_TIME = 10*1000

function App() {
  const [word, setWord] = useState('')
  const [image, setImage] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [time, setTime] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const fetchData = async(searchTerm, pageNum=1) => {
    const access_key = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
    setWord(searchTerm);
    setCount(prevCount => prevCount+1);
    setPage(pageNum);

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?client_id=${access_key}&query=${searchTerm}&page=${pageNum}&per_page=12`
      );
      const data = await response.json();
      console.log("API data:", data);
      setImage(data.results);
    } catch (error){
      console.warn(error);
    }
  }

  // useEffect is used to handle initial data fetching and side effects
  useEffect(() => {
    fetchData("nature")
  },[])

  const handleTimer = (searchTerm) => {
    const now = Date.now();
    setHasSearched(true);

    if(!time || now-time>EXPIRATION_TIME){
      setTime(now);
      setCount(1);
    } else {
      console.log(now);
    }

    fetchData(searchTerm);
  }
  
  return (
    <div className='Container'>
      <div className='header-hero'>
        <h1 className='text-center app-title'>Photo Snap 📸</h1>
        <div className='search-wrapper'>
          <SearchField onSubmit={handleTimer}/>
        </div>
        <div className="text-center">
          {hasSearched && <SearchCount count={count}/>}
        </div>
      </div>

      <div className="text-center mt-3 mb-3">
        {hasSearched && <SearchResult searchWord = {word}/>}
      </div>
      
      <Container>
        <div className='row'>
            {image.map((images) => (
              <PhotoCard
                key={images.id}
                src={images.urls.small}
                alt={images.alt_description}
            />))}
        </div>
      
      {word && <PageButton 
                  page = {page}
                  onNext={()=>fetchData(word, page+1)} 
                  onPrev={()=>fetchData(word, page-1)} />}
    </Container>
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

// Why search times is 3 after first search
// Why use useEffect