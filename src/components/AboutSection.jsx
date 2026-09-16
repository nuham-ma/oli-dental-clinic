import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Calendar,
  Phone
} from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function AboutSection({ lang = 'am', onOpenBooking }) {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Photo 2 — Treatment Room & Modern Dental Chair */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-950 group">
                <div className="w-full h-[340px] sm:h-[420px] flex items-center justify-center overflow-hidden bg-slate-900">
                  <img 
                    src={clinicInfo.photos.treatmentRoom} 
                    alt="Oli Dental Clinic Treatment Room & Modern Dental Chair" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>

                {/* Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/50">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-dental-50 text-dental-600 flex items-center justify-center font-bold shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-base">
                        {lang === 'am' ? 'ዘመናዊ የጥርስ ሕክምና ክፍል' : 'Modern Treatment Facility'}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {lang === 'am' ? 'ደረጃውን የጠበቀ እና ምቹ የህክምና አካባቢ' : 'Strictly sanitized and patient-centered environment'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: About Details */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-skybrand-50 border border-skybrand-200 text-skybrand-700 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider mb-4">
              <span>{lang === 'am' ? 'ስለ ክሊኒካችን' : 'About Our Clinic'}</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              {lang === 'am' ? (
                <>ዘመናዊ የጥርስ ሕክምናን ከሙያዊ እንክብካቤ ጋር</>
              ) : (
                <>Professional Dental Care with Modern Precision</>
              )}
            </h2>

            <p className="font-sans text-slate-700 text-base sm:text-lg mb-6 leading-relaxed">
              {lang === 'am' ? (
                'ኦሊ የጥርስ ሕክምና ክሊኒክ ለታካሚዎች ምቹ እና ንጹህ አካባቢን በመፍጠር፣ ዘመናዊ የህክምና መሳሪያዎችን በመጠቀም ጥራት ያለው የጥርስ ጤና አጠባበቅ እና የህክምና አገልግሎት ይሰጣል።'
              ) : (
                'Oli Dental Clinic provides dependable, gentle, and high-standard dental healthcare in a clean and comfortable clinical environment.'
              )}
            </p>

            {/* Core Values / Features */}
            <div className="space-y-4 w-full mb-8">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-skybrand-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-base sm:text-lg">
                    {lang === 'am' ? 'ዘመናዊ የህክምና ቁሳቁሶች' : 'Modern Dental Equipment'}
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-slate-600 mt-0.5">
                    {lang === 'am' ? 'ደረጃቸውን የጠበቁ ዘመናዊ መሳሪያዎች' : 'Equipped with comfortable modern operatory units'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-dental-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-base sm:text-lg">
                    {lang === 'am' ? 'ከፍተኛ የንጽህና ጥበቃ' : 'Strict Sterilization Protocols'}
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-slate-600 mt-0.5">
                    {lang === 'am' ? 'ንጹህ እና ደረጃውን የጠበቀ የህክምና መሳሪያዎች' : 'Comprehensive instrument autoclaving and sanitization'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-skybrand-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-base sm:text-lg">
                    {lang === 'am' ? 'በየቀኑ ክፍት (ከሰኞ እስከ እሑድ)' : 'Open 7 Days a Week'}
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-slate-600 mt-0.5">
                    {clinicInfo.hours.display[lang]}
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-heading font-bold text-base text-white bg-gradient-to-r from-skybrand-600 to-dental-500 hover:from-skybrand-700 hover:to-dental-600 shadow-md transition hover-lift active:scale-95"
              >
                <Calendar className="w-5 h-5" />
                <span>{lang === 'am' ? 'ቀጠሮ ያስይዙ' : 'Book Appointment'}</span>
              </button>

              <a
                href={clinicInfo.phones[0].tel}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-heading font-semibold text-base text-slate-700 bg-slate-100 hover:bg-slate-200 transition hover-lift"
              >
                <Phone className="w-5 h-5 text-skybrand-600" />
                <span>{clinicInfo.phones[0].display}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
