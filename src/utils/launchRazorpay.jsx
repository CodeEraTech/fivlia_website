import { post } from '../apis/apiClient';
import { ENDPOINTS } from '../apis/endpoints';

const loadRazorpayScript = () => {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => reject("Failed to load Razorpay SDK");
    document.body.appendChild(script);
  });
};

const launchRazorpay = async ({ tempOrderId, rzOrderId, amount, onSuccess, onFailure, razorpayKey }) => {
  if (!tempOrderId || !amount || !rzOrderId) {
    alert("Invalid payment data. Cannot proceed to Razorpay.");
    return;
  }

  if (!razorpayKey) {
    alert("Razorpay key not configured. Please contact support.");
    return;
  }

  const isLoaded = await loadRazorpayScript();
  if (!isLoaded) {
    alert("Razorpay SDK failed to load. Please check your internet connection.");
    return;
  }

  const options = {
    key: razorpayKey,
    amount: amount,
    currency: "INR",
    order_id: rzOrderId,
    name: "Fivlia",
    description: "Order Payment",
    handler: async function (response) {
      try {
        const verifyPayload = {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          tempOrderId: tempOrderId,
          paymentStatus: true,
          transactionId: response.razorpay_order_id,
        };
        const verifyRes = await post(ENDPOINTS.VERIFY_PAYMENT, verifyPayload, { authRequired: true });
        if (verifyRes.data?.status === true && verifyRes.data?.order.paymentStatus === "Successful") {
          onSuccess?.(verifyRes.data);
        } else {
          alert("Payment verification failed. Please contact support.");
          onFailure?.();
        }
      } catch (err) {
        // console.error("Payment verification error:", err);
        alert("Something went wrong during payment verification.");
        onFailure?.();
      }
    },
    modal: {
      ondismiss: function () {
        onFailure?.();
      }
    },
    // prefill: {
    //   name: "Customer",
    //   email: "customer@example.com",
    //   contact: "9999999999"
    // },
    theme: {
      color: "#3399cc"
    }
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};

export default launchRazorpay;