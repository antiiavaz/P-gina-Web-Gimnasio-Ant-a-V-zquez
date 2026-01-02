import React from 'react';
import type { ScheduleClass } from '../types';

const scheduleData: ScheduleClass[] = [
    { time: '07:00', monday: 'Spinning', tuesday: 'Yoga', wednesday: 'HIIT', thursday: 'Yoga', friday: 'Spinning', saturday: 'CrossFit' },
    { time: '09:00', monday: 'CrossFit', tuesday: 'Pilates', wednesday: 'Zumba', thursday: 'Pilates', friday: 'CrossFit', saturday: 'Yoga' },
    { time: '11:00', monday: 'Yoga', tuesday: 'Body Pump', wednesday: 'Spinning', thursday: 'Body Pump', friday: 'Yoga', saturday: 'HIIT' },
    { time: '17:00', monday: 'HIIT', tuesday: 'Zumba', wednesday: 'CrossFit', thursday: 'Zumba', friday: 'HIIT', saturday: 'Body Pump' },
    { time: '19:00', monday: 'Body Pump', tuesday: 'Spinning', wednesday: 'Yoga', thursday: 'Spinning', friday: 'Body Pump', saturday: 'Zumba' },
    { time: '20:00', monday: 'Zumba', tuesday: 'CrossFit', wednesday: 'Pilates', thursday: 'CrossFit', friday: 'Zumba', saturday: '-' },
];

const classIcons: { [key: string]: React.ReactNode } = {
    'Spinning': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" /><path d="M14.121 6.879a1 1 0 011.414 0l1.414 1.414a1 1 0 010 1.414l-8.485 8.485a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414l8.485-8.485z" /></svg>,
    'Yoga': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h.5a1.5 1.5 0 010 3H14a1 1 0 00-1 1v1.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H9a1 1 0 001-1v-.5zM5.5 9.5A1.5 1.5 0 017 8h.5a1 1 0 001-1V5.5a1.5 1.5 0 013 0v.5a2.5 2.5 0 01-2.5 2.5H9.5A2.5 2.5 0 017 5.5V5a1.5 1.5 0 01-3 0v.5A2.5 2.5 0 013.5 8H4a1 1 0 001 1v1.5z" /></svg>,
    'HIIT': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0zm11.586 0a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" /></svg>,
    'CrossFit': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4a1 1 0 01-.8 1.6H6a3 3 0 01-3-3V6zm3.99 1.75a.75.75 0 00-1.48 0V10a.75.75 0 001.48 0V7.75z" clipRule="evenodd" /></svg>,
    'Pilates': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" /><path fillRule="evenodd" d="M.5 10a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0zM10 2a8 8 0 100 16 8 8 0 000-16z" clipRule="evenodd" /></svg>,
    'Zumba': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2.5a.5.5 0 01.5.5v1.438a1.5 1.5 0 01-3 0V3a.5.5 0 01.5-.5zM10 15.5a.5.5 0 01.5.5v1.438a1.5 1.5 0 01-3 0V16a.5.5 0 01.5-.5zM15.5 10a.5.5 0 01.5.5v1.438a1.5 1.5 0 01-3 0V11a.5.5 0 01.5-.5zM4.5 10a.5.5 0 01.5.5v1.438a1.5 1.5 0 01-3 0V11a.5.5 0 01.5-.5z" /><path fillRule="evenodd" d="M10 4.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM10 3a7 7 0 100 14 7 7 0 000-14z" clipRule="evenodd" /></svg>,
    'Body Pump': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h12v1a1 1 0 01-1 1H6a1 1 0 01-1-1zm1-4a1 1 0 00-1 1v1h12v-1a1 1 0 00-1-1H6z" clipRule="evenodd" /></svg>,
};


const ClassCell: React.FC<{ name: string }> = ({ name }) => {
    if (name === '-') {
        return <div className="p-2 h-full min-h-[100px]"></div>;
    }
    return (
        <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-3 h-full min-h-[100px] flex flex-col justify-between text-center transition-all duration-300 hover:border-brand-green hover:bg-gray-800/60">
            <div className="flex items-center justify-center font-semibold text-white text-sm md:text-base">
                {classIcons[name]}
                <span>{name}</span>
            </div>
            <button className="mt-2 bg-brand-green/20 text-brand-green text-xs font-bold py-1 px-3 rounded-full hover:bg-brand-green hover:text-black transition-colors duration-300">
                Reservar
            </button>
        </div>
    );
};


const Schedule: React.FC = () => {
  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const dayKeys = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'] as const;

  return (
    <section id="schedule" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Nuestro <span className="text-brand-green">Horario</span> de Clases</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
            Encuentra la clase perfecta para ti. Tenemos opciones para todos los horarios y niveles de condición física.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-center border-collapse">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="p-4 w-24"></th>
                {days.map(day => <th key={day} className="p-4 text-white font-bold text-lg">{day}</th>)}
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((row) => (
                <tr key={row.time} className="border-b border-gray-800 last:border-b-0">
                  <td className="p-4 font-extrabold text-brand-green text-lg align-middle">{row.time}</td>
                  {dayKeys.map(dayKey => (
                      <td key={dayKey} className="p-2 align-middle">
                          <ClassCell name={row[dayKey]} />
                      </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Schedule;