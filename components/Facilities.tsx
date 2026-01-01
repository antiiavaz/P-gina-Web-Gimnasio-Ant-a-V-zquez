
import React from 'react';
import type { Facility } from '../types';

const facilitiesData: Facility[] = [
  {
    name: 'Zona de Cardio',
    description: 'Equipada con las últimas cintas de correr, elípticas y bicicletas estáticas.',
    imageUrl: 'https://picsum.photos/seed/cardio/600/400',
  },
  {
    name: 'Sala de Musculación',
    description: 'Amplia selección de pesas libres y máquinas de fuerza para todos los niveles.',
    imageUrl: 'https://picsum.photos/seed/weights/600/400',
  },
  {
    name: 'Estudio de Clases Grupales',
    description: 'Espacio dedicado para Yoga, Zumba, HIIT y más, con sistema de sonido inmersivo.',
    imageUrl: 'https://picsum.photos/seed/studio/600/400',
  },
  {
    name: 'Área de Entrenamiento Funcional',
    description: 'Jaulas, cuerdas, kettlebells y todo lo necesario para un entrenamiento completo.',
    imageUrl: 'https://picsum.photos/seed/functional/600/400',
  },
  {
    name: 'Piscina y Sauna',
    description: 'Relájate después de tu entrenamiento en nuestra piscina climatizada y sauna.',
    imageUrl: 'https://picsum.photos/seed/pool/600/400',
  },
   {
    name: 'Sala de Spinning',
    description: 'Vive una experiencia de ciclismo indoor única con nuestras clases de alta energía.',
    imageUrl: 'https://picsum.photos/seed/spinning/600/400',
  },
];

const Facilities: React.FC = () => {
  return (
    <section id="facilities" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Nuestras <span className="text-brand-green">Instalaciones</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
            Explora nuestros espacios de primera clase diseñados para tu éxito.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesData.map((facility, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img src={facility.imageUrl} alt={facility.name} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{facility.name}</h3>
                <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
