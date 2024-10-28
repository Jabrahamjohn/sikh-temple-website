// HeroSection.tsx
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }}>
      <motion.h1
        className="text-white text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to the Mombasa Sikh Temple
      </motion.h1>
      <motion.button
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        Join Us
      </motion.button>
    </div>
  );
};
