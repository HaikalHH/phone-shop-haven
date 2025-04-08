
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DollarSign } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';

interface PriceNegotiationProps {
  productId: number;
  productName: string;
  originalPrice: number;
}

export const PriceNegotiation: React.FC<PriceNegotiationProps> = ({ 
  productId, 
  productName, 
  originalPrice 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [requestedPrice, setRequestedPrice] = useState('');
  const { isAuthenticated } = useAuth();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const requestedAmount = parseFloat(requestedPrice);
    
    if (requestedAmount <= 0) {
      toast.error('Please enter a valid price');
      return;
    }
    
    if (requestedAmount >= originalPrice) {
      toast.error('Requested price must be lower than the original price');
      return;
    }
    
    // Here you would typically send the price request to the server
    toast.success('Price negotiation request submitted successfully! We will review your request and get back to you soon.');
    setIsOpen(false);
    setRequestedPrice('');
  };
  
  if (!isAuthenticated) {
    return (
      <Button 
        variant="outline" 
        className="w-full mt-4"
        onClick={() => toast.error('Please log in to request a price negotiation')}
      >
        <DollarSign className="h-4 w-4 mr-2" />
        Request Price Negotiation
      </Button>
    );
  }
  
  return (
    <div className="mt-4">
      {!isOpen ? (
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => setIsOpen(true)}
        >
          <DollarSign className="h-4 w-4 mr-2" />
          Request Price Negotiation
        </Button>
      ) : (
        <div className="border rounded-lg p-4">
          <h3 className="font-medium mb-2">Request a special price</h3>
          <p className="text-sm text-gray-500 mb-4">
            Enter your desired price for this product. Our team will review your request
            and respond within 24 hours.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="requestedPrice">Your Price ($)</Label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                <Input
                  id="requestedPrice"
                  type="number"
                  step="0.01"
                  min="0"
                  max={originalPrice - 0.01}
                  className="pl-8"
                  value={requestedPrice}
                  onChange={(e) => setRequestedPrice(e.target.value)}
                  required
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Original price: ${originalPrice.toFixed(2)}
              </p>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">
                Submit Request
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
