import React from 'react'
import logo from '../assets/img/Gemini_Generated_Image_wf7b3lwf7b3lwf7b-removebg-preview (1).png'

function Loader() {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #FFD700, #FFA500)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <img 
          src={logo} 
          alt="Chruna Academy" 
          style={{ 
            height: '80px',
            animation: 'pulse 2s infinite'
          }}
        />
        <div 
          style={{
            marginTop: '20px',
            width: '50px',
            height: '50px',
            border: '4px solid rgba(255,255,255,0.3)',
            borderTop: '4px solid white',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '20px auto'
          }}
        />
      </div>
    </div>
  )
}

export default Loader