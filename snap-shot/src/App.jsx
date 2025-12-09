import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchField from './components/SearchField'
import Images from './components/Images'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>
        <SearchField />
      </Header>
      <Images />
    </>
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

