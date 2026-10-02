import React from 'react';
import { Calendar, Building2, FileCheck2, ArrowRight } from 'lucide-react';

interface BookingStepsSectionProps {
  onOpenBooking: () => void;
}

export const BookingStepsSection: React.FC<BookingStepsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-[#0066cc] text-white relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sky-200 uppercase tracking-widest text-xs font-bold block mb-2">
            QUY TRÌNH ĐƠN GIẢN
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            3 bước đặt lịch khám
          </h2>
          <p className="text-sky-100 text-base sm:text-lg font-normal">
            Nhanh chóng, tiện lợi, không cần chờ đợi
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-5xl mx-auto mb-14">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center group">
            {/* Step Icon with glowing ring */}
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-white backdrop-blur-xs shadow-inner group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                {/* 3x3 colored grid icon simulating app grid */}
                <div className="grid grid-cols-3 gap-1 p-2">
                  <div className="w-2 h-2 rounded-xs bg-rose-400"></div>
                  <div className="w-2 h-2 rounded-xs bg-amber-300"></div>
                  <div className="w-2 h-2 rounded-xs bg-emerald-400"></div>
                  <div className="w-2 h-2 rounded-xs bg-sky-300"></div>
                  <div className="w-2 h-2 rounded-xs bg-white"></div>
                  <div className="w-2 h-2 rounded-xs bg-indigo-300"></div>
                  <div className="w-2 h-2 rounded-xs bg-purple-400"></div>
                  <div className="w-2 h-2 rounded-xs bg-pink-400"></div>
                  <div className="w-2 h-2 rounded-xs bg-teal-300"></div>
                </div>
              </div>
            </div>

            <span className="text-sky-200 text-xs font-bold uppercase tracking-widest mb-1.5">
              BƯỚC 01
            </span>
            <h3 className="text-xl font-bold text-white mb-2">
              Đặt lịch online
            </h3>
            <p className="text-sky-100 text-sm leading-relaxed max-w-xs font-normal">
              Chọn bác sĩ và khung giờ phù hợp trực tuyến 24/7
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center group">
            {/* Step Icon */}
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-white backdrop-blur-xs shadow-inner group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                {/* Hospital building icon */}
                <div className="relative w-7 h-7 flex items-center justify-center">
                  <div className="w-6 h-7 bg-white/90 rounded-t-sm flex flex-col items-center justify-center shadow-xs">
                    <div className="w-3 h-3 text-rose-500 font-bold text-xs flex items-center justify-center -mt-1">
                      +
                    </div>
                    <div className="grid grid-cols-2 gap-0.5 mt-0.5">
                      <div className="w-1.5 h-1.5 bg-sky-700 rounded-2xs"></div>
                      <div className="w-1.5 h-1.5 bg-sky-700 rounded-2xs"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <span className="text-sky-200 text-xs font-bold uppercase tracking-widest mb-1.5">
              BƯỚC 02
            </span>
            <h3 className="text-xl font-bold text-white mb-2">
              Đến khám đúng giờ
            </h3>
            <p className="text-sky-100 text-sm leading-relaxed max-w-xs font-normal">
              Check-in nhanh chóng, không mất thời gian chờ đợi
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center group">
            {/* Step Icon */}
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-white backdrop-blur-xs shadow-inner group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                {/* Medicine Capsule Icon */}
                <div className="w-6 h-6 rotate-45 flex rounded-full overflow-hidden border border-white/50 shadow-xs">
                  <div className="w-3 h-6 bg-rose-500"></div>
                  <div className="w-3 h-6 bg-amber-300"></div>
                </div>
              </div>
            </div>

            <span className="text-sky-200 text-xs font-bold uppercase tracking-widest mb-1.5">
              BƯỚC 03
            </span>
            <h3 className="text-xl font-bold text-white mb-2">
              Nhận kết quả
            </h3>
            <p className="text-sky-100 text-sm leading-relaxed max-w-xs font-normal">
              Kết quả xét nghiệm và đơn thuốc gửi qua ứng dụng
            </p>
          </div>

        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={onOpenBooking}
            className="bg-[#ea580c] hover:bg-[#d94e08] active:scale-95 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-black/20 hover:shadow-xl transition-all inline-flex items-center gap-2.5 cursor-pointer text-base"
          >
            <Calendar size={18} />
            <span>Đặt lịch khám ngay</span>
          </button>
        </div>

      </div>
    </section>
  );
};
