import React, { useState } from 'react';
import { post } from '../apis/apiClient';
import { ENDPOINTS } from '../apis/endpoints';
import AreaAutocompleteInput from "./AreaAutocompleteInput"; 

const AddAddressModal = ({ onAddressAdded }) => {
  const [formData, setFormData] = useState({
    addressType: 'home',
    fullName: '',
    alternateNumber: '',
    house_No: '',
    floor: '',
    area: '',
    pincode: '',
    city: '',
    state: '',
    landmark: '',
    street: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.house_No || !formData.area || !formData.pincode || !formData.city) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const addressData = {
        fullName: formData.fullName,
        alternateNumber: formData.alternateNumber || '',
        pincode: formData.pincode,
        house_No: formData.house_No,
        landmark: formData.landmark || '',
        address: `${formData.house_No}, ${formData.area}`,
        state: formData.state || '',
        street: formData.street || '',
        latitude: "29.1492", // Default values - in real app, get from geolocation
        longitude: "75.7217",
        city: formData.city,
        addressType: formData.addressType,
        floor: formData.floor ? parseInt(formData.floor) : undefined
      };

      const response = await post(ENDPOINTS.ADD_ADDRESS, addressData, { authRequired: true });

      if (response.data && response.data.status === true) {
        // Close modal
        const modal = document.getElementById('addAddressModal');
        const bsModal = bootstrap.Modal.getInstance(modal);
        if (bsModal) {
          bsModal.hide();
        }

        // Reset form
        setFormData({
          addressType: 'home',
          fullName: '',
          alternateNumber: '',
          house_No: '',
          floor: '',
          area: '',
          pincode: '',
          city: '',
          state: '',
          landmark: '',
          street: ''
        });

        // Notify parent component to refresh addresses
        if (onAddressAdded) {
          onAddressAdded();
        }
      } else {
        setError(response.data?.message || 'Failed to add address. Please try again.');
      }
    } catch (error) {
      console.error('Error adding address:', error);
      setError('Failed to add address. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal fade" id="addAddressModal" tabIndex={-1} aria-labelledby="addAddressModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable" style={{justifyContent:"center"}}>
        <div className="modal-content" style={{width:"600px"}}>
          <div className="modal-header">
            <h5 className="modal-title" id="addAddressModalLabel">Add New Address</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
            <form onSubmit={handleSubmit}>
              {/* Address Type Selection - Single Row */}
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="addressType"
                      id="home"
                      value="home"
                      checked={formData.addressType === 'home'}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="home">
                      <i className="fa fa-home me-2"></i>Home
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="addressType"
                      id="work"
                      value="work"
                      checked={formData.addressType === 'work'}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="work">
                      <i className="fa fa-building me-2"></i>Work
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="addressType"
                      id="other"
                      value="other"
                      checked={formData.addressType === 'other'}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="other">
                      <i className="fa fa-map-marker me-2"></i>Other
                    </label>
                  </div>
                </div>
              </div>

              {/* Full Name - Full Width */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name *"
                  required
                />
              </div>

              {/* Alternate Number - Full Width */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="alternateNumber"
                  value={formData.alternateNumber}
                  onChange={handleInputChange}
                  placeholder="Alternate Number (Optional)"
                />
              </div>

              {/* House No./Flat/Building - Full Width */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="house_No"
                  value={formData.house_No}
                  onChange={handleInputChange}
                  placeholder="House No./Flat/Building *"
                  required
                />
              </div>

              {/* Floor - Full Width */}
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  name="floor"
                  value={formData.floor}
                  onChange={handleInputChange}
                  placeholder="Floor (Optional)"
                />
              </div>

              {/* Area - Full Width */}
              <AreaAutocompleteInput formData={formData} setFormData={setFormData} />

              {/* Pincode - Full Width */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  placeholder="Pincode *"
                  required
                />
              </div>

              {/* City - Full Width */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City *"
                  required
                />
              </div>

              {/* State - Full Width */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="State"
                />
              </div>

              {/* Landmark - Full Width */}
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleInputChange}
                  placeholder="Landmark (Optional)"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Saving...
                </>
              ) : (
                'Save Location'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAddressModal; 