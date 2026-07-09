import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contextApi/CartContext";
import { coupons } from "../data/Coupons";
import { FiTag, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import "./Cart.css";

function Cart() {
  const navigate = useNavigate();
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const couponRef = useRef<HTMLInputElement>(null);
  const [couponPercent, setCouponPercent] = useState(0);
  const [message, setMessage] = useState("");
  const [appliedCode, setAppliedCode] = useState("");

  const applyCoupon = () => {
    const couponCode = couponRef.current?.value.trim() || "";

    if (!couponCode) {
      setCouponPercent(0);
      setAppliedCode("");
      setMessage("⚠️ Please enter a coupon code.");
      return;
    }

    const coupon = coupons.find(
      (c) => c.code.toUpperCase() === couponCode.toUpperCase()
    );

    if (coupon) {
      setCouponPercent(coupon.discount);
      setAppliedCode(coupon.code.toUpperCase());
      setMessage(`🎉 Coupon "${coupon.code}" applied successfully! (${coupon.discount}% OFF)`);
    } else {
      setCouponPercent(0);
      setAppliedCode("");
      setMessage("❌ Invalid Coupon Code");
    }
  };

  const removeCoupon = () => {
    setCouponPercent(0);
    setAppliedCode("");
    setMessage("");
    if (couponRef.current) {
      couponRef.current.value = "";
    }
  };

  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = (grandTotal * couponPercent) / 100;
  const deliveryCharge = grandTotal > 0 ? (grandTotal > 500 ? 0 : 30) : 0;
  const finalAmount = grandTotal - discount + deliveryCharge;

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <div>
            <h1>Shopping Cart</h1>
            <p>{cart.length} Item(s) in your cart</p>
          </div>

          {cart.length > 0 && (
            <button className="clear-cart-btn" onClick={clearCart}>
              Clear Cart
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty Cart"
            />
            <h2>Your Cart is Empty</h2>
            <p>Add some products to start shopping.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-card" key={item.id}>
                  <div className="cart-image">
                    <img src={item.imageurl} alt={item.name} />
                  </div>

                  <div className="cart-details">
                    <h2>{item.name}</h2>
                    <p className="price">₹{item.price}</p>

                    <div className="quantity-box">
                      <button onClick={() => decreaseQuantity(item.id)}>
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button onClick={() => increaseQuantity(item.id)}>
                        +
                      </button>
                    </div>
                  </div>

                  <div className="cart-right">
                    <h3>₹{item.price * item.quantity}</h3>

                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Coupon Section (Swiggy / Blinkit style) */}
            <div className="coupon-section">
              <div className="coupon-header">
                <FiTag className="coupon-tag-icon" />
                <h3>Apply Coupon Code</h3>
              </div>
              <div className="coupon-input-wrapper">
                <input
                  ref={couponRef}
                  type="text"
                  placeholder="Enter Coupon (e.g. SAVE20, NEW50)"
                  className="coupon-input"
                  disabled={appliedCode !== ""}
                />
                {appliedCode ? (
                  <button onClick={removeCoupon} className="coupon-remove-btn">
                    Remove
                  </button>
                ) : (
                  <button onClick={applyCoupon} className="coupon-apply-btn">
                    Apply
                  </button>
                )}
              </div>

              {message && (
                <div
                  className={`coupon-message ${
                    appliedCode ? "success-msg" : "error-msg"
                  }`}
                >
                  {appliedCode ? (
                    <FiCheckCircle className="msg-icon" />
                  ) : (
                    <FiAlertCircle className="msg-icon" />
                  )}
                  <span>{message}</span>
                </div>
              )}

              {/* Available Coupons list */}
              <div className="available-coupons">
                <span className="coupons-title">Available Offers:</span>
                <div className="coupon-chips">
                  {coupons.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        if (couponRef.current) {
                          couponRef.current.value = c.code;
                          applyCoupon();
                        }
                      }}
                      className={`coupon-chip ${
                        appliedCode === c.code ? "active-chip" : ""
                      }`}
                      disabled={appliedCode !== ""}
                    >
                      <strong>{c.code}</strong> (Get {c.discount}% OFF)
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing Summary Breakdown */}
            <div className="cart-summary">
              <div className="summary-breakdown">
                <div className="summary-row">
                  <span>Subtotal Amount</span>
                  <span>₹{grandTotal}</span>
                </div>
                {couponPercent > 0 && (
                  <div className="summary-row discount-row">
                    <span>Coupon Discount ({couponPercent}%)</span>
                    <span>− ₹{discount}</span>
                  </div>
                )}
                <div className="summary-row">
                  <span>Delivery Charges</span>
                  <span>
                    {deliveryCharge === 0 ? (
                      <strong className="free-delivery">FREE</strong>
                    ) : (
                      `₹${deliveryCharge}`
                    )}
                  </span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-row total-row">
                  <span>Total Amount Payable</span>
                  <h2>₹{finalAmount}</h2>
                </div>
              </div>

              <button
                className="checkout-btn"
                onClick={() =>
                  navigate("/checkout", {
                    state: {
                      grandTotal,
                      discount,
                      finalAmount,
                      couponPercent,
                    },
                  })
                }
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;