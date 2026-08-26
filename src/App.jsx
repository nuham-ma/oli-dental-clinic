import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import ClinicGallery from './components/ClinicGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import EmergencyBanner from './components/EmergencyBanner';
import AppointmentModal from './components/AppointmentModal';

export default function App() {
  // Default language is Amharic ('am') as requested, with instant toggle to English ('en')
  const [lang, setLang] = useState('am');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState({});

  const handleOpenBooking = (prefillData = {}) => {
    setBookingPrefill(prefillData);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingPrefill({});
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col selection:bg-skybrand-100 selection:text-skybrand-900 font-sans">
      {/* Navigation */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        onOpenBooking={handleOpenBooking} 
      />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Photo 1: Hero Section with Clinic Exterior */}
        <Hero 
          lang={lang} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* Photo 2: About Clinic with Treatment Room / Dental Chair */}
        <AboutSection 
          lang={lang} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* Photo 3: 5 Verified Services + Dentist & Patient Treatment Photo */}
        <ServicesSection 
          lang={lang} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* Why Choose Us: 4.9/5 Google Rating & Strict Standards */}
        <WhyChooseUs 
          lang={lang} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* Real Photo Gallery of Oli Dental Clinic */}
        <ClinicGallery 
          lang={lang} 
        />

        {/* Contact & Location: Grace City Mall 3rd Floor, Verified Phones & Social */}
        <ContactSection 
          lang={lang} 
          onOpenBooking={handleOpenBooking} 
        />
      </main>

      {/* Footer with Verified Social Links */}
      <Footer 
        lang={lang} 
        onOpenBooking={handleOpenBooking} 
      />

      {/* Floating Action Banner */}
      <EmergencyBanner 
        lang={lang} 
        onOpenBooking={handleOpenBooking} 
      />

      {/* Booking Modal */}
      <AppointmentModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
        initialData={bookingPrefill}
        lang={lang}
      />
    </div>
  );
}
