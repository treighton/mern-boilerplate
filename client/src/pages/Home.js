import React, { useState } from 'react';
import Auth from '../utils/auth';

// Need Importations

// Need importations

// Code incomplete 
const Home = () => {
    const [loggedIn, setLoggedIn] = useState(Auth.loggedIn());
    return loggedIn ?  {
      fetchPolicy: "no-cache"
    };
}  