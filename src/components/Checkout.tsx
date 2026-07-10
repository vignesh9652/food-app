import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../contextApi/CartContext";
import {
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaMoneyBillWave,
  FaQrcode,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";
import QRCode from "react-qr-code";
import "./Checkout.css";
import { sendOrderEmail } from "../services/EmailService";
import { OrderContext } from "../contextApi/OrderContext";
import Swal from "sweetalert2";


function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Safely extract from location.state with a fallback to prevent crashes on page reload
  const {
    grandTotal = 0,
    discount = 0,
    deliveryCharge = 0,
    finalAmount = 0,
    couponPercent = 0,
  } = location.state || {};

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const { addOrder } = useContext(OrderContext);

  const getCurrentLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position.coords.latitude, position.coords.longitude);
    },
    () => {
      alert("Unable to get location.");
    }
  );
};

  const placeOrder = async () => {
    if (!name.trim() || !mobile.trim() || !email.trim() || !address.trim()) {
      alert("Please fill all delivery details.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!paymentMode) {
      alert("Please select a payment method.");
      return;
    }

    Swal.fire({
  icon: "success",
  title: "✅ Order Placed!",
  text: `Your order has been placed successfully.\nOrder ID: ${12345}`,

  showConfirmButton: true,
  confirmButtonText: "Track Order",
  confirmButtonColor: "#2563eb",

  showCancelButton: true,
  cancelButtonText: "Close/Cancel",
  cancelButtonColor: "#ef4444",

  timer: 10000,
  timerProgressBar: true,
}).then((result) => {
  // If user clicks "Track Order"
  if (result.isConfirmed) {
    navigate("/orders");
  }

  // If timer completes automatically
  if (result.dismiss === Swal.DismissReason.timer) {
    navigate("/orders");
  }
});

    const order = {
      order_id: Math.floor(Math.random() * 100000),
      name: name,
      email: email, // Recipient email
	  
      orders: cart.map((item) => ({
        name: item.name,
        units: item.quantity,
        price: item.price,
        image_url: item.imageurl,
      })),

      cost: {
        shipping: 100,
        tax: 100,
        coupon: discount,
        total: finalAmount,
      },
    };
    
    await sendOrderEmail(order);

    const orderData = {
      orderNumber: Math.floor(Math.random() * 100000),

      customerName: name,

      mobile: mobile,

      email: email,

      address: address,

      paymentMode: paymentMode,

      grandTotal: grandTotal,

      discount: discount,

      finalAmount: finalAmount,

      orderDate: new Date().toLocaleString(),

      status: "PLACED",

      items: [...cart],
    };

    
    addOrder(orderData);

    clearCart();

    navigate("/orders");
  };

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
                <label>Email Address</label>
                <div className="input-with-icon">
                  <FaEnvelope className="field-icon" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email Address"
                    required
                  />
                </div>
              </div>

               <button
    type="button"
    onClick={getCurrentLocation}
    className="location-btn"
  >
    <FaMapMarkerAlt />
    Use Current Location
  </button>

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
                <div className="qr-section">
                  <h4>Scan UPI QR to Pay ₹{finalAmount.toFixed(2)}</h4>
                  <div className="qr-code-wrapper">
                    <QRCode
                      value={`upi://pay?pa=9652270638@kotakbank&pn=BaluFreshMart&am=${finalAmount.toFixed(2)}&cu=INR`}
                      size={180}
                    />
                  </div>
                  <p className="upi-id-text">UPI ID: 9652270638@kotakbank</p>
                </div>
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

              <div className="summary-item">
                <span>Delivery Charge</span>
                <strong>
                  {deliveryCharge === 0 ? (
                    <span className="free-delivery">FREE</span>
                  ) : (
                    `₹${deliveryCharge.toFixed(2)}`
                  )}
                </strong>
              </div>

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
