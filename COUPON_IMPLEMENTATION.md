# Coupon Implementation Guide

## Overview
This implementation adds complete coupon functionality to your Fivlia e-commerce website, allowing users to view, apply, and remove coupons in both the cart and checkout pages.

## Features Implemented

### 1. **CouponModal Component** (`src/Component/CouponModal.jsx`)
A reusable modal component that:
- Fetches available coupons for the store
- Displays coupon details (title, description, discount, validity)
- Shows cart discount and free product offers
- Allows users to apply coupons
- Indicates which coupon is currently applied
- Prevents applying multiple coupons

**Key Props:**
- `storeId`: The store ID to fetch coupons from
- `cartItems`: Current cart items
- `onCouponApplied`: Callback function when coupon is successfully applied
- `appliedCouponId`: Currently applied coupon ID

### 2. **Enhanced CartContext** (`src/contexts/CartContext.jsx`)
Extended the cart context with:
- `appliedCoupon`: Currently applied coupon ID
- `couponDiscount`: Total discount amount from coupon
- `getOriginalCartTotal()`: Get cart total before discount
- `removeCoupon()`: Remove applied coupon

**New Context Values:**
```javascript
{
  appliedCoupon,          // Coupon ID
  couponDiscount,         // Discount amount
  getOriginalCartTotal,   // Original price function
  removeCoupon,           // Remove coupon function
}
```

### 3. **Updated CartCanvas** (`src/Component/CartCanvas.jsx`)
Added coupon functionality:
- "Apply Coupon" button opens coupon modal
- Shows applied coupon with savings amount
- "Remove" button to remove applied coupon
- Price breakdown showing original price and discount
- Sticky coupon section above checkout

**Layout:**
```
┌────────────────────────────┐
│  Cart Items (scrollable)   │
│                            │
└────────────────────────────┘
┌────────────────────────────┐
│  Coupon Section (sticky)   │
│  [Apply Coupon] or         │
│  [✓ Coupon Applied]        │
└────────────────────────────┘
┌────────────────────────────┐
│  Checkout Section (sticky) │
│  Original: ₹500            │
│  Discount: -₹50            │
│  Total: ₹450               │
│  [Proceed to Checkout]     │
└────────────────────────────┘
```

### 4. **Updated OrderCheckout** (`src/pages/OrderCheckout.jsx`)
Added coupon functionality in Order Details:
- "Apply Coupon" button in order summary
- Shows applied coupon with savings
- Price breakdown with discount
- Remove coupon option
- Integrates with existing price calculations

**Order Details Card:**
```
┌─────────────────────────────┐
│ Order Details               │
├─────────────────────────────┤
│ Product 1            ₹100   │
│ Product 2            ₹200   │
├─────────────────────────────┤
│ [Apply Coupon Button]       │
│                             │
│ Original Price:     ₹500    │
│ Coupon Discount:    -₹50    │
│ ─────────────────────────   │
│ Item Subtotal:      ₹450    │
│ Platform Fee:       ₹14     │
│ Delivery Charges:   Free    │
│ ─────────────────────────   │
│ Total:              ₹464    │
│                             │
│ [Place Order]               │
└─────────────────────────────┘
```

### 5. **API Endpoints** (`src/apis/endpoints.jsx`)
Added:
- `APPLY_COUPON`: "/apply-coupon"
- `REMOVE_COUPON`: "/apply-coupon?removeOffer=true"

## Backend API Integration

### Apply Coupon API
**Endpoint:** `POST /apply-coupon`

**Request Body:**
```javascript
{
  cartIds: ["cart_id_1", "cart_id_2"],
  couponId: "coupon_id"
}
```

**Response:**
```javascript
{
  message: "Offer applied successfully",
  appliedOn: ["cart_id_1"],
  skipped: ["cart_id_2"],
  carts: [...],
  offerSummary: {
    offerId: "...",
    title: "Summer Sale",
    offerType: "cart_discount",
    discountAmount: 50,
    subtotal: 500,
    finalSubtotal: 450
  }
}
```

### Remove Coupon API
**Endpoint:** `PUT /apply-coupon?removeOffer=true`

**Request Body:**
```javascript
{
  cartIds: ["cart_id_1", "cart_id_2"]
}
```

**Response:**
```javascript
{
  message: "Offers removed successfully",
  carts: [...]
}
```

### Get Coupons API
**Endpoint:** `GET /seller/get-coupons/:storeId`

**Response:**
```javascript
{
  message: "Offers fetched successfully",
  coupons: [
    {
      _id: "coupon_id",
      title: "Summer Sale",
      offerType: "cart_discount",
      discountType: "percentage",
      discountValue: 10,
      minimumOrderValue: 200,
      maxDiscount: 100,
      validUpto: "2024-12-31",
      productId: {...},
      freeProductId: {...}
    }
  ]
}
```

## User Flow

### In Cart (CartCanvas)
1. User adds items to cart
2. User clicks "Apply Coupon" button
3. CouponModal opens showing available coupons
4. User selects a coupon
5. Coupon is applied, cart refreshes
6. Applied coupon shows with savings
7. User can remove coupon if needed
8. User proceeds to checkout

### In Checkout (OrderCheckout)
1. User sees order details with "Apply Coupon" button
2. User clicks "Apply Coupon"
3. CouponModal opens
4. User selects a coupon
5. Order details update with discount
6. User can remove coupon if needed
7. User places order with discounted price

## Key Features

### Cart Updates
- When a coupon is applied, the backend updates:
  - `cart.couponId` = coupon ID
  - `cart.discountAmount` = discount per item
  - `cart.originalPrice` = original price before discount
  - `cart.price` = discounted price
  - `cart.isCouponApplied` = true

### Automatic Calculations
- Frontend automatically:
  - Calculates original total
  - Shows discount amount
  - Calculates final total
  - Updates on cart refresh

### Error Handling
- Invalid coupons show error message
- Minimum order validation
- Stock availability checks
- Network error handling

## Styling

### Coupon Card in Modal
- Gradient background
- Dashed border (solid when applied)
- Icon with product preview for free products
- Validity date and conditions
- Apply button with loading state

### Applied Coupon Display
- Green gradient background
- Check circle icon
- Savings amount highlighted
- Remove button

### Responsive Design
- Works on mobile and desktop
- Sticky sections in cart
- Scrollable product list
- Touch-friendly buttons

## Testing Checklist

- [ ] Fetch coupons from API
- [ ] Display coupons in modal
- [ ] Apply coupon from cart
- [ ] Apply coupon from checkout
- [ ] Remove coupon from cart
- [ ] Remove coupon from checkout
- [ ] Price calculations correct
- [ ] Discount amount displayed correctly
- [ ] Original price shown when coupon applied
- [ ] Multiple coupon prevention
- [ ] Minimum order validation
- [ ] Cart refresh after coupon apply/remove
- [ ] Mobile responsive
- [ ] Loading states work
- [ ] Error messages display
- [ ] Success notifications show

## Future Enhancements

1. **Coupon Codes**: Add manual coupon code entry
2. **Auto-Apply**: Auto-apply best coupon
3. **Multiple Coupons**: Stack multiple coupons (if business logic allows)
4. **Coupon History**: Show previously used coupons
5. **Expiry Timer**: Show countdown for expiring coupons
6. **Share Coupons**: Share coupon codes with friends
7. **Personalized Coupons**: Show user-specific coupons

## Notes

- Coupon state is managed in CartContext
- Cart items are automatically updated by backend
- Frontend displays the discount information
- Coupon is stored per cart item, not globally
- All cart items must belong to same store for coupon to apply
