import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import HeroSection from '../components/HeroSection'
import heroImage from '../assets/img/Gemini_Generated_Image_qiryzfqiryzfqiry.png'

function About() {
  const stats = [
    { number: "500+", label: "Students Taught" },
    { number: "10+", label: "Years Experience" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Courses Offered" }
  ]

  return (
    <>
      <HeroSection 
        title="About Chruna Academy"
        subtitle="Dedicated to educational excellence since 2013"
        backgroundGradient={`linear-gradient(rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8)), url(${heroImage})`}
      />
      
      <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <Container>
          <Row className="mb-5">
          <Col lg={6} className="slide-up">
            <h2 className="h3 mb-4">Our Mission</h2>
            <p className="mb-4">
              At Chruna Academy, we believe that every student has the potential to excel. Our mission is to 
              provide high-quality, personalized education that empowers students to achieve their academic 
              goals and develop critical thinking skills for lifelong success.
            </p>
            <p>
              We combine traditional teaching methods with innovative technology to create an engaging 
              learning environment that adapts to each student's unique learning style and pace.
            </p>
          </Col>
          <Col lg={6} className="bounce-in">
            <div 
              style={{
                background: 'linear-gradient(135deg, #FFFACD, #FFD700)',
                borderRadius: '15px',
                padding: '40px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(255, 215, 0, 0.2)'
              }}
            >
              <h3 className="mb-3">Our Vision</h3>
              <p className="mb-0">
                To be the leading educational institution that transforms lives through 
                innovative learning experiences and academic excellence.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={12} className="text-center mb-4">
            <h2 className="h3 slide-up">Our Achievements</h2>
          </Col>
          {stats.map((stat, index) => (
            <Col md={3} className="text-center mb-4" key={index}>
              <Card 
                className="border-0 h-100 slide-up" 
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  background: 'linear-gradient(45deg, #FFD700, #FFA500)'
                }}
              >
                <Card.Body className="p-4">
                  <h3 className="display-4 fw-bold mb-2" style={{ color: '#333' }}>
                    {stat.number}
                  </h3>
                  <p className="mb-0 fw-bold" style={{ color: '#333' }}>
                    {stat.label}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          <Col lg={12} className="slide-up">
            <Card className="border-0 bg-light">
              <Card.Body className="p-5 text-center">
                <h3 className="mb-4">Why Students Choose Us</h3>
                <Row>
                  <Col md={4} className="mb-3">
                    <h5>Experienced Faculty</h5>
                    <p>Our instructors are experts in their fields with proven teaching experience.</p>
                  </Col>
                  <Col md={4} className="mb-3">
                    <h5>Flexible Learning</h5>
                    <p>Choose from in-person, online, or hybrid learning options that fit your schedule.</p>
                  </Col>
                  <Col md={4} className="mb-3">
                    <h5>Proven Results</h5>
                    <p>Our students consistently achieve their academic goals and exceed expectations.</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
      </div>
    </>
  )
}

export default About