import React, { useEffect, useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";
import AccountLayout from "../Accounts/AccountLayout";
import { get, put } from "../../apis/apiClient";
import { ENDPOINTS } from "../../apis/endpoints";
import OrderDetailsModal from "./OrderDetailsModal";
import RatingModal from "./RatingModal";
import Swal from "sweetalert2";

const MyAccountOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loaderStatus, setLoaderStatus] = useState(true);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [ratingOrder, setRatingOrder] = useState(null);
  const [isRateModalOpen, setIsRateModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await get(ENDPOINTS.GET_ORDERS, {
          authRequired: true,
        });
        setOrders(response.data?.orders || []);
      } catch (error) {
        alert("Failed to load orders.");
      } finally {
        setLoaderStatus(false);
      }
    };

    fetchOrders();
  }, []);

  const openModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const openRateModal = (order) => {
    setRatingOrder(order);
    setIsRateModalOpen(true);
  };

  const handleSubmitRating = async (ratings) => {
    try {
      Swal.fire({
        title: "Submitting...",
        text: "Please wait while we submit your ratings.",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      await put(
        ENDPOINTS.SUBMIT_RATING,
        { ratingRequest: ratings },
        { authRequired: true }
      );

      Swal.fire({
        icon: "success",
        title: "Thank you!",
        text: "Your ratings have been submitted successfully.",
      });

      setIsRateModalOpen(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to submit ratings. Please try again.",
      });
    }
  };

  const renderOrderStatusBadge = (status) => {
    switch (status) {
      case "Pending":
        return <span className="badge bg-warning">Pending</span>;
      case "Cancelled":
        return <span className="badge bg-danger">Cancelled</span>;
      case "Completed":
        return <span className="badge bg-success">Completed</span>;
      default:
        return <span className="badge bg-secondary">{status}</span>;
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(orders.length / rowsPerPage);
  const paginatedOrders = orders.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };

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
            <style>{`
            .icon-btn {
                width: 32px;     
                height: 32px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 0;       
                border-radius: 6px;
              }
            `}</style>
            <h2 className="mb-6">Your Orders</h2>
            <div className="table-responsive border-0">
              <table className="table table-bordered table-hover">
                <thead className="table-light">
                  <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Items</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Payment Mode</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedOrders.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center py-4">
                        No orders found.
                      </td>
                    </tr>
                  ) : (
                    paginatedOrders.map((order) => (
                      <tr key={order.orderId}>
                        <td>#{order.orderId}</td>
                        <td>{formatDate(order.createdAt)}</td>
                        <td>{order.items.length}</td>
                        <td>{renderOrderStatusBadge(order.orderStatus)}</td>
                        <td>₹{order.totalPrice?.toFixed(2)}</td>
                        <td>
                          {order.cashOnDelivery
                            ? "Cash on Delivery (COD)"
                            : "Online"}
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-primary me-2 icon-btn"
                            onClick={() => openModal(order)}
                            title="Order Details"
                          >
                            <i className="fas fa-eye" />
                          </button>

                          {order.orderStatus === "Delivered" && (
                            <button
                              className="btn btn-sm btn-outline-success icon-btn"
                              onClick={() => openRateModal(order)}
                              title="Rate Now"
                            >
                              <i className="fas fa-star" />
                            </button>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <nav className="d-flex justify-content-center mt-4">
                <ul className="pagination">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage - 1)}
                    >
                      Previous
                    </button>
                  </li>
                  {[...Array(totalPages)].map((_, i) => (
                    <li
                      key={i}
                      className={`page-item ${
                        currentPage === i + 1 ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(i + 1)}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}
                  <li
                    className={`page-item ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage + 1)}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            )}
          </div>

          <OrderDetailsModal
            order={selectedOrder}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />

          <RatingModal
            order={ratingOrder}
            isOpen={isRateModalOpen}
            onClose={() => setIsRateModalOpen(false)}
            onSubmit={handleSubmitRating}
          />
        </AccountLayout>
      )}
    </>
  );
};

export default MyAccountOrder;
