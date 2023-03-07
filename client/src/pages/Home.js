import React, { useState } from 'react';
import Header from '../components/Header.js';
import Auth from '../utils/auth';

// Need Importations

// Need importations

// Code incomplete 
const Home = () => {
    const [loggedIn, setLoggedIn] = useState(Auth.loggedIn());
    // return loggedIn ?  {
    //   fetchPolicy: "no-cache"
    // }
    return !loggedIn && ( // remove bang (!) operator
      <>
        <Header/>
        
      </>
    )
}  

export default Home