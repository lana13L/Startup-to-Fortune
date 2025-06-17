import meudies from '../assets/meundies.png';
import Site from '../assets/sitepoint.png';
import slak from '../assets/slack.png';
import Amazon from '../assets/amazon (1).png';

const CompanyLogo = () => {
  const logos = [meudies, Site, slak, Amazon];

  return (
    <div className="w-full overflow-hidden container gap-8 mx-auto md:py-20 py-1 flex sm:flex-row flex-col sm:items-center items-start ">
      <div className="w-[300px] shrink-0 text-gray-600 border-l-4 border-violet-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left px-8">
        Proud partner at <br /> Hubsport & Segment
      </div>
      <div className="flex whitespace-nowrap animate-marquee">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt="Company logo" className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100" />
        ))}
        {logos.map((logo, index) => (
          <img key={`dublicate-${index}`} src={logo} alt="Company logo" className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100" />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo;
