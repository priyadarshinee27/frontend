import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Pricing from './components/pricing/Pricing'
import Services from './components/services/Services'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'



function App() {


  return (
    <>
    
       {/* <h1>Hello</h1>
     <About />
     <Contact />
      <Home />
      <Pricing />
     <Services /> 
     <Footer/>*/
     }
     
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<Services />} />
        
      </Routes>
      <Footer/>
    </Router>
    


    </>
  )
}

export default App
