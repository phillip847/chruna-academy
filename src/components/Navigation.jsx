import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useLocation } from 'react-router-dom'
import logo from '../assets/img/Gemini_Generated_Image_wf7b3lwf7b3lwf7b-removebg-preview (1).png'

function Navigation() {
  const [expanded, setExpanded] = useState(false)
  const location = useLocation()

  const navButtonStyle = {
    color: '#333',
    fontWeight: '600',
    padding: '0.7rem 1.8rem',
    margin: '0 0.4rem',
    borderRadius: '50px',
    background: 'rgba(255, 255, 255, 0.4)',
    border: '2px solid rgba(255, 255, 255, 0.6)',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  }

  const activeButtonStyle = {
    background: '#fff',
    color: '#FF6600',
    border: '2px solid #fff',
    boxShadow: '0 6px 25px rgba(255, 102, 0, 0.4), 0 0 20px rgba(255, 255, 255, 0.5)',
    transform: 'scale(1.08)',
    fontWeight: '700'
  }

  return (
    <>
      <style>
        {`
          .custom-nav-button {
            position: relative;
            overflow: hidden;
          }

          .custom-nav-button::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: translate(-50%, -50%);
            transition: width 0.4s ease, height 0.4s ease;
          }

          .custom-nav-button:hover::before {
            width: 300px;
            height: 300px;
          }

          .custom-nav-button span {
            position: relative;
            z-index: 1;
          }
          
          .custom-nav-button:hover {
            background: #fff !important;
            color: #FF6600 !important;
            transform: translateY(-4px) scale(1.05);
            box-shadow: 0 8px 25px rgba(255, 102, 0, 0.3);
            border: 2px solid #fff !important;
          }

          .custom-nav-button.active-link {
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0%, 100% {
              box-shadow: 0 6px 25px rgba(255, 102, 0, 0.4), 0 0 20px rgba(255, 255, 255, 0.5);
            }
            50% {
              box-shadow: 0 6px 30px rgba(255, 102, 0, 0.6), 0 0 30px rgba(255, 255, 255, 0.7);
            }
          }
          
          .navbar-toggler {
            border: 2px solid #fff;
            padding: 0.6rem 0.9rem;
            border-radius: 50px;
            background: rgba(255, 255, 255, 0.3);
          }
          
          .navbar-toggler:focus {
            box-shadow: 0 0 0 0.3rem rgba(255, 255, 255, 0.4);
          }
          
          .navbar-toggler-icon {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(51, 51, 51, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2.5' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
            width: 1.5em;
            height: 1.5em;
          }
          
          @media (max-width: 991px) {
            .navbar-collapse {
              background: linear-gradient(180deg, rgba(255, 215, 0, 0.98), rgba(255, 165, 0, 0.98));
              margin-top: 1.5rem;
              border-radius: 30px;
              padding: 2rem 1.5rem;
              box-shadow: 0 10px 40px rgba(0,0,0,0.3);
              backdrop-filter: blur(15px);
            }
            
            .custom-nav-button {
              text-align: center;
              margin: 0.6rem 0 !important;
              display: block;
            }

            .custom-nav-button.active-link {
              animation: none;
            }
          }
          
          .logo-img {
            height: 50px;
            transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            filter: drop-shadow(0 3px 6px rgba(0,0,0,0.15));
          }
          
          .navbar-brand:hover .logo-img {
            transform: scale(1.15) rotate(-8deg);
          }
          
          .modern-navbar {
            background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%);
            box-shadow: 0 5px 25px rgba(0,0,0,0.2);
            transition: all 0.4s ease;
            padding: 1rem 0;
            border-radius: 0;
          }
          
          .modern-navbar::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.15) 100%);
            pointer-events: none;
          }

          @media (min-width: 992px) {
            .navbar-nav {
              gap: 0.2rem;
            }
          }
        `}
      </style>

      <Navbar 
        expand="lg" 
        fixed="top" 
        expanded={expanded}
        onToggle={setExpanded}
        className="modern-navbar"
      >
        <Container>
          <LinkContainer to="/" onClick={() => setExpanded(false)}>
            <Navbar.Brand>
              <img 
                src={logo} 
                alt="Chruna Academy" 
                className="logo-img"
              />
            </Navbar.Brand>
          </LinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/" onClick={() => setExpanded(false)}>
                <Nav.Link 
                  className={`custom-nav-button ${location.pathname === '/' ? 'active-link' : ''}`}
                  style={{
                    ...navButtonStyle,
                    ...(location.pathname === '/' ? activeButtonStyle : {})
                  }}
                >
                  <span>Home</span>
                </Nav.Link>
              </LinkContainer>
              
              <LinkContainer to="/services" onClick={() => setExpanded(false)}>
                <Nav.Link 
                  className={`custom-nav-button ${location.pathname === '/services' ? 'active-link' : ''}`}
                  style={{
                    ...navButtonStyle,
                    ...(location.pathname === '/services' ? activeButtonStyle : {})
                  }}
                >
                  <span>Services</span>
                </Nav.Link>
              </LinkContainer>
              
              <LinkContainer to="/about" onClick={() => setExpanded(false)}>
                <Nav.Link 
                  className={`custom-nav-button ${location.pathname === '/about' ? 'active-link' : ''}`}
                  style={{
                    ...navButtonStyle,
                    ...(location.pathname === '/about' ? activeButtonStyle : {})
                  }}
                >
                  <span>About</span>
                </Nav.Link>
              </LinkContainer>
              
              <LinkContainer to="/contact" onClick={() => setExpanded(false)}>
                <Nav.Link 
                  className={`custom-nav-button ${location.pathname === '/contact' ? 'active-link' : ''}`}
                  style={{
                    ...navButtonStyle,
                    ...(location.pathname === '/contact' ? activeButtonStyle : {})
                  }}
                >
                  <span>Contact</span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation