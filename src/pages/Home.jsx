import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import heroImage from '../assets/img/Gemini_Generated_Image_qiryzfqiryzfqiry.png'
import logoImage from '../assets/img/Gemini_Generated_Image_wf7b3lwf7b3lwf7b-removebg-preview (1).png'

function Home() {
  return (
    <>
      <style>
        {`
          .bubbles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 1;
          }
          
          .bubble {
            position: absolute;
            bottom: -100px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            opacity: 0.6;
            animation: rise 10s infinite linear;
          }
          
          .bubble:nth-child(1) {
            width: 40px;
            height: 40px;
            left: 10%;
            animation-duration: 8s;
            animation-delay: 0s;
          }
          
          .bubble:nth-child(2) {
            width: 20px;
            height: 20px;
            left: 20%;
            animation-duration: 5s;
            animation-delay: 1s;
          }
          
          .bubble:nth-child(3) {
            width: 50px;
            height: 50px;
            left: 35%;
            animation-duration: 7s;
            animation-delay: 2s;
          }
          
          .bubble:nth-child(4) {
            width: 80px;
            height: 80px;
            left: 50%;
            animation-duration: 11s;
            animation-delay: 0s;
          }
          
          .bubble:nth-child(5) {
            width: 35px;
            height: 35px;
            left: 70%;
            animation-duration: 6s;
            animation-delay: 1s;
          }
          
          .bubble:nth-child(6) {
            width: 45px;
            height: 45px;
            left: 80%;
            animation-duration: 8s;
            animation-delay: 3s;
          }
          
          .bubble:nth-child(7) {
            width: 25px;
            height: 25px;
            left: 32%;
            animation-duration: 9s;
            animation-delay: 2s;
          }
          
          .bubble:nth-child(8) {
            width: 90px;
            height: 90px;
            left: 55%;
            animation-duration: 12s;
            animation-delay: 4s;
          }
          
          @keyframes rise {
            0% {
              bottom: -100px;
              transform: translateX(0);
            }
            50% {
              transform: translate(100px);
            }
            100% {
              bottom: 1080px;
              transform: translateX(-200px);
            }
          }
          
          .logo-container {
            width: 400px;
            height: 400px;
            border-radius: 50%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
            position: relative;
            overflow: hidden;
            animation: float 3s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}
      </style>
      {/* Hero Section */}
      <section className="hero-section" style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative'
      }}>
        <div className="bubbles">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          zIndex: 2
        }}></div>
        <Container style={{ position: 'relative', zIndex: 3 }}>
          <Row className="align-items-center">
            <Col lg={6} className="fade-in">
              <h1 className="display-3 fw-bold mb-4" style={{ color: '#333' }}>
                Welcome to <span style={{ color: '#DAA520' }}>Chruna Academy</span>
              </h1>
              <p className="lead mb-4" style={{ fontSize: '1.3rem' }}>
                Chruna Academy is an African education consultancy specialising in AI for education, LMS development, online learning, research and development, academic tutoring, and institutional capacity building for higher education, TVET, government, and development partners.
              </p>
              <div className="d-flex gap-3">
                <LinkContainer to="/services">
                  <Button size="lg" className="btn-primary px-4 py-3">
                    Explore Courses
                  </Button>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Button variant="outline-dark" size="lg" className="px-4 py-3">
                    Get Started
                  </Button>
                </LinkContainer>
              </div>
            </Col>
            <Col lg={6} className="text-center bounce-in">
              <div className="logo-container">
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${logoImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(3px)',
                  borderRadius: '50%'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8))',
                  borderRadius: '50%'
                }}></div>
                <h2 style={{ color: '#fff', fontWeight: 'bold', position: 'relative', zIndex: 2 }}>Excellence in Education</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="display-5 fw-bold slide-up">Why Choose Chruna Academy?</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center p-4 slide-up">
                <Card.Body>
                  <div 
                    style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                      borderRadius: '50%',
                      margin: '0 auto 20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <span style={{ fontSize: '2rem' }}>🎓</span>
                  </div>
                  <Card.Title>Expert Instructors</Card.Title>
                  <Card.Text>
                    Learn from industry professionals with years of experience in their fields.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center p-4 slide-up">
                <Card.Body>
                  <div 
                    style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                      borderRadius: '50%',
                      margin: '0 auto 20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <span style={{ fontSize: '2rem' }}>💡</span>
                  </div>
                  <Card.Title>Innovative Methods</Card.Title>
                  <Card.Text>
                    Modern teaching techniques combined with cutting-edge technology for optimal learning.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center p-4 slide-up">
                <Card.Body>
                  <div 
                    style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                      borderRadius: '50%',
                      margin: '0 auto 20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <span style={{ fontSize: '2rem' }}>🏆</span>
                  </div>
                  <Card.Title>Proven Results</Card.Title>
                  <Card.Text>
                    Track record of student success with personalized attention and support.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home