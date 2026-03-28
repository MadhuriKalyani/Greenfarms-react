import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../Componenets/Details.css";
import { useNavigate } from "react-router-dom";

function ProductsDetails() {
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  const increaseQty = () => {
    setQty(qty + 1);
  };

  const decreaseQty = () => {
    setQty(Math.max(1, qty - 1));
  };
 const navigate = useNavigate();

const handleBuyNow = () => {
  const orderItem = {
    ...product,
    quantity: qty,
    totalPrice: totalPrice,
  };

  localStorage.setItem("orderData", JSON.stringify(orderItem));
  navigate("/order");
};

  const products = JSON.parse(localStorage.getItem("productsData")) || [];
  const product = products.find((p) => p.id === Number(id));
  if (!product) return <h2>Product Not Found</h2>;
  const totalPrice = product.price * qty;
  return (
    <div>
      <div className="product-details">
        <div className="container">
          <div className="products-main-section d-flex gap-2">
            <div className="img-section">
              <img src={product.img} alt={product.name} />
              <div className="tag-section-details">
                <h6>{product.unit}</h6>
              </div>
            </div>

            <div className="content-section">
              <h3>Product: {product.name}</h3>
              <p>
                <span>Description:</span> {product.description}
              </p>
              <h3>
                <span>Price:</span> {product.price}
              </h3>
              <div className="qty-kg">
                <div className="qty-counter">
                  <button onClick={decreaseQty}>-</button>
                  <span>{qty}</span>
                  <button onClick={increaseQty}>+</button>
                </div>
                <div className="total-price">
                  <h3>Total Price: ₹{totalPrice}</h3>
                </div>
              </div>
              <div className="cart-btn-in-details">
                <button onClick={handleBuyNow}>BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetails;
