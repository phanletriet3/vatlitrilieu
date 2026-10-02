import React, { useState } from 'react';
import { Calendar, Phone, Menu, X, Clock, ClipboardList } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (specialtyId?: string) => void;
  onOpenAppointments: () => void;
  onOpenDoctors: () => void;
  onOpenNews: () => void;
  appointmentCount: number;
  onShowToast: (msg: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onOpenAppointments,
  onOpenDoctors,
  onOpenNews,
  appointmentCount,
  onShowToast,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyHotline = (number: string) => {
    navigator.clipboard?.writeText(number);
    onShowToast(`Đã sao chép hotline: ${number}`);
  };

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-xs">
      {/* Top Banner */}
      <div className="bg-[#0088ff] text-white py-1.5 px-4 text-xs md:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 mx-auto md:mx-0">
            <span className="inline-block animate-pulse">🚨</span>
            <span>
              Hotline cấp cứu 24/7:{' '}
              <button 
                onClick={() => handleCopyHotline('1900 1234')}
                className="font-bold underline hover:text-amber-200 transition-colors cursor-pointer"
                title="Bấm để gọi hoặc sao chép"
              >
                1900 1234
              </button>
            </span>
            <span className="opacity-70">|</span>
            <span>
              Đường dây hỗ trợ:{' '}
              <button 
                onClick={() => handleCopyHotline('(028) 3822 5678')}
                className="font-bold underline hover:text-amber-200 transition-colors cursor-pointer"
                title="Bấm để sao chép"
              >
                (028) 3822 5678
              </button>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1 opacity-90">
              <Clock size={13} /> Giờ làm việc: 7:00 - 21:00 (Cả CN & Lễ)
            </span>
            {appointmentCount > 0 && (
              <button
                onClick={onOpenAppointments}
                className="bg-white/20 hover:bg-white/30 text-white px-2.5 py-0.5 rounded-full flex items-center gap-1 transition-all"
              >
                <ClipboardList size={13} />
                <span>Lịch hẹn ({appointmentCount})</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-500 to-sky-500 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              {/* Medical Cross Symbol */}
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className="absolute w-2 h-6 bg-white rounded-full"></div>
                <div className="absolute w-6 h-2 bg-white rounded-full"></div>
                <div className="absolute w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white"></div>
              </div>
            </div>
            <div>
              <div className="flex items-baseline tracking-tight">
                <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">MEDCARE</span>
                <span className="text-xl md:text-2xl font-black text-sky-500 ml-1.5">PLUS</span>
              </div>
              <p className="text-[10px] md:text-[11px] font-medium text-slate-500 tracking-normal -mt-1">
                Advanced Compassionate Healthcare
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollTo('hero')}
              className={`relative py-2 text-[15px] font-medium transition-colors cursor-pointer ${
                activeSection === 'hero' ? 'text-sky-600 font-semibold' : 'text-slate-700 hover:text-sky-600'
              }`}
            >
              Trang chủ
              {activeSection === 'hero' && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-sky-500 rounded-full"></span>
              )}
            </button>

            <button
              onClick={() => scrollTo('dich-vu')}
              className={`relative py-2 text-[15px] font-medium transition-colors cursor-pointer ${
                activeSection === 'dich-vu' ? 'text-sky-600 font-semibold' : 'text-slate-700 hover:text-sky-600'
              }`}
            >
              Dịch vụ
              {activeSection === 'dich-vu' && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-sky-500 rounded-full"></span>
              )}
            </button>

            <button
              onClick={onOpenDoctors}
              className={`relative py-2 text-[15px] font-medium transition-colors cursor-pointer ${
                activeSection === 'bac-si' ? 'text-sky-600 font-semibold' : 'text-slate-700 hover:text-sky-600'
              }`}
            >
              Bác sĩ
            </button>

            <button
              onClick={onOpenNews}
              className={`relative py-2 text-[15px] font-medium transition-colors cursor-pointer ${
                activeSection === 'tin-tuc' ? 'text-sky-600 font-semibold' : 'text-slate-700 hover:text-sky-600'
              }`}
            >
              Tin tức
            </button>
          </nav>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center gap-3">
            {appointmentCount > 0 && (
              <button
                onClick={onOpenAppointments}
                className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5"
                title="Xem các lịch hẹn bạn đã tạo"
              >
                <ClipboardList size={15} className="text-sky-600" />
                <span>Phiếu khám ({appointmentCount})</span>
              </button>
            )}

            <button
              onClick={() => onOpenBooking()}
              className="bg-[#ea580c] hover:bg-[#d94e08] text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <Calendar size={16} />
              <span>Đặt lịch khám</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#ea580c] text-white p-2 rounded-lg text-xs font-semibold flex items-center gap-1"
            >
              <Calendar size={15} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 p-2 rounded-md hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <button
            onClick={() => scrollTo('hero')}
            className="block w-full text-left py-2 px-3 rounded-md text-base font-semibold text-sky-600 bg-sky-50"
          >
            Trang chủ
          </button>
          <button
            onClick={() => scrollTo('dich-vu')}
            className="block w-full text-left py-2 px-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            Dịch vụ y tế
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDoctors();
            }}
            className="block w-full text-left py-2 px-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            Đội ngũ bác sĩ
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenNews();
            }}
            className="block w-full text-left py-2 px-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            Tin tức y khoa
          </button>
          {appointmentCount > 0 && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointments();
              }}
              className="block w-full text-left py-2 px-3 rounded-md text-base font-medium text-slate-700 bg-amber-50 text-amber-800"
            >
              Xem lịch hẹn của bạn ({appointmentCount})
            </button>
          )}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#ea580c] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-md"
            >
              <Calendar size={18} />
              <span>Đặt lịch khám ngay</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
