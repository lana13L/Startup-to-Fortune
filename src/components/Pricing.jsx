import { useState } from 'react';

const PricingSection = () => {
  const [productCount, setProductCount] = useState(1);

  // Calculate prices based on product count
  const starterPrice = Math.round(4000 * (productCount / 50));
  const businessPrice = Math.round(7500 * (productCount / 50));

  return (
    <section id='Pricing' className="md:py-20 py-10 px-4  ">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:mb-15 mb-10">
          {/* Starter Plan */}
          <div className="bg-violet-600 relative rounded-2xl  p-8  shadow-2xl ">
          <div className="absolute rounded-2xl  top-0 right-0 w-1/2 h-full bg-violet-700 clip-path-slant hidden md:block"></div>
            <h3 className="text-xl text-white mb-4">Starter</h3>
            <p className="text-3xl text-white  font-bold mb-6">${starterPrice}/mo</p>
          </div>

          {/* Business Plan */}
          <div className="bg-violet-600 rounded-2xl   relative p-8  shadow-2xl">
          <div className="absolute rounded-2xl  top-0 right-0 w-1/3 h-full bg-violet-700 clip-path-slant hidden md:block"></div>
            <h3 className="text-xl text-white mb-4">Business</h3>
            <p className="text-3xl text-white font-bold mb-6">${businessPrice}/mo</p>
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <p className="text-center text-gray-600 mb-6">
            {productCount} products
          </p>

          <div className="relative px-4">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-600">1</span>
               <input 
  type="range"
  min="1"
  max="50"
  value={productCount}
  onChange={(e) => setProductCount(parseInt(e.target.value))}
  className="slider flex-1 h-2 bg-violet-100 rounded-lg appearance-none cursor-pointer"
/>

              <span className="text-xs sm:text-sm text-gray-600">50</span>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-xl text-gray-600 mb-4">
              Ready to get started?
            </p>
            <button className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors cursor-pointer shadow-lg ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
