import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import productimg1 from "../../images/product-img-1.jpg";
import productimg2 from "../../images/product-img-2.jpg";
import productimg3 from "../../images/product-img-3.jpg";
import productimg4 from "../../images/product-img-4.jpg";
import productimg5 from "../../images/product-img-5.jpg";
import productimg6 from "../../images/product-img-6.jpg";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";
import AccountLayout from "../Accounts/AccountLayout"; // Adjust path as needed


const MyAccountOrder = () => {
  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);




 return (
    <>
      <ScrollToTop />
      {loaderStatus ? (
        <div className="loader-container">
          <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            color="#0aad0a"
            ariaLabel="Loading..."
          />
        </div>
      ) : (
        <AccountLayout>
          <div className="p-6 p-lg-10">
                        {/* heading */}
                        <h2 className="mb-6">Your Orders</h2>
                        <div className="table-responsive border-0">
                          {/* Table */}
                          <table className="table mb-0 text-nowrap">
                            {/* Table Head */}
                            <thead className="table-light">
                              <tr>
                                <th className="border-0">&nbsp;</th>
                                <th className="border-0">Product</th>
                                <th className="border-0">Order</th>
                                <th className="border-0">Date</th>
                                <th className="border-0">Items</th>
                                <th className="border-0">Status</th>
                                <th className="border-0">Amount</th>
                                <th className="border-0" />
                              </tr>
                            </thead>
                            <tbody>
                              {/* Table body */}
                              <tr>
                                <td className="align-middle border-top-0 w-0">
                                  <Link to="#">
                                    {" "}
                                    <img
                                      src={productimg1}
                                      alt="Ecommerce"
                                      className="icon-shape icon-xl"
                                    />
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link
                                    to="#"
                                    className="fw-semi-bold text-inherit"
                                  >
                                    <h6 className="mb-0">
                                      Haldiram's Nagpur Aloo Bhujia
                                    </h6>
                                  </Link>
                                  <span>
                                    <small className="text-muted">400g</small>
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    #14899
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  March 5, 2023
                                </td>
                                <td className="align-middle border-top-0">1</td>
                                <td className="align-middle border-top-0">
                                  <span className="badge bg-warning">
                                    Processing
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  $15.00
                                </td>
                                <td className="text-muted align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    <i className="feather-icon icon-eye" />
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td className="align-middle border-top-0 w-0">
                                  <Link to="#">
                                    {" "}
                                    <img
                                      src={productimg2}
                                      alt="Ecommerce"
                                      className="icon-shape icon-xl"
                                    />
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link
                                    to="#"
                                    className="fw-semi-bold text-inherit"
                                  >
                                    <h6 className="mb-0">
                                      Nutri Choise Biscuit
                                    </h6>
                                  </Link>
                                  <span>
                                    <small className="text-muted">2 Pkt</small>
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    #14658
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  July 9, 2023
                                </td>
                                <td className="align-middle border-top-0">2</td>
                                <td className="align-middle border-top-0">
                                  <span className="badge bg-success">
                                    Completed
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  $45.00
                                </td>
                                <td className="text-muted align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    <i className="feather-icon icon-eye" />
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td className="align-middle border-top-0 w-0">
                                  <Link to="#">
                                    {" "}
                                    <img
                                      src={productimg3}
                                      alt="Ecommerce"
                                      className="icon-shape icon-xl"
                                    />
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    <h6 className="mb-0">
                                      Cadbury Dairy Milk 5 Star Bites{" "}
                                    </h6>
                                    <span>
                                      <small className="text-muted">
                                        202 g
                                      </small>
                                    </span>
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    #13778
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  Oct 03, 2023
                                </td>
                                <td className="align-middle border-top-0">4</td>
                                <td className="align-middle border-top-0">
                                  <span className="badge bg-success">
                                    Completed
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  $99.00
                                </td>
                                <td className="text-muted align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    <i className="feather-icon icon-eye" />
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td className="align-middle border-top-0 w-0">
                                  <Link to="#">
                                    {" "}
                                    <img
                                      src={productimg4}
                                      alt="Ecommerce"
                                      className="icon-shape icon-xl"
                                    />
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link
                                    to="#"
                                    className="fw-semi-bold text-inherit"
                                  >
                                    <h6 className="mb-0">
                                      Onion Flavour Potato{" "}
                                    </h6>
                                  </Link>
                                  <span>
                                    <small className="text-muted">100 g</small>
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    #13746
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  March 5, 2023
                                </td>
                                <td className="align-middle border-top-0">1</td>
                                <td className="align-middle border-top-0">
                                  <span className="badge bg-success">
                                    Completed
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  $12.00
                                </td>
                                <td className="text-muted align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    <i className="feather-icon icon-eye" />
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td className="align-middle border-top-0 w-0">
                                  <Link to="#">
                                    {" "}
                                    <img
                                      src={productimg5}
                                      alt="Ecommerce"
                                      className="icon-shape icon-xl"
                                    />
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link
                                    to="#"
                                    className="fw-semi-bold text-inherit"
                                  >
                                    <h6 className="mb-0">
                                      Salted Instant Popcorn{" "}
                                    </h6>
                                  </Link>
                                  <span>
                                    <small className="text-muted">500 g</small>
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    #13566
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  July 9, 2023
                                </td>
                                <td className="align-middle border-top-0">2</td>
                                <td className="align-middle border-top-0">
                                  <span className="badge bg-danger">
                                    Cancel
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  $6.00
                                </td>
                                <td className="text-muted align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    <i className="feather-icon icon-eye" />
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td className="align-middle border-top-0 w-0">
                                  <Link to="#">
                                    {" "}
                                    <img
                                      src={productimg6}
                                      alt="Ecommerce"
                                      className="icon-shape icon-xl"
                                    />
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link
                                    to="#"
                                    className="fw-semi-bold text-inherit"
                                  >
                                    <h6 className="mb-0">
                                      Blueberry Greek Yogurt{" "}
                                    </h6>
                                  </Link>
                                  <span>
                                    <small className="text-muted">500 g</small>
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    #12094
                                  </Link>
                                </td>
                                <td className="align-middle border-top-0">
                                  Oct 03, 2023
                                </td>
                                <td className="align-middle border-top-0">4</td>
                                <td className="align-middle border-top-0">
                                  <span className="badge bg-success">
                                    Completed
                                  </span>
                                </td>
                                <td className="align-middle border-top-0">
                                  $18.00
                                </td>
                                <td className="text-muted align-middle border-top-0">
                                  <Link to="#" className="text-inherit">
                                    <i className="feather-icon icon-eye" />
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
        </AccountLayout>
      )}
    </>
  );
};

export default MyAccountOrder;