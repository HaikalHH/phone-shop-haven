
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export const CategorySection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Shop by Category</h2>
          <Link 
            to="/products" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
          >
            All Categories 
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              to={`/products?category=${category.name}`} 
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
                <div className="p-4">
                  <h3 className="font-medium text-lg">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} Products</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
