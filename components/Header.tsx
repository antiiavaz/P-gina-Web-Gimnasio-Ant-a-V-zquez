import React, { useState } from 'react';

const Logo: React.FC = () => (
    <svg width="150" height="52" viewBox="0 0 150 52" xmlns="http://www.w3.org/2000/svg" aria-label="énergie Fitness Logo" className="h-12 w-auto">
        {/* The word "ENERGIE" - Top line, centered */}
        <text 
            x="50%" 
            y="28" 
            fontFamily="Teko, sans-serif"
            fontWeight="700"
            fontSize="38"
            letterSpacing="1.5"
            fill="white"
            textAnchor="middle"
            style={{ textTransform: 'uppercase' }}
        >
            ENERGIE
        </text>

        {/* Dynamic accent, perfectly positioned above the first 'E' */}
        <path 
            d="M20 5 L28 0 L36 5" 
            stroke="#94D500" 
            strokeWidth="4" 
            fill="none" 
            strokeLinecap="round"
            strokeLinejoin="round"
        />

        {/* The word "FITNESS" - Bottom line, centered, slightly smaller */}
        <text 
            x="50%" 
            y="50" 
            fontFamily="Teko, sans-serif"
            fontWeight="700"
            fontSize="24"
            letterSpacing="1.5"
            fill="#94D500"
            textAnchor="middle"
            style={{ textTransform: 'uppercase' }}
        >
            FITNESS
        </text>
    </svg>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'Nosotros' },
    { href: '#facilities', label: 'Instalaciones' },
    { href: '#activities', label: 'Actividades' },
    { href: '#schedule', label: 'Horario' },
    { href: '#pricing', label: 'Cuotas' },
    { href: '#testimonials', label: 'Socios' },
    { href: '#locations', label: 'Ubicaciones' },
  ];

  return (
    <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-brand-green/10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#hero">
            <Logo />
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-brand-green transition-colors duration-300 font-medium">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
            <a href="#pricing" className="bg-brand-green text-black font-bold py-2 px-6 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105">
                Inscríbete
            </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none z-50">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black/80 absolute top-0 left-0 w-full pt-20">
          <nav className="flex flex-col items-center pt-2 pb-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-brand-green transition-colors duration-300 font-medium text-lg py-3 w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
             <a href="#pricing" 
                onClick={() => setIsMenuOpen(false)}
                className="bg-brand-green text-black font-bold py-3 px-8 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 mt-4">
                Inscríbete
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;