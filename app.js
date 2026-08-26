/**
 * OLI DENTAL CLINIC - APPLICATION SCRIPT
 * Full Bilingual Support (Amharic Default & English Toggle)
 * Multi-Step Booking Modal, Before/After Slider, Cost Estimator, Social Guidance
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initTheme();
  initMobileMenu();
  initServiceFilters();
  initGuidanceTabs();
  initBeforeAfterSlider();
  initCostCalculator();
  initFAQAccordion();
  initBookingModal();
  initQuickBookingBar();
});

/* ==========================================================================
   1. BILINGUAL TRANSLATION ENGINE (Amharic 'am' Default & English 'en')
   ========================================================================== */

const translations = {
  am: {
    page_title: "ኦሊ የጥርስ ሕክምና ክሊኒክ | OLI Dental Clinic - የውብ ፈገግታዎ መገኛ",
    top_location: "አዲስ አበባ፣ ቦሌ (Addis Ababa, Bole)",
    brand_sub: "የጥርስ ሕክምና ክሊኒክ",
    nav_home: "ዋና ገጽ",
    nav_services: "አገልግሎቶች",
    nav_social_guidance: "የማህበራዊ ሚዲያ ምክሮች",
    nav_transformation: "የውጤት ማሳያ",
    nav_doctors: "ዶክተሮቻችን",
    nav_calculator: "የዋጋ ግምት",
    nav_reviews: "ምስክርነቶች",
    nav_contact: "አድራሻ",
    btn_book_now: "ቀጠሮ ይያዙ",
    hero_badge: "✨ በአዲስ አበባ ቀዳሚው ዘመናዊ የጥርስ ህክምና",
    hero_title: 'ውብ እና ጤናማ <span class="highlight-gradient">ፈገግታዎ</span> የእኛ ትልቁ ቅድሚያ ነው!',
    hero_desc: "በኦሊ የጥርስ ሕክምና ክሊኒክ በዘመናዊ ዲጂታል ቴክኖሎጂ፣ ልምድ ባላቸው ስፔሻሊስት ሀኪሞች እና ፍጹም ህመም በሌለው አሰራር ጥራት ያለው አገልግሎት እንሰጣለን።",
    hero_cta_book: "ቀጠሮ አሁኑኑ ያስይዙ",
    hero_cta_whatsapp: "በዋትስአፕ ያውሩን",
    social_follow_label: "በማህበራዊ ገጾቻችን ይከተሉን:",
    stat_smiles: "የደስታ ፈገግታዎች",
    stat_experience: "ዓመታት ልምድ",
    stat_rating: "የታካሚዎች እርካታ",
    stat_painless: "ህመም አልባ ቴክኖሎጂ",
    badge_sterilization_title: "100% ጽዱና ዘመናዊ",
    badge_sterilization_sub: "አለም አቀፍ ደረጃውን የጠበቀ",
    badge_laser_title: "3D ዲጂታል ስካን",
    badge_laser_sub: "ያለ ምንም ጭንቀት",
    working_hours_title: "የስራ ሰዓት:",
    working_hours_detail: "ሰኞ - ቅዳሜ 2:30 - 12:30 | እሁድ በቅድመ ቀጠሮ",
    btn_quick_book: "ቀጠሮ ያዝ",
    quick_book_heading: "ፈጣን የቀጠሮ ማስያዣ",
    quick_book_sub: "የሚፈልጉትን አገልግሎት እና ምቹ ቀን ይምረጡ",
    label_select_service: "አገልግሎት",
    opt_choose_service: "አገልግሎት ይምረጡ...",
    opt_cleaning: "የጥርስ እጥበት እና ማፅዳት (Cleaning)",
    opt_braces: "ብሬስ እና ጥርስ ማስተካከል (Braces / Orthodontics)",
    opt_whitening: "የጥርስ ማናጣት (Laser Whitening)",
    opt_implant: "የጥርስ ተከላ (Dental Implants)",
    opt_rootcanal: "የስር ህክምና (Root Canal)",
    opt_veneers: "የጥርስ ሽፋን (Veneers)",
    opt_checkup: "አጠቃላይ ነፃ ምርመራ (General Checkup)",
    label_select_doctor: "ዶክተር",
    opt_any_doctor: "ማንኛውም የሚገኝ ስፔሻሊስት",
    label_select_date: "ቀን",
    btn_continue_booking: "ቀጥል",
    services_tag: "የክሊኒካችን አገልግሎቶች",
    services_title: "ለእርስዎ እና ለቤተሰብዎ የተሟላ የጥርስ ህክምና",
    services_desc: "በዘመናዊ ማሽኖች የተደገፉ እና በአለም አቀፍ ደረጃ የሚሰጡ የጥርስ ህክምና ዘርፎች",
    filter_all: "ሁሉም",
    filter_cosmetic: "የጥርስ ውበትና ማናጣት",
    filter_ortho: "ብሬስ (Braces)",
    filter_implants: "የጥርስ ተከላና መተካት",
    filter_general: "አጠቃላይ እና የህፃናት",
    badge_popular: "ተወዳጅ",
    srv1_cat: "የውበት ህክምና",
    srv1_title: "ሌዘር የጥርስ ማናጣት (Laser Whitening)",
    srv1_desc: "በአንድ ሰዓት ውስጥ ጥርስዎን እስከ 8 ደረጃዎች ድረስ በሌዘር ቴክኖሎጂ ነጭ እና ብሩህ እናደርጋለን።",
    srv1_f1: "ፈጣን 45 ደቂቃ ህክምና",
    srv1_f2: "ለረጅም ጊዜ የሚቆይ ውጤት",
    srv1_f3: "ለጥርስ ኤናሜል ደህንነቱ የተጠበቀ",
    srv2_cat: "ኦርቶዶንቲክስ",
    srv2_title: "ዘመናዊ ብሬስ እና የጥርስ ማስተካከል (Braces)",
    srv2_desc: "የተዛነፉ፣ የተነቃቀሉ ወይም የተጠጋጉ ጥርሶችን በሜታል፣ ሴራሚክ ወይም ግልፅ (Clear Aligners) እናስተካክላለን።",
    srv2_f1: "ሜታል፣ ሴራሚክ እና ኢንቪዛላይን",
    srv2_f2: "በወርሃዊ ክፍያ ማመቻቸት",
    srv2_f3: "የ 3D ውጤት ቅድመ እይታ",
    srv3_cat: "ተከላ እና መተካት",
    srv3_title: "የጥርስ ተከላ (Dental Implants)",
    srv3_desc: "የወለቁ ጥርሶችን በተፈጥሮ ጥርስ ጥንካሬ እና ውበት ባለው ፕሪሚየም የታይታኒየም ተከላ በቋሚነት እንተካለን።",
    srv3_f1: "ለዕድሜ ልክ የሚቆይ ጥንካሬ",
    srv3_f2: "እንደ ተፈጥሮ ጥርስ የሚሰራ",
    srv3_f3: "ህመም አልባ አሰራር",
    srv4_cat: "አጠቃላይ ህክምና",
    srv4_title: "ጥልቅ የጥርስ እጥበትና ታርታር ማንሳት (Scaling)",
    srv4_desc: "የድድ መድማት፣ መጥፎ የአፍ ጠረን እና የጥርስ ታርታርን በአልትራሶኒክ ቴክኖሎጂ ሙሉ በሙሉ ማፅዳት።",
    srv4_f1: "አልትራሶኒክ ጥልቅ ጽዳት",
    srv4_f2: "የድድ ጤና መልሶ ማቋቋም",
    srv4_f3: "የአፍ ጠረን ማከም",
    srv5_cat: "ህመም አልባ ህክምና",
    srv5_title: "የስር ህክምና (Root Canal Therapy)",
    srv5_desc: "ከፍተኛ የጥርስ ህመም ያለባቸውን ጥርሶች ሳይነቀሉ በዘመናዊ ሮታሪ ቴክኖሎጂ ታክመው እንዲድኑ ማድረግ።",
    srv5_f1: "ጥርስን ከመነቀል ማዳን",
    srv5_f2: "ፈጣን የህመም ማስታገሻ",
    srv5_f3: "ዘመናዊ አክሊል (Crown) መግጠም",
    srv6_cat: "የሆሊውድ ፈገግታ",
    srv6_title: "ቬኒርስ እና የጥርስ ሽፋን (Porcelain Veneers)",
    srv6_desc: "የተሰበሩ፣ ያረጁ ወይም ቀለም የተቀየሩ ጥርሶችን በተፈጥሯዊ ሸክላ ሽፋን ወደ ፍጹም የሆሊውድ ፈገግታ መቀየር።",
    srv6_f1: "የሆሊውድ ስታይል ውበት",
    srv6_f2: "ቀለም የማይቀይር ሸክላ",
    srv6_f3: "ብጁ የፊት ቅርጽ ማዛመጃ",
    btn_book_service: "ቀጠሮ ይያዙ",
    social_sec_badge: "ኦሊ በማህበራዊ ሚዲያ & የጤና መመሪያዎች",
    social_sec_title: "የዕለት ተዕለት የጥርስ ጤና እና እንክብካቤ ምክሮች",
    social_sec_desc: "በማህበራዊ ገጾቻችን በየሳምንቱ የሚለቀቁ አዳዲስ ትምህርታዊ ቪዲዮዎችን እና የጥርስ ጤና መመሪያዎችን እዚህ ያግኙ",
    channel_tg_title: "ቴሌግራም ቻናል (Telegram)",
    channel_tg_desc: "የቀጠሮ ቅናሾች፣ የጥያቄና መልስ ፕሮግራሞች እና የዶክተር ምክሮች በየቀኑ።",
    btn_join_telegram: "ቻናሉን ይቀላቀሉ",
    channel_tt_title: "ቲክቶክ ቪዲዮዎች (TikTok)",
    channel_tt_desc: "አዝናኝ እና አጫጭር የጥርስ ህክምና ሂደት ቪዲዮዎች፣ የታካሚዎች ገጠመኝ እና የብሬስ ውጤቶች።",
    btn_follow_tiktok: "ቪዲዮዎችን ይመልከቱ",
    channel_ig_title: "ኢንስታግራም (Instagram)",
    channel_ig_desc: "የክሊኒኩ የውስጥ ገጽታ፣ የፈገግታ ለውጦች ፎቶዎች (Before & After) እና የዶክተሮቻችን ምክር።",
    btn_follow_ig: "ገጻችንን ይከተሉ",
    channel_wa_title: "ፈጣን ዋትስአፕ (WhatsApp)",
    channel_wa_desc: "የጥርስ ህመም ወይም አስቸኳይ ጉዳይ ካጋጠመዎት በቀጥታ ከህክምና አማካሪያችን ጋር ይወያዩ።",
    btn_chat_wa: "መልዕክት ይላኩ",
    guide_box_heading: "የኦሊ ክሊኒክ የጥርስ እንክብካቤ መመሪያዎች (Dental Care Guides)",
    guide_tab1: "ትክክለኛ የጥርስ እጥበት",
    guide_tab2: "የብሬስ እንክብካቤ",
    guide_tab3: "የነጭ ጥርስ አጠባበቅ",
    guide_tab4: "ድንገተኛ የጥርስ ህመም",
    guide_b_title: "በቀን 2 ጊዜ ለ 2 ደቂቃ ጥርስዎን የመቦረሽ ህግ",
    guide_b_desc: "አብዛኛው ሰው ጥርሱን ሲቦርሽ የሚፈፅማቸው የተለመዱ ስህተቶች እና የዶክተሮቻችን መፍትሄዎች፡",
    guide_share_text: "ይህን መመሪያ ለወዳጅዎ ያጋሩ፡",
    tip_quote1: '"የጥርስ ጤና የአጠቃላይ ሰውነት ጤና መነሻ ነው!"',
    guide_braces_title: "ብሬስ ያሰሩ ታካሚዎች ሊከተሏቸው የሚገቡ መመሪያዎች",
    guide_braces_desc: "የብሬስ ህክምና ፈጣን እና ውጤታማ እንዲሆን የሚከተሉትን ጥንቃቄዎች ያድርጉ፡",
    tip_quote2: '"ብሬስዎን በትክክል ይንከባከቡ፤ ፍጹም ፈገግታ ይጠብቅዎታል!"',
    guide_w_title: "የጥርስ ማናጣት ህክምና ከተደረገ በኋላ የሚደረግ ጥንቃቄ",
    guide_w_desc: "የጥርስዎን ንጣት ለረጅም አመታት ለማቆየት የመጀመሪያዎቹን 48 ሰዓታት የሚከተሉትን ይተግብሩ፡",
    tip_quote3: '"ደማቅ እና አንጸባራቂ ፈገግታ በራስ መተማመንን ይጨምራል!"',
    guide_em_title: "ድንገተኛ የጥርስ ህመም ሲያጋጥም ወዲያውኑ ምን ይደረጋል?",
    guide_em_desc: "ወደ ክሊኒካችን ከመድረስዎ በፊት በቤት ውስጥ ሊወስዷቸው የሚችሏቸው የመጀመሪያ እርዳታዎች፡",
    tip_quote4: '"በአስቸኳይ ጊዜ ከጎንዎ ነን!"',
    gallery_tag: "የተጨበጠ የለውጥ ውጤት",
    gallery_title: "የታካሚዎቻችን የፈገግታ ለውጥ (Before & After)",
    gallery_desc: "መሃከለኛውን መስመር ወደ ግራ እና ቀኝ በማንሸራተት የህክምናውን ውጤት ይመልከቱ",
    tag_before: "ከህክምናው በፊት (Before)",
    tag_after: "ከህክምናው በኋላ (After)",
    case_title: "የጥርስ ማናጣት እና የቬኒርስ ለውጥ (Laser Whitening & Veneers)",
    case_desc: "የታካሚ የፈገግታ ለውጥ በአጭር ጊዜ ውስጥ የተከናወነ",
    btn_get_this_smile: "ይህን ፈገግታ ያግኙ",
    calc_tag: "ግልፅ እና ተመጣጣኝ ዋጋ",
    calc_title: "የህክምና ዋጋ ግምት አስሊ (Cost Estimator)",
    calc_desc: "የሚፈልጉትን የህክምና አይነቶች በመምረጥ ግምታዊ ዋጋዎን ያሰሉ፤ በተጨማሪም በቴሌብር፣ በባንክ ወይም በወርሃዊ ክፍያ አማራጮች መጠቀም ይችላሉ።",
    calc_box_title: "የሚፈልጉትን አገልግሎት ይምረጡ",
    calc_item1: "የጥርስ እጥበትና ማፅዳት (Cleaning)",
    calc_item2: "ሌዘር የጥርስ ማናጣት (Laser Whitening)",
    calc_item3: "የብሬስ ህክምና ቅድመ ክፍያ (Braces Initial)",
    calc_item4: "የስር ህክምና እና የጥርስ ሙሌት (Root Canal & Filling)",
    calc_item5: "ፕሪሚየም የጥርስ ተከላ (Dental Implant)",
    calc_est_total: "ጠቅላላ ግምታዊ ዋጋ:",
    calc_disclaimer: "*ትክክለኛው ዋጋ በአካል ምርመራ ወቅት እንደ ጥርስ ሁኔታ ሊወሰን ይችላል።",
    btn_book_with_estimate: "በዚህ ግምት ቀጠሮ ይያዙ",
    doc_tag: "የክሊኒኩ ስፔሻሊስቶች",
    doc_title: "ልምድ ያካበቱ የጥርስ ስፔሻሊስት ሀኪሞቻችን",
    doc_desc: "በሙያቸው የተመሰከረላቸው፣ ታካሚን በፍቅር እና በቅንነት የሚያስተናግዱ ሀኪሞች",
    doc1_badge: "ዋና የጥርስ ስፔሻሊስት",
    doc1_name: "ዶ/ር ኦሊ (Dr. Oli)",
    doc1_title: "የክሊኒኩ መስራች & ዋና የጥርስ የቀዶ ህክምና ስፔሻሊስት",
    doc1_bio: "ከ15 ዓመታት በላይ በኢምፕላንት (የጥርስ ተከላ)፣ ውስብስብ የጥርስ ቀዶ ጥገና እና የውበት ህክምና ላይ የካበተ ልምድ ያላቸው።",
    btn_book_dr: "ቀጠሮ ይያዙ",
    doc2_badge: "የብሬስ ስፔሻሊስት",
    doc2_name: "ዶ/ር ሰላም (Dr. Selam)",
    doc2_title: "ኦርቶዶንቲስት (Orthodontics & Clear Aligners)",
    doc2_bio: "የተዛነፉ ጥርሶችን በዘመናዊ ብሬስ እና ግልፅ አላይነር (Aligners) ወደ ፍጹም ውበት በመቀየር የታወቁ ስፔሻሊስት።",
    doc3_badge: "የስር ህክምና ስፔሻሊስት",
    doc3_name: "ዶ/ር አቤል (Dr. Abel)",
    doc3_title: "የስር ህክምና እና የህፃናት የጥርስ ሀኪም",
    doc3_bio: "ህመም የሌለው የስር ህክምና (Root Canal) እና ለህፃናት የተረጋጋና አስደሳች የጥርስ ህክምና በመስጠት የተካኑ።",
    review_tag: "የታካሚዎች ምስክርነት",
    review_title: "ታካሚዎቻችን ስለ ኦሊ ክሊኒክ ምን ይላሉ?",
    review_desc: "በታማኝነት እና በቅንነት ያገለገልናቸው ታካሚዎች የተሰጡ ትክክለኛ አስተያየቶች",
    rev1_text: '"በጣም የሚገርም የጥርስ ክሊኒክ ነው! የጥርስ ህመም ፍርሃት ነበረኝ ነገር ግን በኦሊ ክሊኒክ ህክምናዬን ያለምንም ህመም ጨርሻለሁ። ዶክተሮቹ እና አስጎብኝዎቻቸው በጣም ቅን ናቸው!"',
    rev1_author: "ሄለን ታደሰ",
    rev1_srv: "የሌዘር ማናጣት እና እጥበት ታካሚ",
    rev2_text: '"የብሬስ ህክምናዬን ከ ዶ/ር ሰላም ጋር ነው የጀመርኩት። በ1 አመት ውስጥ ጥርሴ በሚገርም ሁኔታ ተስተካክሏል። በወርሃዊ ክፍያ መክፈል መቻሌም በጣም አመችቶኛል!"',
    rev2_author: "ዮናስ በቀለ",
    rev2_srv: "የብሬስ (Orthodontics) ታካሚ",
    rev3_text: '"ዶ/ር ኦሊ የጥርስ ተከላ ሰርተውልኛል። ጥርሴ ልክ እንደ ተፈጥሮ ጥርስ ያገለግለኛል፤ ክሊኒኩ በጣም ጽዱ እና በዘመናዊ እቃዎች የተሞላ ነው። በሙሉ ልብ እመክረዋለሁ!"',
    rev3_author: "ዳዊት ግርማ",
    rev3_srv: "የጥርስ ተከላ (Dental Implant) ታካሚ",
    faq_tag: "ተደጋጋሚ ጥያቄዎች",
    faq_title: "የተለመዱ የጥርስ ህክምና ጥያቄዎች እና መልሶች",
    faq_desc: "ስለ ክሊኒካችን፣ ቀጠሮ አያያዝ እና ህክምናዎች አጭር ማብራሪያ። ተጨማሪ ጥያቄ ካለዎት በቴሌግራም ወይም በስልክ ያናግሩን።",
    faq_cta_h: "ሌላ ጥያቄ አለዎት?",
    faq_cta_p: "የህክምና አማካሪያችን በቴሌግራም ወይም በዋትስአፕ ዝግጁ ነው",
    btn_ask_telegram: "በቴሌግራም ይጠይቁ",
    faq1_q: "የመጀመሪያ ምርመራ ለማድረግ ክፍያ አለ ወይስ ነፃ ነው?",
    faq1_a: "በኦሊ የጥርስ ክሊኒክ የመጀመሪያ አጠቃላይ የጥርስ እና የድድ ምርመራ እንዲሁም የህክምና አማራጭ ማብራሪያ ሙሉ በሙሉ በነፃ ይሰጣል።",
    faq2_q: "የጥርስ ህክምናው ህመም አለው ወይ?",
    faq2_a: "በፍጹም! ክሊኒካችን ዘመናዊ የአካባቢ ማደንዘዣዎችን እና ህመም አልባ ዲጂታል መሳሪያዎችን ስለሚጠቀም ህክምናዎን በምቾት እና ያለምንም ስጋት ያጠናቅቃሉ።",
    faq3_q: "የብሬስ ክፍያን በየወሩ መክፈል ይቻላል?",
    faq3_a: "አዎ! ለብሬስ (Orthodontics) ህክምና የመጀመሪያ ቅድመ ክፍያ ከከፈሉ በኋላ ቀሪውን በየወሩ በሚመች ክፍፍል መክፈል ይችላሉ።",
    faq4_q: "በድንገተኛ ጊዜ እንዴት እናገኛችኋለን?",
    faq4_a: "በድንገተኛ የጥርስ ህመም ወይም አደጋ ጊዜ በ +251 91 100 0000 በመደወል ፈጣን የድንገተኛ ህክምና አገልግሎት ማግኘት ይችላሉ።",
    contact_tag: "አድራሻችን እና ግንኙነት",
    contact_title: "ክሊኒካችንን በቀላሉ ያግኙ",
    contact_desc: "በአዲስ አበባ እምብርት ቦሌ የሚገኘውን ዘመናዊ ክሊኒካችንን ይጎብኙ ወይም በቀጥታ ይደውሉልን።",
    contact_loc_label: "አድራሻ:",
    contact_loc_val: "አዲስ አበባ፣ ቦሌ መንገድ፣ ከወዳጅነት ፓርክ አጠገብ፣ ኦሊ ህንፃ 3ኛ ፎቅ",
    contact_phone_label: "ስልክ ቁጥር:",
    contact_email_label: "ኢሜይል:",
    contact_hours_label: "የስራ ሰዓት:",
    contact_hours_val: "ሰኞ - ቅዳሜ: 2:30 ጠዋት - 12:30 ማታ | እሁድ: በቅድመ ቀጠሮ",
    social_connect_text: "ማህበራዊ ገጾቻችን:",
    footer_tagline: "የላቀ የጥርስ ህክምና፣ ውብ ፈገግታ እና ጤናማ የአኗኗር ዘይቤ ለሁላችሁም።",
    footer_quick_links: "ፈጣን አገናኞች",
    footer_services: "አገልግሎቶቻችን",
    footer_newsletter_title: "የጥርስ ጤና ምክሮች በቴሌግራም",
    footer_newsletter_desc: "አዳዲስ ቅናሾች እና ነፃ የጤና ትምህርቶች እንዳያመልጥዎት በቴሌግራም ቻናላችን ይቀላቀሉ።",
    footer_developer: "የተሰራው ለውብ ፈገግታዎ በቅንነት ነው",
    modal_book_heading: "የህክምና ቀጠሮ ማስያዣ",
    step_1_of_3: "ደረጃ 1 ከ 3",
    step1_title: "1. አገልግሎት እና ዶክተር ይምረጡ",
    label_modal_service: "የህክምና አገልግሎት *",
    label_modal_doctor: "ተመራጭ ዶክተር",
    btn_next: "ቀጣይ",
    step2_title: "2. ቀን እና ምቹ ሰዓት ይምረጡ",
    label_modal_date: "የቀጠሮ ቀን *",
    label_modal_time: "የቀጠሮ ሰዓት *",
    btn_back: "ተመለስ",
    step3_title: "3. የታካሚ መረጃ እና ማረጋገጫ",
    label_patient_name: "ሙሉ ስም *",
    label_patient_phone: "ስልክ ቁጥር (Phone Number) *",
    label_patient_notes: "ተጨማሪ ማስታወሻ ወይም ምልክቶች (ካለ)",
    btn_confirm_booking: "ቀጠሮውን አረጋግጥ",
    success_h: "ቀጠሮዎ በተሳካ ሁኔታ ተይዟል!",
    success_p: "የኦሊ ክሊኒክ የህክምና ቡድን ቀጠሮዎን አረጋግጧል። በቅርቡ በስልክ ወይም በኤስኤምኤስ እናስታውስዎታለን።",
    btn_send_wa_confirm: "በዋትስአፕ ማረጋገጫ ላክ",
    btn_send_tg_confirm: "በቴሌግራም አረጋግጥ",
    btn_done: "ጨርስ (Done)"
  },
  en: {
    page_title: "OLI Dental Clinic | Advanced & Gentle Dental Care in Addis Ababa",
    top_location: "Addis Ababa, Bole (Near Friendship Park)",
    brand_sub: "Dental Clinic & Implant Center",
    nav_home: "Home",
    nav_services: "Services",
    nav_social_guidance: "Social Care Tips",
    nav_transformation: "Smile Gallery",
    nav_doctors: "Our Dentists",
    nav_calculator: "Cost Estimator",
    nav_reviews: "Reviews",
    nav_contact: "Contact",
    btn_book_now: "Book Appointment",
    hero_badge: "✨ Leading Modern Dental Clinic in Addis Ababa",
    hero_title: 'Transforming Smiles with <span class="highlight-gradient">Gentle & Modern</span> Dentistry',
    hero_desc: "At OLI Dental Clinic, we deliver world-class dental care with advanced 3D digital technology, experienced specialists, and 100% pain-free treatments.",
    hero_cta_book: "Book Your Visit Now",
    hero_cta_whatsapp: "Chat on WhatsApp",
    social_follow_label: "Follow our social channels:",
    stat_smiles: "Happy Smiles",
    stat_experience: "Years Experience",
    stat_rating: "Patient Satisfaction",
    stat_painless: "Pain-Free Tech",
    badge_sterilization_title: "100% Sterile & Modern",
    badge_sterilization_sub: "International Hospital Grade",
    badge_laser_title: "3D Digital Scan",
    badge_laser_sub: "Zero Discomfort",
    working_hours_title: "Working Hours:",
    working_hours_detail: "Mon - Sat: 8:30 AM - 6:30 PM | Sun by Appt",
    btn_quick_book: "Book Fast",
    quick_book_heading: "Fast Appointment Finder",
    quick_book_sub: "Select your desired treatment and preferred date",
    label_select_service: "Service",
    opt_choose_service: "Choose a service...",
    opt_cleaning: "Deep Cleaning & Polishing",
    opt_braces: "Braces & Orthodontics",
    opt_whitening: "Laser Teeth Whitening",
    opt_implant: "Dental Implants",
    opt_rootcanal: "Root Canal Therapy",
    opt_veneers: "Porcelain Veneers",
    opt_checkup: "Free General Dental Consultation",
    label_select_doctor: "Specialist",
    opt_any_doctor: "First Available Specialist",
    label_select_date: "Date",
    btn_continue_booking: "Continue",
    services_tag: "Our Comprehensive Services",
    services_title: "Complete Dental Solutions for You & Your Family",
    services_desc: "State-of-the-art technology delivering painless, precise, and beautiful dental outcomes",
    filter_all: "All Services",
    filter_cosmetic: "Cosmetic & Whitening",
    filter_ortho: "Braces & Aligners",
    filter_implants: "Implants & Restorative",
    filter_general: "General & Pediatric",
    badge_popular: "Popular",
    srv1_cat: "Cosmetic Dentistry",
    srv1_title: "Laser Teeth Whitening",
    srv1_desc: "Brighten your smile up to 8 shades in just 45 minutes using safe, advanced laser whitening.",
    srv1_f1: "Fast 45-minute treatment",
    srv1_f2: "Long-lasting radiant results",
    srv1_f3: "100% enamel safe",
    srv2_cat: "Orthodontics",
    srv2_title: "Modern Braces & Clear Aligners",
    srv2_desc: "Straighten crooked or misaligned teeth with metal, ceramic, or invisible aligners.",
    srv2_f1: "Metal, Ceramic & Aligners",
    srv2_f2: "Flexible monthly installments",
    srv2_f3: "3D digital smile simulation",
    srv3_cat: "Implants & Surgery",
    srv3_title: "Permanent Dental Implants",
    srv3_desc: "Restore missing teeth with premium titanium dental implants for lifelong strength and beauty.",
    srv3_f1: "Lifelong durability",
    srv3_f2: "Functions like natural teeth",
    srv3_f3: "Minimally invasive & painless",
    srv4_cat: "General Dental",
    srv4_title: "Deep Cleaning & Scaling",
    srv4_desc: "Ultrasonic tartar removal, gum rejuvenation, and bad breath treatment for optimal oral health.",
    srv4_f1: "Ultrasonic painless cleaning",
    srv4_f2: "Gum bleeding prevention",
    srv4_f3: "Fresh breath restoration",
    srv5_cat: "Pain-Free Care",
    srv5_title: "Root Canal Therapy",
    srv5_desc: "Save infected or severely painful teeth quickly and painlessly using rotary endodontics.",
    srv5_f1: "Saves natural tooth",
    srv5_f2: "Immediate pain relief",
    srv5_f3: "Precision porcelain crown",
    srv6_cat: "Hollywood Smile",
    srv6_title: "Porcelain Veneers",
    srv6_desc: "Custom-crafted porcelain shells to fix chipped, discolored, or uneven teeth into a flawless smile.",
    srv6_f1: "Flawless Hollywood finish",
    srv6_f2: "Stain-resistant porcelain",
    srv6_f3: "Custom facial aesthetics",
    btn_book_service: "Book This Service",
    social_sec_badge: "OLI Social Community & Health Guides",
    social_sec_title: "Daily Dental Health & Oral Care Guides",
    social_sec_desc: "Watch our weekly educational videos and discover doctor-approved dental routines on our social pages",
    channel_tg_title: "Telegram Channel",
    channel_tg_desc: "Special discount announcements, Q&A sessions, and daily dental advice.",
    btn_join_telegram: "Join Telegram Channel",
    channel_tt_title: "TikTok Dental Videos",
    channel_tt_desc: "Engaging short videos showing real patient journeys, braces progress, and teeth transformations.",
    btn_follow_tiktok: "Watch on TikTok",
    channel_ig_title: "Instagram Gallery",
    channel_ig_desc: "Clinic atmosphere, Before & After transformations, and expert advice from our dentists.",
    btn_follow_ig: "Follow Instagram",
    channel_wa_title: "Instant WhatsApp",
    channel_wa_desc: "Have a toothache or dental emergency? Chat directly with our medical coordinator.",
    btn_chat_wa: "Chat on WhatsApp",
    guide_box_heading: "OLI Clinic Oral Health Care Guides",
    guide_tab1: "Proper Brushing",
    guide_tab2: "Braces Care",
    guide_tab3: "Whitening Care",
    guide_tab4: "Emergency Relief",
    guide_b_title: "The 2-Minute, 2x Daily Brushing Standard",
    guide_b_desc: "Most people brush incorrectly. Here is the doctor-recommended routine:",
    guide_share_text: "Share this guide with friends:",
    tip_quote1: '"Oral health is the gateway to your overall body wellness!"',
    guide_braces_title: "Essential Rules for Patients with Braces",
    guide_braces_desc: "Protect your braces and accelerate treatment with these practical guidelines:",
    tip_quote2: '"Take great care of your braces today for a lifetime of confident smiles!"',
    guide_w_title: "Post-Whitening Care & Maintenance",
    guide_w_desc: "Keep your bright shade lasting for years by following the 48-hour white diet:",
    tip_quote3: '"A radiant white smile builds unbeatable self-confidence!"',
    guide_em_title: "What to do in a Dental Emergency",
    guide_em_desc: "Crucial first-aid steps to take before reaching our clinic:",
    tip_quote4: '"We are here for you 24/7 in dental emergencies!"',
    gallery_tag: "Proven Transformations",
    gallery_title: "Real Patient Smile Transformations (Before & After)",
    gallery_desc: "Slide the divider left and right to inspect the dramatic transformation",
    tag_before: "Before Treatment",
    tag_after: "After Treatment",
    case_title: "Laser Whitening & Porcelain Veneers Transformation",
    case_desc: "Completed in minimal visits with zero pain and maximum aesthetic perfection",
    btn_get_this_smile: "Get This Smile",
    calc_tag: "Transparent & Affordable",
    calc_title: "Interactive Treatment Cost Estimator",
    calc_desc: "Select the procedures you need to estimate your investment. We support Telebirr, CBE, and 0% monthly installments.",
    calc_box_title: "Select Desired Procedures",
    calc_item1: "Dental Cleaning & Polishing",
    calc_item2: "Laser Teeth Whitening",
    calc_item3: "Braces Orthodontics (Initial Deposit)",
    calc_item4: "Root Canal & Composite Filling",
    calc_item5: "Premium Titanium Dental Implant",
    calc_est_total: "Estimated Total Cost:",
    calc_disclaimer: "*Final cost may adjust based on comprehensive clinical diagnosis and X-ray evaluation.",
    btn_book_with_estimate: "Book With This Estimate",
    doc_tag: "Our Specialist Team",
    doc_title: "Meet Our Highly Experienced Dentists",
    doc_desc: "Certified, compassionate specialists dedicated to gentle, personalized dental excellence",
    doc1_badge: "Lead Dental Surgeon",
    doc1_name: "Dr. Oli",
    doc1_title: "Founder & Lead Oral Surgeon / Implantologist",
    doc1_bio: "Over 15 years of clinical mastery specializing in complex implants, bone grafting, and cosmetic transformations.",
    btn_book_dr: "Book with Specialist",
    doc2_badge: "Orthodontic Specialist",
    doc2_name: "Dr. Selam",
    doc2_title: "Orthodontist (Braces & Clear Aligners)",
    doc2_bio: "Renowned expert in crafting aligned, symmetric smiles using modern brackets and clear aligners.",
    doc3_badge: "Endodontic & Pediatric Care",
    doc3_name: "Dr. Abel",
    doc3_title: "Endodontist & Family Dentist",
    doc3_bio: "Specialized in stress-free root canals and gentle, friendly pediatric dental care for kids.",
    review_tag: "Patient Testimonials",
    review_title: "What Our Patients Say About OLI Clinic",
    review_desc: "Genuine feedback from individuals and families we have proudly cared for",
    rev1_text: '"Exceptional dental experience! I used to have severe dental anxiety, but Dr. Oli made my treatment completely painless. The staff is polite, and the clinic is spotless!"',
    rev1_author: "Helen Tadesse",
    rev1_srv: "Laser Whitening & Scaling Patient",
    rev2_text: '"I started my braces treatment with Dr. Selam. Within just one year, my teeth aligned beautifully! The monthly installment plan made it so manageable."',
    rev2_author: "Yonas Bekele",
    rev2_srv: "Orthodontics Patient",
    rev3_text: '"Dr. Oli placed my dental implant. It feels and looks 100% like my natural tooth! Top-tier equipment and unmatched cleanliness. Highly recommended!"',
    rev3_author: "Dawit Girma",
    rev3_srv: "Dental Implant Patient",
    faq_tag: "Frequently Asked Questions",
    faq_title: "Common Questions About Dental Treatments",
    faq_desc: "Clear answers to your questions regarding appointments, insurance, and procedures.",
    faq_cta_h: "Have More Questions?",
    faq_cta_p: "Our dental coordinators are active on Telegram and WhatsApp",
    btn_ask_telegram: "Ask on Telegram",
    faq1_q: "Is the initial dental examination free?",
    faq1_a: "Yes! At OLI Dental Clinic, initial dental checkups and personalized treatment planning consultations are completely free of charge.",
    faq2_q: "Will my dental treatment be painful?",
    faq2_a: "Not at all. We utilize modern computer-guided local anesthesia and gentle rotary instruments to ensure you feel completely comfortable.",
    faq3_q: "Can I pay for braces in monthly installments?",
    faq3_a: "Yes! After an initial deposit, we provide convenient 0% interest monthly payment schedules spread over your treatment duration.",
    faq4_q: "How can I reach you during an emergency?",
    faq4_a: "In case of urgent toothache, trauma, or broken teeth, call our 24/7 hotline at +251 91 100 0000 for immediate triage and same-day care.",
    contact_tag: "Contact & Location",
    contact_title: "Visit Our Modern Clinic in Bole",
    contact_desc: "Conveniently located in the heart of Addis Ababa with dedicated parking and easy access.",
    contact_loc_label: "Address:",
    contact_loc_val: "Bole Road, Near Friendship Park, OLI Building 3rd Floor, Addis Ababa, Ethiopia",
    contact_phone_label: "Phone:",
    contact_email_label: "Email:",
    contact_hours_label: "Opening Hours:",
    contact_hours_val: "Mon - Sat: 8:30 AM - 6:30 PM | Sun: By Appointment",
    social_connect_text: "Our Social Channels:",
    footer_tagline: "Advanced dental care, beautiful smiles, and healthy living for you and your family.",
    footer_quick_links: "Quick Links",
    footer_services: "Dental Services",
    footer_newsletter_title: "Dental Tips on Telegram",
    footer_newsletter_desc: "Stay updated with dental care guides, seasonal discounts, and live Q&As.",
    footer_developer: "Crafted with care for your brightest smile",
    modal_book_heading: "Book Dental Appointment",
    step_1_of_3: "Step 1 of 3",
    step1_title: "1. Select Treatment & Doctor",
    label_modal_service: "Dental Treatment *",
    label_modal_doctor: "Preferred Specialist",
    btn_next: "Next",
    step2_title: "2. Choose Date & Time Slot",
    label_modal_date: "Appointment Date *",
    label_modal_time: "Available Time Slot *",
    btn_back: "Back",
    step3_title: "3. Patient Information & Confirm",
    label_patient_name: "Full Name *",
    label_patient_phone: "Phone Number *",
    label_patient_notes: "Additional Notes or Symptoms (Optional)",
    btn_confirm_booking: "Confirm Appointment",
    success_h: "Appointment Successfully Scheduled!",
    success_p: "Our clinical coordinator has registered your visit. We will send an SMS reminder prior to your arrival.",
    btn_send_wa_confirm: "Send WhatsApp Confirmation",
    btn_send_tg_confirm: "Confirm on Telegram",
    btn_done: "Done"
  }
};

let currentLang = 'am'; // Amharic by default!

function initLanguage() {
  const savedLang = localStorage.getItem('oli_dental_lang');
  if (savedLang && (savedLang === 'am' || savedLang === 'en')) {
    currentLang = savedLang;
  }
  applyLanguage(currentLang);

  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'am' ? 'en' : 'am';
      localStorage.setItem('oli_dental_lang', currentLang);
      applyLanguage(currentLang);
      showToast(currentLang === 'am' ? 'ቋንቋ ወደ አማርኛ ተቀይሯል' : 'Language switched to English');
    });
  }
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  
  // Update toggle button text to show the other language
  const langText = document.getElementById('currentLangText');
  if (langText) {
    langText.textContent = lang === 'am' ? 'English' : 'አማርኛ';
  }

  // Update all elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update dynamic placeholders & option names
  const patientNameInput = document.getElementById('patientName');
  if (patientNameInput) {
    patientNameInput.placeholder = lang === 'am' ? 'ስምዎን ያስገቡ...' : 'Enter your full name...';
  }
  const patientNotesInput = document.getElementById('patientNotes');
  if (patientNotesInput) {
    patientNotesInput.placeholder = lang === 'am' ? 'የህመም አይነት ወይም ልዩ ፍላጎት...' : 'Any toothache symptoms or notes...';
  }

  // Update cost calculator item labels
  updateCostCalculator();
}

/* ==========================================================================
   2. THEME SWITCHER (Light / Dark)
   ========================================================================== */

function initTheme() {
  const themeBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('oli_dental_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const active = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', active);
      localStorage.setItem('oli_dental_theme', active);
      updateThemeIcon(active);
    });
  }
}

function updateThemeIcon(theme) {
  const themeBtn = document.getElementById('themeToggleBtn');
  if (!themeBtn) return;
  themeBtn.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

/* ==========================================================================
   3. MOBILE NAVIGATION MENU
   ========================================================================== */

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close when clicking nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

/* ==========================================================================
   4. SERVICE CATEGORY FILTER
   ========================================================================== */

function initServiceFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.service-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   5. SOCIAL MEDIA GUIDANCE TABS
   ========================================================================== */

function initGuidanceTabs() {
  const guideBtns = document.querySelectorAll('.guide-tab-btn');
  const panes = document.querySelectorAll('.guide-pane');

  guideBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      guideBtns.forEach(b => b.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = `guide-${btn.getAttribute('data-guide')}`;
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });
}

window.shareTip = function(platform) {
  const tipText = currentLang === 'am' 
    ? "የኦሊ የጥርስ ሕክምና ክሊኒክ የጥርስ ጤና እና እንክብካቤ መመሪያዎች! ውብ ፈገግታዎን በዘመናዊ መንገድ ይንከባከቡ።"
    : "Daily Oral Health Care Guides from OLI Dental Clinic! Keep your smile healthy and bright.";
  const url = window.location.href;

  if (platform === 'tg') {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(tipText)}`, '_blank');
  } else if (platform === 'wa') {
    window.open(`https://wa.me/?text=${encodeURIComponent(tipText + ' ' + url)}`, '_blank');
  }
};

/* ==========================================================================
   6. INTERACTIVE BEFORE & AFTER SLIDER
   ========================================================================== */

function initBeforeAfterSlider() {
  const slider = document.getElementById('smileSlider');
  const afterLayer = document.getElementById('afterLayer');
  const handle = document.getElementById('sliderHandle');
  if (!slider || !afterLayer || !handle) return;

  let isDragging = false;

  const setPosition = (clientX) => {
    const rect = slider.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;
    const percentage = (x / rect.width) * 100;
    
    afterLayer.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  };

  slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    setPosition(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    setPosition(e.clientX);
  });

  // Touch support
  slider.addEventListener('touchstart', (e) => {
    isDragging = true;
    setPosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    setPosition(e.touches[0].clientX);
  }, { passive: true });
}

/* ==========================================================================
   7. INTERACTIVE DENTAL COST ESTIMATOR
   ========================================================================== */

function initCostCalculator() {
  const checkboxes = document.querySelectorAll('input[name="calcItem"]');
  checkboxes.forEach(cb => {
    cb.addEventListener('change', updateCostCalculator);
  });
  updateCostCalculator();
}

function updateCostCalculator() {
  const checkboxes = document.querySelectorAll('input[name="calcItem"]:checked');
  let total = 0;
  checkboxes.forEach(cb => {
    total += parseInt(cb.value, 10) || 0;
  });

  const totalEl = document.getElementById('calcTotalAmount');
  if (totalEl) {
    totalEl.textContent = `${total.toLocaleString()} ETB`;
  }
}

/* ==========================================================================
   8. FAQ ACCORDION
   ========================================================================== */

function initFAQAccordion() {
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      // Close all items
      document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
      });

      // Toggle clicked item
      if (!isActive) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   9. MULTI-STEP APPOINTMENT BOOKING MODAL
   ========================================================================== */

let bookingData = {
  service: '',
  serviceName: '',
  doctor: '',
  doctorName: '',
  date: '',
  time: '10:30 AM',
  patientName: '',
  patientPhone: '',
  notes: ''
};

function initBookingModal() {
  const dialog = document.getElementById('bookingDialog');
  const openBtns = document.querySelectorAll('.open-booking-modal');
  const closeBtn = document.getElementById('closeModalBtn');
  const finishBtn = document.getElementById('finishBookingBtn');

  // Step buttons
  const toStep2Btn = document.getElementById('toStep2Btn');
  const backToStep1Btn = document.getElementById('backToStep1Btn');
  const toStep3Btn = document.getElementById('toStep3Btn');
  const backToStep2Btn = document.getElementById('backToStep2Btn');
  const form = document.getElementById('appointmentForm');

  // Set minimum date to today
  const modalDate = document.getElementById('modalDate');
  const today = new Date().toISOString().split('T')[0];
  if (modalDate) {
    modalDate.min = today;
    modalDate.value = today;
  }

  // Open Modal Triggers
  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Check for presets
      const servicePreset = btn.getAttribute('data-service-preset');
      const doctorPreset = btn.getAttribute('data-doctor-preset');
      
      if (servicePreset) {
        const serviceSelect = document.getElementById('modalService');
        if (serviceSelect) serviceSelect.value = servicePreset;
      }
      if (doctorPreset) {
        const doctorSelect = document.getElementById('modalDoctor');
        if (doctorSelect) doctorSelect.value = doctorPreset;
      }

      resetModalSteps();
      if (dialog && typeof dialog.showModal === 'function') {
        dialog.showModal();
      }
    });
  });

  if (closeBtn && dialog) {
    closeBtn.addEventListener('click', () => dialog.close());
  }

  if (finishBtn && dialog) {
    finishBtn.addEventListener('click', () => dialog.close());
  }

  // Time slot selector
  const timeSlotBtns = document.querySelectorAll('.time-slot-btn');
  const selectedTimeInput = document.getElementById('selectedTimeSlot');
  timeSlotBtns.forEach(slotBtn => {
    slotBtn.addEventListener('click', () => {
      timeSlotBtns.forEach(b => b.classList.remove('active'));
      slotBtn.classList.add('active');
      bookingData.time = slotBtn.getAttribute('data-time');
      if (selectedTimeInput) selectedTimeInput.value = bookingData.time;
    });
  });

  // Step 1 -> Step 2
  if (toStep2Btn) {
    toStep2Btn.addEventListener('click', () => {
      const serviceSelect = document.getElementById('modalService');
      const doctorSelect = document.getElementById('modalDoctor');

      if (!serviceSelect.value) {
        showToast(currentLang === 'am' ? 'እባክዎ የሚፈልጉትን አገልግሎት ይምረጡ' : 'Please select a treatment service');
        serviceSelect.focus();
        return;
      }

      bookingData.service = serviceSelect.value;
      bookingData.serviceName = serviceSelect.options[serviceSelect.selectedIndex].text;
      bookingData.doctor = doctorSelect.value;
      bookingData.doctorName = doctorSelect.options[doctorSelect.selectedIndex].text;

      goToStep(2);
    });
  }

  if (backToStep1Btn) {
    backToStep1Btn.addEventListener('click', () => goToStep(1));
  }

  // Step 2 -> Step 3
  if (toStep3Btn) {
    toStep3Btn.addEventListener('click', () => {
      const dateInput = document.getElementById('modalDate');
      if (!dateInput.value) {
        showToast(currentLang === 'am' ? 'እባክዎ የቀጠሮ ቀን ይምረጡ' : 'Please select an appointment date');
        dateInput.focus();
        return;
      }
      bookingData.date = dateInput.value;
      goToStep(3);
    });
  }

  if (backToStep2Btn) {
    backToStep2Btn.addEventListener('click', () => goToStep(2));
  }

  // Step 3 -> Submission & Success
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('patientName');
      const phoneInput = document.getElementById('patientPhone');
      const notesInput = document.getElementById('patientNotes');

      if (!nameInput.value.trim() || !phoneInput.value.trim()) {
        showToast(currentLang === 'am' ? 'እባክዎ ስምዎን እና ስልክ ቁጥርዎን ያስገቡ' : 'Please provide your name and phone number');
        return;
      }

      bookingData.patientName = nameInput.value.trim();
      bookingData.patientPhone = phoneInput.value.trim();
      bookingData.notes = notesInput ? notesInput.value.trim() : '';

      renderBookingReceipt();
      goToStep('success');
      showToast(currentLang === 'am' ? 'ቀጠሮዎ በተሳካ ሁኔታ ተመዝግቧል!' : 'Appointment booked successfully!');
    });
  }

  // WhatsApp & Telegram instant confirm triggers
  const sendWaBtn = document.getElementById('sendToWhatsAppBtn');
  const sendTgBtn = document.getElementById('sendToTelegramBtn');

  if (sendWaBtn) {
    sendWaBtn.addEventListener('click', () => {
      const msg = `🦷 *OLI Dental Clinic Appointment Confirmation*\n` +
                  `👤 Patient: ${bookingData.patientName}\n` +
                  `📞 Phone: ${bookingData.patientPhone}\n` +
                  `🩺 Service: ${bookingData.serviceName}\n` +
                  `👨‍⚕️ Specialist: ${bookingData.doctorName}\n` +
                  `📅 Date: ${bookingData.date}\n` +
                  `⏰ Time: ${bookingData.time}\n` +
                  `📝 Notes: ${bookingData.notes || 'None'}`;
      window.open(`https://wa.me/251911000000?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }

  if (sendTgBtn) {
    sendTgBtn.addEventListener('click', () => {
      const msg = `OLI Dental Clinic Appointment Confirmation\nPatient: ${bookingData.patientName}\nPhone: ${bookingData.patientPhone}\nService: ${bookingData.serviceName}\nDate: ${bookingData.date} at ${bookingData.time}`;
      window.open(`https://t.me/olidental?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }
}

function goToStep(step) {
  const steps = {
    1: document.getElementById('modalStep1'),
    2: document.getElementById('modalStep2'),
    3: document.getElementById('modalStep3'),
    success: document.getElementById('modalStepSuccess')
  };

  const fill = document.getElementById('stepProgressFill');
  const indicator = document.getElementById('stepIndicator');

  Object.values(steps).forEach(s => s && s.classList.remove('active'));

  if (step === 1) {
    steps[1].classList.add('active');
    if (fill) fill.style.width = '33.33%';
    if (indicator) indicator.textContent = currentLang === 'am' ? 'ደረጃ 1 ከ 3' : 'Step 1 of 3';
  } else if (step === 2) {
    steps[2].classList.add('active');
    if (fill) fill.style.width = '66.66%';
    if (indicator) indicator.textContent = currentLang === 'am' ? 'ደረጃ 2 ከ 3' : 'Step 2 of 3';
  } else if (step === 3) {
    steps[3].classList.add('active');
    if (fill) fill.style.width = '100%';
    if (indicator) indicator.textContent = currentLang === 'am' ? 'ደረጃ 3 ከ 3' : 'Step 3 of 3';
  } else if (step === 'success') {
    steps.success.classList.add('active');
    if (fill) fill.style.width = '100%';
    if (indicator) indicator.textContent = currentLang === 'am' ? 'ተጠናቋል' : 'Completed';
  }
}

function resetModalSteps() {
  goToStep(1);
}

function renderBookingReceipt() {
  const receiptEl = document.getElementById('bookingReceipt');
  if (!receiptEl) return;

  receiptEl.innerHTML = `
    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.35rem;">
      <strong>${currentLang === 'am' ? 'የቀጠሮ ዝርዝር' : 'Booking Summary'}:</strong>
      <span style="color: var(--secondary); font-weight: 700;">#OLI-${Math.floor(1000 + Math.random() * 9000)}</span>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
      <div><small style="color: var(--text-muted);">${currentLang === 'am' ? 'ታካሚ' : 'Patient'}:</small><br><strong>${bookingData.patientName}</strong></div>
      <div><small style="color: var(--text-muted);">${currentLang === 'am' ? 'ስልክ' : 'Phone'}:</small><br><strong>${bookingData.patientPhone}</strong></div>
      <div><small style="color: var(--text-muted);">${currentLang === 'am' ? 'አገልግሎት' : 'Service'}:</small><br><span>${bookingData.serviceName}</span></div>
      <div><small style="color: var(--text-muted);">${currentLang === 'am' ? 'ቀን & ሰዓት' : 'Date & Time'}:</small><br><strong>${bookingData.date} | ${bookingData.time}</strong></div>
    </div>
  `;
}

/* ==========================================================================
   10. QUICK FAST BOOKING BAR
   ========================================================================== */

function initQuickBookingBar() {
  const quickForm = document.getElementById('quickBookingForm');
  const quickDate = document.getElementById('quickDate');
  if (quickDate) {
    const today = new Date().toISOString().split('T')[0];
    quickDate.min = today;
    quickDate.value = today;
  }

  if (quickForm) {
    quickForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const service = document.getElementById('quickService').value;
      const doctor = document.getElementById('quickDoctor').value;
      const date = document.getElementById('quickDate').value;

      if (!service) {
        showToast(currentLang === 'am' ? 'እባክዎ አገልግሎት ይምረጡ' : 'Please select a service');
        return;
      }

      // Sync into main modal
      const modalService = document.getElementById('modalService');
      const modalDoctor = document.getElementById('modalDoctor');
      const modalDate = document.getElementById('modalDate');

      if (modalService) modalService.value = service;
      if (modalDoctor) modalDoctor.value = doctor;
      if (modalDate) modalDate.value = date;

      const dialog = document.getElementById('bookingDialog');
      if (dialog && typeof dialog.showModal === 'function') {
        goToStep(2);
        dialog.showModal();
      }
    });
  }
}

/* ==========================================================================
   11. TOAST NOTIFICATION HELPER
   ========================================================================== */

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-bell"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
