import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '/filia-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Αρχική', to: 'hero' },
    { name: 'Σχετικά', to: 'about' },
    { name: 'Υπηρεσίες', to: 'services' },
    { name: 'Επικοινωνία', to: 'contact' }
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300 backdrop-blur-sm py-3 sm:py-4">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Filia Dimitriadi" className="h-10 sm:h-12 w-auto" />
            <div>
              <h1 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">Φιλία Δημητριάδη</h1>
              <p className="text-xs sm:text-sm text-teal-600">Παιδοενδοκρινολόγος</p>
            </div>
          </div>

          <button
            className="relative z-[60] w-10 h-10 flex items-center justify-center sm:w-8 sm:h-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`absolute h-0.5 w-6 bg-gray-900 transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 bg-white' : '-translate-y-2'}`}></span>
            <span className={`absolute h-0.5 w-6 bg-gray-900 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute h-0.5 w-6 bg-gray-900 transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 bg-white' : 'translate-y-2'}`}></span>
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 z-[55] transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} bg-teal-600 text-white`} style={{ width: '100vw', height: '100vh' }}>
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center space-x-2 sm:space-x-3 z-[60]">
          <img src={logo} alt="Logo" className="h-10 sm:h-12 w-auto filter invert brightness-0" />
          <div>
            <h1 className="text-base sm:text-lg font-semibold text-white">Φιλία Δημητριάδη</h1>
            <p className="text-xs sm:text-sm text-white">Παιδοενδοκρινολόγος</p>
          </div>
        </div>

        <nav className="flex flex-col items-center justify-center h-full px-4 text-center">
          <h2 className={`text-2xl sm:text-3xl font-light mb-4 sm:mb-6 ${isMenuOpen ? 'animate-fadeUp' : ''}`} style={{ animationDelay: `100ms` }}>
            Καλώς Ήρθατε
          </h2>

          <p className={`text-sm sm:text-md max-w-sm sm:max-w-md mb-8 sm:mb-10 text-white/90 ${isMenuOpen ? 'animate-fadeUp' : ''}`} style={{ animationDelay: `200ms` }}>
            Προσφέρουμε υψηλής ποιότητας φροντίδα υγείας για εσάς και την οικογένειά σας.
          </p>

          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={`text-xl sm:text-2xl font-light hover:text-white/80 cursor-pointer transition-colors py-2 ${isMenuOpen ? 'animate-fadeUp' : ''}`}
              onClick={() => setIsMenuOpen(false)}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {item.name}
            </Link>
          ))}

          <button
            className={`mt-8 sm:mt-10 bg-white text-teal-600 font-semibold px-6 sm:px-8 py-3 hover:bg-white/90 transition-colors ${isMenuOpen ? 'animate-fadeUp' : ''}`}
            style={{ animationDelay: `${(navItems.length + 3) * 100}ms` }}
          >
            Κλείστε Ραντεβού
          </button>

          <div className={`mt-8 text-xs sm:text-sm text-white/80 ${isMenuOpen ? 'animate-fadeUp' : ''}`} style={{ animationDelay: `${(navItems.length + 4) * 100}ms` }}>
            <p>Τηλέφωνο: 210 1234567</p>
            <p>Email: info@filia-health.gr</p>
          </div>

          <div className={`mt-6 flex space-x-4 ${isMenuOpen ? 'animate-fadeUp' : ''}`} style={{ animationDelay: `${(navItems.length + 5) * 100}ms` }}>
            <a href="#" className="hover:text-white"><i className="fab fa-facebook text-lg sm:text-xl"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-instagram text-lg sm:text-xl"></i></a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;