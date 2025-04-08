
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/services/productService';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const { user, signOut } = useAuth();
  
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My App</h1>
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                <span>Welcome, {user.email}</span>
                <Button variant="outline" onClick={() => signOut()}>Sign Out</Button>
              </div>
            ) : (
              <Button variant="default" asChild>
                <Link to="/auth">Sign In</Link>
              </Button>
            )}
          </div>
        </div>
      </header>
      
      <main className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold mb-8">Products</h2>
        
        {isLoading ? (
          <div className="flex justify-center">
            <p>Loading products...</p>
          </div>
        ) : error ? (
          <div className="text-red-500">
            <p>Error loading products. Please try again later.</p>
          </div>
        ) : products && products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.category}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  {product.image_url && (
                    <div className="mb-4 aspect-square relative overflow-hidden rounded-md">
                      <img 
                        src={product.image_url} 
                        alt={product.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <p className="text-gray-700">{product.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                  <Button>View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center p-8 bg-white rounded-lg shadow">
            <h3 className="text-xl font-medium mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">There are no products available at the moment.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
