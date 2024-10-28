import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary-orange p-4">
      <ul className="flex justify-around text-white font-semibold">
        <li><a href="#home" className="hover:text-primary-blue">Home</a></li>
        <li><a href="#about" className="hover:text-primary-blue">About Us</a></li>
        <li><a href="#events" className="hover:text-primary-blue">Events</a></li>
        <li><a href="#contact" className="hover:text-primary-blue">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
