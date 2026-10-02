import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, ChevronRight, ChevronLeft, ShieldCheck, Printer, AlertCircle } from 'lucide-react';
import { SPECIALTIES, DOCTORS } from '../data/medicalData';
import { Appointment } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpecialtyId?: string;
  onSuccess: (appointment: Appointment) => void;
}

const TIME_SLOTS = [
  { label: '07:30 - 08:30', period: 'morning' },
  { label: '08:30 - 09:30', period: 'morning' },
  { label: '09:30 - 10:30', period: 'morning' },
  { label: '10:30 - 11:30', period: 'morning' },
  { label: '13:30 - 14:30', period: 'afternoon' },
  { label: '14:30 - 15:30', period: 'afternoon' },
  { label: '15:30 - 16:30', period: 'afternoon' },
  { label: '16:30 - 17:30', period: 'afternoon' }
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialSpecialtyId,
  onSuccess
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form states
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState(initialSpecialtyId || SPECIALTIES[0].id);
  const [selectedDoctorId, setSelectedDoctorId] = useState('any');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  
  // Patient info
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [notes, setNotes] = useState('');

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmedAppointment, setConfirmedAppointment] = useState<Appointment | null>(null);

  // Set default initial specialty when opened
  useEffect(() => {
    if (initialSpecialtyId) {
      setSelectedSpecialtyId(initialSpecialtyId);
    }
  }, [initialSpecialtyId]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setSelectedDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  if (!isOpen) return null;

  const currentSpecialty = SPECIALTIES.find(s => s.id === selectedSpecialtyId) || SPECIALTIES[0];
  const availableDoctors = DOCTORS.filter(d => d.specialtyId === selectedSpecialtyId);
  const selectedDoctor = DOCTORS.find(d => d.id === selectedDoctorId);

  const validateStep1 = () => {
    if (!selectedSpecialtyId) {
      setErrors({ specialty: 'Vui lòng chọn chuyên khoa khám' });
      return false;
    }
    setErrors({});
    return true;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!selectedDate) newErrors.date = 'Vui lòng chọn ngày khám';
    if (!selectedTimeSlot) newErrors.timeSlot = 'Vui lòng chọn khung giờ khám';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!patientName.trim()) newErrors.patientName = 'Vui lòng nhập họ và tên';
    if (!patientPhone.trim() || !/^[0-9]{9,11}$/.test(patientPhone.trim())) {
      newErrors.patientPhone = 'Vui lòng nhập số điện thoại hợp lệ (9 - 11 chữ số)';
    }
    if (patientEmail.trim() && !/\S+@\S+\.\S+/.test(patientEmail.trim())) {
      newErrors.patientEmail = 'Email không hợp lệ';
    }
    if (!birthYear.trim()) {
      newErrors.birthYear = 'Vui lòng nhập năm sinh';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
    else if (step === 3 && validateStep3()) {
      // Create confirmed appointment
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      const ticketCode = `MCP-${new Date().getFullYear()}-${randomCode}`;
      const clinicRoom = `Phòng khám ${Math.floor(201 + Math.random() * 20)}`;

      const newApp: Appointment = {
        id: 'apt_' + Date.now(),
        patientName: patientName.trim(),
        patientPhone: patientPhone.trim(),
        patientEmail: patientEmail.trim(),
        birthYear: birthYear.trim(),
        specialtyId: selectedSpecialtyId,
        specialtyName: currentSpecialty.name,
        doctorId: selectedDoctorId,
        doctorName: selectedDoctor ? selectedDoctor.name : 'Bác sĩ theo lịch phân công viện',
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        notes: notes.trim(),
        createdAt: new Date().toISOString(),
        status: 'confirmed',
        ticketCode,
        clinicRoom
      };

      setConfirmedAppointment(newApp);
      onSuccess(newApp);
      setStep(4);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
              <Calendar size={20} />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl">Đặt lịch khám trực tuyến</h3>
              <p className="text-xs text-sky-100 font-normal">
                {step === 4 ? 'Xác nhận đặt khám thành công' : `Bước ${step}/3: ${
                  step === 1 ? 'Chọn chuyên khoa & Bác sĩ' :
                  step === 2 ? 'Chọn ngày & Giờ khám' : 'Thông tin người khám'
                }`}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Stepper Progress Bar (only steps 1-3) */}
        {step < 4 && (
          <div className="px-6 pt-4 pb-2 border-b border-slate-100 bg-slate-50/50">
            <div className="flex items-center justify-between max-w-md mx-auto">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step === num ? 'bg-sky-600 text-white shadow-sm ring-4 ring-sky-100' :
                    step > num ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'
                  }`}>
                    {step > num ? '✓' : num}
                  </div>
                  <span className={`ml-2 text-xs font-semibold hidden sm:inline ${
                    step === num ? 'text-sky-700' : 'text-slate-500'
                  }`}>
                    {num === 1 ? 'Chuyên khoa' : num === 2 ? 'Lịch khám' : 'Thông tin'}
                  </span>
                  {num < 3 && (
                    <div className="w-10 sm:w-16 h-0.5 bg-slate-200 mx-2 sm:mx-3" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">

          {/* STEP 1: Choose Specialty & Doctor */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  1. Chọn chuyên khoa <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {SPECIALTIES.map((spec) => (
                    <button
                      key={spec.id}
                      type="button"
                      onClick={() => {
                        setSelectedSpecialtyId(spec.id);
                        setSelectedDoctorId('any');
                      }}
                      className={`p-3 rounded-xl border text-left flex flex-col items-start transition-all cursor-pointer ${
                        selectedSpecialtyId === spec.id 
                          ? 'border-sky-500 bg-sky-50/70 ring-2 ring-sky-200 text-sky-900 font-semibold' 
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-bold truncate w-full">{spec.name}</span>
                      <span className="text-[10px] text-slate-400 mt-1 line-clamp-1">{spec.description}</span>
                    </button>
                  ))}
                </div>
                {errors.specialty && (
                  <p className="text-xs text-rose-500 mt-1">{errors.specialty}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  2. Chọn Bác sĩ chuyên khoa (Tùy chọn)
                </label>
                <div className="space-y-2">
                  <label 
                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                      selectedDoctorId === 'any' ? 'border-sky-500 bg-sky-50/50' : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="doctor"
                      value="any"
                      checked={selectedDoctorId === 'any'}
                      onChange={() => setSelectedDoctorId('any')}
                      className="text-sky-600 focus:ring-sky-500"
                    />
                    <div>
                      <div className="text-sm font-bold text-slate-900">Bác sĩ bệnh viện sắp xếp</div>
                      <div className="text-xs text-slate-500 font-normal">Hệ thống sẽ chỉ định bác sĩ chuyên khoa phù hợp nhất với khung giờ của bạn</div>
                    </div>
                  </label>

                  {availableDoctors.map((doc) => (
                    <label 
                      key={doc.id}
                      className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                        selectedDoctorId === doc.id ? 'border-sky-500 bg-sky-50/50' : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="doctor"
                        value={doc.id}
                        checked={selectedDoctorId === doc.id}
                        onChange={() => setSelectedDoctorId(doc.id)}
                        className="text-sky-600 focus:ring-sky-500"
                      />
                      <img src={doc.avatar} alt={doc.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-slate-900 truncate">{doc.name}</div>
                        <div className="text-xs text-slate-500">{doc.title} • {doc.experienceYears} năm kinh nghiệm</div>
                      </div>
                      <span className="text-xs font-semibold text-amber-500 flex items-center gap-0.5">
                        ★ {doc.rating}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Choose Date & Time */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  1. Chọn ngày khám <span className="text-rose-500">*</span>
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-sm font-medium"
                />
                {errors.date && <p className="text-xs text-rose-500 mt-1">{errors.date}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  2. Chọn khung giờ khám <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot.label}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot.label)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedTimeSlot === slot.label
                          ? 'border-sky-500 bg-sky-50 text-sky-800 font-bold ring-2 ring-sky-200'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <Clock size={14} className="mx-auto mb-1 text-sky-500" />
                      <span className="text-xs font-semibold">{slot.label}</span>
                    </button>
                  ))}
                </div>
                {errors.timeSlot && <p className="text-xs text-rose-500 mt-1">{errors.timeSlot}</p>}
              </div>

              <div className="bg-sky-50 p-3.5 rounded-xl flex items-start gap-3 border border-sky-100 text-xs text-sky-800">
                <AlertCircle size={16} className="text-sky-600 shrink-0 mt-0.5" />
                <span>
                  MedCare Plus hỗ trợ ưu tiên cho người có đặt lịch hẹn trước, thời gian chờ tối đa không quá 10 phút.
                </span>
              </div>
            </div>
          )}

          {/* STEP 3: Patient Information */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Họ và tên bệnh nhân <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="VD: Nguyễn Văn An"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-sky-500 text-sm"
                  />
                  {errors.patientName && <p className="text-xs text-rose-500 mt-1">{errors.patientName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Số điện thoại liên hệ <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="VD: 0912345678"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-sky-500 text-sm"
                  />
                  {errors.patientPhone && <p className="text-xs text-rose-500 mt-1">{errors.patientPhone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Năm sinh <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="VD: 1988"
                    value={birthYear}
                    onChange={(e) => setBirthYear(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-sky-500 text-sm"
                  />
                  {errors.birthYear && <p className="text-xs text-rose-500 mt-1">{errors.birthYear}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email nhận phiếu hẹn (Tùy chọn)
                  </label>
                  <input
                    type="email"
                    placeholder="VD: an.nguyen@email.com"
                    value={patientEmail}
                    onChange={(e) => setPatientEmail(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-sky-500 text-sm"
                  />
                  {errors.patientEmail && <p className="text-xs text-rose-500 mt-1">{errors.patientEmail}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Triệu chứng hoặc yêu cầu khám cụ thể
                </label>
                <textarea
                  rows={2}
                  placeholder="Mô tả các triệu chứng hiện tại, tiền sử dị ứng thuốc nếu có..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-sky-500 text-sm"
                />
              </div>

              {/* Review summary box */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs space-y-1.5">
                <div className="font-bold text-slate-800 text-sm mb-1">Tóm tắt lịch hẹn:</div>
                <div className="flex justify-between text-slate-600">
                  <span>Chuyên khoa:</span>
                  <span className="font-semibold text-slate-900">{currentSpecialty.name}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Bác sĩ:</span>
                  <span className="font-semibold text-slate-900">{selectedDoctor ? selectedDoctor.name : 'Bác sĩ theo lịch phân công viện'}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Thời gian:</span>
                  <span className="font-semibold text-sky-700">{selectedDate} ({selectedTimeSlot})</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Success confirmation ticket */}
          {step === 4 && confirmedAppointment && (
            <div className="space-y-6 text-center py-2">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 size={36} strokeWidth={2.5} />
              </div>

              <div>
                <h4 className="text-2xl font-black text-slate-900">Đặt lịch thành công!</h4>
                <p className="text-sm text-slate-500 mt-1">
                  Mã phiếu khám của bạn đã được ghi nhận trên hệ thống MedCare Plus.
                </p>
              </div>

              {/* Electronic Ticket Card */}
              <div className="bg-gradient-to-br from-slate-50 to-sky-50/40 p-6 rounded-2xl border-2 border-dashed border-sky-300 text-left relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-sky-500 flex items-center justify-center text-white font-bold text-xs">
                      +
                    </div>
                    <span className="font-bold text-slate-900 text-sm">PHIẾU HẸN KHÁM BỆNH</span>
                  </div>
                  <span className="bg-sky-100 text-sky-800 font-mono text-xs px-2.5 py-1 rounded-md font-bold">
                    {confirmedAppointment.ticketCode}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Bệnh nhân:</span>
                    <span className="font-bold text-slate-900">{confirmedAppointment.patientName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Số điện thoại:</span>
                    <span className="font-semibold text-slate-900">{confirmedAppointment.patientPhone}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Chuyên khoa:</span>
                    <span className="font-bold text-sky-700">{confirmedAppointment.specialtyName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Bác sĩ:</span>
                    <span className="font-semibold text-slate-900">{confirmedAppointment.doctorName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Ngày khám:</span>
                    <span className="font-bold text-slate-900">{confirmedAppointment.date}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Khung giờ:</span>
                    <span className="font-bold text-emerald-600">{confirmedAppointment.timeSlot}</span>
                  </div>
                  <div className="col-span-2 bg-white/80 p-2.5 rounded-lg border border-slate-200">
                    <span className="text-slate-400 block text-[11px]">Địa điểm khám:</span>
                    <span className="font-bold text-slate-900">
                      {confirmedAppointment.clinicRoom} — Tầng 2, 123 Nguyễn Thị Minh Khai, Q.1, TP.HCM
                    </span>
                  </div>
                </div>

                {/* Instructions */}
                <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] text-slate-500">
                  💡 Vui lòng có mặt trước giờ khám 10 phút và xuất trình tin nhắn hoặc mã phiếu này tại quầy Lễ tân để check-in nhanh.
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-5 py-2.5 rounded-xl text-sm flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <Printer size={16} />
                  <span>In phiếu khám</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-[#ea580c] hover:bg-[#d94e08] text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Hoàn tất
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls (steps 1 - 3) */}
        {step < 4 && (
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((step - 1) as 1 | 2)}
                className="px-4 py-2 border border-slate-300 rounded-xl text-slate-700 text-sm font-semibold hover:bg-white transition-colors flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft size={16} />
                <span>Quay lại</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-slate-500 hover:text-slate-700 text-sm font-semibold transition-colors cursor-pointer"
              >
                Hủy bỏ
              </button>
            )}

            <button
              type="button"
              onClick={handleNext}
              className="bg-[#ea580c] hover:bg-[#d94e08] text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-orange-500/20 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>{step === 3 ? 'Xác nhận đặt khám' : 'Tiếp tục'}</span>
              <ChevronRight size={16} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
