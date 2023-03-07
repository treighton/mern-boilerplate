import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            {/* </Routes></Routes> <Route path=“/” element={<Layout />}> */}
            {/* <Route index element={<Home />} />  */}
            <Route path="/" element={<Home />} />
            {/* <Route path=“about” element={<About />} /> */}
            {/* <Route path=“projects” element={<Projects />} /> */}
            {/* <Route path=“contact” element={<Contact />} /> */}
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
