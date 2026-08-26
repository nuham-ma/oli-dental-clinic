import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  ArrowUp,
  Calendar,
  Sparkles
} from 'lucide-react';
import { clinicInfo, verifiedServices } from '../data/clinicData';
import SocialLinksBar from './SocialIcons';

export default function Footer({ lang = 'am', onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm relative border-t border-slate-800">
      
      {/* Top Floating Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-8">
        <div className="bg-gradient-to-r from-skybrand-700 via-skybrand-600 to-dental-600 rounded-3xl p-6 sm:p-8 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/20">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-skybrand-200">
              {clinicInfo.slogan[lang]}
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white mt-1">
              {lang === 'am' ? 'ለጥርስ ጤንነትዎ ዛሬውኑ ቀጠሮ ይያዙ' : 'Book Your Dental Appointment Today'}
            </h3>
            <p className="text-skybrand-100 text-xs sm:text-sm mt-1 max-w-lg">
              {lang === 'am' ? 'በስልክ ቁጥሮቻችን ይደውሉ ወይም በቀላሉ የቀጠሮ ማመልከቻ ያስገቡ።' : 'Call our clinic directly or submit an online request.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-3 rounded-xl bg-white text-slate-950 font-bold text-xs sm:text-sm hover:bg-slate-100 shadow-xl transition"
            >
              {lang === 'am' ? 'ቀጠሮ ይያዙ' : 'Book Appointment'}
            </button>
            <a
              href={clinicInfo.phones[0].tel}
              className="px-5 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm border border-white/20 transition"
            >
              {clinicInfo.phones[0].display}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Clinic Branding & Social */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-skybrand-600 to-dental-500 flex items-center justify-center text-white shadow-md">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1 5.5 2 9 1 3.5 2 5 4 5s3-1.5 4-5c1-3.5 2-5.5 2-9 0-3.5-2.5-6-6-6zm-2 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                </svg>
              </div>
              <span className="font-extrabold text-lg text-white">
                Oli Dental <span className="text-skybrand-400">Clinic</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {clinicInfo.slogan[lang]}. {lang === 'am' ? 'በመገናኛ ግሬስ ሲቲ ሞል 3ኛ ፎቅ ላይ የሚገኝ አስተማማኝ የጥርስ ሕክምና ክሊኒክ።' : 'High quality dental care in Megenagna, Grace City Mall.'}
            </p>

            <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold pt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
              <span className="text-white ml-1">4.9 / 5.0</span>
              <span className="text-slate-500 font-normal">({lang === 'am' ? '47 አስተያየቶች' : '47 reviews'})</span>
            </div>

            {/* Verified Clickable Social Icons */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block mb-2">
                {lang === 'am' ? 'ማህበራዊ ሚዲያዎቻችን:' : 'Connect With Us:'}
              </span>
              <SocialLinksBar iconSize="w-4 h-4" />
            </div>
          </div>

          {/* Column 2: 5 Verified Services */}
          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-3">
              {lang === 'am' ? 'አገልግሎቶቻችን' : 'Our Services'}
            </h4>
            <ul className="space-y-2 text-xs">
              {verifiedServices.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-skybrand-400 transition-colors">
                    {service.title[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours & Contact Details */}
          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-3">
              {lang === 'am' ? 'የስራ ሰዓት እና አድራሻ' : 'Hours & Location'}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-skybrand-400 shrink-0 mt-0.5" />
                <span>{clinicInfo.hours[lang]}</span>
              </li>
              <li className="flex items-start gap-2">
  <MapPin className="w-4 h-4 text-skybrand-400 shrink-0 mt-0.5" />
  <div>
    <div>{lang === 'am' ? 'መገናኛ' : 'Megenagna'}</div>
    <div>{lang === 'am' ? 'ግሬስ ሲቲ ሞል' : 'Grace City Mall'}</div>
    <div>{lang === 'am' ? '3ኛ ፎቅ' : '3rd Floor'}</div>
    <div>{lang === 'am' ? 'አዲስ አበባ፣ ኢትዮጵያ' : 'Addis Ababa, Ethiopia'}</div>
  </div>
</li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-dental-400 shrink-0 mt-0.5" />
                <div>
                  <a href={clinicInfo.phones[0].tel} className="block hover:text-white">{clinicInfo.phones[0].display}</a>
                  <a href={clinicInfo.phones[1].tel} className="block hover:text-white">{clinicInfo.phones[1].display}</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation */}
          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-3">
              {lang === 'am' ? 'ፈጣን ማውጫ' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-skybrand-400 transition">{lang === 'am' ? 'ዋና ገጽ' : 'Home'}</a></li>
              <li><a href="#about" className="hover:text-skybrand-400 transition">{lang === 'am' ? 'ስለ ክሊኒኩ' : 'About Clinic'}</a></li>
              <li><a href="#services" className="hover:text-skybrand-400 transition">{lang === 'am' ? 'የጥርስ አገልግሎቶች' : 'Dental Services'}</a></li>
              <li><a href="#why-us" className="hover:text-skybrand-400 transition">{lang === 'am' ? 'ለምን እኛን?' : 'Why Choose Us'}</a></li>
              <li><a href="#gallery" className="hover:text-skybrand-400 transition">{lang === 'am' ? 'የክሊኒኩ ፎቶዎች' : 'Clinic Photos'}</a></li>
              <li><a href="#contact" className="hover:text-skybrand-400 transition">{lang === 'am' ? 'አድራሻ እና ስልክ' : 'Contact & Location'}</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
  <div>
    © {new Date().getFullYear()} {clinicInfo.name[lang]}. {clinicInfo.slogan[lang]}.
  </div>
  <div className="mt-1 text-slate-600">
    {lang === 'am'
      ? 'ይህ ድረ-ገጽ በPossible Technology PLC የልምምድ ፕሮጀክት የተሰራ ነው።'
      : 'Website developed as an internship project at Possible Technology PLC.'}
  </div>
</div>
          <div className="flex items-center gap-4">
            <a
              href={clinicInfo.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition"
            >
              Google Maps
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
