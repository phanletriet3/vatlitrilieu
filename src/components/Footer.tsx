import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  onSelectSpecialty: (id: string) => void;
  onOpenBooking: () => void;
  onOpenDoctors: () => void;
  onOpenNews: () => void;
  onShowToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectSpecialty,
  onOpenBooking,
  onOpenDoctors,
  onOpenNews,
  onShowToast
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (platform: string) => {
    onShowToast(`Đang chuyển hướng tới kênh ${platform} của MedCare Plus...`);
  };

  return (
    <footer className="bg-[#0e2238] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-emerald-500 to-sky-500 flex items-center justify-center text-white shadow-xs">
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <div className="absolute w-1.5 h-5 bg-white rounded-full"></div>
                  <div className="absolute w-5 h-1.5 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-baseline">
                <span className="text-xl font-black text-white tracking-tight">MEDCARE</span>
                <span className="text-xl font-black text-sky-400 ml-1">PLUS</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 -mt-2 uppercase tracking-wider font-semibold">
              Advanced Compassionate Healthcare
            </p>

            <p className="text-sm text-slate-400 leading-relaxed font-normal pt-2 pr-4">
              Chăm sóc sức khỏe toàn diện với đội ngũ bác sĩ đầu ngành và trang thiết bị hiện đại.
            </p>

            {/* Social Buttons (F, Y, Z) */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => handleSocialClick('Facebook')}
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-sky-600 text-slate-300 hover:text-white flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
                title="Facebook"
              >
                F
              </button>
              <button
                onClick={() => handleSocialClick('YouTube')}
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
                title="YouTube"
              >
                Y
              </button>
              <button
                onClick={() => handleSocialClick('Zalo')}
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
                title="Zalo"
              >
                Z
              </button>
            </div>
          </div>

          {/* Column 2: Dịch vụ */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-base tracking-wide">
              Dịch vụ
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onSelectSpecialty('kham-tong-quat')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Khám tổng quát
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSpecialty('tim-mach')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Tim mạch
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSpecialty('nhi-khoa')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Nhi khoa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSpecialty('phuc-hoi-chuc-nang')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Phục hồi chức năng
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSpecialty('nha-khoa')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Nha khoa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSpecialty('ung-buou')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Tầm soát ung thư
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Liên kết */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-base tracking-wide">
              Liên kết
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => scrollTo('hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Trang chủ
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDoctors}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Đội ngũ bác sĩ
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Đặt lịch khám
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenNews}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Tin tức y khoa
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Liên hệ */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-base tracking-wide">
              Liên hệ
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 text-sm mt-0.5">📍</span>
                <span>123 Nguyễn Thị Minh Khai, Q.1, TP.HCM</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-sky-400 text-sm">📞</span>
                <span className="font-semibold text-slate-200">1900 1234 (Cấp cứu 24/7)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-emerald-400 text-sm">✉️</span>
                <span>info@medcareplus.vn</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-amber-400 text-sm">🕒</span>
                <span>Thứ 2 – Thứ 7: 7:00 – 21:00</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © 2025 MedCare Plus. Bảo lưu mọi quyền.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <button 
              onClick={() => onShowToast('Điều khoản sử dụng của MedCare Plus')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Điều khoản sử dụng
            </button>
            <button 
              onClick={() => onShowToast('Chính sách bảo mật dữ liệu y tế theo chuẩn Bộ Y Tế')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Chính sách bảo mật
            </button>
            <button 
              onClick={() => onShowToast('MedCare Plus đạt chứng nhận chất lượng JCI Hoa Kỳ & ISO 9001')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Chứng nhận y tế
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
