import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Services from './components/services/Services'
import Navbar from './components/navbar/Navbar'
function App() {
  

  return (
    <>
     {/* <h1>Hello</h1>
     <About />
     <Contact />
     <Services /> */}
     
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        
      </Routes>
    </Router>
    
    </>
  )
}

export default App
