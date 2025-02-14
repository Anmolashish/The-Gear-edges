"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuickQueryFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What types of gears does steelmans manufacture?",
      answer:
        "steelmans manufactures a wide variety of gears, including spur gears, helical gears, bevel gears, planetary gears, worm gears, and custom-designed gears. We provide solutions for high-performance applications across various industries.",
    },
    {
      question: "Is steelmans an ISO-certified manufacturer?",
      answer:
        "Yes, steelmans is ISO-certified. Our processes adhere to strict international standards, ensuring that every gear meets the highest quality and precision benchmarks.",
    },
    {
      question:
        "Can steelmans manufacture custom gears for specific applications?",
      answer:
        "Absolutely! We work with clients to create tailored gear solutions that meet unique requirements—from special materials to custom tooth profiles.",
    },
    {
      question: "How do you ensure the quality of your gears?",
      answer:
        "We combine advanced technology, rigorous testing, and strict quality control in every step of our manufacturing process to ensure superior performance.",
    },
    {
      question: "Do you offer gear repair or reconditioning services?",
      answer:
        "Yes, we provide repair and reconditioning services. If your gears show signs of wear, our team can evaluate and restore them effectively.",
    },
  ];

  return (
    <div className="quick-query-faq">
      <div className="container">
        {/* FAQ Section */}
        <div className="form-container">
          <h1 className="section-title">Quick Query</h1>
          <form className="query-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Contact:</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your contact no."
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Fax:</label>
              <input
                type="text"
                id="name"
                placeholder="Enter you fax number here"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" placeholder="Enter your query"></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
        <div className="faq-container">
          <h1 className="section-title">FAQs</h1>
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="question-text">{faq.question}</span>
                <span className="icon">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Quick Query Form */}
      </div>
    </div>
  );
}
