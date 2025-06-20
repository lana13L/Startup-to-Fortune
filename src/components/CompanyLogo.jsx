import meudies from '../assets/meundies.png';
import Site from '../assets/sitepoint.png';
import slak from '../assets/slack.png';
import Amazon from '../assets/amazon (1).png';

const CompanyLogo = () => {
  const logos = [meudies, Site, slak, Amazon];

  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center items-start gap-8">
        <div className="w-[300px] shrink-0 text-gray-600 border-l-4 border-violet-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left px-8">
          Proud partner at <br /> Hubsport & Segment
        </div>

        <div className="relative overflow-hidden w-full">
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Company logo"
                className="mx-12 cursor-pointer h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;

