import ramBahadur from "../assets/RamBahadur.jpg"; // Adjust the path if needed
import "../About.css"; // Import a CSS file for the shake animation

const About = () => {
  return (
    <div className="py-16 bg-white" id="about">
      <div className="max-w-7xl bg-gray-100 rounded-xl mx-auto px-4 py-6 gap-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="px-4 py-14 rounded-3xl shadow-3xl hover:shadow-2xl hover:animate-shake transition-shadow">
            <h2 className="text-3xl text-blue-700 font-bold mb-6">
              Who we are?
            </h2>
            <div className="space-y-6">
              <p className="text-lg">
                Our father,
                <span className="font-bold text-yellow-600">
                  {" "}
                  Ram Bahadur Shahi
                </span>
                , was a man of wisdom, compassion, and empathy. He lived by
                simple yet powerful principles: to never wish harm upon anyone,
                to believe in equality among people, and to always extend a hand
                to those in need.
              </p>
              <p className="text-lg">
                His life was a testament to kindness, integrity, and a deep
                commitment to the welfare of others. We, his family, established
                this organization to continue his legacy and uphold the values
                he lived by.
              </p>
            </div>
          </div>
          <div className="relative h-[300px] lg:h-[600px] shadow-xl hover:shadow-2xl transition-shadow">
            <img
              src={ramBahadur}
              alt="Ram Bahadur Shahi"
              className="inset-0 w-full h-full rounded-lg shadow-xl transition-shadow"
              style={{
                animation: "bounce-up 6s infinite",
              }}
            />
          </div>
        </div>
      </div>

      <style>
        {`
      @keyframes bounce-up {
        0%, 100% { transform: translateY(20px); opacity: 0.8; }
        50% { transform: translateY(0); opacity: 1; }
      }
    `}
      </style>
    </div>
  );
};

export default About;
