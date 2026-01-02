import React from 'react';
import type { Activity } from '../types';

const activitiesData: Activity[] = [
    {
        name: 'Spinning',
        description: 'Clases de ciclismo indoor de alta intensidad al ritmo de la música para mejorar tu resistencia cardiovascular.',
        imageUrl: 'https://images.pexels.com/photos/13896068/pexels-photo-13896068.jpeg',
    },
    {
        name: 'Yoga',
        description: 'Encuentra el equilibrio entre cuerpo y mente con nuestras clases de Yoga, aptas para todos los niveles.',
        imageUrl: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        name: 'HIIT',
        description: 'Entrenamiento interválico de alta intensidad para quemar calorías y mejorar tu condición física en tiempo récord.',
        imageUrl: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        name: 'CrossFit',
        description: 'Desafía tus límites con nuestro programa de CrossFit, combinando levantamiento de pesas, cardio y gimnasia.',
        imageUrl: 'https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        name: 'Zumba',
        description: '¡Ponte en forma bailando! Únete a la fiesta de Zumba y quema calorías sin darte cuenta.',
        imageUrl: 'https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        name: 'Pilates',
        description: 'Fortalece tu core, mejora tu postura y gana flexibilidad con nuestras clases de Pilates en suelo y con máquinas.',
        imageUrl: 'https://images.pexels.com/photos/868483/pexels-photo-868483.jpeg',
    },
    {
        name: 'Aquagym y Natación',
        description: 'Clases de aquagym de bajo impacto perfectas para tonificar y natación libre para mejorar tu técnica y resistencia.',
        imageUrl: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    }
];

const Activities: React.FC = () => {
    return (
        <section id="activities" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white">Nuestras <span className="text-brand-green">Actividades</span></h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
                        Descubre la variedad de clases que tenemos para llevar tu entrenamiento al siguiente nivel.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activitiesData.map((activity) => (
                         <div key={activity.name} className="group relative overflow-hidden rounded-lg shadow-lg">
                            <img src={activity.imageUrl} alt={activity.name} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-75 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                                <h3 className="text-3xl font-bold text-white mb-2">{activity.name}</h3>
                                <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-xs">
                                    {activity.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Activities;