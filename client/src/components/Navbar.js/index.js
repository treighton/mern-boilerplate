import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Auth from '../../utils/auth';
import './style.css'
const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(Auth.loggedIn());
    return (
    <nav className='nav'>
        <ul className='nav__ul'>
            <li className='nav__li'>
                Home 
            </li>
            <li className='nav__li'>
                Contact
            </li>
            {!loggedIn && (
            <Link to="/login"><li className='nav__li'>
                Log in
            </li></Link>
            )}
            <Link to="/signup"><li className='nav__li'>
                Sign up
            </li></Link>
        </ul>
    </nav>
  )
}

export default Navbar