import React, { useState } from 'react';
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
            {!loggedIn && (<li className='nav__li'>
                Log in
            </li>)}
            
        </ul>
    </nav>
  )
}

export default Navbar