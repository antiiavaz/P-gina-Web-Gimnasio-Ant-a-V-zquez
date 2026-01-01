
import React from 'react';

const Footer: React.FC = () => {
    const socialLinks = [
        { name: 'Facebook', icon: <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg> },
        { name: 'Twitter', icon: <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg> },
        { name: 'Instagram', icon: <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg> }
    ];

  return (
    <footer id="contact" className="bg-black text-gray-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">énergie Fitness</h3>
            <p>Where you belong...</p>
            <p className="mt-2">Transforma tu energía, transforma tu vida.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contacto</h3>
            <p>Email: <a href="mailto:info@energiefitness.com" className="hover:text-brand-green">info@energiefitness.com</a></p>
            <p>Teléfono: +34 900 123 456</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Síguenos</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map(link => (
                  <a key={link.name} href="#" className="text-gray-400 hover:text-brand-green transition-colors duration-300">
                      {link.icon}
                  </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} énergie Fitness. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
