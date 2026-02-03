import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Footer() {
  return (
    <footer style={{ 
      background: 'linear-gradient(135deg, #2c3e50, #34495e)',
      color: 'white',
      marginTop: 'auto'
    }}>
      <Container>
        <Row className="py-5">
          <Col lg={4} md={6} className="mb-4">
            <h5 style={{ color: '#FFD700', marginBottom: '20px' }}>Chruna Academy</h5>
            <p className="mb-3">
              Empowering minds through innovative education and personalized learning experiences.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                <span>📘</span>
              </div>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                <span>🐦</span>
              </div>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                <span>📧</span>
              </div>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <h6 style={{ color: '#FFD700', marginBottom: '20px' }}>Quick Links</h6>
            <div className="d-flex flex-column gap-2">
              <LinkContainer to="/">
                <a href="#" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Home</a>
              </LinkContainer>
              <LinkContainer to="/about">
                <a href="#" style={{ color: '#ecf0f1', textDecoration: 'none' }}>About</a>
              </LinkContainer>
              <LinkContainer to="/services">
                <a href="#" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Services</a>
              </LinkContainer>
              <LinkContainer to="/contact">
                <a href="#" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Contact</a>
              </LinkContainer>
            </div>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <h6 style={{ color: '#FFD700', marginBottom: '20px' }}>Services</h6>
            <div className="d-flex flex-column gap-2">
              <span style={{ color: '#ecf0f1', fontSize: '0.9rem' }}>Online Course Design & Development</span>
              <span style={{ color: '#ecf0f1', fontSize: '0.9rem' }}>Educator & Lecturer Training</span>
              <span style={{ color: '#ecf0f1', fontSize: '0.9rem' }}>Academic Programme Development</span>
              <span style={{ color: '#ecf0f1', fontSize: '0.9rem' }}>Assessment & Examination Services</span>
              <span style={{ color: '#ecf0f1', fontSize: '0.9rem' }}>Education & EdTech Consultancy</span>
            </div>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <h6 style={{ color: '#FFD700', marginBottom: '20px' }}>Contact Info</h6>
            <div className="d-flex flex-column gap-2">
              <span style={{ color: '#ecf0f1' }}>Windhoek, Namibia</span>
              <span style={{ color: '#ecf0f1' }}>+264 85 266 3698</span>
              <span style={{ color: '#ecf0f1' }}>info@chrunaacademy.org</span>
              <span style={{ color: '#ecf0f1' }}>Mon-Fri 9AM-6PM</span>
            </div>
          </Col>
        </Row>
        
        <hr style={{ borderColor: '#7f8c8d', margin: '0' }} />
        
        <Row className="py-3">
          <Col className="text-center">
            <p className="mb-0" style={{ color: '#bdc3c7' }}>
              © 2026 Chruna Academy. All rights reserved. | Empowering Education Since 2016
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer