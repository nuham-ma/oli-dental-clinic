import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Calendar, 
  Menu, 
  X, 
  Globe,
  ChevronRight
} from 'lucide-react';
import { clinicInfo } from '../data/clinicData';
import SocialLinksBar from './SocialIcons';

export default function Navbar({ lang = 'am', setLang, onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = lang === 'am' ? [
    { name: 'ዋና ገጽ', href: '#home' },
    { name: 'ስለ ክሊኒኩ', href: '#about' },
    { name: 'አገልግሎቶች', href: '#services' },
    { name: 'ለምን እኛን?', href: '#why-us' },
    { name: 'ክሊኒኩን ይጎብኙ', href: '#gallery' },
    { name: 'አድራሻ', href: '#contact' },
  ] : [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Clinic Photos', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Verified Clinic Info & Social Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          
          {/* Location & Hours */}
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="flex items-center gap-1.5 text-slate-300">
  <Clock className="w-3.5 h-3.5 text-skybrand-400" />
  <span>
    {lang === 'am'
      ? 'ከሰኞ - እሑድ: 03:00 - 12:30'
      : 'Mon - Sun: 03:00 - 12:30 local time'}
  </span>
</span>
            <span className="hidden sm:inline-block text-slate-600">•</span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-skybrand-400" />
              <span>{lang === 'am' ? 'መገናኛ፣ ግሬስ ሲቲ ሞል፣ 3ኛ ፎቅ' : 'Megenagna, Grace City Mall, 3rd Floor'}</span>
            </span>
          </div>

          {/* Contact Numbers, Social Media & Language Switcher */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {/* Phone direct links */}
            <div className="flex items-center gap-2">
              <a 
                href={clinicInfo.phones[0].tel} 
                className="flex items-center gap-1 text-skybrand-300 hover:text-white font-semibold transition-colors"
              >
                <Phone className="w-3 h-3 text-skybrand-400" />
                <span>{clinicInfo.phones[0].display}</span>
              </a>
              <span className="text-slate-600">/</span>
              <a 
                href={clinicInfo.phones[1].tel} 
                className="hidden lg:inline text-skybrand-300 hover:text-white font-semibold transition-colors"
              >
                <span>{clinicInfo.phones[1].display}</span>
              </a>
            </div>

            {/* Social Media clickable icons */}
            <SocialLinksBar iconSize="w-3.5 h-3.5" className="hidden sm:flex gap-2" />

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'am' ? 'en' : 'am')}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition"
              title="ቋንቋ ቀይር / Switch Language"
            >
              <Globe className="w-3 h-3 text-skybrand-400" />
              <span>{lang === 'am' ? 'English' : 'አማርኛ'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav shadow-soft border-b border-slate-100 py-3' 
            : 'bg-white/95 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Clinic Logo & Slogan */}
            <a href="#home" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-skybrand-600 to-dental-500 flex items-center justify-center text-white shadow-md shadow-skybrand-500/20 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1 5.5 2 9 1 3.5 2 5 4 5s3-1.5 4-5c1-3.5 2-5.5 2-9 0-3.5-2.5-6-6-6zm-2 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-skybrand-600 transition-colors">
                  Oli Dental <span className="text-skybrand-600">Clinic</span>
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-slate-500 tracking-wide">
                  {clinicInfo.slogan[lang]}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-skybrand-600 hover:bg-slate-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={clinicInfo.phones[0].tel}
                className="hidden xl:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition"
              >
                <Phone className="w-3.5 h-3.5 text-skybrand-600" />
                <span>{clinicInfo.phones[0].display}</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-skybrand-600 to-dental-500 hover:from-skybrand-700 hover:to-dental-600 shadow-md shadow-skybrand-500/25 transition-all duration-300 active:scale-95"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>{lang === 'am' ? 'ቀጠሮ ይያዙ' : 'Book Appointment'}</span>
              </button>
            </div>

            {/* Mobile Menu & Language Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setLang(lang === 'am' ? 'en' : 'am')}
                className="px-2 py-1 text-xs font-bold rounded-md bg-slate-100 text-slate-700"
              >
                {lang === 'am' ? 'EN' : 'አማ'}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-slate-800" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-800" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-skybrand-600 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            {/* Social Icons in mobile menu */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500">
                {lang === 'am' ? 'ማህበራዊ ሚዲያዎቻችን:' : 'Follow Us:'}
              </span>
              <SocialLinksBar iconSize="w-4 h-4" />
            </div>

            <div className="mt-4 pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-skybrand-600 to-dental-500 shadow-md text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'am' ? 'የቀጠሮ ማመልከቻ' : 'Book Appointment'}</span>
              </button>

              <a
                href={clinicInfo.phones[0].tel}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-slate-700 bg-slate-100 text-xs"
              >
                <Phone className="w-4 h-4 text-skybrand-600" />
                <span>{clinicInfo.phones[0].display}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
