import React from 'react';

const Header = () => {
  return (
    <header className="bg-secondary text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mombasa Sikh Temple</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/about" className="hover:text-primary">About Us</a></li>
            <li><a href="/events" className="hover:text-primary">Events</a></li>
            <li><a href="/contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
