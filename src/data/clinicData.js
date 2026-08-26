/**
 * ============================================================================
 * OLI DENTAL CLINIC - VERIFIED MASTER DATA & BILINGUAL CONTENT
 * ============================================================================
 * Accurate, verified information for Oli Dental Clinic (Addis Ababa, Ethiopia).
 * Natural Amharic (default) and English translations.
 * Strictly uses authentic clinic photos without stretching or distortion.
 * ============================================================================
 */
import teethcleaning from "../assets/teethcleaning.jpg";
import reception from "../assets/reception.jpg";
import interior1 from "../assets/interior1.jpg";
import doctor from "../assets/doctor.jpg";
import interior2 from "../assets/interior2.jpg";
import brace from "../assets/brace.jpg";
import instrument from "../assets/instrument.jpg";
import filling from "../assets/filling.jpg";
import zirconiya from "../assets/zirconiya.jpg";
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
    stars: 5,
    source: "Google Reviews",
    amText: "4.9 ከ 47 የጉግል አስተያየቶች",
    enText: "4.9 from 47 Google reviews"
  },
  location: {
    full: {
      am: "መገናኛ፣ ግሬስ ሲቲ ሞል፣ 3ኛ ፎቅ፣ አዲስ አበባ፣ ኢትዮጵያ",
      en: "Megenagna, Grace City Mall, 3rd Floor, Addis Ababa, Ethiopia"
    },
    short: {
      am: "መገናኛ፣ ግሬስ ሲቲ ሞል፣ 3ኛ ፎቅ",
      en: "Megenagna, Grace City Mall, 3rd Floor"
    },
    city: "Addis Ababa, Ethiopia",
    googleMapsUrl: "https://maps.google.com/?q=Grace+City+Mall+Megenagna+Addis+Ababa"
  },
  hours: {
    display: {
      am: "ከሰኞ – እሑድ፡ 09:00 – 18:30 (በየቀኑ)",
      en: "Monday – Sunday: 09:00 – 18:30 (Daily)"
    },
    detailed: {
      am: "ከሰኞ እስከ እሑድ ከጠዋቱ 09:00 እስከ ምሽቱ 18:30 በየቀኑ ክፍት ነው",
      en: "Open Monday through Sunday from 09:00 to 18:30 daily"
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
    // 1. Clinic Exterior / Reception Sign (Hero image)
    heroExterior: "/images/reception.jpg",
    heroAlt: "/images/hero.png",
    
    // 2. Treatment Room / Dental Chair (About / Why Choose Us)
    treatmentRoom: "/images/interior1.jpg",
    treatmentChairAlt: "/images/dental.jpg",
    
    // 3. Dentist / Patient Treatment Photo (Services / Trust)
    dentistTreatment: "/images/doctor.jpg",
    patientCareAlt: "/images/dental2.jpg",
    
    // Facility & lobby photos
    receptionLobby: "/images/interior2.jpg",
    instruments: "/images/instrument.jpg"
  }
};

export const verifiedServices = [
  {
    id: "braces",
    title: {
      am: "የጥርስ ማስተካከያ (Braces)",
      en: "Braces (Orthodontics)"
    },
    shortDesc: {
      am: "ያልተስተካከሉ፣ የተነባበሩ ወይም ክፍተት ያላቸውን ጥርሶች በዘመናዊ የጥርስ ማስተካከያ (Braces) ደረጃውን በጠበቀ መልኩ ማስተካከል።",
      en: "Professional orthodontic alignment for crooked teeth, gaps, and bite correction using high-quality modern braces."
    },
    image: brace,
    features: {
      am: [
        "ለተስተካከለ እና ማራኪ ፈገግታ",
        "የጥርስ ንክሻ እና አቀማመጥን የሚያስተካክል",
        "ለህፃናት እና ለአዋቂዎች ተስማሚ"
      ],
      en: [
        "Creates a straight and confident smile",
        "Corrects dental bite and jaw alignment",
        "Customized treatment for adults & teens"
      ]
    }
  },
  {
    id: "teeth-cleaning",
    title: {
      am: "የጥርስ ማጽዳት (Teeth Cleaning)",
      en: "Teeth Cleaning (Scaling & Polishing)"
    },
    shortDesc: {
      am: "በጥርስ ላይ የሚፈጠረውን ቆሻሻ (Tartar & Plaque) በዘመናዊ አልትራሶኒክ መሳሪያ በማስወገድ ጤናማ ድድ እና ንጹህ ጥርስ ማረጋገጥ።",
      en: "Thorough professional cleaning and ultrasonic scaling to remove plaque, tartar buildup, and prevent gum disease."
    },
    image: teethcleaning,
    features: {
      am: [
        "የጥርስ እና የድድ ጤንነትን መጠበቅ",
        "የአፍ ጠረንን ማስተካከል",
        "ቀለል ባለ እና ምቹ በሆነ አሰራር"
      ],
      en: [
        "Prevents gum disease and dental decay",
        "Restores fresh breath and tooth smoothness",
        "Gentle ultrasonic cleaning procedure"
      ]
    }
  },
  {
    id: "dental-filling",
    title: {
      am: "የጥርስ ሙሌት (Dental Filling)",
      en: "Dental Filling"
    },
    shortDesc: {
      am: "በመበስበስ ወይም በስብራት የተጎዱ ጥርሶችን በተፈጥሯዊ የጥርስ ቀለም በሚመሳሰል ጥራት ባለው ንጥረ ነገር መሙላት እና ማዳን።",
      en: "Tooth-colored, durable composite fillings to restore decayed or broken teeth and preserve natural dental structure."
    },
    image: filling,
    features: {
      am: [
        "ከተፈጥሮ ጥርስ ቀለም ጋር የሚመሳሰል",
        "የጥርስ ህመምን እና ተጨማሪ ጉዳትን የሚከላከል",
        "የጥርስን ጠንካራነት እና ተግባር የሚመልስ"
      ],
      en: [
        "Natural tooth-colored composite material",
        "Stops cavity progression and sensitivity",
        "Restores full chewing strength"
      ]
    }
  },
  {
    id: "zirconia-crown",
    title: {
      am: "የዚርኮኒያ ጥርስ ሽፋን (Zirconia Crown)",
      en: "Zirconia Crown"
    },
    shortDesc: {
      am: "ከፍተኛ ጥንካሬ እና የተፈጥሮ ውበት ባለው የዚርኮኒያ ቁሳቁስ የተሰሩ የጥርስ ሽፋኖች (Crowns) ለረጅም ጊዜ አገልግሎት።",
      en: "Ultra-durable, premium aesthetic zirconia crowns providing natural translucency and superior long-term strength."
    },
    image: zirconiya,
    features: {
      am: [
        "እጅግ በጣም ጠንካራ እና የማይሰበር",
        "ተፈጥሯዊ እና ማራኪ ውበት ያለው",
        "ለተጎዱ ወይም ለተሰበሩ ጥርሶች አስተማማኝ መፍትሄ"
      ],
      en: [
        "Exceptional biocompatibility and durability",
        "Seamless natural aesthetic appearance",
        "Long-lasting protection for damaged teeth"
      ]
    }
  },
  {
    id: "other-services",
    title: {
      am: "ሌሎች የጥርስ ሕክምና አገልግሎቶች",
      en: "Other Dental Care Services"
    },
    shortDesc: {
      am: "አጠቃላይ የጥርስ ምርመራ፣ የጥርስ ማውጣት፣ እና የተለያዩ የጥርስ ጤና አጠባበቅ አገልግሎቶች በሙሉ በክሊኒካችን ያገኛሉ።",
      en: "Comprehensive oral examinations, gentle extractions, preventative care, and specialized dental treatments."
    },
    image: instrument,
    features: {
      am: [
        "ጥልቅ የጥርስ እና የአፍ ምርመራ",
        "ደረጃቸውን የጠበቁ ንጹህ የህክምና መሳሪያዎች",
        "ለቤተሰብ አባላት ሁሉ የተሟላ የህክምና እንክብካቤ"
      ],
      en: [
        "Comprehensive oral health checkups",
        "Strictly sterilized modern medical instruments",
        "Dedicated dental care for the entire family"
      ]
    }
  }
];

export const clinicHighlights = [
  {
    title: {
      am: "ዘመናዊ ቴክኖሎጂ እና ቁሳቁሶች",
      en: "Modern Equipment & Technology"
    },
    description: {
      am: "ክሊኒካችን በዘመናዊ የጥርስ ህክምና ወንበሮች እና የህክምና መሳሪያዎች የተሟላ ነው።",
      en: "Our clinic is equipped with advanced dental treatment chairs and precision instrumentation."
    },
    icon: "Sparkles"
  },
  {
    title: {
      am: "ከፍተኛ የንጽህና እና የማምከን ደረጃ",
      en: "Strict Hygiene & Sterilization"
    },
    description: {
      am: "እያንዳንዱ የህክምና መሳሪያ በከፍተኛ ጥንቃቄ ተመርምሮ እና ታምቆ አገልግሎት ላይ ይውላል።",
      en: "Every instrument undergoes strict sterilization protocols to ensure patient safety and hygiene."
    },
    icon: "ShieldCheck"
  },
  {
    title: {
      am: "ተመራጭ እና ምቹ አድራሻ",
      en: "Prime & Accessible Location"
    },
    description: {
      am: "በመገናኛ ግሬስ ሲቲ ሞል 3ኛ ፎቅ ላይ በቀላሉ የሚገኝ እና ምቹ የመኪና ማቆሚያ ያለው።",
      en: "Conveniently located at Grace City Mall, 3rd Floor in Megenagna with easy accessibility."
    },
    icon: "MapPin"
  },
  {
    title: {
      am: "በየቀኑ ክፍት (ከሰኞ – እሑድ)",
      en: "Open 7 Days a Week"
    },
    description: {
      am: "ከሰኞ እስከ እሑድ ከጠዋቱ 09:00 እስከ ማታ 18:30 ድረስ አገልግሎት እንሰጣለን።",
      en: "We are open Monday through Sunday from 09:00 to 18:30 to fit your schedule."
    },
    icon: "Clock"
  }
];

/**
 * Verified Website Technology Stack (Used for building the Oli Dental Clinic web application)
 */
export const technologyStack = [
  {
    name: "React 18",
    category: {
      am: "የፊት ለፊት ቴክኖሎጂ",
      en: "Frontend Framework"
    },
    description: {
      am: "ለፈጣን፣ አስተማማኝ እና ተለዋዋጭ የተጠቃሚ ተሞክሮ የተገነባ የኮምፖነንት አወቃቀር።",
      en: "Component-based architecture delivering high performance and smooth interactive states."
    },
    badge: "v18.3"
  },
  {
    name: "Vite",
    category: {
      am: "የግንባታ እና ማመቻቻ መሳሪያ",
      en: "Build Tool & Bundler"
    },
    description: {
      am: "ፈጣን የገጽ አከፋፈት እና ንጹህ የኮድ ጥቅል አሰራርን የሚያረጋግጥ ዘመናዊ መድረክ።",
      en: "Next-generation frontend tooling providing instant server start and optimized production bundling."
    },
    badge: "v5.4"
  },
  {
    name: "Tailwind CSS 3",
    category: {
      am: "ዘመናዊ የዲዛይን ስርአት",
      en: "Styling & Design System"
    },
    description: {
      am: "ለሞባይል፣ ታብሌት እና ዴስክቶፕ ምቹ የሆነ ንጹህ የህክምና የቀለም አቀማመጥ እና ገጽታ።",
      en: "Utility-first modern styling tailored for medical aesthetics with custom responsive layouts."
    },
    badge: "v3.4"
  },
  {
    name: "Responsive & Accessible (a11y)",
    category: {
      am: "ተደራሽነት እና ምላሽ ሰጪነት",
      en: "Responsiveness & a11y"
    },
    description: {
      am: "በማንኛውም የስልክ እና የኮምፒውተር ስክሪን ላይ የሚሰራ እና የድር ተደራሽነት ደረጃዎችን የጠበቀ።",
      en: "Semantic HTML5, ARIA labels, smooth typography, and full cross-device adaptation."
    },
    badge: "Mobile-First"
  },
  {
    name: "Lucide Icons",
    category: {
      am: "የአይኮን ዲዛይን",
      en: "Vector Iconography"
    },
    description: {
      am: "ግልጽ እና ማራኪ የሆኑ የህክምና እና የድር አሰሳ አይኮኖች።",
      en: "Crisp, lightweight SVG icons ensuring visual clarity and rapid loading."
    },
    badge: "Vector SVG"
  },
  {
    name: "Bilingual Ethiopic Typography",
    category: {
      am: "የቋንቋ እና የፊደል ድጋፍ",
      en: "Internationalization & Fonts"
    },
    description: {
      am: "ለአማርኛ ፊደላት ንጹህ እና ውብ የሆነ የ Noto Sans Ethiopic ቅርጸ-ቁምፊ ድጋፍ።",
      en: "Native Amharic (Noto Sans Ethiopic) & English (Plus Jakarta Sans) font rendering."
    },
    badge: "Amharic / EN"
  }
];
