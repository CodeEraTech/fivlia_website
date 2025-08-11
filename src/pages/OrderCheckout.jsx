import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { get, post } from '../apis/apiClient';
import { ENDPOINTS } from '../apis/endpoints';
import { MagnifyingGlass } from 'react-loader-spinner'
import ScrollToTop from "./ScrollToTop";
import AddAddressModal from '../Component/AddAddressModal';
import AddressShimmer from '../Component/AddressShimmer';
import launchRazorpay from '../utils/launchRazorpay';

const OrderCheckout = () => {
  const { cartItems, getCartTotal, getShippingCharge, isInitialized, storeId } = useCart();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [loaderStatus, setLoaderStatus] = useState(true);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addressLoading, setAddressLoading] = useState(true);
  const [addressError, setAddressError] = useState(null);
  const [paymentMode, setPaymentMode] = useState("online");
  
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);

  // Fetch addresses when component mounts
  useEffect(() => {
    if (isInitialized && isLoggedIn) {
      fetchAddresses();
    }
  }, [isInitialized, isLoggedIn]);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (isInitialized && !isLoggedIn) {
      navigate('/MyAccountSignIn');
    }
  }, [isInitialized, isLoggedIn, navigate]);

  // Redirect to home if cart is empty
  useEffect(() => {
    if (isInitialized && cartItems.length === 0) {
      navigate('/');
    }
  }, [isInitialized, cartItems.length, navigate]);

  const fetchAddresses = async () => {
    try {
      setAddressLoading(true);
      setAddressError(null);
      
      const response = await get(ENDPOINTS.GET_ADDRESS, { authRequired: true });
      
      if (response.data && response.data.addresses) {
        const addressData = response.data.addresses || [];
        setAddresses(addressData);
        
        // Set first address as default if available
        if (addressData.length > 0) {
          setSelectedAddress(addressData[0]._id);
        }
      } else {
        setAddressError('Failed to load addresses');
      }
    } catch (error) {
      console.error('Error fetching addresses:', error);
      setAddressError('Failed to load addresses. Please try again.');
    } finally {
      setAddressLoading(false);
    }
  };

  const handleAddressSelect = (addressId) => {
    setSelectedAddress(addressId);
  };

  const handlePlaceOrder = async () => {
    if (paymentMode === 'online' && !selectedAddress) {
      alert('Please select a delivery address');
      return;
    }
  
    try {
      const orderPayload = {
        addressId: selectedAddress,
        cartIds: cartItems.map(item => item._id),
        paymentMode: paymentMode === 'cod' ? true : 'online',
        totalAmount: getCartTotal() + getShippingCharge(),
        storeId: storeId,
      };
  
      const response = await post(ENDPOINTS.PLACE_ORDER, orderPayload,{authRequired:true});
      const { order, tempOrder, tempOrderId } = response.data || {};
       // ✅ Case 1: COD — handle directly
      if (order && order.cashOnDelivery === true && order.paymentStatus === "Successful") {
        alert("Order placed successfully with Cash on Delivery!");
        navigate('/');
        return;
      }
      // ✅ Case 2: Online payment — proceed to Razorpay
      if (tempOrder && tempOrderId && tempOrder.totalPrice) {
        const amountInPaisa = Math.round(tempOrder.totalPrice * 100);

        launchRazorpay({
          tempOrderId,
          amount: amountInPaisa,
          onSuccess: () => {
            alert("Payment successful and order confirmed!");
            navigate('/MyAccountOrder');
          },
          onFailure: () => {
            alert("Payment verification failed or cancelled.");
          }
        });
      } else {
        alert("Invalid order response. Please try again.");
      }
    } catch (error) {
      console.error('Order placement error:', error);
      alert('Something went wrong!');
    }
  };  

  return (
    <div>
      {loaderStatus ? (
        <div className="loader-container">
          <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperclassName="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#0aad0a"
          />
        </div>
      ) : (
        <>
          <ScrollToTop />
          <section className="mb-lg-14 mb-8 mt-8">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="mb-8">
                    <h1 className="fw-bold mb-0">Checkout</h1>
                    {/* <p className="mb-0">
                      Already have an account? Click here to{" "}
                      <Link to="/MyAccountSignIn">Sign in</Link>.
                    </p> */}
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col-lg-7 col-md-12">
                  <div className="accordion accordion-flush" id="accordionFlushExample">
                    
                    {/* Address Section - Always Expanded */}
                    <div className="accordion-item py-2"  style={{border: 'none'}}>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="fs-5 text-inherit h4">
                          <i className="feather-icon icon-map-pin me-2 text-muted" />
                          Delivery Address
                        </div>
                        <Link
                          to="#"
                          className="btn btn-outline-primary btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#addAddressModal"
                        >
                          Add New Address
                        </Link>
                      </div>
                      <div className="mt-5">
                        {addressLoading ? (
                          <AddressShimmer />
                        ) : addressError ? (
                          <div className="alert alert-danger" role="alert">
                            {addressError}
                            <button 
                              className="btn btn-sm btn-outline-danger ms-2" 
                              onClick={fetchAddresses}
                            >
                              Retry
                            </button>
                          </div>
                        ) : addresses.length === 0 ? (
                          <div className="text-center py-4">
                            <div className="mb-3">
                              <i className="fa fa-map-marker fa-3x text-muted"></i>
                            </div>
                            <h6 className="text-muted">No addresses found</h6>
                            <p className="text-muted small">Add a delivery address to continue</p>
                            <button 
                              className="btn btn-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#addAddressModal"
                            >
                              Add Address
                            </button>
                          </div>
                                                 ) : (
                           <div className="row">
                             {addresses.map((address, index) => (
                               <div key={address._id || index} className="col-12 mb-3">
                                 <div className="border rounded p-4">
                                   <div className="d-flex align-items-start">
                                     <div className="form-check me-3 mt-1">
                                       <input
                                         className="form-check-input"
                                         type="radio"
                                         name="addressRadio"
                                         id={`address-${address._id || index}`}
                                         checked={selectedAddress === address._id}
                                         onChange={() => handleAddressSelect(address._id)}
                                       />
                                     </div>
                                     <div className="flex-grow-1">
                                       <div className="d-flex justify-content-between align-items-start mb-3">
                                         <div>
                                           <h6 className="mb-1 fw-bold fs-5">{address.fullName}</h6>
                                           <div className="text-muted">
                                             {address.mobileNumber && <span className="fw-medium">Phone: {address.mobileNumber}</span>}
                                             {address.alternateNumber && <span className="ms-3 fw-medium">Alt: {address.alternateNumber}</span>}
                                           </div>
                                         </div>
                                         {address.default && (
                                           <span className="badge bg-success text-white">Default</span>
                                         )}
                                       </div>
                                       
                                       <div className="address-details">
                                         <p className="mb-0 text-dark fs-6 lh-base">
                                           {address.house_No && `${address.house_No}, `}
                                           {address.floor && `${address.floor} floor, `}
                                           {address.address}
                                           {address.landmark && `, ${address.landmark}`}
                                           {address.city && address.state && `, ${address.city}, ${address.state} ${address.pincode}`}
                                         </p>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             ))}
                           </div>
                         )}
                      </div>
                    </div>

                    {/* Payment Method Section */}
                    <div className="accordion-item py-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="fs-5 text-inherit h4">
                          <i className="feather-icon icon-credit-card me-2 text-muted" />
                          Payment Method
                        </div>
                      </div>
                      <div className="mt-5">
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <div className="card card-bordered shadow-none h-100">
                              <div className="card-body p-4">
                                <div className="d-flex">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="paymentRadio"
                                      id="payOnline"
                                      checked={paymentMode === 'online'}
                                      onChange={() => setPaymentMode('online')}
                                    />
                                    <label className="form-check-label ms-2" htmlFor="payOnline"></label>
                                  </div>
                                  <div>
                                    <h5 className="mb-1 h6">Pay Online</h5>
                                    <p className="mb-0 small">
                                      Complete your purchase securely using our online payment gateway. We support all major payment methods.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6 mb-3">
                            <div className="card card-bordered shadow-none h-100">
                              <div className="card-body p-4">
                                <div className="d-flex">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="paymentRadio"
                                      id="cashonDelivery"
                                      checked={paymentMode === 'cod'}
                                      onChange={() => setPaymentMode('cod')}
                                    />
                                    <label className="form-check-label ms-2" htmlFor="cashonDelivery"></label>
                                  </div>
                                  <div>
                                    <h5 className="mb-1 h6">Cash on Delivery</h5>
                                    <p className="mb-0 small">
                                      Pay with cash when your order is delivered.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Details Sidebar */}
                <div className="col-12 col-md-12 offset-lg-1 col-lg-4">
                  <div className="mt-4 mt-lg-0">
                    <div className="card shadow-sm">
                      <h5 className="px-6 py-4 bg-transparent mb-0">Order Details</h5>
                      <ul className="list-group list-group-flush">
                        {cartItems.map((item, index) => (
                          <li key={`${item.productId}-${item.varientId}-${index}`} className="list-group-item px-4 py-3">
                            <div className="row align-items-center">
                              <div className="col-2 col-md-2">
                                <img 
                                  src={item.image || '/assets/img/no_image.jpg'} 
                                  alt={item.name} 
                                  className="img-fluid"
                                  onError={(e) => {
                                    e.target.src = '/assets/img/no_image.jpg';
                                  }}
                                />
                              </div>
                              <div className="col-5 col-md-5">
                                <h6 className="mb-0">{item.name}</h6>
                                <span><small className="text-muted">₹{item.price} / unit</small></span>
                              </div>
                              <div className="col-2 col-md-2 text-center text-muted">
                                <span>{item.quantity}</span>
                              </div>
                              <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                                <span className="fw-bold">₹{item.price * item.quantity}</span>
                              </div>
                            </div>
                          </li>
                        ))}
                        <li className="list-group-item px-4 py-3">
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <div>Item Subtotal</div>
                            <div className="fw-bold">₹{getCartTotal()}</div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              Service Fee{" "}
                              <i className="feather-icon icon-info text-muted" data-bs-toggle="tooltip" title="Default tooltip" />
                            </div>
                            <div className="fw-bold">₹{getShippingCharge()}</div>
                          </div>
                        </li>
                        <li className="list-group-item px-4 py-3">
                          <div className="d-flex align-items-center justify-content-between fw-bold">
                            <div>Total</div>
                            <div>₹{getCartTotal() + getShippingCharge()}</div>
                          </div>
                        </li>
                      </ul>
                      
                      {/* Place Order Button - Full Width */}
                      <div className="p-4">
                        <button 
                          className="btn btn-primary w-100" 
                          onClick={handlePlaceOrder}
                          disabled={!selectedAddress || addressLoading}
                        >
                          {addressLoading ? 'Loading...' : 'Place Order'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Add Address Modal Component */}
          <AddAddressModal onAddressAdded={fetchAddresses} />
        </>
      )}
    </div>
  );
};

export default OrderCheckout;
