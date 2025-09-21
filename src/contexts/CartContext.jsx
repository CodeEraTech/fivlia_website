import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { get, put, del } from "../apis/apiClient";
import { ENDPOINTS } from "../apis/endpoints";
import { useAuth } from "./AuthContext";
import { useSettingValue } from "../utils/getSettingsValue";

const CartContext = createContext();

// Get cart items function - using get method from apiClient
const getCart = async () => {
  // console.log('CartContext: getCart function called');
  const authConfig = {
    authRequired: true,
  };
  // console.log('CartContext: Making API call with config:', authConfig);
  const response = await get(ENDPOINTS.GET_CART, authConfig);
  // console.log('CartContext: getCart response:', response);
  return response;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [storeId, setStoreId] = useState(null);
  const [paymentOption, setPaymentOption] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [updatingItems, setUpdatingItems] = useState(new Set());
  const [removingItems, setRemovingItems] = useState(new Set());
  const { checkAuth, isLoggedIn } = useAuth();
  const updateTimeouts = useRef({});
  const removeTimeouts = useRef({});
  const getSetting = useSettingValue();

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
        setStoreId(response.data.StoreID);
        setPaymentOption(response.data.paymentOption);
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

  // Remove cart item with debouncing and security
  const removeCartItem = async (cartItemId) => {
    const { isAuthenticated } = checkAuth();

    if (!isAuthenticated) {
      setError("User not authenticated");
      return;
    }

    // Clear existing timeout for this item
    if (removeTimeouts.current[cartItemId]) {
      clearTimeout(removeTimeouts.current[cartItemId]);
    }

    // Optimistically remove the item from UI
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item._id === cartItemId || item.cartItemId === cartItemId)
      )
    );

    // Set removing state for this item
    setRemovingItems((prev) => new Set(prev).add(cartItemId));

    // Debounce the API call
    removeTimeouts.current[cartItemId] = setTimeout(async () => {
      try {
        const authConfig = {
          authRequired: true,
        };

        const response = await del(
          `${ENDPOINTS.REMOVE_CART}/${cartItemId}`,
          authConfig
        );

        if (response.data && response.data.success) {
          // Refresh cart from API to ensure consistency
          await fetchCartItems();
        } else {
          // If remove failed, revert the optimistic update
          await fetchCartItems();
        }
      } catch (error) {
        console.error("CartContext: Failed to remove cart item:", error);
        setError("Failed to remove cart item");
        // Revert the optimistic update
        await fetchCartItems();
      } finally {
        // Clear removing state for this item
        setRemovingItems((prev) => {
          const newSet = new Set(prev);
          newSet.delete(cartItemId);
          return newSet;
        });
      }
    }, 300); // 300ms debounce for remove (faster than update)
  };

  // Update cart item quantity with debouncing and security
  const updateCartItem = async (cartItemId, quantity) => {
    const { isAuthenticated } = checkAuth();

    if (!isAuthenticated) {
      setError("User not authenticated");
      return;
    }

    if (quantity < 1) {
      // If quantity is 0 or negative, remove the item
      removeCartItem(cartItemId);
      return;
    }

    // Clear existing timeout for this item
    if (updateTimeouts.current[cartItemId]) {
      clearTimeout(updateTimeouts.current[cartItemId]);
    }

    // Optimistically update the UI
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === cartItemId || item.cartItemId === cartItemId
          ? { ...item, quantity }
          : item
      )
    );

    // Set updating state for this item
    setUpdatingItems((prev) => new Set(prev).add(cartItemId));

    // Debounce the API call
    updateTimeouts.current[cartItemId] = setTimeout(async () => {
      try {
        const authConfig = {
          authRequired: true,
        };

        const response = await put(
          `${ENDPOINTS.UPDATE_CART}/${cartItemId}`,
          { quantity },
          authConfig
        );

        if (response.data && response.data.success) {
          // Refresh cart from API to ensure consistency
          await fetchCartItems();
        } else {
          // If update failed, revert the optimistic update
          await fetchCartItems();
        }
      } catch (error) {
        console.error("CartContext: Failed to update cart item:", error);
        setError("Failed to update cart item");
        // Revert the optimistic update
        await fetchCartItems();
      } finally {
        // Clear updating state for this item
        setUpdatingItems((prev) => {
          const newSet = new Set(prev);
          newSet.delete(cartItemId);
          return newSet;
        });
      }
    }, 500); // 500ms debounce
  };

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (cartItem) =>
          cartItem.productId === item.productId &&
          cartItem.varientId === item.varientId
      );

      if (existingItem) {
        // Update quantity if item exists
        return prev.map((cartItem) =>
          cartItem.productId === item.productId &&
          cartItem.varientId === item.varientId
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

  // Remove item from cart (legacy function - use removeCartItem instead)
  const removeFromCart = (productId, varientId) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(item.productId === productId && item.varientId === varientId)
      )
    );

    // Refresh cart from API
    fetchCartItems();
  };

  // Update item quantity (legacy function - use updateCartItem instead)
  const updateQuantity = (productId, varientId, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.productId === productId && item.varientId === varientId
          ? { ...item, quantity }
          : item
      )
    );

    // Refresh cart from API
    fetchCartItems();
  };

  // Calculate cart total
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  // Calculate shipping charge (3% of total)
  const getShippingCharge = () => {
    const total = getCartTotal();
    const platformFeeRate = (getSetting("Platform_Fee") || 0) / 100;
    return parseFloat((total * platformFeeRate).toFixed(2));
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

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      Object.values(updateTimeouts.current).forEach((timeout) => {
        if (timeout) clearTimeout(timeout);
      });
      Object.values(removeTimeouts.current).forEach((timeout) => {
        if (timeout) clearTimeout(timeout);
      });
    };
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        loading,
        error,
        addToCart,
        removeFromCart,
        removeCartItem,
        updateQuantity,
        updateCartItem,
        getCartTotal,
        getShippingCharge,
        fetchCartItems,
        isInitialized,
        updatingItems,
        removingItems,
        storeId,
        paymentOption,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
