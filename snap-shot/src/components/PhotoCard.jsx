import React from 'react'
import { Card, Col } from 'react-bootstrap';

const PhotoCard = ({ src, alt }) => {
  return (
    <Col md={4} className="mb-4">
      <Card className="h-100 shadow-sm">
        <Card.Img 
          variant="top" 
          src={src} 
          alt={alt}
          style={{ height: '200px', objectFit: 'cover' }} 
        />
      </Card>
    </Col>
  )
}

export default PhotoCard
