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
      question: "What does the gear edges manufactures",
      answer:
        "Gear Edges manufactures a wide variety of gears, including spur gears, helical gears, bevel gears, planetary gears, worm gears, and custom-designed gears. We specialize in providing solutions for high-performance applications, with gears tailored to meet the unique requirements of industries such as automotive, aerospace, industrial machinery, and more. ",
    },
    {
      question: "Is The gear edges an ISO-certified manufacturer?",
      answer:
        "Yes, The gear edges is ISO-certified. Our processes adhere to strict international standards, ensuring that every gear meets the highest quality and precision benchmarks.",
    },
    {
      question:
        "Can The gear edges manufacture custom gears for specific applications?",
      answer:
        "Absolutely! We work with clients to create tailored gear solutions that meet unique requirements—from special materials to custom tooth profiles.",
    },
    {
      question: "How do you ensure the quality of your gears?",
      answer:
        "We combine advanced technology, rigorous testing, and strict quality control in every step of our manufacturing process to ensure superior performance.",
    },
    {
      question: "Do you offer gear repair or reconditioning services? ",
      answer:
        "Yes, Gear Edges offers gear repair and reconditioning services. If your gears are showing signs of wear or damage, we can evaluate the condition and provide a cost-effective solution to restore them to full functionality. Our team uses advanced equipment to inspect and rework gears, ensuring that they perform like new.  ",
    },
    {
      question: "What materials do you use to manufacture gears? ",
      answer:
        "Gear Edges uses a variety of high-quality materials for gear manufacturing, including carbon steels, alloy steels, stainless steels, brass, bronze, and plastics. The material choice depends on the specific application, required strength, wear resistance, and environmental conditions. Our engineering team can help determine the best material for your gear needs. ",
    },
  ];

  return (
    <div className="quick-query-faq">
      <div className="container">
        {/* FAQ Section */}

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
