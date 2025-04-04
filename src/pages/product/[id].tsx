
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Star, Truck, ShieldCheck, ArrowLeft, ShoppingCart, Heart, Share2, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/Layout';
import { useCart } from '@/context/CartContext';
import { getProductById } from '@/data/products';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PriceNegotiation } from '@/components/PriceNegotiation';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = getProductById(Number(id));

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">The product you are looking for does not exist or has been removed.</p>
          <Button onClick={() => router.push('/products')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </div>
      </Layout>
    );
  }

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleAddToWishlist = () => {
    toast.success(`${product.name} added to wishlist`);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard');
  };

  return (
    <Layout>
      <div className="container mx-auto py-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center mb-6 text-sm">
          <button onClick={() => router.back()} className="hover:text-primary flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </button>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-primary">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-500">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="bg-white rounded-lg overflow-hidden mb-4 border">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-96 object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border rounded-md overflow-hidden h-24 ${selectedImage === index ? 'ring-2 ring-primary' : ''}`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-1">
                <Badge className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20">
                  {product.brand}
                </Badge>
                {product.inStock ? (
                  <Badge className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100">
                    In Stock
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-red-500 border-red-200 bg-red-50">
                    Out of Stock
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              
              <div className="flex items-center mt-2 mb-4">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">
                  {product.rating.toFixed(1)} ({product.reviews} reviews)
                </span>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center">
                  {product.oldPrice ? (
                    <>
                      <span className="text-3xl font-bold">${product.price}</span>
                      <span className="text-gray-400 line-through ml-3">${product.oldPrice}</span>
                      <Badge className="ml-3 bg-accent text-white">
                        Save ${(product.oldPrice - product.price).toFixed(2)}
                      </Badge>
                    </>
                  ) : (
                    <span className="text-3xl font-bold">${product.price}</span>
                  )}
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              {/* Quantity Selector and Add to Cart */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="h-10 w-10 rounded-r-none"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  <div className="h-10 w-16 flex items-center justify-center border-y">
                    {quantity}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(1)}
                    className="h-10 w-10 rounded-l-none"
                  >
                    <ChevronUp className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button
                  className="flex-1"
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleAddToWishlist}
                  className="h-12 w-12"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleShare}
                  className="h-12 w-12"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Price Negotiation */}
              <PriceNegotiation 
                productId={product.id} 
                productName={product.name} 
                originalPrice={product.price} 
              />
              
              {/* Shipping & Returns */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <Truck className="h-5 w-5 text-primary mr-3" />
                  <span className="text-sm">Free shipping over $50</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheck className="h-5 w-5 text-primary mr-3" />
                  <span className="text-sm">30-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="specs">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="specs" className="pt-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-500">Display</h4>
                      <p>{product.specs.display}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">Processor</h4>
                      <p>{product.specs.processor}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">RAM</h4>
                      <p>{product.specs.ram}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">Storage</h4>
                      <p>{product.specs.storage}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-500">Camera</h4>
                      <p>{product.specs.camera}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">Battery</h4>
                      <p>{product.specs.battery}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">Operating System</h4>
                      <p>{product.specs.os}</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="features" className="pt-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="list-disc pl-5 space-y-3">
                  <li>High-performance processor for smooth multitasking</li>
                  <li>Advanced camera system for professional-quality photos</li>
                  <li>Long-lasting battery life with fast charging capability</li>
                  <li>Stunning display with vibrant colors and deep contrasts</li>
                  <li>Enhanced security features to protect your data</li>
                  <li>Latest operating system with regular security updates</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Customer Reviews</h3>
                  <Button>Write a Review</Button>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-medium">
                      {product.rating.toFixed(1)} out of 5
                    </span>
                  </div>
                  <p className="text-gray-500">{product.reviews} global ratings</p>
                </div>
                
                <div className="space-y-6">
                  {/* Sample reviews */}
                  <div className="border-b pb-6">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">Sarah Johnson</h4>
                      <span className="text-gray-500">2 days ago</span>
                    </div>
                    <div className="flex items-center mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-4 w-4 ${i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <p>Amazing phone with an excellent camera! Battery life is impressive and the display is stunning. Very satisfied with my purchase.</p>
                  </div>
                  
                  <div className="border-b pb-6">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">Michael Chen</h4>
                      <span className="text-gray-500">1 week ago</span>
                    </div>
                    <div className="flex items-center mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <p>Great performance and the user interface is very intuitive. Only giving 4 stars because I wish the battery lasted a bit longer under heavy use.</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">Emily Rodriguez</h4>
                      <span className="text-gray-500">2 weeks ago</span>
                    </div>
                    <div className="flex items-center mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-4 w-4 ${i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <p>Absolutely love this phone! The camera quality exceeded my expectations and the processing power handles everything I throw at it without any lag.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
