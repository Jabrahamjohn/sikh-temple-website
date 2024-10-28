import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import AboutUs from './AboutUs';
import Events from './Events';
import EventCard from './EventCard';
import HeroSection from './HeroSection'; 
import Contact from './Contact';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs />
      <Events />
      <Contact />
      <EventCard title="Event 1" date="2021-01-01" description="This is the first event" />
      <HeroSection />
    </div>
  );
};

export default App;
