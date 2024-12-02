import React from 'react';
import { ChefHat, Leaf, Clock } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80"
              alt="Chef Marius Them Enger"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Meet Chef Marius Them Enger</h2>
            <p className="text-gray-600 mb-6">
              With over 15 years of culinary expertise spanning across Europe and Africa,
              Chef Marius brings his unique food philosophy to the heart of Nairobi.
              His approach combines traditional techniques with local ingredients to create
              dishes that tell a story of cultural fusion and innovation.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <ChefHat className="h-6 w-6 text-orange-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold">Culinary Philosophy</h3>
                  <p className="text-gray-600">
                    "Food should be both an adventure and a comfort - pushing boundaries
                    while respecting traditions."
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Leaf className="h-6 w-6 text-orange-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold">Fresh Ingredients</h3>
                  <p className="text-gray-600">
                    We source our ingredients from local farmers, ensuring the freshest
                    produce for our dishes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-orange-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold">Made to Order</h3>
                  <p className="text-gray-600">
                    Every dish is prepared fresh when you order, maintaining the highest
                    quality standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}