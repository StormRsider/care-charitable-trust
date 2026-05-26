export interface ClinicConfig {
  name: string;
  ngoName: string;
  ngoRegNumber: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  whatsappNumber: string;
  whatsappMessage: string;
  googleMapsIframeUrl: string;
  address: string;
  socials: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  timings: {
    weekdays: string;
    weekdaysTiming: string;
    saturday: string;
    saturdayTiming: string;
    sunday: string;
    sundayTiming: string;
  };
  timingsHindi: {
    weekdays: string;
    weekdaysTiming: string;
    saturday: string;
    saturdayTiming: string;
    sunday: string;
    sundayTiming: string;
  };
}

export const clinicConfig: ClinicConfig = {
  name: "Care Village",
  ngoName: "Care Charitable Trust",
  ngoRegNumber: "Reg. No: 142/IV/2021 (Kerala Charitable Societies Act)",
  phone: "+919846322222",
  phoneFormatted: "+91 98463 22222",
  email: "carevillageedappal@gmail.com",
  whatsappNumber: "919846322222",
  whatsappMessage: "Hello Care Village Edappal, I would like to enquire about your physiotherapy and palliative care services.",
  googleMapsIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1437775083584!2d75.9818817!3d10.7611111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c39050000001%3A0xe54d89679fcd7e0a!2sSalafi%20Masjid%2C%20Edappal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  address: "Salafi Masjid Complex, Edappal, Malappuram District, Kerala - 679576",
  socials: {
    facebook: "https://facebook.com/carevillage.edappal",
    twitter: "https://twitter.com/carevillage_edp",
    instagram: "https://instagram.com/carevillage.edappal",
    linkedin: "https://linkedin.com/company/care-village-edappal"
  },
  timings: {
    weekdays: "Monday - Saturday",
    weekdaysTiming: "8:00 AM - 6:00 PM",
    saturday: "Palliative Home Care",
    saturdayTiming: "9:00 AM - 4:00 PM",
    sunday: "Sunday",
    sundayTiming: "Closed (Medical Camps Only)"
  },
  timingsHindi: {
    weekdays: "सोमवार - शनिवार",
    weekdaysTiming: "सुबह 8:00 - शाम 6:00 बजे",
    saturday: "प्रशामक गृह देखभाल",
    saturdayTiming: "सुबह 9:00 - दोपहर 4:00 बजे",
    sunday: "रविवार",
    sundayTiming: "बंद (केवल चिकित्सा शिविर)"
  }
};
