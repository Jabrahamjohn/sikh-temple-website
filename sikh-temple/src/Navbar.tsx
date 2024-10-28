import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-orange-600 p-4 text-white">
      <ul className="flex justify-around">
        <li><a href="#home" className="hover:text-blue-800">Home</a></li>
        <li><a href="#about" className="hover:text-blue-800">About Us</a></li>
        <li><a href="#events" className="hover:text-blue-800">Events</a></li>
        <li><a href="#contact" className="hover:text-blue-800">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
