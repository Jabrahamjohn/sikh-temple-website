import React from 'react';

// Navbar.tsx
const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">Mombasa Sikh Temple</div>
        <ul className="flex space-x-4">
          <li><a className="text-white hover:text-blue-400" href="#home">Home</a></li>
          <li><a className="text-white hover:text-blue-400" href="#about">About</a></li>
          <li><a className="text-white hover:text-blue-400" href="#events">Events</a></li>
          <li><a className="text-white hover:text-blue-400" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;
