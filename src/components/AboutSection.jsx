import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Phone, 
  Calendar 
} from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function AboutSection({ lang = 'am', onOpenBooking }) {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Photo 2 — Dental Treatment Room / Modern Dental Chair */}
         [8/26/2026 4:02 PM] Nunal: import teethcleaning from "../assets/teethcleaning.jpg";
        <div className="lg:col-span-6 relative animate-fade-in">
            <div className="relative">
              
              {/* Photo 2 Container with Natural Proportions */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950 group">
                <div className="w-full h-[360px] sm:h-[450px] flex items-center justify-center overflow-hidden bg-slate-900">
                  <img 
                    src={clinicInfo.photos.treatmentRoom} 
                    alt="Oli Dental Clinic Treatment Room & Modern Dental Chair" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>

                {/* Caption Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-dental-50 text-dental-600 flex items-center justify-center font-bold shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">
                        {lang === 'am' ? 'ዘመናዊ የጥርስ ሕክምና ወንበር እና ክፍል' : 'Modern Operatory & Equipment'}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        {lang === 'am' ? 'ንጹህ እና ደረጃውን የጠበቀ የህክምና ክፍል' : 'Strictly sanitized & comfortable treatment room'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative mini badge */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 hidden sm:flex items-center gap-2 hover-lift">
                <ShieldCheck className="w-5 h-5 text-dental-600" />
                <span className="text-xs font-bold text-slate-800">
                  {lang === 'am' ? 'ንጽህናው የተረጋገጠ' : '100% Sanitized'}
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Verified Clinic Description & Values */}
          <div className="lg:col-span-6 flex flex-col items-start animate-fade-in-up">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-skybrand-100 text-skybrand-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'am' ? 'ስለ ክሊኒካችን' : 'About Our Clinic'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              {lang === 'am' ? (
                <>ዘመናዊ ቴክኖሎጂን ከሙያዊ እንክብካቤ ጋር አጣምሮ የያዘ ክሊኒክ</>
              ) : (
                <>Combining Modern Technology with Professional Care</>
              )}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
              {lang === 'am' ? (
                'ኦሊ የጥርስ ሕክምና ክሊኒክ ለታካሚዎች ምቹ እና ንጹህ አካባቢን በመፍጠር፣ ዘመናዊ የህክምና መሳሪያዎችን በመጠቀም ጥራት ያለው የጥርስ ጤና አጠባበቅ እና የህክምና አገልግሎት ይሰጣል።'
              ) : (
                'Oli Dental Clinic provides dependable and high-standard dental healthcare in a clean, sanitized, and welcoming clinical environment.'
              )}
            </p>

            {/* Core Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover-lift">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-skybrand-600" />
                  <span>{lang === 'am' ? 'ዘመናዊ የህክምና መሳሪያዎች' : 'Modern Equipment'}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500">
                  {lang === 'am' ? 'ደረጃቸውን የጠበቁ ዘመናዊ ወንበሮችና ቁሳቁሶች' : 'Equipped with comfortable modern dental units'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover-lift">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-dental-600" />
                  <span>{lang === 'am' ? 'ከፍተኛ የንጽህና ጥበቃ' : 'Strict Hygiene'}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500">
                  {lang === 'am' ? 'የታመቁ እና ንጹህ የህክምና መሳሪያዎች' : 'Thorough sterilization of all instruments'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover-lift">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm mb-1">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>{lang === 'am' ? 'በየቀኑ ክፍት (ከሰኞ - እሑድ)' : 'Open 7 Days a Week'}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500">
                  {lang === 'am' ? 'ከጠዋቱ 09:00 እስከ ማታ 18:30 ድረስ' : '09:00 – 18:30 daily schedule'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover-lift">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm mb-1">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>{lang === 'am' ? 'ተደራሽ አድራሻ' : 'Prime Location'}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500">
                  {lang === 'am' ? 'መገናኛ ግሬስ ሲቲ ሞል 3ኛ ፎቅ' : 'Grace City Mall 3rd floor, Megenagna'}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-skybrand-600 to-dental-500 hover:from-skybrand-700 hover:to-dental-600 shadow-md transition hover-lift active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'am' ? 'ቀጠሮ ይያዙ' : 'Book Appointment'}</span>
              </button>

              <a
                href={clinicInfo.phones[0].tel}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition hover-lift"
              >
                <Phone className="w-4 h-4 text-skybrand-600" />
                <span>{clinicInfo.phones[0].display}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
