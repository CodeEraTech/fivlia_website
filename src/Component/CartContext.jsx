import React, { createContext, useContext, useState, useEffect } from 'react';
import { get } from '../apis/apiClient';
import { ENDPOINTS } from '../apis/endpoints';
import { useAuth } from './AuthContext';

const CartContext = createContext();

// Get cart items function - using get method from apiClient
const getCart = async () => {
  const authConfig = {
    authRequired: true
  };
  const response = await get(ENDPOINTS.GET_CART, authConfig);
  // console.log('CartContext: getCart response:', response);
  return response;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const { checkAuth, isLoggedIn } = useAuth();

  // Fetch cart items from API
  const fetchCartItems = async () => {
    //console.log('CartContext: fetchCartItems called');
    const { isAuthenticated } = checkAuth();
    //console.log('CartContext: isAuthenticated:', isAuthenticated);
    
    if (!isAuthenticated) {
      //console.log('CartContext: User not authenticated, clearing cart');
      setCartItems([]);
      setCartCount(0);
      return;
    }

    try {
      //console.log('CartContext: Starting API call to get cart');
      setLoading(true);
      setError(null);
      const response = await getCart();
      //console.log('CartContext: API response:', response.data);
      
      if (response.data && response.data.items) {
        //console.log('CartContext: Setting cart items:', response.data.items);
        setCartItems(response.data.items);
        setCartCount(response.data.items.length);
      } else {
        //console.log('CartContext: No items in response, clearing cart');
        setCartItems([]);
        setCartCount(0);
      }
    } catch (error) {
      //console.error('CartContext: Failed to fetch cart:', error);
      setError(error.message);
      setCartItems([]);
      setCartCount(0);
    } finally {
      setLoading(false);
    }
  };

  // Add item to cart
  const addToCart = (item) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => 
        cartItem.productId === item.productId && 
        cartItem.varientId === item.varientId
      );

      if (existingItem) {
        // Update quantity if item exists
        return prev.map(cartItem => 
          cartItem.productId === item.productId && cartItem.varientId === item.varientId
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        // Add new item
        return [...prev, item];
      }
    });
    
    // Refresh cart from API
    fetchCartItems();
  };

  // Remove item from cart
  const removeFromCart = (productId, varientId) => {
    setCartItems(prev => prev.filter(item => 
      !(item.productId === productId && item.varientId === varientId)
    ));
    
    // Refresh cart from API
    fetchCartItems();
  };

  // Update item quantity
  const updateQuantity = (productId, varientId, quantity) => {
    setCartItems(prev => prev.map(item => 
      item.productId === productId && item.varientId === varientId
        ? { ...item, quantity }
        : item
    ));
    
    // Refresh cart from API
    fetchCartItems();
  };

  // Calculate cart total
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  // Initialize cart on mount and when authentication state changes
  useEffect(() => {
    //console.log('CartContext: useEffect triggered, isLoggedIn:', isLoggedIn);
    
    // Wait for authentication to be initialized
    if (isLoggedIn !== undefined) {
      setIsInitialized(true);
      fetchCartItems();
    }
  }, [isLoggedIn]);

  // Update cart count when items change
  useEffect(() => {
    //console.log('CartContext: cartItems changed, updating count:', cartItems.length);
    setCartCount(cartItems.length);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{
      cartItems,
      cartCount,
      loading,
      error,
      addToCart,
      removeFromCart,
      updateQuantity,
      getCartTotal,
      fetchCartItems,
      isInitialized
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext); 