import React from 'react';

const locations = [
  {
    name: 'énergie Centro',
    address: 'Calle Gran Vía, 42, 28013 Madrid',
    phone: '+34 912 345 678',
    coords: { top: '52%', left: '48%' }
  },
  {
    name: 'énergie Salamanca',
    address: 'Calle de Goya, 88, 28009 Madrid',
    phone: '+34 913 456 789',
    coords: { top: '48%', left: '68%' }
  },
  {
    name: 'énergie Norte',
    address: 'Avenida de Monforte de Lemos, 36, 28029 Madrid',
    phone: '+34 914 567 890',
    coords: { top: '15%', left: '35%' }
  },
];

const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-brand-green" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-brand-green" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>;
const MapPin: React.FC<{ top: string; left: string; }> = ({ top, left }) => (
    <div className="absolute transform -translate-x-1/2 -translate-y-full" style={{ top, left }}>
        <span className="absolute inline-flex h-4 w-4 rounded-full bg-brand-green opacity-75 animate-ping"></span>
        <svg className="relative h-6 w-6 text-brand-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
    </div>
);


const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Nuestras <span className="text-brand-green">Ubicaciones</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
            Encuentra tu gimnasio énergie Fitness más cercano. Siempre hay uno esperándote.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid md:grid-cols-1 gap-8">
            {locations.map((loc, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-2xl font-bold text-brand-green mb-3">{loc.name}</h3>
                    <div className="flex items-start mb-2">
                        <LocationIcon />
                        <p className="text-gray-300">{loc.address}</p>
                    </div>
                    <div className="flex items-center">
                        <PhoneIcon />
                        <p className="text-gray-300">{loc.phone}</p>
                    </div>
                </div>
            ))}
            </div>
            <div className="relative h-96 lg:h-full w-full rounded-lg overflow-hidden shadow-2xl shadow-brand-green/10 border-2 border-brand-green/50">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194348.139810967!2d-3.844342928994781!3d40.43795433501768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e0!3m2!1sen!2ses"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de ubicaciones en Madrid"
                    className="grayscale invert-[90%] hue-rotate-[80deg]"
                ></iframe>
                 {locations.map(loc => <MapPin key={loc.name} top={loc.coords.top} left={loc.coords.left} />)}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;