import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { useNavigate } from "react-router-dom";
import './style.css'



const Navbar = () => {
    let navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(Auth.loggedIn());
    const handleLogout = () => {
        Auth.logout () 
        
    }
    return (
    <nav className='nav'>
        <ul className='nav__ul'>
            <li onClick={() => navigate('/')} className='nav__li'>
                Home 
            </li>
            <li onClick={() => navigate('/about')} className='nav__li'>
               About
            </li>
            { !loggedIn && (<li onClick={() => navigate('/signup')} className='nav__li'>
               Signup
            </li>)}
            {!loggedIn && (<li onClick={() => navigate('/login')} className='nav__li'>
                Log in
            </li>)}
            { loggedIn && (<li onClick={() => handleLogout ()} className='nav__li'>
               Logout
            </li>)}
            
        </ul>
    </nav>
  )
}

export default Navbar