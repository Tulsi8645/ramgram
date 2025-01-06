import ramBahadur from "../assets/RamBahadur.jpg"; // Adjust the path if needed

const About = () => {
  return (
    <div className="py-16 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 py-6 gap-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          <div className="bg-blue-400 px-4 py-14 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Who we are?</h2>
            <div className="space-y-6">
              <p className="text-white">
                Our father,
                <span className="font-bold text-yellow-400">
                  {" "}
                  Ram Bahadur Shahi
                </span>
                , was a man of wisdom, compassion, and empathy. He lived by
                simple yet powerful principles: to never wish harm upon anyone,
                to believe in equality among people to always extend a hand to
                those in need.
              </p>
              <p className="text-white">
                His life was a testament to kindness, integrity, and a deep
                commitment to the welfare of others. We, his family, established
                this organization to continue his legacy and uphold the values
                he lived by.
              </p>
              <p className="text-white">
                Nepal Gram Ram Foundation (NGRF) is dedicated to advocating for
                the rights of marginalized groups, including the blind,
                disabled, women, and economically disadvantaged individuals in
                Nepal. Our mission extends to providing education and healthcare
                to orphaned, disabled, and underserved children in remote areas,
                creating opportunities for a brighter future.
              </p>
              <p className="text-white">
                We collaborate with organizations to address climate change and
                promote environmental sustainability through awareness and
                actionable initiatives. Additionally, we prioritize women's
                social, economic, and health development, while actively
                campaigning against violence and discrimination. Through
                agricultural and dairy projects, we aim to create livelihood
                opportunities and foster rural development, improving local
                economies and empowering communities.
              </p>
            </div>
          </div>
          <div className="relative h-[500px] lg:h-[700px]">
            <img
              src={ramBahadur}
              alt="Ram Bahadur Shahi"
              className="absolute inset-0 w-full h-full object-cover  rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
