import React from 'react';
import { 
  Calendar, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { verifiedServices } from '../data/clinicData';

export default function ServicesSection({ lang = 'am', onOpenBooking }) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-skybrand-100 text-skybrand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>{lang === 'am' ? 'የጥርስ ሕክምና አገልግሎቶች' : 'Our Dental Services'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            {lang === 'am' ? 'በክሊኒካችን የሚሰጡ ዋና ዋና አገልግሎቶች' : 'Specialized Treatments at Oli Dental'}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            {lang === 'am' ? (
              'ዘመናዊ የጥርስ ማስተካከያ፣ የጥርስ ማጽዳት፣ የጥርስ ሙሌት እና የዚርኮኒያ ሽፋኖችን ጨምሮ የተሟላ እንክብካቤ።'
            ) : (
              'Modern orthodontics, ultrasonic hygiene, composite restorations, and comprehensive dental care.'
            )}
          </p>
        </div>

        {/* Horizontal Alternating Editorial Service Rows */}
        <div className="space-y-10 sm:space-y-14">
          {verifiedServices.map((service, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-5 sm:p-7 md:p-8 border border-slate-200 shadow-soft hover:shadow-soft-lg transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                  
                  {/* Image Frame with Full Subject Visibility (No Aggressive Zoom) */}
                  <div className={`md:col-span-6 ${isEven ? '' : 'md:order-2'}`}>
                   <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-md group flex items-center justify-center border border-slate-200">
                      <img 
                        src={service.image} 
                        alt={service.alt || service.title[lang]} 
                     className="w-full h-full object-contain object-center transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none"></div>

                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-mono font-extrabold text-slate-900 tracking-wider shadow-sm">
                        {service.number}
                      </div>
                    </div>
                  </div>

                  {/* Service Information */}
                  <div className={`md:col-span-6 ${isEven ? '' : 'md:order-1'} flex flex-col justify-center`}>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-skybrand-600 mb-1.5 block">
                      {lang === 'am' ? 'የጥርስ ሕክምና አገልግሎት' : 'Dental Treatment'}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">
                      {service.title[lang]}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {service.shortDesc[lang]}
                    </p>

                    <div>
                      <button
                        onClick={() => onOpenBooking({ serviceId: service.id })}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-skybrand-600 text-white text-xs font-bold transition-all hover-lift active:scale-95 shadow-sm cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{lang === 'am' ? 'ቀጠሮ ያስይዙ' : 'Book Treatment'}</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
