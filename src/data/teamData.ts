export interface TeamMember {
  id: string;
  name: string;
  nameHindi: string; // Acts as nameMalayalam in component
  role: string;
  roleHindi: string; // Acts as roleMalayalam in component
  phone?: string;
  imagePath?: string;
}

export const clinicalFaculty: TeamMember[] = [
  {
    id: "muhammed-shareef",
    name: "Dr. Muhammed Shareef, PT",
    nameHindi: "ഡോ. മുഹമ്മദ് ഷരീഫ്, PT",
    role: "Chief Physiotherapist",
    roleHindi: "ചീഫ് ഫിസിയോതെറാപ്പിസ്റ്റ്",
    phone: "+91 96563 68737",
    imagePath: "/PTPIC.jpg"
  },
  {
    id: "muhammed-ajmal",
    name: "Dr. Muhammed Ajmal, PT",
    nameHindi: "ഡോ. മുഹമ്മദ് അജ്മൽ, PT",
    role: "Physiotherapist",
    roleHindi: "ഫിസിയോതെറാപ്പിസ്റ്റ്",
    imagePath: "/PTPIC2.jpeg"
  }
];

export const trustOfficers: TeamMember[] = [
  {
    id: "ashraf-nachiveetil",
    name: "Ashraf Nachiveetil",
    nameHindi: "അഷ്റഫ് നച്ചി വീട്ടിൽ",
    role: "President",
    roleHindi: "പ്രസിഡന്റ്"
  },
  {
    id: "rafeek-maliyakkal",
    name: "Rafeek M Maliyakkal",
    nameHindi: "റഫീഖ് എം മാലിയക്കൽ",
    role: "Trustee",
    roleHindi: "ട്രസ്റ്റി"
  },
  {
    id: "azad-abdullakutty",
    name: "Azad Abdullakutty Thottupadath Valappil",
    nameHindi: "ആസാദ് അബ്ദുള്ളക്കുട്ടി തോട്ടുപടത്ത് വളപ്പിൽ",
    role: "Trustee",
    roleHindi: "ട്രസ്റ്റി"
  },
  {
    id: "shuhaib-accountant",
    name: "Shuhaib",
    nameHindi: "ശുഹൈബ്",
    role: "Accountant",
    roleHindi: "അക്കൗണ്ടന്റ്"
  }
];
