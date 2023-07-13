import React, { useState } from 'react';
import './faq.css';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What types of appliances do you sell?',
      answer:
      'We offer a wide range of appliances, including refrigerators, dishwashers, washing machines, dryers, ovens, stoves, microwaves, air conditioners, and more.'
    },
    {
      question: 'Can I purchase parts and accessories for appliances?',
      answer:
      'Yes, we stock a variety of parts and accessories for different appliances. If we do not have a specific part in stock, we can often order it for you.'
    },
    {
      question: 'Can I return or exchange an appliance?',
      answer:
      'Our return and exchange policy may vary depending on the appliance and the specific circumstances. We recommend reviewing our return policy or contacting our customer service for detailed information.' 
    },
    {
      question: 'Do you offer warranties on your appliances?',
      answer:
      'Yes, we provide warranties on our appliances. The duration and coverage of the warranty may vary depending on the manufacturer and the specific appliance. Please inquire about the warranty details for the appliance you are interested in.'
        },
        {
          question: 'Are your appliances brand new?',
          answer:
          'Yes, all our appliances are brand new, unless otherwise specified. We also sell used or refurbished appliances for rent.'
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
