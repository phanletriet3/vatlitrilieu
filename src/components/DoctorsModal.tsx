import React, { useState } from 'react';
import { X, Calendar, Star, Award, Search, Stethoscope } from 'lucide-react';
import { DOCTORS, SPECIALTIES } from '../data/medicalData';
import { Doctor } from '../types';

interface DoctorsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDoctorToBook: (specialtyId: string, doctorId: string) => void;
  selectedDoctorId?: string | null;
}

export const DoctorsModal: React.FC<DoctorsModalProps> = ({
  isOpen,
  onClose,
  onSelectDoctorToBook,
  selectedDoctorId
}) => {
  const [filterSpecialty, setFilterSpecialty] = useState<string>('all');
  const [searchDoc, setSearchDoc] = useState('');

  if (!isOpen) return null;

  const filtered = DOCTORS.filter(d => {
    const matchesSpec = filterSpecialty === 'all' || d.specialtyId === filterSpecialty;
    const matchesSearch = d.name.toLowerCase().includes(searchDoc.toLowerCase()) ||
                          d.title.toLowerCase().includes(searchDoc.toLowerCase()) ||
                          d.specialtyName.toLowerCase().includes(searchDoc.toLowerCase());
    return matchesSpec && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white p-6 flex items-center justify-between">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-sky-200">
              MEDCARE PLUS
            </span>
            <h3 className="text-2xl font-black text-white">Đội ngũ Bác sĩ đầu ngành</h3>
            <p className="text-xs sm:text-sm text-sky-100 mt-0.5">
              Hơn 100 Giáo sư, Tiến sĩ, Bác sĩ Chuyên khoa II giàu kinh nghiệm
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Filters & Search */}
        <div className="p-4 bg-slate-50 border-b border-slate-200/80 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm kiếm bác sĩ theo tên hoặc chuyên khoa..."
              value={searchDoc}
              onChange={(e) => setSearchDoc(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-sky-500 bg-white"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto py-1">
            <button
              onClick={() => setFilterSpecialty('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                filterSpecialty === 'all' ? 'bg-sky-600 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              Tất cả
            </button>
            {SPECIALTIES.map(s => (
              <button
                key={s.id}
                onClick={() => setFilterSpecialty(s.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                  filterSpecialty === s.id ? 'bg-sky-600 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              Không tìm thấy bác sĩ phù hợp với tiêu chí tìm kiếm.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filtered.map((doc) => (
                <div 
                  key={doc.id}
                  className="bg-white rounded-xl border border-slate-200 p-4 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="flex gap-4">
                    <img 
                      src={doc.avatar} 
                      alt={doc.name} 
                      className="w-20 h-20 rounded-xl object-cover shadow-xs border border-slate-100 shrink-0" 
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider block">
                        {doc.specialtyName}
                      </span>
                      <h4 className="font-bold text-slate-900 text-base truncate">{doc.name}</h4>
                      <p className="text-xs text-slate-500 font-medium mt-0.5 line-clamp-1">{doc.title}</p>
                      
                      <div className="flex items-center gap-2 mt-2 text-xs">
                        <span className="flex items-center text-amber-500 font-bold">
                          <Star size={13} className="fill-amber-400 mr-0.5" />
                          {doc.rating}
                        </span>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-500">{doc.experienceYears} năm KN</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mt-3 line-clamp-2 bg-slate-50 p-2 rounded-lg font-normal">
                    {doc.bio}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-[11px] text-slate-500">
                      Lịch khám: <span className="font-semibold text-slate-700">{doc.scheduleDays.join(', ')}</span>
                    </div>

                    <button
                      onClick={() => {
                        onClose();
                        onSelectDoctorToBook(doc.specialtyId, doc.id);
                      }}
                      className="bg-[#ea580c] hover:bg-[#d94e08] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                    >
                      <Calendar size={13} />
                      <span>Đặt khám</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 text-slate-600 hover:text-slate-800 text-sm font-semibold cursor-pointer"
          >
            Đóng lại
          </button>
        </div>

      </div>
    </div>
  );
};
