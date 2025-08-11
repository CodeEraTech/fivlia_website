import React, { useEffect, useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import ScrollToTop from "../ScrollToTop";
import AccountLayout from "../Accounts/AccountLayout";
import { get } from "../../apis/apiClient";
import { ENDPOINTS } from "../../apis/endpoints";
import OrderDetailsModal from './OrderDetailsModal';

const MyAccountOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loaderStatus, setLoaderStatus] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await get(ENDPOINTS.GET_ORDERS, {
          authRequired: true,
        });
        setOrders(response.data?.orders || []);
      } catch (error) {
        //console.error("Error fetching orders:", error);
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
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center py-4">
                        No orders found.
                      </td>
                    </tr>
                  ) : (
                    orders.map((order) => (
                      <tr key={order._id}>
                        <td>#{order.orderId}</td>
                        <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                        <td>{order.items.length}</td>
                        <td>{renderOrderStatusBadge(order.orderStatus)}</td>
                        <td>₹{order.totalPrice?.toFixed(2)}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => openModal(order)}
                          >
                            <i className="fas fa-eye me-1" />
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        <OrderDetailsModal
          order={selectedOrder}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        </AccountLayout>
      )}
    </>
  );
};

export default MyAccountOrder;