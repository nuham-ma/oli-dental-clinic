import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { verifiedServices } from '../data/clinicData';

export default function ServicesSection({ lang = 'am', onOpenBooking }) {
  return (
    <section id="services" className="py-10 sm:py-14 lg:py-16 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-skybrand-100 text-skybrand-700 text-[11px] xs:text-xs sm:text-sm font-heading font-bold uppercase tracking-wider mb-2">
            <span>{lang === 'am' ? 'የጥርስ ሕክምና አገልግሎቶች' : 'Our Dental Services'}</span>
          </div>
          <h2 className="font-heading text-xl xs:text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
            {lang === 'am' ? 'በክሊኒካችን የሚሰጡ ዋና ዋና አገልግሎቶች' : 'Specialized Treatments at Oli Dental'}
          </h2>
          <p className="font-sans text-slate-700 text-sm xs:text-base sm:text-lg leading-relaxed">
            {lang === 'am' ? (
              'ዘመናዊ የጥርስ ማስተካከያ፣ የጥርስ ማጽዳት፣ የጥርስ ሙሌት እና የዚርኮኒያ ሽፋኖችን ጨምሮ የተሟላ እንክብካቤ።'
            ) : (
              'Modern orthodontics, ultrasonic scaling, composite fillings, zirconia crowns, and general dental care.'
            )}
          </p>
        </div>

        {/* Compact 3-Column Desktop Grid (Responsive on Tablet and Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {verifiedServices.map((service, idx) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group ${
                idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Image Header: Dual Braces Arrangement OR Full Natural Photo */}
                {service.isDualImage ? (
                  <div className="relative w-full h-44 xs:h-48 sm:h-52 bg-slate-100 flex overflow-hidden">
                    {/* Before Photo */}
                    <div className="relative w-1/2 h-full border-r border-white/80 overflow-hidden bg-slate-100">
                      <img 
                        src={service.beforeImage} 
                        alt={`${service.title[lang]} - 1`} 
                        className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* After Photo */}
                    <div className="relative w-1/2 h-full overflow-hidden bg-slate-100">
                      <img 
                        src={service.afterImage} 
                        alt={`${service.title[lang]} - 2`} 
                        className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Service Number Tag */}
                    <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded-md text-xs font-mono font-extrabold text-slate-900 shadow-sm z-10 font-heading">
                      {service.number}
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-44 xs:h-48 sm:h-52 overflow-hidden bg-slate-100">
                    <img 
                      src={service.image} 
                      alt={service.alt || service.title[lang]} 
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none"></div>

                    {/* Service Number Tag */}
                    <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded-md text-xs font-mono font-extrabold text-slate-900 shadow-sm font-heading">
                      {service.number}
                    </div>
                  </div>
                )}

                {/* Content Body */}
                <div className="p-4 sm:p-5">
                  <span className="text-[11px] xs:text-xs font-heading font-bold uppercase tracking-wider text-skybrand-600 mb-1.5 block">
                    {lang === 'am' ? 'አገልግሎት' : 'Treatment'}
                  </span>

                  <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-skybrand-600 transition-colors">
                    {service.title[lang]}
                  </h3>

                  <p className="font-sans text-slate-600 text-xs xs:text-sm sm:text-base leading-relaxed line-clamp-3">
                    {service.shortDesc[lang]}
                  </p>
                </div>
              </div>

              {/* Compact Booking CTA */}
              <div className="p-4 sm:p-5 pt-0">
                <button
                  onClick={() => onOpenBooking({ serviceId: service.id })}
                  className="w-full py-3 px-4 rounded-xl bg-slate-100 group-hover:bg-slate-900 group-hover:text-white text-slate-800 text-xs xs:text-sm sm:text-base font-heading font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98 text-center"
                >
                  <Calendar className="w-4 h-4 text-skybrand-500 group-hover:text-white transition-colors shrink-0" />
                  <span>{lang === 'am' ? 'ቀጠሮ ያስይዙ' : 'Book Treatment'}</span>
                  <ArrowRight className="w-4 h-4 ml-0.5 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
