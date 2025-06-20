import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  nav: {
    background: 'Black',
    padding: '10px',
    display: 'flex',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    color: 'lightcoral',
    fontWeight: 'bold',
  }
};

export default App;
