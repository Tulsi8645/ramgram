import React from 'react';
import DonationHeader from './DonationHeader';
import DonationForm from './DonationForm';
import { DonationFormData } from '../../types/donation';

const DonationSection: React.FC = () => {

  return (
    <div className="py-16 bg-blue-900/40" id="donate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DonationHeader
          title="Make a Difference Today"
          subtitle="Your support helps us continue our mission of empowering communities and creating lasting positive change in Nepal."
        />
        <DonationForm />
      </div>
    </div>
  );
};

export default DonationSection;