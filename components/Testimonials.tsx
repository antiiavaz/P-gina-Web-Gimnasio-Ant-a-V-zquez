
import React from 'react';
import type { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    name: 'Ana García',
    role: 'Socia desde 2022',
    quote: '¡El mejor gimnasio de la ciudad! Los entrenadores son increíbles y el ambiente es súper motivador. He conseguido resultados que nunca imaginé.',
    avatar: 'https://picsum.photos/seed/avatar1/100/100',
    rating: 5,
  },
  {
    name: 'Carlos Martínez',
    role: 'Socio Fundador',
    quote: 'Las instalaciones son de primera. Siempre limpias y con máquinas modernas. La variedad de clases es un plus que me encanta.',
    avatar: 'https://picsum.photos/seed/avatar2/100/100',
    rating: 5,
  },
  {
    name: 'Lucía Fernández',
    role: 'Socia Premium',
    quote: 'Gracias a mi entrenador personal en énergie Fitness, he recuperado mi forma física después de años. ¡Totalmente recomendado!',
    avatar: 'https://picsum.photos/seed/avatar3/100/100',
    rating: 4,
  },
];

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
    <svg className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
            <StarIcon key={i} filled={i < rating} />
        ))}
    </div>
);

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
              <StarRating rating={testimonial.rating} />
              <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center mt-auto">
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
