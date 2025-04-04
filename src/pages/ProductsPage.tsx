import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SlidersHorizontal, X, File } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ProductCard } from '@/components/ProductCard';
import { products, brands, searchProducts, getProductsByCategory, getProductsByBrand } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';

const getProductsByRam = (ramSize: string) => {
  const ramSizeNum = parseInt(ramSize);
  return products.filter((product, index) => {
    const productRam = (product.id % 4 + 1) * 4;
    return productRam === ramSizeNum;
  });
};

const ProductsPage = () => {
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRam, setSelectedRam] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState('featured');
  
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search');
  const categoryParam = searchParams.get('category');
  const brandParam = searchParams.get('brand');
  const ramParam = searchParams.get('ram');

  const ramOptions = ['4', '6', '8', '12'];

  useEffect(() => {
    let result = [...products];
    
    if (searchQuery) {
      result = searchProducts(searchQuery);
    }
    
    if (categoryParam) {
      result = getProductsByCategory(categoryParam);
    }
    
    if (brandParam && !selectedBrands.includes(brandParam)) {
      setSelectedBrands(prev => [...prev, brandParam]);
    }
    
    if (ramParam && !selectedRam.includes(ramParam)) {
      setSelectedRam(prev => [...prev, ramParam]);
    }
    
    if (selectedBrands.length > 0) {
      result = result.filter(product => selectedBrands.includes(product.brand));
    }
    
    if (selectedRam.length > 0) {
      result = result.filter(product => {
        const productRam = (product.id % 4 + 1) * 4;
        return selectedRam.some(ram => parseInt(ram) === productRam);
      });
    }
    
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    if (sortOption === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }
    
    setFilteredProducts(result);
  }, [searchQuery, categoryParam, brandParam, ramParam, selectedBrands, selectedRam, priceRange, sortOption]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const toggleRam = (ram: string) => {
    setSelectedRam(prev => 
      prev.includes(ram)
        ? prev.filter(r => r !== ram)
        : [...prev, ram]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedRam([]);
    setPriceRange([0, 1500]);
    setSortOption('featured');
  };

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:hidden mb-4">
            <Button 
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              variant="outline" 
              className="w-full"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              {isMobileFilterOpen ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>

          <aside className={`w-full md:w-64 md:block ${isMobileFilterOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Filters</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Clear all
                </Button>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <Slider 
                  defaultValue={[0, 1500]} 
                  max={1500} 
                  step={50} 
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value)}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-3">RAM</h3>
                <div className="space-y-2">
                  {ramOptions.map(ram => (
                    <div key={ram} className="flex items-center">
                      <Checkbox 
                        id={`ram-${ram}`}
                        checked={selectedRam.includes(ram)}
                        onCheckedChange={() => toggleRam(ram)}
                      />
                      <label 
                        htmlFor={`ram-${ram}`}
                        className="ml-2 text-sm font-medium cursor-pointer"
                      >
                        {ram} GB
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Brands</h3>
                <div className="space-y-2">
                  {brands.map(brand => (
                    <div key={brand.id} className="flex items-center">
                      <Checkbox 
                        id={`brand-${brand.id}`}
                        checked={selectedBrands.includes(brand.name)}
                        onCheckedChange={() => toggleBrand(brand.name)}
                      />
                      <label 
                        htmlFor={`brand-${brand.id}`}
                        className="ml-2 text-sm font-medium cursor-pointer"
                      >
                        {brand.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold mb-1">
                  {searchQuery 
                    ? `Search Results for "${searchQuery}"` 
                    : categoryParam 
                      ? `${categoryParam}` 
                      : ramParam
                        ? `${ramParam}GB RAM Smartphones`
                        : "All Products"}
                </h1>
                <p className="text-gray-500">{filteredProducts.length} products found</p>
              </div>

              {(selectedBrands.length > 0 || selectedRam.length > 0 || (priceRange[0] > 0 || priceRange[1] < 1500)) && (
                <div className="flex flex-wrap gap-2 my-2 sm:my-0">
                  {selectedBrands.map(brand => (
                    <Badge key={brand} variant="outline" className="gap-1">
                      {brand}
                      <button onClick={() => toggleBrand(brand)}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  {selectedRam.map(ram => (
                    <Badge key={ram} variant="outline" className="gap-1">
                      {ram}GB RAM
                      <button onClick={() => toggleRam(ram)}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  {(priceRange[0] > 0 || priceRange[1] < 1500) && (
                    <Badge variant="outline" className="gap-1">
                      ${priceRange[0]} - ${priceRange[1]}
                      <button onClick={() => setPriceRange([0, 1500])}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                </div>
              )}

              <div className="w-full sm:w-auto">
                <select 
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="product-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
