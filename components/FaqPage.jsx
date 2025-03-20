"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What does the gear edges manufactures",
      answer:
        "Gear Edges manufactures a wide variety of gears, including Pinion and Rack, Pulleys, Sprockets, Bushes and more. We specialize in providing solutions for high-performance applications, with gears tailored to meet the unique requirements of industries. ",
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
        "Gear Edges uses a variety of high-quality materials for gear manufacturing, including carbon steels, alloy steels, stainless steels, brass, and bronze. The material choice depends on the specific application, required strength, wear resistance, and environmental conditions. Our engineering team can help determine the best material for your gear needs. ",
    },
    {
      question:
        " Can you manufacture gears for high-performance or extreme conditions?",
      answer:
        "Yes, Gear Edge specializes in designing and manufacturing high-performance gears for extreme conditions. Whether you need gears for high-torque, high-speed, or high-temperature environments, we have the expertise and technology to create gears that can withstand demanding conditions and continue to perform efficiently over time. ",
    },
    {
      question: "What are gears and why are they important? ",
      answer:
        "Gears are toothed mechanical components used to transmit power and motion between rotating shafts. They are essential in countless machines, from cars and watches to industrial equipment, enabling speed and torque adjustments.  ",
    },
    {
      question: " What is gear lubrication and why is it important? ",
      answer:
        "Gear lubrication reduces friction and wear between gear teeth, preventing damage and extending gear life. Different lubricants are used depending on the application and operating conditions. ",
    },
    {
      question: "What are your quality control and inspection procedures? ",
      answer:
        "We are ISO 9001 certified and employ rigorous quality control procedures throughout the manufacturing process, including final inspection using advanced measuring equipment.  ",
    },
    {
      question: " Do you offer custom gear design and engineering services? ",
      answer:
        "Yes, our team of experienced engineers can assist with custom gear design, optimization, and engineering support.  ",
    },
    {
      question: "Do you offer gear consulting services?  ",
      answer:
        "Yes, our experienced engineers provide expert consulting services on gear selection, application, troubleshooting, and any gear-related challenges you may face. ",
    },
    {
      question:
        "Do you offer complete gear assemblies or just individual gears ",
      answer:
        "We offer both individual gears and complete gear assemblies, depending on your needs. ",
    },
  ];

  return (
    <div
      className="quick-query-faq2"
      style={{ backgroundColor: " rgb(1, 1, 83)" }}
    >
      <div className="container" style={{ backgroundColor: " rgb(1, 1, 83)" }}>
        {/* FAQ Section */}

        <div
          className="faq-container"
          style={{ backgroundColor: " rgb(1, 1, 83)" }}
        >
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
