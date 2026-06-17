import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { get, post, put, del } from "../apis/apiClient";
import { ENDPOINTS } from "../apis/endpoints";
import { useAuth } from "./AuthContext";
import { useSettingValue } from "../utils/getSettingsValue";

const CartContext = createContext();

const getId = (value) => {
  if (!value) return null;
  if (typeof value === "object") {
    return value._id || value.id || null;
  }
  return value;
};

const getLineCouponDiscount = (item) => {
  const explicitDiscount = Number(item.discountAmount);
  if (Number.isFinite(explicitDiscount) && explicitDiscount > 0) {
    return explicitDiscount;
  }

  const quantity = Math.max(Number(item.quantity) || 1, 1);
  const originalUnitPrice = Number(item.originalPrice ?? item.price) || 0;
  const finalUnitPrice = Number(item.finalPrice ?? item.price) || 0;
  return Math.max((originalUnitPrice - finalUnitPrice) * quantity, 0);
};

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
  const [freeItems, setFreeItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [storeId, setStoreId] = useState(null);
  const [paymentOption, setPaymentOption] = useState(false);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [deliveryDistanceKm, setDeliveryDistanceKm] = useState(0);
  const [billableKm, setBillableKm] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [updatingItems, setUpdatingItems] = useState(new Set());
  const [removingItems, setRemovingItems] = useState(new Set());
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [freeProductSavings, setFreeProductSavings] = useState(0);
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
      setFreeItems([]);
      setCartCount(0);
      setStoreId(null);
      setPaymentOption(false);
      setDeliveryCharge(0);
      setDeliveryDistanceKm(0);
      setBillableKm(0);
      setAppliedCoupon(null);
      setCouponDiscount(0);
      setFreeProductSavings(0);
      return;
    }

    try {
      //console.log('CartContext: Starting API call to get cart');
      setLoading(true);
      setError(null);
      const response = await getCart();
      //console.log('CartContext: API response:', response.data);

      if (response.data && response.data.items) {
        const freeCartItems = Array.isArray(response.data.freeItems)
          ? response.data.freeItems
          : [];
        //console.log('CartContext: Setting cart items:', response.data.items);
        setCartItems(response.data.items);
        setFreeItems(freeCartItems);
        setCartCount(response.data.items.length + freeCartItems.length);
        setStoreId(response.data.StoreID);
        setPaymentOption(response.data.paymentOption);
        setDeliveryCharge(Number(response.data.deliveryCharge) || 0);
        setDeliveryDistanceKm(Number(response.data.deliveryDistanceKm) || 0);
        setBillableKm(Number(response.data.billableKm) || 0);
        
        // Check if any item has coupon applied
        const itemWithCoupon = response.data.items.find(
          (item) => item.isCouponApplied && item.couponId
        );
        if (itemWithCoupon) {
          setAppliedCoupon(getId(itemWithCoupon.couponId));
          const summaryDiscount = Number(
            response.data.offerSummary?.discountSavings
          );
          const summaryFreeSavings = Number(
            response.data.offerSummary?.freeProductSavings
          );
          const totalDiscount = Number.isFinite(summaryDiscount)
            ? summaryDiscount
            : response.data.items.reduce((sum, item) => {
                return sum + getLineCouponDiscount(item);
              }, 0);
          setCouponDiscount(totalDiscount);
          setFreeProductSavings(
            Number.isFinite(summaryFreeSavings) ? summaryFreeSavings : 0
          );
        } else {
          setAppliedCoupon(null);
          setCouponDiscount(0);
          setFreeProductSavings(0);
        }
      } else {
        //console.log('CartContext: No items in response, clearing cart');
        setCartItems([]);
        setFreeItems([]);
        setCartCount(0);
        setStoreId(null);
        setPaymentOption(false);
        setDeliveryCharge(0);
        setDeliveryDistanceKm(0);
        setBillableKm(0);
        setAppliedCoupon(null);
        setCouponDiscount(0);
        setFreeProductSavings(0);
      }
    } catch (error) {
      //console.error('CartContext: Failed to fetch cart:', error);
      setError(error.message);
      setCartItems([]);
      setFreeItems([]);
      setCartCount(0);
      setStoreId(null);
      setPaymentOption(false);
      setDeliveryCharge(0);
      setDeliveryDistanceKm(0);
      setBillableKm(0);
      setAppliedCoupon(null);
      setCouponDiscount(0);
      setFreeProductSavings(0);
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
      const unitPrice = Number(item.finalPrice ?? item.price) || 0;
      return total + unitPrice * item.quantity;
    }, 0);
  };

  // Calculate original cart total (before discount)
  const getOriginalCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const originalPrice = item.originalPrice || item.price;
      return total + originalPrice * item.quantity;
    }, 0);
  };

  // Remove applied coupon
  const removeCoupon = async () => {
    const { isAuthenticated } = checkAuth();

    if (!isAuthenticated) {
      setError("User not authenticated");
      return;
    }

    try {
      setLoading(true);
      const cartIds = cartItems.map((item) => item._id);

      const response = await post(
        ENDPOINTS.REMOVE_COUPON,
        { cartIds },
        { authRequired: true }
      );

      if (response.data) {
        setAppliedCoupon(null);
        setCouponDiscount(0);
        setFreeProductSavings(0);
        await fetchCartItems();
      }
    } catch (error) {
      console.error("CartContext: Failed to remove coupon:", error);
      setError("Failed to remove coupon");
      throw error;
    } finally {
      setLoading(false);
    }
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
    setCartCount(cartItems.length + freeItems.length);
  }, [cartItems, freeItems]);

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
        freeItems,
        cartCount,
        loading,
        error,
        addToCart,
        removeFromCart,
        removeCartItem,
        updateQuantity,
        updateCartItem,
        getCartTotal,
        getOriginalCartTotal,
        getShippingCharge,
        fetchCartItems,
        isInitialized,
        updatingItems,
        removingItems,
        storeId,
        paymentOption,
        deliveryCharge,
        deliveryDistanceKm,
        billableKm,
        appliedCoupon,
        couponDiscount,
        freeProductSavings,
        removeCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
