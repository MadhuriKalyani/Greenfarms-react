import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./order.css";

function OrderPage() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  let orders = JSON.parse(localStorage.getItem("orderData")) || [];
  if (!Array.isArray(orders)) orders = [orders];

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });
  const [upiId, setUpiId] = useState("");

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const grandTotal = orders.reduce(
    (total, item) => total + item.price * (item.qty || item.quantity || 1),
    0,
  );

  const handlePlaceOrder = () => {
    if (!paymentMethod) {
      alert("Please select payment method");
      return;
    }

    if (paymentMethod === "Card Payment") {
      if (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv) {
        alert("Please enter card details");
        return;
      }
    }

    if (paymentMethod === "UPI") {
      if (!upiId) {
        alert("Please enter UPI ID");
        return;
      }
    }

    const finalOrder = {
      orders,
      address,
      paymentMethod,
      date: new Date().toLocaleString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("allOrders")) || [];
    existingOrders.push(finalOrder);
    localStorage.setItem("allOrders", JSON.stringify(existingOrders));

    localStorage.removeItem("orderData");

    setShowPopup(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div className="order-main-section">
        <h2>Order Summary</h2>
        <div className="order-items-section">
          {orders.map((item, index) => (
            <div key={index} className="order-card">
              <div className="img-sec">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="tag-section-order">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.qty || item.quantity || 1}</p>
                <p>Total: ₹{item.price * (item.qty || item.quantity || 1)}</p>
              </div>
            </div>
          ))}
        </div>
        <h2>Grand Total: ₹{grandTotal}</h2>
      </div>

      <hr />

      <h2>Delivery Address</h2>
      <div className="addres-input">
        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <br />
        <br />
        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <br />
        <br />
        <input name="address" placeholder="Address" onChange={handleChange} />
        <br />
        <br />
        <input name="city" placeholder="City" onChange={handleChange} />
        <br />
        <br />
        <input name="pincode" placeholder="Pincode" onChange={handleChange} />
        <br />
        <br />
      </div>

      <h2>Select Payment Method</h2>
      <div className="payment-section">
        <label>
          <input
            type="radio"
            name="payment"
            value="Cash on Delivery"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Cash on Delivery
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="payment"
            value="Card Payment"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Card Payment
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="payment"
            value="UPI"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          UPI
        </label>
      </div>

      {paymentMethod === "Card Payment" && (
        <div className="card-section">
          <h3>Enter Card Details</h3>
          <input
            placeholder="Card Number"
            onChange={(e) =>
              setCardDetails({ ...cardDetails, number: e.target.value })
            }
          />
          <br />
          <br />
          <input
            placeholder="Expiry (MM/YY)"
            onChange={(e) =>
              setCardDetails({ ...cardDetails, expiry: e.target.value })
            }
          />
          <br />
          <br />
          <input
            placeholder="CVV"
            onChange={(e) =>
              setCardDetails({ ...cardDetails, cvv: e.target.value })
            }
          />
        </div>
      )}

      {paymentMethod === "UPI" && (
        <div className="upi-section">
          <h3>Enter UPI ID</h3>
          <input
            placeholder="example@upi"
            onChange={(e) => setUpiId(e.target.value)}
          />
        </div>
      )}

      <br />

      <div className="btn-sec">
        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>

      
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Order Placed Successfully!</h2>
            <p>
              {paymentMethod === "Cash on Delivery"
                ? "Your order is confirmed (COD)"
                : "Payment successful & order confirmed"}
            </p>
            <button
              onClick={() => {
                setShowPopup(false);
                navigate("/");
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderPage;
