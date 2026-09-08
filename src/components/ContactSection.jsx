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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-skybrand-100 text-skybrand-700 text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{lang === 'am' ? 'አድራሻ እና የስልክ ቁጥሮች' : 'Contact & Location'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {lang === 'am' ? 'ኦሊ የጥርስ ሕክምና ክሊኒክን ያግኙ' : 'Get in Touch with Us'}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            {lang === 'am' ? (
              'ለመረጃ ወይም ለቀጠሮ በስልክ ይደውሉ ወይም በመገናኛ ግሬስ ሲቲ ሞል 3ኛ ፎቅ ይጎብኙን።'
            ) : (
              'Call for inquiries or visit our clinic at Grace City Mall, 3rd Floor, Megenagna.'
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
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2 text-skybrand-600 mb-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {lang === 'am' ? 'ስልክ ቁጥሮች' : 'Phone'}
                  </span>
                </div>
                <div className="space-y-0.5">
                  <a href={clinicInfo.phones[0].tel} className="block text-sm font-bold text-slate-900 hover:text-skybrand-600 transition">
                    {clinicInfo.phones[0].display}
                  </a>
                  <a href={clinicInfo.phones[1].tel} className="block text-sm font-bold text-slate-900 hover:text-skybrand-600 transition">
                    {clinicInfo.phones[1].display}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2 text-dental-600 mb-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {lang === 'am' ? 'የስራ ሰዓት' : 'Hours'}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">
                  {clinicInfo.hours.display[lang]}
                </div>
                <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">
                  {lang === 'am' ? 'ከሰኞ እስከ እሑድ በየቀኑ' : 'Open 7 Days a Week'}
                </div>
              </div>

            </div>

            {/* Address Banner */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                  {lang === 'am' ? 'የክሊኒኩ አድራሻ' : 'Clinic Address'}
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900">
                  {clinicInfo.location.full[lang]}
                </p>
              </div>
              <button
                onClick={handleCopy}
                className="shrink-0 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-skybrand-600 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? (lang === 'am' ? 'ተቀድቷል' : 'Copied!') : (lang === 'am' ? 'አድራሻ ቅዳ' : 'Copy')}</span>
              </button>
            </div>

            {/* Direct Inquiry / Booking Form */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-extrabold text-slate-900">
                  {lang === 'am' ? 'የቀጠሮ ማመልከቻ' : 'Quick Appointment Form'}
                </h4>
                <SocialLinksBar iconSize="w-3.5 h-3.5" />
              </div>

              {submitted ? (
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center animate-in zoom-in-95">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-1.5">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h5 className="font-bold text-emerald-900 text-xs sm:text-sm mb-0.5">
                    {lang === 'am' ? 'ማመልከቻዎ ተልኳል' : 'Request Sent!'}
                  </h5>
                  <p className="text-[11px] text-emerald-700 mb-3">
                    {lang === 'am' ? 'እናመሰግናለን። በስልክ ቁጥርዎ ደውለን ቀጠሮዎን እናረጋግጣለን።' : 'Thank you. We will call you shortly to confirm.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-3 py-1 rounded-md bg-emerald-600 text-white text-[11px] font-bold"
                  >
                    {lang === 'am' ? 'አዲስ መልእክት' : 'Reset'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder={lang === 'am' ? 'ስምዎን ያስገቡ *' : 'Full Name *'}
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs focus:ring-2 focus:ring-skybrand-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder={lang === 'am' ? 'ስልክ ቁጥር *' : 'Phone Number *'}
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs focus:ring-2 focus:ring-skybrand-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <select
                      value={inquiryForm.service}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, service: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs focus:ring-2 focus:ring-skybrand-500 outline-none"
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
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs focus:ring-2 focus:ring-skybrand-500 outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{lang === 'am' ? 'ቀጠሮ ይጠይቁ' : 'Submit Appointment Request'}</span>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.547372957199!2d38.79954057589886!3d9.013702189218204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8504f76239f3%3A0xb5b79e6f1406dc57!2sGrace%20City%20Mall!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="p-4 sm:p-5 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-skybrand-400 shrink-0" />
                <span className="font-semibold text-white">Grace City Mall, 3rd Floor, Megenagna</span>
              </div>
              <a
                href={clinicInfo.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-skybrand-600 hover:bg-skybrand-500 text-white font-bold transition shrink-0"
              >
                <Navigation className="w-3 h-3" />
                <span>{lang === 'am' ? 'ካርታ' : 'Maps'}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
