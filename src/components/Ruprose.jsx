import { Aperture , CircleSlash2 } from 'lucide-react';
const PurposeSection = () => {
    const features = [
      {
        icon: <Aperture  className='w-9 h-9 animate-splin text-violet-700'/>,
        title: "Driven by Excellence",
        description:
          "We bring together passionate developers, designers, and strategists to create meaningful digital solutions",
      },
      {
        icon: <CircleSlash2 className='w-9 h-9 animate-splin text-violet-600' />,
        title: "Aligned with Your Vision",
        description:
          "We integrate with your goals, tools, and culture to deliver work that feels like a natural extension of your team",
      },
    ];
  
    return (
      <section  className="w-full bg-violet-50 md:py-16 py-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 grid-cols-1 gap-8">
          {/* Left Column */}
          <div>
            <div className="text-sm text-purple-600 font-medium mb-2">
              ACHIEVE MORE
            </div>
            <h2 className="text-3xl md:w-4/5 md:text-4xl font-bold text-gray-800">
              Great results are born from true collaboration.
            </h2>
          </div>
  
          {/* Right Column */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PurposeSection;
  