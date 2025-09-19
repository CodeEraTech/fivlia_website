import React, { useState } from "react";
import { post } from "../apis/apiClient";
import { ENDPOINTS } from "../apis/endpoints";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import {
  isOutOfStock,
  canAddToCart,
  getAvailableStock,
} from "../utils/stockUtils";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddToCartButton = ({
  product,
  quantity = 1,
  selectedVariant = null,
  className = "pqv-add-to-cart-btn",
  children = "Add to Cart",
  onSuccess = null,
  onError = null,
}) => {
  const [loading, setLoading] = useState(false);
  const { checkAuth } = useAuth();
  const { fetchCartItems } = useCart();
  const navigate = useNavigate();

  // Check if product is out of stock (with null check)
  const outOfStock = product ? isOutOfStock(product, selectedVariant) : false;
  const canAdd = product
    ? canAddToCart(product, selectedVariant, quantity)
    : false;
  const availableStock = product
    ? getAvailableStock(product, selectedVariant)
    : 999;

  // Add to cart function using post method from apiClient
  const addToCart = async (productData) => {
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("price", productData.price.toString());
    formData.append("quantity", productData.quantity.toString());
    formData.append("productId", productData.productId);
    formData.append("storeId", productData.storeId);

    if (productData.variantId) {
      formData.append("varientId", productData.variantId);
    }

    if (productData.image) {
      formData.append("image", productData.image);
    }

    if (productData.clearCart) {
      formData.append("clearCart", "true"); // Add clearCart flag to the formData
    }

    const config = {
      authRequired: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    return post(ENDPOINTS.ADD_TO_CART, formData, config);
  };

  const handleAddToCart = async ({ clearCart = false }) => {
    // Check stock first
    if (outOfStock) {
      Swal.fire({
        icon: "warning",
        title: "Out of Stock",
        text: "This product is currently out of stock.",
        showConfirmButton: true,
        confirmButtonText: "OK",
      });
      return;
    }

    if (!canAdd) {
      Swal.fire({
        icon: "warning",
        title: "Insufficient Stock",
        text: `Only ${availableStock} items available in stock.`,
        showConfirmButton: true,
        confirmButtonText: "OK",
      });
      return;
    }

    // Use common authentication check
    const { isAuthenticated } = checkAuth();

    if (!isAuthenticated) {
      const modalEl = document.getElementById("userModal");
      if (modalEl && window.bootstrap?.Modal) {
        const modal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.show();
      } else {
        Swal.fire({
          icon: "warning",
          title: "Login Required",
          text: "Please login to add items to your cart",
          showConfirmButton: true,
          confirmButtonText: "OK",
        });
      }
      return;
    }

    // Proceed with add to cart
    try {
      setLoading(true);

      const productData = {
        name: product.productName || product.name,
        price:
          selectedVariant?.sell_price || product.price || product.sell_price,
        quantity: quantity,
        productId: product._id || product.id,
        variantId: selectedVariant?._id || null,
        image: product.productImageUrl?.[0] || product.image,
        storeId: product.storeId || null,
        clearCart: clearCart,
      };

      const response = await addToCart(productData);

      // Handle the multi-store error
      if (
        response.data &&
        response.data.errorType === "multiple_stores_in_cart"
      ) {
        Swal.fire({
          icon: "error",
          title: "Multiple Store Error",
          text: "You cannot add products from different stores to your cart.",
          showCancelButton: true,
          confirmButtonText: "Update Cart",
          cancelButtonText: "Close",
          preConfirm: () => {
            productData.clearCart = true;
            return handleAddToCart({ clearCart: true });
          },
        });
      } else if (response.data && response.data.message) {
        // Success handling with custom formatted message
        Swal.fire({
          icon: "success",
          title: "Added to Cart!",
          text: `${quantity} x ${productData.name} has been added to your cart successfully`,
          showConfirmButton: true,
          timer: 3000,
        });

        // Refresh cart data
        await fetchCartItems();

        if (onSuccess) {
          navigate("/seller-products?id=" + product.storeId);
          onSuccess(response.data);
        }
      } else {
        // Handle unexpected response format
        Swal.fire({
          icon: "warning",
          title: "Response Received",
          text: "Item was processed but response format was unexpected",
          showConfirmButton: true,
        });

        if (onSuccess) {
          onSuccess(response.data);
        }
      }
    } catch (error) {
      console.error("Add to cart error:", error);
      let errorMessage = "Failed to add item to cart";
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }

      Swal.fire({
        icon: "error",
        title: "Error",
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

  // Determine button text and disabled state
  const getButtonText = () => {
    if (outOfStock) {
      return "Out of Stock";
    }
    if (!canAdd) {
      return `Only ${availableStock} left`;
    }
    return children;
  };

  const isDisabled = loading || outOfStock || !canAdd;

  return (
    <button
      className={className}
      onClick={handleAddToCart}
      disabled={isDisabled}
      style={{
        opacity: isDisabled ? 0.7 : 1,
        cursor: isDisabled ? "not-allowed" : "pointer",
        backgroundColor: outOfStock ? "#6c757d" : undefined,
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
          {getButtonText()}
        </>
      )}
    </button>
  );
};

export default AddToCartButton;
