import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Subscribe from './pages/Subscribe';

function App() {
  return (
    <Router>
      <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
        <h1>Project 2029</h1>
        <nav style={{ marginBottom: 20 }}>
          <Link to='/' style={{ marginRight: 10 }}>Home</Link>
          <Link to='/events' style={{ marginRight: 10 }}>Events</Link>
          <Link to='/subscribe'>Subscribe</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/subscribe' element={<Subscribe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;