import React from 'react';
import { UserCheck, Building2, Microscope, Award, Star } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: (
        <span className="text-2xl" role="img" aria-label="Bác sĩ">
          👨‍⚕️
        </span>
      ),
      value: '100+',
      label: 'Bác sĩ đầu ngành'
    },
    {
      icon: (
        <span className="text-2xl" role="img" aria-label="Bệnh nhân">
          🏥
        </span>
      ),
      value: '50.000+',
      label: 'Bệnh nhân tin tưởng'
    },
    {
      icon: (
        <span className="text-2xl" role="img" aria-label="Chuyên khoa">
          🔬
        </span>
      ),
      value: '25+',
      label: 'Chuyên khoa điều trị'
    },
    {
      icon: (
        <span className="text-2xl" role="img" aria-label="Kinh nghiệm">
          🏆
        </span>
      ),
      value: '20 năm',
      label: 'Kinh nghiệm hoạt động'
    },
    {
      icon: (
        <span className="text-2xl" role="img" aria-label="Hài lòng">
          ⭐
        </span>
      ),
      value: '98%',
      label: 'Tỷ lệ hài lòng'
    }
  ];

  return (
    <section className="bg-[#0e2338] text-white py-10 md:py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 items-center">
          {stats.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center text-center p-3 transition-transform hover:-translate-y-1 duration-300 ${
                idx === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <div className="mb-3 transform scale-110 drop-shadow-md">
                {item.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 tracking-tight mb-1">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 tracking-wide">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
