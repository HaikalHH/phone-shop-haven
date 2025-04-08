
import React from 'react';
import { Layout } from '@/components/Layout';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, PhoneCall, MapPin, ShoppingCart } from 'lucide-react';

// Mock customer data
const customers = [
  {
    id: 'C001',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, Anytown, CA 12345',
    orders: 3,
    totalSpent: 2599.00,
    recentOrders: [
      { id: 'ORD-001', date: '2023-04-01', amount: 1299.00, status: 'Completed' },
      { id: 'ORD-008', date: '2023-03-15', amount: 899.00, status: 'Completed' },
      { id: 'ORD-015', date: '2023-02-22', amount: 401.00, status: 'Completed' }
    ]
  },
  {
    id: 'C002',
    name: 'Sarah Williams',
    email: 'sarah.w@example.com',
    phone: '+1 (555) 987-6543',
    address: '456 Oak Ave, Somewhere, NY 54321',
    orders: 1,
    totalSpent: 899.00,
    recentOrders: [
      { id: 'ORD-002', date: '2023-04-02', amount: 899.00, status: 'Shipped' }
    ]
  },
  {
    id: 'C003',
    name: 'Michael Brown',
    email: 'michael.b@example.com',
    phone: '+1 (555) 456-7890',
    address: '789 Pine Rd, Nowhere, TX 67890',
    orders: 2,
    totalSpent: 2998.00,
    recentOrders: [
      { id: 'ORD-003', date: '2023-04-03', amount: 1499.00, status: 'Processing' },
      { id: 'ORD-012', date: '2023-03-01', amount: 1499.00, status: 'Completed' }
    ]
  },
  {
    id: 'C004',
    name: 'Emily Johnson',
    email: 'emily.j@example.com',
    phone: '+1 (555) 789-0123',
    address: '321 Maple Dr, Somewhere, WA 13579',
    orders: 1,
    totalSpent: 699.00,
    recentOrders: [
      { id: 'ORD-004', date: '2023-04-04', amount: 699.00, status: 'Confirmed' }
    ]
  }
];

const CustomerDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const customer = customers.find(c => c.id === id);
  
  if (!customer) {
    return (
      <Layout>
        <div className="container mx-auto py-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Customer Not Found</h1>
            <Button onClick={() => navigate('/admin')}>Back to Dashboard</Button>
          </div>
        </div>
      </Layout>
    );
  }

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

        <h1 className="text-2xl font-bold mb-6">Customer Details</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic Info */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 border rounded-full p-2 px-4">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                  {customer.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-medium">{customer.name}</h3>
                  <p className="text-sm text-gray-500">Customer ID: {customer.id}</p>
                </div>
              </div>
              
              <div className="pt-4">
                <div className="flex items-start mb-3">
                  <Mail className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p>{customer.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-3">
                  <PhoneCall className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p>{customer.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p>{customer.address}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Customer Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Total Orders</p>
                  <p className="text-2xl font-bold">{customer.orders}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Total Spent</p>
                  <p className="text-2xl font-bold">${customer.totalSpent.toFixed(2)}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Avg. Order Value</p>
                  <p className="text-2xl font-bold">
                    ${(customer.totalSpent / customer.orders).toFixed(2)}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Recent Orders</h3>
                <div className="relative overflow-x-auto bg-gray-50 rounded-lg">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                      <tr>
                        <th className="px-4 py-3">Order ID</th>
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Amount</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customer.recentOrders.map(order => (
                        <tr key={order.id} className="bg-white border-b">
                          <td className="px-4 py-3">#{order.id}</td>
                          <td className="px-4 py-3">{order.date}</td>
                          <td className="px-4 py-3">${order.amount.toFixed(2)}</td>
                          <td className="px-4 py-3">
                            <span className={`text-xs font-medium px-2.5 py-0.5 rounded
                              ${order.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                                order.status === 'Shipped' ? 'bg-yellow-100 text-yellow-800' :
                                order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                                'bg-purple-100 text-purple-800'}`
                            }>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => navigate(`/admin/order-details/${order.id}`)}
                            >
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              View
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CustomerDetails;
