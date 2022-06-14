import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/Aboutme';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import MainCard from './components/MainCard'
import './style.css';

//may need to link css sheet


function App() {
  return (
    <div>
      <Navbar />
      <MainCard />
      <Portfolio />
      <AboutMe />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;