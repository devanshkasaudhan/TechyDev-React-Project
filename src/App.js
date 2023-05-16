import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// component
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact.jsx";
import Services from "./components/Services.jsx";

// scripts
import "./style/App.scss";
import "./style/Header.scss";
import "./style/Home.scss";
import "./style/Contact.scss";
import "./style/mediaquery.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
