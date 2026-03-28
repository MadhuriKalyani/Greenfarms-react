
import "../Componenets/ContactUs.css";
import { useState } from "react";
function ContactUs() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) {
      alert("Please fill in all fields");
      return;
    }

    
    const existingMessages = JSON.parse(localStorage.getItem("messages")) || [];

    
    const newMessage = {
      name,
      message,
      date: new Date().toLocaleString(),
    };

    
    existingMessages.push(newMessage);
    localStorage.setItem("messages", JSON.stringify(existingMessages));

   
    setShowPopup(true);

    
    setName("");
    setMessage("");
  };

  return (
    <div>
      <div className="contact-main-outer-section">
        <div className="contact-inner-section">
          <div className="contact-main-section">
            <div className="contact-side-sections">
              <div className="contact-first-side-section">
                <h4>We'd Love to Hear From You!!</h4>
                <p>
                  Whether you have a question, suggestion, or just want to say
                  hello, feel free to reach out! Fill in the contact form or use
                  the details below, and we'll respond quickly.
                </p>
                <p>
                  <span>Email:</span> greenfarms@gmail.com
                </p>
                <p>
                  <span>Phone:</span> +91 98765 43210
                </p>
                <p>
                  <span>Address:</span> 22 Green Park, Hyderabad, Telangana
                </p>
              </div>

              <div className="contact-form-section">
                <div className="contact-form-inner-section">
                  <form onSubmit={handleSubmit}>
                    <div className="conatct-in-section">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="contact-text-section">
                      <textarea
                        placeholder="Leave a Comment Here"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="contact-btn">
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Message Sent!</h2>
            <p>Thank you! Your message has been sent successfully.</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUs;