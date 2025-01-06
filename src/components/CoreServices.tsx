import React from 'react';
import { GraduationCap, Stethoscope, Users } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

interface ServiceCard {
  icon: React.FC;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Educational institutions and vocational training programs for community development.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Accessible healthcare services and medical support for those in need.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Elderly care, rehabilitation centers, and family counseling services.",
  }
];

const ServiceCard: React.FC<ServiceCard> = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
      <Icon className="w-12 h-12 text-blue-700 mb-4" />
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-blue-700 font-semibold inline-flex items-center hover:text-blue-800">
        Learn More
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  );
};

const CoreServices: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Core Services"
          subtitle="Comprehensive support for community development and empowerment"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreServices;