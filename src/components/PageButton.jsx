import React from 'react'
import { Button } from 'react-bootstrap'

const PageButton = ({ page, onNext, onPrev }) => {
  return (
    <div>
        {page>1 && <button onClick={onPrev}>
            Prev
        </button>}

        <button onClick={onNext}>
            Next
        </button>
    </div>
    
  )
}

export default PageButton
