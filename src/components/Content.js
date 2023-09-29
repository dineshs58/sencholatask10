import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import './content.css'
const Content = () => {
  const [photo, setPhoto] = useState([]);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos/?_limit=20')
      .then(item => item.json())
      //.then(item => console.log(item))
      .then(item => setPhoto(item))
  }, [])
  return (
    <div className="container-fluid">
      <h1 className='header '>Photos details</h1>
      <div className="row mt-5">

        {photo.map(details => (

          <Col  xl={3} lg={4} md={6} xs={12} key={details.albumId } className='my-5 column'>
            <Card key={details.id}>
              <a target="_blank" href={details.thumbnailUrl}>
                <Card.Img variant="top" src={details.url} />
              </a>
              
              <Card.Body>
                <Card.Text>
                  <h5>Title : <br /><span className='title'>{details.title}</span></h5>
                </Card.Text>
              </Card.Body>

            </Card>
          </Col>
        ))

        }
      </div>
    </div>
  )
}

export default Content