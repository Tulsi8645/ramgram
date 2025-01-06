import hamza from "../assets/team/hamza.jpg";
import gita from "../assets/team/gita.jpg";
import smarika from "../assets/team/smarika.jpg";
import manju from "../assets/team/manju.jpeg";
import kamala from "../assets/team/kamala.jpg";
import shristi from "../assets/team/shristi.jpeg";
import sagun from "../assets/team/sagun.jpg";



const TeamSection = () => {
  const teamMembers = [
    {
      image: hamza,
      role: "Advisor",
      name: "Hamza Wariyo",
    },
    {
      image: gita,
      role: "President",
      name: "Gita Shahi",
    },
    {
      image: smarika,
      role: "Vice President",
      name: "Smarika Shahi",
    },
  ];

  const foundingMembers = [
    {
      image: manju,
      name: "Manju kumari Shahi",
    },
    {
      image: kamala,
      name: "Kamala Shahi",
    },
    {
      image: shristi,
      name: "Shristi Shahi",
    },
    {
      image: sagun,
      name: "Sagun Shahi",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-14">Meet our team</h1>

      {/* Responsive Grid for Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="rounded-full w-60 h-60 sm:w-60 sm:h-60 lg:w-80 lg:h-80 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold text-center">{member.name}</h2>
            <p className="text-sm text-gray-600 text-center">{member.role}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-center mb-8">Founding members</h2>

      {/* Responsive Grid for Founding Members */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {foundingMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="rounded-full w-32 h-40 sm:w-40 sm:h-40 lg:w-60 lg:h-60 object-cover mb-4"
            />
            <h3 className="text-sm font-medium text-center">{member.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
