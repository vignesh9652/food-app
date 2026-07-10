import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CartProvider } from './contextApi/CartProvider.tsx'
import { OrderProvider } from './contextApi/OrderProvider.tsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <StrictMode>
    <OrderProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </OrderProvider>
  </StrictMode>
  </BrowserRouter>
);

