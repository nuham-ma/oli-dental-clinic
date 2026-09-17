import React from 'react';
import { PhoneCall, Calendar } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function EmergencyBanner({ lang = 'am', onOpenBooking }) {
  return (
    <aside aria-label="Quick Actions" className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-40 flex flex-col items-end gap-2 pointer-events-none">
      <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto">
        {/* Direct Call Button */}
        <a
          href={clinicInfo.phones[0].tel}
          className="group relative flex items-center justify-center gap-1.5 p-2.5 sm:px-4 sm:py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-xs sm:text-sm shadow-xl hover:scale-105 transition-all duration-300 border border-slate-700"
          title="Call Oli Dental Clinic"
          aria-label="Call Oli Dental Clinic"
        >
          <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-skybrand-400" />
          <span className="hidden sm:inline">{clinicInfo.phones[0].display}</span>
        </a>

        {/* Quick Booking Button */}
        <button
          onClick={() => onOpenBooking()}
          className="flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-full bg-gradient-to-r from-skybrand-600 to-dental-500 hover:from-skybrand-700 hover:to-dental-600 text-white font-heading font-bold text-xs sm:text-sm shadow-xl shadow-skybrand-600/25 hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          <span>{lang === 'am' ? 'ቀጠሮ ያስይዙ' : 'Book Now'}</span>
        </button>
      </div>
    </aside>
  );
}
