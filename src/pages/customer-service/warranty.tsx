
import React from 'react';
import { Layout } from '@/components/Layout';
import { Shield, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react';

const Warranty = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-2">Warranty Information</h1>
        <p className="text-gray-600 mb-8">Learn about our warranty policies and how to get support for your products.</p>
        
        <div className="bg-primary/10 p-8 rounded-lg mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <Shield className="h-12 w-12 text-primary flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold mb-2">Our Standard Warranty</h2>
              <p>All products purchased from PhoneShop Haven come with a standard manufacturer's warranty. 
              We also offer extended warranty options for additional protection and peace of mind.</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-bold mb-3">Manufacturer's Warranty</h2>
            <div className="space-y-3">
              <p>All new smartphones and tablets come with the original manufacturer's warranty, typically covering:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Hardware defects</li>
                <li>Manufacturing issues</li>
                <li>Technical malfunctions</li>
              </ul>
              <p>Warranty periods vary by brand:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Apple: 1 year limited warranty</li>
                <li>Samsung: 1 year limited warranty</li>
                <li>Google: 1 year limited warranty</li>
                <li>Other brands: Varies from 90 days to 1 year</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-bold mb-3">Extended Protection Plans</h2>
            <div className="space-y-3">
              <p>Enhance your coverage with our optional extended protection plans:</p>
              <div>
                <p className="font-medium">Basic Plan ($49/year):</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Extends manufacturer's warranty by 1 year</li>
                  <li>Covers mechanical and electrical breakdowns</li>
                  <li>Free shipping for warranty service</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Premium Plan ($99/year):</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Extends manufacturer's warranty by 2 years</li>
                  <li>Covers mechanical and electrical breakdowns</li>
                  <li>Accidental damage protection (up to 2 claims per year)</li>
                  <li>Express replacement service</li>
                  <li>24/7 priority technical support</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-lg font-bold mb-3">Refurbished Products</h2>
            <div className="space-y-3">
              <p>All certified refurbished products include:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>90-day standard warranty</li>
                <li>Full inspection and testing</li>
                <li>Replacement of defective parts</li>
                <li>Software updates and reset</li>
              </ul>
              <p>Upgrade options:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Extended warranty available for purchase</li>
                <li>30-day satisfaction guarantee</li>
                <li>Technical support assistance</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm border mb-12">
          <h2 className="text-xl font-bold mb-6">What's Covered & What's Not</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg">What's Covered</h3>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Manufacturing defects</li>
                    <li>Hardware malfunctions</li>
                    <li>Battery issues (within specified parameters)</li>
                    <li>Software issues (when caused by hardware)</li>
                    <li>Display and touchscreen failures (not caused by impact)</li>
                    <li>Speaker and microphone failures</li>
                    <li>Power and charging issues</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg">What's Not Covered</h3>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Physical damage (drops, spills, etc.)</li>
                    <li>Water damage</li>
                    <li>Normal wear and tear</li>
                    <li>Cosmetic damage (scratches, dents)</li>
                    <li>Unauthorized repairs or modifications</li>
                    <li>Damage from accidents or misuse</li>
                    <li>Loss or theft</li>
                    <li>3rd party software issues</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6">How to Submit a Warranty Claim</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="font-bold text-gray-700">1</span>
              </div>
              <h3 className="font-medium mb-2">Verify Eligibility</h3>
              <p className="text-gray-600">Check if your product is still within the warranty period and that the issue is covered.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="font-bold text-gray-700">2</span>
              </div>
              <h3 className="font-medium mb-2">Contact Support</h3>
              <p className="text-gray-600">Reach out to our customer service team via phone, email, or by submitting a ticket online.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="font-bold text-gray-700">3</span>
              </div>
              <h3 className="font-medium mb-2">Provide Details</h3>
              <p className="text-gray-600">Describe the issue and provide proof of purchase and product information when requested.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div className="bg-gray-100 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="font-bold text-gray-700">4</span>
              </div>
              <h3 className="font-medium mb-2">Resolution</h3>
              <p className="text-gray-600">We'll assess your claim and provide repair, replacement, or refund as appropriate.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm border mb-12">
          <h2 className="text-xl font-bold mb-6">Frequently Asked Warranty Questions</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <HelpCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">How do I check if my device is still under warranty?</h3>
                <p className="text-gray-600 mt-1">You can check your warranty status by logging into your account and 
                viewing your purchase history. Alternatively, you can contact our customer service with your order number 
                or device serial number.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <HelpCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">What documents do I need for a warranty claim?</h3>
                <p className="text-gray-600 mt-1">You'll need your proof of purchase (order confirmation or invoice), 
                the device serial number, and details about the issue you're experiencing. Photos or videos demonstrating 
                the problem may also be helpful.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <HelpCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">How long does the warranty service process take?</h3>
                <p className="text-gray-600 mt-1">Standard warranty service typically takes 7-10 business days from 
                receipt of your device to completion of repair or replacement. Premium Protection Plan members receive 
                expedited service, usually within 3-5 business days.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <HelpCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Can I transfer the warranty if I sell my device?</h3>
                <p className="text-gray-600 mt-1">The standard manufacturer's warranty is transferable to new owners 
                for the remainder of the warranty period. However, extended protection plans are typically linked to 
                the original purchaser and cannot be transferred.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-xl font-bold mb-2">Need help with a warranty claim?</h2>
          <p className="text-gray-600 mb-4">Our warranty support team is available to assist you</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:warranty@phoneshop.com" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Email Warranty Support
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

export default Warranty;
