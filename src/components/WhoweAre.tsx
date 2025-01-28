import React, { useState } from "react";

const WhoWeAre: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="py-16 bg-white" id="about">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Who we are?
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-lg">
          Our father,
          <span className="font-bold text-gray-800"> Ram Bahadur Shahi</span>,
          was a man of wisdom, compassion, and empathy. He lived by simple yet
          powerful principles: to never wish harm upon anyone, to believe in
          equality among people, and to always extend a hand to those in need.
          {!expanded && (
            <span
              onClick={toggleExpand}
              className="text-blue-500 cursor-pointer ml-2"
            >
              See more...
            </span>
          )}
        </p>

        {/* Expanded Content */}
        {expanded && (
          <p className="text-gray-600 text-lg mt-4">
            His life was a testament to kindness, integrity, and a deep
            commitment to the welfare of others. We, his family, established
            this organization to continue his legacy and uphold the values he
            lived by.
            <br />
            Nepal Gram Ram Foundation (NGRF) is dedicated to advocating for the
            rights of marginalized groups, including the blind, disabled, women,
            and economically disadvantaged individuals in Nepal. Our mission
            extends to providing education and healthcare to orphaned, disabled,
            and underserved children in remote areas, creating opportunities for
            a brighter future.
            <span
              onClick={toggleExpand}
              className="text-blue-500 cursor-pointer ml-2"
            >
              Show less
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default WhoWeAre;
