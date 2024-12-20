import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-primary-blue text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary-orange">About Us</h2>
        <p className="mt-4">
          Sikhism is a religion founded in the Punjab region of India in the 15th century. 
          The Mombasa Sikh Temple has been a spiritual home for Sikhs in Mombasa since the early 1900s, 
          where the community gathers for worship, events, and outreach programs.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
