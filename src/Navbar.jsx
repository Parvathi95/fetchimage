import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../src/Styles/Navbar.css'

const Navbar = () => {
   const [isMobile,setIsMobile]=useState(false)
  return (
    <nav className='navbar'>
        <h1 className='logo'>Colors</h1>
        <ul className= {isMobile?"nav-links-mob":"nav-links"} onClick={()=>setIsMobile(false)}>
            <li><Link to="/" className='home'>Home</Link></li>
            <li><Link to="/colors" className='colors'>Colors</Link></li>
            <li><Link to="/login" className='login'>Login</Link></li>
            <li><Link to="/signup" className='signup'>SignUp</Link></li>
            </ul>
            <button className='mob-menu-icon' onClick={()=>setIsMobile(!isMobile)}>
                {isMobile?<h1>x</h1>:<h1>=</h1>}
            </button>
    </nav>
  )
}

export default Navbar