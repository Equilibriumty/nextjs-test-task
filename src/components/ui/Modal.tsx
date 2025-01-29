import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="fixed inset-0 bg-black transition-opacity duration-300 ease-in-out"
        style={{
          opacity: isOpen ? 0.5 : 0,
        }}
        onClick={onClose}
      />
      
      <div 
        className={`
          relative w-full h-full bg-slate-50 overflow-y-auto
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
        `}
      >
          {children}
      </div>
    </div>
  );
};

export default Modal; 