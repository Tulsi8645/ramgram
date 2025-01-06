import React from 'react';
import SectionTitle from '../common/SectionTitle';

const MapSection: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Find Us"
        />
        
        <div className="mt-12">
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14062.972137530405!2d81.67947037094878!3d28.196925591741287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399813afc53346b5%3A0x1ba5801c29adc82f!2sKohalpur%2C%20Nepal!5e0!3m2!1sen!2sus!4v1710835427451!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nepal Ram Gram Foundation Location"
              className="absolute inset-0"
            />
          </div>
          
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Getting Here</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">From Nepalgunj Airport</h4>
                <p className="text-gray-600">
                  Take the Ratna Highway towards Kohalpur. Our office is located in Ward No. 11, 
                  approximately 10 minutes from the main chowk.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Public Transportation</h4>
                <p className="text-gray-600">
                  Regular bus services run between Nepalgunj and Kohalpur. 
                  Get down at Kohalpur Bus Park and take a local taxi or rickshaw to Ward No. 11.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;