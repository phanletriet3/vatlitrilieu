/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StatsBar } from './components/StatsBar';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { BookingStepsSection } from './components/BookingStepsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';

import { BookingModal } from './components/BookingModal';
import { SpecialtyDetailModal } from './components/SpecialtyDetailModal';
import { DoctorsModal } from './components/DoctorsModal';
import { MyAppointmentsModal } from './components/MyAppointmentsModal';
import { NewsModal } from './components/NewsModal';
import { Toast } from './components/Toast';

import { SPECIALTIES } from './data/medicalData';
import { Appointment, Specialty } from './types';

const INITIAL_DEMO_APPOINTMENT: Appointment = {
  id: 'apt_demo_1',
  patientName: 'Lê Hoàng Nam',
  patientPhone: '0988123456',
  patientEmail: 'nam.le@gmail.com',
  birthYear: '1992',
  specialtyId: 'tim-mach',
  specialtyName: 'Tim mạch',
  doctorId: 'doc-1',
  doctorName: 'PGS.TS.BS Trần Quốc Tuấn',
  date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
  timeSlot: '08:30 - 09:30',
  notes: 'Khám tầm soát tim định kỳ',
  createdAt: new Date().toISOString(),
  status: 'confirmed',
  ticketCode: 'MCP-2026-8821',
  clinicRoom: 'Phòng khám 204'
};

export default function App() {
  // Modal states
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSpecialtyId, setBookingSpecialtyId] = useState<string | undefined>(undefined);
  
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);
  const [isDoctorsModalOpen, setIsDoctorsModalOpen] = useState(false);
  const [isAppointmentsOpen, setIsAppointmentsOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Appointments in LocalStorage
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    try {
      const saved = localStorage.getItem('medcare_appointments');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return [INITIAL_DEMO_APPOINTMENT];
  });

  useEffect(() => {
    try {
      localStorage.setItem('medcare_appointments', JSON.stringify(appointments));
    } catch {
      // ignore
    }
  }, [appointments]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleOpenBooking = (specialtyId?: string) => {
    setBookingSpecialtyId(specialtyId);
    setIsBookingOpen(true);
  };

  const handleSelectSpecialty = (specialtyId: string) => {
    const spec = SPECIALTIES.find(s => s.id === specialtyId);
    if (spec) {
      setSelectedSpecialty(spec);
    }
  };

  const handleSelectDoctorToBook = (specialtyId: string, doctorId: string) => {
    setBookingSpecialtyId(specialtyId);
    setIsBookingOpen(true);
  };

  const handleBookingSuccess = (newApp: Appointment) => {
    setAppointments(prev => [newApp, ...prev]);
    showToast(`Đặt lịch thành công! Mã phiếu khám: ${newApp.ticketCode}`);
  };

  const handleCancelAppointment = (id: string) => {
    setAppointments(prev => prev.filter(a => a.id !== id));
    showToast('Đã hủy phiếu hẹn thành công.');
  };

  const handleCallHotline = () => {
    navigator.clipboard?.writeText('19001234');
    showToast('Hotline cấp cứu: 1900 1234. Đang kết nối tổng đài y tế...');
  };

  const scrollToServices = () => {
    const el = document.getElementById('dich-vu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Header Bar with 24/7 hotline and navigation */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onOpenAppointments={() => setIsAppointmentsOpen(true)}
        onOpenDoctors={() => setIsDoctorsModalOpen(true)}
        onOpenNews={() => setIsNewsOpen(true)}
        appointmentCount={appointments.length}
        onShowToast={showToast}
        activeSection="hero"
      />

      <main className="flex-1">
        {/* 2. Hero Section from Screenshot 1 */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onSelectSpecialty={handleSelectSpecialty}
          onSelectDoctor={(docId) => setIsDoctorsModalOpen(true)}
          onScrollToServices={scrollToServices}
        />

        {/* 3. Dark Navy Stats Bar from Screenshot 1 */}
        <StatsBar />

        {/* 4. Specialties Section ("Dịch vụ y tế toàn diện") from Screenshot 2 */}
        <SpecialtiesSection
          onSelectSpecialty={handleSelectSpecialty}
          onOpenBooking={handleOpenBooking}
        />

        {/* 5. "Tại sao chọn chúng tôi?" from Screenshot 3 */}
        <WhyChooseUsSection />

        {/* 6. "3 bước đặt lịch khám" from Screenshot 4 */}
        <BookingStepsSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 7. "Bệnh nhân nói gì về chúng tôi?" from Screenshot 5 */}
        <TestimonialsSection />

        {/* 8. Call To Action Banner from Screenshot 5 */}
        <CtaBanner
          onOpenBooking={() => handleOpenBooking()}
          onCallHotline={handleCallHotline}
        />
      </main>

      {/* 9. Dark Navy Footer from Screenshot 5 */}
      <Footer
        onSelectSpecialty={handleSelectSpecialty}
        onOpenBooking={() => handleOpenBooking()}
        onOpenDoctors={() => setIsDoctorsModalOpen(true)}
        onOpenNews={() => setIsNewsOpen(true)}
        onShowToast={showToast}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialSpecialtyId={bookingSpecialtyId}
        onSuccess={handleBookingSuccess}
      />

      <SpecialtyDetailModal
        specialty={selectedSpecialty}
        onClose={() => setSelectedSpecialty(null)}
        onOpenBooking={handleOpenBooking}
      />

      <DoctorsModal
        isOpen={isDoctorsModalOpen}
        onClose={() => setIsDoctorsModalOpen(false)}
        onSelectDoctorToBook={handleSelectDoctorToBook}
      />

      <MyAppointmentsModal
        isOpen={isAppointmentsOpen}
        onClose={() => setIsAppointmentsOpen(false)}
        appointments={appointments}
        onCancelAppointment={handleCancelAppointment}
        onOpenBooking={() => handleOpenBooking()}
      />

      <NewsModal
        isOpen={isNewsOpen}
        onClose={() => setIsNewsOpen(false)}
        onShowToast={showToast}
      />

      {/* Toast feedback */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
