import React, { useEffect, useState } from "react";
import "../Componenets/Products.css";
import { useNavigate } from "react-router-dom";

function ProductsLayout({ title, products = [] }) {
  const [qty, setQty] = useState(products.map(() => 1));
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setQty(products.map(() => 1)); // Reset qty if products change
  }, [searchTerm, products]);

  const increaseQty = (index) => {
    setQty((prev) => prev.map((q, i) => (i === index ? q + 1 : q)));
  };

  const decreaseQty = (index) => {
    setQty((prev) =>
      prev.map((q, i) => (i === index ? Math.max(1, q - 1) : q))
    );
  };

  useEffect(() => {
    localStorage.setItem("productsData", JSON.stringify(products));
  }, [products]);

  const handleBuyNow = (item, index) => {
    const orderItem = {
      ...item,
      quantity: qty[index],
      totalPrice: item.price * qty[index],
    };

    localStorage.setItem("orderData", JSON.stringify(orderItem));
    navigate("/order");
  };

 
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const increaseCartQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseCartQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item
      )
    );
  };

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id);
      if (exist) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + quantity } : item
        );
      } else {
        return [...prevCart, { ...product, qty: quantity }];
      }
    });
    setShowCart(true);
  };

  const totalCartPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="products-main-section">
        <div className="products-main-inner-section">
          <div className="container">
            <div className="product-top-bar d-flex align-items-center justify-content-between">
              <div className="product-title">
                <h4>PRODUCTS</h4>
              </div>
              <div className="product-search-bar">
                <input
                  type="search"
                  id="bar"
                  placeholder="Search Here"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="product-line"></div>
          <div className="category-section">
            <div className="row all-sections">
              <div className="col-md-2">
                <div className="category-box">
                  <div className="category-section">
                    <div className="filter-item">
                      <input type="checkbox" />
                      <p>Leafy Veggies</p>
                    </div>
                    <div className="filter-item">
                      <input type="checkbox" />
                      <p>Root Veggies</p>
                    </div>
                    <div className="filter-item">
                      <input type="checkbox" />
                      <p>Gourds</p>
                    </div>
                    <div className="filter-item">
                      <input type="checkbox" />
                      <p>Seasonal Specials</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-9">
                <ul className="product-img d-flex align-items-center justify-content-start gap-5 flex-wrap">
                  {filteredProducts.map((item, index) => (
                    <li key={item.id}>
                      <div className="product-single-section">
                        <div className="img-tag-section">
                          <img
                            src={item.img}
                            alt={item.name}
                            onClick={() =>
                              navigate(`/ProductsDetails/${item.id}`)
                            }
                          />
                          <div className="tag-section">
                            <h6>{item.unit}</h6>
                          </div>
                        </div>

                        <h4>{item.name}</h4>
                        <div className="qty-kg">
                          <div className="qty-counter">
                            <button onClick={() => decreaseQty(index)}>-</button>
                            <span>{qty[index]}</span>
                            <button onClick={() => increaseQty(index)}>+</button>
                          </div>
                          <p className="kgs">{item.unit}</p>
                        </div>

                        <div className="cart-btn">
                          <button onClick={() => addToCart(item, qty[index])}>
                            ADD TO CART
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                  {filteredProducts.length === 0 && <p>No products found.</p>}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      {showCart && (
        <div className="cart-overlay" onClick={() => setShowCart(false)}>
          <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
            <h3>Your Cart</h3>
            <button className="close-btn" onClick={() => setShowCart(false)}>
              ×
            </button>
            <div className="cart-container">
              {cart.length === 0 ? (
                <p>No items added.</p>
              ) : (
                cart.map((item) => (
                  <div
                    className="cart-item d-flex justify-content-start align-items-center gap-4"
                    key={item.id}
                  >
                    <div className="cart-img">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="cart-content">
                      <p>{item.name}</p>
                      <div className="qty-counter">
                        <button onClick={() => decreaseCartQty(item.id)}>-</button>
                        <span>{item.qty}</span>
                        <button onClick={() => increaseCartQty(item.id)}>+</button>
                      </div>
                      <div className="cart-total-price">
                        <p>Total Price ₹ {item.price * item.qty}</p>
                      </div>
                    </div>
                    <div className="remove">
                      <i
                        className="fa-solid fa-trash"
                        onClick={() => removeFromCart(item.id)}
                      ></i>
                    </div>
                  </div>
                ))
              )}
              <div className="estimated-price-pay ">
                <div className="estimated-price">
                  <h4>Estimated Total: {totalCartPrice}</h4>
                </div>
                <div className="pay-last-section">
                  <div className="pay-section">
                    <button onClick={() => handleBuyNow(cart[0], 0)}>
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsLayout;