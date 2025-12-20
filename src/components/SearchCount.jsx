import React from 'react'

const SearchCount = ({ count }) => {
  return (
    <div>
      <h2>You have used {count}/50 searches today.</h2>
    </div>
  )
}

export default SearchCount
