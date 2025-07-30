import React from "react";
import { Link } from "react-router-dom";
import productimage1 from '../images/product-img-1.jpg';
import productimage2 from '../images/product-img-2.jpg';
import productimage3 from '../images/product-img-3.jpg';
import productimage4 from '../images/product-img-4.jpg';
import productimage5 from '../images/product-img-5.jpg';

const CartCanvas = () => {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex={-1}
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header border-bottom">
        <div className="text-start">
          <h5 id="offcanvasRightLabel" className="mb-0 fs-4">
            Shop Cart
          </h5>
          <small>Location in 382480</small>
        </div>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <div className="alert alert-danger" role="alert">
          You've got FREE delivery. Start checkout now!
        </div>
        <div>
          <div className="py-3">
            <ul className="list-group list-group-flush">
              <li className="list-group-item py-3 px-0 border-top">
                <div className="row align-items-center">
                  <div className="col-2">
                    <img
                      src={productimage1}
                      alt="Ecommerce"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-5">
                    <h6 className="mb-0">Organic Banana</h6>
                    <span>
                      <small className="text-muted">.98 / lb</small>
                    </span>
                    <div className="mt-2 small">
                      <Link to="#!" className="text-decoration-none">
                        <span className="me-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-trash-2"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </span>
                        Remove
                      </Link>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="input-group flex-nowrap justify-content-center">
                      <input
                        type="button"
                        defaultValue="-"
                        className="button-minus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                        data-field="quantity"
                      />
                      <input
                        type="number"
                        step={1}
                        max={10}
                        defaultValue={1}
                        name="quantity"
                        className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                      />
                      <input
                        type="button"
                        defaultValue="+"
                        className="button-plus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                        data-field="quantity"
                      />
                    </div>
                  </div>
                  <div className="col-2 text-end">
                    <span className="fw-bold">$35.00</span>
                  </div>
                </div>
              </li>
              <li className="list-group-item py-3 px-0">
                <div className="row row align-items-center">
                  <div className="col-2">
                    <img
                      src={productimage2}
                      alt="Ecommerce"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-5">
                    <h6 className="mb-0">Fresh Garlic, 250g</h6>
                    <span>
                      <small className="text-muted">250g</small>
                    </span>
                    <div className="mt-2 small">
                      <Link to="#!" className="text-decoration-none">
                        <span className="me-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-trash-2"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </span>
                        Remove
                      </Link>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="input-group flex-nowrap justify-content-center">
                      <input
                        type="button"
                        defaultValue="-"
                        className="button-minus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                        data-field="quantity"
                      />
                      <input
                        type="number"
                        step={1}
                        max={10}
                        defaultValue={1}
                        name="quantity"
                        className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                      />
                      <input
                        type="button"
                        defaultValue="+"
                        className="button-plus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                        data-field="quantity"
                      />
                    </div>
                  </div>
                  <div className="col-2 text-end">
                    <span className="fw-bold">$20.97</span>
                    <span className="text-decoration-line-through text-muted small">
                      $26.97
                    </span>
                  </div>
                </div>
              </li>
              <li className="list-group-item py-3 px-0">
                <div className="row row align-items-center">
                  <div className="col-2">
                    <img
                      src={productimage3}
                      alt="Ecommerce"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-5">
                    <h6 className="mb-0">Fresh Onion, 1kg</h6>
                    <span>
                      <small className="text-muted">1 kg</small>
                    </span>
                    <div className="mt-2 small">
                      <Link to="#!" className="text-decoration-none">
                        <span className="me-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-trash-2"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </span>
                        Remove
                      </Link>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="input-group flex-nowrap justify-content-center">
                      <input
                        type="button"
                        defaultValue="-"
                        className="button-minus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                        data-field="quantity"
                      />
                      <input
                        type="number"
                        step={1}
                        max={10}
                        defaultValue={1}
                        name="quantity"
                        className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                      />
                      <input
                        type="button"
                        defaultValue="+"
                        className="button-plus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                        data-field="quantity"
                      />
                    </div>
                  </div>
                  <div className="col-2 text-end">
                    <span className="fw-bold">$25.00</span>
                    <span className="text-decoration-line-through text-muted small">
                      $45.00
                    </span>
                  </div>
                </div>
              </li>
              <li className="list-group-item py-3 px-0">
                <div className="row row align-items-center">
                  <div className="col-2">
                    <img
                      src={productimage4}
                      alt="Ecommerce"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-5">
                    <h6 className="mb-0">Fresh Ginger</h6>
                    <span>
                      <small className="text-muted">250g</small>
                    </span>
                    <div className="mt-2 small">
                      <Link to="#!" className="text-decoration-none">
                        <span className="me-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-trash-2"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </span>
                        Remove
                      </Link>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="input-group flex-nowrap justify-content-center">
                      <input
                        type="button"
                        defaultValue="-"
                        className="button-minus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                        data-field="quantity"
                      />
                      <input
                        type="number"
                        step={1}
                        max={10}
                        defaultValue={1}
                        name="quantity"
                        className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                      />
                      <input
                        type="button"
                        defaultValue="+"
                        className="button-plus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                        data-field="quantity"
                      />
                    </div>
                  </div>
                  <div className="col-2 text-end">
                    <span className="fw-bold">$39.87</span>
                    <span className="text-decoration-line-through text-muted small">
                      $45.00
                    </span>
                  </div>
                </div>
              </li>
              <li className="list-group-item py-3 px-0 border-bottom">
                <div className="row row align-items-center">
                  <div className="col-2">
                    <img
                      src={productimage5}
                      alt="Ecommerce"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-5">
                    <h6 className="mb-0">
                      Apple Royal Gala, 4 Pieces Box
                    </h6>
                    <span>
                      <small className="text-muted">4 Apple</small>
                    </span>
                    <div className="mt-2 small">
                      <Link to="#!" className="text-decoration-none">
                        <span className="me-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-trash-2"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                          </svg>
                        </span>
                        Remove
                      </Link>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="input-group flex-nowrap justify-content-center">
                      <input
                        type="button"
                        defaultValue="-"
                        className="button-minus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                        data-field="quantity"
                      />
                      <input
                        type="number"
                        step={1}
                        max={10}
                        defaultValue={1}
                        name="quantity"
                        className="quantity-field form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                      />
                      <input
                        type="button"
                        defaultValue="+"
                        className="button-plus form-control text-center flex-xl-none w-xl-30 w-xxl-10 px-0"
                        data-field="quantity"
                      />
                    </div>
                  </div>
                  <div className="col-2 text-end">
                    <span className="fw-bold">$39.87</span>
                    <span className="text-decoration-line-through text-muted small">
                      $45.00
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="d-grid">
            <button
              className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
              type="submit"
            >
              Go to Checkout <span className="fw-bold">$120.00</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCanvas; 