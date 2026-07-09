import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../contextApi/CartContext";
import {
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaMoneyBillWave,
  FaQrcode,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";
import "./Checkout.css";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Safely extract from location.state with a fallback to prevent crashes on page reload
  const {
    grandTotal = 0,
    discount = 0,
    finalAmount = 0,
    couponPercent = 0,
  } = location.state || {};

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMode, setPaymentMode] = useState("");

  const placeOrder = () => {
    if (!name.trim() || !mobile.trim() || !address.trim()) {
      alert("Please fill all address details.");
      return;
    }
    if (!paymentMode) {
      alert("Please select a payment method.");
      return;
    }

    alert("Order Placed Successfully!");
    clearCart();
    navigate("/cart");
  };

  // If cart is empty and we accessed checkout, redirect back to cart
  if (cart.length === 0) {
    return (
      <div className="checkout-empty-state">
        <h2>Your Cart is Empty</h2>
        <p>Add items to your cart before proceeding to checkout.</p>
        <button onClick={() => navigate("/")} className="shop-now-btn">
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1 className="checkout-main-title">Checkout</h1>

      <div className="checkout-layout">
        {/* Left Side: Delivery and Payment Details */}
        <div className="checkout-details-section">
          {/* Delivery Address Card */}
          <div className="checkout-card">
            <h2 className="checkout-card-title">
              <FaMapMarkerAlt className="icon-map-marker" /> Delivery Address
            </h2>

            <div className="form-fields">
              <div className="form-group-checkout">
                <label>Customer Name</label>
                <div className="input-with-icon">
                  <FaUser className="field-icon" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name"
                    required
                  />
                </div>
              </div>

              <div className="form-group-checkout">
                <label>Mobile Number</label>
                <div className="input-with-icon">
                  <FaPhone className="field-icon" />
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter Mobile Number"
                    required
                  />
                </div>
              </div>

              <div className="form-group-checkout">
                <label>Delivery Address</label>
                <textarea
                  rows={4}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter full home address (Flat no, Street, Area, Landmark)"
                  required
                />
              </div>
            </div>
          </div>

          {/* Payment Method Card */}
          <div className="checkout-card">
            <h2 className="checkout-card-title">Payment Method</h2>

            <div className="payment-options">
              <label className={`payment-option ${paymentMode === "UPI" ? "selected-mode" : ""}`}>
                <input
                  type="radio"
                  value="UPI"
                  checked={paymentMode === "UPI"}
                  onChange={(e) => setPaymentMode(e.target.value)}
                />
                <FaQrcode className="icon-payment-upi" />
                <div className="payment-label-text">
                  <strong>UPI Payment</strong>
                  <span>Pay via PhonePe / GPay / Paytm</span>
                </div>
              </label>

              <label className={`payment-option ${paymentMode === "COD" ? "selected-mode" : ""}`}>
                <input
                  type="radio"
                  value="COD"
                  checked={paymentMode === "COD"}
                  onChange={(e) => setPaymentMode(e.target.value)}
                />
                <FaTruck className="icon-payment-cod" />
                <div className="payment-label-text">
                  <strong>Cash On Delivery</strong>
                  <span>Pay in cash upon delivery</span>
                </div>
              </label>
            </div>

            {/* Dynamic Payment Info Details */}
            {paymentMode === "UPI" && (
              <div className="payment-details-info upi-details-box">
                <img src="/images/qr.png" alt="Payment QR Code" className="qr-image" />
                <p>Scan the QR code using any UPI app to make payment.</p>
              </div>
            )}

            {paymentMode === "COD" && (
              <div className="payment-details-info cod-details-box">
                <p>💡 Cash will be collected by the delivery executive at your doorstep.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Sticky Order Summary */}
        <div className="checkout-summary-section">
          <div className="checkout-summary-card">
            <h2>Order Summary</h2>

            <div className="summary-list">
              <div className="summary-item">
                <span>Total Items</span>
                <strong>{cart.length}</strong>
              </div>

              <div className="summary-item">
                <span className="flex-item-icon">
                  <FaMoneyBillWave className="summary-bill-icon" /> Grand Total
                </span>
                <strong>₹{grandTotal.toFixed(2)}</strong>
              </div>

              {couponPercent > 0 && (
                <div className="summary-item discount-item">
                  <span>Coupon Discount ({couponPercent}%)</span>
                  <span>-₹{discount.toFixed(2)}</span>
                </div>
              )}

              <div className="summary-divider-line"></div>

              <div className="summary-item payable-item">
                <span>Payable Amount</span>
                <h3>₹{finalAmount.toFixed(2)}</h3>
              </div>
            </div>

            <button onClick={placeOrder} className="place-order-btn">
              <FaCheckCircle /> Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
