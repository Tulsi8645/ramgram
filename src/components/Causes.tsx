import { Link } from "react-router-dom";

const causes = [
  {
    title: "Education and healthcare for deprived children",
    description:
      "Providing education and healthcare to orphaned, disabled, and underserved children in remote areas to create better opportunities for their future.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80",
  },
  {
    title: "Community engagement and Sustainable livelihood",
    description:
      "Creating livelihood opportunities through agricultural and dairy projects, and promoting rural development to improve local economies",
    image:
      "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&q=80",
  },
  {
    title: "Women empowerment and protection",
    description:
      "Supporting women's social, economic, and health development, and conducting campaigns against violence and discrimination.",
    image:
      "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&q=80",
  },
  {
    title: "Fighting drug abuse and violence",
    description:
      "Fighting drug abuse, violence, and conducting campaigns against drug addiction in youths.",
    image:
      "https://images.unsplash.com/photo-1513225298384-724d696c2562?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Causes = () => {
  return (
    <div className="py-16" id="causes">
      <div className="max-w-7xl hover:shadow-gray-300 hover:popup mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our <span className="text-blue-700">Causes</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="relative h-48">
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/30"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-700">
                  {cause.title}
                </h3>
                <p className="text-gray-600 mb-4">{cause.description}</p>
                <Link
                  to="/donate"
                  className="text-yellow-500 font-semibold hover:text-yellow-600 flex items-center"
                >
                  Support this cause
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Causes;
