import React from 'react'

const SearchField = () => {
  return (
    <div className='flex'>
      <input className='bg-gray-50 border border-gray-300 text-sm w-full
                        indent-2 p-2.5 placeholder-gray-500 text-gray-900'
        type='search' 
        placeholder='Search Anything...'/>
      <button
        className='bg-blue-600 px-6 py-2.5 text-white'>
        Search
      </button>
    </div>
  )
}

export default SearchField
