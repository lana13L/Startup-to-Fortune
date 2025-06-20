import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Heroimg from '../assets/hero.png'

const Hero = () => {
  const [email, setEmail] = useState('')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = (e) => {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    setStatusMessage('Please enter your email address.');
    return;
  }

  if (!emailRegex.test(email)) {
    setStatusMessage('Please enter a valid email address.');
    return;
  }

  const templateParams = {
    user_email: email,
  };

  emailjs
    .send('service_2po88dw', 'template_toayw2a', templateParams, 'aPqX4VKtufXs9NnRl')
    .then(
      (response) => {
        setStatusMessage('Thank you for subscribing!');
        setEmail(''); // clear input after success
      },
      (error) => {
        setStatusMessage('Oops, something went wrong. Please try again.');
        console.error('EmailJS Error:', error);
      }
    );
};

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row justify-between items-center animate-fade-in-delay-4 px-4 sm:px-6 lg:px-8 pt-21 pb-6 container mx-auto"
    >
      {/* Left Column */}
      <div className="w-full md:w-3/5 space-y-2">
        {/* Star badge */}
        <div className="flex cosmic-Shadow items-end gap-3 bg-gray-50 w-fit px-4 py-2 rounded-full cursor-pointer group">
          <span className="text-violet-600 group-hover:scale-140 transition-transform">★</span>
          <span className="text-sm font-medium text-gray-800 ">Jump start your growth</span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
          We boost the growth for{' '}
          <span className="text-violet-600 relative inline-block">
            Startup to Fortune 500
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-200/60"></span>
          </span>{' '}
          Companies
          <span className="inline-block ml-2 animate-pulse text-gray-800">⏰</span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl max-w-xl">
          Get the most accurate leads, sales people training and conversions, tools and more — all within the same one billing.
        </p>

        {/* Email form */}
        <form onSubmit={handleSubmit} className="flex md:gap-3 gap-1 md:max-w-md" noValidate>
          <input
            type="email"
            placeholder="Email"
            className="flex-1 md:px-6 px-5 py-3 shadow-sm border border-gray-100 rounded-xl focus:outline-none focus:border-violet-600 focus:ring-2 focus:ring-blue-100 transition-all text-gray-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="cosmic-button"
          >
            →
          </button>
        </form>

        {statusMessage && (
          <p className="mt-2 text-sm text-gray-700">{statusMessage}</p>
        )}
      </div>

      {/* Right Column */}
      <div className="w-2/3 md:w-2/5 mt-6 md:mt-0 pl-0 md:pl-0">
        <div className="relative">
          <img
            src={Heroimg}
            alt="Team meeting"
            className="relative z-10 hover:scale-[1.03] transition-all duration-300 object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
