import React from 'react';
import { X, Calendar, Clock, MapPin, User, Trash2, Printer } from 'lucide-react';
import { Appointment } from '../types';

interface MyAppointmentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointments: Appointment[];
  onCancelAppointment: (id: string) => void;
  onOpenBooking: () => void;
}

export const MyAppointmentsModal: React.FC<MyAppointmentsModalProps> = ({
  isOpen,
  onClose,
  appointments,
  onCancelAppointment,
  onOpenBooking
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white p-5 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Lịch hẹn khám của tôi</h3>
            <p className="text-xs text-sky-100 font-normal">
              Tra cứu thông tin phiếu khám điện tử và hướng dẫn đến viện
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* List of appointments */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {appointments.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto text-2xl">
                📋
              </div>
              <p className="text-slate-600 font-medium text-base">Bạn chưa có lịch hẹn khám nào</p>
              <p className="text-slate-400 text-xs max-w-xs mx-auto">
                Hãy đặt lịch online nhanh chóng để được ưu tiên khám không cần xếp hàng.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="mt-2 bg-[#ea580c] hover:bg-[#d94e08] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md cursor-pointer"
              >
                Đặt lịch khám ngay
              </button>
            </div>
          ) : (
            appointments.map((app) => (
              <div
                key={app.id}
                className="bg-white border-2 border-slate-100 hover:border-sky-300 rounded-2xl p-5 shadow-xs transition-all relative overflow-hidden"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold text-slate-900 text-sm">{app.specialtyName}</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md">
                    {app.ticketCode}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs text-slate-600 mb-3">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Bệnh nhân:</span>
                    <span className="font-semibold text-slate-900 text-sm">{app.patientName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Bác sĩ:</span>
                    <span className="font-semibold text-slate-900">{app.doctorName}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Calendar size={13} className="text-sky-600" />
                    <span>{app.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-600 font-bold">
                    <Clock size={13} />
                    <span>{app.timeSlot}</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-2.5 rounded-lg text-xs text-slate-600 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 truncate">
                    <MapPin size={14} className="text-rose-500 shrink-0" />
                    <span className="truncate">{app.clinicRoom} — 123 Nguyễn Thị Minh Khai, Q.1</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => window.print()}
                      className="text-slate-500 hover:text-slate-800 p-1 cursor-pointer"
                      title="In phiếu"
                    >
                      <Printer size={15} />
                    </button>
                    <button
                      onClick={() => onCancelAppointment(app.id)}
                      className="text-rose-500 hover:text-rose-700 p-1 cursor-pointer"
                      title="Hủy lịch hẹn"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Tổng số: {appointments.length} phiếu khám</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-lg cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
