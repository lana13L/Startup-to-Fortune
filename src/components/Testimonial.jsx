import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useRef, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Robin Ayala Doe",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 2,
    name: "John De marli",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 3,
    name: "Rowhan Smith",
    text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    text: "The customer service has been exceptional. They went above and beyond to help me solve my problems.",
  },
  {
    id: 5,
    name: "Michael Chen",
    text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive.",
  },
  {
    id: 6,
    name: "Emma Wilson",
    text: "What impressed me most was how quickly they responded to my requests. The team is professional and knowledgeable.",
  },
];

const TestimonialsSection = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiper = (swiper) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    swiper.on('slideChange', () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    });
  };

  return (
    <section id="testimonials" className="md:py-14 py-6 px-4 max-w-7xl mx-auto">
      <div className="text-center md:mb-12 mb-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What our happy client say
        </h2>
        <p className="text-gray-600">
          Things that make it the best place to start trading
        </p>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          onSwiper={handleSwiper}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials-swiper md:mb-5"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="h-full md:py-12 py-4"
            >
              <div className="text-center cosmic-Shadow  mx-4 bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                <div className="flex justify-center mb-2 text-violet-600">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <h3 className="font-semibold text-xl mb-3">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            className={`swiper-button-prev-custom cosmic-button transition-all duration-300 ${
              isBeginning ? 'bg-violet-300 pointer-events-none' : 'opacity-100'
            }`}
          >
            <BsChevronLeft className="w-6 h-6" />
          </button>
          <button
            className={`swiper-button-next-custom cosmic-button transition-all duration-300  ${
              isEnd ? 'bg-violet-300 pointer-events-none' : 'opacity-100'
            }`}
          >
            <BsChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

