import { useContext, useState } from "react";
import { OrderContext } from "../contextApi/OrderContext";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaShoppingBag,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCreditCard,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import "./Order.css";

function Orders() {
  const { orders } = useContext(OrderContext);

  const [expandedOrder, setExpandedOrder] = useState<number | null>(null);

  const toggleOrder = (orderNumber: number) => {
    setExpandedOrder((prev) =>
      prev === orderNumber ? null : orderNumber
    );
  };

  if (orders.length === 0) {
    return (
      <div className="no-orders">
        <h1>No Orders Found 📦</h1>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <h1 className="orders-title">📦 My Orders</h1>

      <div className="orders-container">
        {orders.map((order) => (
          <div key={order.orderNumber} className="order-card">
            {/* Header */}

            <div
              className="order-header"
              onClick={() => toggleOrder(order.orderNumber)}
            >
              <div>
                <h2>Order #{order.orderNumber}</h2>

                <p className="order-date">
                  <FaCalendarAlt />
                  {order.orderDate}
                </p>
              </div>

              <div className="header-right">
                <div className="status-box">
                  <FaCheckCircle />
                  {order.status}
                </div>

                {expandedOrder === order.orderNumber ? (
                  <FaChevronUp size={22} />
                ) : (
                  <FaChevronDown size={22} />
                )}
              </div>
            </div>

            {/* Expandable Body */}

            {expandedOrder === order.orderNumber && (
              <div className="order-content">

                {/* Products */}

                <div>

                  <h3 className="products-title">
                    <FaShoppingBag />
                    Ordered Products
                  </h3>

                  {order.items.map((item) => (
                    <div key={item.id} className="product-card">

                      <img
                        src={item.imageurl}
                        alt={item.description}
                      />

                      <div className="product-info">
                        <h4>{item.description}</h4>

                        <p>Quantity : {item.quantity}</p>
                      </div>

                      <div className="product-price">
                        ₹{item.price}
                      </div>

                    </div>
                  ))}

                </div>

                {/* Order Details */}

                <div className="order-details">

                  <h3 className="details-title">
                    Order Details
                  </h3>

                  <div className="detail-row">
                    <FaUser />
                    <span>{order.customerName}</span>
                  </div>

                  <div className="detail-row">
                    <FaPhone />
                    <span>{order.mobile}</span>
                  </div>

                  <div className="detail-row">
                    <FaMapMarkerAlt />
                    <span>{order.address}</span>
                  </div>

                  <div className="detail-row">
                    <FaCreditCard />
                    <span>{order.paymentMode}</span>
                  </div>

                  <div className="summary">

                    <div className="summary-row">
                      <span>Grand Total</span>
                      <strong>₹{order.grandTotal}</strong>
                    </div>

                    <div className="summary-row discount">
                      <span>Discount</span>
                      <strong>- ₹{order.discount}</strong>
                    </div>

                    <div className="summary-row payable">
                      <span>
                        <FaMoneyBillWave />
                        &nbsp; Payable
                      </span>

                      <strong>
                        ₹{order.finalAmount}
                      </strong>
                    </div>

                  </div>

                </div>

              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;