import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import AboutMe from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Footer from './Components/Footer';

function App() {
    return (
        <BrowserRouter>
          <div className="App">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      );
}

export default App;