
import React from 'react';
import { Layout } from '@/components/Layout';
import { Truck, RotateCcw, Clock, Shield } from 'lucide-react';

const Shipping = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-2">Shipping & Returns</h1>
        <p className="text-gray-600 mb-8">Information about our shipping policies and return procedures.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
              <Truck className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold mb-3">Shipping Policy</h2>
            <div className="space-y-4">
              <p>
                We offer several shipping options to ensure you receive your order in a timeframe that works for you.
                All orders are processed within 1-2 business days.
              </p>
              <div>
                <h3 className="font-medium">Shipping Methods:</h3>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Standard Shipping (3-5 business days) - $9.99</li>
                  <li>Express Shipping (2-3 business days) - $14.99</li>
                  <li>Next Day Delivery (1 business day) - $24.99</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Free Shipping:</h3>
                <p>Orders over $99 qualify for free standard shipping within the continental United States.</p>
              </div>
              <div>
                <h3 className="font-medium">International Shipping:</h3>
                <p>We ship to select international destinations. International orders may be subject to import duties and taxes, 
                which are the responsibility of the recipient.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
              <RotateCcw className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold mb-3">Returns & Exchanges</h2>
            <div className="space-y-4">
              <p>
                We want you to be completely satisfied with your purchase. If for any reason you're not, we offer
                a straightforward return and exchange policy.
              </p>
              <div>
                <h3 className="font-medium">Return Eligibility:</h3>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Items must be returned within 30 days of delivery</li>
                  <li>Products must be in original, unused condition with all packaging</li>
                  <li>Return shipping costs are the responsibility of the customer unless the item is defective</li>
                  <li>Refunds will be issued to the original payment method</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Exceptions:</h3>
                <p>Some items, such as accessories that have been opened, may not be eligible for return due to 
                  hygiene and safety reasons.</p>
              </div>
              <div>
                <h3 className="font-medium">Defective Items:</h3>
                <p>If you receive a defective item, please contact our customer service team within 48 hours of delivery.
                  We'll arrange for a return or replacement at no cost to you.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-xl font-bold mb-4">How to Return an Item</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 border">
                <span className="font-bold text-primary">1</span>
              </div>
              <h3 className="font-medium mb-2">Initiate a Return</h3>
              <p className="text-gray-600">Log into your account and select the order containing the item you wish to return. 
              Click on "Return Item" and follow the prompts.</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 border">
                <span className="font-bold text-primary">2</span>
              </div>
              <h3 className="font-medium mb-2">Package Your Return</h3>
              <p className="text-gray-600">Securely pack the item in its original packaging along with the return form
              you'll receive by email.</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 border">
                <span className="font-bold text-primary">3</span>
              </div>
              <h3 className="font-medium mb-2">Ship Your Return</h3>
              <p className="text-gray-600">Use the shipping label provided and drop off the package at the specified
              carrier location. Keep the tracking number for reference.</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold mb-3">Processing Times</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Order Processing:</h3>
                <p>Orders are typically processed within 1-2 business days after payment confirmation.</p>
              </div>
              <div>
                <h3 className="font-medium">Return Processing:</h3>
                <p>Once we receive your return, it takes 3-5 business days to inspect the item and process your refund.
                  You'll receive an email notification when your refund has been issued.</p>
              </div>
              <div>
                <h3 className="font-medium">Refund Timing:</h3>
                <p>After processing, refunds may take an additional 3-5 business days to appear in your account,
                  depending on your financial institution.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold mb-3">Our Guarantee</h2>
            <div className="space-y-4">
              <p>
                Your satisfaction is our top priority. We stand behind the quality of our products and are 
                committed to providing excellent service.
              </p>
              <div>
                <h3 className="font-medium">Satisfaction Guarantee:</h3>
                <p>If you're not completely satisfied with your purchase, you can return it within 30 days
                  for a full refund or exchange.</p>
              </div>
              <div>
                <h3 className="font-medium">Price Match:</h3>
                <p>Found the same product at a lower price elsewhere? Contact us within 7 days of purchase, 
                  and we'll match the price if it meets our eligibility requirements.</p>
              </div>
              <div>
                <h3 className="font-medium">Damaged Items:</h3>
                <p>In the rare event that your item arrives damaged, please contact us within 48 hours, and we'll
                  expedite a replacement at no additional cost.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-xl font-bold mb-2">Need assistance with a return?</h2>
          <p className="text-gray-600 mb-4">Our customer support team is ready to help you</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:returns@phoneshop.com" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Email Returns Department
            </a>
            <a href="tel:+1234567890" className="bg-white border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
              Call (123) 456-7890
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shipping;
