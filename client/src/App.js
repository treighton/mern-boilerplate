import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
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
import { setContext} from "@apollo/client/link/context"

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
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
            {/* <Route path="signup" element={<Signup />} />
            <Route path="loginform" element={<LoginForm />} /> */}
          </Routes>
          </div>
        </div>
        </div>

      </Router>
    </ApolloProvider>
  );
}

export default App;
