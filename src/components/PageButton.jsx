import React from 'react'
import { Button } from 'react-bootstrap'

const PageButton = ({ onNext, onPrev }) => {
  return (
    <div>
        <button onClick={onPrev}>
            Prev
        </button>

        <button onClick={onNext}>
            Next
        </button>
    </div>
    
  )
}

export default PageButton
