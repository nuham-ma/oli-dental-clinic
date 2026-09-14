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
    { name: 'አስተያየቶች', href: '#reviews' },
    { name: 'ፎቶዎች', href: '#gallery' },
    { name: 'አድራሻ', href: '#contact' },
  ] : [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Clinic Photos', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs sm:text-sm py-2.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          
          {/* Working Hours & Location snippet */}
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-slate-200 font-medium">
              <Clock className="w-4 h-4 text-skybrand-400 shrink-0" />
              <span>{clinicInfo.hours.display[lang]}</span>
            </span>
            <span className="hidden md:inline-block text-slate-700">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-200 font-medium">
              <MapPin className="w-4 h-4 text-skybrand-400 shrink-0" />
              <span>{clinicInfo.location.short[lang]}</span>
            </span>
          </div>

          {/* Phone Numbers & Language Toggle */}
          <div className="flex items-center gap-3.5 flex-wrap justify-center">
            <a 
              href={clinicInfo.phones[0].tel} 
              className="flex items-center gap-1.5 text-skybrand-300 hover:text-white font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-skybrand-400" />
              <span>{clinicInfo.phones[0].display}</span>
            </a>

            <SocialLinksBar iconSize="w-4 h-4" className="hidden lg:flex gap-2" />

            {/* Prominent Language Switcher Button */}
            <button
              onClick={() => setLang(lang === 'am' ? 'en' : 'am')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold transition cursor-pointer"
              aria-label="Toggle website language"
            >
              <Globe className="w-3.5 h-3.5 text-skybrand-400" />
              <span>{lang === 'am' ? 'English' : 'አማርኛ'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav shadow-sm border-b border-slate-100 py-2.5' 
            : 'bg-white/95 backdrop-blur-md py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Authentic Oli Dental Clinic Brand Logo */}
            <a href="#home" className="flex items-center gap-3 group focus:outline-none shrink-0">
              <img 
                src="/images/logo.jpg" 
                alt="Oli Dental Clinic Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-contain shadow-sm border border-slate-100 bg-white"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-skybrand-600 transition-colors">
                  Oli Dental <span className="text-skybrand-600">Clinic</span>
                </span>
                <span className="text-xs font-medium text-slate-500">
                  {clinicInfo.tagline[lang]}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="px-3.5 py-2 rounded-lg text-sm sm:text-base font-semibold text-slate-700 hover:text-skybrand-600 hover:bg-slate-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-skybrand-600 to-dental-500 hover:from-skybrand-700 hover:to-dental-600 shadow-md shadow-skybrand-500/20 transition-all duration-200 active:scale-95"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>{lang === 'am' ? 'ቀጠሮ ያስይዙ' : 'Book Appointment'}</span>
              </button>
            </div>

            {/* Mobile Navigation Trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setLang(lang === 'am' ? 'en' : 'am')}
                className="px-2.5 py-1 text-xs font-bold rounded-lg bg-slate-100 text-slate-800 border border-slate-200"
              >
                {lang === 'am' ? 'EN' : 'አማ'}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
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

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-skybrand-600 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-sm font-bold text-slate-600">
                {lang === 'am' ? 'ማህበራዊ ሚዲያ:' : 'Social Links:'}
              </span>
              <SocialLinksBar iconSize="w-4 h-4" />
            </div>

            <div className="mt-4 pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-skybrand-600 to-dental-500 shadow-md text-base"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'am' ? 'ቀጠሮ ያስይዙ' : 'Book Appointment'}</span>
              </button>

              <a
                href={clinicInfo.phones[0].tel}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-slate-700 bg-slate-100 text-sm"
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
