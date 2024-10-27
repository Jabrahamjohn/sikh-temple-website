import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold text-secondary">
          Welcome to Mombasa Sikh Temple
        </h2>
      </main>
    </div>
  );
}

export default App;
