
import React from 'react';
import type { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    title: 'Plan Básico',
    price: '29.99€',
    features: [
      'Acceso a zona de cardio',
      'Acceso a sala de musculación',
      'Acceso en horario valle',
      'Vestuarios con taquilla',
    ],
    isFeatured: false,
  },
  {
    title: 'Plan Plus',
    price: '49.99€',
    features: [
      'Todo lo del Plan Básico',
      'Acceso ilimitado 24/7',
      'Acceso a todas las clases grupales',
      'Acceso a piscina y sauna',
      '1 sesión de entrenador personal al mes',
    ],
    isFeatured: true,
  },
  {
    title: 'Plan Premium',
    price: '79.99€',
    features: [
      'Todo lo del Plan Plus',
      '4 sesiones de entrenador personal al mes',
      'Análisis corporal trimestral',
      'Invitado gratis los fines de semana',
      'Toalla y bebida isotónica',
    ],
    isFeatured: false,
  },
];

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-green mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => (
  <div className={`border rounded-lg p-8 flex flex-col ${plan.isFeatured ? 'border-brand-green bg-gray-900/50 scale-105' : 'border-gray-700 bg-gray-900'}`}>
    {plan.isFeatured && <span className="bg-brand-green text-black text-xs font-bold px-3 py-1 rounded-full absolute -top-4 self-center">MÁS POPULAR</span>}
    <h3 className="text-2xl font-bold text-center text-white">{plan.title}</h3>
    <p className="text-4xl font-extrabold text-center my-6 text-brand-green">{plan.price}<span className="text-lg text-gray-400">/mes</span></p>
    <ul className="space-y-4 mb-8 flex-grow">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckIcon />
          <span className="text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 font-bold rounded-full transition-colors duration-300 ${plan.isFeatured ? 'bg-brand-green text-black hover:bg-white' : 'bg-gray-700 text-white hover:bg-brand-green hover:text-black'}`}>
      Seleccionar Plan
    </button>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Nuestras <span className="text-brand-green">Cuotas</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
            Planes flexibles para adaptarse a tu estilo de vida. Sin matrícula, sin permanencia.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
