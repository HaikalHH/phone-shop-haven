
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, ArrowRight, ChevronLeft } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!isAuthenticated) {
      toast.error('Please login to checkout');
      navigate('/login', { state: { from: '/cart' } });
      return;
    }
    
    toast.success('Order placed successfully!');
    clearCart();
    navigate('/');
  };

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
          <ShoppingCart className="mr-2 h-7 w-7" />
          Shopping Cart
        </h1>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="p-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b last:border-b-0 last:pb-0">
                      <div className="w-full sm:w-auto sm:flex-none mr-6 mb-4 sm:mb-0">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="w-24 h-24 object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-grow mb-4 sm:mb-0">
                        <h3 className="font-medium text-lg">
                          <Link to={`/product/${item.product.id}`} className="hover:text-primary transition-colors">
                            {item.product.name}
                          </Link>
                        </h3>
                        <p className="text-gray-500 text-sm mb-2">{item.product.brand}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>${item.product.price}</span>
                          {item.quantity > 1 && (
                            <span className="ml-1">x {item.quantity}</span>
                          )}
                        </div>
                      </div>
                      <div className="w-full sm:w-auto flex items-center justify-between">
                        <div className="flex items-center border rounded-md">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-3 py-1 hover:bg-gray-100"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-3 py-1 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                        <div className="ml-6 text-right">
                          <div className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</div>
                          <button 
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-red-500 hover:text-red-700 flex items-center mt-1 text-sm"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/products" className="inline-flex items-center">
                      <ChevronLeft className="mr-1 h-4 w-4" />
                      Continue Shopping
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700 border-red-200 hover:border-red-300"
                  >
                    <Trash2 className="mr-1 h-4 w-4" />
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden sticky top-24">
                <div className="p-6">
                  <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Subtotal ({items.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                      <span>${getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Tax</span>
                      <span>${(getCartTotal() * 0.07).toFixed(2)}</span>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex justify-between font-bold text-lg mb-6">
                    <span>Total</span>
                    <span>${(getCartTotal() * 1.07).toFixed(2)}</span>
                  </div>
                  <Button 
                    className="w-full"
                    size="lg" 
                    onClick={handleCheckout}
                  >
                    Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <div className="mt-4 text-center text-sm text-gray-500">
                    Secure checkout powered by Stripe
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
            <div className="max-w-md mx-auto">
              <ShoppingCart className="h-16 w-16 mx-auto text-gray-400 mb-6" />
              <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
              <p className="text-gray-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
              <Button asChild>
                <Link to="/products">Start Shopping</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
