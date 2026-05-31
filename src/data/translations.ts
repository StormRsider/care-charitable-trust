export interface TranslationSet {
  // Navigation
  navHome: string;
  navAbout: string;
  navServices: string;
  navTeam: string;
  navGallery: string;
  navContact: string;
  navOutreach: string;
  btnBookNow: string;

  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  btnHeroBook: string;
  btnHeroContact: string;
  heroTrustBadge: string;

  // Overview / NGO Intro
  introTitle: string;
  introSubtitle: string;
  introText1: string;
  introText2: string;
  introLearnMore: string;

  // Services Preview
  servicesTitle: string;
  servicesSubtitle: string;
  viewAllServices: string;

  // Stats Section
  statsTitle: string;
  statsSubtitle: string;
  statTreatments: string;
  statCamps: string;
  statRecovery: string;
  statFreeCare: string;

  // Testimonials
  testimonialsTitle: string;
  testimonialsSubtitle: string;

  // About Page
  aboutMissionTitle: string;
  aboutMissionDesc: string;
  aboutVisionTitle: string;
  aboutVisionDesc: string;
  aboutPhilosophyTitle: string;
  aboutPhilosophyDesc: string;
  aboutWhyCharityTitle: string;
  aboutWhyCharityDesc: string;

  // Gallery
  galleryTitle: string;
  gallerySubtitle: string;
  galleryTabAll: string;
  galleryTabClinic: string;
  galleryTabEquipment: string;
  galleryTabRooms: string;
  galleryTabCamps: string;
  galleryClose: string;

  // Outreach / NGO
  outreachTitle: string;
  outreachSubtitle: string;
  outreachCampTitle: string;
  outreachCampDesc: string;
  outreachFreeTitle: string;
  outreachFreeDesc: string;
  outreachAwarenessTitle: string;
  outreachAwarenessDesc: string;
  outreachIntegrityTitle: string;
  outreachIntegrityDesc: string;

  // Team Page
  teamTitle: string;
  teamSubtitle: string;
  teamVolunteerTitle: string;
  teamVolunteerSubtitle: string;
  teamExp: string;
  teamVerifiedLicense: string;

  // Contact Page
  contactTitle: string;
  contactSubtitle: string;
  contactFormHeader: string;
  contactFormSub: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  contactService: string;
  contactMessage: string;
  contactBtnSend: string;
  contactSending: string;
  contactSuccessTitle: string;
  contactSuccessDesc: string;
  contactWhatsAppBtn: string;
  contactCallBtn: string;
  contactEmailBtn: string;
  contactTimingsHeader: string;
  contactStatusOpen: string;
  contactStatusClosed: string;

  // Appointment Scheduler Modal
  modalTitle: string;
  modalStep1: string;
  modalStep2: string;
  modalStep3: string;
  modalStep4: string;
  modalNext: string;
  modalBack: string;
  modalSubmit: string;
  modalAge: string;
  modalA11yReq: string;
  modalSelectTherapist: string;
  modalSelectDate: string;
  modalSelectTime: string;
  modalFirstAvailable: string;
  modalConfirmTitle: string;
  modalConfirmDesc: string;
  modalClose: string;

  // Accessibility Panel
  a11yTitle: string;
  a11yTextSize: string;
  a11yNormal: string;
  a11yLarge: string;
  a11yExtraLarge: string;
  a11yContrast: string;
  a11yDefaultContrast: string;
  a11yHighContrast: string;
  a11yReducedMotion: string;
  a11yReducedMotionOn: string;
  a11yReducedMotionOff: string;
  a11ySpeech: string;
  a11ySpeechOn: string;
  a11ySpeechOff: string;
  a11ySpeechTip: string;
}

export const translations: Record<"en" | "ml", TranslationSet> = {
  en: {
    navHome: "Home",
    navAbout: "About Us",
    navServices: "Services",
    navTeam: "Our Team",
    navGallery: "Gallery",
    navContact: "Contact Us",
    navOutreach: "Community Programs",
    btnBookNow: "Book Appointment",

    heroTitle: "Compassionate Care & Quality Rehabilitation",
    heroSubtitle: "Dedicated to restoring mobility, easing pain, and uplifting lives near Salafi Masjid, Edappal, Kerala.",
    btnHeroBook: "Book Appointment",
    btnHeroContact: "Contact NGO",
    heroTrustBadge: "🏥 A Charitable Trust Initiative",

    introTitle: "Compassionate Healing, Powered by Community",
    introSubtitle: "Care Charitable Trust bridges the gap in accessible healthcare, providing state-of-the-art rehabilitation.",
    introText1: "At Care Village, we believe that premium physical rehab should not be a luxury. Operating under a non-profit trust, our clinic ensures that clinical excellence is accessible to everyone entirely free of cost. Our operations are supported fully by the compassionate contributions of our donors and well-wishers.",
    introText2: "Equipped with modern therapeutic modalities and staffed by fully certified, empathetic physiotherapists, we treat every patient with the dignity and unhurried care they deserve. We don't just treat symptoms; we restore independence.",
    introLearnMore: "Read Our Story",

    servicesTitle: "Specialized Rehabilitation Services",
    servicesSubtitle: "Professional therapy programs designed to restore function, strength, and mobility, provided 100% free of charge to all patients.",
    viewAllServices: "View All Services",

    statsTitle: "Our Tangible Community Impact",
    statsSubtitle: "Every session held and camp conducted takes us closer to a healthier, pain-free community.",
    statTreatments: "100% Free Treatments",
    statCamps: "Free Outreach Camps Conducted",
    statRecovery: "Patient Mobility Recovery Rate",
    statFreeCare: "Completely Free Care Disbursed",

    testimonialsTitle: "Voices of Recovery",
    testimonialsSubtitle: "Hear how compassionate therapy has transformed the lives of athletes, community elders, and patients alike.",

    aboutMissionTitle: "Our Mission",
    aboutMissionDesc: "To deliver accessible, high-quality, and evidence-based physiotherapy to everyone, ensuring that physical disability or financial hardship never blocks the path to a pain-free life.",
    aboutVisionTitle: "Our Vision",
    aboutVisionDesc: "To build a community where premium rehabilitative care is universally accessible, fostering independence and restoring active livelihood across all economic layers.",
    aboutPhilosophyTitle: "Clinical Philosophy",
    aboutPhilosophyDesc: "We practice slow, focused, patient-centered medicine. We spend time listening, analyzing physical roots, and designing community support, rather than hurrying through short machine sessions.",
    aboutWhyCharityTitle: "Why Community Healthcare Matters",
    aboutWhyCharityDesc: "High rehabilitation costs often lead patients to abandon recovery early, causing long-term physical limitations. By keeping all our treatments completely free of cost, we protect vulnerable families.",

    galleryTitle: "Our Clinic & Outreach Gallery",
    gallerySubtitle: "A visual tour of our clean treatment environments, modern therapeutic equipment, private rehab rooms, and rural medical outreach camps.",
    galleryTabAll: "All Pictures",
    galleryTabClinic: "Environment",
    galleryTabEquipment: "Equipment",
    galleryTabRooms: "Therapy Rooms",
    galleryTabCamps: "NGO Camps",
    galleryClose: "Close Preview",

    outreachTitle: "NGO & Community Welfare Programs",
    outreachSubtitle: "Care Charitable Trust goes beyond the clinic doors to run impactful welfare initiatives for the local community.",
    outreachCampTitle: "Free Health & Diagnostic Camps",
    outreachCampDesc: "We organize monthly community diagnostic camps in remote villages, offering free posture screening, stroke assessment, and introductory pain consultations.",
    outreachFreeTitle: "100% Free Treatment Scheme",
    outreachFreeDesc: "All patients receive completely free access to all clinical therapy units, including custom orthotic aids and support devices.",
    outreachAwarenessTitle: "School & Corporate Ergonomics",
    outreachAwarenessDesc: "Our specialists run non-profit workshops in local government schools to screen spinal health in children, and in public services to teach active stretching and joint care.",
    outreachIntegrityTitle: "Trust Accountability & Integrity",
    outreachIntegrityDesc: "All donations and trust funding are transparently audited. Every single rupee of funding is re-invested into updating therapeutic equipment and running free mobile checkup programs.",

    teamTitle: "Our Healing Hands",
    teamSubtitle: "Meet our dedicated team of fully licensed, empathetic physiotherapists and visiting medical experts who bring their hearts to patient care.",
    teamVolunteerTitle: "Volunteering Consultants",
    teamVolunteerSubtitle: "Prominent orthopedic surgeons and senior neurologists who visit our charitable clinic weekly to provide free consultations.",
    teamExp: "Years Experience",
    teamVerifiedLicense: "Registered PT Practitioner",

    contactTitle: "Get In Touch",
    contactSubtitle: "Have questions about our free services or treatments? Reach out via phone, email, WhatsApp, or drop by our welcoming Edappal clinic.",
    contactFormHeader: "Send a Message",
    contactFormSub: "We generally reply within a few hours.",
    contactName: "Full Name",
    contactEmail: "Email Address",
    contactPhone: "Phone Number",
    contactService: "Inquiry Regarding",
    contactMessage: "Your Message",
    contactBtnSend: "Send Message",
    contactSending: "Sending...",
    contactSuccessTitle: "Message Received!",
    contactSuccessDesc: "Thank you for reaching out. A Care Charitable Trust coordinator will get in touch with you shortly.",
    contactWhatsAppBtn: "Chat on WhatsApp",
    contactCallBtn: "Call Coordinator",
    contactEmailBtn: "Email Us Directly",
    contactTimingsHeader: "Clinic Hours",
    contactStatusOpen: "Open Now",
    contactStatusClosed: "Closed",

    modalTitle: "Request an Appointment",
    modalStep1: "Patient Info",
    modalStep2: "Service & Doctor",
    modalStep3: "Schedule Slot",
    modalStep4: "Review & Confirm",
    modalNext: "Next Step",
    modalBack: "Go Back",
    modalSubmit: "Submit Booking Request",
    modalAge: "Age",
    modalA11yReq: "Accessibility Needs (Wheelchair, visual help, etc.)",
    modalSelectTherapist: "Select Preferred Therapist",
    modalSelectDate: "Select Date",
    modalSelectTime: "Select Time Slot",
    modalFirstAvailable: "First Available Specialist",
    modalConfirmTitle: "Appointment Requested!",
    modalConfirmDesc: "Your request is registered successfully. Our desk coordinator will call you to confirm your exact slot within 2 hours.",
    modalClose: "Close Window",

    a11yTitle: "Accessibility Settings",
    a11yTextSize: "Text Size Options",
    a11yNormal: "Normal Text",
    a11yLarge: "Large Text",
    a11yExtraLarge: "Extra Large Text",
    a11yContrast: "Contrast Settings",
    a11yDefaultContrast: "Default Theme",
    a11yHighContrast: "High Contrast",
    a11yReducedMotion: "Motion Reducer",
    a11yReducedMotionOn: "Reduced Motion",
    a11yReducedMotionOff: "Standard Animations",
    a11ySpeech: "Voice Assistant (TTS)",
    a11ySpeechOn: "TTS Activated",
    a11ySpeechOff: "TTS Disabled",
    a11ySpeechTip: "Hover over any paragraph or heading to hear it read out loud."
  },
  ml: {
    navHome: "ഹോം",
    navAbout: "ഞങ്ങളെക്കുറിച്ച്",
    navServices: "സേവനങ്ങൾ",
    navTeam: "ഞങ്ങളുടെ ടീം",
    navGallery: "ഗാലറി",
    navContact: "സമ്പർക്കം",
    navOutreach: "കമ്മ്യൂണിറ്റി പ്രോഗ്രാമുകൾ",
    btnBookNow: "അപ്പോയിന്റ്മെന്റ്",

    heroTitle: "കാരുണ്യപൂർണ്ണമായ പരിചരണവും മികച്ച പുനരധിവാസവും",
    heroSubtitle: "എടപ്പാൾ സലഫി മസ്ജിദിന് സമീപം വേദനകൾ അകറ്റി ചലനശേഷി വീണ്ടെടുക്കാനും ജീവിത നിലവാരം ഉയർത്താനും ഞങ്ങൾ പ്രതിജ്ഞാബദ്ധരാണ്.",
    btnHeroBook: "ബുക്കിംഗ് നടത്തുക",
    btnHeroContact: "ഞങ്ങളുമായി ബന്ധപ്പെടുക",
    heroTrustBadge: "🏥 ഒരു ചാരിറ്റബിൾ ട്രസ്റ്റ് സംരംഭം",

    introTitle: "കാരുണ്യപൂർണ്ണമായ ചികിത്സ, കമ്മ്യൂണിറ്റിയുടെ പിന്തുണയോടെ",
    introSubtitle: "കെയർ ചാരിറ്റബിൾ ട്രസ്റ്റ് ആധുനിക പുനരധിവാസ ചികിത്സകൾ എല്ലാവരിലേക്കും എത്തിക്കുന്നു.",
    introText1: "കെയർ വില്ലേജിൽ, ഉയർന്ന നിലവാരമുള്ള ഫിസിയോതെറാപ്പി ചികിത്സകൾ ആർക്കും അപ്രാപ്യമാകരുത് എന്ന് ഞങ്ങൾ കരുതുന്നു. ഒരു നോൺ-പ്രോഫിറ്റ് ട്രസ്റ്റിന് കീഴിൽ പ്രവർത്തിക്കുന്ന ഞങ്ങളുടെ ക്ലിനിക്കിൽ തികച്ചും സൗജന്യമായാണ് ഞങ്ങൾ മികച്ച ചികിത്സകൾ നൽകുന്നത്. ഞങ്ങളുടെ പ്രവർത്തനങ്ങൾ പൂർണ്ണമായും കാരുണ്യമനസ്കരായ ആളുകളുടെ സംഭാവനകൾ വഴിയാണ് മുന്നോട്ട് പോകുന്നത്.",
    introText2: "ആധുനിക ചികിത്സാ ഉപകരണങ്ങളും പൂർണ്ണ യോഗ്യതയുള്ള ഫിസിയോതെറാപ്പിസ്റ്റുകളും ഉൾപ്പെടുന്ന ഞങ്ങളുടെ വിഭാഗം രോഗികൾക്ക് മാന്യവും കൃത്യവുമായ പരിചരണം ഉറപ്പുനൽകുന്നു. ഞങ്ങൾ രോഗലക്ഷണങ്ങളെ മാത്രമല്ല, രോഗിയുടെ ചലനസ്വാതന്ത്ര്യത്തെയാണ് തിരികെ നൽകുന്നത്.",
    introLearnMore: "ഞങ്ങളുടെ ചരിത്രം",

    servicesTitle: "പ്രത്യേക പുനരധിവാസ സേവനങ്ങൾ",
    servicesSubtitle: "രോഗികൾക്ക് പൂർണ്ണമായും സൗജന്യമായി വേദനരഹിതമായ ചലനശേഷിയും ആക്ടീവ് ബലവും നൽകുന്നതിനായി രൂപപ്പെടുത്തിയ ഫിസിയോതെറാപ്പി ചികിത്സകൾ.",
    viewAllServices: "എല്ലാ സേവനങ്ങളും കാണുക",

    statsTitle: "കമ്മ്യൂണിറ്റിയിൽ ഞങ്ങളുടെ സ്വാധീനം",
    statsSubtitle: "ഓരോ ഫിസിയോതെറാപ്പി സെഷനും ക്യാമ്പുകളും വേദനയില്ലാത്ത ഒരു സമൂഹത്തിലേക്ക് നമ്മെ കൂടുതൽ അടുപ്പിക്കുന്നു.",
    statTreatments: "100% സൗജന്യ ചികിത്സകൾ",
    statCamps: "നടത്തിയ സൗജന്യ മെഡിക്കൽ ക്യാമ്പുകൾ",
    statRecovery: "രോഗികളുടെ ചലനശേഷി തിരിച്ചുപിടിക്കൽ നിരക്ക്",
    statFreeCare: "പൂർണ്ണമായും സൗജന്യമായി നൽകിയ ചികിത്സകൾ",

    testimonialsTitle: "രോഗമുക്തിയുടെ അനുഭവങ്ങൾ",
    testimonialsSubtitle: "കെയർ വില്ലേജിലെ കാരുണ്യപൂർണ്ണമായ പരിചരണം രോഗികളുടെ ജീവിതത്തിൽ വരുത്തിയ മാറ്റങ്ങളെക്കുറിച്ച് അവരിൽ നിന്ന് തന്നെ കേൾക്കൂ.",

    aboutMissionTitle: "ഞങ്ങളുടെ ലക്ഷ്യം",
    aboutMissionDesc: "സാമ്പത്തിക ബുദ്ധിമുട്ടുകളോ ശാരീരിക അവശതകളോ രോഗമുക്തിക്ക് തടസ്സമാകാത്ത രീതിയിൽ ഉയർന്ന നിലവാരമുള്ള ഫിസിയോതെറാപ്പി സേവനങ്ങൾ എല്ലാവരിലേക്കും എത്തിക്കുക.",
    aboutVisionTitle: "ഞങ്ങളുടെ കാഴ്ചപ്പാട്",
    aboutVisionDesc: "എല്ലാവർക്കും മികച്ച പുനരധിവാസ ചികിത്സകൾ ലഭ്യമാകുന്ന, രോഗികൾക്ക് സ്വയംപര്യാപ്തത ഉറപ്പാക്കുന്ന ഒരു സമൂഹം കെട്ടിപ്പടുക്കുക.",
    aboutPhilosophyTitle: "ചികിത്സാ തത്വം",
    aboutPhilosophyDesc: "രോഗികളുടെ ബുദ്ധിമുട്ടുകൾ ക്ഷമയോടെ കേട്ട്, ശാരീരിക കാരണങ്ങൾ വിശകലനം ചെയ്ത് മികച്ച രോഗമുക്തി ഉറപ്പാക്കുന്ന സുസ്ഥിരമായ രീതിയിലാണ് ഞങ്ങൾ പ്രവർത്തിക്കുന്നത്.",
    aboutWhyCharityTitle: "എന്തുകൊണ്ട് കമ്മ്യൂണിറ്റി ഹെൽത്ത്കെയർ?",
    aboutWhyCharityDesc: "ഉയർന്ന പുനരധിവാസ ചികിത്സാ ചിലവുകൾ പല രോഗികളെയും ചികിത്സ പൂർത്തിയാക്കുന്നതിൽ നിന്ന് പിന്തിരിപ്പിക്കുന്നു. ഇത് തടയാൻ ഞങ്ങൾ ചികിത്സ തികച്ചും സൗജന്യമായി ലഭ്യമാക്കുന്നു.",

    galleryTitle: "ഞങ്ങളുടെ ക്ലിനിക് & ഔട്ട്രീച്ച് ഗാലറി",
    gallerySubtitle: "ഞങ്ങളുടെ മികച്ച ചികിത്സാ മുറികൾ, ആധുനിക ഉപകരണങ്ങൾ, കമ്മ്യൂണിറ്റി ക്യാമ്പുകൾ എന്നിവയുടെ ദൃശ്യങ്ങൾ.",
    galleryTabAll: "എല്ലാ ചിത്രങ്ങളും",
    galleryTabClinic: "പരിസ്ഥിതി",
    galleryTabEquipment: "ചികിത്സാ ഉപകരണങ്ങൾ",
    galleryTabRooms: "ചികിത്സാ മുറികൾ",
    galleryTabCamps: "മെഡിക്കൽ ക്യാമ്പുകൾ",
    galleryClose: "ക്ലോസ് ചെയ്യുക",

    outreachTitle: "NGO & കമ്മ്യൂണിറ്റി വെൽഫെയർ പ്രോഗ്രാമുകൾ",
    outreachSubtitle: "ഗ്രാമീണ മേഖലകളിലെ ബുദ്ധിമുട്ടുന്ന രോഗികളിലേക്ക് പ്രത്യാശയും കമ്മ്യൂണിറ്റി പിന്തുണയുമായി കെയർ ചാരിറ്റബിൾ ട്രസ്റ്റ് എത്തുന്നു.",
    outreachCampTitle: "സൗജന്യ മെഡിക്കൽ ക്യാമ്പുകൾ",
    outreachCampDesc: "ഗ്രാമപ്രദേശങ്ങളിൽ ഞങ്ങൾ എല്ലാ മാസവും സൗജന്യ രോഗനിർണ്ണയ ക്യാമ്പുകളും സ്ട്രോക്ക് പരിശോധനകളും നടത്തുന്നു.",
    outreachFreeTitle: "100% സൗജന്യ ചികിത്സാ പദ്ധതി",
    outreachFreeDesc: "എല്ലാ രോഗികൾക്കും എല്ലാത്തരം ഫിസിയോതെറാപ്പി ചികിത്സകളും തികച്ചും സൗജന്യമായി നൽകുന്നു.",
    outreachAwarenessTitle: "ബോധവൽക്കരണ സെഷനുകൾ",
    outreachAwarenessDesc: "സ്കൂളുകളിലും പൊതുസ്ഥലങ്ങളിലും നട്ടെല്ലിന്റെ ആരോഗ്യം, പക്ഷാഘാത ലക്ഷണങ്ങൾ എന്നിവയെക്കുറിച്ച് ഞങ്ങൾ ബോധവൽക്കരണം നൽകുന്നു.",
    outreachIntegrityTitle: "സുതാര്യതയും വിശ്വസ്തതയും",
    outreachIntegrityDesc: "ട്രസ്റ്റിലേക്ക് ലഭിക്കുന്ന ഓരോ സംഭാവനയും പൂർണ്ണമായും സുതാര്യമായി ഓഡിറ്റ് ചെയ്യുകയും കമ്മ്യൂണിറ്റി പ്രോഗ്രാമുകൾക്കായി വിനിയോഗിക്കുകയും ചെയ്യുന്നു.",

    teamTitle: "ഞങ്ങളുടെ വിദഗ്ദ്ധർ",
    teamSubtitle: "രോഗികൾക്ക് മികച്ച ചികിത്സ നൽകുന്നതിന് പ്രതിജ്ഞാബദ്ധരായ ഞങ്ങളുടെ രജിസ്റ്റർ ചെയ്ത ഫിസിയോതെറാപ്പിസ്റ്റുകളെ പരിചയപ്പെടാം.",
    teamVolunteerTitle: "വോളണ്ടിയറിങ് കൺസൾട്ടന്റുമാർ",
    teamVolunteerSubtitle: "ഞങ്ങളുടെ ചാരിറ്റബിൾ ക്ലിനിക്കിൽ സൗജന്യ സേവനം നൽകുന്ന പ്രമുഖ ഓർത്തോപീഡിക്, ന്യൂറോളജി വിദഗ്ദ്ധർ.",
    teamExp: "വർഷത്തെ പരിചയം",
    teamVerifiedLicense: "രജിസ്റ്റർ ചെയ്ത തെറാപ്പിസ്റ്റ്",

    contactTitle: "ബന്ധപ്പെടുക",
    contactSubtitle: "ഞങ്ങളുടെ സൗജന്യ സേവനങ്ങളെക്കുറിച്ചോ ചികിത്സകളെക്കുറിച്ചോ സംശയങ്ങളുണ്ടോ? ഫോണിലൂടെയോ വാട്സാപ്പിലൂടെയോ എടപ്പാളിലെ ഞങ്ങളുടെ ക്ലിനിക് സന്ദർശിച്ചോ ചോദിക്കാവുന്നതാണ്.",
    contactFormHeader: "സന്ദേശം അയക്കുക",
    contactFormSub: "ചുരുങ്ങിയ സമയത്തിനുള്ളിൽ ഞങ്ങൾ മറുപടി നൽകുന്നതാണ്.",
    contactName: "പൂർണ്ണമായ പേര്",
    contactEmail: "ഇമെയിൽ വിലാസം",
    contactPhone: "ഫോൺ നമ്പർ",
    contactService: "അന്വേഷണ വിഷയം",
    contactMessage: "നിങ്ങളുടെ സന്ദേശം",
    contactBtnSend: "സന്ദേശം അയക്കുക",
    contactSending: "അയക്കുന്നു...",
    contactSuccessTitle: "സന്ദേശം ലഭിച്ചു!",
    contactSuccessDesc: "ഞങ്ങളുമായി ബന്ധപ്പെട്ടതിന് നന്ദി. ഞങ്ങളുടെ കോർഡിനേറ്റർ ഉടൻ തന്നെ നിങ്ങളുമായി ബന്ധപ്പെടുന്നതാണ്.",
    contactWhatsAppBtn: "വാട്സാപ്പിൽ ചാറ്റ് ചെയ്യാം",
    contactCallBtn: "കോർഡിനേറ്ററെ വിളിക്കാം",
    contactEmailBtn: "ഇമെയിൽ അയക്കുക",
    contactTimingsHeader: "പ്രവർത്തന സമയം",
    contactStatusOpen: "ഇപ്പോൾ പ്രവർത്തിക്കുന്നു",
    contactStatusClosed: "ഇപ്പോൾ പ്രവർത്തിക്കുന്നില്ല",

    modalTitle: "അപ്പോയിന്റ്മെന്റിനായി അഭ്യർത്ഥിക്കുക",
    modalAge: "വയസ്സ്",
    modalA11yReq: "പ്രത്യേക ആവശ്യങ്ങൾ (വീൽചെയർ സഹായം മുതലായവ)",
    modalStep1: "രോഗിയുടെ വിവരങ്ങൾ",
    modalStep2: "സേവനങ്ങളും ഡോക്ടറും",
    modalStep3: "സമയം തിരഞ്ഞെടുക്കുക",
    modalStep4: "ഉറപ്പാക്കുക",
    modalNext: "അടുത്ത ഘട്ടം",
    modalBack: "പിന്നിലേക്ക്",
    modalSubmit: "അഭ്യർത്ഥന സമർപ്പിക്കുക",
    modalSelectTherapist: "ഫിസിയോതെറാപ്പിസ്റ്റിനെ തിരഞ്ഞെടുക്കുക",
    modalSelectDate: "തീയതി തിരഞ്ഞെടുക്കുക",
    modalSelectTime: "സമയം തിരഞ്ഞെടുക്കുക",
    modalFirstAvailable: "ആദ്യ ലഭ്യമായ തെറാപ്പിസ്റ്റ്",
    modalConfirmTitle: "അഭ്യർത്ഥന സമർപ്പിച്ചു!",
    modalConfirmDesc: "നിങ്ങളുടെ അഭ്യർത്ഥന വിജയകരമായി രജിസ്റ്റർ ചെയ്തു. ഞങ്ങളുടെ ഡെസ്ക് കോർഡിനേറ്റർ 2 മണിക്കൂറിനുള്ളിൽ നിങ്ങളെ ബന്ധപ്പെടുന്നതാണ്.",
    modalClose: "വിൻഡോ ക്ലോസ് ചെയ്യുക",

    a11yTitle: "ആക്സസിബിലിറ്റി ക്രമീകരണങ്ങൾ",
    a11yTextSize: "അക്ഷരങ്ങളുടെ വലിപ്പം",
    a11yNormal: "സാധാരണ വലിപ്പം",
    a11yLarge: "വലിയ വലിപ്പം",
    a11yExtraLarge: "വളരെ വലിയ വലിപ്പം",
    a11yContrast: "കോൺട്രാസ്റ്റ് ക്രമീകരണങ്ങൾ",
    a11yDefaultContrast: "സാധാരണ തീം",
    a11yHighContrast: "ഹൈ കോൺട്രാസ്റ്റ്",
    a11yReducedMotion: "എനിമേഷൻ നിയന്ത്രണം",
    a11yReducedMotionOn: "എനിമേഷൻ കുറയ്ക്കുക",
    a11yReducedMotionOff: "സാധാരണ എനിമേഷൻ",
    a11ySpeech: "വോയ്സ് അസിസ്റ്റന്റ് (TTS)",
    a11ySpeechOn: "TTS ഓൺ",
    a11ySpeechOff: "TTS ഓഫ്",
    a11ySpeechTip: "ഏതെങ്കിലും വാചകത്തിന് മുകളിൽ മൗസ് കൊണ്ടുവന്നാൽ അത് ഉറക്കെ വായിച്ചു കേൾക്കാവുന്നതാണ്."
  }
};
