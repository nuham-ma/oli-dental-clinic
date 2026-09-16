import React from 'react';
import { 
  CheckCircle2, 
  ExternalLink,
  MapPin,
  ShieldCheck
} from 'lucide-react';
import { reviewsSummary, clinicInfo } from '../data/clinicData';

export default function ReviewsSection({ lang = 'am' }) {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-skybrand-100 text-skybrand-700 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider mb-3">
            <span>{lang === 'am' ? 'የታካሚዎች አስተያየት እና ደረጃ' : 'Patient Rating & Reviews'}</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            {lang === 'am' ? 'በጉግል ተጠቃሚዎች 4.9 / 5.0 ደረጃ የተሰጠው ክሊኒክ' : 'Rated 4.9 / 5.0 on Google Reviews'}
          </h2>
          <p className="font-sans text-slate-700 text-base sm:text-lg leading-relaxed">
            {lang === 'am' ? (
              'በጉግል ማፕ እና ሰርች ላይ ከ 47 ትክክለኛ ታካሚዎች በተሰጠ አስተያየት ከፍተኛ እርካታ የተመዘገበበት።'
            ) : (
              'Based on 47 verified public patient reviews on Google Maps and Google Search.'
            )}
          </p>
        </div>

        {/* Verified Google Reviews Showcase Card */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-soft max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Score Box */}
            <div className="md:col-span-5 flex flex-col items-center justify-center text-center p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="font-heading text-5xl sm:text-6xl font-black text-slate-900 tracking-tight mb-1">
                {reviewsSummary.rating}
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-heading font-bold text-sm my-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'am' ? 'ከፍተኛ የታካሚ እርካታ' : 'Top Patient Satisfaction'}</span>
              </div>

              <div className="font-heading text-base sm:text-lg font-bold text-slate-900 mb-1">
                {reviewsSummary.totalCount} {lang === 'am' ? 'የጉግል አስተያየቶች' : 'Google Reviews'}
              </div>

              <span className="font-sans text-sm text-slate-500 mb-5">
                {lang === 'am' ? 'ኦፊሴላዊ የጉግል ቢዝነስ ፕሮፋይል' : 'Official Google Business Profile'}
              </span>

              <a
                href={reviewsSummary.googleMapsReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm sm:text-base font-heading font-bold transition shadow-sm"
              >
                <span>{lang === 'am' ? 'ሁሉንም አስተያየቶች በጉግል ይመልከቱ' : 'View All Reviews on Google'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Right Verified Information Panel */}
            <div className="md:col-span-7 space-y-4">
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-skybrand-50 text-skybrand-600 flex items-center justify-center font-bold shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-slate-900 text-base sm:text-lg">
                      {lang === 'am' ? 'እውነተኛ እና የተረጋገጠ ደረጃ' : 'Authentic & Verified Feedback'}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-slate-600 mt-1 leading-relaxed">
                      {lang === 'am' ? (
                        'ይህ ደረጃ በቀጥታ ከጉግል ማፕ የተገኘ ትክክለኛ መረጃ ሲሆን፣ በክሊኒካችን የታከሙ ሰዎች የሰጡትን አስተያየት ያሳያል።'
                      ) : (
                        'This rating directly reflects authentic feedback submitted by real patients on Google Maps.'
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-dental-50 text-dental-600 flex items-center justify-center font-bold shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-slate-900 text-base sm:text-lg">
                      {clinicInfo.name[lang]}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-slate-600 mt-1 leading-relaxed">
                      {clinicInfo.location.full[lang]}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-1 flex items-center gap-2 text-sm text-slate-600 font-sans">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {lang === 'am' ? 'መረጃዎች ከትክክለኛ የጉግል ማፕ ፕሮፋይል የተወሰዱ ናቸው' : 'Verified Google Maps & Business Profile Data'}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
