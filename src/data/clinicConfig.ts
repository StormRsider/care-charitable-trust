export interface ClinicConfig {
  name: string;
  npoName: string;
  npoRegNumber: string;
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
  npoName: "Care Charitable Trust",
  npoRegNumber: "Reg. No: 343/2021/IV",
  phone: "+918281869769",
  phoneFormatted: "+91 8281 869769",
  email: "careedappal@gmail.com",
  whatsappNumber: "918281869769",
  whatsappMessage: "Hello Care Village Edappal, I would like to make a donation or enquire about your physiotherapy clinic.",
  googleMapsIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2992443228127!2d76.01106659999998!3d10.788377400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b9003000e66d%3A0x41fae23ccb26c14b!2sCARE%20VILLAGE%20EDAPPAL!5e0!3m2!1sen!2sin!4v1780254579118!5m2!1sen!2sin",
  address: "Q2Q6+9C4, CARE VILLAGE -CALICUT ROAD, VIA, near GEETHA DOCTOR, opp. GOVINDA THEATRE, Edappal, Kerala 679576",
  socials: {
    facebook: "https://www.facebook.com/p/Care-Charitable-Trust-Edappal-100079671062174/",
    instagram: "https://www.instagram.com/care.edappal/?hl=en"
  },
  timings: {
    weekdays: "Monday - Friday",
    weekdaysTiming: "8:00 AM - 6:00 PM",
    saturday: "Saturday",
    saturdayTiming: "8:00 AM - 4:00 PM",
    sunday: "Sunday",
    sundayTiming: "Closed"
  },
  timingsHindi: {
    weekdays: "सोमवार - शुक्रवार",
    weekdaysTiming: "सुबह 8:00 - शाम 6:00 बजे",
    saturday: "शनिवार",
    saturdayTiming: "सुबह 8:00 - दोपहर 4:00 बजे",
    sunday: "रविवार",
    sundayTiming: "बंद"
  }
};
