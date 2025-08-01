import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import AccountLayout from "../Accounts/AccountLayout";
import { get } from "../../apis/apiClient";
import { ENDPOINTS } from "../../apis/endpoints";

const MyAccountAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    try {
      setLoading(true);
      const response = await get(ENDPOINTS.GET_ADDRESS, { authRequired: true });
      
      if (response.data && response.data.addresses) {
        setAddresses(response.data.addresses || []);
      } else {
        setAddresses([]);
      }
    } catch (error) {
      console.error("Error fetching addresses:", error);
      setError("Failed to load addresses");
      setAddresses([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSetDefault = async (addressId) => {
    // TODO: Implement set default address functionality
    console.log("Set default address:", addressId);
  };

  const handleEditAddress = (addressId) => {
    // TODO: Implement edit address functionality
    console.log("Edit address:", addressId);
  };

  const handleDeleteAddress = async (addressId) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      // TODO: Implement delete address functionality
      console.log("Delete address:", addressId);
    }
  };

  const getAddressTypeLabel = (addressType) => {
    switch (addressType) {
      case 'home':
        return 'Home';
      case 'office':
        return 'Office';
      case 'other':
        return 'Other';
      default:
        return 'Address';
    }
  };

  const renderAddressCard = (address, index) => {
    return (
      <div key={address._id || index} className="col-12 mb-3">
        <div className="border rounded p-4">
          <div className="d-flex align-items-start">
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h6 className="mb-1 fw-bold fs-5">{address.fullName}</h6>
                  <div className="text-muted">
                    {address.mobileNumber && <span className="fw-medium">Phone: {address.mobileNumber}</span>}
                    {address.alternateNumber && <span className="ms-3 fw-medium">Alt: {address.alternateNumber}</span>}
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  {address.default && (
                    <span className="badge bg-success text-white me-2">Default</span>
                  )}
                  <span className="badge bg-primary text-white">{getAddressTypeLabel(address.addressType)}</span>
                </div>
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
              
              {/* <div className="mt-3">
                {!address.default && (
                  <Link 
                    to="#" 
                    className="btn btn-outline-primary btn-sm me-2"
                    onClick={() => handleSetDefault(address._id)}
                  >
                    Set as Default
                  </Link>
                )}
                <Link 
                  to="#" 
                  className="btn btn-outline-secondary btn-sm me-2"
                  onClick={() => handleEditAddress(address._id)}
                >
                  Edit
                </Link>
                <Link
                  to="#"
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleDeleteAddress(address._id)}
                >
                  Delete
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <ScrollToTop />
      <AccountLayout activePath="address">
        {/* Address Section */}
        <div className="d-flex justify-content-between mb-6">
          <h2 className="mb-0">Address</h2>
        </div>

        {loading ? (
          <div className="row address-shimmer">
            <div className="col-12 mb-3">
              <div className="border rounded p-4">
                <div className="d-flex align-items-start">
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <div className="shimmer-name mb-1"></div>
                        <div className="shimmer-phone"></div>
                      </div>
                      <div className="d-flex">
                        <div className="shimmer-badge me-2"></div>
                        <div className="shimmer-badge"></div>
                      </div>
                    </div>
                    <div className="shimmer-address"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mb-3">
              <div className="border rounded p-4">
                <div className="d-flex align-items-start">
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <div className="shimmer-name mb-1"></div>
                        <div className="shimmer-phone"></div>
                      </div>
                      <div className="d-flex">
                        <div className="shimmer-badge me-2"></div>
                        <div className="shimmer-badge"></div>
                      </div>
                    </div>
                    <div className="shimmer-address"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : error ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : addresses.length === 0 ? (
          <div className="text-center py-5">
            <div className="mb-3">
              <i className="fa fa-map-marker fa-3x text-muted"></i>
            </div>
            <h6 className="text-muted">No addresses found</h6>
            <p className="text-muted small">You haven't added any addresses yet.</p>
          </div>
        ) : (
          <div className="row">
            {addresses.map((address, index) => renderAddressCard(address, index))}
          </div>
        )}

        {/* Delete Modal */}
        <div
          className="modal fade"
          id="deleteModal"
          tabIndex={-1}
          aria-labelledby="deleteModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteModalLabel">
                  Delete address
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <h6>Are you sure you want to delete this address?</h6>
                <p className="mb-6">
                  This action cannot be undone.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-gray-400"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </AccountLayout>
    </>
  );
};

export default MyAccountAddress;

// Shimmer CSS with proper scoping
const shimmerStyles = `
  .address-shimmer .shimmer-name {
    height: 24px;
    width: 60%;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: address-shimmer 1.5s infinite;
    border-radius: 4px;
  }
  
  .address-shimmer .shimmer-phone {
    height: 16px;
    width: 40%;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: address-shimmer 1.5s infinite;
    border-radius: 4px;
  }
  
  .address-shimmer .shimmer-badge {
    width: 60px;
    height: 20px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: address-shimmer 1.5s infinite;
    border-radius: 10px;
  }
  
  .address-shimmer .shimmer-address {
    height: 18px;
    width: 90%;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: address-shimmer 1.5s infinite;
    border-radius: 4px;
  }
  
  @keyframes address-shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

// Add styles to document with unique ID to prevent conflicts
if (typeof document !== 'undefined') {
  // Remove existing style if it exists
  const existingStyle = document.getElementById('address-shimmer-styles');
  if (existingStyle) {
    existingStyle.remove();
  }
  
  const styleElement = document.createElement('style');
  styleElement.id = 'address-shimmer-styles';
  styleElement.textContent = shimmerStyles;
  document.head.appendChild(styleElement);
}
