import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Cart } from '../pages/Cart';
import { ProductDetails } from '../pages/Details';
import { Home } from '../pages/Home';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
