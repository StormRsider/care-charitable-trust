export interface TeamMember {
  id: string;
  name: string;
  nameHindi: string; // Acts as nameMalayalam in component
  role: string;
  roleHindi: string; // Acts as roleMalayalam in component
  spec: string;
  specHindi: string; // Acts as specMalayalam in component
  exp: number;
  expHindi: string; // Acts as expMalayalam in component
  qualifications: string;
  qualificationsHindi: string; // Acts as qualificationsMalayalam in component
  regNumber: string;
  imagePath: string;
  bio: string;
  bioHindi: string; // Acts as bioMalayalam in component
  isVolunteer: boolean;
  visitingHours?: string;
  visitingHoursHindi?: string; // Acts as visitingHoursMalayalam in component
}

export const teamData: TeamMember[] = [
  {
    id: "muhammed-shareef",
    name: "Dr. Muhammed Shareef, PT",
    nameHindi: "ഡോ. മുഹമ്മദ് ഷരീഫ്, PT",
    role: "Chief Physiotherapist",
    roleHindi: "ചീഫ് ഫിസിയോതെറാപ്പിസ്റ്റ്",
    spec: "Neurological & Stroke Rehabilitation",
    specHindi: "പക്ഷാഘാത പുനരധിവാസ വിദഗ്ദ്ധൻ",
    exp: 12,
    expHindi: "12+ വർഷം",
    qualifications: "B.P.T, M.P.T",
    qualificationsHindi: "B.P.T, M.P.T",
    regNumber: "KSPC-REG-2015/PT-5567",
    imagePath: "/PTPIC.jpg",
    bio: "Dr. Muhammed Shareef is our Chief Physiotherapist.",
    bioHindi: "കെയർ വില്ലേജിന്റെ ചീഫ് ഫിസിയോതെറാപ്പിസ്റ്റാണ് ഡോ. മുഹമ്മദ് ഷരീഫ്.",
    isVolunteer: false
  },
  {
    id: "staff-therapist-1",
    name: "Physiotherapist",
    nameHindi: "ഫിസിയോതെറാപ്പിസ്റ്റ്",
    role: "Staff Therapist",
    roleHindi: "സ്റ്റാഫ് തെറാപ്പിസ്റ്റ്",
    spec: "Physical Therapy & Rehabilitation",
    specHindi: "ഫിസിയോതെറാപ്പി & പുനരധിവാസം",
    exp: 3,
    expHindi: "3+ വർഷം",
    qualifications: "B.P.T",
    qualificationsHindi: "B.P.T",
    regNumber: "KSPC-REG-PENDING",
    imagePath: "/images/team/staff-1.jpg",
    bio: "Licensed physical therapist delivering dedicated clinical care.",
    bioHindi: "കെയർ വില്ലേജിലെ സ്റ്റാഫ് ഫിസിയോതെറാപ്പിസ്റ്റ്.",
    isVolunteer: false
  },
  {
    id: "staff-therapist-2",
    name: "Physiotherapist",
    nameHindi: "ഫിസിയോതെറാപ്പിസ്റ്റ്",
    role: "Staff Therapist",
    roleHindi: "സ്റ്റാഫ് തെറാപ്പിസ്റ്റ്",
    spec: "Physical Therapy & Rehabilitation",
    specHindi: "ഫിസിയോതെറാപ്പി & പുനരധിവാസം",
    exp: 2,
    expHindi: "2+ വർഷം",
    qualifications: "B.P.T",
    qualificationsHindi: "B.P.T",
    regNumber: "KSPC-REG-PENDING-2",
    imagePath: "/images/team/staff-2.jpg",
    bio: "Licensed physical therapist specializing in exercise and pain relief protocols.",
    bioHindi: "കെയർ വില്ലേജിലെ സ്റ്റാഫ് ഫിസിയോതെറാപ്പിസ്റ്റ്.",
    isVolunteer: false
  }
];
