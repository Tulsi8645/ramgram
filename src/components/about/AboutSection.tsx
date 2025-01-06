import React from 'react';
import { Target, Users, Heart, Award } from 'lucide-react';
import AboutCard from './AboutCard';
import SectionTitle from '../common/SectionTitle';
import { AboutCard as AboutCardType } from '../../types/about';

const aboutCards: AboutCardType[] = [
  {
    icon: Target,
    title: "Mission",
    description: "To empower and uplift communities in Kohalpur through sustainable development initiatives in healthcare, education, and social services."
  },
  {
    icon: Users,
    title: "Vision",
    description: "Creating self-reliant communities where every individual has access to quality healthcare, education, and opportunities for growth."
  },
  {
    icon: Heart,
    title: "Values",
    description: "Compassion, integrity, and commitment to community development drive our every action and decision."
  },
  {
    icon: Award,
    title: "Impact",
    description: "Measurable, sustainable change through community-driven initiatives and partnerships."
  }
];

const AboutSection: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Nepal Ram Gram Foundation"
          subtitle="Established with a vision to transform lives in Kohalpur, we work tirelessly to create lasting positive change in our community."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {aboutCards.map((card, index) => (
            <AboutCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;