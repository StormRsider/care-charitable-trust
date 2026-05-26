export interface OutreachInitiative {
  id: string;
  title: string;
  titleHindi: string;
  description: string;
  descriptionHindi: string;
  schedule: string;
  scheduleHindi: string;
  impactLabel: string;
  impactLabelHindi: string;
}

export interface EligibilityCriterion {
  label: string;
  labelHindi: string;
  detail: string;
  detailHindi: string;
}

export interface OutreachData {
  stats: {
    treatments: { value: string; label: string; labelHindi: string };
    camps: { value: string; label: string; labelHindi: string };
    recoveryRate: { value: string; label: string; labelHindi: string };
    freeCareVal: { value: string; label: string; labelHindi: string };
  };
  initiatives: OutreachInitiative[];
  criteria: EligibilityCriterion[];
}

export const outreachData: OutreachData = {
  stats: {
    treatments: {
      value: "15,800+",
      label: "Subsidized Sessions Conducted",
      labelHindi: "रियायती सत्र आयोजित किए गए"
    },
    camps: {
      value: "92",
      label: "Rural & Slum Health Camps",
      labelHindi: "ग्रामीण और झुग्गी-झोंपड़ी स्वास्थ्य शिविर"
    },
    recoveryRate: {
      value: "96.4%",
      label: "Patient Mobility Recovery Rate",
      labelHindi: "मरीज की गतिशीलता सुधार दर"
    },
    freeCareVal: {
      value: "4,200+",
      label: "Completely Free Treatments",
      labelHindi: "पूरी तरह से निःशुल्क इलाज"
    }
  },
  initiatives: [
    {
      id: "rural-diagnostic",
      title: "Rural Spine & Joint Mobile Camps",
      titleHindi: "ग्रामीण रीढ़ एवं जोड़ मोबाइल शिविर",
      description: "Our dedicated mobile response van visits outlying villages lacking physical clinics. We offer free diagnostics, posture screening, basic gait aids distribution, and heat-packs therapy.",
      descriptionHindi: "हमारी समर्पित मोबाइल वैन उन बाहरी गांवों का दौरा करती है जहां कोई फिजियोथेरेपिस्ट नहीं है। हम मुफ्त निदान, आसन जांच, वॉकिंग स्टिक वितरण और हीटिंग थेरेपी प्रदान करते हैं।",
      schedule: "First Sunday of every month (8:00 AM - 4:00 PM)",
      scheduleHindi: "प्रत्येक महीने का पहला रविवार (सुबह 8:00 - शाम 4:00 बजे)",
      impactLabel: "Over 450+ villagers assessed per camp",
      impactLabelHindi: "प्रति शिविर 450+ से अधिक ग्रामीणों की जांच"
    },
    {
      id: "slum-neuro-screening",
      title: "Urban Slum Stroke Rehabilitation Drive",
      titleHindi: "शहरी मलिन बस्ती स्ट्रोक पुनर्वास अभियान",
      description: "Providing intensive neural-physiotherapy for paralyzed patients in high-density urban slums who cannot travel to hospitals. Under this drive, therapists conduct home visits for bedside mobility retraining.",
      descriptionHindi: "सघन शहरी बस्तियों में पक्षाघात (लकवा) के रोगियों के लिए घर पर ही फिजियोथेरेपी प्रदान करना। इस अभियान के तहत, थेरेपिस्ट सीधे घर जाकर गतिशीलता का प्रशिक्षण देते हैं।",
      schedule: "Active weekly (Tuesdays & Fridays)",
      scheduleHindi: "साप्ताहिक रूप से सक्रिय (मंगलवार और शुक्रवार)",
      impactLabel: "82 homebound stroke patients rehabilitated",
      impactLabelHindi: "82 घर से बाहर न जा पाने वाले स्ट्रोक रोगियों का इलाज"
    },
    {
      id: "government-school-ergonomics",
      title: "Government School Spinal Screening",
      titleHindi: "सरकारी स्कूल रीढ़ की हड्डी जांच अभियान",
      description: "School children carry heavy backpacks which can lead to permanent spinal alignment issues. Our pediatric specialists screen kids for scoliosis and posture anomalies while educating teachers on active exercises.",
      descriptionHindi: "स्कूली बच्चे भारी बस्ते ले जाते हैं जिससे रीढ़ की हड्डी में स्थायी समस्या हो सकती है। हमारे विशेषज्ञ बच्चों की जांच करते हैं और शिक्षकों को बुनियादी अभ्यासों के प्रति जागरूक करते हैं।",
      schedule: "Bi-monthly school drives during session terms",
      scheduleHindi: "सत्र के दौरान हर दो महीने में एक बार आयोजित",
      impactLabel: "3,200+ students screened & educated",
      impactLabelHindi: "3,200+ छात्रों की जांच और जागरूकता"
    }
  ],
  criteria: [
    {
      label: "Low Income Certificate / BPL Card",
      labelHindi: "कम आय प्रमाण पत्र या बीपीएल (BPL) कार्ड",
      detail: "Patients holding valid Below Poverty Line (BPL) cards or income certificates demonstrating household income below ₹15,000/month get 100% free treatment.",
      detailHindi: "गरीबी रेखा से नीचे (BPL) राशन कार्ड या ₹15,000/माह से कम पारिवारिक आय का प्रमाण पत्र धारकों को 100% मुफ्त चिकित्सा दी जाती है।"
    },
    {
      label: "Government Pensioners / Senior Citizens in Distress",
      labelHindi: "सरकारी पेंशनर / संकटग्रस्त वरिष्ठ नागरिक",
      detail: "Elderly patients living in community old-age shelters or who do not have familial support receive immediate, zero-charge mobility assistance.",
      detailHindi: "सामुदायिक वृद्धाश्रमों में रहने वाले या पारिवारिक सहायता से वंचित बुजुर्ग रोगियों को तत्काल, बिना किसी शुल्क के फिजियोथेरेपी सहायता दी जाती है।"
    },
    {
      label: "Orphaned Children & Differently-Abled Youth",
      labelHindi: "अनाथ बच्चे और दिव्यांग युवा",
      detail: "All pediatric treatments for neurological delays and joint adjustments for differently-abled youngsters are fully sponsored under Care Charitable Trust Special Children Fund.",
      detailHindi: "दिव्यांग बच्चों और अनाथ बच्चों के लिए सभी बाल चिकित्सा और जोड़ों की थेरेपी को केयर ट्रस्ट स्पेशल चिल्ड्रन फंड के तहत पूरी तरह प्रायोजित किया जाता है।"
    }
  ]
};
