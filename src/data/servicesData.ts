export interface ServiceItem {
  id: string;
  title: string;
  titleHindi: string; // Acts as titleMalayalam in the component
  description: string;
  descriptionHindi: string; // Acts as descriptionMalayalam in the component
  symptoms: string[];
  symptomsHindi: string[]; // Acts as symptomsMalayalam in the component
  techniques: string[];
  techniquesHindi: string[]; // Acts as techniquesMalayalam in the component
  iconName: string;
  billingType: string;
  billingTypeHindi: string; // Acts as billingTypeMalayalam in the component
}

export const servicesData: ServiceItem[] = [
  {
    id: "stroke-rehab",
    title: "Stroke Rehabilitation",
    titleHindi: "സ്ട്രോക്ക് പുനരധിവാസം (പക്ഷാഘാത ചികിത്സ)",
    description: "Dedicated neurological rehabilitation to retrain neural pathways, recover motor control, and restore self-reliance in daily tasks.",
    descriptionHindi: "ന്യൂറൽ പാതകളെ വീണ്ടെടുക്കാനും ശാരീരിക നിയന്ത്രണം തിരിച്ചുപിടിക്കാനും ദൈനംദിന കാര്യങ്ങളിൽ സ്വയംപര്യാപ്തത ഉറപ്പാക്കാനുമുള്ള പ്രത്യേക ന്യൂറോളജിക്കൽ പുനരധിവാസ ചികിത്സ.",
    symptoms: [
      "Hemiplegia (One-sided Paralysis)",
      "Loss of Balance & Coordination",
      "Muscle Spasticity & Tightness",
      "Difficulty in Daily Tasks"
    ],
    symptomsHindi: [
      "ഹെമിപ്ലീജിയ (ഒരു വശത്തെ പക്ഷാഘാതം)",
      "ശാരീരിക സന്തുലിതാവസ്ഥയും ഏകോപനവും നഷ്ടപ്പെടുക",
      "പേശികളുടെ അമിതമായ കാഠിന്യവും വലിവും",
      "ദൈനംദിന കാര്യങ്ങൾ ചെയ്യാനുള്ള ബുദ്ധിമുട്ട്"
    ],
    techniques: [
      "Proprioceptive Neuromuscular Facilitation (PNF)",
      "Bobath Therapy & Motor Relearning",
      "Mirror Box Feedback Therapy",
      "Task-Oriented Balance Conditioning"
    ],
    techniquesHindi: [
      "പ്രൊപ്രിയോസെപ്റ്റീവ് ന്യൂറോമസ്കുലർ ഫെസിലിറ്റേഷൻ (PNF)",
      "ബോബാത്ത് തെറാപ്പി & മോട്ടോർ റീലേണിംഗ്",
      "മിറർ ബോക്സ് ഫീഡ്ബാക്ക് തെറാപ്പി",
      "ബാലൻസ് വീണ്ടെടുക്കാനുള്ള പ്രത്യേക പരിശീലനങ്ങൾ"
    ],
    iconName: "Zap",
    billingType: "NGO Funded - 100% Free for Eligible Families",
    billingTypeHindi: "പൂർണ്ണമായും സൗജന്യ സേവനം - നിർധനരായ രോഗികൾക്ക്"
  },
  {
    id: "pain-management",
    title: "Pain Management",
    titleHindi: "വേദന സംഹാര ചികിത്സ (പെയിൻ മാനേജ്മെന്റ്)",
    description: "Advanced therapeutic pain relief targeting chronic back pain, neck stiffness, arthritis, and general joint pain.",
    descriptionHindi: "നട്ടെല്ല് വേദന, കഴുത്തിലെ കാഠിന്യം, ആർത്രൈറ്റിസ്, സന്ധി വേദനകൾ എന്നിവയ്ക്ക് ശാസ്ത്രീയമായ വേദന സംഹാര ചികിത്സകൾ.",
    symptoms: [
      "Chronic Low Back Pain / Sciatica",
      "Cervical Spondylosis Stiffness",
      "Osteoarthritis Knee Joint Pain",
      "Fibromyalgia & Frozen Shoulder"
    ],
    symptomsHindi: [
      " sciatica നട്ടെല്ല് വേദന / സയാറ്റിക്ക",
      "കഴുത്തിലെ സ്പോണ്ടിലൈറ്റിസ് ജകഡത",
      "മുട്ടുതേയ്മാനം മൂലമുള്ള സന്ധി വേദന",
      "ഫ്രോസൺ ഷോൾഡർ (തോളിലെ ചലന പരിമിതി)"
    ],
    techniques: [
      "Manual Therapy & Joint Mobilization",
      "Interferential Therapy (IFT)",
      "Cervical / Lumbar Decompression Traction",
      "Myofascial Trigger Point Release"
    ],
    techniquesHindi: [
      "മാനുവൽ തെറാപ്പി & ജോയിന്റ് മൊബിലൈസേഷൻ",
      "ഇന്റർഫെറൻഷ്യൽ തെറാപ്പി (IFT)",
      "കഴുത്ത് / നട്ടെല്ല് ഡീകംപ്രഷൻ ട്രാക്ഷൻ",
      "മയോഫേഷ്യൽ ട്രിഗർ പോയിന്റ് റിലീസ്"
    ],
    iconName: "Flame",
    billingType: "Highly Subsidized (₹100/session, waived for low-income)",
    billingTypeHindi: "അത്യധികം സബ്‌സിഡി നിരക്കിൽ (ഒരു സെഷന് ₹100, നിർധനർക്ക് സൗജന്യം)"
  },
  {
    id: "exercise-therapy",
    title: "Exercise Therapy",
    titleHindi: "വ്യായാമ ചികിത്സ (എക്സർസൈസ് തെറാപ്പി)",
    description: "Scientifically structured movements to improve stamina, joint mobility, muscular strength, and posture.",
    descriptionHindi: "പേശീബലം, സന്ധികളുടെ ചലനക്ഷമത, ശാരീരിക സുസ്ഥിരത എന്നിവ മെച്ചപ്പെടുത്താൻ ശാസ്ത്രീയമായി രൂപകൽപ്പന ചെയ്ത വ്യായാമങ്ങൾ.",
    symptoms: [
      "Post-viral general weakness",
      "Muscle Atrophy / Disuse Weakness",
      "Poor Core Strength & Balance",
      "Postural Scoliosis / Kyphosis"
    ],
    symptomsHindi: [
      "വൈറസ് ബാധയ്ക്ക് ശേഷമുള്ള ശാരീരിക അവശത",
      "പേശികൾ ചുരുങ്ങിപ്പോകൽ / അമിതമായ ബലഹീനത",
      "ശരീര സന്തുലിതാവസ്ഥയിലെ കുറവ്",
      "തെറ്റായ ശാരീരിക ഘടന മൂലം ഉണ്ടാകുന്ന അപാകതകൾ"
    ],
    techniques: [
      "Theraband Progressive Resistance training",
      "Core Stabilization Drills",
      "Dynamic Stretching Protocols",
      "Cardiovascular Conditioning"
    ],
    techniquesHindi: [
      "തെരാബാൻഡ് പ്രോഗ്രസീവ് റെസിസ്റ്റൻസ് ട്രെയിനിംഗ്",
      "കോർ സ്റ്റെബിലൈസേഷൻ പരിശീലനങ്ങൾ",
      "ഡൈനാമിക് സ്ട്രെച്ചിംഗ് പ്രോട്ടോക്കോളുകൾ",
      "കാർഡിയോവാസ്കുലർ ഫിറ്റ്നസ് വ്യായാമങ്ങൾ"
    ],
    iconName: "Activity",
    billingType: "Subsidized sliding scale based on household income",
    billingTypeHindi: "സാമ്പത്തിക സാഹചര്യത്തിനനുസരിച്ച് ക്രമീകരിച്ച സബ്‌സിഡി നിരക്ക്"
  },
  {
    id: "pediatric-physio",
    title: "Pediatric Physiotherapy",
    titleHindi: "കുട്ടികൾക്കായുള്ള ഫിസിയോതെറാപ്പി (പീഡിയാട്രിക്)",
    description: "Compassionate, play-based motor development therapy for children experiencing cerebral palsy, developmental delays, or genetic conditions.",
    descriptionHindi: "സെറിബ്രൽ പാൾസി, വളർച്ചാ കാലതാമസം (Developmental delay), ജന്മനായുള്ള വൈകല്യങ്ങൾ എന്നിവയുള്ള കുട്ടികൾക്കായി കളിയിലൂടെയുള്ള വ്യായാമങ്ങൾ.",
    symptoms: [
      "Cerebral Palsy Spasticity",
      "Delayed Milestones (Sitting, Standing, Walking delay)",
      "Congenital Clubfoot (Talipes)",
      "Juvenile Muscle Dystrophy"
    ],
    symptomsHindi: [
      "സെറിബ്രൽ പാൾസി മൂലം കുട്ടികൾക്കുള്ള പേശീവലിവ്",
      "വളർച്ചാ കാലതാമസം (ഇരിക്കാനും നടക്കാനുമുള്ള താമസം)",
      "ജന്മനായുള്ള കാൽപ്പാദ വൈകല്യങ്ങൾ (ക്ലബ്ബ് ഫൂട്ട്)",
      "പേശികളുടെ വളർച്ചക്കുറവ് മൂലം ഉണ്ടാകുന്ന ബലഹീനതകൾ"
    ],
    techniques: [
      "Neurodevelopmental Treatment (NDT)",
      "Play-Infused Sensory Integration",
      "Orthotic Prescription & Gait Retraining",
      "Parent/Caregiver Guided stretches"
    ],
    techniquesHindi: [
      "ന്യൂറോ ഡെവലപ്‌മെന്റൽ ട്രീറ്റ്‌മെന്റ് (NDT)",
      "കളിയിലൂടെയുള്ള സെൻസറി ഇന്റഗ്രേഷൻ തെറാപ്പി",
      "ഓർത്തോട്ടിക് സഹായങ്ങളും നടത്ത പരിശീലനവും",
      "മാതാപിതാക്കൾക്ക് നൽകുന്ന വ്യായാമ നിർദ്ദേശങ്ങൾ"
    ],
    iconName: "Heart",
    billingType: "100% Free - Sponsored by Care Trust Children's Fund",
    billingTypeHindi: "പൂർണ്ണമായും സൗജന്യം - കെയർ ട്രസ്റ്റിന്റെ സ്പോൺസർഷിപ്പിൽ"
  },
  {
    id: "geriatric-rehab",
    title: "Geriatric Rehabilitation",
    titleHindi: "മുതിർന്നവർക്കായുള്ള പുനരധിവാസം (ജെറിയാട്രിക്)",
    description: "Specialized balance, strength, and coordination programs for elderly patients to prevent falls and maintain physical independence.",
    descriptionHindi: "പ്രായാധിക്യം മൂലം വീഴാനുള്ള സാധ്യത കുറയ്ക്കാനും ശാരീരിക സ്വാതന്ത്ര്യം നിലനിർത്താനും സന്തുലിതാവസ്ഥയ്ക്കും ബലത്തിനും വേണ്ടിയുള്ള പ്രത്യേക പരിശീലനങ്ങൾ.",
    symptoms: [
      "Frequent Balance Loss / Fall Risk",
      "Severe Knee Osteoarthritis Stiffness",
      "Age-Related Sarcopenia (Muscle Loss)",
      "Post-Fall Fracture Recovery Weakness"
    ],
    symptomsHindi: [
      "നടക്കുമ്പോൾ സന്തുലിതാവസ്ഥ നഷ്ടപ്പെടുക / വീഴാനുള്ള പേടി",
      "പ്രായാധിക്യ ഘട്ടത്തിലെ കടുത്ത മുട്ടുതേയ്മാനം",
      "പ്രായം കൂടുമ്പോഴുള്ള പേശികളുടെ ബലക്കുറവ്",
      "വീഴ്ചയ്ക്ക് ശേഷമുള്ള ഫ്രാക്ചർ മൂലമുള്ള അവശതകൾ"
    ],
    techniques: [
      "Balance Retraining & Proprioception Board",
      "Gentle Muscle Conditioning",
      "Fall-Prevention Education",
      "Safe Transfer & Mobility Strategies"
    ],
    techniquesHindi: [
      "ബാലൻസ് റീട്രെയിനിംഗ് & പ്രൊപ്രിയോസെപ്ഷൻ ബോർഡ്",
      "ലഘുവായ പേശി ബലപ്പെടുത്തൽ വ്യായാമങ്ങൾ",
      "വീഴ്ചകൾ ഒഴിവാക്കാനുള്ള മുൻകരുതൽ പരിശീലനം",
      "സുരക്ഷിതമായി എഴുന്നേൽക്കാനും നടക്കാനുമുള്ള ശീലങ്ങൾ"
    ],
    iconName: "Smile",
    billingType: "Senior Citizen Program - Waiver Available",
    billingTypeHindi: "മുതിർന്ന പൗരന്മാർക്കായുള്ള പ്രത്യേക പദ്ധതി - പൂർണ്ണ ഇളവുകൾ ലഭ്യമാണ്"
  },
  {
    id: "home-physio",
    title: "Home Physiotherapy",
    titleHindi: "വീടുകളിൽ എത്തി നൽകുന്ന ഫിസിയോതെറാപ്പി (ഹോം ഫിസിയോ)",
    description: "Dedicated mobile rehabilitation services delivered directly to the homes of bedridden, paralyzed, or severely disabled patients.",
    descriptionHindi: "കിടപ്പിലായവർ, പക്ഷാഘാത രോഗികൾ, തീവ്രമായ ശാരീരിക വൈകല്യമുള്ളവർ എന്നിവരുടെ വീടുകളിൽ നേരിട്ടെത്തി നൽകുന്ന ചികിത്സാ സേവനങ്ങൾ.",
    symptoms: [
      "Bedridden Patients / Severe Paralysis",
      "Post-Stroke Immediate Recovery",
      "High Mobility Restriction / Fractures",
      "Severe Spinal Injury Disability"
    ],
    symptomsHindi: [
      "കിടപ്പിലായ രോഗികൾ / കടുത്ത പക്ഷാഘാതമുള്ളവർ",
      "പക്ഷാഘാതം (സ്ട്രോക്ക്) സംഭവിച്ചതിന് ശേഷമുള്ള അടിയന്തര ചികിത്സ",
      "തീവ്രമായ ചലന പരിമിതികൾ / എല്ല് പൊട്ടൽ കാരണം എഴുന്നേൽക്കാൻ കഴിയാത്തവർ",
      "നട്ടെല്ലിന് ക്ഷതമേറ്റ് ചലനശേഷി പൂർണ്ണമായും നഷ്ടപ്പെട്ടവർ"
    ],
    techniques: [
      "Bedside Passive ROM stretches",
      "Bed Mobility & Transfer drills",
      "Chest Physiotherapy & Airway clearance",
      "Portable TENS & Exercise Kits"
    ],
    techniquesHindi: [
      "ബെഡ്സൈഡ് പാസീവ് റേഞ്ച് ഓഫ് മോഷൻ വ്യായാമങ്ങൾ",
      "ബെഡ് മൊബിലിറ്റി & ട്രാൻസ്ഫർ പരിശീലനങ്ങൾ",
      "ശ്വാസകോശ സംബന്ധമായ ഫിസിയോതെറാപ്പി (ചെസ്റ്റ് ഫിസിയോ)",
      "പോർട്ടബിൾ TENS & വ്യായാമ കിറ്റുകൾ"
    ],
    iconName: "Home",
    billingType: "Free Outreach Service for Underprivileged Bedridden Patients",
    billingTypeHindi: "സാമ്പത്തികശേഷി കുറഞ്ഞ കിടപ്പിലായ രോഗികൾക്ക് പൂർണ്ണമായും സൗജന്യമായി"
  },
  {
    id: "post-surgery",
    title: "Post-Surgery Rehabilitation",
    titleHindi: "സർജറിക്ക് ശേഷമുള്ള പുനരധിവാസം",
    description: "Step-by-step physical recovery protocols following joint replacements, spinal surgeries, or fracture fixations to restore safe movement.",
    descriptionHindi: "സന്ധി മാറ്റിവെക്കൽ (Joint replacement), നട്ടെല്ല് ശസ്ത്രക്രിയ എന്നിവയ്ക്ക് ശേഷം സുരക്ഷിതമായി പൂർണ്ണ ചലനശേഷി വീണ്ടെടുക്കാനുള്ള ഘട്ടങ്ങളായുള്ള പരിശീലനം.",
    symptoms: [
      "Post Knee/Hip Replacement Stiffness",
      "Post ACL Reconstruction Stiffness",
      "Spinal Fusion Recovery Pain",
      "Muscle Atrophy post-cast removal"
    ],
    symptomsHindi: [
      "മുട്ട്/കൂപ്പ് മാറ്റിവെക്കൽ ശസ്ത്രക്രിയയ്ക്ക് ശേഷമുള്ള കാഠിന്യം",
      "എ.സി.എൽ സർജറിക്ക് ശേഷമുള്ള പേശികളുടെ ബലക്കുറവ്",
      "നട്ടെല്ല് സർജറിക്ക് ശേഷമുള്ള വേദനകൾ",
      "പ്ലാസ്റ്റർ മാറ്റിയതിന് ശേഷമുള്ള പേശികളുടെ ബലഹീനത"
    ],
    techniques: [
      "Gradual Passive & Active ROM exercises",
      "Scar Tissue Mobilization & Massage",
      "Gait & Balance Assistive training",
      "Targeted Progressive Strengthening"
    ],
    techniquesHindi: [
      "ക്രിത്യമായി ക്രമീകരിച്ച ഫിസിയോതെറാപ്പി വ്യായാമങ്ങൾ",
      "സർജറി പാടുകൾ മൊബിലൈസേഷൻ & മസാജ്",
      "നടത്ത സന്തുലിതാവസ്ഥയ്ക്കുള്ള പരിശീലനങ്ങൾ",
      "പ്രോഗ്രസീവ് പേശി ബലപ്പെടുത്തൽ വ്യായാമങ്ങൾ"
    ],
    iconName: "Activity",
    billingType: "Subsidized sliding scale based on household income",
    billingTypeHindi: "സാമ്പത്തിക സാഹചര്യത്തിനനുസരിച്ച് ക്രമീകരിച്ച സബ്‌സിഡി നിരക്ക്"
  },
  {
    id: "walking-gait-training",
    title: "Walking & Gait Training",
    titleHindi: "നടത്ത സന്തുലിതാവസ്ഥാ പരിശീലനം (ഗെയ്റ്റ് ട്രെയിനിംഗ്)",
    description: "Targeted posture, balance, and stepping drills to restore a safe, steady, and independent walking pattern.",
    descriptionHindi: "സുരക്ഷിതവും സന്തുലിതവുമായ രീതിയിൽ സ്വതന്ത്രമായി നടക്കാൻ രോഗികളെ പ്രാപ്തരാക്കുന്ന നടത്ത പരിശീലനം.",
    symptoms: [
      "Unsteady gait / Limping",
      "Parkinson's Disease shuffling steps",
      "Post-fracture walking imbalance",
      "Fear of falling while stepping outdoors"
    ],
    symptomsHindi: [
      "അസ്ഥിരമായി നടക്കുക / മുടന്തി നടക്കുക",
      "പാർക്കിൻസൺസ് രോഗം കാരണം നടക്കാനുള്ള പ്രയാസം",
      "ഫ്രാക്ചർ മാറ്റിയതിന് ശേഷം നടക്കുമ്പോൾ ഉണ്ടാകുന്ന അസന്തുലിതാവസ്ഥ",
      "വീഴാനുള്ള പേടി കാരണം നടക്കാൻ വിമുഖത കാണിക്കുന്നവർ"
    ],
    techniques: [
      "Parallel Bar Assisted Stepping drills",
      "Weight-shifting & Coordination drills",
      "Assistive Device (Walker, Cane) Training",
      "Foot Drop correction exercises"
    ],
    techniquesHindi: [
      "പാരലൽ ബാറിന്റെ സഹായത്തോടെയുള്ള നടത്ത പരിശീലനം",
      "വെയിറ്റ് ഷിഫ്റ്റിങ് & കോർഡിനേഷൻ വ്യായാമങ്ങൾ",
      "വാക്കർ, വാക്കിങ് സ്റ്റിക്ക് പരിശീലനങ്ങൾ",
      "ഫൂട്ട് ഡ്രോപ്പ് തിരുത്തൽ വ്യായാമങ്ങൾ"
    ],
    iconName: "Activity",
    billingType: "Subsidized flat clinic fee (waived for low-income)",
    billingTypeHindi: "സബ്‌സിഡി നിരക്കിൽ (നിർധനർക്ക് പൂർണ്ണമായും സൗജന്യം)"
  },
  {
    id: "electrotherapy",
    title: "Electrotherapy Services",
    titleHindi: "ഇലക്ട്രോതെറാപ്പി സേവനങ്ങൾ",
    description: "State-of-the-art electrical stimulation therapies to reduce localized inflammation, relieve muscle spasms, and speed healing.",
    descriptionHindi: "വേദനകൾ ലഘൂകരിക്കാനും പേശികളുടെ മുറുക്കം കുറയ്ക്കാനും രക്തയോട്ടം കൂട്ടാനുമുള്ള അത്യാധുനിക അൾട്രാസൗണ്ട്/TENS ഫിസിയോതെറാപ്പി ചികിത്സകൾ.",
    symptoms: [
      "Acute Muscle Spasms & Back Sprains",
      "Joint Swelling & Inflammation",
      "Localized Neuropathy numbness",
      "Tendonitis & Bursitis chronic pain"
    ],
    symptomsHindi: [
      "അക്യൂട്ട് മസിൽ സ്പാസം & തോളിലും കഴുത്തിലും പെട്ടെന്നുണ്ടാകുന്ന വേദന",
      "സന്ധികളിലെ നീർക്കെട്ടും വീക്കവും",
      "കൈകാലുകളിലെ തരിപ്പും മരവിപ്പും (Neuropathy)",
      "ടെൻഡോണൈറ്റിസ് മൂലമുണ്ടാകുന്ന കടുത്ത വേദന"
    ],
    techniques: [
      "TENS (Transcutaneous Electrical Nerve Stimulation)",
      "Interferential Therapy (IFT) deep stimulation",
      "Therapeutic Ultrasound Sound-wave therapy",
      "Electrical Muscle Stimulation (EMS) for atrophy"
    ],
    techniquesHindi: [
      "TENS (ട്രാൻസ്ക്യൂട്ടേനിയസ് ഇലക്ട്രിക്കൽ നർവ് സ്റ്റിമുലേഷൻ)",
      "ഇന്റർഫെറൻഷ്യൽ തെറാപ്പി (IFT) ഡീപ് സ്റ്റിമുലേഷൻ",
      "അൾട്രാസൗണ്ട് ഹീറ്റ് തെറാപ്പി (Ultrasound)",
      "ഇലക്ട്രിക്കൽ മസിൽ സ്റ്റിമുലേഷൻ (EMS)"
    ],
    iconName: "Zap",
    billingType: "Standard subsidized rate (₹50/modality, waived for needy)",
    billingTypeHindi: "കുറഞ്ഞ സബ്‌സിഡി നിരക്കിൽ (നിർധനർക്ക് പൂർണ്ണമായും സൗജന്യം)"
  }
];
