import React, { useState } from "react";
import logo from "./Images/2Logo.jpg";
import { useNavigate } from "react-router-dom";
import "./Componenets/ImageSlider.css";

function Header() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    setLogin(false);
    navigate("/imageSlider");
  };
  return (
    <div>
      <div className="header-section">
        <div className="header-outer-section">
          <div className="container">
            <div className="header-inner-section d-flex align-items-center justify-content-between">
              <div className="header-logo-section d-flex align-items-center gap-2">
                <div className="logo-img">
                  <img src={logo} alt="Logo"></img>
                </div>
                <div className="logo-heading">
                  <h2>Green Farms</h2>
                </div>
              </div>
              <div className="header-right-section">
                <ul
                  className="header-right-inner-section d-flex align-items-center justify-content-start gap-5"
                  style={{ margin: "0px" }}
                >
                  <li>
                    <h6 onClick={() => navigate("/")}>Home</h6>
                  </li>

                  <li>
                    <div className="veggies-menu">
                      <h6>Our Products</h6>
                      <div className="veggies-drop-down-menu">
                        <p onClick={() => navigate("/veggies")}>Veggies</p>
                        <p onClick={() => navigate("/fruits")}>Fruits</p>
                        <p onClick={() => navigate("/juices")}>Juices</p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <h6 onClick={() => navigate("/faq")}>FAQ</h6>
                  </li>
                  <li>
                    <h6 onClick={() => navigate("/myorders")}>My Orders</h6>
                  </li>
                  
                  <li>
                    <h6 onClick={() => navigate("/Contact")}>Contact Us </h6>
                  </li>
                </ul>
              </div>
              <div className="shopify">
                <ul className="shopify-inner-section d-flex align-items-center gap-5">
                  <li>
                    <i
                      class="fa-solid fa-circle-user"
                      onClick={() => setLogin(true)}
                    ></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-cart-shopping"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* LOGIN MODAL */}
      {login && (
        <div className="login-modal-main-section">
          <div className="login-outer-section">
            <div className="row">
              <div className="col-md-6">
                <div className="login-left-section">
                  <div className="login-left-inner-section">
                    <div className="login-text-section">
                      <h4>Hey There!!</h4>
                      <h5>Welcome to Green Farms</h5>
                      <p>Experience Freshness</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="login-right-section">
                  <div className="login-right-inner-section">
                    <input type="text" placeholder="Enter mobile number" />

                    <input type="password" placeholder="Enter password" />

                    <button className="login-btn" onClick={handleLogin}>
                      Login
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

export default Header;
