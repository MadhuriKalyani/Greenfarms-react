import React from 'react'
import "./Componenets/ImageSlider.css"
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate();
  return (
    <div>
<div className="footer-section">
        <div className="footer-background-section">
          
          <div className="footer-content-section">
            <div className="footer-content-inner-section">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="links-outer-section">
                      <div className="quickLinks">
                        <h1>Quick Links</h1>
                      </div>
                      <ul className="links">
                        <li onClick={() => navigate('/')}>Home</li>
                        {/* <li onClick={() => navigate('/ProductsDetails')}>Our Products</li> */}
                        {/* <li onClick={() => navigate('/shop')}>Shop</li> */}
                        {/* <li onClick={() => navigate('/about')}>About Us</li> */}
                        <li onClick={() => navigate('/myorders')}>Order</li>
                        <li onClick={() => navigate('/faq')}>FAQ</li>
                        <li onClick={() => navigate('/Contact')}>Contact Us</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="social-media-outer-section">
                      <div className="quickLinks">
                        <h1>Social Media</h1>
                      </div>
                      <div class="icons-section d-flex align-items-center gap-4 py-4">
                        <div class="facebook">
                          <i class="fa-brands fa-facebook"></i>
                        </div>
                        <div class="insta">
                          <i class="fa-brands fa-instagram"></i>
                        </div>
                        <div class="twitter">
                          <i class="fa-brands fa-twitter"></i>
                        </div>
                        <div class="youtube">
                          <i class="fa-brands fa-youtube"></i>
                        </div>
                      </div>
                      <div className="social-content-section">
                        <p>Copy &commat; 2022 Green Harverst Co.Ltd.PVT.Ltd</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="info-outer-section">
                      <div className="quickLinks">
                        <h1>For More Info</h1>
                      </div>
                      <div class="contact-content-section">
                        <div class="mail-section d-flex align-items-center gap-4">
                          <i class="fa-solid fa-envelope"></i>
                          <p>green@gmail.com</p>
                        </div>
                        <div class="number-section d-flex align-items-center gap-4">
                          <i class="fa-solid fa-phone"></i>
                          <p>123-456-7890</p>
                        </div>
                        <div class="address-section d-flex align-items-center gap-4">
                          <i class="fa-solid fa-location-dot"></i>
                          <p>
                            121 Greenfarm Loop N, Green City, GC 12345
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Footer