import React from 'react';
import { Image } from 'lucide-react';

const JourneySection: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
            
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed text-lg">
                Nepal Ram Gram Foundation was established with a clear vision to address 
                the pressing needs of the Kohalpur community. Our journey began with a 
                focus on providing essential healthcare and education services.
              </p>
              
              <p className="leading-relaxed text-lg">
                Over the years, we have expanded our services to include elderly care, 
                vocational training, and comprehensive community development programs. 
                Our growth has been guided by the needs of our community and our 
                commitment to sustainable development.
              </p>
              
              <p className="leading-relaxed text-lg">
                Today, we continue to evolve and adapt our programs to meet the changing 
                needs of our community while staying true to our core mission of 
                empowerment and positive change.
              </p>
            </div>
          </div>
          
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
              alt="Children smiling"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;