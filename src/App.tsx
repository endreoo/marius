import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { InstagramFeed } from './components/InstagramFeed';
import { CartProvider } from './hooks/useCart';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Menu />
        <About />
        <InstagramFeed />
      </div>
    </CartProvider>
  );
}

export default App;