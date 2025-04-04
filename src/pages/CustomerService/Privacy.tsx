
import React from 'react';
import { Layout } from '@/components/Layout';
import { Shield, Lock, Server, Eye } from 'lucide-react';

const Privacy = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">Last Updated: April 4, 2025</p>
        
        <div className="bg-primary/10 p-6 rounded-lg mb-8">
          <p>
            At PhoneShop Haven, we respect your privacy and are committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
            our website or make a purchase. Please read this privacy policy carefully. If you do not agree with the terms
            of this privacy policy, please do not access the site.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-primary mr-2" />
              <h2 className="text-xl font-bold">Information We Collect</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Personal Information</h3>
                <p className="text-gray-600 mt-1">We may collect personal information that you voluntarily provide to us when you:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600">
                  <li>Register on our website</li>
                  <li>Place an order</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Participate in promotions or surveys</li>
                  <li>Contact our customer service</li>
                </ul>
                <p className="text-gray-600 mt-2">This information may include:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600">
                  <li>Name, email address, phone number</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment information</li>
                  <li>Account credentials</li>
                  <li>Purchase history</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium">Automatically Collected Information</h3>
                <p className="text-gray-600 mt-1">When you visit our website, our servers may automatically log the following information:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Referring website</li>
                  <li>Pages visited</li>
                  <li>Time and date of visits</li>
                  <li>Time spent on pages</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-primary mr-2" />
              <h2 className="text-xl font-bold">How We Use Your Information</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600">We may use the information we collect for various purposes, including to:</p>
              
              <div>
                <h3 className="font-medium">Process Transactions</h3>
                <p className="text-gray-600 mt-1">We use your information to process purchases, shipments, returns, 
                and payments, and to communicate with you about orders, products, services, and promotional offers.</p>
              </div>
              
              <div>
                <h3 className="font-medium">Maintain and Improve Our Website</h3>
                <p className="text-gray-600 mt-1">We use your information to ensure our website functions properly, 
                optimize user experience, analyze usage trends, and develop new features and functionality.</p>
              </div>
              
              <div>
                <h3 className="font-medium">Personalize Your Experience</h3>
                <p className="text-gray-600 mt-1">We use your information to personalize your shopping experience, 
                including displaying products based on your interests, purchase history, and browsing behavior.</p>
              </div>
              
              <div>
                <h3 className="font-medium">Marketing and Communications</h3>
                <p className="text-gray-600 mt-1">With your consent, we may use your information to send you promotional
                communications about new products, special offers, or other information we think you may find interesting.</p>
              </div>
              
              <div>
                <h3 className="font-medium">Security and Fraud Prevention</h3>
                <p className="text-gray-600 mt-1">We use your information to detect and prevent fraudulent transactions,
                unauthorized access to your account, and other illegal activities.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-4">
              <Server className="h-6 w-6 text-primary mr-2" />
              <h2 className="text-xl font-bold">How We Share Your Information</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600">We may share your personal information in the following situations:</p>
              
              <div>
                <h3 className="font-medium">Service Providers</h3>
                <p className="text-gray-600 mt-1">We may share your information with third-party vendors, service providers,
                contractors, or agents who perform services for us or on our behalf, such as payment processing, shipping,
                customer service, and marketing assistance.</p>
              </div>
              
              <div>
                <h3 className="font-medium">Business Transfers</h3>
                <p className="text-gray-600 mt-1">If we are involved in a merger, acquisition, or sale of all or a portion
                of our assets, your information may be transferred as part of that transaction.</p>
              </div>
              
              <div>
                <h3 className="font-medium">Legal Requirements</h3>
                <p className="text-gray-600 mt-1">We may disclose your information where required to do so by law or in
                response to valid requests by public authorities (e.g., a court or a government agency).</p>
              </div>
              
              <div>
                <h3 className="font-medium">With Your Consent</h3>
                <p className="text-gray-600 mt-1">We may disclose your personal information for any other purpose with
                your consent.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-4">
              <Eye className="h-6 w-6 text-primary mr-2" />
              <h2 className="text-xl font-bold">Cookies and Tracking Technologies</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600">We use cookies, web beacons, and other tracking technologies to collect
              information about your browsing activities on our website.</p>
              
              <div>
                <h3 className="font-medium">Types of Cookies We Use</h3>
                <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600">
                  <li><span className="font-medium">Essential cookies:</span> Necessary for the website to function properly</li>
                  <li><span className="font-medium">Preference cookies:</span> Enable the website to remember your preferences</li>
                  <li><span className="font-medium">Analytics cookies:</span> Help us understand how visitors interact with our website</li>
                  <li><span className="font-medium">Marketing cookies:</span> Track your browsing habits to deliver targeted advertising</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium">Your Cookie Choices</h3>
                <p className="text-gray-600 mt-1">Most web browsers are set to accept cookies by default. If you prefer,
                you can usually choose to set your browser to remove or reject cookies. Please note that if you choose
                to remove or reject cookies, this could affect certain features or services of our website.</p>
              </div>
              
              <div>
                <h3 className="font-medium">Do Not Track</h3>
                <p className="text-gray-600 mt-1">Some browsers have a "Do Not Track" feature that signals to websites that
                you visit that you do not want to have your online activity tracked. Our website does respond to "Do Not Track"
                signals from your browser.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-12">
          <h2 className="text-xl font-bold mb-4">Your Privacy Rights</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Access and Control</h3>
              <p className="text-gray-600 mt-1">You have the right to access, update, or delete the personal information
              we have on you. You can do this by logging into your account settings or by contacting us directly.</p>
            </div>
            
            <div>
              <h3 className="font-medium">Marketing Communications</h3>
              <p className="text-gray-600 mt-1">You can opt out of receiving promotional communications from us by following
              the unsubscribe instructions provided in the emails we send or by contacting us directly.</p>
            </div>
            
            <div>
              <h3 className="font-medium">California Privacy Rights</h3>
              <p className="text-gray-600 mt-1">California residents may have additional rights regarding their personal
              information under the California Consumer Privacy Act (CCPA). These rights include:</p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600">
                <li>The right to know what personal information is collected, used, shared, or sold</li>
                <li>The right to delete personal information held by businesses</li>
                <li>The right to opt-out of the sale of personal information</li>
                <li>The right to non-discrimination for exercising their CCPA rights</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium">European Privacy Rights</h3>
              <p className="text-gray-600 mt-1">If you are a resident of the European Economic Area (EEA), you have certain
              data protection rights under the General Data Protection Regulation (GDPR). These include the right to:</p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600">
                <li>Access your personal information</li>
                <li>Rectify inaccurate personal information</li>
                <li>Erase your personal information</li>
                <li>Restrict or object to our processing of your personal information</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-12">
          <h2 className="text-xl font-bold mb-4">Data Security</h2>
          
          <div className="space-y-4">
            <p className="text-gray-600">We use administrative, technical, and physical security measures to help protect
            your personal information from unauthorized access, use, or disclosure. These measures include:</p>
            
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>SSL encryption for data transmission</li>
              <li>Secure storage of personal information</li>
              <li>Regular security assessments and audits</li>
              <li>Limited access to personal information by employees</li>
              <li>Employee training on data security and privacy practices</li>
            </ul>
            
            <p className="text-gray-600">While we have taken reasonable steps to secure the personal information you provide
            to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method
            of data transmission can be guaranteed against any interception or other type of misuse.</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-12">
          <h2 className="text-xl font-bold mb-4">Changes to This Privacy Policy</h2>
          
          <div className="space-y-4">
            <p className="text-gray-600">We may update our privacy policy from time to time. We will notify you of any
            changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of
            this privacy policy.</p>
            
            <p className="text-gray-600">You are advised to review this privacy policy periodically for any changes.
            Changes to this privacy policy are effective when they are posted on this page.</p>
            
            <p className="text-gray-600">Your continued use of our website following the posting of changes constitutes
            your acceptance of such changes.</p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-600 mb-4">If you have any questions or concerns about our Privacy Policy, please contact us:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:privacy@phoneshop.com" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Email Privacy Team
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

export default Privacy;
