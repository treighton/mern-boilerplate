import React, { useState } from 'react';
import {Link} from "react-router-dom";
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
            {/* {!loggedIn && ( */}
            <a href="/login"><li className='nav__li navlink'>
                Log in
            </li></a>
            {/* )} */}
            <Link to="/signupform"><li className='nav__li navlink'>
                Sign up
            </li></Link>
            <Link onClick={Auth.logout}><li className='nav__li navlink'>
            Logout
            </li></Link>
        </ul>
    </nav>
  )
}

export default Navbar