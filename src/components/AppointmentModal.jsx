import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  User, 
  Phone, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { verifiedServices, clinicInfo } from '../data/clinicData';

export default function AppointmentModal({ isOpen, onClose, initialData = {}, lang = 'am' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    serviceId: initialData.serviceId || 'braces',
    date: initialData.date || '',
    timePreference: 'morning',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialData.serviceId) {
      setFormData(prev => ({ ...prev, serviceId: initialData.serviceId }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      setErrorMsg(lang === 'am' ? 'እባክዎ ሙሉ ስምዎን እና ስልክ ቁጥርዎን ያስገቡ።' : 'Please provide your full name and phone number.');
      return;
    }
    setErrorMsg('');
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 my-8 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-skybrand-600 via-skybrand-700 to-dental-700 p-6 text-white relative">
          <button
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-skybrand-200 text-xs font-bold uppercase tracking-wider mb-1">
            <Calendar className="w-4 h-4" />
            <span>{lang === 'am' ? 'የቀጠሮ ማመልከቻ' : 'Appointment Request'}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            {lang === 'am' ? 'በኦሊ የጥርስ ሕክምና ክሊኒክ ቀጠሮ ያስይዙ' : 'Schedule a Visit at Oli Dental'}
          </h3>
          <p className="text-skybrand-100 text-xs mt-1">
            {clinicInfo.slogan[lang]} • {clinicInfo.location.short[lang]}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            /* Confirmation Screen */
            <div className="text-center py-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-dental-100 text-dental-600 mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="text-xl font-extrabold text-slate-900 mb-2">
                {lang === 'am' ? 'የቀጠሮ ማመልከቻዎ ደርሶናል' : 'Appointment Request Received!'}
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm mb-6 max-w-sm mx-auto">
                {lang === 'am' ? (
                  <>እናመሰግናለን <strong>{formData.fullName}</strong>። የክሊኒካችን ቡድን በስልክ ቁጥር <strong>{formData.phone}</strong> ደውሎ ቀጠሮዎን ያረጋግጣል።</>
                ) : (
                  <>Thank you, <strong>{formData.fullName}</strong>. Our clinic team will call you at <strong>{formData.phone}</strong> to confirm your appointment time.</>
                )}
              </p>

              {/* Direct call options */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-2 mb-6">
                <span className="font-bold text-slate-700 block">
                  {lang === 'am' ? 'አስቸኳይ ጥያቄ ካለዎት በቀጥታ ይደውሉ:' : 'For direct assistance, call us at:'}
                </span>
                <div className="flex flex-col sm:flex-row justify-center gap-2">
                  <a href={clinicInfo.phones[0].tel} className="font-bold text-skybrand-600 hover:underline">
                    {clinicInfo.phones[0].display}
                  </a>
                  <span className="hidden sm:inline text-slate-400">/</span>
                  <a href={clinicInfo.phones[1].tel} className="font-bold text-skybrand-600 hover:underline">
                    {clinicInfo.phones[1].display}
                  </a>
                </div>
              </div>

              <button
                onClick={handleResetAndClose}
                className="px-8 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition shadow-sm"
              >
                {lang === 'am' ? 'እሺ፣ ተጠናቋል' : 'Done'}
              </button>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'am' ? 'ሙሉ ስም *' : 'Full Name *'}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder={lang === 'am' ? 'ስምዎን ያስገቡ' : 'Your full name'}
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-skybrand-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'am' ? 'ስልክ ቁጥር *' : 'Phone Number *'}
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+251 9..."
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-skybrand-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'am' ? 'የሚፈልጉት የጥርስ ሕክምና አገልግሎት' : 'Dental Service'}
                </label>
                <select
                  name="serviceId"
                  value={formData.serviceId}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:ring-2 focus:ring-skybrand-500 outline-none"
                >
                  {verifiedServices.map(s => (
                    <option key={s.id} value={s.id}>{s.title[lang]}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'am' ? 'የሚመርጡት ቀን' : 'Preferred Date'}
                  </label>
                  <input
                    type="date"
                    name="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-skybrand-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'am' ? 'የስራ ሰዓት ምርጫ' : 'Preferred Time'}
                  </label>
                  <select
                    name="timePreference"
                    value={formData.timePreference}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:ring-2 focus:ring-skybrand-500 outline-none"
                  >
                    <option value="morning">{lang === 'am' ? 'ጠዋት (09:00 - 13:00)' : 'Morning (09:00 AM - 01:00 PM)'}</option>
                    <option value="afternoon">{lang === 'am' ? 'ከሰዓት (13:00 - 18:30)' : 'Afternoon (01:00 PM - 06:30 PM)'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'am' ? 'ተጨማሪ ማስታወሻ (አስፈላጊ ከሆነ)' : 'Notes / Concerns (Optional)'}
                </label>
                <textarea
                  name="notes"
                  rows="2"
                  placeholder={lang === 'am' ? 'ተጨማሪ መረጃ ካለዎት እዚህ ይጥቀሱ...' : 'Brief notes or questions...'}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:ring-2 focus:ring-skybrand-500 outline-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-skybrand-600 to-dental-500 hover:from-skybrand-700 hover:to-dental-600 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{lang === 'am' ? 'የቀጠሮ ማመልከቻ አስገባ' : 'Submit Appointment Request'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
