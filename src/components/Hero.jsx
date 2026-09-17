import React from 'react';
import { 
  Calendar, 
  ArrowRight,
  MapPin,
  ChevronDown
} from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function Hero({ lang = 'am', onOpenBooking }) {
  return (
    <section 
      id="home" 
      className="relative pt-[132px] xs:pt-[140px] sm:pt-36 lg:pt-40 pb-10 xs:pb-12 sm:pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-skybrand-50/50 via-white to-white"
    >
      <div className="max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Motto, Address & Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* 1. Primary Headline: Clinic Name */}
            <h1 className={`font-heading font-extrabold tracking-tight text-slate-900 mb-2 sm:mb-3 break-words w-full ${
              lang === 'am'
                ? 'text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.32] sm:leading-[1.22]'
                : 'text-2xl xs:text-3xl sm:text-5xl lg:text-6xl leading-[1.18] sm:leading-[1.15]'
            }`}>
              {clinicInfo.name[lang]}
            </h1>

            {/* 2. Subordinate Clinic Motto / Slogan */}
            <div className={`font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-skybrand-600 to-dental-600 mb-3.5 xs:mb-4 sm:mb-5 ${
              lang === 'am'
                ? 'text-sm xs:text-base sm:text-xl lg:text-2xl leading-normal'
                : 'text-base xs:text-lg sm:text-2xl leading-snug sm:leading-normal'
            }`}>
              {clinicInfo.slogan[lang]}
            </div>

            {/* 3. Verified Location & Address Badge */}
            <div className="inline-flex items-center flex-wrap gap-1.5 xs:gap-2 px-3 xs:px-4 py-1.5 xs:py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-800 text-xs sm:text-sm font-semibold mb-4 xs:mb-5 sm:mb-6 hover-lift font-heading max-w-full">
              <MapPin className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-skybrand-600 shrink-0" />
              <span className="text-slate-900 font-bold">{clinicInfo.location.short[lang]}</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-medium shrink-0">
                {lang === 'am' ? '3ኛ ፎቅ' : '3rd Floor'}
              </span>
            </div>

            {/* 4. Narrative Body Paragraph */}
            <p className="font-sans text-sm xs:text-base sm:text-lg lg:text-xl text-slate-700 mb-6 sm:mb-8 max-w-xl leading-relaxed">
              {lang === 'am' ? (
                'በመገናኛ ግሬስ ሲቲ ሞል 3ኛ ፎቅ ላይ የሚገኘው ክሊኒካችን፤ ለርስዎ እና ለቤተሰብዎ ጥራት ያለው የጥርስ ማስተካከያ (Braces)፣ የጥርስ ማጽዳት፣ የጥርስ ሙሌት፣ የዚርኮኒያ ሽፋን እና የተሟሉ የጥርስ ሕክምናዎችን በየቀኑ ይሰጣል።'
              ) : (
                'Providing high-standard orthodontic braces, ultrasonic cleaning, composite fillings, zirconia crowns, and comprehensive dental healthcare at Grace City Mall, Megenagna.'
              )}
            </p>

            {/* 5. Clear Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-heading font-bold text-sm sm:text-base text-white bg-gradient-to-r from-skybrand-600 to-dental-500 hover:from-skybrand-700 hover:to-dental-600 shadow-md shadow-skybrand-500/25 transition-all hover-lift active:scale-95 text-center"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>{lang === 'am' ? 'ቀጠሮ ያስይዙ' : 'Book an Appointment'}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 shrink-0" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-heading font-bold text-sm sm:text-base text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-skybrand-300 transition shadow-sm hover-lift text-center"
              >
                <span>{lang === 'am' ? 'አገልግሎቶቻችንን ይመልከቱ' : 'View Services'}</span>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0" />
              </a>
            </div>

          </div>

          {/* Right Column: Authentic Clinic Reception Visual */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white bg-slate-950 group">
                <div className="w-full h-[260px] xs:h-[300px] sm:h-[400px] lg:h-[440px] flex items-center justify-center overflow-hidden bg-slate-900">
                  <img 
                    src={clinicInfo.photos.heroExterior} 
                    alt="Oli Dental Clinic Reception & Brand Sign" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>

                {/* Subtle Info Pill */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-white/50">
                  <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 xs:gap-2">
                    <div className="min-w-0">
                      <h3 className="font-heading font-extrabold text-slate-900 text-sm sm:text-base md:text-lg truncate">
                        Oli Dental Clinic
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-slate-600 truncate">
                        {clinicInfo.location.short[lang]}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] sm:text-xs md:text-sm font-heading font-bold shrink-0 self-start xs:self-auto">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>{lang === 'am' ? 'ከጠዋቱ 3:00 – ማታ 12:30' : '9:00 AM – 6:30 PM'}</span>
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
