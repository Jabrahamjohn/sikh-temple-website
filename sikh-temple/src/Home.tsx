import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <motion.section
      id="home"
      className="h-screen flex items-center justify-center bg-primary-blue text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold text-primary-orange">
          Welcome to Mombasa Sikh Temple
        </h1>
        <p className="text-lg mt-6">
          Serving the Sikh community for over 100 years.
        </p>
      </div>
    </motion.section>
  );
};

export default Home;
``