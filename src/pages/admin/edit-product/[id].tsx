
import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { ArrowLeft, Save } from 'lucide-react';
import { products } from '@/data/products';

const EditProduct = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({
    id: 0,
    name: '',
    brand: '',
    ram: '',
    description: '',
    price: '',
    oldPrice: '',
    inStock: true,
    image: null as File | null,
    imagePreview: '',
  });

  useEffect(() => {
    if (id) {
      const foundProduct = products.find(p => p.id === parseInt(id));
      if (foundProduct) {
        // Determine RAM based on id (just for demo purposes)
        const ram = (foundProduct.id % 4 + 1) * 4;
        
        setProduct({
          id: foundProduct.id,
          name: foundProduct.name,
          brand: foundProduct.brand,
          ram: ram.toString(),
          description: foundProduct.description || '',
          price: foundProduct.price.toString(),
          oldPrice: foundProduct.oldPrice ? foundProduct.oldPrice.toString() : '',
          inStock: foundProduct.inStock,
          image: null,
          imagePreview: foundProduct.image,
        });
      }
    }
    setLoading(false);
  }, [id]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProduct({
        ...product,
        image: file,
        imagePreview: URL.createObjectURL(file)
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically call an API to update the product
    toast.success('Product updated successfully!');
    navigate('/admin');
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto py-8">
          <div className="text-center">Loading...</div>
        </div>
      </Layout>
    );
  }

  if (!product.id) {
    return (
      <Layout>
        <div className="container mx-auto py-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
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

        <h1 className="text-2xl font-bold mb-6">Edit Product</h1>

        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="productName">Product Name</Label>
                  <Input 
                    id="productName" 
                    value={product.name}
                    onChange={(e) => setProduct({...product, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="brand">Brand</Label>
                  <Input 
                    id="brand" 
                    value={product.brand}
                    onChange={(e) => setProduct({...product, brand: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="ram">RAM (GB)</Label>
                  <select 
                    id="ram"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={product.ram}
                    onChange={(e) => setProduct({...product, ram: e.target.value})}
                  >
                    <option value="4">4 GB</option>
                    <option value="6">6 GB</option>
                    <option value="8">8 GB</option>
                    <option value="12">12 GB</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="price">Price ($)</Label>
                  <Input 
                    id="price" 
                    type="number"
                    min="0"
                    step="0.01"
                    value={product.price}
                    onChange={(e) => setProduct({...product, price: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="oldPrice">Old Price ($) (optional)</Label>
                  <Input 
                    id="oldPrice" 
                    type="number"
                    min="0"
                    step="0.01"
                    value={product.oldPrice}
                    onChange={(e) => setProduct({...product, oldPrice: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="stock">Availability</Label>
                  <select 
                    id="stock"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={product.inStock.toString()}
                    onChange={(e) => setProduct({...product, inStock: e.target.value === 'true'})}
                  >
                    <option value="true">In Stock</option>
                    <option value="false">Out of Stock</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="image">Product Image</Label>
                  <Input 
                    id="image" 
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  {product.imagePreview && (
                    <div className="mt-2">
                      <img 
                        src={product.imagePreview} 
                        alt="Preview" 
                        className="h-40 object-contain rounded-md border" 
                      />
                    </div>
                  )}
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description"
                    rows={5}
                    value={product.description}
                    onChange={(e) => setProduct({...product, description: e.target.value})}
                    required
                  />
                </div>
                
                {/* Price Negotiation Section */}
                <div className="md:col-span-2">
                  <h3 className="font-medium mb-2">Price Negotiation Requests</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="text-xs uppercase bg-gray-100">
                          <tr>
                            <th className="px-4 py-2 text-left">Customer</th>
                            <th className="px-4 py-2 text-left">Requested Price</th>
                            <th className="px-4 py-2 text-left">Status</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-4 py-2">John Doe</td>
                            <td className="px-4 py-2">$749.00</td>
                            <td className="px-4 py-2">
                              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded">
                                Pending
                              </span>
                            </td>
                            <td className="px-4 py-2">
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline" className="text-green-600">
                                  Approve
                                </Button>
                                <Button size="sm" variant="outline" className="text-blue-600">
                                  Counter
                                </Button>
                                <Button size="sm" variant="outline" className="text-red-600">
                                  Decline
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Sarah Williams</td>
                            <td className="px-4 py-2">$699.00</td>
                            <td className="px-4 py-2">
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">
                                Approved
                              </span>
                            </td>
                            <td className="px-4 py-2">
                              <Button size="sm" variant="outline" disabled>
                                Processed
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-4">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => navigate('/admin')}
                >
                  Cancel
                </Button>
                <Button type="submit">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default EditProduct;
