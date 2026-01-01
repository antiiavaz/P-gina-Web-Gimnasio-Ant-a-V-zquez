
import React from 'react';
import type { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    name: 'Ana García',
    role: 'Socia desde 2022',
    quote: '¡El mejor gimnasio de la ciudad! Los entrenadores son increíbles y el ambiente es súper motivador. He conseguido resultados que nunca imaginé.',
    avatar: 'https://picsum.photos/seed/avatar1/100/100',
  },
  {
    name: 'Carlos Martínez',
    role: 'Socio Fundador',
    quote: 'Las instalaciones son de primera. Siempre limpias y con máquinas modernas. La variedad de clases es un plus que me encanta.',
    avatar: 'https://picsum.photos/seed/avatar2/100/100',
  },
  {
    name: 'Lucía Fernández',
    role: 'Socia Premium',
    quote: 'Gracias a mi entrenador personal en énergie Fitness, he recuperado mi forma física después de años. ¡Totalmente recomendado!',
    avatar: 'https://picsum.photos/seed/avatar3/100/100',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Lo que dicen <span className="text-brand-green">nuestros socios</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
            La satisfacción de nuestra comunidad es nuestro mayor logro.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 flex flex-col">
              <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 border-2 border-brand-green" />
                <div>
                  <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
                  <p className="text-brand-green">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
