
import React from 'react';
import { Layout } from '@/components/Layout';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Package, Truck, CreditCard, User } from 'lucide-react';

// Mock order data
const orders = [
  {
    id: 'ORD-001',
    customer: {
      id: 'C001',
      name: 'John Doe',
      email: 'john.doe@example.com'
    },
    date: '2023-04-01',
    total: 1299.00,
    status: 'Completed',
    shippingAddress: '123 Main St, Anytown, CA 12345',
    billingAddress: '123 Main St, Anytown, CA 12345',
    paymentMethod: 'Credit Card (Visa ****4567)',
    items: [
      { id: 1, name: 'iPhone 13 Pro', price: 999.00, quantity: 1, image: 'https://images.unsplash.com/photo-1592664858934-9d8b0c0e8dcd?q=80&w=1780&auto=format&fit=crop' },
      { id: 5, name: 'AirPods Pro', price: 249.00, quantity: 1, image: 'https://images.unsplash.com/photo-1592664858934-9d8b0c0e8dcd?q=80&w=1780&auto=format&fit=crop' },
      { id: 8, name: 'USB-C Charging Cable', price: 19.00, quantity: 1, image: 'https://images.unsplash.com/photo-1592664858934-9d8b0c0e8dcd?q=80&w=1780&auto=format&fit=crop' },
      { id: 12, name: 'Apple Care+ (1 Year)', price: 49.00, quantity: 1, image: 'https://images.unsplash.com/photo-1592664858934-9d8b0c0e8dcd?q=80&w=1780&auto=format&fit=crop' }
    ],
    timeline: [
      { date: '2023-04-01 14:32', status: 'Order Placed', description: 'Customer placed the order' },
      { date: '2023-04-01 14:35', status: 'Payment Confirmed', description: 'Payment was confirmed via Credit Card' },
      { date: '2023-04-01 16:20', status: 'Processing', description: 'Order is being processed' },
      { date: '2023-04-02 09:15', status: 'Shipped', description: 'Order has been shipped via Express Delivery' },
      { date: '2023-04-03 11:30', status: 'Delivered', description: 'Order was delivered successfully' }
    ],
    shipping: {
      method: 'Express Delivery',
      cost: 15.00,
      carrier: 'FedEx',
      trackingNumber: 'FX4567890123'
    }
  },
  {
    id: 'ORD-002',
    customer: {
      id: 'C002',
      name: 'Sarah Williams',
      email: 'sarah.w@example.com'
    },
    date: '2023-04-02',
    total: 899.00,
    status: 'Shipped',
    shippingAddress: '456 Oak Ave, Somewhere, NY 54321',
    billingAddress: '456 Oak Ave, Somewhere, NY 54321',
    paymentMethod: 'PayPal',
    items: [
      { id: 2, name: 'Samsung Galaxy S21', price: 799.00, quantity: 1, image: 'https://images.unsplash.com/photo-1592664858934-9d8b0c0e8dcd?q=80&w=1780&auto=format&fit=crop' },
      { id: 9, name: 'Samsung Wireless Charger', price: 59.00, quantity: 1, image: 'https://images.unsplash.com/photo-1592664858934-9d8b0c0e8dcd?q=80&w=1780&auto=format&fit=crop' },
      { id: 11, name: 'Screen Protector', price: 29.00, quantity: 1, image: 'https://images.unsplash.com/photo-1592664858934-9d8b0c0e8dcd?q=80&w=1780&auto=format&fit=crop' }
    ],
    timeline: [
      { date: '2023-04-02 10:15', status: 'Order Placed', description: 'Customer placed the order' },
      { date: '2023-04-02 10:18', status: 'Payment Confirmed', description: 'Payment was confirmed via PayPal' },
      { date: '2023-04-02 13:45', status: 'Processing', description: 'Order is being processed' },
      { date: '2023-04-03 15:30', status: 'Shipped', description: 'Order has been shipped via Standard Delivery' }
    ],
    shipping: {
      method: 'Standard Delivery',
      cost: 10.00,
      carrier: 'UPS',
      trackingNumber: 'UPS9876543210'
    }
  },
  {
    id: 'ORD-003',
    customer: {
      id: 'C003',
      name: 'Michael Brown',
      email: 'michael.b@example.com'
    },
    date: '2023-04-03',
    total: 1499.00,
    status: 'Processing',
    shippingAddress: '789 Pine Rd, Nowhere, TX 67890',
    billingAddress: '789 Pine Rd, Nowhere, TX 67890',
    paymentMethod: 'Credit Card (Mastercard ****8901)',
    items: [
      { id: 3, name: 'MacBook Air', price: 1299.00, quantity: 1, image: 'https://images.unsplash.com/photo-1592664858934-9d8b0c0e8dcd?q=80&w=1780&auto=format&fit=crop' },
      { id: 7, name: 'USB-C Hub', price: 79.00, quantity: 1, image: 'https://images.unsplash.com/photo-1592664858934-9d8b0c0e8dcd?q=80&w=1780&auto=format&fit=crop' },
      { id: 10, name: 'Laptop Sleeve', price: 49.00, quantity: 1, image: 'https://images.unsplash.com/photo-1592664858934-9d8b0c0e8dcd?q=80&w=1780&auto=format&fit=crop' },
      { id: 13, name: 'Magic Mouse', price: 79.00, quantity: 1, image: 'https://images.unsplash.com/photo-1592664858934-9d8b0c0e8dcd?q=80&w=1780&auto=format&fit=crop' }
    ],
    timeline: [
      { date: '2023-04-03 16:20', status: 'Order Placed', description: 'Customer placed the order' },
      { date: '2023-04-03 16:25', status: 'Payment Confirmed', description: 'Payment was confirmed via Credit Card' },
      { date: '2023-04-04 09:30', status: 'Processing', description: 'Order is being processed' }
    ],
    shipping: {
      method: 'Express Delivery',
      cost: 15.00,
      carrier: 'DHL',
      trackingNumber: ''
    }
  }
];

const OrderDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const order = orders.find(o => o.id === id);
  
  if (!order) {
    return (
      <Layout>
        <div className="container mx-auto py-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
            <Button onClick={() => navigate('/admin')}>Back to Dashboard</Button>
          </div>
        </div>
      </Layout>
    );
  }

  // Calculate subtotal
  const subtotal = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <Button
          variant="ghost" 
          onClick={() => navigate('/admin')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Order #{order.id}</h1>
            <p className="text-gray-500">Placed on {order.date}</p>
          </div>
          <div className={`mt-2 md:mt-0 inline-flex px-3 py-1 rounded-full text-sm font-medium
            ${order.status === 'Completed' ? 'bg-green-100 text-green-800' : 
              order.status === 'Shipped' ? 'bg-yellow-100 text-yellow-800' :
              order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
              'bg-purple-100 text-purple-800'}`
          }>
            {order.status}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Order Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="h-5 w-5 mr-2" />
                  Order Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.items.map(item => (
                    <div key={item.id} className="flex items-center border-b pb-4 last:border-b-0 last:pb-0">
                      <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <div className="flex justify-between mt-1">
                          <p className="text-gray-500">Qty: {item.quantity}</p>
                          <p className="font-medium">${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t mt-6 pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Shipping</span>
                    <span>${order.shipping.cost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Tax</span>
                    <span>${(subtotal * 0.075).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Order Timeline */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Order Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
                  {order.timeline.map((event, index) => (
                    <div key={index} className="mb-6 ml-6">
                      <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-500">{event.date}</time>
                      <h3 className="text-lg font-semibold">{event.status}</h3>
                      <p className="mb-4 text-base font-normal text-gray-600">{event.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Order Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Customer Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Customer Name</h3>
                    <p className="mt-1">{order.customer.name}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Email Address</h3>
                    <p className="mt-1">{order.customer.email}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate(`/admin/customer-details/${order.customer.id}`)}
                  >
                    View Customer
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="h-5 w-5 mr-2" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Shipping Address</h3>
                    <p className="mt-1">{order.shippingAddress}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Shipping Method</h3>
                    <p className="mt-1">{order.shipping.method} (${order.shipping.cost.toFixed(2)})</p>
                  </div>
                  {order.shipping.trackingNumber && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Tracking Information</h3>
                      <p className="mt-1">{order.shipping.carrier}: {order.shipping.trackingNumber}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Payment Method</h3>
                    <p className="mt-1">{order.paymentMethod}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Billing Address</h3>
                    <p className="mt-1">{order.billingAddress}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {order.status !== 'Completed' && (
              <Card>
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {order.status === 'Processing' && (
                      <Button className="w-full">Mark as Shipped</Button>
                    )}
                    {order.status === 'Shipped' && (
                      <Button className="w-full">Mark as Delivered</Button>
                    )}
                    <Button variant="outline" className="w-full">Send Notification</Button>
                    <Button variant="destructive" className="w-full">Cancel Order</Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderDetails;
