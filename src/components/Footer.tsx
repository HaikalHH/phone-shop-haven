
import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">PhoneShop Haven</h3>
            <p className="text-gray-600 mb-4">Your trusted destination for the latest smartphones and accessories with the best deals and outstanding customer service.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-primary transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-primary transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-600 hover:text-primary transition-colors">Shipping & Returns</Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-600 hover:text-primary transition-colors">Warranty Information</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  123 Tech Street, Digital City<br />
                  Smartphone Valley, 10001
                </span>
              </li>
              <li className="flex items-center">
                <PhoneCall className="h-5 w-5 mr-2 text-primary" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-primary transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <a href="mailto:support@phoneshop.com" className="text-gray-600 hover:text-primary transition-colors">
                  support@phoneshop.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} PhoneShop Haven. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Visa" className="h-8" />
              <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="MasterCard" className="h-8" />
              <img src="https://cdn-icons-png.flaticon.com/512/349/349230.png" alt="American Express" className="h-8" />
              <img src="https://cdn-icons-png.flaticon.com/512/349/349233.png" alt="PayPal" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
