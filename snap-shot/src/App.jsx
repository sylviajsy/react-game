import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <h1>
          Image Search APP
        </h1>
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
// 1. Search
// 2. Show PhotoGrid
// 3. Photos found successfully
// 4. No result found

