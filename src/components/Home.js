import React from 'react'
import './home.css';
import {Navbar,Container,Nav} from 'react-bootstrap'
const Home = () => {
  return (
      <div className='container-fluid'>
        <div className="row">
          <Navbar expand="lg" className="bg-dark" id="fix">
              <Container>
                  <Navbar.Brand href="#" className="logo">
                      {' '}GeeksforGeeks</Navbar.Brand>

                  <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav" className=''>
                      <Nav className="ms-auto ">
                          <Nav.Link className='me-4'>Home</Nav.Link>
                          <Nav.Link className='me-4'>About</Nav.Link>
                          <Nav.Link className='me-4'>Service</Nav.Link>
                          <Nav.Link className='me-4'>Blog</Nav.Link>
                          <Nav.Link className='me-4'>Contact</Nav.Link>

                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
          </div>
      </div>
  )
}

export default Home