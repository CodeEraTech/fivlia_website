import React, { useState } from 'react';
import { post } from '../apis/apiClient';
import { ENDPOINTS } from '../apis/endpoints';
import { useAuth } from './AuthContext';
import { useCart } from './CartContext';
import Swal from 'sweetalert2';

const AddToCartButton = ({ 
  product, 
  quantity = 1, 
  selectedVariant = null, 
  className = "pqv-add-to-cart-btn",
  children = "Add to Cart",
  onSuccess = null,
  onError = null 
}) => {
  const [loading, setLoading] = useState(false);
  const { checkAuth } = useAuth();
  const { fetchCartItems } = useCart();

  // Add to cart function using post method from apiClient
  const addToCart = async (productData) => {
    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('price', productData.price.toString());
    formData.append('quantity', productData.quantity.toString());
    formData.append('productId', productData.productId);
    
    if (productData.variantId) {
      formData.append('varientId', productData.variantId);
    }
    
    if (productData.image) {
      formData.append('image', productData.image);
    }

    const config = {
      authRequired: true,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };

    return post(ENDPOINTS.ADD_TO_CART, formData, config);
  };

  const handleAddToCart = async () => {
    // Use common authentication check
    const { isAuthenticated, token, isLoggedIn } = checkAuth();
    
    // Debug: Check authentication status
    console.log('Auth check:', { 
      isLoggedIn, 
      token: token,
      isAuthenticated 
    });
    
    if (!isAuthenticated) {
      console.log('User not logged in, showing login modal');
      // Show the UserLoginModal instead of redirecting
      const modalEl = document.getElementById('userModal');
      if (modalEl && window.bootstrap?.Modal) {
        const modal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.show();
      } else {
        // Fallback if Bootstrap modal is not available
        Swal.fire({
          icon: 'warning',
          title: 'Login Required',
          text: 'Please login to add items to your cart',
          showConfirmButton: true,
          confirmButtonText: 'OK',
        });
      }
      return;
    }

    console.log('User is logged in, proceeding with add to cart');
    try {
      setLoading(true);
      
      const productData = {
        name: product.productName || product.name,
        price: selectedVariant?.sell_price || product.price || product.sell_price,
        quantity: quantity,
        productId: product._id || product.id,
        variantId: selectedVariant?._id || null,
        image: product.productImageUrl?.[0] || product.image
      };

      console.log('Product data for API:', productData);
      const response = await addToCart(productData);
      
      console.log('API Response:', response.data);
      
      // Check the actual API response for validation
      if (response.data && response.data.message) {
        // Success handling with custom formatted message
        Swal.fire({
          icon: 'success',
          title: 'Added to Cart!',
          text: `${quantity} x ${productData.name} has been added to your cart successfully`,
          showConfirmButton: true,
          timer: 3000,
        });

        // Refresh cart data
        await fetchCartItems();

        if (onSuccess) {
          onSuccess(response.data);
        }
      } else {
        // Handle unexpected response format
        Swal.fire({
          icon: 'warning',
          title: 'Response Received',
          text: 'Item was processed but response format was unexpected',
          showConfirmButton: true,
        });

        if (onSuccess) {
          onSuccess(response.data);
        }
      }
      
    } catch (error) {
      console.error('Add to cart error:', error);
      
      let errorMessage = 'Failed to add item to cart';
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: errorMessage,
        showConfirmButton: true,
      });

      if (onError) {
        onError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={className}
      onClick={handleAddToCart}
      disabled={loading}
      style={{
        opacity: loading ? 0.7 : 1,
        cursor: loading ? 'not-allowed' : 'pointer'
      }}
    >
      {loading ? (
        <>
          <i className="fa fa-spinner fa-spin" style={{ marginRight: 8 }} />
          Adding...
        </>
      ) : (
        <>
          <i className="fa fa-shopping-cart" style={{ marginRight: 8 }} />
          {children}
        </>
      )}
    </button>
  );
};

export default AddToCartButton; 