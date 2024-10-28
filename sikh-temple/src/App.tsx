import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import AboutUs from './AboutUs';
import Events from './Events';
import Contact from './Contact';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <Events />
      <Contact />
    </div>
  );
};

export default App;
