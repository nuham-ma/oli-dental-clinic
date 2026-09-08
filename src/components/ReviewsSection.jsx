import React from 'react';
import { 
  Star, 
  CheckCircle2, 
  ExternalLink
} from 'lucide-react';
import { reviewsSummary } from '../data/clinicData';

export default function ReviewsSection({ lang = 'am' }) {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>{lang === 'am' ? 'የታካሚዎች አስተያየት እና ደረጃ' : 'Patient Rating & Reviews'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            {lang === 'am' ? 'በጉግል ተጠቃሚዎች 4.9 / 5.0 ደረጃ የተሰጠው ክሊኒክ' : 'Rated 4.9 / 5.0 on Google Reviews'}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            {lang === 'am' ? (
              'ከ 47 ትክክለኛ የጉግል ታካሚ አስተያየቶች የተገኘ ከፍተኛ እርካታ እና ደረጃ።'
            ) : (
              'Based on 47 verified patient reviews on Google Maps and Search.'
            )}
          </p>
        </div>

        {/* Reviews Summary Showcase Card */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-soft max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
            
            {/* Left Score Box */}
            <div className="sm:col-span-5 flex flex-col items-center justify-center text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">
                {reviewsSummary.rating}
              </div>
              
              <div className="flex items-center gap-1 text-amber-400 my-2.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              <div className="text-xs sm:text-sm font-bold text-slate-700 mb-1">
                {reviewsSummary.totalCount} {lang === 'am' ? 'የጉግል አስተያየቶች' : 'Google Reviews'}
              </div>

              <a
                href={reviewsSummary.googleMapsReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition"
              >
                <span>{lang === 'am' ? 'በጉግል ላይ ይመልከቱ' : 'View on Google Maps'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Right Review Metrics Breakdown */}
            <div className="sm:col-span-7 space-y-3.5">
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                {lang === 'am' ? 'የአገልግሎት እርካታ መለኪያዎች' : 'Verified Quality Metrics'}
              </h3>

              <div className="space-y-3">
                {reviewsSummary.metrics[lang].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>{item.label}</span>
                      <span className="font-mono text-skybrand-600">{item.score} / 5.0</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-skybrand-500 to-dental-500 rounded-full"
                        style={{ width: `${(parseFloat(item.score) / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-dental-500 shrink-0" />
                <span>{lang === 'am' ? 'መረጃዎች ከትክክለኛ የጉግል ማፕ አስተያየቶች የተወሰዱ ናቸው' : 'Aggregated from Google Business Profile'}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
