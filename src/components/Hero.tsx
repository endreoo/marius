import React from 'react';

export function Hero() {
  return (
    <div className="relative h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
          alt="Delicious food spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Experience Culinary Excellence<br />at Your Doorstep
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Authentic flavors crafted with passion by Chef Marius Them Enger,
          delivered fresh to your home in Ngong Road, Nairobi
        </p>
        <a
          href="#menu"
          className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}