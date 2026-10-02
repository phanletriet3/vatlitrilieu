import React from 'react';
import { SPECIALTIES } from '../data/medicalData';
import { SpecialtyIcon } from './SpecialtyIcon';
import { ArrowRight } from 'lucide-react';

interface SpecialtiesSectionProps {
  onSelectSpecialty: (specialtyId: string) => void;
  onOpenBooking: (specialtyId?: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onSelectSpecialty,
  onOpenBooking
}) => {
  return (
    <section id="dich-vu" className="py-20 bg-[#f2f7fc] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sky-600 font-bold uppercase tracking-wider text-xs sm:text-sm block mb-2">
            CHUYÊN KHOA CỦA CHÚNG TÔI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Dịch vụ y tế toàn diện
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Từ khám tổng quát đến điều trị chuyên sâu, chúng tôi cung cấp đầy đủ dịch vụ y tế với tiêu chuẩn quốc tế.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIALTIES.map((spec) => (
            <div
              key={spec.id}
              onClick={() => onSelectSpecialty(spec.id)}
              className="group bg-white rounded-2xl p-7 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-slate-100/80 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Icon */}
                <div className="mb-5">
                  <SpecialtyIcon name={spec.id} size={26} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                  {spec.name}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-normal">
                  {spec.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-2 border-t border-slate-50 flex items-center justify-between">
                <span className="text-sm font-semibold text-rose-500 group-hover:text-sky-600 transition-colors inline-flex items-center gap-1.5">
                  Tìm hiểu thêm <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span 
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenBooking(spec.id);
                  }}
                  className="text-xs bg-slate-50 hover:bg-sky-50 text-slate-500 hover:text-sky-600 px-2 py-1 rounded-md font-medium transition-colors"
                  title="Đặt khám chuyên khoa này"
                >
                  Đặt lịch
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onSelectSpecialty(SPECIALTIES[0].id)}
            className="inline-flex items-center justify-center bg-white hover:bg-sky-50 text-sky-500 hover:text-sky-600 border border-sky-400 font-semibold px-8 py-3 rounded-xl text-sm transition-all shadow-xs hover:border-sky-500 active:scale-95 cursor-pointer"
          >
            Xem tất cả dịch vụ
          </button>
        </div>

      </div>
    </section>
  );
};
