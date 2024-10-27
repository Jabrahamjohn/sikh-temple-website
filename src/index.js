import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto p-4"
      >
        <h2 className="text-3xl font-semibold text-secondary">
          Welcome to Mombasa Sikh Temple
        </h2>
      </motion.main>
    </div>
  );
}

export default App;
