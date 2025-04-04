function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="flex justify-between p-4 bg-gray-800">
          <div className="text-xl font-bold text-neon">NeonSoft</div>
          <div className="space-x-4">
            <NavLink to="/" className="hover:text-neon">Home</NavLink>
            <NavLink to="/about" className="hover:text-neon">About</NavLink>
            <NavLink to="/services" className="hover:text-neon">Services</NavLink>
            <NavLink to="/pricing" className="hover:text-neon">Pricing</NavLink>
            <NavLink to="/contact" className="hover:text-neon">Contact</NavLink>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;