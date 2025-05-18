import React from 'react';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-gradient-to-br from-green-50 via-white to-green-100 rounded-3xl shadow-2xl border border-green-200 p-8 w-full max-w-md relative animate-fadeIn">
        <button
          className="absolute top-3 right-3 bg-green-100 hover:bg-green-200 text-green-700 hover:text-green-900 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow-sm transition-colors focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-3xl font-extrabold mb-1 text-center text-green-800">Contact Us</h2>
        <p className="text-center text-gray-500 mb-6">We'd love to hear from you!</p>
        <div className="space-y-5">
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 transition">
            <span className="bg-green-100 text-green-600 rounded-full p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </span>
            <span className="font-semibold w-24">Email:</span>
            <a href="mailto:wenntravels@gmail.com" className="text-green-700 hover:underline font-medium">wenntravels@gmail.com</a>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 transition">
            <span className="bg-green-100 text-green-600 rounded-full p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.45h12.2a1 1 0 00.9-1.45L17 13M7 13V6a1 1 0 011-1h5m4 0h2a1 1 0 011 1v2a1 1 0 01-1 1h-2.28" /></svg>
            </span>
            <span className="font-semibold w-24">Phone:</span>
            <a href="tel:+917025292902" className="text-green-700 hover:underline font-medium">+91 70252 92902</a>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 transition">
            <span className="bg-green-100 text-green-600 rounded-full p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z" /></svg>
            </span>
            <span className="font-semibold w-24">Instagram:</span>
            <a href="https://instagram.com/wenn.travel" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline font-medium">@wenn.travel</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal; 