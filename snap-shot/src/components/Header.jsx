import React from 'react'
import SearchField from './SearchField'

const Header = ({ children }) => {
  return (
    <div className='bg-gray-900 flex items-center py-4'>
        <div className='max-w-md mx-auto w-full'>
            <h1 className='text-white text-center text-2xl font-bold mb-5'>Photo Snap</h1>
            { children }
        </div>
    </div>
  )
}

export default Header
