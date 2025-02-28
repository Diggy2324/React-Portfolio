import React, { StrictMode } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate
import Header from './components/header';
import Footer from './components/footer';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import AboutMe from './pages/aboutme';
import Contact from './pages/contact';
import './pages/CSS/App.css';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Portfolio />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;