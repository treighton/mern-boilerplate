import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
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
        <Header/>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            {/* </Routes></Routes> <Route path=“/” element={<Layout />}> */}
            {/* <Route index element={<Home />} />  */}
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<LoginForm />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
