import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap'
import HeroSection from '../components/HeroSection'
import happyKidsImage from '../assets/img/Gemini_Generated_Image_ut4mknut4mknut4m.png'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [showAlert, setShowAlert] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 5000)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <>
      <HeroSection 
        title="Contact Us"
        subtitle="Get in touch with our team"
        backgroundGradient={`linear-gradient(rgba(79, 172, 254, 0.8), rgba(0, 242, 254, 0.8)), url(${happyKidsImage})`}
      />
      
      <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <Container>
          {showAlert && (
          <Row>
            <Col lg={8} className="mx-auto mb-4">
              <Alert variant="success" className="text-center">
                Thank you for your message! We'll get back to you soon.
              </Alert>
            </Col>
          </Row>
        )}

        <Row>
          <Col lg={8} className="mx-auto">
            <Card className="border-0 shadow-lg slide-up">
              <Card.Body className="p-5">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          style={{ borderRadius: '10px' }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          style={{ borderRadius: '10px' }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          style={{ borderRadius: '10px' }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          style={{ borderRadius: '10px' }}
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="tutoring">Tutoring Services</option>
                          <option value="courses">Online Courses</option>
                          <option value="test-prep">Test Preparation</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: '10px' }}
                      placeholder="Tell us how we can help you..."
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button type="submit" size="lg" className="btn-primary px-5">
                      Send Message
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={4} className="text-center mb-4">
            <Card className="border-0 h-100 bounce-in">
              <Card.Body className="p-4">
                <div 
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                    borderRadius: '50%',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span style={{ fontSize: '1.5rem' }}>📍</span>
                </div>
                <h5>Visit Us</h5>
                <p className="mb-0">Windhoek, Namibia</p>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4} className="text-center mb-4">
            <Card className="border-0 h-100 bounce-in" style={{ animationDelay: '0.2s' }}>
              <Card.Body className="p-4">
                <div 
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                    borderRadius: '50%',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span style={{ fontSize: '1.5rem' }}>📞</span>
                </div>
                <h5>Call Us</h5>
                <p className="mb-0">+264 85 266 3698<br />Mon-Fri 9AM-6PM</p>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4} className="text-center mb-4">
            <Card className="border-0 h-100 bounce-in" style={{ animationDelay: '0.4s' }}>
              <Card.Body className="p-4">
                <div 
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                    borderRadius: '50%',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span style={{ fontSize: '1.5rem' }}>✉️</span>
                </div>
                <h5>Email Us</h5>
                <p className="mb-0">info@chrunaacademy.org</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
      </div>
    </>
  )
}

export default Contact