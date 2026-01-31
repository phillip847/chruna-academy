import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function HeroSection({ title, subtitle, backgroundGradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }) {
  return (
    <section 
      style={{
        background: backgroundGradient,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        padding: '250px 0 180px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.3)',
          zIndex: 1
        }}
      />
      
      <Container style={{ position: 'relative', zIndex: 2 }}>
        <Row className="text-center">
          <Col lg={8} className="mx-auto">
            <h1 className="display-3 fw-bold mb-4 fade-in">
              {title}
            </h1>
            <p className="lead fs-4 slide-up" style={{ opacity: 0.9 }}>
              {subtitle}
            </p>
          </Col>
        </Row>
      </Container>
      
      {/* Decorative elements */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '100px',
          height: '100px',
          background: 'rgba(255, 215, 0, 0.1)',
          borderRadius: '50%',
          zIndex: 1
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '30%',
          left: '5%',
          width: '60px',
          height: '60px',
          background: 'rgba(255, 215, 0, 0.15)',
          borderRadius: '50%',
          zIndex: 1
        }}
      />
    </section>
  )
}

export default HeroSection