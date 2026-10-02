import React from 'react';
import { 
  Heart, 
  Baby, 
  Bone, 
  Stethoscope, 
  Brain, 
  Eye, 
  Microscope,
  Sparkles
} from 'lucide-react';

interface SpecialtyIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const SpecialtyIcon: React.FC<SpecialtyIconProps> = ({ name, className = '', size = 26 }) => {
  switch (name) {
    case 'tim-mach':
    case 'heart':
      return (
        <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 shadow-xs group-hover:scale-110 transition-transform">
          <Heart size={size} className="fill-rose-500/20" strokeWidth={2.2} />
        </div>
      );
    case 'nhi-khoa':
    case 'baby':
      return (
        <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 shadow-xs group-hover:scale-110 transition-transform">
          <Baby size={size} strokeWidth={2.2} />
        </div>
      );
    case 'phuc-hoi-chuc-nang':
    case 'bone':
      return (
        <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 shadow-xs group-hover:scale-110 transition-transform">
          <Bone size={size} strokeWidth={2.2} />
        </div>
      );
    case 'kham-tong-quat':
    case 'stethoscope':
      return (
        <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shadow-xs group-hover:scale-110 transition-transform">
          <Stethoscope size={size} strokeWidth={2.2} />
        </div>
      );
    case 'than-kinh':
    case 'brain':
      return (
        <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 shadow-xs group-hover:scale-110 transition-transform">
          <Brain size={size} strokeWidth={2.2} />
        </div>
      );
    case 'mat':
    case 'eye':
      return (
        <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 shadow-xs group-hover:scale-110 transition-transform">
          <Eye size={size} strokeWidth={2.2} />
        </div>
      );
    case 'nha-khoa':
    case 'tooth':
      return (
        <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 shadow-xs group-hover:scale-110 transition-transform">
          {/* Custom realistic tooth icon */}
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 3C4.24 3 2 5.24 2 8c0 3.75 1.5 7.5 3 11 .6 1.4 2.2 2 3.6 1.4 1-.4 1.4-1.4 1.4-2.4V14c0-.55.45-1 1-1s1 .45 1 1v4c0 1 .4 2 1.4 2.4 1.4.6 3 0 3.6-1.4 1.5-3.5 3-7.25 3-11 0-2.76-2.24-5-5-5-1.5 0-2.8.7-3.6 1.8-.8-1.1-2.1-1.8-3.6-1.8z" />
          </svg>
        </div>
      );
    case 'ung-buou':
    case 'microscope':
      return (
        <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 shadow-xs group-hover:scale-110 transition-transform">
          <Microscope size={size} strokeWidth={2.2} />
        </div>
      );
    default:
      return (
        <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 shadow-xs">
          <Sparkles size={size} />
        </div>
      );
  }
};
