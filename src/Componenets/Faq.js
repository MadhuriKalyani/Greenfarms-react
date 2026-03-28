import React, { useState } from "react";
import "./faq.css"; 

const faqsData = [
  {
    question: "How can I place an order?",
    answer:
      "Select the products you want, add them to your cart, fill in your delivery address, choose a payment method, and click 'Place Order'.",
  },
  {
    question: "What payment methods are available?",
    answer: "You can pay via Cash on Delivery, Card Payment, or UPI.",
  },
  {
    question: "Can I track my order?",
    answer: "Yes, you can view your order status in the 'My Orders' section.",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Orders can only be canceled before they are processed. Contact support for assistance.",
  },
];

function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ padding: "20px" }}>
        <div className="faq-section">
<h2>Frequently Asked Questions</h2>
        </div>
      
      <div className="faq-container">
        {faqsData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer" style={{ marginTop: "5px" }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;