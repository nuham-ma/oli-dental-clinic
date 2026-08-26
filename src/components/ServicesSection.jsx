
import React from 'react';
import { 
  CheckCircle2, 
  Calendar, 
  Phone, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { verifiedServices, clinicInfo } from '../data/clinicData';

export default function ServicesSection({ lang = 'am', onOpenBooking }) {
  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-skybrand-100 text-skybrand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'am' ? 'የምንሰጣቸው የጥርስ ሕክምና አገልግሎቶች' : 'Our Dental Services'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            {lang === 'am' ? 'በኦሊ የጥርስ ሕክምና ክሊኒክ የሚሰጡ አገልግሎቶች' : 'Dental Treatments at Oli Dental Clinic'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {lang === 'am' ? (
              'ዘመናዊ የጥርስ ማስተካከያ (Braces)፣ ጥልቅ የጥርስ ማጽዳት፣ የጥርስ ሙሌት እና የዚርኮኒያ ሽፋኖችን ጨምሮ የተሟሉ አገልግሎቶች።'
            ) : (
              'From orthodontic braces and professional scaling to durable tooth-colored fillings and aesthetic zirconia crowns.'
            )}
          </p>
        </div>

    {/* 5 Verified Services Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

 {verifiedServices.map((service, idx) => (
  <div
    key={service.id}
className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-soft hover:shadow-soft-lg hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group animate-fade-in-up"
  >
              <div>
                {/* Authentic Service Photo Frame */}
                <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title[lang]} 
                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                  />
    

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase text-slate-800 tracking-wider">
                    <span>{lang === 'am'
                ? 'አገልግሎት #' + (idx + 1)
                : 'Service #' + (idx + 1)} </span>
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-skybrand-600 transition-colors">
                    {service.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
                    {service.shortDesc[lang]}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {service.features[lang].map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-dental-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenBooking({ serviceId: service.id })}
                  className="w-full py-2.5 rounded-xl bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-skybrand-600 group-hover:to-dental-500 group-hover:text-white text-slate-800 text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{lang === 'am' ? 'ለዚህ አገልግሎት ቀጠሮ ይያዙ' : 'Book This Service'}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Photo 3: Dentist & Patient Treatment Photo Banner (TRUST SECTION) */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl overflow-hidden text-white shadow-xl border border-slate-800 animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Photo 3 Frame */}
            <div className="lg:col-span-5 h-64 sm:h-80 lg:h-full relative overflow-hidden bg-slate-950">
              <img 
                src={clinicInfo.photos.dentistTreatment} 
                alt="Oli Dental Clinic Dentist & Patient Care" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900/60 hidden lg:block"></div>
            </div>

            {/* Content & Call to Action */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-skybrand-500/20 text-skybrand-300 text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{lang === 'am' ? 'የታካሚ እንክብካቤ እና ደህንነት' : 'Dedicated Patient Care'}</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
                {lang === 'am' ? (
                  <>ለጥርስ ጤንነትዎ አስተማማኝ እና ጥራት ያለው ህክምና</>
                ) : (
                  <>Reliable & Gentle Care for Your Dental Health</>
                )}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                {lang === 'am' ? (
                  'በኦሊ የጥርስ ሕክምና ክሊኒክ እያንዳንዱ ታካሚ በሙሉ ትኩረት እና ጥንቃቄ ይስተናገዳል። ለጥርስ ምርመራ እና ቀጠሮ በስልክ ይደውሉልን ወይም በመገናኛ ግሬስ ሲቲ ሞል 3ኛ ፎቅ ላይ በአካል ይጎብኙን።'
                ) : (
                  'At Oli Dental Clinic, every patient receives focused, compassionate, and precise care. Call our clinic numbers or visit us at Grace City Mall, 3rd Floor in Megenagna.'
                )}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-skybrand-500 to-dental-500 hover:from-skybrand-600 hover:to-dental-600 text-white font-bold text-xs sm:text-sm shadow-md transition text-center"
                >
                  {lang === 'am' ? 'የቀጠሮ ማመልከቻ' : 'Request Appointment'}
                </button>
                <a
                  href={clinicInfo.phones[0].tel}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 text-center transition flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-skybrand-400" />
                  <span>{clinicInfo.phones[0].display}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
