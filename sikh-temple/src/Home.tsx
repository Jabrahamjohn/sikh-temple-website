import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <motion.section
      id="home"
      className="h-screen flex items-center justify-center bg-orange-500 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div>
        <h1 className="text-4xl font-bold">Welcome to Mombasa Sikh Temple</h1>
        <p className="text-lg mt-4">Serving the Sikh community for over 100 years.</p>
      </div>
    </motion.section>
  );
};

export default Home;
