import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './Component/AuthContext'; // ✅ Import AuthProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* ✅ Wrap the whole app in AuthProvider */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);
