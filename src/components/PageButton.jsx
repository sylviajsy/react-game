import React from 'react'
import { Button } from 'react-bootstrap'

const PageButton = ({ page, onNext, onPrev }) => {
  return (
    <div className="d-flex justify-content-between mb-4">
        {page>1 ?(
          <button onClick={onPrev}>
            &larr; Prev
          </button>):
       ( <div />)}

        <button onClick={onNext}>
            Next &rarr;
        </button>
    </div>
    
  )
}

export default PageButton
