import React from 'react';
import Link from 'next/link';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border group">
      <Link href={`/product/${product.id}`}>
        <div className="h-60 overflow-hidden relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.oldPrice && (
            <Badge className="absolute top-2 right-2 bg-accent">
              Sale
            </Badge>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium text-gray-500">{product.brand}</span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm ml-1">{product.rating}</span>
          </div>
        </div>
        
        <Link href={`/product/${product.id}`} className="hover:text-primary transition-colors">
          <h3 className="font-medium text-lg mb-2 line-clamp-2">{product.name}</h3>
        </Link>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {product.oldPrice ? (
              <>
                <span className="font-bold text-lg">${product.price}</span>
                <span className="text-gray-400 line-through ml-2 text-sm">${product.oldPrice}</span>
              </>
            ) : (
              <span className="font-bold text-lg">${product.price}</span>
            )}
          </div>
          {!product.inStock && (
            <Badge variant="outline" className="text-red-500 border-red-200 bg-red-50">
              Out of Stock
            </Badge>
          )}
        </div>
        
        <Button 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          disabled={!product.inStock}
          className="w-full"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
