import React from 'react';
import { 
  Code2, 
  Cpu, 
  Layers, 
  Smartphone, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Globe 
} from 'lucide-react';
import { technologyStack } from '../data/clinicData';

export default function TechnologySection({ lang = 'am' }) {
  const iconList = [Code2, Zap, Layers, Smartphone, Sparkles, Globe];

  return (
    <section id="technology" className="py-16 lg:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-skybrand-50 border border-skybrand-200/80 text-skybrand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-skybrand-600" />
            <span>{lang === 'am' ? 'የድረ-ገጹ የቴክኖሎጂ መዋቅር' : 'Website Technology Stack'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            {lang === 'am' ? 'ድረ-ገጹን ለመገንባት ጥቅም ላይ የዋሉ ቴክኖሎጂዎች' : 'Modern & Reliable Web Technologies'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {lang === 'am' ? (
              'የኦሊ የጥርስ ሕክምና ክሊኒክ ድረ-ገጽ ፈጣን፣ ደህንነቱ የተጠበቀ፣ ለስልኮች ምቹ እና ተደራሽ በሆኑ ዘመናዊ ቴክኖሎጂዎች የተገነባ ነው።'
            ) : (
              'Built with a modern, responsive, and performance-optimized architecture designed for seamless user experience across all devices.'
            )}
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologyStack.map((tech, idx) => {
            const IconComp = iconList[idx % iconList.length];
            return (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-3xl p-6 border border-slate-200/80 hover:bg-white hover:border-skybrand-300 hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 text-skybrand-600 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-skybrand-600 group-hover:to-dental-500 group-hover:text-white transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700 font-mono text-[11px] font-bold">
                      {tech.badge}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-skybrand-600 block mb-1">
                    {tech.category[lang]}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {tech.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {tech.description[lang]}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{lang === 'am' ? 'በዚህ ፕሮጀክት ላይ በትክክል ጥቅም ላይ ውሏል' : 'Implemented in this project'}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
