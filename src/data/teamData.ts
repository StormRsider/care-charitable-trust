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
    id: "haris-rahman",
    name: "Dr. Haris Rahman, PT",
    nameHindi: "ഡോ. ഹാരിസ് റഹ്മാൻ, PT",
    role: "Chief Physiotherapist & Director",
    roleHindi: "ചീഫ് ഫിസിയോതെറാപ്പിസ്റ്റ് & ഡയറക്ടർ",
    spec: "Neurological & Stroke Rehabilitation",
    specHindi: "പക്ഷാഘാത പുനരധിവാസ വിദഗ്ദ്ധൻ",
    exp: 14,
    expHindi: "14+ വർഷം",
    qualifications: "B.P.T, M.P.T (Neurology)",
    qualificationsHindi: "B.P.T, M.P.T (ന്യൂറോളജി)",
    regNumber: "KSPC-REG-2012/PT-4321",
    imagePath: "/images/team/dr-haris.jpg",
    bio: "Dr. Haris is a leading neuro-rehab specialist in Malappuram district. Deeply passionate about stroke recovery and cerebral palsy treatments, he founded the physical therapy wing of Care Village to serve local residents who otherwise couldn't afford top-tier neurological care.",
    bioHindi: "മലപ്പുറം ജില്ലയിലെ പ്രമുഖ ന്യൂറോ റിഹാബിലിറ്റേഷൻ വിദഗ്ദ്ധനാണ് ഡോ. ഹാരിസ്. സ്ട്രോക്ക് റീഹാബിലിറ്റേഷൻ, സെറിബ്രൽ പാൾസി ചികിത്സകൾ എന്നിവയിൽ അഗാധമായ വൈദഗ്ദ്ധ്യമുള്ള അദ്ദേഹം, നിർധന രോഗികൾക്ക് സൗജന്യവും കുറഞ്ഞ നിരക്കിലും മികച്ച ഫിസിയോതെറാപ്പി ലഭ്യമാക്കാൻ ലക്ഷ്യമിട്ടാണ് കെയർ വില്ലേജിന് നേതൃത്വം നൽകുന്നത്.",
    isVolunteer: false
  },
  {
    id: "anupama-nair",
    name: "Dr. Anupama Nair, PT",
    nameHindi: "ഡോ. അനുപമ നായർ, PT",
    role: "Senior Musculoskeletal & Pain Specialist",
    roleHindi: "സീനിയർ മസ്കുലോസ്കെലെറ്റൽ & വേദന നിവാരണ വിദഗ്ദ്ധ",
    spec: "Sports Rehab & Manual Osteopathy",
    specHindi: "സ്പോർട്സ് റീഹാബ് & മാനുവൽ തെറാപ്പി",
    exp: 9,
    expHindi: "9+ വർഷം",
    qualifications: "B.P.T, M.P.T (Sports Medicine)",
    qualificationsHindi: "B.P.T, M.P.T (സ്പോർട്സ് മെഡിസിൻ)",
    regNumber: "KSPC-REG-2017/PT-8976",
    imagePath: "/images/team/dr-anupama.jpg",
    bio: "Dr. Anupama specializes in advanced joint manipulation, exercise physiology, and pain management. She holds clinical certifications in electrotherapy and has successfully restored mobility for hundreds of post-surgery orthopedic patients in Edappal.",
    bioHindi: "സന്ധികളുടെ ചലനക്ഷമത വീണ്ടെടുക്കൽ, വ്യായാമങ്ങൾ ക്രമീകരിക്കൽ, വേദന നിവാരണ ചികിത്സകൾ എന്നിവയിൽ വിദഗ്ദ്ധയാണ് ഡോ. അനുപമ. ഇലക്ട്രോതെറാപ്പിയിൽ പ്രത്യേക യോഗ്യതയുള്ള അവർ എടപ്പാളിലെ നൂറുകണക്കിന് ശസ്ത്രക്രിയ കഴിഞ്ഞ രോഗികളുടെ ചലനശേഷി വിജയകരമായി പുനഃസ്ഥാപിച്ചിട്ടുണ്ട്.",
    isVolunteer: false
  },
  {
    id: "faisal-k",
    name: "Dr. Faisal K., PT",
    nameHindi: "ഡോ. ഫൈസൽ കെ., PT",
    role: "Palliative Home Care Physiotherapist",
    roleHindi: "പാലിയേറ്റീവ് ഹോം കെയർ ഫിസിയോതെറാപ്പിസ്റ്റ്",
    spec: "Geriatric & Bedridden Home Rehab",
    specHindi: "പ്രായാധിക്യ രോഗികളുടെയും കിടപ്പുരോഗികളുടെയും പരിചരണം",
    exp: 7,
    expHindi: "7+ വർഷം",
    qualifications: "B.P.T, Certificate in Palliative Rehab",
    qualificationsHindi: "B.P.T, സർട്ടിഫിക്കറ്റ് ഇൻ പാലിയേറ്റീവ് റിഹാബ്",
    regNumber: "KSPC-REG-2019/PT-1123",
    imagePath: "/images/team/dr-faisal.jpg",
    bio: "Dr. Faisal leads the mobile outreach wing of Care Village. He spends his days visiting paralyzed, elderly, and bedridden patients in their homes around Edappal, Ponnani, and Kuttippuram, delivering essential physical therapy at zero cost.",
    bioHindi: "കെയർ വില്ലേജിന്റെ മൊബൈൽ ഔട്ട്രീച്ച് വിഭാഗത്തിന് നേതൃത്വം നൽകുന്നത് ഡോ. ഫൈസൽ ആണ്. എടപ്പാൾ, പൊന്നാനി, കുറ്റിപ്പുറം പ്രദേശങ്ങളിലെ കിടപ്പുരോഗികളുടെയും പക്ഷാഘാത രോഗികളുടെയും വീടുകളിൽ നേരിട്ടെത്തി തികച്ചും സൗജന്യമായി അദ്ദേഹം ഫിസിയോതെറാപ്പി നൽകുന്നു.",
    isVolunteer: false
  }
];
