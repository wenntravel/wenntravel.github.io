import React from 'react';
import { FaAt, FaPhone } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 w-80 max-w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">Contact Us</h2>
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-2xl text-purple-700"><FaAt /></span>
            <span className="text-lg font-medium text-gray-900">wenntravels@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl text-gray-700"><FaPhone /></span>
            <span className="text-lg font-medium text-gray-900">+91 70252 92902</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl text-pink-600"><FaInstagram /></span>
            <span className="text-lg font-medium text-gray-900">@wenn.travel</span>
          </div>
        </div>
        <button
          className="mt-8 w-full py-2 rounded-xl bg-gray-100 text-gray-900 font-semibold text-lg hover:bg-gray-200 transition"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default ContactModal; 