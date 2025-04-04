
import React from 'react';
import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-8">Find answers to the most common questions about our products and services.</p>
        
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Popular Customer Service Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              to="/shipping" 
              className="p-4 border rounded-lg hover:border-primary transition-colors flex justify-between items-center"
            >
              <span className="font-medium">Shipping & Returns</span>
              <ArrowRight className="h-4 w-4 text-primary" />
            </Link>
            <Link 
              to="/warranty" 
              className="p-4 border rounded-lg hover:border-primary transition-colors flex justify-between items-center"
            >
              <span className="font-medium">Warranty Information</span>
              <ArrowRight className="h-4 w-4 text-primary" />
            </Link>
            <Link 
              to="/privacy" 
              className="p-4 border rounded-lg hover:border-primary transition-colors flex justify-between items-center"
            >
              <span className="font-medium">Privacy Policy</span>
              <ArrowRight className="h-4 w-4 text-primary" />
            </Link>
            <Link 
              to="/terms" 
              className="p-4 border rounded-lg hover:border-primary transition-colors flex justify-between items-center"
            >
              <span className="font-medium">Terms & Conditions</span>
              <ArrowRight className="h-4 w-4 text-primary" />
            </Link>
          </div>
        </div>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Orders & Payments</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How can I track my order?</AccordionTrigger>
                <AccordionContent>
                  You can track your order by logging into your account and visiting the "Order History" section. 
                  There you will find all your orders with their current status and tracking information when available.
                  Alternatively, you can use the tracking number provided in your shipping confirmation email.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept various payment methods including major credit/debit cards (Visa, Mastercard, American Express), 
                  PayPal, and Apple Pay. All payments are securely processed and encrypted to ensure your financial information 
                  is protected.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I change or cancel my order?</AccordionTrigger>
                <AccordionContent>
                  You can change or cancel your order within 1 hour of placing it, provided that it hasn't been processed for 
                  shipping yet. To do so, please contact our customer service team immediately at support@phoneshop.com or 
                  call (123) 456-7890.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">Products & Services</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-4">
                <AccordionTrigger>Do you sell refurbished or used phones?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer certified refurbished phones that have been thoroughly inspected, repaired, and tested to 
                  ensure they work like new. All refurbished phones come with a 1-year warranty and are clearly labeled as 
                  refurbished in the product description.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Are your products compatible with all carriers?</AccordionTrigger>
                <AccordionContent>
                  Most of our smartphones are unlocked and compatible with major carriers. However, some devices may have 
                  specific network requirements. We recommend checking the product description or contacting us to confirm 
                  compatibility with your carrier before making a purchase.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Can I negotiate the price of products?</AccordionTrigger>
                <AccordionContent>
                  Yes, we now offer a price negotiation feature for registered customers. Simply log in to your account, 
                  visit the product page, and click the "Request Price" button. Enter your desired price and submit your request. 
                  Our team will review your offer and respond within 24 hours with an approval, counter-offer, or decline.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">Account & Technical Support</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-7">
                <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                <AccordionContent>
                  To reset your password, click on the "Forgot Password" link on the login page. Enter the email address 
                  associated with your account, and we'll send you a link to create a new password. If you don't receive 
                  the email, please check your spam folder or contact customer support.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>Do you provide technical support for devices?</AccordionTrigger>
                <AccordionContent>
                  While we don't provide direct technical support for device issues, we can help guide you to the 
                  appropriate manufacturer support channels. For warranty claims or defective products, please contact 
                  our customer service team, and we'll assist you with the return or replacement process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>How can I update my shipping address?</AccordionTrigger>
                <AccordionContent>
                  You can update your shipping address by logging into your account and navigating to the "Account Settings" 
                  or "Address Book" section. If you need to change the shipping address for an order that has already been 
                  placed but not yet shipped, please contact our customer service team immediately.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        
        <div className="mt-12 bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-xl font-bold mb-2">Still have questions?</h2>
          <p className="text-gray-600 mb-4">Our customer support team is ready to help you</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/#contact-section" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Contact Us
            </Link>
            <a href="mailto:support@phoneshop.com" className="bg-white border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
              Email Support
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
