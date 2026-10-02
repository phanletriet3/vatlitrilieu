import { Specialty, Doctor, Testimonial, NewsArticle } from '../types';

export const SPECIALTIES: Specialty[] = [
  {
    id: 'tim-mach',
    name: 'Tim mạch',
    icon: 'heart',
    iconBg: 'bg-rose-100 text-rose-500',
    iconColor: '#f43f5e',
    description: 'Chẩn đoán và điều trị các bệnh về tim, mạch máu và hệ tuần hoàn.',
    detailedInfo: {
      chiefDoctor: 'PGS.TS.BS Trần Quốc Tuấn',
      services: [
        'Khám tầm soát tăng huyết áp, rối loạn mỡ máu',
        'Siêu âm tim Doppler màu 4D thế hệ mới',
        'Chụp mạch vành và can thiệp mạch vành',
        'Holter điện tâm đồ & huyết áp 24h'
      ],
      equipment: ['Máy siêu âm tim GE Vivid E95', 'Hệ thống can thiệp tim mạch Philips Azurion 7'],
      priceRange: '450.000đ - 1.200.000đ'
    }
  },
  {
    id: 'nhi-khoa',
    name: 'Nhi khoa',
    icon: 'baby',
    iconBg: 'bg-amber-100 text-amber-500',
    iconColor: '#f59e0b',
    description: 'Chăm sóc sức khỏe toàn diện cho trẻ em từ sơ sinh đến 16 tuổi.',
    detailedInfo: {
      chiefDoctor: 'TS.BS Nguyễn Lê Phương Thảo',
      services: [
        'Khám và theo dõi phát triển thể chất - tinh thần trẻ',
        'Tư vấn dinh dưỡng chuyên sâu cho trẻ biếng ăn, suy dinh dưỡng',
        'Tiêm chủng vắc-xin trọn gói chuẩn quốc tế',
        'Điều trị các bệnh lý hô hấp, tiêu hóa nhi'
      ],
      equipment: ['Phòng khám thân thiện cho bé', 'Hệ thống lồng ấp & đèn chiếu vàng da Draeger'],
      priceRange: '350.000đ - 800.000đ'
    }
  },
  {
    id: 'phuc-hoi-chuc-nang',
    name: 'Phục hồi chức năng',
    icon: 'bone',
    iconBg: 'bg-emerald-100 text-emerald-500',
    iconColor: '#10b981',
    description: 'Vật lý trị liệu và phục hồi vận động sau chấn thương, đột quỵ.',
    detailedInfo: {
      chiefDoctor: 'BS.CKII Vũ Đình Hưng',
      services: [
        'Vật lý trị liệu cột sống, thoái hóa khớp',
        'Phục hồi chức năng sau tai biến & phẫu thuật chấn thương',
        'Trị liệu đau cơ xương khớp bằng sóng ngắn, siêu âm trị liệu',
        'Tập vận động với robot hỗ trợ tập đi'
      ],
      equipment: ['Máy kéo giãn cột sống BTL', 'Hệ thống sóng xung kích shockwave BTL-6000'],
      priceRange: '400.000đ - 900.000đ'
    }
  },
  {
    id: 'kham-tong-quat',
    name: 'Khám tổng quát',
    icon: 'stethoscope',
    iconBg: 'bg-purple-100 text-purple-500',
    iconColor: '#a855f7',
    description: 'Gói khám sức khỏe định kỳ toàn diện, phát hiện sớm các bệnh lý.',
    detailedInfo: {
      chiefDoctor: 'ThS.BS Hoàng Minh Đức',
      services: [
        'Gói khám sức khỏe tổng quát Cơ bản & Nâng cao',
        'Khám sức khỏe cấp thẻ xanh, giấy phép lái xe, đi làm',
        'Tầm soát tiểu đường, men gan, chức năng thận, mỡ máu',
        'Xét nghiệm công thức máu & sinh hóa tự động'
      ],
      equipment: ['Hệ thống xét nghiệm tự động Roche Cobas 8000', 'Máy X-Quang kỹ thuật số Carestream'],
      priceRange: '1.200.000đ - 4.500.000đ'
    }
  },
  {
    id: 'than-kinh',
    name: 'Thần kinh',
    icon: 'brain',
    iconBg: 'bg-pink-100 text-pink-500',
    iconColor: '#ec4899',
    description: 'Điều trị các rối loạn về não bộ, cột sống và hệ thần kinh ngoại biên.',
    detailedInfo: {
      chiefDoctor: 'GS.TS.BS Đặng Văn Nam',
      services: [
        'Chẩn đoán và điều trị đau đầu mãn tính, đau nửa đầu (Migraine)',
        'Điều trị mất ngủ kinh niên, rối loạn tiền đình',
        'Tầm soát sớm đột quỵ não & tai biến mạch máu não',
        'Điều trị bệnh Parkinson, sa sút trí tuệ Alzheimer'
      ],
      equipment: ['Máy MRI 3.0 Tesla Siemens Magnetom Lumina', 'Máy đo điện não vi tính EEG 32 kênh'],
      priceRange: '500.000đ - 2.500.000đ'
    }
  },
  {
    id: 'mat',
    name: 'Mắt',
    icon: 'eye',
    iconBg: 'bg-sky-100 text-sky-500',
    iconColor: '#0ea5e9',
    description: 'Khám và phẫu thuật mắt bằng công nghệ laser hiện đại nhất.',
    detailedInfo: {
      chiefDoctor: 'TS.BS Phạm Hải Yến',
      services: [
        'Đo khúc xạ, cấp đơn kính chuẩn xác với máy tự động',
        'Tầm soát tật khúc xạ cận - loạn - viễn ở trẻ nhỏ',
        'Phẫu thuật khúc xạ SMILE & Femto-Lasik',
        'Khám điều trị đục thủy tinh thể bằng phaco'
      ],
      equipment: ['Hệ thống Laser Excimer Schwind Amaris 1050RS', 'Máy chụp cắt lớp võng mạc OCT Zeiss Cirrus'],
      priceRange: '350.000đ - 1.500.000đ'
    }
  },
  {
    id: 'nha-khoa',
    name: 'Nha khoa',
    icon: 'tooth',
    iconBg: 'bg-amber-100 text-amber-600',
    iconColor: '#d97706',
    description: 'Điều trị nha khoa thẩm mỹ, cấy ghép Implant và niềng răng.',
    detailedInfo: {
      chiefDoctor: 'BS.CKI Đỗ Nhật Tân',
      services: [
        'Cạo vôi răng sóng siêu âm & đánh bóng răng',
        'Tẩy trắng răng công nghệ Laser Whitening',
        'Cấy ghép Implant công nghệ 3D không đau',
        'Niềng răng trong suốt Invisalign, niềng răng mắc cài'
      ],
      equipment: ['Máy chụp CT Cone Beam 3D KaVo', 'Ghế nha khoa thông minh A-dec 500 USA'],
      priceRange: '300.000đ - 15.000.000đ'
    }
  },
  {
    id: 'ung-buou',
    name: 'Ung bướu',
    icon: 'microscope',
    iconBg: 'bg-indigo-100 text-indigo-500',
    iconColor: '#6366f1',
    description: 'Tầm soát, chẩn đoán và điều trị ung thư theo phác đồ quốc tế.',
    detailedInfo: {
      chiefDoctor: 'PGS.TS.BS Lê Bảo Châu',
      services: [
        'Tầm soát ung thư đường tiêu hóa (Dạ dày, Đại tràng)',
        'Tầm soát ung thư vú, phụ khoa, tuyến giáp',
        'Xét nghiệm gen di truyền nguy cơ ung thư OncoScreen',
        'Hội chẩn liên chuyên khoa quốc tế (Tumor Board)'
      ],
      equipment: ['Hệ thống nội soi phóng đại Olympus EVIS X1', 'Máy chụp PET-CT GE Discovery MI'],
      priceRange: '1.500.000đ - 8.000.000đ'
    }
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'doc-1',
    name: 'PGS.TS.BS Trần Quốc Tuấn',
    title: 'Trưởng khoa Tim mạch can thiệp',
    specialtyId: 'tim-mach',
    specialtyName: 'Tim mạch',
    experienceYears: 22,
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80',
    rating: 4.9,
    reviewCount: 320,
    bio: 'Nguyên Phó khoa Tim Mạch Bệnh viện Chợ Rẫy, tu nghiệp tại Đại học Y Harvard và Viện Tim Quốc gia Paris.',
    scheduleDays: ['Thứ 2', 'Thứ 3', 'Thứ 5', 'Thứ 7']
  },
  {
    id: 'doc-2',
    name: 'TS.BS Nguyễn Lê Phương Thảo',
    title: 'Trưởng khoa Nhi & Sơ sinh',
    specialtyId: 'nhi-khoa',
    specialtyName: 'Nhi khoa',
    experienceYears: 18,
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80',
    rating: 4.9,
    reviewCount: 450,
    bio: 'Chuyên gia hàng đầu về dinh dưỡng và hô hấp trẻ em, tốt nghiệp thủ khoa Đại học Y Dược TP.HCM.',
    scheduleDays: ['Thứ 2', 'Thứ 4', 'Thứ 6', 'Chủ nhật']
  },
  {
    id: 'doc-3',
    name: 'GS.TS.BS Đặng Văn Nam',
    title: 'Giám đốc Trung tâm Thần kinh',
    specialtyId: 'than-kinh',
    specialtyName: 'Thần kinh',
    experienceYears: 28,
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80',
    rating: 5.0,
    reviewCount: 512,
    bio: 'Chuyên gia đầu ngành thần kinh học tại Việt Nam, hội viên Hội Đột quỵ Thế giới (WSO).',
    scheduleDays: ['Thứ 3', 'Thứ 5', 'Thứ 6']
  },
  {
    id: 'doc-4',
    name: 'BS.CKII Vũ Đình Hưng',
    title: 'Trưởng khoa Phục hồi chức năng & Y học thể thao',
    specialtyId: 'phuc-hoi-chuc-nang',
    specialtyName: 'Phục hồi chức năng',
    experienceYears: 16,
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80',
    rating: 4.8,
    reviewCount: 215,
    bio: 'Đã phục hồi vận động thành công cho hàng nghìn vận động viên và bệnh nhân sau tai biến.',
    scheduleDays: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6']
  },
  {
    id: 'doc-5',
    name: 'TS.BS Phạm Hải Yến',
    title: 'Chuyên gia Nhãn khoa Cấp cao',
    specialtyId: 'mat',
    specialtyName: 'Mắt',
    experienceYears: 15,
    avatar: 'https://images.unsplash.com/photo-1594824813579-43c2c103989e?auto=format&fit=crop&w=500&q=80',
    rating: 4.9,
    reviewCount: 290,
    bio: 'Thực hiện hơn 10.000 ca phẫu thuật mắt thành công, tu nghiệp nhãn khoa tại Singapore và Nhật Bản.',
    scheduleDays: ['Thứ 2', 'Thứ 4', 'Thứ 7']
  },
  {
    id: 'doc-6',
    name: 'PGS.TS.BS Lê Bảo Châu',
    title: 'Giám đốc Khối Ung bướu & Tầm soát',
    specialtyId: 'ung-buou',
    specialtyName: 'Ung bướu',
    experienceYears: 24,
    avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=500&q=80',
    rating: 5.0,
    reviewCount: 420,
    bio: 'Chuyên gia cố vấn y khoa cho nhiều bệnh viện quốc tế, thành viên Hiệp hội Ung thư Lâm sàng Hoa Kỳ (ASCO).',
    scheduleDays: ['Thứ 2', 'Thứ 3', 'Thứ 5']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Nguyễn Thị Hoa',
    role: 'Bệnh nhân Tim mạch',
    initial: 'H',
    avatarColor: 'bg-sky-100 text-sky-600',
    borderColor: 'border-sky-500',
    rating: 5,
    content: '“Bác sĩ rất tận tâm và chuyên nghiệp. Tôi đã được chẩn đoán và điều trị kịp thời. Cơ sở vật chất hiện đại, nhân viên thân thiện.”'
  },
  {
    id: 'test-2',
    name: 'Trần Văn Minh',
    role: 'Bệnh nhân Nhi khoa',
    initial: 'M',
    avatarColor: 'bg-emerald-100 text-emerald-600',
    borderColor: 'border-emerald-500',
    rating: 5,
    content: '“Con tôi được chăm sóc rất chu đáo. Bác sĩ giải thích rõ ràng về tình trạng bệnh, gia đình tôi rất yên tâm khi điều trị tại đây.”'
  },
  {
    id: 'test-3',
    name: 'Lê Thị Phương',
    role: 'Bệnh nhân Tổng quát',
    initial: 'P',
    avatarColor: 'bg-sky-100 text-sky-600',
    borderColor: 'border-orange-500',
    rating: 5,
    content: '“Quy trình đặt lịch online rất tiện lợi, không mất thời gian chờ đợi. Kết quả khám được trả về nhanh chóng và chi tiết.”'
  }
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    id: 'jci',
    title: 'Chứng nhận JCI Quốc tế',
    description: 'Tiêu chuẩn bệnh viện cao nhất thế giới được áp dụng tại mọi quy trình khám chữa bệnh.',
    icon: 'trophy',
    color: 'bg-amber-100 text-amber-600'
  },
  {
    id: 'equipment',
    title: 'Trang thiết bị 4.0',
    description: 'Máy MRI 3 Tesla, PET-CT, Robotic Surgery — công nghệ chẩn đoán và điều trị hàng đầu Việt Nam.',
    icon: 'microscope',
    color: 'bg-sky-100 text-sky-600'
  },
  {
    id: 'doctors',
    title: 'Đội ngũ GS, TS đầu ngành',
    description: '100+ bác sĩ được đào tạo tại các trường y danh giá trong nước và quốc tế.',
    icon: 'user-check',
    color: 'bg-teal-100 text-teal-600'
  },
  {
    id: 'support',
    title: 'Chăm sóc 24/7 đa kênh',
    description: 'Tư vấn qua ứng dụng, hotline, và khám trực tiếp — luôn có bác sĩ sẵn sàng cho bạn.',
    icon: 'smartphone',
    color: 'bg-indigo-100 text-indigo-600'
  }
];

export const BOOKING_STEPS = [
  {
    step: '01',
    title: 'Đặt lịch online',
    description: 'Chọn bác sĩ và khung giờ phù hợp trực tuyến 24/7',
    icon: 'calendar'
  },
  {
    step: '02',
    title: 'Đến khám đúng giờ',
    description: 'Check-in nhanh chóng, không mất thời gian chờ đợi',
    icon: 'building'
  },
  {
    step: '03',
    title: 'Nhận kết quả',
    description: 'Kết quả xét nghiệm và đơn thuốc gửi qua ứng dụng',
    icon: 'file-text'
  }
];

export const STATS = [
  {
    value: '100+',
    label: 'Bác sĩ đầu ngành',
    icon: 'user-doctor'
  },
  {
    value: '50.000+',
    label: 'Bệnh nhân tin tưởng',
    icon: 'hospital'
  },
  {
    value: '25+',
    label: 'Chuyên khoa điều trị',
    icon: 'microscope'
  },
  {
    value: '20 năm',
    label: 'Kinh nghiệm hoạt động',
    icon: 'award'
  },
  {
    value: '98%',
    label: 'Tỷ lệ hài lòng',
    icon: 'star'
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Dấu hiệu sớm cảnh báo bệnh tim mạch và cách phòng ngừa đột quỵ',
    category: 'Tim mạch',
    date: '02/10/2026',
    readTime: '4 phút đọc',
    summary: 'Tìm hiểu những biểu hiện ban đầu như đau tức ngực, khó thở, chóng mặt để phát hiện sớm và điều trị hiệu quả.',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80',
    author: 'PGS.TS.BS Trần Quốc Tuấn'
  },
  {
    id: 'news-2',
    title: 'Lịch tiêm chủng vắc-xin cần thiết cho trẻ dưới 2 tuổi cha mẹ cần nhớ',
    category: 'Nhi khoa',
    date: '28/09/2026',
    readTime: '5 phút đọc',
    summary: 'Cẩm nang chi tiết các mũi tiêm phòng quan trọng giúp tăng cường hệ miễn dịch cho trẻ trong những năm đầu đời.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
    author: 'TS.BS Nguyễn Lê Phương Thảo'
  },
  {
    id: 'news-3',
    title: 'Ứng dụng công nghệ MRI 3 Tesla trong chẩn đoán sớm u não và đột quỵ',
    category: 'Công nghệ y tế',
    date: '20/09/2026',
    readTime: '6 phút đọc',
    summary: 'Hình ảnh sắc nét độ phân giải siêu cao giúp bác sĩ phát hiện các tổn thương nhỏ nhất chỉ từ vài milimet.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80',
    author: 'GS.TS.BS Đặng Văn Nam'
  }
];
