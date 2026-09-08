import React from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';
import SocialLinksBar from './SocialIcons';

export default function Footer({ lang = 'am' }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Logo & Clinic Identification */}
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo.jpg" 
              alt="Oli Dental Clinic Logo" 
              className="w-8 h-8 rounded-lg object-contain bg-white p-0.5"
            />
            <div>
              <div className="font-extrabold text-sm text-white">
                Oli Dental <span className="text-skybrand-400">Clinic</span>
              </div>
              <div className="text-[11px] text-slate-400">
                {clinicInfo.slogan[lang]} • {clinicInfo.location.short[lang]}
              </div>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="flex items-center gap-3 text-slate-300">
            <a href={clinicInfo.phones[0].tel} className="hover:text-white transition">
              {clinicInfo.phones[0].display}
            </a>
            <span className="text-slate-700">|</span>
            <a href={clinicInfo.phones[1].tel} className="hover:text-white transition">
              {clinicInfo.phones[1].display}
            </a>
          </div>

          {/* Social Links & Scroll Top */}
          <div className="flex items-center gap-4">
            <SocialLinksBar iconSize="w-3.5 h-3.5" />

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition flex items-center justify-center cursor-pointer border border-slate-800"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Minimal Copyright */}
        <div className="mt-6 pt-4 border-t border-slate-900/80 text-center text-[11px] text-slate-400">
  <div>
    © {new Date().getFullYear()} {clinicInfo.name[lang]}. All rights reserved.
  </div>

  <div className="mt-2 text-[10px] text-slate-500">
    Internship Project • Developed by an internship student at Possible Technology P.L.C.
  </div>
</div>
      </div>
    </footer>
  );
}
