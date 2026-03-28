import React from "react";
import "./Checkout.css";

function MyOrders() {
  const allOrders =
    JSON.parse(localStorage.getItem("allOrders")) || [];

  if (allOrders.length === 0) return <h2>No Orders Yet</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Orders</h2>
<div className="order-box">
{allOrders.map((order, index) => (
        <div
          key={index}
          style={{
            border: "4px solid  #395d26;",
            marginBottom: "20px",
            padding: "15px",
            width: "800px",
            maxWidth: "700px",
          }}
        >
          <h3>Order {index + 1}</h3>
          <p><b>Date:</b> {order.date}</p>
          {order.orders.map((item, i) => (
            <div key={i} style={{ marginBottom: "10px" }}>
              <img src={item.img} alt={item.name} width="300" height="200" />
              <p>{item.name}</p>
              <p>Qty: {item.qty || item.quantity}</p>
              <p>Price: ₹{item.price}</p>
            </div>
          ))}

          
          <h4>Delivery Address</h4>
          <p>{order.address.name}</p>
          <p>{order.address.address}</p>
          <p>{order.address.city} - {order.address.pincode}</p>
          <p>{order.address.phone}</p>
        </div>
      ))}
</div>
      
    </div>
  );
}

export default MyOrders;