import React from 'react';
import { X, Calendar, CheckCircle2, ShieldCheck, Stethoscope, ChevronRight } from 'lucide-react';
import { Specialty } from '../types';
import { SpecialtyIcon } from './SpecialtyIcon';

interface SpecialtyDetailModalProps {
  specialty: Specialty | null;
  onClose: () => void;
  onOpenBooking: (specialtyId: string) => void;
}

export const SpecialtyDetailModal: React.FC<SpecialtyDetailModalProps> = ({
  specialty,
  onClose,
  onOpenBooking
}) => {
  if (!specialty) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg">
              <SpecialtyIcon name={specialty.id} size={28} />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-sky-200">
                CHUYÊN KHOA
              </span>
              <h3 className="text-2xl font-black text-white">{specialty.name}</h3>
              <p className="text-xs sm:text-sm text-sky-100 mt-1 max-w-md font-normal">
                {specialty.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700">
          
          {/* Chief Doctor */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 block font-medium">Bác sĩ phụ trách chuyên môn:</span>
              <span className="text-base font-bold text-slate-900">{specialty.detailedInfo.chiefDoctor}</span>
            </div>
            <div className="text-xs font-semibold px-2.5 py-1 bg-sky-100 text-sky-800 rounded-md">
              Chuyên gia đầu ngành
            </div>
          </div>

          {/* Key Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span>Dịch vụ & Kỹ thuật điều trị mũi nhọn</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {specialty.detailedInfo.services.map((svc, i) => (
                <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-sky-50/40 border border-sky-100/80 text-xs sm:text-sm text-slate-700">
                  <span className="text-sky-500 font-bold">•</span>
                  <span>{svc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modern Equipment */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <ShieldCheck size={16} className="text-sky-500" />
              <span>Hệ thống trang thiết bị thế hệ mới</span>
            </h4>
            <div className="space-y-2">
              {specialty.detailedInfo.equipment.map((eq, i) => (
                <div key={i} className="text-xs sm:text-sm bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center gap-2.5 text-slate-800 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{eq}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range Notice */}
          <div className="flex items-center justify-between p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-900">
            <span className="font-medium">Chi phí khám tham khảo:</span>
            <span className="font-bold text-base text-amber-700">{specialty.detailedInfo.priceRange}</span>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-slate-600 hover:text-slate-800 text-sm font-semibold cursor-pointer"
          >
            Đóng
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenBooking(specialty.id);
            }}
            className="bg-[#ea580c] hover:bg-[#d94e08] text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-orange-500/20 flex items-center gap-2 active:scale-95 transition-all cursor-pointer"
          >
            <Calendar size={16} />
            <span>Đặt lịch khám khoa này</span>
          </button>
        </div>

      </div>
    </div>
  );
};
