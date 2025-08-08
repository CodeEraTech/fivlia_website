// Utility functions for stock management

/**
 * Check if a product is out of stock
 * @param {Object} product - Product object
 * @param {Object} selectedVariant - Selected variant object
 * @returns {boolean} - True if product is out of stock
 */
export const isOutOfStock = (product, selectedVariant = null) => {
  // Handle null/undefined product
  if (!product || typeof product !== 'object') {
    return false;
  }

  // Check if product has stock information
  if (product.stock !== undefined && product.stock !== null) {
    return Number(product.stock) <= 0;
  }
  
  // Check variant stock if available
  if (selectedVariant && typeof selectedVariant === 'object' && selectedVariant.stock !== undefined && selectedVariant.stock !== null) {
    return Number(selectedVariant.stock) <= 0;
  }
  
  // Check inventory array (new API structure)
  if (product.inventory && Array.isArray(product.inventory) && product.inventory.length > 0) {
    if (selectedVariant && selectedVariant._id) {
      // Find inventory for specific variant
      const variantInventory = product.inventory.find(inv => inv.variantId === selectedVariant._id);
      if (variantInventory) {
        return Number(variantInventory.quantity) <= 0;
      }
    } else {
      // Check if any inventory has stock
      const hasStock = product.inventory.some(inv => Number(inv.quantity) > 0);
      return !hasStock;
    }
  }
  
  // Check if product has variants with stock information
  if (product.variants && Array.isArray(product.variants) && product.variants.length > 0) {
    const variant = selectedVariant || product.variants[0];
    if (variant && typeof variant === 'object' && variant.stock !== undefined && variant.stock !== null) {
      return Number(variant.stock) <= 0;
    }
  }
  
  // Default: assume in stock if no stock information available
  return false;
};

/**
 * Get available stock quantity for a product
 * @param {Object} product - Product object
 * @param {Object} selectedVariant - Selected variant object
 * @returns {number} - Available stock quantity
 */
export const getAvailableStock = (product, selectedVariant = null) => {
  // Handle null/undefined product
  if (!product || typeof product !== 'object') {
    return 999;
  }

  // Check product stock
  if (product.stock !== undefined && product.stock !== null) {
    return Math.max(0, Number(product.stock));
  }
  
  // Check variant stock
  if (selectedVariant && typeof selectedVariant === 'object' && selectedVariant.stock !== undefined && selectedVariant.stock !== null) {
    return Math.max(0, Number(selectedVariant.stock));
  }
  
  // Check inventory array (new API structure)
  if (product.inventory && Array.isArray(product.inventory) && product.inventory.length > 0) {
    if (selectedVariant && selectedVariant._id) {
      // Find inventory for specific variant
      const variantInventory = product.inventory.find(inv => inv.variantId === selectedVariant._id);
      if (variantInventory) {
        return Math.max(0, Number(variantInventory.quantity));
      }
    } else {
      // Sum all inventory quantities
      const totalStock = product.inventory.reduce((sum, inv) => sum + Number(inv.quantity || 0), 0);
      return Math.max(0, totalStock);
    }
  }
  
  // Check variants array
  if (product.variants && Array.isArray(product.variants) && product.variants.length > 0) {
    const variant = selectedVariant || product.variants[0];
    if (variant && typeof variant === 'object' && variant.stock !== undefined && variant.stock !== null) {
      return Math.max(0, Number(variant.stock));
    }
  }
  
  // Default: return a high number if no stock information available
  return 999;
};

/**
 * Check if quantity can be added to cart
 * @param {Object} product - Product object
 * @param {Object} selectedVariant - Selected variant object
 * @param {number} quantity - Quantity to add
 * @returns {boolean} - True if quantity can be added
 */
export const canAddToCart = (product, selectedVariant = null, quantity = 1) => {
  const availableStock = getAvailableStock(product, selectedVariant);
  return availableStock >= Number(quantity);
};

/**
 * Get stock status text
 * @param {Object} product - Product object
 * @param {Object} selectedVariant - Selected variant object
 * @returns {string} - Stock status text
 */
export const getStockStatusText = (product, selectedVariant = null) => {
  if (isOutOfStock(product, selectedVariant)) {
    return 'Out of Stock';
  }
  
  const availableStock = getAvailableStock(product, selectedVariant);
  if (availableStock < 10) {
    return `Only ${availableStock} left`;
  }
  
  return 'In Stock';
};

/**
 * Get stock status color
 * @param {Object} product - Product object
 * @param {Object} selectedVariant - Selected variant object
 * @returns {string} - CSS color value
 */
export const getStockStatusColor = (product, selectedVariant = null) => {
  if (isOutOfStock(product, selectedVariant)) {
    return '#dc3545'; // Red for out of stock
  }
  
  const availableStock = getAvailableStock(product, selectedVariant);
  if (availableStock < 10) {
    return '#ffc107'; // Yellow for low stock
  }
  
  return '#28a745'; // Green for in stock
};
