import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ReviewsSection from './components/ReviewsSection';
import ClinicGallery from './components/ClinicGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import EmergencyBanner from './components/EmergencyBanner';
import AppointmentModal from './components/AppointmentModal';

export default function App() {
  // Default language is Amharic ('am') with instant English ('en') toggle
  const [lang, setLang] = useState('am');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState({});

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const handleOpenBooking = (prefillData = {}) => {
    setBookingPrefill(prefillData);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingPrefill({});
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-skybrand-100 selection:text-skybrand-900 font-sans antialiased overflow-x-hidden w-full relative">
      {/* 1. Navbar */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        onOpenBooking={handleOpenBooking} 
      />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* 2. Hero */}
        <Hero 
          lang={lang} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* 3. About / Clinic Introduction */}
        <AboutSection 
          lang={lang} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* 4. Services (Horizontal Alternating Editorial Layout) */}
        <ServicesSection 
          lang={lang} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* 5. Reviews (Google 4.9 from 47 reviews) */}
        <ReviewsSection 
          lang={lang} 
        />

        {/* 6. Clinic Photos (Compact Horizontal Carousel) */}
        <ClinicGallery 
          lang={lang} 
        />

        {/* 7. Contact + Google Maps */}
        <ContactSection 
          lang={lang} 
          onOpenBooking={handleOpenBooking} 
        />
      </main>

      {/* 8. Minimal Footer */}
      <Footer 
        lang={lang} 
      />

      {/* Floating Call & Booking Action */}
      <EmergencyBanner 
        lang={lang} 
        onOpenBooking={handleOpenBooking} 
      />

      {/* Appointment Request Modal */}
      <AppointmentModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
        initialData={bookingPrefill}
        lang={lang}
      />
    </div>
  );
}
