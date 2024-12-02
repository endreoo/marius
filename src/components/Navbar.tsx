import React, { useState } from 'react';
import { Menu as MenuIcon, ShoppingBag } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { Cart } from './Cart';

export function Navbar() {
  const { itemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  return (
    <>
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <MenuIcon className="h-6 w-6 text-gray-600 sm:hidden" />
              <span className="ml-2 sm:ml-0 text-xl font-bold text-orange-600">Saveur</span>
            </div>
            
            <div className="hidden sm:flex space-x-8">
              <a href="#menu" className="text-gray-600 hover:text-orange-600">Menu</a>
              <a href="#about" className="text-gray-600 hover:text-orange-600">Our Story</a>
              <a href="#contact" className="text-gray-600 hover:text-orange-600">Contact</a>
            </div>

            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative"
            >
              <ShoppingBag className="h-6 w-6 text-gray-600 hover:text-orange-600 cursor-pointer" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}