
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ShoppingCart, Search, Menu, X, User, LogOut, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { Badge } from '@/components/ui/badge';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartCount } = useCart();
  const { user, isAuthenticated, logout, isAdmin } = useAuth();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">PhoneShop</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="font-medium hover:text-primary transition-colors">Home</Link>
            <Link href="/products" className="font-medium hover:text-primary transition-colors">Products</Link>
            <a 
              href="#contact-section" 
              onClick={(e) => { 
                e.preventDefault(); 
                scrollToContact(); 
              }}
              className="font-medium hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-64 pr-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                type="submit"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>

            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <span className="mr-2 text-sm font-medium">Hi, {user?.name.split(' ')[0]}</span>
                  <div className="relative group">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <User className="h-5 w-5" />
                    </Button>
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="p-2">
                        <Link href="/profile" className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
                          <User className="h-4 w-4 mr-2" />
                          Profile
                        </Link>
                        {isAdmin() && (
                          <Link href="/admin" className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
                            <LayoutDashboard className="h-4 w-4 mr-2" />
                            Admin Dashboard
                          </Link>
                        )}
                        <button 
                          onClick={logout}
                          className="flex w-full items-center px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
            )}

            <Link href="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {getCartCount() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-accent text-white">
                    {getCartCount()}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Link href="/cart" className="mr-4 relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {getCartCount() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-accent text-white">
                    {getCartCount()}
                  </Badge>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto py-4">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="flex">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" className="ml-2">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </form>
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="font-medium py-2 hover:text-primary transition-colors" onClick={toggleMenu}>Home</Link>
              <Link href="/products" className="font-medium py-2 hover:text-primary transition-colors" onClick={toggleMenu}>Products</Link>
              <a 
                href="#contact-section"
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToContact();
                }}
              >
                Contact
              </a>
              
              {isAuthenticated ? (
                <>
                  <Link href="/profile" className="font-medium py-2 hover:text-primary transition-colors" onClick={toggleMenu}>Profile</Link>
                  {isAdmin() && (
                    <Link href="/admin" className="font-medium py-2 hover:text-primary transition-colors" onClick={toggleMenu}>Admin Dashboard</Link>
                  )}
                  <button 
                    onClick={() => { logout(); toggleMenu(); }}
                    className="text-left font-medium py-2 hover:text-primary transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link href="/login" className="font-medium py-2 hover:text-primary transition-colors" onClick={toggleMenu}>Login</Link>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
