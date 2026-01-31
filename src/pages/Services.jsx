import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import HeroSection from '../components/HeroSection'
import heroImage from '../assets/img/Gemini_Generated_Image_qiryzfqiryzfqiry.png'

function Services() {
  const services = [
    {
      title: "AI Agent Development for Education & Training",
      description: "Custom AI-powered agents that enhance teaching, learning, administration, and institutional efficiency. Purpose-built for the higher education ecosystem and aligned with academic and regulatory standards.",
      features: [
        "AI academic advisors and student support agents",
        "AI tutors for course-specific learning support",
        "Automated assessment feedback and grading assistance",
        "Institutional knowledge bots (policies, QA frameworks, curricula)",
        "AI agents for staff training, onboarding, and compliance support"
      ],
      value: "Improved student engagement, scalable academic support, reduced administrative burden, and future-ready digital transformation."
    },
    {
      title: "LMS & Online Content Development (E-Learning Solutions)",
      description: "End-to-end Learning Management System development, supporting institutions in migrating, designing, and delivering high-quality online and blended learning programmes.",
      features: [
        "Moodle, Canvas, and Google Classroom course design",
        "Full programme digitisation (Certificates, Diplomas, Degrees, Postgraduate programmes)",
        "Instructional design aligned with Bloom's Taxonomy and NQF levels",
        "Interactive e-learning content (H5P, quizzes, simulations, multimedia)",
        "Quality assurance alignment and accreditation readiness"
      ],
      value: "Pedagogically sound, scalable, and accreditation-ready online programmes that meet national, regional, and international standards."
    },
    {
      title: "Research & Development (R&D) Services",
      description: "Research and academic development services that strengthen institutional capacity, evidence-based decision-making, and scholarly output.",
      features: [
        "Curriculum research and programme development",
        "Institutional research and policy analysis",
        "Monitoring, Evaluation, and Learning (MEL) frameworks",
        "Academic research supervision and proposal development",
        "Capacity building in research methods and academic writing"
      ],
      value: "Stronger research culture, improved programme relevance, and compliance with quality assurance and funding requirements."
    },
    {
      title: "Academic Tutoring & Student Support Services",
      description: "Specialised academic tutoring and learning support designed to improve student success, progression, and completion rates in higher education.",
      features: [
        "Undergraduate and postgraduate academic support",
        "Research proposal and thesis guidance",
        "Academic writing and referencing support",
        "Exam preparation and structured revision workshops",
        "Discipline-specific tutoring (Education, Health Sciences, Social Sciences, Business)"
      ],
      value: "Enhanced student performance, reduced attrition, and improved graduate outcomes."
    },
    {
      title: "Institutional Capacity Building & Professional Development",
      description: "Targeted training and capacity-building programmes for academic staff, administrators, and leadership teams.",
      features: [
        "Digital pedagogy and online teaching skills",
        "AI integration in teaching and assessment",
        "Quality assurance and programme accreditation",
        "Curriculum design and review",
        "Educational leadership and policy implementation"
      ],
      value: "A skilled, adaptive workforce capable of leading innovation and maintaining academic excellence."
    }
  ]

  return (
    <>
      <HeroSection 
        title="Our Services"
        subtitle="Comprehensive educational solutions tailored to your needs"
        backgroundGradient={`linear-gradient(rgba(240, 147, 251, 0.8), rgba(245, 87, 108, 0.8)), url(${heroImage})`}
      />
      
      <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <Container>
          <Row>
          {services.map((service, index) => (
            <Col lg={12} className="mb-5" key={index}>
              <Card className="h-100 slide-up shadow-lg" style={{ animationDelay: `${index * 0.2}s`, border: 'none' }}>
                <Card.Body className="p-5">
                  <Card.Title className="h3 mb-4" style={{ color: '#2c3e50', fontWeight: 'bold' }}>
                    {service.title}
                  </Card.Title>
                  <Card.Text className="mb-4 fs-5" style={{ color: '#555', lineHeight: '1.6' }}>
                    {service.description}
                  </Card.Text>
                  
                  <Row>
                    <Col md={8}>
                      <h5 className="mb-3" style={{ color: '#e74c3c' }}>Key Applications & Services</h5>
                      <ul className="list-unstyled mb-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="mb-2 d-flex align-items-start">
                            <span style={{ color: '#27ae60', fontSize: '1.2em', marginRight: '10px' }}>•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </Col>
                    <Col md={4}>
                      <div 
                        className="p-4 rounded"
                        style={{ 
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white'
                        }}
                      >
                        <h6 className="mb-3">Value to Institutions</h6>
                        <p className="mb-0" style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                          {service.value}
                        </p>
                      </div>
                    </Col>
                  </Row>
                  
                  <div className="mt-4">
                    <Button 
                      className="btn-lg px-4"
                      style={{
                        background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                        border: 'none',
                        color: '#333',
                        fontWeight: 'bold'
                      }}
                    >
                      Get Started
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        {/* Why Partner with Chruna Academy Section */}
        <Row className="mt-5">
          <Col lg={12}>
            <Card className="shadow-lg" style={{ border: 'none', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
              <Card.Body className="p-5 text-white">
                <h2 className="text-center mb-4">Why Partner with Chruna Academy?</h2>
                <Row>
                  <Col md={6} className="mb-3">
                    <div className="d-flex align-items-start">
                      <div style={{ 
                        width: '24px', 
                        height: '24px', 
                        marginRight: '15px', 
                        backgroundColor: '#FFD700', 
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#333'
                      }}>🎓</div>
                      <span>Proven expertise in higher education, EdTech, and AI integration</span>
                    </div>
                  </Col>
                  <Col md={6} className="mb-3">
                    <div className="d-flex align-items-start">
                      <div style={{ 
                        width: '24px', 
                        height: '24px', 
                        marginRight: '15px', 
                        backgroundColor: '#FFD700', 
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#333'
                      }}>🌐</div>
                      <span>Strong alignment with African and international education frameworks</span>
                    </div>
                  </Col>
                  <Col md={6} className="mb-3">
                    <div className="d-flex align-items-start">
                      <div style={{ 
                        width: '24px', 
                        height: '24px', 
                        marginRight: '15px', 
                        backgroundColor: '#FFD700', 
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#333'
                      }}>📊</div>
                      <span>Scalable solutions for universities, colleges, training institutions, and government agencies</span>
                    </div>
                  </Col>
                  <Col md={6} className="mb-3">
                    <div className="d-flex align-items-start">
                      <div style={{ 
                        width: '24px', 
                        height: '24px', 
                        marginRight: '15px', 
                        backgroundColor: '#FFD700', 
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#333'
                      }}>🤝</div>
                      <span>A strategic partner focused on quality, innovation, and sustainability</span>
                    </div>
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

export default Services