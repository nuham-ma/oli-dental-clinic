import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Star, 
  Phone, 
  CheckCircle2
} from 'lucide-react';
import { clinicHighlights, clinicInfo } from '../data/clinicData';

export default function WhyChooseUs({ lang = 'am', onOpenBooking }) {
  const iconMap = {
    Sparkles: Sparkles,
    ShieldCheck: ShieldCheck,
    MapPin: MapPin,
    Clock: Clock
  };

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dental-50 border border-dental-200 text-dental-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'am' ? 'ለምን ኦሊ የጥርስ ሕክምና?' : 'Why Choose Oli Dental?'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            {lang === 'am' ? 'ታካሚዎቻችን የሚመርጡን ዋና ዋና ምክንያቶች' : 'Key Pillars of Our Clinic Standard'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {lang === 'am' ? (
              'ደረጃውን የጠበቀ የህክምና ጥራት፣ ንጹህ አካባቢ፣ እና ለታካሚዎች ተስማሚ የሆነ የስራ ሰዓት።'
            ) : (
              'Committed to clinical excellence, rigorous sterilization, and convenient daily opening hours.'
            )}
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {clinicHighlights.map((highlight, idx) => {
            const IconComp = iconMap[highlight.icon] || Sparkles;
            return (
              <div 
                key={idx}
className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-skybrand-300 hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between animate-fade-in-up"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 text-skybrand-600 flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {highlight.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {highlight.description[lang]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Google Reviews Real Rating Box */}
        <div className="bg-gradient-to-r from-skybrand-900 via-slate-900 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 animate-fade-in-up">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center font-extrabold text-2xl border border-amber-400/30 shrink-0">
              ★
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="font-extrabold text-white text-base ml-1.5">4.9 / 5.0</span>
              </div>
              <h3 className="font-bold text-white text-sm sm:text-base">
                {lang === 'am' ? 'በጉግል ተጠቃሚዎች 4.9/5 ደረጃ የተሰጠው ክሊኒክ' : 'Rated 4.9/5 from 47 Google Reviews'}
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                {lang === 'am' ? 'ከ 47 ትክክለኛ የጉግል አስተያየቶች የተገኘ' : 'Verified rating on Google Maps & Search'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <a
              href={clinicInfo.phones[0].tel}
              className="w-full md:w-auto px-6 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs sm:text-sm shadow-md transition text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-skybrand-600" />
              <span>{lang === 'am' ? 'በስልክ ያነጋግሩን' : 'Call Our Clinic'}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
