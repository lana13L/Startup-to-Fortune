const FeaturesSection = () => {
  const features = [
    {
      icon: "🔍",
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like"
    },
    {
      icon: "⚙️",
      title: "Work out the details",
      description: "Communication protocols apart from engagement models"
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing"
    }
  ];

  return (
    <section id='about' className="max-w-7xl mx-auto px-4 py-4 md:mt-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          How can we help your business?
        </h2>
        <p className="text-gray-600">
          When you resell besnik, you build trust and increase
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col shadow-xl  transition-all duration-300 items-center p-6">
            <div
              className="w-24 h-24 shadow-xl  rounded-full mb-6 flex items-center justify-center"
              style={{
                backgroundColor:
                  index === 0 ? '#F1EFFD' :
                  index === 1 ? '#FFE7E7' :
                  '#FFF3E4'
              }}
            >
              <div className="text-3xl">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-2xl font-medium mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 relative">
        <button className="bg-violet-600 shadow-xl  text-white cursor-pointer px-8 py-3 rounded-xl font-medium hover:bg-violet-700 transition-colors relative z-10">
          Become a Partner
        </button>
        <div className="absolute inset-0 z-0 w-full h-full rounded-full  blur-xl top-0 left-0"></div>
      </div>
    </section>
  );
};

export default FeaturesSection;