import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/White And Black Minimalist Gym Logo.png'
import './navbar.css';


const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
            <Link to='/' className='logo'>
                <img src={Logo} alt="Nav Logo" />
            </Link>
            nav links
            nav buttons
        </div>
    </nav>
  )
}

export default Navbar