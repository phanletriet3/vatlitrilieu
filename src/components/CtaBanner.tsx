import React from 'react';
import { Calendar, Phone } from 'lucide-react';

interface CtaBannerProps {
  onOpenBooking: () => void;
  onCallHotline: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBooking, onCallHotline }) => {
  return (
    <section className="py-20 bg-[#eafaf7] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Sức khỏe của bạn là ưu tiên hàng đầu của chúng tôi
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
          Đặt lịch khám ngay hôm nay và nhận tư vấn sức khỏe miễn phí từ đội ngũ bác sĩ chuyên nghiệp của chúng tôi.
        </p>

        {/* Buttons side-by-side */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="bg-[#ea580c] hover:bg-[#d94e08] active:scale-95 text-white font-bold px-7 py-3 rounded-xl shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all flex items-center gap-2 cursor-pointer text-sm sm:text-base"
          >
            <Calendar size={18} />
            <span>Đặt lịch khám ngay</span>
          </button>

          <button
            onClick={onCallHotline}
            className="bg-[#0088ff] hover:bg-[#0077e6] active:scale-95 text-white font-bold px-7 py-3 rounded-xl shadow-md shadow-sky-500/20 hover:shadow-sky-500/30 transition-all flex items-center gap-2 cursor-pointer text-sm sm:text-base"
          >
            <Phone size={18} />
            <span>Gọi 1900 1234</span>
          </button>
        </div>
      </div>
    </section>
  );
};
