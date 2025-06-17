import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#Pricing', label: 'Pricing' },
    {href: '#Services' ,label: 'Services'},
    { href: '#testimonials', label: 'Testimonials' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xs z-50 border-b border-pink-100 shadow-sm">
      <div className="flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-3 md:h-15 h-16">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-5 h-5 bg-gray-400 rounded-full opacity-75 hover:opacity-100 transition-opacity" />
          <div className="w-5 h-5 bg-violet-600 rounded-full -ml-2 hover:opacity-75 transition-opacity" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX className="h-6 w-6 shadow-xl" /> : <HiMenu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-base 
              font-medium relative 
                ${activeLink === link.href ? 'text-violet-600 ' : 'text-gray-600 hover:text-violet-600'}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#newsletter"
          className="hidden md:block bg-violet-600 text-white px-6 py-2.5 rounded-lg hover:bg-violet-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-violet-100 shadow-lg"
        >
          Get in touch
        </a>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium py-2 ${
                  activeLink === link.href
                    ? 'text-violet-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#newsletter"
              className="block w-full text-center bg-violet-600 text-white px-6 py-2.5 rounded-lg hover:bg-violet-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
