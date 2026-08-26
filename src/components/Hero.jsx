import React from 'react';
import { 
  Phone, 
  Calendar, 
  Star, 
  MapPin, 
  Clock, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { clinicInfo } from '../data/clinicData';
import SocialLinksBar from './SocialIcons';

export default function Hero({ lang = 'am', onOpenBooking }) {
  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-skybrand-50/60 via-white to-white">
      {/* Decorative background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-skybrand-200/40 to-dental-200/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Clinic Headline & Info */}
          <div className="lg:col-span-7 flex flex-col items-start text-left animate-fade-in-up">
            
            {/* Google Rating Verified Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-800 text-xs font-bold mb-5 hover-lift">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-slate-900 font-extrabold">{clinicInfo.googleRating.score} / 5.0</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600 font-medium">
                {clinicInfo.googleRating[lang === 'am' ? 'amText' : 'enText']}
              </span>
            </div>

            {/* Clinic Name & Main Slogan */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.2] mb-4">
              {lang === 'am' ? (
                <>
                  ኦሊ የጥርስ ሕክምና ክሊኒክ <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-skybrand-600 to-dental-600">
                    ዘመናዊ የጥርስ ሕክምና፣ ጥንታዊ እሴቶች
                  </span>
                </>
              ) : (
                <>
                  Oli Dental Clinic <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-skybrand-600 to-dental-600">
                    Modern Dentistry, Classic Values
                  </span>
                </>
              )}
            </h1>

            {/* Sub-description with natural Amharic */}
            <p className="text-base sm:text-lg text-slate-600 mb-6 max-w-2xl leading-relaxed">
              {lang === 'am' ? (
                'በመገናኛ ግሬስ ሲቲ ሞል 3ኛ ፎቅ ላይ የሚገኘው ኦሊ የጥርስ ሕክምና ክሊኒክ፤ ለእርስዎ እና ለቤተሰብዎ ጥራት ያለው የጥርስ ማስተካከያ (Braces)፣ የጥርስ ማጽዳት፣ የጥርስ ሙሌት፣ የዚርኮኒያ ሽፋን እና የተሟሉ የጥርስ ሕክምና አገልግሎቶችን በየቀኑ ይሰጣል።'
              ) : (
                'Located at Grace City Mall, 3rd Floor in Megenagna, Addis Ababa. Oli Dental Clinic provides professional braces, teeth cleaning, fillings, zirconia crowns, and comprehensive dental care services 7 days a week.'
              )}
            </p>

            {/* Quick Badges (Location & Hours) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
              <div className="flex items-center gap-2.5 text-slate-700 font-medium text-xs sm:text-sm bg-slate-50 p-3 rounded-xl border border-slate-100">
                <MapPin className="w-4 h-4 text-skybrand-600 shrink-0" />
                <span className="truncate">{clinicInfo.location.short[lang]}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 font-medium text-xs sm:text-sm bg-slate-50 p-3 rounded-xl border border-slate-100">
                <Clock className="w-4 h-4 text-dental-600 shrink-0" />
                <span>{clinicInfo.hours.display[lang]}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8 w-full sm:w-auto">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-skybrand-600 to-dental-500 hover:from-skybrand-700 hover:to-dental-600 shadow-md shadow-skybrand-500/25 transition-all hover-lift active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'am' ? 'ቀጠሮ ይያዙ' : 'Book Appointment'}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href={clinicInfo.phones[0].tel}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 hover:border-skybrand-300 transition shadow-sm hover-lift"
              >
                <Phone className="w-4 h-4 text-skybrand-600" />
                <span>{clinicInfo.phones[0].display}</span>
              </a>
            </div>

            {/* Social media connections */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-bold text-slate-400">
                {lang === 'am' ? 'ማህበራዊ ሚዲያዎቻችን:' : 'Find Us On:'}
              </span>
              <SocialLinksBar iconSize="w-4 h-4" />
            </div>

          </div>

          {/* Right Column: Photo 1 — Clinic Exterior / Reception Sign (HERO IMAGE) */}
          <div className="lg:col-span-5 relative animate-fade-in">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Photo 1 Container with natural fit */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <div className="w-full h-[360px] sm:h-[440px] bg-slate-950 flex items-center justify-center overflow-hidden">
                  <img 
                    src={clinicInfo.photos.heroExterior} 
                    alt="Oli Dental Clinic Reception & Brand Sign" 
className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 animate-float"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

                {/* Bottom Overlay Info Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-white/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm">
                        Oli Dental Clinic
                      </h3>
                      <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-skybrand-500 shrink-0" />
                        <span>{clinicInfo.location.short[lang]}</span>
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      09:00 - 18:30
                    </span>
                  </div>
                </div>
              </div>

{/* Floating verified Google Review badge */}
<div className="absolute -top-4 -left-4 bg-white rounded-2xl p-3 shadow-lg border border-slate-100 hidden sm:flex items-center gap-2.5 hover-lift animate-float-slow"></div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center font-extrabold text-sm">
                  ★
                </div>
                
              </div>

            </div>
          </div>

        </div>
      
    </section>
  );
}
