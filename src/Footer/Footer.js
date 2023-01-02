import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='link'>
          <a className='about' href='https://barasamicheal.netlify.app' rel="noreferrer" target='_blank'>About Me</a>
        </div>
        <div className='copyright'>
          <p>&copy;Movies Hub,2023 All rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer