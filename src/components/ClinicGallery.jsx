import React, { useState, useRef, useEffect } from 'react';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { clinicGalleryPhotos } from '../data/clinicData';

export default function ClinicGallery({ lang = 'am' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = clinicGalleryPhotos.length;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  return (
    <section id="gallery" className="py-14 lg:py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-skybrand-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-skybrand-400 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider mb-2.5">
            <Camera className="w-4 h-4" />
            <span>{lang === 'am' ? 'የክሊኒካችን ፎቶዎች' : 'Clinic Photo Showcase'}</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {lang === 'am' ? 'ኦሊ የጥርስ ሕክምና ክሊኒክን በፎቶ ይመልከቱ' : 'Experience Our Modern Dental Clinic'}
          </h2>
          <p className="font-sans text-slate-300 text-base sm:text-lg mt-2 leading-relaxed">
            {lang === 'am' ? (
              'ንጹህ፣ ምቹ እና በዘመናዊ የጥርስ ሕክምና ቁሳቁሶች የተሟላ ክሊኒክ በመገናኛ ግሬስ ሲቲ ሞል 3ኛ ፎቅ።'
            ) : (
              'Explore our sanitized treatment operatories, reception lounge, and clinical facilities at Grace City Mall, Megenagna.'
            )}
          </p>
        </div>

        {/* 3D Coverflow Card Carousel Container */}
        <div 
          className="relative max-w-5xl mx-auto h-[420px] sm:h-[460px] flex items-center justify-center select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800/90 hover:bg-skybrand-600 text-white border border-slate-700 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800/90 hover:bg-skybrand-600 text-white border border-slate-700 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Cards Stack */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {clinicGalleryPhotos.map((photo, index) => {
              // Calculate offset relative to activeIndex
              let offset = index - activeIndex;
              if (offset < -Math.floor(total / 2)) offset += total;
              if (offset > Math.floor(total / 2)) offset -= total;

              const isActive = offset === 0;
              const isPrev = offset === -1;
              const isNext = offset === 1;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              // Responsive positioning and 3D coverflow styling
              let translateX = '0%';
              let scale = 1;
              let zIndex = 30;
              let opacity = 1;
              let rotateY = '0deg';

              if (isActive) {
                translateX = '0%';
                scale = 1;
                zIndex = 30;
                opacity = 1;
                rotateY = '0deg';
              } else if (isPrev) {
                translateX = '-55%';
                scale = 0.88;
                zIndex = 20;
                opacity = 0.75;
                rotateY = '12deg';
              } else if (isNext) {
                translateX = '55%';
                scale = 0.88;
                zIndex = 20;
                opacity = 0.75;
                rotateY = '-12deg';
              } else if (offset === -2) {
                translateX = '-95%';
                scale = 0.76;
                zIndex = 10;
                opacity = 0.35;
                rotateY = '20deg';
              } else if (offset === 2) {
                translateX = '95%';
                scale = 0.76;
                zIndex = 10;
                opacity = 0.35;
                rotateY = '-20deg';
              }

              return (
                <div
                  key={photo.id}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    transform: `translateX(${translateX}) scale(${scale}) perspective(1000px) rotateY(${rotateY})`,
                    zIndex: zIndex,
                    opacity: opacity,
                  }}
                  className="absolute transition-all duration-500 ease-out cursor-pointer w-[280px] sm:w-[330px] md:w-[350px] shrink-0"
                >
                  {/* Clean White Card with Photo on Top & Details on Bottom */}
                  <div className={`bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 border ${
                    isActive ? 'border-skybrand-400 ring-4 ring-skybrand-500/20' : 'border-slate-200/40'
                  }`}>
                    
                    {/* Photo Top Frame */}
                    <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                      <img
                        src={photo.image}
                        alt={photo.title[lang]}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none"></div>

                      {/* Tag pill */}
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-skybrand-600 to-dental-600 text-white font-heading font-bold text-[10px] sm:text-xs px-3 py-1 rounded-full shadow-md">
                        {photo.tag[lang]}
                      </div>
                    </div>

                    {/* Card Content Bottom */}
                    <div className="p-4 sm:p-5 text-left bg-white">
                      <h4 className="font-heading font-extrabold text-slate-900 text-base leading-snug">
                        {photo.title[lang]}
                      </h4>
                      <p className="font-sans text-slate-600 text-sm mt-1 line-clamp-1">
                        {photo.subtitle[lang]}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Dots Pagination */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {clinicGalleryPhotos.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveIndex(dotIdx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                dotIdx === activeIndex 
                  ? 'w-7 bg-skybrand-400' 
                  : 'w-2 bg-slate-700 hover:bg-slate-600'
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
