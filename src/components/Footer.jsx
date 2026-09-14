import React from 'react';
import { Phone, ArrowUp, MapPin, Clock } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';
import SocialLinksBar from './SocialIcons';

export default function Footer({ lang = 'am' }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-8 border-b border-slate-900">
          
          {/* Brand Section with Phone Numbers Underneath */}
          <div className="space-y-4 max-w-md">
            
            {/* Logo & Name */}
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.jpg" 
                alt="Oli Dental Clinic Logo" 
                className="w-10 h-10 rounded-lg object-contain bg-white p-0.5 shadow-sm"
              />
              <div>
                <div className="font-extrabold text-lg text-white tracking-tight">
                  Oli Dental <span className="text-skybrand-400">Clinic</span>
                </div>
                <div className="text-sm text-slate-400">
                  {clinicInfo.slogan[lang]}
                </div>
              </div>
            </div>

            {/* Short Location & Hours */}
            <div className="text-sm sm:text-base text-slate-400 flex flex-col gap-1.5 pt-1">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-skybrand-400 shrink-0" />
                <span>{clinicInfo.location.short[lang]}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-dental-400 shrink-0" />
                <span>{clinicInfo.hours.display[lang]}</span>
              </div>
            </div>

            {/* Phone Numbers Placed at the Bottom of the Brand Section */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="flex items-center gap-2 text-slate-300 bg-slate-900 px-4 py-2.5 rounded-xl border border-slate-800">
                <Phone className="w-4 h-4 text-skybrand-400 shrink-0" />
                <a 
                  href={clinicInfo.phones[0].tel} 
                  className="font-bold text-slate-200 hover:text-white transition text-sm sm:text-base"
                >
                  {clinicInfo.phones[0].display}
                </a>
              </div>

              <div className="flex items-center gap-2 text-slate-300 bg-slate-900 px-4 py-2.5 rounded-xl border border-slate-800">
                <Phone className="w-4 h-4 text-skybrand-400 shrink-0" />
                <a 
                  href={clinicInfo.phones[1].tel} 
                  className="font-bold text-slate-200 hover:text-white transition text-sm sm:text-base"
                >
                  {clinicInfo.phones[1].display}
                </a>
              </div>
            </div>

          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-col md:items-end gap-3.5">
            <span className="text-sm font-bold uppercase tracking-wider text-slate-400">
              {lang === 'am' ? 'ማህበራዊ ሚዲያዎቻችን' : 'Connect With Us'}
            </span>
            <SocialLinksBar iconSize="w-5 h-5" />

            <button
              onClick={scrollToTop}
              className="mt-2 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition border border-slate-800 text-sm font-semibold cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>{lang === 'am' ? 'ወደ ላይ ውጣ' : 'Back to top'}</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Minimal Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-slate-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {clinicInfo.name[lang]}. All rights reserved.
          </div>

          <div className="text-xs text-slate-500">
            Internship Project • Developed by an internship student at Possible Technology P.L.C.
          </div>
        </div>

      </div>
    </footer>
  );
}
