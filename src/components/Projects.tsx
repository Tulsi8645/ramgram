import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Education Initiative",
      description: "Building schools and providing quality education to underprivileged children.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80"
    },
    {
      title: "Healthcare Access",
      description: "Bringing medical facilities and healthcare services to remote villages.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80"
    },
    {
      title: "Community Development",
      description: "Empowering local communities through sustainable development projects.",
      image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="py-16 bg-gray-50" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          News <span className="text-blue-700">& Updates</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-700">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <button className="mt-4 text-yellow-500 font-semibold hover:text-yellow-600">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;