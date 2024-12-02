import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

const INSTAGRAM_USERNAME = 'mtephoto';
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;

// Curated selection of food photography images that match the style
const FEATURED_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80",
    alt: "Delicious Pizza"
  },
  {
    url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80",
    alt: "Healthy Salad Bowl"
  },
  {
    url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80",
    alt: "Fresh Pasta Dish"
  },
  {
    url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80",
    alt: "Artisan Pizza"
  },
  {
    url: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80",
    alt: "Food Photography"
  },
  {
    url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80",
    alt: "Culinary Art"
  }
];

export function InstagramFeed() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Follow Our Culinary Journey</h2>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors"
          >
            <Instagram className="h-5 w-5 mr-2" />
            @{INSTAGRAM_USERNAME}
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {FEATURED_IMAGES.map((image, index) => (
            <a
              key={index}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden aspect-square"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ExternalLink className="text-white h-6 w-6" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-colors"
          >
            View More on Instagram
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}