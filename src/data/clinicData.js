/**
 * ============================================================================
 * OLI DENTAL CLINIC - MASTER CLINIC DATA & BILINGUAL CONTENT
 * ============================================================================
 * Verified clinic data for Oli Dental Clinic (Megenagna, Addis Ababa).
 * Natural Amharic (default) and English.
 * Zero emojis, zero fake claims, zero fake doctors.
 * ============================================================================
 */

export const clinicInfo = {
  name: {
    am: "ኦሊ የጥርስ ሕክምና ክሊኒክ",
    en: "Oli Dental Clinic"
  },
  slogan: {
    am: "ዘመናዊ የጥርስ ሕክምና፣ ታማኝ አገልግሎት",
    en: "Modern Dentistry, Classic Values"
  },
  tagline: {
    am: "ዘመናዊ የጥርስ ሕክምና አገልግሎት",
    en: "Modern Dental Care"
  },
  googleRating: {
    score: "4.9",
    totalReviews: "47",
    source: "Google Reviews",
    amText: "4.9 ከ 47 የጉግል አስተያየቶች",
    enText: "4.9 from 47 Google reviews"
  },
  location: {
    full: {
      am: "መገናኛ፣ ግሬስ ሲቲ ሞል፣ 3ኛ ፎቅ፣ አዲስ አበባ",
      en: "Megenagna, Grace City Mall, 3rd Floor, Addis Ababa"
    },
    short: {
      am: "መገናኛ፣ ግሬስ ሲቲ ሞል",
      en: "Megenagna, Grace City Mall"
    },
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Oli+Dental+Clinic+Grace+City+Mall+Megenagna+Addis+Ababa&t=&z=16&ie=UTF8&iwloc=&output=embed",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Oli+Dental+Clinic+Megenagna+Grace+City+Mall+Addis+Ababa"
  },
  hours: {
    display: {
      am: "ከሰኞ – እሑድ፡ ከጠዋቱ 3:00 – ማታ 12:30",
      en: "Monday – Sunday: 9:00 AM – 6:30 PM"
    },
    short: {
      am: "ከሰኞ – እሑድ፡ ከጠዋቱ 3:00 – ማታ 12:30",
      en: "Mon – Sun: 9:00 AM – 6:30 PM"
    }
  },
  phones: [
    {
      display: "+251 942 438 888",
      raw: "+251942438888",
      tel: "tel:+251942438888"
    },
    {
      display: "+251 966 263 667",
      raw: "+251966263667",
      tel: "tel:+251966263667"
    }
  ],
  socialMedia: {
    instagram: "https://www.instagram.com/olidentalclinic",
    facebook: "https://www.facebook.com/profile.php?id=100083702157213",
    tiktok: "https://vm.tiktok.com/ZS9B6PRP5qDeJ-lD84Z/"
  },
  photos: {
    logo: "/images/logo.jpg",
    heroExterior: "/images/reception.jpg",
    treatmentRoom: "/images/interior1.jpg",
    dentistTreatment: "/images/doctor.jpg",
    receptionLobby: "/images/interior2.jpg",
    instruments: "/images/instrument.jpg"
  }
};

/**
 * 5 Verified Services using the exact requested image files:
 * - Braces -> teeth_before.jpg & teeth_after.jpg
 * - Teeth Cleaning -> teethcleaning.jpg
 * - Dental Filling -> dental-filling_before.jpg & dental_after.jpg
 * - Zirconia Crown -> zicronia_before.jpg & zicronia_after.jpg
 * - Other Dental Care Services -> instrument.jpg
 */
export const verifiedServices = [
  {
    id: "braces",
    number: "01",
    isDualImage: true,
    title: {
      am: "የጥርስ ማስተካከያ (Braces)",
      en: "Braces & Orthodontics"
    },
    shortDesc: {
      am: "ያልተስተካከሉ፣ የተነባበሩ ወይም ክፍተት ያላቸውን ጥርሶች በዘመናዊ የጥርስ ማስተካከያ ደረጃውን በጠበቀ መልኩ ማስተካከል።",
      en: "Precision alignment for crowded, spaced, or irregular teeth using modern orthodontic brackets to create a confident, healthy smile."
    },
    beforeImage: "/images/teeth_before.jpg",
    afterImage: "/images/teeth_after.jpg",
    image: "/images/teeth_before.jpg",
    alt: "Orthodontic braces treatment"
  },
  {
    id: "teeth-cleaning",
    number: "02",
    isDualImage: false,
    title: {
      am: "የጥርስ ማጽዳት (Teeth Cleaning)",
      en: "Teeth Cleaning & Scaling"
    },
    shortDesc: {
      am: "በጥርስ እና ድድ ላይ የሚከማቸውን ቆሻሻ እና ካልኩለስ በዘመናዊ አልትራሶኒክ መሳሪያ በማስወገድ የድድ ጤንነትን መጠበቅ እና የአፍ ጠረንን ማደስ።",
      en: "Ultrasonic scaling and polishing to remove plaque, calculus buildup, and stains while protecting long-term gum vitality."
    },
    image: "/images/teethcleaning.jpg",
    alt: "Ultrasonic teeth cleaning procedure"
  },
  {
    id: "dental-filling",
    number: "03",
    isDualImage: true,
    title: {
      am: "የጥርስ ሙሌት (Dental Filling)",
      en: "Tooth-Colored Dental Filling"
    },
    shortDesc: {
      am: "በመበስበስ ወይም በስብራት የተጎዱ ጥርሶችን ከተፈጥሮ ጥርስ ቀለም ጋር በሚመሳሰል ጠንካራ እና ጥራት ባለው ንጥረ ነገር በጥንቃቄ መሙላት።",
      en: "High-strength composite dental fillings that match your natural tooth shade, restoring full structure and stopping decay."
    },
    beforeImage: "/images/dental-filling_before.jpg",
    afterImage: "/images/dental_after.jpg",
    image: "/images/dental-filling.jpg",
    alt: "Tooth-colored composite dental filling"
  },
  {
    id: "zirconia-crown",
    number: "04",
    isDualImage: true,
    title: {
      am: "የዚርኮኒያ ጥርስ ሽፋን (Zirconia Crown)",
      en: "Zirconia Crowns"
    },
    shortDesc: {
      am: "የተጎዱ ወይም የተሰበሩ ጥርሶችን በተፈጥሮ ጥርስ መልክ እና ከፍተኛ ጥንካሬ ባለው ጥራት ያለው የዚርኮኒያ ሽፋን ወደ ቀድሞ ጥንካሬያቸው እና ውበታቸው መመለስ።",
      en: "Ultra-durable, biocompatible zirconia crowns providing authentic tooth translucency and long-lasting chewing strength."
    },
    beforeImage: "/images/zicronia_before.jpg",
    afterImage: "/images/zicronia_after.jpg",
    image: "/images/zicronia.jpg",
    alt: "Aesthetic zirconia dental crown"
  },
  {
    id: "other-services",
    number: "05",
    isDualImage: false,
    title: {
      am: "አጠቃላይ የጥርስ ሕክምና አገልግሎቶች",
      en: "Comprehensive Dental Care"
    },
    shortDesc: {
      am: "የጥርስ እና የአፍ ምርመራ፣ የጥርስ ማውጣት፣ እና የተለያዩ የጥርስ ጤና አጠባበቅ አገልግሎቶች በዘመናዊ እና ንጹህ የህክምና መሳሪያዎች።",
      en: "Full oral diagnostic checkups, gentle extractions, preventative care, and specialized treatments for the entire family."
    },
    image: "/images/instrument.jpg",
    alt: "Sterilized dental instrumentation and general oral care"
  }
];

export const reviewsSummary = {
  rating: "4.9",
  totalCount: "47",
  source: "Google Reviews",
  googleMapsReviewUrl: "https://www.google.com/maps/search/?api=1&query=Oli+Dental+Clinic+Megenagna+Grace+City+Mall+Addis+Ababa"
};

/**
 * Authentic Oli Dental Clinic photos for the 3D Coverflow Carousel
 */
export const clinicGalleryPhotos = [
  {
    id: 1,
    image: "/images/reception.jpg",
    title: {
      am: "የክሊኒኩ ዋና መስተንግዶ",
      en: "Oli Dental Reception"
    },
    subtitle: {
      am: "ዘመናዊ እና ምቹ የመስተንግዶ አዳራሽ",
      en: "Modern & welcoming reception"
    },
    tag: {
      am: "መስተንግዶ",
      en: "Reception"
    }
  },
  {
    id: 2,
    image: "/images/interior1.jpg",
    title: {
      am: "ዘመናዊ የጥርስ ሕክምና ክፍል",
      en: "Treatment Room"
    },
    subtitle: {
      am: "ዘመናዊ እና ምቹ የህክምና ክፍል",
      en: "Modern and comfortable treatment room"
    },
    tag: {
      am: "የህክምና ክፍል",
      en: "Treatment Room"
    }
  },
  {
    id: 3,
    image: "/images/interior2.jpg",
    title: {
      am: "የታካሚዎች ማረፊያ አዳራሽ",
      en: "Patient Waiting Lounge"
    },
    subtitle: {
      am: "ጸጥ ያለ እና ምቹ የታካሚዎች ማረፊያ",
      en: "Comfortable and welcoming waiting area"
    },
    tag: {
      am: "ማረፊያ",
      en: "Lounge"
    }
  }
];