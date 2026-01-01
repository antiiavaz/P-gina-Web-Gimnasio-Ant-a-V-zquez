
import React from 'react';

const locations = [
  {
    name: 'énergie Centro',
    address: 'Calle Gran Vía, 42, 28013 Madrid',
    phone: '+34 912 345 678',
  },
  {
    name: 'énergie Salamanca',
    address: 'Calle de Goya, 88, 28009 Madrid',
    phone: '+34 913 456 789',
  },
  {
    name: 'énergie Norte',
    address: 'Avenida de Monforte de Lemos, 36, 28029 Madrid',
    phone: '+34 914 567 890',
  },
];

const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-brand-green" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-brand-green" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>;


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
            <div className="h-96 lg:h-full w-full rounded-lg overflow-hidden shadow-2xl shadow-brand-green/10 border-2 border-brand-green/50">
                <img src="https://picsum.photos/seed/map/1200/800" alt="Map of gym locations" className="w-full h-full object-cover" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
