import React from 'react';
import { Heart } from 'lucide-react';
import { DonationHeaderProps } from '../../types/donation';

const DonationHeader: React.FC<DonationHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center text-white mb-8">
      {/* <Heart className="w-16 h-16 mx-auto mb-6 text-white" /> */}
      <h2 className="text-5xl text-blue-700 font-bold mb-4">{title}</h2>
      <p className="max-w-2xl z-1 mx-auto text-lg">{subtitle}</p>
    </div>
  );
};

export default DonationHeader;