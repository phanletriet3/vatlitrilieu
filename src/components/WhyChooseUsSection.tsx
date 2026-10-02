import React from 'react';
import { WHY_CHOOSE_US_ITEMS } from '../data/medicalData';
import { Trophy, Microscope, UserCheck, Smartphone, Check } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const getFeatureIcon = (id: string) => {
    switch (id) {
      case 'jci':
        return (
          <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
            <Trophy size={24} strokeWidth={2.2} />
          </div>
        );
      case 'equipment':
        return (
          <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500 shrink-0">
            <Microscope size={24} strokeWidth={2.2} />
          </div>
        );
      case 'doctors':
        return (
          <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
            <UserCheck size={24} strokeWidth={2.2} />
          </div>
        );
      case 'support':
        return (
          <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-500 shrink-0">
            <Smartphone size={24} strokeWidth={2.2} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with ISO 9001:2015 Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-100 aspect-[4/3] sm:aspect-[1.15/1] border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Bác sĩ phân tích kết quả chụp cắt lớp MRI trên máy tính bảng"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle digital vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Green Badge: "✓ Đạt chuẩn ISO 9001:2015" */}
              <div className="absolute -bottom-4 right-4 sm:right-8 bg-[#00b96b] text-white px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-600/25 flex items-center gap-2 font-bold text-sm z-20">
                <Check size={18} strokeWidth={3} className="text-white" />
                <span>Đạt chuẩn ISO 9001:2015</span>
              </div>

            </div>
          </div>

          {/* Right Column: Title & 4 Feature Items */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-sky-600 font-bold uppercase tracking-wider text-xs sm:text-sm block mb-2">
                TẠI SAO CHỌN CHÚNG TÔI?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Tiêu chuẩn quốc tế, chăm sóc tận tâm
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Chúng tôi cam kết mang lại trải nghiệm y tế tốt nhất với đội ngũ chuyên gia hàng đầu và công nghệ tiên tiến nhất.
              </p>
            </div>

            {/* 4 Feature Items */}
            <div className="space-y-6">
              {WHY_CHOOSE_US_ITEMS.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-start gap-4 p-2 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  {getFeatureIcon(item.id)}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
