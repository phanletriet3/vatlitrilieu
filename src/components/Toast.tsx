import React, { useEffect } from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-subtle">
      <div className="bg-slate-900/95 text-white px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md flex items-center gap-3 border border-slate-700 max-w-md">
        <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
          <CheckCircle2 size={16} />
        </div>
        <p className="text-xs sm:text-sm font-medium leading-tight flex-1">
          {message}
        </p>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
};
