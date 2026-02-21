import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './src/components/layout/Navbar';
import { Footer } from './src/components/layout/Footer';
import Home from './src/pages/Home';
import Menu from './src/pages/Menu';
import About from './src/pages/About';
import Contact from './src/pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-[#111111] min-h-screen selection:bg-[#ff6b00] selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;