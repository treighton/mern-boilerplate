import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignupForm from "./components/access/signup";
import Login from "./components/access/login";
import "./App.css"
import About from "./pages/About";
import Header from "./components/Header.js";
import Signup from "./pages/SignUp";
import LoginForm from "./pages/LoginForm";


const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="backgroundpic">
          <Header/>
          <div className="container">
           
       
        <div className="flex-column justify-center align-center min-100-vh">
          <Routes>
            <Route path="/signupform" element={<SignupForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="signup" element={<Signup />} />
            <Route path="loginform" element={<LoginForm />} />
          </Routes>
          </div>
        </div>
        </div>

      </Router>
    </ApolloProvider>
  );
}

export default App;
