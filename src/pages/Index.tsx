
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ShieldCheck, Truck, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { CategorySection } from '@/components/CategorySection';
import { Layout } from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Discover the Latest <span className="text-primary">Smartphones</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                Your one-stop shop for the newest smartphones from all major brands. Find your perfect device at the best price.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/products">Shop Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <img
                src="https://source.unsplash.com/xZ7TCWBFNOY/600x700"
                alt="Latest Smartphone"
                className="rounded-lg shadow-lg mx-auto max-w-md"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md hidden md:block">
                <div className="flex items-center">
                  <div className="bg-primary/10 rounded-full p-2 mr-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Latest Models</h3>
                    <p className="text-sm text-gray-500">Just Released</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-primary/10 rounded-full p-3 mr-4">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Free Shipping</h3>
                <p className="text-sm text-gray-500">On all orders over $50</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-primary/10 rounded-full p-3 mr-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Secure Payments</h3>
                <p className="text-sm text-gray-500">100% secure transactions</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-primary/10 rounded-full p-3 mr-4">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Easy Returns</h3>
                <p className="text-sm text-gray-500">30-day return policy</p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-primary/10 rounded-full p-3 mr-4">
                <Headphones className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">24/7 Support</h3>
                <p className="text-sm text-gray-500">Dedicated customer service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Categories Section */}
      <CategorySection />
      
      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-6">Stay updated with the latest smartphone releases, exclusive offers, and tech news.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Featured Brands */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Top Brands</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-12 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" alt="Samsung" className="h-8 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/OnePlus_logo.svg" alt="OnePlus" className="h-6 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Xiaomi_logo_%282021-%29.svg" alt="Xiaomi" className="h-6 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
