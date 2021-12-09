import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './navbar.scss'
const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleToggle = () => {
    setClick(!click)
  }
  const handleClose = () => {
    setClick(false)
  }
  return (
    <header className='header bg-blue'>
      <div className='nav-wapper'>
        <Link to='/#home' className='logo text-black md'>
          Portfo<span className='text-light'>lio</span>
        </Link>

        <div className='menu-icon' onClick={handleToggle}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <nav className={click ? 'navbar active' : 'navbar'}>
          <ul>
            <Link to='/#home' onClick={handleClose}>
              Home
            </Link>
            <Link to='/#about' onClick={handleClose}>
              About
            </Link>
            <Link to='/#project' onClick={handleClose}>
              Project
            </Link>
            <Link to='/#contact' onClick={handleClose}>
              Contact
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
