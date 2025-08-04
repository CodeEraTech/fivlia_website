import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './Component/AuthContext';
import { CartProvider } from './Component/CartContext';
import { SettingsProvider } from './apis/SettingsContext.jsx';// ✅ import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SettingsProvider> {/* ✅ Wrap here */}
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </SettingsProvider>
  </React.StrictMode>
);
