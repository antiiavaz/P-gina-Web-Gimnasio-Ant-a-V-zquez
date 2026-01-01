
import React from 'react';
import type { ScheduleClass } from '../types';

const scheduleData: ScheduleClass[] = [
    { time: '07:00', monday: 'Spinning', tuesday: 'Yoga Flow', wednesday: 'HIIT', thursday: 'Yoga Flow', friday: 'Spinning', saturday: 'CrossFit' },
    { time: '09:00', monday: 'CrossFit', tuesday: 'Pilates', wednesday: 'Zumba', thursday: 'Pilates', friday: 'CrossFit', saturday: 'Yoga Restore' },
    { time: '11:00', monday: 'Yoga Restore', tuesday: 'Body Pump', wednesday: 'Spinning', thursday: 'Body Pump', friday: 'Yoga Restore', saturday: 'HIIT' },
    { time: '17:00', monday: 'HIIT', tuesday: 'Zumba', wednesday: 'CrossFit', thursday: 'Zumba', friday: 'HIIT', saturday: 'Body Pump' },
    { time: '19:00', monday: 'Body Pump', tuesday: 'Spinning', wednesday: 'Yoga Flow', thursday: 'Spinning', friday: 'Body Pump', saturday: 'Zumba' },
    { time: '20:00', monday: 'Zumba', tuesday: 'CrossFit', wednesday: 'Pilates', thursday: 'CrossFit', friday: 'Zumba', saturday: '-' },
];

const classColors: { [key: string]: string } = {
    'Spinning': 'bg-red-500/20 text-red-300 border-red-500/50',
    'Yoga Flow': 'bg-blue-500/20 text-blue-300 border-blue-500/50',
    'HIIT': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50',
    'CrossFit': 'bg-purple-500/20 text-purple-300 border-purple-500/50',
    'Pilates': 'bg-green-500/20 text-green-300 border-green-500/50',
    'Zumba': 'bg-pink-500/20 text-pink-300 border-pink-500/50',
    'Yoga Restore': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50',
    'Body Pump': 'bg-orange-500/20 text-orange-300 border-orange-500/50',
    '-': 'bg-transparent',
};

const Schedule: React.FC = () => {
  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

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
          <table className="w-full min-w-[700px] text-center border-collapse">
            <thead>
              <tr className="bg-gray-900/50">
                <th className="p-4 w-24 text-brand-green font-bold">Hora</th>
                {days.map(day => <th key={day} className="p-4 text-white font-bold">{day}</th>)}
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((row) => (
                <tr key={row.time} className="border-b border-gray-800">
                  <td className="p-4 font-bold text-brand-green">{row.time}</td>
                  <td className="p-2"><div className={`p-2 rounded-lg border ${classColors[row.monday]}`}>{row.monday}</div></td>
                  <td className="p-2"><div className={`p-2 rounded-lg border ${classColors[row.tuesday]}`}>{row.tuesday}</div></td>
                  <td className="p-2"><div className={`p-2 rounded-lg border ${classColors[row.wednesday]}`}>{row.wednesday}</div></td>
                  <td className="p-2"><div className={`p-2 rounded-lg border ${classColors[row.thursday]}`}>{row.thursday}</div></td>
                  <td className="p-2"><div className={`p-2 rounded-lg border ${classColors[row.friday]}`}>{row.friday}</div></td>
                  <td className="p-2"><div className={`p-2 rounded-lg border ${classColors[row.saturday]}`}>{row.saturday}</div></td>
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
