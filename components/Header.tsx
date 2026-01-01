
import React, { useState } from 'react';

const Logo: React.FC = () => (
  <img 
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAABACAAAAADWz2EEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIpSURBVHhe7dxBTsNQFAVQXyEjuAEn4BAcgdNAOAGnwAnYJTiCoyQeIW2J2lrbx/4z02e9L2fX0zOzaaVb2/Ttdz29fPz+8n79/r33/fXo+X0x+mO87r7eD5+M7fXz+vU4D+oTjW/k/lH578S/E/1P5H+T+Uflvxb8T+Q/kflH5b8W/E/kP5H5R+W/FvxP5D+R+Uflvxb8T+Q/kflH5b8W/E/kP5H5R+W/FvxP5D+R+Uflvxb8T+Q/kflH5b8W/E/kP5H5R+W/FvxP5D+R+Uflvxb8T+Q/kflH5b8W/E/kP5H5R+W/FvxP5D+R+Uflvxb8T+Q/kflH5b8W/E/kP5H5R+W/FvxP5D+R+Uflvxb8T+Q/kflH5b8W/E/kP5H5R+W/FvxP5D+R+Uflvxb8T+Q/kflH5b8W/E/kP5H5R+W/FvxP5D+R+Uflvxb8T+Q/kflH5b8W/E/kP5H5R+W/FvxP5D+R+Uflvxb8T+Q/kflH5b8W/E/kP5H5R+W/FvxP5D+R+Uflvxb8T+Q/kflH5b8W/E/kP5H5R+W/FvxP5D+R+Uflvxb8T+Q/kflH5b8W/E/kP5H5R+W/FvxP5D+R+Uflvxb8T+Q/kflH5b8W/E/kP5H5R+W/FvxP5D+R+Uflvxb8T+Q/kflH5b8W/E/kP5H5R+W/FvxP5D+R+Uflvxb8T+Q/kflH5b8W/E/kP5H5R+W/FvxP5D+R+Uflvxb8T+Q/kflH5b8W/E/kP5H5R+W/FvxP5D+R+Uflvxr/B/T6+5f72u+l+Xn6/fr9e+/769Hz+2L0x3j19f4A9fX+GzF5xSgAAAAASUVORK5CYII=" 
    alt="énergie Fitness Logo" 
    className="h-10 w-auto" 
  />
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'Nosotros' },
    { href: '#facilities', label: 'Instalaciones' },
    { href: '#schedule', label: 'Horario' },
    { href: '#pricing', label: 'Cuotas' },
    { href: '#testimonials', label: 'Socios' },
    { href: '#locations', label: 'Ubicaciones' },
  ];

  return (
    <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-brand-green/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
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
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <nav className="flex flex-col items-center space-y-4 px-6 pt-2 pb-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-brand-green transition-colors duration-300 font-medium text-lg">
                {link.label}
              </a>
            ))}
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="bg-brand-green text-black font-bold py-3 px-8 rounded-full hover:bg-white transition-all duration-300 w-full text-center mt-4">
                Inscríbete
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
