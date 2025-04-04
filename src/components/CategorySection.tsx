
import React from 'react';
import { ArrowRight, Memory } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define RAM categories
const ramCategories = [
  {
    id: 1,
    name: "4GB RAM",
    count: 12,
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "6GB RAM",
    count: 15,
    image: "https://images.unsplash.com/photo-1592664858934-9d8b0c0e8dcd?q=80&w=1780&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "8GB RAM",
    count: 18,
    image: "https://images.unsplash.com/photo-1555617778-02518510b9fa?q=80&w=1780&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "12GB RAM",
    count: 8,
    image: "https://images.unsplash.com/photo-1561816544-21ecbffa09a3?q=80&w=1974&auto=format&fit=crop"
  }
];

export const CategorySection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Shop by RAM</h2>
          <Link 
            to="/products" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
          >
            All Products 
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ramCategories.map((category) => (
            <Link 
              to={`/products?ram=${category.name.split(' ')[0]}`} 
              key={category.id}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-all">
                <div className="h-40 overflow-hidden relative">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-medium">Shop Now</span>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-lg">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count} Products</p>
                  </div>
                  <Memory className="h-6 w-6 text-primary" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
