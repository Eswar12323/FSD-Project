import React, { useState } from 'react';
import './faq.css';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What types of Grocery do you sell?',
      answer:
      'We offer a wide range of Grocery, including daal, rice, Egg, Horlics, Boost, vegies, micro, and more.'
    },
    {
      question: 'Can I purchase single item?',
      answer:
      'Yes, we can deliver it for you.'
    },
    {
      question: 'Can I return or exchange an grocery?',
      answer:
      'Our return and exchange policy may vary depending on the grocerys. We recommend reviewing our return policy or contacting our customer service for detailed information.' 
    },
    {
      question: 'Do you offer any grocery?',
      answer:
      'Yes, we provide offers on grocery.'
        },
        {
          question: 'Are your grocery products are brand new?',
          answer:
          'Yes, we deliver only fresh products.'
            },
    // Add more FAQ items as needed
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-page">
      <br></br><br></br><br></br><br></br>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
        >
          <div
            className="faq-question"
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
            <span className="arrow">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
