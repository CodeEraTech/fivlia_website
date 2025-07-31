import React from 'react';

const AddAddressModal = () => {
  return (
    <div className="modal fade" id="addAddressModal" tabIndex={-1} aria-labelledby="addAddressModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body p-6">
            <div className="d-flex justify-content-between mb-5">
              <div>
                <h5 className="h6 mb-1" id="addAddressModalLabel">New Shipping Address</h5>
                <p className="small mb-0">Add new shipping address for your order delivery.</p>
              </div>
              <div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
            </div>
            <div className="row g-3">
              <div className="col-12">
                <input type="text" className="form-control" placeholder="First name" aria-label="First name" required />
              </div>
              <div className="col-12">
                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" required />
              </div>
              <div className="col-12">
                <input type="text" className="form-control" placeholder="Address Line 1" />
              </div>
              <div className="col-12">
                <input type="text" className="form-control" placeholder="Address Line 2" />
              </div>
              <div className="col-12">
                <input type="text" className="form-control" placeholder="City" />
              </div>
              <div className="col-12">
                <select className="form-select">
                  <option selected>India</option>
                  <option value={1}>UK</option>
                  <option value={2}>USA</option>
                  <option value={3}>UAE</option>
                </select>
              </div>
              <div className="col-12">
                <select className="form-select" aria-label="Default select example">
                  <option selected>Gujarat</option>
                  <option value={1}>Northern Ireland</option>
                  <option value={2}>Alaska</option>
                  <option value={3}>Abu Dhabi</option>
                </select>
              </div>
              <div className="col-12">
                <input type="text" className="form-control" placeholder="Zip Code" />
              </div>
              <div className="col-12">
                <input type="text" className="form-control" placeholder="Business Name" />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">Set as Default</label>
                </div>
              </div>
              <div className="col-12 text-end">
                <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">Cancel</button>
                <button className="btn btn-primary" type="button">Save Address</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAddressModal; 