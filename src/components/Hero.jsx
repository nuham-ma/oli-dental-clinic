import React from 'react';
import { 
  Phone, 
  Calendar, 
  ArrowRight,
  ShieldCheck,
  MapPin,
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
            
            {/* Verified Location & Clinical Standards Badge (No Star Icons) */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-800 text-sm font-semibold mb-6 hover-lift font-heading">
              <MapPin className="w-4 h-4 text-skybrand-600 shrink-0" />
              <span className="text-slate-900 font-bold">{clinicInfo.location.short[lang]}</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-medium">
                {lang === 'am' ? '3ኛ ፎቅ' : '3rd Floor'}
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-3">
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

            {/* Subordinate Clinic Motto */}
            <div className="font-heading text-lg sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-skybrand-600 to-dental-600 mb-6">
              {clinicInfo.slogan[lang]}
            </div>

            {/* Narrative Body Paragraph */}
            <p className="font-sans text-base sm:text-lg lg:text-xl text-slate-700 mb-8 max-w-xl leading-relaxed">
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-heading font-bold text-base text-white bg-gradient-to-r from-skybrand-600 to-dental-500 hover:from-skybrand-700 hover:to-dental-600 shadow-md shadow-skybrand-500/25 transition-all hover-lift active:scale-95"
              >
                <Calendar className="w-5 h-5" />
                <span>{lang === 'am' ? 'ቀጠሮ ያስይዙ' : 'Book an Appointment'}</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-heading font-bold text-base text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-skybrand-300 transition shadow-sm hover-lift"
              >
                <span>{lang === 'am' ? 'አገልግሎቶቻችንን ይመልከቱ' : 'View Services'}</span>
                <ChevronDown className="w-5 h-5 text-slate-400" />
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
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/50">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="font-heading font-extrabold text-slate-900 text-base sm:text-lg">
                        Oli Dental Clinic
                      </h3>
                      <p className="font-sans text-sm text-slate-600">
                        {clinicInfo.location.short[lang]}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs sm:text-sm font-heading font-bold shrink-0">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      {lang === 'am' ? 'ከጠዋቱ 3:00 – ማታ 12:30' : '9:00 AM – 6:30 PM'}
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
