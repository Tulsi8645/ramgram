import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactInfo as ContactInfoType } from '../../types/contact';

const contactDetails: ContactInfoType[] = [
  {
    icon: MapPin,
    title: "Address",
    content: "Ward No. 11, Kohalpur Municipality, Kohalpur, Banke, Nepal"
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+977 1234567890"
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@nepalramgram.org"
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Sunday - Friday: 9:00 AM - 5:00 PM"
  }
];

const ContactInfoCard: React.FC<ContactInfoType> = ({ icon: Icon, title, content }) => (
  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
    <Icon className="w-6 h-6 text-blue-700 mt-1" />
    <div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-1">{content}</p>
    </div>
  </div>
);

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-4">
      {contactDetails.map((detail) => (
        <ContactInfoCard
          key={detail.title}
          icon={detail.icon}
          title={detail.title}
          content={detail.content}
        />
      ))}
    </div>
  );
};

export default ContactInfo;