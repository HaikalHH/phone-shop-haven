
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Pages (these will now be imported from the Next.js pages directory)
import Index from "./pages/Index";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/product/[id]";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Admin/Dashboard";
import CustomerDetails from "./pages/Admin/CustomerDetails";
import OrderDetails from "./pages/Admin/OrderDetails";
import EditProduct from "./pages/Admin/EditProduct";
import FAQ from "./pages/CustomerService/FAQ";
import Shipping from "./pages/CustomerService/Shipping";
import Warranty from "./pages/CustomerService/Warranty";
import Privacy from "./pages/CustomerService/Privacy";
import Terms from "./pages/CustomerService/Terms";
import NotFound from "./pages/404";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/admin/customer-details/:id" element={<CustomerDetails />} />
              <Route path="/admin/order-details/:id" element={<OrderDetails />} />
              <Route path="/admin/edit-product/:id" element={<EditProduct />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/warranty" element={<Warranty />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
