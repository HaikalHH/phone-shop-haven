
export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  images: string[];
  featured: boolean;
  rating: number;
  reviews: number;
  inStock: boolean;
  description: string;
  specs: {
    display: string;
    processor: string;
    ram: string;
    storage: string;
    camera: string;
    battery: string;
    os: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    brand: "Apple",
    category: "Smartphones",
    price: 999,
    oldPrice: 1099,
    image: "https://source.unsplash.com/tze1kKj7Ll8/400x400",
    images: [
      "https://source.unsplash.com/tze1kKj7Ll8/800x800",
      "https://source.unsplash.com/xZ7TCWBFNOY/800x800",
      "https://source.unsplash.com/YZSK9ApJXVc/800x800"
    ],
    featured: true,
    rating: 4.8,
    reviews: 357,
    inStock: true,
    description: "The iPhone 15 Pro features Apple's latest A16 Bionic chip, enhanced camera system, and a stunning Super Retina XDR display.",
    specs: {
      display: "6.1-inch Super Retina XDR display",
      processor: "A16 Bionic chip",
      ram: "8GB",
      storage: "128GB, 256GB, 512GB, 1TB",
      camera: "Triple 48MP camera system",
      battery: "Up to 23 hours of video playback",
      os: "iOS 17"
    }
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    price: 1199,
    oldPrice: 1299,
    image: "https://source.unsplash.com/Xs_6zXUe8Ak/400x400",
    images: [
      "https://source.unsplash.com/Xs_6zXUe8Ak/800x800",
      "https://source.unsplash.com/3JoHatfYUq0/800x800",
      "https://source.unsplash.com/9kgyFmyGorU/800x800"
    ],
    featured: true,
    rating: 4.7,
    reviews: 423,
    inStock: true,
    description: "Experience the ultimate Galaxy with the S23 Ultra, featuring a built-in S Pen, advanced camera system with 100x zoom, and Snapdragon 8 Gen 2 processor.",
    specs: {
      display: "6.8-inch Dynamic AMOLED 2X display",
      processor: "Snapdragon 8 Gen 2",
      ram: "12GB",
      storage: "256GB, 512GB, 1TB",
      camera: "Quad 200MP camera system",
      battery: "5000mAh",
      os: "Android 13"
    }
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    brand: "Google",
    category: "Smartphones",
    price: 899,
    oldPrice: 999,
    image: "https://source.unsplash.com/mIZ4KSS5Ro0/400x400",
    images: [
      "https://source.unsplash.com/mIZ4KSS5Ro0/800x800",
      "https://source.unsplash.com/s7bvF0oCQmU/800x800",
      "https://source.unsplash.com/yTrSDSj8Ptc/800x800"
    ],
    featured: true,
    rating: 4.6,
    reviews: 289,
    inStock: true,
    description: "The Google Pixel 8 Pro delivers the ultimate Pixel experience with advanced AI features, a brilliant display, and exceptional camera capabilities.",
    specs: {
      display: "6.7-inch LTPO OLED display",
      processor: "Google Tensor G3",
      ram: "12GB",
      storage: "128GB, 256GB, 512GB",
      camera: "Triple 50MP camera system",
      battery: "5000mAh",
      os: "Android 14"
    }
  },
  {
    id: 4,
    name: "OnePlus 11",
    brand: "OnePlus",
    category: "Smartphones",
    price: 699,
    oldPrice: 799,
    image: "https://source.unsplash.com/xZ7TCWBFNOY/400x400",
    images: [
      "https://source.unsplash.com/xZ7TCWBFNOY/800x800",
      "https://source.unsplash.com/tze1kKj7Ll8/800x800",
      "https://source.unsplash.com/Xs_6zXUe8Ak/800x800"
    ],
    featured: false,
    rating: 4.5,
    reviews: 218,
    inStock: true,
    description: "The OnePlus 11 combines flagship performance with fast charging and a premium Hasselblad camera system.",
    specs: {
      display: "6.7-inch Fluid AMOLED display",
      processor: "Snapdragon 8 Gen 2",
      ram: "8GB, 16GB",
      storage: "128GB, 256GB",
      camera: "Triple 50MP Hasselblad camera",
      battery: "5000mAh with 100W fast charging",
      os: "OxygenOS 13"
    }
  },
  {
    id: 5,
    name: "Xiaomi 13 Pro",
    brand: "Xiaomi",
    category: "Smartphones",
    price: 899,
    oldPrice: 999,
    image: "https://source.unsplash.com/9kgyFmyGorU/400x400",
    images: [
      "https://source.unsplash.com/9kgyFmyGorU/800x800",
      "https://source.unsplash.com/mIZ4KSS5Ro0/800x800",
      "https://source.unsplash.com/3JoHatfYUq0/800x800"
    ],
    featured: false,
    rating: 4.4,
    reviews: 176,
    inStock: true,
    description: "The Xiaomi 13 Pro features Leica optics, powerful performance, and a stunning display.",
    specs: {
      display: "6.73-inch AMOLED display",
      processor: "Snapdragon 8 Gen 2",
      ram: "12GB",
      storage: "256GB, 512GB",
      camera: "Triple 50MP Leica camera",
      battery: "4820mAh with 120W charging",
      os: "MIUI 14"
    }
  },
  {
    id: 6,
    name: "Nothing Phone (2)",
    brand: "Nothing",
    category: "Smartphones",
    price: 599,
    oldPrice: 699,
    image: "https://source.unsplash.com/s7bvF0oCQmU/400x400",
    images: [
      "https://source.unsplash.com/s7bvF0oCQmU/800x800",
      "https://source.unsplash.com/Xs_6zXUe8Ak/800x800",
      "https://source.unsplash.com/yTrSDSj8Ptc/800x800"
    ],
    featured: false,
    rating: 4.3,
    reviews: 142,
    inStock: true,
    description: "The Nothing Phone (2) features a unique Glyph Interface, clean design, and a smooth user experience.",
    specs: {
      display: "6.7-inch OLED display",
      processor: "Snapdragon 8+ Gen 1",
      ram: "8GB, 12GB",
      storage: "128GB, 256GB",
      camera: "Dual 50MP camera system",
      battery: "4700mAh with 45W charging",
      os: "Nothing OS 2.0"
    }
  },
  {
    id: 7,
    name: "iPhone SE (2023)",
    brand: "Apple",
    category: "Smartphones",
    price: 429,
    oldPrice: 499,
    image: "https://source.unsplash.com/YZSK9ApJXVc/400x400",
    images: [
      "https://source.unsplash.com/YZSK9ApJXVc/800x800",
      "https://source.unsplash.com/tze1kKj7Ll8/800x800",
      "https://source.unsplash.com/xZ7TCWBFNOY/800x800"
    ],
    featured: false,
    rating: 4.4,
    reviews: 198,
    inStock: true,
    description: "The iPhone SE combines powerful performance with a familiar design, featuring the latest A15 Bionic chip.",
    specs: {
      display: "4.7-inch Retina HD display",
      processor: "A15 Bionic chip",
      ram: "4GB",
      storage: "64GB, 128GB, 256GB",
      camera: "12MP camera",
      battery: "Up to 15 hours of video playback",
      os: "iOS 16"
    }
  },
  {
    id: 8,
    name: "Samsung Galaxy Z Flip 5",
    brand: "Samsung",
    category: "Smartphones",
    price: 999,
    oldPrice: 1099,
    image: "https://source.unsplash.com/3JoHatfYUq0/400x400",
    images: [
      "https://source.unsplash.com/3JoHatfYUq0/800x800",
      "https://source.unsplash.com/Xs_6zXUe8Ak/800x800",
      "https://source.unsplash.com/9kgyFmyGorU/800x800"
    ],
    featured: true,
    rating: 4.5,
    reviews: 235,
    inStock: true,
    description: "The Galaxy Z Flip 5 features a larger cover screen, improved hinge design, and powerful performance in a compact foldable form factor.",
    specs: {
      display: "6.7-inch Dynamic AMOLED 2X folding display, 3.4-inch cover display",
      processor: "Snapdragon 8 Gen 2",
      ram: "8GB",
      storage: "256GB, 512GB",
      camera: "Dual 12MP camera system",
      battery: "3700mAh",
      os: "Android 13"
    }
  }
];

export const categories = [
  {
    id: 1,
    name: "Smartphones",
    image: "https://source.unsplash.com/3JoHatfYUq0/400x400",
    count: 32
  },
  {
    id: 2,
    name: "Tablets",
    image: "https://source.unsplash.com/1gYYmhB_lRY/400x400",
    count: 18
  },
  {
    id: 3,
    name: "Laptops",
    image: "https://source.unsplash.com/yC-11_3pGEA/400x400",
    count: 24
  },
  {
    id: 4,
    name: "Accessories",
    image: "https://source.unsplash.com/vBYrBxMcYGk/400x400",
    count: 45
  }
];

export const brands = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "Google" },
  { id: 4, name: "OnePlus" },
  { id: 5, name: "Xiaomi" },
  { id: 6, name: "Nothing" }
];

// Get products by category
export const getProductsByCategory = (categoryName: string) => {
  return products.filter(product => product.category === categoryName);
};

// Get products by brand
export const getProductsByBrand = (brandName: string) => {
  return products.filter(product => product.brand === brandName);
};

// Get featured products
export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

// Get product by id
export const getProductById = (id: number) => {
  return products.find(product => product.id === id);
};

// Search products
export const searchProducts = (query: string) => {
  const lowerCaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowerCaseQuery) || 
    product.brand.toLowerCase().includes(lowerCaseQuery) || 
    product.description.toLowerCase().includes(lowerCaseQuery)
  );
};
