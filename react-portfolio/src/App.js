import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/Aboutme';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

//may need to link css sheet


function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Portfolio />
      {/* <Resume /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;