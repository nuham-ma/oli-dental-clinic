import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Copy, 
  Navigation, 
  Send, 
  CheckCircle2, 
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
    navigator.clipboard.writeText(clinicInfo.location.full[lang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-skybrand-100 text-skybrand-700 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-4 h-4" />
            <span>{lang === 'am' ? 'አድራሻ እና የስልክ ቁጥሮች' : 'Contact & Location'}</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {lang === 'am' ? 'ኦሊ የጥርስ ሕክምና ክሊኒክን ያግኙ' : 'Get in Touch with Us'}
          </h2>
          <p className="font-sans text-slate-700 text-base sm:text-lg mt-2 leading-relaxed">
            {lang === 'am' ? (
              'ለመረጃ ወይም ለቀጠሮ በስልክ ይደውሉ ወይም በመገናኛ ግሬስ ሲቲ ሞል 3ኛ ፎቅ ይጎብኙን።'
            ) : (
              'Call for inquiries or visit our clinic at Grace City Mall, 3rd Floor, Megenagna, Addis Ababa.'
            )}
          </p>
        </div>

        {/* 2-Column Compact Layout: Left Contact & Form | Right Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info & Quick Booking Form */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phones */}
              <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2 text-skybrand-600 mb-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-slate-500">
                    {lang === 'am' ? 'ስልክ ቁጥሮች' : 'Phone'}
                  </span>
                </div>
                <div className="space-y-1 font-heading">
                  <a href={clinicInfo.phones[0].tel} className="block text-base sm:text-lg font-bold text-slate-900 hover:text-skybrand-600 transition">
                    {clinicInfo.phones[0].display}
                  </a>
                  <a href={clinicInfo.phones[1].tel} className="block text-base sm:text-lg font-bold text-slate-900 hover:text-skybrand-600 transition">
                    {clinicInfo.phones[1].display}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2 text-dental-600 mb-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-slate-500">
                    {lang === 'am' ? 'የስራ ሰዓት' : 'Hours'}
                  </span>
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-snug font-heading">
                  {clinicInfo.hours.display[lang]}
                </div>
                <div className="text-sm text-emerald-600 font-semibold mt-1 font-sans">
                  {lang === 'am' ? 'ከሰኞ እስከ እሑድ በየቀኑ' : 'Open 7 Days a Week'}
                </div>
              </div>

            </div>

            {/* Address Banner */}
            <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  {lang === 'am' ? 'የክሊኒኩ አድራሻ' : 'Clinic Address'}
                </span>
                <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug font-heading">
                  {clinicInfo.location.full[lang]}
                </p>
              </div>
              <button
                onClick={handleCopy}
                className="shrink-0 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-skybrand-600 text-sm font-heading font-bold flex items-center gap-1.5 transition cursor-pointer shadow-sm"
              >
                <Copy className="w-4 h-4" />
                <span>{copied ? (lang === 'am' ? 'ተቀድቷል' : 'Copied!') : (lang === 'am' ? 'አድራሻ ቅዳ' : 'Copy Address')}</span>
              </button>
            </div>

            {/* Direct Inquiry / Booking Form */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-heading text-base sm:text-lg font-extrabold text-slate-900">
                  {lang === 'am' ? 'የቀጠሮ ማመልከቻ' : 'Quick Appointment Form'}
                </h4>
                <SocialLinksBar iconSize="w-4 h-4" />
              </div>

              {submitted ? (
                <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200 text-center animate-in zoom-in-95">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h5 className="font-heading font-bold text-emerald-900 text-base mb-1">
                    {lang === 'am' ? 'ማመልከቻዎ ተልኳል' : 'Request Sent!'}
                  </h5>
                  <p className="font-sans text-sm text-emerald-700 mb-4">
                    {lang === 'am' ? 'እናመሰግናለን። በስልክ ቁጥርዎ ደውለን ቀጠሮዎን እናረጋግጣለን።' : 'Thank you. We will call you shortly to confirm.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-lg bg-emerald-600 text-white text-sm font-heading font-bold shadow-sm"
                  >
                    {lang === 'am' ? 'አዲስ መልእክት' : 'Reset'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder={lang === 'am' ? 'ስምዎን ያስገቡ *' : 'Full Name *'}
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-base focus:ring-2 focus:ring-skybrand-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder={lang === 'am' ? 'ስልክ ቁጥር *' : 'Phone Number *'}
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-base focus:ring-2 focus:ring-skybrand-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <select
                      value={inquiryForm.service}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-base focus:ring-2 focus:ring-skybrand-500 outline-none"
                    >
                      {verifiedServices.map((s) => (
                        <option key={s.id} value={s.id}>{s.title[lang]}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <textarea
                      rows="2"
                      placeholder={lang === 'am' ? 'ተጨማሪ ማስታወሻ (አስፈላጊ ከሆነ)...' : 'Brief message or notes...'}
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-base focus:ring-2 focus:ring-skybrand-500 outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-base shadow-sm transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'am' ? 'መልእክት ላክ' : 'Send Request'}</span>
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column: Google Maps Location Embed */}
          <div className="lg:col-span-6 bg-slate-900 rounded-3xl overflow-hidden shadow-md border border-slate-800 flex flex-col justify-between text-white">
            
            <div className="relative h-72 sm:h-80 w-full bg-slate-800">
              <iframe
                title="Oli Dental Clinic Google Maps Location"
                src={clinicInfo.location.googleMapsEmbedUrl}
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="p-4 sm:p-5 flex items-center justify-between text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-skybrand-400 shrink-0" />
                <span className="font-semibold text-white">{clinicInfo.location.full[lang]}</span>
              </div>
              <a
                href={clinicInfo.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-skybrand-600 hover:bg-skybrand-500 text-white font-bold transition shrink-0 shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>{lang === 'am' ? 'ካርታ' : 'Maps'}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
