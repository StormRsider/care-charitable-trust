export interface GalleryItem {
  id: string;
  title: string;
  titleHindi: string;
  description: string;
  descriptionHindi: string;
  category: "clinic" | "equipment" | "rooms" | "camps";
  imagePath: string; // Path inside public/ (e.g. /images/gallery/clinic-reception.jpg)
}

export const galleryData: GalleryItem[] = [
  {
    id: "clinic-environment-1",
    title: "Welcoming Reception & Waiting Area",
    titleHindi: "स्वागत कक्ष और प्रतीक्षा क्षेत्र",
    description: "Designed to feel warm, calm, and highly accessible, keeping with our non-profit community spirit.",
    descriptionHindi: "हमारे धर्मार्थ सामुदायिक दृष्टिकोण के अनुरूप, इसे शांत और सभी के अनुकूल बनाया गया है।",
    category: "clinic",
    imagePath: "/images/gallery/reception.jpg"
  },
  {
    id: "clinic-equipment-1",
    title: "Advanced Electrotherapy Unit",
    titleHindi: "उन्नत इलेक्ट्रोथेरेपी यूनिट",
    description: "High-grade therapeutic machines including IFT and TENS used for targeted muscle stimulation.",
    descriptionHindi: "लक्षित मांसपेशियों की उत्तेजना के लिए उपयोग की जाने वाली IFT और TENS सहित उच्च-स्तरीय मशीनें।",
    category: "equipment",
    imagePath: "/images/gallery/electrotherapy.jpg"
  },
  {
    id: "clinic-equipment-2",
    title: "Continuous Passive Motion (CPM)",
    titleHindi: "कंटीन्यूअस पैसिव मोशन (CPM)",
    description: "Post-surgery knee bending and joint mobilization aid that accelerates postoperative recovery.",
    descriptionHindi: "घुटने और जोड़ों की गतिशीलता बहाल करने वाली मशीन जो सर्जरी के बाद की रिकवरी तेज करती है।",
    category: "equipment",
    imagePath: "/images/gallery/cpm-machine.jpg"
  },
  {
    id: "clinic-rooms-1",
    title: "Private Electrotherapy Cabins",
    titleHindi: "निजी इलेक्ट्रोथेरेपी केबिन",
    description: "Separate therapy booths to ensure privacy and relaxed comfort during long heating sessions.",
    descriptionHindi: "लंबे हीटिंग सत्रों के दौरान गोपनीयता और आराम सुनिश्चित करने के लिए अलग थेरेपी केबिन।",
    category: "rooms",
    imagePath: "/images/gallery/private-cabin.jpg"
  },
  {
    id: "clinic-rooms-2",
    title: "Dedicated Neurological Rehabilitation Gym",
    titleHindi: "न्यूरोलॉजिकल पुनर्वास (स्ट्रोक रिहैब) जिम",
    description: "Spacious training hall with parallel bars, exercise boards, and balance training aids.",
    descriptionHindi: "पैरेलल बार, एक्सरसाइज बोर्ड और बैलेंस ट्रेनिंग एड्स से सुसज्जित बड़ा प्रशिक्षण कक्ष।",
    category: "rooms",
    imagePath: "/images/gallery/neuro-gym.jpg"
  },
  {
    id: "ngo-camps-1",
    title: "Rural Diagnostics & Posture Camp",
    titleHindi: "ग्रामीण निदान एवं शारीरिक आसन शिविर",
    description: "Our mobile outreach team checking spinal and orthopedic parameters in remote rural areas.",
    descriptionHindi: "सुदूर ग्रामीण क्षेत्रों में रीढ़ की हड्डी और जोड़ों के स्वास्थ्य की जांच करती हमारी मोबाइल आउटरीच टीम।",
    category: "camps",
    imagePath: "/images/gallery/rural-camp.jpg"
  },
  {
    id: "ngo-camps-2",
    title: "Free Senior Citizen Mobility Check",
    titleHindi: "बुजुर्गों के लिए निःशुल्क गतिशीलता जांच शिविर",
    description: "Organizing balance checks and distributing free knee supports in urban slums.",
    descriptionHindi: "शहरी बस्तियों में बुजुर्गों के शारीरिक संतुलन की जांच और घुटनों के सपोर्ट्स का निःशुल्क वितरण।",
    category: "camps",
    imagePath: "/images/gallery/elderly-camp.jpg"
  },
  {
    id: "ngo-camps-3",
    title: "School Ergonomic Awareness Seminar",
    titleHindi: "स्कूल एर्गोनोमिक (आसन) जागरूकता सेमिनार",
    description: "Educating government school students about proper posture and avoiding heavy bag strains.",
    descriptionHindi: "सरकारी स्कूल के छात्रों को बैठने के सही तरीके और भारी बस्तों से होने वाले खिंचाव के प्रति जागरूक करना।",
    category: "camps",
    imagePath: "/images/gallery/school-camp.jpg"
  }
];
