import React, { useState } from 'react';
import { Search, Calendar, ArrowRight, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { SPECIALTIES, DOCTORS } from '../data/medicalData';

interface HeroSectionProps {
  onOpenBooking: (specialtyId?: string) => void;
  onSelectSpecialty: (specialtyId: string) => void;
  onSelectDoctor: (doctorId: string) => void;
  onScrollToServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onSelectSpecialty,
  onSelectDoctor,
  onScrollToServices
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Filter specialties and doctors based on search
  const filteredSpecialties = searchTerm.trim() === '' ? [] : SPECIALTIES.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredDoctors = searchTerm.trim() === '' ? [] : DOCTORS.filter(d => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.specialtyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const hasResults = filteredSpecialties.length > 0 || filteredDoctors.length > 0;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredSpecialties.length > 0) {
      onSelectSpecialty(filteredSpecialties[0].id);
    } else if (filteredDoctors.length > 0) {
      onSelectDoctor(filteredDoctors[0].id);
    } else {
      onScrollToServices();
    }
  };

  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-12 md:pb-20 overflow-hidden bg-gradient-to-b from-[#f2f8fd] via-white to-white">
      {/* Background soft ambient accents */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-blue-100/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Description, Search & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/80 text-sky-700 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="text-amber-500">🎗️</span>
              <span>Bệnh viện đạt chuẩn JCI</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 leading-[1.18] tracking-tight">
              Chăm sóc sức khỏe{' '}
              <span className="text-sky-500 underline decoration-sky-300/40 decoration-wavy decoration-2">
                toàn diện
              </span>{' '}
              cho gia đình bạn
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Đội ngũ hơn 100 bác sĩ đầu ngành, trang thiết bị hiện đại, và quy trình khám chữa bệnh chuẩn quốc tế — tất cả để mang lại sức khỏe tốt nhất cho bạn và gia đình.
            </p>

            {/* Search Box */}
            <div className="relative max-w-xl">
              <form 
                onSubmit={handleSearchSubmit}
                className={`relative flex items-center bg-white rounded-xl border transition-all duration-200 shadow-sm ${
                  isFocused ? 'border-sky-500 ring-4 ring-sky-100' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="pl-4 pr-2 text-slate-400">
                  <Search size={20} className="text-sky-500" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setTimeout(() => setIsFocused(false), 250)}
                  placeholder="Tìm bác sĩ, dịch vụ, chuyên khoa..."
                  className="w-full py-3.5 px-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                />
                <button
                  type="submit"
                  className="m-1.5 px-5 py-2.5 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer"
                >
                  Tìm kiếm
                </button>
              </form>

              {/* Instant Search Dropdown */}
              {isFocused && searchTerm.trim() !== '' && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl border border-slate-200 shadow-xl z-30 max-h-80 overflow-y-auto divide-y divide-slate-100">
                  {hasResults ? (
                    <>
                      {filteredSpecialties.length > 0 && (
                        <div className="p-3">
                          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2 px-2">
                            Chuyên khoa
                          </span>
                          {filteredSpecialties.map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => {
                                onSelectSpecialty(item.id);
                                setSearchTerm('');
                              }}
                              className="w-full text-left px-3 py-2 rounded-lg hover:bg-sky-50 text-slate-800 flex items-center justify-between text-sm transition-colors cursor-pointer"
                            >
                              <span className="font-medium text-slate-800">{item.name}</span>
                              <span className="text-xs text-sky-600">Xem chi tiết →</span>
                            </button>
                          ))}
                        </div>
                      )}

                      {filteredDoctors.length > 0 && (
                        <div className="p-3">
                          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2 px-2">
                            Bác sĩ chuyên khoa
                          </span>
                          {filteredDoctors.map((doc) => (
                            <button
                              key={doc.id}
                              type="button"
                              onClick={() => {
                                onSelectDoctor(doc.id);
                                setSearchTerm('');
                              }}
                              className="w-full text-left px-3 py-2 rounded-lg hover:bg-sky-50 text-slate-800 flex items-center gap-3 text-sm transition-colors cursor-pointer"
                            >
                              <img
                                src={doc.avatar}
                                alt={doc.name}
                                className="w-8 h-8 rounded-full object-cover"
                              />
                              <div>
                                <div className="font-semibold text-slate-900">{doc.name}</div>
                                <div className="text-xs text-slate-500">{doc.title}</div>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="p-6 text-center text-sm text-slate-500">
                      Không tìm thấy kết quả nào khớp với "{searchTerm}".
                      <br />
                      <span className="text-xs text-slate-400 mt-1 block">
                        Thử tìm: Tim mạch, Nhi khoa, Đột quỵ, Nha khoa...
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="bg-[#ea580c] hover:bg-[#d94e08] active:scale-95 text-white font-semibold px-7 py-3 rounded-xl shadow-md shadow-orange-500/25 hover:shadow-orange-500/35 transition-all flex items-center gap-2 cursor-pointer text-base"
              >
                <Calendar size={18} />
                <span>Đặt lịch ngay</span>
              </button>

              <button
                onClick={onScrollToServices}
                className="bg-white hover:bg-sky-50/50 active:scale-95 text-sky-600 border border-sky-400 font-semibold px-6 py-3 rounded-xl shadow-xs hover:border-sky-500 transition-all flex items-center gap-2 cursor-pointer text-base"
              >
                <span>Xem dịch vụ</span>
                <ArrowRight size={17} />
              </button>
            </div>

          </div>

          {/* Right Column: Hero Image with Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Main Rounded Photo Container */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/60 aspect-[4/3] sm:aspect-[1.15/1] bg-slate-100 border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
                  alt="Bác sĩ MedCare Plus tư vấn chu đáo cho bệnh nhân"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Soft gradient bottom overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge 1: Top Right "100+ Bác sĩ đầu ngành" */}
              <div className="absolute -top-4 -right-3 sm:-right-5 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center justify-center animate-bounce-subtle z-20">
                <span className="text-xl sm:text-2xl font-black text-sky-600 leading-tight">100+</span>
                <span className="text-[11px] font-medium text-slate-600 whitespace-nowrap">Bác sĩ đầu ngành</span>
              </div>

              {/* Floating Badge 2: Bottom Left "50.000+ Bệnh nhân tin tưởng" */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-start z-20">
                <span className="text-xl sm:text-2xl font-black text-emerald-500 leading-tight">50.000+</span>
                <span className="text-[11px] font-medium text-slate-600 whitespace-nowrap">Bệnh nhân tin tưởng</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
