import React from 'react';
import { PhoneCall, Calendar } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function EmergencyBanner({ lang = 'am', onOpenBooking }) {
  return (
    <aside aria-label="Quick Actions" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 pointer-events-none">
      <div className="flex items-center gap-2 pointer-events-auto">
        {/* Direct Call Button */}
        <a
          href={clinicInfo.phones[0].tel}
          className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-xl hover:scale-105 transition-all duration-300 border border-slate-700"
          title="Call Oli Dental Clinic"
        >
          <PhoneCall className="w-4 h-4 text-skybrand-400" />
          <span className="hidden sm:inline">{clinicInfo.phones[0].display}</span>
        </a>

        {/* Quick Booking Button */}
        <button
          onClick={() => onOpenBooking()}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-skybrand-600 to-dental-500 hover:from-skybrand-700 hover:to-dental-600 text-white font-bold text-xs sm:text-sm shadow-xl shadow-skybrand-600/25 hover:scale-105 transition-all duration-300 active:scale-95"
        >
          <Calendar className="w-4 h-4" />
          <span>{lang === 'am' ? 'ቀጠሮ ያስይዙ' : 'Book Now'}</span>
        </button>
      </div>
    </aside>
  );
}
