export interface Specialty {
  id: string;
  name: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  description: string;
  detailedInfo: {
    chiefDoctor: string;
    services: string[];
    equipment: string[];
    priceRange: string;
  };
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialtyId: string;
  specialtyName: string;
  experienceYears: number;
  avatar: string;
  rating: number;
  reviewCount: number;
  bio: string;
  scheduleDays: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  initial: string;
  avatarColor: string;
  borderColor: string;
  rating: number;
  content: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  birthYear: string;
  specialtyId: string;
  specialtyName: string;
  doctorId: string;
  doctorName: string;
  date: string;
  timeSlot: string;
  notes?: string;
  createdAt: string;
  status: 'confirmed' | 'completed' | 'cancelled';
  ticketCode: string;
  clinicRoom: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  image: string;
  author: string;
}
