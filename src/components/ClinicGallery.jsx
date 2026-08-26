import React from 'react';
import { Camera } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function ClinicGallery({ lang = 'am' }) {
  const galleryItems = [
    {
      image: "/images/reception.jpg",
      caption: {
        am: "የኦሊ የጥርስ ሕክምና ክሊኒክ ዋና መስተንግዶ",
        en: "Oli Dental Clinic Reception "
      },
      tag: { am: "መስተንግዶ", en: "Reception" }
    },
    {
      image: "/images/interior1.jpg",
      caption: {
        am: "ዘመናዊ ማረፊያ ክፍል ",
        en: "Modern Waiting Area "
      },
      tag: { am: "እንግዳ ማረፊያ ቦታ ", en: "Waiting Area" }
    },
    {
      image: "/images/doctor.jpg",
      caption: {
        am: "የጥርስ ምርመራ እና የህክምና አገልግሎት",
        en: "Patient Examination & Dental Care"
      },
      tag: { am: "የህክምና ሂደት", en: "Dentist Care" }
    },
    {
      image: "/images/interior2.jpg",
      caption: {
        am: "ምቹ እና ንጹህ የታካሚዎች ማረፊያ አዳራሽ",
        en: "Clean & Spacious Patient Waiting Lounge"
      },
      tag: { am: "ማረፊያ አዳራሽ", en: "Waiting Lounge" }
    },
    {
      image: "/images/brace.jpg",
      caption: {
        am: "የጥርስ ማስተካከያ (Braces) ውጤት",
        en: "Orthodontic Braces Clinical Results"
      },
      tag: { am: "ማስተካከያ", en: "Braces" }
    },
    {
      image: "/images/instrument.jpg",
      caption: {
        am: "ደረጃቸውን የጠበቁ ንጹህ የጥርስ ሕክምና መሳሪያዎች",
        en: "Sterilized Medical Dental Instruments"
      },
      tag: { am: "ስትራላይዜሽን", en: "Sterilization" }
    }
  ];

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-skybrand-100 text-skybrand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>{lang === 'am' ? 'የክሊኒካችን ፎቶዎች' : 'Authentic Clinic Photos'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            {lang === 'am' ? 'ኦሊ የጥርስ ሕክምና ክሊኒክን በፎቶ ይመልከቱ' : 'Take a Look Inside Oli Dental Clinic'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {lang === 'am' ? (
              'ንጹህ፣ ምቹ እና በዘመናዊ መሳሪያዎች የተሟላ የህክምና አካባቢ በመገናኛ ግሬስ ሲቲ ሞል 3ኛ ፎቅ።'
            ) : (
              'Clean, comfortable, and modern dental facility located at Grace City Mall, 3rd Floor, Megenagna.'
            )}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg border border-slate-200/80 group transition-all duration-300 flex flex-col justify-between animate-fade-in-up hover-left"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img 
                  src={item.image} 
                  alt={item.caption[lang]} 
            className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md">
                  {item.tag[lang]}
                </div>
              </div>

              <div className="p-4">
                <p className="text-xs sm:text-sm font-bold text-slate-800">
                  {item.caption[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
