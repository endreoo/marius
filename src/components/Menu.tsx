import React from 'react';
import { useCart } from '../hooks/useCart';

const menuItems = [
  {
    id: 1,
    name: "Classic Margherita Pizza",
    description: "Fresh tomatoes, mozzarella, basil, and our signature sauce",
    price: 1200,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80",
    category: "Pizza"
  },
  {
    id: 2,
    name: "Creamy Mushroom Pasta",
    description: "Fettuccine in rich mushroom sauce with fresh herbs",
    price: 950,
    image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&q=80",
    category: "Pasta"
  },
  {
    id: 3,
    name: "Fresh Garden Salad",
    description: "Mixed greens, cherry tomatoes, cucumber with balsamic dressing",
    price: 600,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80",
    category: "Salads"
  },
  {
    id: 4,
    name: "Homemade Guacamole",
    description: "Fresh avocados, tomatoes, onions, cilantro, and lime juice",
    price: 450,
    image: "https://images.unsplash.com/photo-1541288892379-c987c60cd049?auto=format&fit=crop&q=80",
    category: "Sides"
  },
  {
    id: 5,
    name: "Spicy House Salsa",
    description: "Fire-roasted tomatoes, jalapeños, onions, and secret spices",
    price: 350,
    image: "https://images.unsplash.com/photo-1612976023590-be5b6a14051d?auto=format&fit=crop&q=80",
    category: "Sides"
  },
  {
    id: 6,
    name: "Homemade Tortilla Chips",
    description: "Crispy corn tortillas, lightly salted and perfect for dipping",
    price: 250,
    image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&q=80",
    category: "Sides"
  }
];

export function Menu() {
  const { addToCart } = useCart();

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-orange-600 font-semibold">{item.category}</span>
                <h3 className="text-xl font-semibold mt-2">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold">KSh {item.price}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}