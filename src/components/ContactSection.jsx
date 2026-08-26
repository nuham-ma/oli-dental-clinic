import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Copy, 
  Navigation, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  Calendar
} from 'lucide-react';
import { clinicInfo, verifiedServices } from '../data/clinicData';
import SocialLinksBar from './SocialIcons';

export default function ContactSection({ lang = 'am', onOpenBooking }) {
  const [copied, setCopied] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    service: 'braces',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(clinicInfo.location[lang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-skybrand-100 text-skybrand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{lang === 'am' ? 'አድራሻ እና የስልክ ቁጥሮች' : 'Location & Contact Details'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            {lang === 'am' ? 'ኦሊ የጥርስ ሕክምና ክሊኒክን ያግኙ' : 'Get in Touch with Oli Dental Clinic'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {lang === 'am' ? (
              'ለመረጃ፣ ለጥያቄ ወይም ለቀጠሮ በስልክ ቁጥሮቻችን ይደውሉልን ወይም በማህበራዊ ሚዲያዎቻችን ያግኙን።'
            ) : (
              'Call our clinic numbers for appointments or inquiries, or connect with us on social media.'
            )}
          </p>
        </div>

        {/* 3 Core Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Phones */}
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-skybrand-100 text-skybrand-600 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {lang === 'am' ? 'የክሊኒኩ ስልክ ቁጥሮች' : 'Clinic Phone Numbers'}
              </span>
              <div className="mt-2 space-y-1">
                <a 
                  href={clinicInfo.phones[0].tel} 
                  className="block text-base sm:text-lg font-bold text-slate-900 hover:text-skybrand-600 transition"
                >
                  {clinicInfo.phones[0].display}
                </a>
                <a 
                  href={clinicInfo.phones[1].tel} 
                  className="block text-base sm:text-lg font-bold text-slate-900 hover:text-skybrand-600 transition"
                >
                  {clinicInfo.phones[1].display}
                </a>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200">
              <a
                href={clinicInfo.phones[0].tel}
                className="text-xs font-bold text-skybrand-600 hover:text-skybrand-700 inline-flex items-center gap-1"
              >
                <span>{lang === 'am' ? 'አሁን ይደውሉ' : 'Click to call'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 2: Hours */}
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-dental-100 text-dental-600 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {lang === 'am' ? 'የስራ ሰዓት' : 'Opening Hours'}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-2">
                {clinicInfo.hours[lang]}
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                {lang === 'am' ? 'ከሰኞ እስከ እሑድ ከጠዋቱ 09:00 - 18:30' : 'Open every day from 09:00 to 18:30'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200">
              <span className="text-xs font-bold text-emerald-600 inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{lang === 'am' ? 'በየቀኑ አገልግሎት ይሰጣል' : 'Open 7 Days a Week'}</span>
              </span>
            </div>
          </div>

          {/* Card 3: Location */}
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {lang === 'am' ? 'የክሊኒኩ አድራሻ' : 'Clinic Location'}
              </span>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-2">
                {clinicInfo.location[lang]}
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                {lang === 'am' ? 'መገናኛ ግሬስ ሲቲ ሞል 3ኛ ፎቅ' : 'Grace City Mall 3rd Floor, Megenagna'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-3">
              <button
                onClick={handleCopy}
                className="text-xs font-bold text-skybrand-600 hover:text-skybrand-700 inline-flex items-center gap-1 focus:outline-none"
              >
                <Copy className="w-3 h-3" />
                <span>{copied ? (lang === 'am' ? 'ተቀድቷል!' : 'Copied!') : (lang === 'am' ? 'አድራሻ ቅዳ' : 'Copy Address')}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Form and Location Guide Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Quick Appointment Request */}
          <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-skybrand-600">
                  {lang === 'am' ? 'የቀጠሮ ማመልከቻ' : 'Direct Booking Form'}
                </span>
                <SocialLinksBar iconSize="w-3.5 h-3.5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                {lang === 'am' ? 'ቀጠሮ ወይም መረጃ ይጠይቁ' : 'Schedule a Visit or Inquiry'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                {lang === 'am' ? (
                  'ስምዎን እና ስልክ ቁጥርዎን ያስገቡ፤ የክሊኒኩ ቡድን በስልክ ያነጋግርዎታል።'
                ) : (
                  'Submit your contact details and our clinic will reach out to confirm your slot.'
                )}
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center animate-in zoom-in-95">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-emerald-900 text-base mb-1">
                    {lang === 'am' ? 'ማመልከቻዎ ተልኳል!' : 'Request Sent!'}
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-700 mb-4">
                    {lang === 'am' ? (
                      'እናመሰግናለን። በቅርቡ በስልክ ቁጥርዎ ደውለን ቀጠሮዎን እናረጋግጣለን።'
                    ) : (
                      'Thank you. We will call your phone number shortly to confirm.'
                    )}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold"
                  >
                    {lang === 'am' ? 'ሌላ መልእክት ላክ' : 'Send Another'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'am' ? 'ሙሉ ስም *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'am' ? 'ስምዎን ያስገቡ' : 'Your full name'}
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:ring-2 focus:ring-skybrand-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'am' ? 'ስልክ ቁጥር *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+251 9..."
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:ring-2 focus:ring-skybrand-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'am' ? 'የሚፈልጉት አገልግሎት' : 'Service Required'}
                    </label>
                    <select
                      value={inquiryForm.service}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:ring-2 focus:ring-skybrand-500 outline-none"
                    >
                      {verifiedServices.map((s) => (
                        <option key={s.id} value={s.id}>{s.title[lang]}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'am' ? 'ተጨማሪ መልእክት ወይም ማስታወሻ' : 'Notes / Message (Optional)'}
                    </label>
                    <textarea
                      rows="2"
                      placeholder={lang === 'am' ? 'ተጨማሪ መረጃ ካለዎት እዚህ ይጻፉ...' : 'Any details about your dental needs...'}
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:ring-2 focus:ring-skybrand-500 outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'am' ? 'ቀጠሮ ይጠይቁ' : 'Submit Appointment Request'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Authentic Clinic Photo & Visiting Guide */}
          <div className="lg:col-span-6 bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-800 flex flex-col justify-between text-white">
            
            {/* Real Clinic Photo Frame */}
            <div className="relative h-60 sm:h-64 bg-slate-800 overflow-hidden">
              <img 
                src="/images/interior2.jpg" 
                alt="Oli Dental Clinic Reception Lounge - Grace City Mall" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

              {/* Pin indicator */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md text-slate-900 p-3 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-skybrand-600 shrink-0" />
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm">Oli Dental Clinic</h4>
                    <p className="text-[10px] sm:text-xs text-slate-500">Megenagna, Grace City Mall, 3rd Floor</p>
                  </div>
                </div>
                <a
                  href={clinicInfo.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-skybrand-600 text-white text-xs font-bold hover:bg-skybrand-500 transition"
                >
                  Maps
                </a>
              </div>
            </div>

            {/* Visit Directions */}
            <div className="p-6 sm:p-8 space-y-3 text-xs sm:text-sm text-slate-300">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Navigation className="w-4 h-4 text-skybrand-400" />
                <span>{lang === 'am' ? 'ወደ ክሊኒካችን ለመምጣት' : 'Directions & Accessibility'}</span>
              </h4>

              <p>📍 <strong>{lang === 'am' ? 'አድራሻ:' : 'Address:'}</strong> {clinicInfo.location[lang]}</p>
              <p>🏢 <strong>{lang === 'am' ? 'ህንፃ:' : 'Building:'}</strong> ግሬስ ሲቲ ሞል 3ኛ ፎቅ (Grace City Mall, 3rd Floor, Megenagna)</p>
              <p>🕒 <strong>{lang === 'am' ? 'የስራ ሰዓት:' : 'Hours:'}</strong> {clinicInfo.hours[lang]}</p>
              <p>📞 <strong>{lang === 'am' ? 'ስልክ:' : 'Phones:'}</strong> {clinicInfo.phones[0].display} / {clinicInfo.phones[1].display}</p>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <a
                  href={clinicInfo.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-skybrand-600 hover:bg-skybrand-500 text-white text-xs font-bold transition shadow-md"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{lang === 'am' ? 'በጉግል ካርታ ክፈት' : 'Open in Google Maps'}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
