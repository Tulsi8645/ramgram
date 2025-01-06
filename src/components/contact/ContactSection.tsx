import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import SectionTitle from '../common/SectionTitle';

const ContactSection: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Contact Us"
          subtitle="We would love to hear from you."
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;