
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import {
  ChevronDown,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Banknote,
  Edit,
  Trash2,
  Plus
} from 'lucide-react';

const Dashboard = () => {
  const { user, isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('overview');
  const [newProduct, setNewProduct] = useState({
    name: '',
    brand: '',
    category: 'Smartphones',
    price: '',
    image: '',
    description: '',
  });

  // Redirect non-admin users
  if (!isAuthenticated || !isAdmin()) {
    navigate('/login');
    return null;
  }

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Product added successfully!');
    setNewProduct({
      name: '',
      brand: '',
      category: 'Smartphones',
      price: '',
      image: '',
      description: '',
    });
  };

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64">
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden sticky top-24">
              <div className="p-4 bg-primary text-white">
                <h2 className="font-bold">Admin Dashboard</h2>
              </div>
              <div className="p-2">
                <button
                  className={`w-full flex items-center p-3 rounded-md text-left transition-colors ${
                    selectedTab === 'overview' ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedTab('overview')}
                >
                  <LayoutDashboard className="h-5 w-5 mr-2" />
                  Overview
                </button>
                <button
                  className={`w-full flex items-center p-3 rounded-md text-left transition-colors ${
                    selectedTab === 'products' ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedTab('products')}
                >
                  <Package className="h-5 w-5 mr-2" />
                  Products
                </button>
                <button
                  className={`w-full flex items-center p-3 rounded-md text-left transition-colors ${
                    selectedTab === 'orders' ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedTab('orders')}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Orders
                </button>
                <button
                  className={`w-full flex items-center p-3 rounded-md text-left transition-colors ${
                    selectedTab === 'customers' ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedTab('customers')}
                >
                  <Users className="h-5 w-5 mr-2" />
                  Customers
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="sr-only">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="customers">Customers</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Total Products</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center">
                        <Package className="h-5 w-5 text-primary mr-2" />
                        <span className="text-2xl font-bold">{products.length}</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Total Orders</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center">
                        <ShoppingCart className="h-5 w-5 text-primary mr-2" />
                        <span className="text-2xl font-bold">24</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Total Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center">
                        <Banknote className="h-5 w-5 text-primary mr-2" />
                        <span className="text-2xl font-bold">$12,480</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Total Customers</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-primary mr-2" />
                        <span className="text-2xl font-bold">18</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                          <tr>
                            <th className="px-4 py-3">Order ID</th>
                            <th className="px-4 py-3">Customer</th>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Amount</th>
                            <th className="px-4 py-3">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b">
                            <td className="px-4 py-3">#ORD-001</td>
                            <td className="px-4 py-3">John Doe</td>
                            <td className="px-4 py-3">2023-04-01</td>
                            <td className="px-4 py-3">$1,299.00</td>
                            <td className="px-4 py-3">
                              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Completed</span>
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <td className="px-4 py-3">#ORD-002</td>
                            <td className="px-4 py-3">Sarah Williams</td>
                            <td className="px-4 py-3">2023-04-02</td>
                            <td className="px-4 py-3">$899.00</td>
                            <td className="px-4 py-3">
                              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Shipped</span>
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="px-4 py-3">#ORD-003</td>
                            <td className="px-4 py-3">Michael Brown</td>
                            <td className="px-4 py-3">2023-04-03</td>
                            <td className="px-4 py-3">$1,499.00</td>
                            <td className="px-4 py-3">
                              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Processing</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Products Tab */}
              <TabsContent value="products" className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-2xl font-bold">Products</h1>
                  <Button onClick={() => setSelectedTab('addProduct')}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                  </Button>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th className="px-4 py-3">ID</th>
                          <th className="px-4 py-3">Product</th>
                          <th className="px-4 py-3">Brand</th>
                          <th className="px-4 py-3">Price</th>
                          <th className="px-4 py-3">Stock</th>
                          <th className="px-4 py-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product) => (
                          <tr key={product.id} className="bg-white border-b">
                            <td className="px-4 py-3">{product.id}</td>
                            <td className="px-4 py-3">
                              <div className="flex items-center">
                                <img 
                                  src={product.image} 
                                  alt={product.name} 
                                  className="w-10 h-10 object-cover rounded-md mr-3" 
                                />
                                <span className="font-medium">{product.name}</span>
                              </div>
                            </td>
                            <td className="px-4 py-3">{product.brand}</td>
                            <td className="px-4 py-3">${product.price}</td>
                            <td className="px-4 py-3">
                              {product.inStock ? (
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">In Stock</span>
                              ) : (
                                <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Out of Stock</span>
                              )}
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="icon">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Trash2 className="h-4 w-4 text-red-500" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              {/* Add Product Tab */}
              <TabsContent value="addProduct" className="space-y-6">
                <div className="flex items-center mb-4">
                  <Button 
                    variant="ghost" 
                    onClick={() => setSelectedTab('products')}
                    className="mr-2 h-8 w-8 p-0"
                  >
                    <ChevronDown className="h-4 w-4 -rotate-90" />
                  </Button>
                  <h1 className="text-2xl font-bold">Add New Product</h1>
                </div>
                
                <Card>
                  <CardContent className="pt-6">
                    <form onSubmit={handleAddProduct}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <Label htmlFor="productName">Product Name</Label>
                          <Input 
                            id="productName" 
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="brand">Brand</Label>
                          <Input 
                            id="brand" 
                            value={newProduct.brand}
                            onChange={(e) => setNewProduct({...newProduct, brand: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="category">Category</Label>
                          <select 
                            id="category"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            value={newProduct.category}
                            onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                          >
                            <option value="Smartphones">Smartphones</option>
                            <option value="Tablets">Tablets</option>
                            <option value="Accessories">Accessories</option>
                          </select>
                        </div>
                        <div>
                          <Label htmlFor="price">Price ($)</Label>
                          <Input 
                            id="price" 
                            type="number"
                            min="0"
                            step="0.01"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="imageUrl">Image URL</Label>
                          <Input 
                            id="imageUrl" 
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="description">Description</Label>
                          <Textarea 
                            id="description"
                            rows={5}
                            value={newProduct.description}
                            onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                            required
                          />
                        </div>
                      </div>
                      <div className="flex justify-end gap-4">
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={() => setSelectedTab('products')}
                        >
                          Cancel
                        </Button>
                        <Button type="submit">Save Product</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Orders Tab */}
              <TabsContent value="orders" className="space-y-6">
                <h1 className="text-2xl font-bold mb-4">Orders</h1>
                <Card>
                  <CardContent className="pt-6">
                    <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                          <tr>
                            <th className="px-4 py-3">Order ID</th>
                            <th className="px-4 py-3">Customer</th>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Amount</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b">
                            <td className="px-4 py-3">#ORD-001</td>
                            <td className="px-4 py-3">John Doe</td>
                            <td className="px-4 py-3">2023-04-01</td>
                            <td className="px-4 py-3">$1,299.00</td>
                            <td className="px-4 py-3">
                              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Completed</span>
                            </td>
                            <td className="px-4 py-3">
                              <Button variant="ghost" size="sm">View</Button>
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <td className="px-4 py-3">#ORD-002</td>
                            <td className="px-4 py-3">Sarah Williams</td>
                            <td className="px-4 py-3">2023-04-02</td>
                            <td className="px-4 py-3">$899.00</td>
                            <td className="px-4 py-3">
                              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Shipped</span>
                            </td>
                            <td className="px-4 py-3">
                              <Button variant="ghost" size="sm">View</Button>
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <td className="px-4 py-3">#ORD-003</td>
                            <td className="px-4 py-3">Michael Brown</td>
                            <td className="px-4 py-3">2023-04-03</td>
                            <td className="px-4 py-3">$1,499.00</td>
                            <td className="px-4 py-3">
                              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Processing</span>
                            </td>
                            <td className="px-4 py-3">
                              <Button variant="ghost" size="sm">View</Button>
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <td className="px-4 py-3">#ORD-004</td>
                            <td className="px-4 py-3">Emily Johnson</td>
                            <td className="px-4 py-3">2023-04-04</td>
                            <td className="px-4 py-3">$699.00</td>
                            <td className="px-4 py-3">
                              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Confirmed</span>
                            </td>
                            <td className="px-4 py-3">
                              <Button variant="ghost" size="sm">View</Button>
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="px-4 py-3">#ORD-005</td>
                            <td className="px-4 py-3">David Wilson</td>
                            <td className="px-4 py-3">2023-04-05</td>
                            <td className="px-4 py-3">$1,199.00</td>
                            <td className="px-4 py-3">
                              <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">Pending</span>
                            </td>
                            <td className="px-4 py-3">
                              <Button variant="ghost" size="sm">View</Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Customers Tab */}
              <TabsContent value="customers" className="space-y-6">
                <h1 className="text-2xl font-bold mb-4">Customers</h1>
                <Card>
                  <CardContent className="pt-6">
                    <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                          <tr>
                            <th className="px-4 py-3">ID</th>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Orders</th>
                            <th className="px-4 py-3">Total Spent</th>
                            <th className="px-4 py-3">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b">
                            <td className="px-4 py-3">#C001</td>
                            <td className="px-4 py-3">John Doe</td>
                            <td className="px-4 py-3">john.doe@example.com</td>
                            <td className="px-4 py-3">3</td>
                            <td className="px-4 py-3">$2,599.00</td>
                            <td className="px-4 py-3">
                              <Button variant="ghost" size="sm">View</Button>
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <td className="px-4 py-3">#C002</td>
                            <td className="px-4 py-3">Sarah Williams</td>
                            <td className="px-4 py-3">sarah.w@example.com</td>
                            <td className="px-4 py-3">1</td>
                            <td className="px-4 py-3">$899.00</td>
                            <td className="px-4 py-3">
                              <Button variant="ghost" size="sm">View</Button>
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <td className="px-4 py-3">#C003</td>
                            <td className="px-4 py-3">Michael Brown</td>
                            <td className="px-4 py-3">michael.b@example.com</td>
                            <td className="px-4 py-3">2</td>
                            <td className="px-4 py-3">$2,998.00</td>
                            <td className="px-4 py-3">
                              <Button variant="ghost" size="sm">View</Button>
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <td className="px-4 py-3">#C004</td>
                            <td className="px-4 py-3">Emily Johnson</td>
                            <td className="px-4 py-3">emily.j@example.com</td>
                            <td className="px-4 py-3">1</td>
                            <td className="px-4 py-3">$699.00</td>
                            <td className="px-4 py-3">
                              <Button variant="ghost" size="sm">View</Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
