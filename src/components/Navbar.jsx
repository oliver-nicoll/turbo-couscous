import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/White And Black Minimalist Gym Logo.png'
import {links} from '../data';
import './navbar.css';


const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
            <Link to='/' className='logo'>
                <img src={Logo} alt="Nav Logo" />
            </Link>
            <ul className='nav__links'>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li> 
                                <NavLink to={path}>{name}</NavLink>
                            </li>
                        )
                    } )
                }
            </ul>
            nav buttons
        </div>
    </nav>
  )
}

export default Navbar