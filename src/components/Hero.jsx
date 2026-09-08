import React from 'react';
import { 
  Phone, 
  Calendar, 
  Star, 
  ArrowRight,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function Hero({ lang = 'am', onOpenBooking }) {
  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-skybrand-50/50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Google Rating Verified Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-800 text-xs font-bold mb-6 hover-lift">
              <div className="flex items-center gap-0.5 text-amber-400">
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

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-3">
              {lang === 'am' ? (
                <>
                  ኦሊ የጥርስ ሕክምና ክሊኒክ
                </>
              ) : (
                <>
                  Oli Dental Clinic
                </>
              )}
            </h1>

            {/* Subordinate Clinic Motto (Noticeably smaller supporting text) */}
            <div className="text-base sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-skybrand-600 to-dental-600 mb-6">
              {clinicInfo.slogan[lang]}
            </div>

            {/* Short, elegant narrative */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              {lang === 'am' ? (
                'በመገናኛ ግሬስ ሲቲ ሞል 3ኛ ፎቅ ላይ የሚገኘው ክሊኒካችን፤ ለርስዎ እና ለቤተሰብዎ ጥራት ያለው የጥርስ ማስተካከያ (Braces)፣ የጥርስ ማጽዳት፣ የጥርስ ሙሌት፣ የዚርኮኒያ ሽፋን እና የተሟሉ የጥርስ ሕክምናዎችን በየቀኑ ይሰጣል።'
              ) : (
                'Providing high-standard orthodontic braces, ultrasonic cleaning, composite fillings, zirconia crowns, and comprehensive dental healthcare at Grace City Mall, Megenagna.'
              )}
            </p>

            {/* Clear Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-skybrand-600 to-dental-500 hover:from-skybrand-700 hover:to-dental-600 shadow-md shadow-skybrand-500/25 transition-all hover-lift active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'am' ? 'ቀጠሮ ያስይዙ' : 'Book an Appointment'}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-skybrand-300 transition shadow-sm hover-lift"
              >
                <span>{lang === 'am' ? 'አገልግሎቶቻችንን ይመልከቱ' : 'View Services'}</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Authentic Clinic Reception Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950 group">
                <div className="w-full h-[360px] sm:h-[440px] flex items-center justify-center overflow-hidden bg-slate-900">
                  <img 
                    src={clinicInfo.photos.heroExterior} 
                    alt="Oli Dental Clinic Reception & Brand Sign" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>

                {/* Subtle Info Pill */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-white/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm">
                        Oli Dental Clinic
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        {clinicInfo.location.short[lang]}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      09:00 AM – 06:30 PM
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
