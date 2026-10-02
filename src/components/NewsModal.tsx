import React from 'react';
import { X, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { NEWS_ARTICLES } from '../data/medicalData';

interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const NewsModal: React.FC<NewsModalProps> = ({
  isOpen,
  onClose,
  onShowToast
}) => {
  if (!isOpen) return null;

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
              Y HỌC THƯỜNG THỨC
            </span>
            <h3 className="text-2xl font-black text-white">Tin tức & Cẩm nang Y khoa</h3>
            <p className="text-xs sm:text-sm text-sky-100 mt-0.5">
              Kiến thức y tế chính thống được tham vấn bởi các bác sĩ chuyên khoa MedCare Plus
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Articles List */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NEWS_ARTICLES.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-sky-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="flex items-center gap-3 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {article.readTime}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-sky-600 transition-colors line-clamp-2">
                      {article.title}
                    </h4>

                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 font-normal">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400 truncate max-w-[150px]">
                    BS: {article.author}
                  </span>
                  <button
                    onClick={() => onShowToast(`Bạn đang đọc bài: "${article.title}"`)}
                    className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 cursor-pointer"
                  >
                    Đọc tiếp <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 text-slate-600 hover:text-slate-800 text-sm font-semibold cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
