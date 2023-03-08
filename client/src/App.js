import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignupForm from "./components/access/signup";
import Login from "./components/access/login";
import "./App.css"
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="backgroundpic">
          <Home/>
          <div className="container">
          <Routes>
            {/* </Routes></Routes> <Route path=“/” element={<Layout />}> */}
            {/* <Route index element={<Home />} />  */}
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path=“about” element={<About />} /> */}
            {/* <Route path=“projects” element={<Projects />} /> */}
            {/* <Route path=“contact” element={<Contact />} /> */}
          </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
