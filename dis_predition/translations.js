// ============================================
// MediSense AI - Translation Data
// ============================================

const translations = {
  en: {
    // Navigation
    nav: {
      logo: "MediSense AI",
      home: "Home",
      about: "About",
      howItWorks: "How It Works",
      aiChatbot: "AI Chatbot",
      symptomChecker: "Symptom Checker"
    },

    // Home Page
    home: {
      title: "MediSense AI",
      subtitle: "Advanced AI-powered disease prediction system that analyzes your symptoms and provides intelligent health insights in seconds",
      btnTalkToAI: "Talk to AI Doctor",
      btnCheckSymptoms: "Check Symptoms",
      whyChooseTitle: "Why Choose MediSense AI?",
      whyChooseSubtitle: "Cutting-edge technology for accurate health predictions",

      // Features
      aiPoweredTitle: "AI-Powered Analysis",
      aiPoweredDesc: "Our advanced machine learning models analyze thousands of medical cases to provide accurate predictions based on your symptoms.",
      instantResultsTitle: "Instant Results",
      instantResultsDesc: "Get comprehensive health insights in seconds. No waiting, no appointments needed for initial assessment.",
      privateTitle: "Private & Secure",
      privateDesc: "Your health data is never stored or shared. All analysis happens locally in your browser.",
      treatmentTitle: "Treatment Guidance",
      treatmentDesc: "Receive personalized recommendations and medication suggestions based on your condition.",
      chatbotTitle: "Interactive Chatbot",
      chatbotDesc: "Have a natural conversation with our AI doctor that asks relevant follow-up questions.",
      detailedReportsTitle: "Detailed Reports",
      detailedReportsDesc: "Get confidence scores, multiple predictions, and comprehensive health recommendations.",

      // How to Use
      howToStartTitle: "How to Get Started",
      howToStartSubtitle: "Three simple steps to your health insights",
      step1Title: "1. Choose Input Method",
      step1Desc: "Select between our conversational AI chatbot or structured symptom checker based on your preference.",
      step2Title: "2. Describe Symptoms",
      step2Desc: "Tell us about your symptoms in natural language or select from organized categories.",
      step3Title: "3. Get Predictions",
      step3Desc: "Receive instant AI-powered predictions with confidence scores and health recommendations.",

      // CTA
      ctaTitle: "Ready to Check Your Symptoms?",
      ctaSubtitle: "Our AI is ready to help you understand your health better",
      ctaBtnStart: "Start AI Chat",
      ctaBtnUse: "Use Symptom Checker",

      // Footer
      disclaimerLabel: "Disclaimer:",
      disclaimerText: "MediSense AI is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.",
      copyright: "© 2026 MediSense AI. All rights reserved. | Always consult with a qualified healthcare provider."
    },

    // Chatbot Page
    chatbot: {
      title: "💬 AI Medical Assistant",
      subtitle: "Describe your symptoms naturally - I'll help analyze them",
      placeholder: "Type your symptoms here...",
      tipsTitle: "💡 Tips for Better Results",
      tip1: "Describe your symptoms in natural language - no need for medical terms",
      tip2: "Mention when symptoms started and how severe they are",
      tip3: "Include any relevant details like duration, frequency, or triggers",
      tip4: "Be honest and thorough - the AI needs complete information",
      tip5: "Answer the follow-up questions the chatbot asks",
      alternativeText: "Prefer a structured approach?",
      alternativeBtn: "Use Symptom Checker Instead",

      // Bot Messages
      welcome: "Hello! I'm your AI Medical Assistant. Please describe your symptoms, and I'll help analyze them.",
      analyzing: "Analyzing your symptoms...",
      foundSymptoms: "I found the following symptoms:",
      askMoreInfo: "Can you provide more details about when these symptoms started?",
      generating: "Generating predictions...",
      notFeelingWell: "I understand you're not feeling well. Can you tell me more specifically about your symptoms? For example, do you have fever, pain, nausea, or any other specific symptoms?",
      experiencingSymptoms: "I see you're experiencing {symptoms}. Are there any other symptoms you'd like to mention? For example, how long have you had these symptoms?",
      thankYou: "Thank you for sharing that information. Do you have any other symptoms you'd like to add, or should I analyze what you've told me so far?",
      describeOther: "Could you describe any other symptoms? Or type 'no' if you've mentioned everything.",
      analyzingNow: "Perfect! I'm analyzing your symptoms now. Please wait a moment...",
      noProblem: "No problem! Please tell me what other symptoms you have or what needs correction.",
      confirmSymptoms: "Let me confirm the symptoms you've mentioned:\n\n{symptoms}\n\nIs this correct? Type 'yes' to proceed with the analysis.",
      noSymptomsDetected: "I haven't detected any specific symptoms yet. Could you please describe what you're experiencing?",
      needSymptoms: "I need symptom information to provide an analysis. Could you please describe your symptoms?",
      analysisComplete: "Analysis complete! Redirecting you to your results..."
    },

    // Symptom Checker Page
    symptomChecker: {
      title: "Symptom Checker",
      subtitle: "Select all symptoms you're experiencing from the categories below",
      durationLabel: "How long have you had these symptoms?",
      durationPlaceholder: "Select duration...",
      durationOptions: {
        lessThan1Day: "Less than 1 day",
        oneToThreeDays: "1-3 days",
        fourToSevenDays: "4-7 days",
        oneToTwoWeeks: "1-2 weeks",
        moreThanTwoWeeks: "More than 2 weeks"
      },
      severityLabel: "How severe are your symptoms?",
      severityPlaceholder: "Select severity...",
      severityOptions: {
        mild: "Mild - Noticeable but not interfering much",
        moderate: "Moderate - Affecting daily activities",
        severe: "Severe - Significantly impacting life"
      },
      selectSymptomsTitle: "Select Your Symptoms",
      btnAnalyze: "Analyze Symptoms",
      btnClear: "Clear All",
      tipsTitle: "💡 Selection Tips",
      tip1: "Select all symptoms you're currently experiencing, even mild ones",
      tip2: "Symptoms are organized by body system for easier selection",
      tip3: "You can select symptoms from multiple categories",
      tip4: "Be thorough - more symptoms lead to more accurate predictions",
      tip5: "Don't worry about selecting too many - the AI will analyze all of them",
      alternativeText: "Prefer to describe symptoms naturally?",
      alternativeBtn: "Use AI Chatbot Instead"
    },

    // Results Page
    results: {
      title: "Analysis Results",
      subtitle: "Based on your symptoms, here are the most likely conditions",
      confidence: "Confidence",
      recommendations: "Recommendations",
      medications: "Suggested Medications",
      btnNewAnalysis: "New Analysis",
      btnBackHome: "Back to Home",
      noResults: "No predictions available. Please check your symptoms again."
    },

    // Common
    common: {
      loading: "Loading...",
      error: "An error occurred. Please try again.",
      close: "Close",
      submit: "Submit",
      cancel: "Cancel"
    },

    // Symptom Categories
    symptomCategories: {
      general: "General",
      headNeurological: "Head & Neurological",
      respiratory: "Respiratory",
      cardiovascular: "Cardiovascular",
      digestive: "Digestive",
      muscularSkeletal: "Muscular & Skeletal",
      mentalEmotional: "Mental & Emotional",
      skin: "Skin",
      eent: "Eyes, Ears, Nose, Throat",
      urinary: "Urinary",
      other: "Other"
    },

    // Individual Symptoms
    symptoms: {
      fever: "Fever",
      chills: "Chills",
      fatigue: "Fatigue",
      weakness: "Weakness",
      weightLoss: "Weight Loss",
      nightSweats: "Night Sweats",
      headache: "Headache",
      dizziness: "Dizziness",
      confusion: "Confusion",
      memoryProblems: "Memory Problems",
      visualDisturbances: "Visual Disturbances",
      sensitivityToLight: "Sensitivity to Light",
      cough: "Cough",
      shortnessOfBreath: "Shortness of Breath",
      wheezing: "Wheezing",
      chestPain: "Chest Pain",
      soreThroat: "Sore Throat",
      runnyNose: "Runny Nose",
      sneezing: "Sneezing",
      congestion: "Congestion",
      rapidHeartbeat: "Rapid Heartbeat",
      irregularHeartbeat: "Irregular Heartbeat",
      chestPressure: "Chest Pressure",
      palpitations: "Palpitations",
      swellingInLegs: "Swelling in Legs",
      nausea: "Nausea",
      vomiting: "Vomiting",
      diarrhea: "Diarrhea",
      abdominalPain: "Abdominal Pain",
      bloating: "Bloating",
      lossOfAppetite: "Loss of Appetite",
      constipation: "Constipation",
      muscleAches: "Muscle Aches",
      jointPain: "Joint Pain",
      backPain: "Back Pain",
      stiffness: "Stiffness",
      weaknessInLimbs: "Weakness in Limbs",
      anxiety: "Anxiety",
      excessiveWorry: "Excessive Worry",
      restlessness: "Restlessness",
      difficultyConcentrating: "Difficulty Concentrating",
      sleepProblems: "Sleep Problems",
      moodChanges: "Mood Changes",
      rash: "Rash",
      itching: "Itching",
      drySkin: "Dry Skin",
      hives: "Hives",
      skinDiscoloration: "Skin Discoloration",
      itchyEyes: "Itchy Eyes",
      wateryEyes: "Watery Eyes",
      earPain: "Ear Pain",
      hearingProblems: "Hearing Problems",
      nasalCongestion: "Nasal Congestion",
      lossOfSmell: "Loss of Smell",
      frequentUrination: "Frequent Urination",
      painfulUrination: "Painful Urination",
      darkUrine: "Dark Urine",
      bloodInUrine: "Blood in Urine",
      dehydration: "Dehydration",
      excessiveThirst: "Excessive Thirst",
      sweating: "Sweating",
      tinglingInHands: "Tingling in Hands",
      slowHealing: "Slow Healing",
      swollenGlands: "Swollen Glands"
    },

    // Health Information Modal
    healthInfo: {
      title: "📋 Your Health Profile",
      subtitle: "Help us provide more accurate predictions by sharing some basic health information",

      // Personal Information
      personalInfoTitle: "Personal Information",
      nameLabel: "Name",
      namePlaceholder: "Enter your name",
      ageLabel: "Age",
      agePlaceholder: "Enter your age",
      genderLabel: "Gender",
      genderPlaceholder: "Select gender...",
      genderMale: "Male",
      genderFemale: "Female",
      genderOther: "Other",
      genderPreferNot: "Prefer not to say",

      // Physical Metrics
      physicalMetricsTitle: "Physical Metrics",
      weightLabel: "Weight",
      weightPlaceholder: "Enter weight",
      heightLabel: "Height",
      heightPlaceholder: "Enter height",
      bmiDisplayDefault: "Enter weight and height",
      bmiUnderweight: "Underweight",
      bmiNormal: "Normal",
      bmiOverweight: "Overweight",
      bmiObese: "Obese",

      // Vital Signs
      vitalSignsTitle: "Vital Signs",
      bloodPressureLabel: "Blood Pressure",
      temperatureLabel: "Temperature",

      // Medical History
      medicalHistoryTitle: "Medical History",
      conditionsLabel: "Pre-existing Conditions",
      conditionDiabetes: "Diabetes",
      conditionHypertension: "Hypertension",
      conditionAsthma: "Asthma",
      conditionHeartDisease: "Heart Disease",
      conditionArthritis: "Arthritis",
      conditionThyroid: "Thyroid Disorder",
      medicationsLabel: "Current Medications",
      medicationsPlaceholder: "List any medications you're currently taking...",
      allergiesLabel: "Known Allergies",
      allergiesPlaceholder: "List any known allergies...",

      // Footer
      formCompletion: "Form Completion:",
      btnSkip: "Skip for Now",
      btnSave: "Save & Continue"
    }
  },

  ta: {
    // Navigation
    nav: {
      logo: "மெடிசென்ஸ் AI",
      home: "முகப்பு",
      about: "பற்றி",
      howItWorks: "எவ்வாறு செயல்படுகிறது",
      aiChatbot: "AI சாட்பாட்",
      symptomChecker: "அறிகுறி சரிபார்ப்பு"
    },

    // Home Page
    home: {
      title: "மெடிசென்ஸ் AI",
      subtitle: "மேம்பட்ட AI-இயங்கும் நோய் கணிப்பு அமைப்பு உங்கள் அறிகுறிகளை பகுப்பாய்வு செய்து சில நொடிகளில் புத்திசாலித்தன சுகாதார நுண்ணறிவுகளை வழங்குகிறது",
      btnTalkToAI: "AI மருத்துவரிடம் பேசுங்கள்",
      btnCheckSymptoms: "அறிகுறிகளை சரிபார்க்கவும்",
      whyChooseTitle: "ஏன் மெடிசென்ஸ் AI-ஐ தேர்வு செய்ய வேண்டும்?",
      whyChooseSubtitle: "துல்லியமான சுகாதார கணிப்புகளுக்கான அதிநவீன தொழில்நுட்பம்",

      // Features
      aiPoweredTitle: "AI-இயங்கும் பகுப்பாய்வு",
      aiPoweredDesc: "எங்கள் மேம்பட்ட இயந்திர கற்றல் மாதிரிகள் ஆயிரக்கணக்கான மருத்துவ நிகழ்வுகளை பகுப்பாய்வு செய்து உங்கள் அறிகுறிகளின் அடிப்படையில் துல்லியமான கணிப்புகளை வழங்குகின்றன.",
      instantResultsTitle: "உடனடி முடிவுகள்",
      instantResultsDesc: "விரிவான சுகாதார நுண்ணறிவுகளை சில நொடிகளில் பெறுங்கள். காத்திருப்பு இல்லை, ஆரம்ப மதிப்பீட்டுக்கு சந்திப்புகள் தேவையில்லை.",
      privateTitle: "தனிப்பட்ட மற்றும் பாதுகாப்பான",
      privateDesc: "உங்கள் சுகாதார தரவு ஒருபோதும் சேமிக்கப்படவோ பகிரப்படவோ இல்லை. அனைத்து பகுப்பாய்வும் உங்கள் உலாவியில் உள்ளூரில் நடக்கிறது.",
      treatmentTitle: "சிகிச்சை வழிகாட்டுதல்",
      treatmentDesc: "உங்கள் நிலைமையின் அடிப்படையில் தனிப்பயனாக்கப்பட்ட பரிந்துரைகள் மற்றும் மருந்து பரிந்துரைகளைப் பெறுங்கள்.",
      chatbotTitle: "ஊடாடும் சாட்பாட்",
      chatbotDesc: "தொடர்புடைய பின்தொடர் கேள்விகளைக் கேட்கும் எங்கள் AI மருத்துவருடன் இயல்பான உரையாடலை நடத்துங்கள்.",
      detailedReportsTitle: "விரிவான அறிக்கைகள்",
      detailedReportsDesc: "நம்பிக்கை மதிப்பெண்கள், பல கணிப்புகள் மற்றும் விரிவான சுகாதார பரிந்துரைகளைப் பெறுங்கள்.",

      // How to Use
      howToStartTitle: "எவ்வாறு தொடங்குவது",
      howToStartSubtitle: "உங்கள் சுகாதார நுண்ணறிவுகளுக்கு மூன்று எளிய படிகள்",
      step1Title: "1. உள்ளீட்டு முறையைத் தேர்வு செய்யவும்",
      step1Desc: "உங்கள் விருப்பத்தின் அடிப்படையில் எங்கள் உரையாடல் AI சாட்பாட் அல்லது கட்டமைக்கப்பட்ட அறிகுறி சரிபார்ப்பைத் தேர்ந்தெடுக்கவும்.",
      step2Title: "2. அறிகுறிகளை விவரிக்கவும்",
      step2Desc: "உங்கள் அறிகுறிகளைப் பற்றி இயல்பான மொழியில் எங்களிடம் கூறுங்கள் அல்லது ஒழுங்கமைக்கப்பட்ட வகைகளிலிருந்து தேர்ந்தெடுக்கவும்.",
      step3Title: "3. கணிப்புகளைப் பெறுங்கள்",
      step3Desc: "நம்பிக்கை மதிப்பெண்கள் மற்றும் சுகாதார பரிந்துரைகளுடன் உடனடி AI-இயங்கும் கணிப்புகளைப் பெறுங்கள்.",

      // CTA
      ctaTitle: "உங்கள் அறிகுறிகளைச் சரிபார்க்க தயாரா?",
      ctaSubtitle: "உங்கள் ஆரோக்கியத்தை நன்கு புரிந்துகொள்ள எங்கள் AI தயாராக உள்ளது",
      ctaBtnStart: "AI அரட்டையைத் தொடங்குங்கள்",
      ctaBtnUse: "அறிகுறி சரிபார்ப்பைப் பயன்படுத்தவும்",

      // Footer
      disclaimerLabel: "மறுப்பு:",
      disclaimerText: "மெடிசென்ஸ் AI தகவல் நோக்கங்களுக்காக மட்டுமே மற்றும் தொழில்முறை மருத்துவ ஆலோசனை, நோய் கண்டறிதல் அல்லது சிகிச்சைக்கு மாற்றாக இல்லை.",
      copyright: "© 2026 மெடிசென்ஸ் AI. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. | எப்போதும் தகுதியான சுகாதார வழங்குநரை அணுகவும்."
    },

    // Chatbot Page
    chatbot: {
      title: "💬 AI மருத்துவ உதவியாளர்",
      subtitle: "உங்கள் அறிகுறிகளை இயல்பாக விவரிக்கவும் - நான் அவற்றை பகுப்பாய்வு செய்ய உதவுவேன்",
      placeholder: "உங்கள் அறிகுறிகளை இங்கே தட்டச்சு செய்யவும்...",
      tipsTitle: "💡 சிறந்த முடிவுகளுக்கான உதவிக்குறிப்புகள்",
      tip1: "உங்கள் அறிகுறிகளை இயல்பான மொழியில் விவரிக்கவும் - மருத்துவ சொற்கள் தேவையில்லை",
      tip2: "அறிகுறிகள் எப்போது தொடங்கின மற்றும் எவ்வளவு கடுமையானவை என்பதைக் குறிப்பிடவும்",
      tip3: "காலம், அதிர்வெண் அல்லது தூண்டுதல்கள் போன்ற தொடர்புடைய விவரங்களைச் சேர்க்கவும்",
      tip4: "நேர்மையாகவும் முழுமையாகவும் இருங்கள் - AI-க்கு முழுமையான தகவல் தேவை",
      tip5: "சாட்பாட் கேட்கும் பின்தொடர் கேள்விகளுக்கு பதிலளிக்கவும்",
      alternativeText: "கட்டமைக்கப்பட்ட அணுகுமுறையை விரும்புகிறீர்களா?",
      alternativeBtn: "அதற்கு பதிலாக அறிகுறி சரிபார்ப்பைப் பயன்படுத்தவும்",

      // Bot Messages
      welcome: "வணக்கம்! நான் உங்கள் AI மருத்துவ உதவியாளர். தயவுசெய்து உங்கள் அறிகுறிகளை விவரிக்கவும், நான் அவற்றை பகுப்பாய்வு செய்ய உதவுவேன்.",
      analyzing: "உங்கள் அறிகுறிகளை பகுப்பாய்வு செய்கிறது...",
      foundSymptoms: "நான் பின்வரும் அறிகுறிகளைக் கண்டேன்:",
      askMoreInfo: "இந்த அறிகுறிகள் எப்போது தொடங்கின என்பது பற்றி மேலும் விவரங்களை வழங்க முடியுமா?",
      generating: "கணிப்புகளை உருவாக்குகிறது...",
      notFeelingWell: "நீங்கள் உடல்நிலை சரியில்லை என்பதை நான் புரிந்துகொள்கிறேன். உங்கள் அறிகுறிகளைப் பற்றி இன்னும் குறிப்பாக சொல்ல முடியுமா? உதாரணமாக, உங்களுக்கு காய்ச்சல், வலி, குமட்டல் அல்லது வேறு ஏதேனும் குறிப்பிட்ட அறிகுறிகள் உள்ளதா?",
      experiencingSymptoms: "நீங்கள் {symptoms} அனுபவிக்கிறீர்கள் என்று பார்க்கிறேன். நீங்கள் குறிப்பிட விரும்பும் வேறு ஏதேனும் அறிகுறிகள் உள்ளதா? உதாரணமாக, இந்த அறிகுறிகள் எவ்வளவு காலமாக உள்ளன?",
      thankYou: "அந்த தகவலைப் பகிர்ந்ததற்கு நன்றி. நீங்கள் சேர்க்க விரும்பும் வேறு ஏதேனும் அறிகுறிகள் உள்ளதா, அல்லது நீங்கள் இதுவரை சொன்னதை நான் பகுப்பாய்வு செய்ய வேண்டுமா?",
      describeOther: "வேறு ஏதேனும் அறிகுறிகளை விவரிக்க முடியுமா? அல்லது எல்லாவற்றையும் குறிப்பிட்டிருந்தால் 'இல்லை' என தட்டச்சு செய்யவும்.",
      analyzingNow: "சரியானது! உங்கள் அறிகுறிகளை இப்போது பகுப்பாய்வு செய்கிறேன். தயவுசெய்து ஒரு கணம் காத்திருங்கள்...",
      noProblem: "பரவாயில்லை! உங்களுக்கு வேறு என்ன அறிகுறிகள் உள்ளன அல்லது என்ன திருத்தம் தேவை என்று சொல்லுங்கள்.",
      confirmSymptoms: "நீங்கள் குறிப்பிட்ட அறிகுறிகளை உறுதிப்படுத்துகிறேன்:\n\n{symptoms}\n\nஇது சரியானதா? பகுப்பாய்வைத் தொடர 'ஆம்' என தட்டச்சு செய்யவும்.",
      noSymptomsDetected: "இதுவரை குறிப்பிட்ட அறிகுறிகள் எதையும் கண்டறியவில்லை. நீங்கள் என்ன அனுபவிக்கிறீர்கள் என்பதை விவரிக்க முடியுமா?",
      needSymptoms: "பகுப்பாய்வு வழங்க எனக்கு அறிகுறி தகவல் தேவை. தயவுசெய்து உங்கள் அறிகுறிகளை விவரிக்க முடியுமா?",
      analysisComplete: "பகுப்பாய்வு முடிந்தது! உங்கள் முடிவுகளுக்கு திருப்பிவிடுகிறேன்..."
    },

    // Symptom Checker Page
    symptomChecker: {
      title: "அறிகுறி சரிபார்ப்பு",
      subtitle: "கீழே உள்ள வகைகளிலிருந்து நீங்கள் அனுபவிக்கும் அனைத்து அறிகுறிகளையும் தேர்ந்தெடுக்கவும்",
      durationLabel: "இந்த அறிகுறிகளை எவ்வளவு காலம் வைத்திருக்கிறீர்கள்?",
      durationPlaceholder: "காலத்தைத் தேர்ந்தெடுக்கவும்...",
      durationOptions: {
        lessThan1Day: "1 நாளுக்கும் குறைவாக",
        oneToThreeDays: "1-3 நாட்கள்",
        fourToSevenDays: "4-7 நாட்கள்",
        oneToTwoWeeks: "1-2 வாரங்கள்",
        moreThanTwoWeeks: "2 வாரங்களுக்கு மேல்"
      },
      severityLabel: "உங்கள் அறிகுறிகள் எவ்வளவு கடுமையானவை?",
      severityPlaceholder: "கடுமையைத் தேர்ந்தெடுக்கவும்...",
      severityOptions: {
        mild: "லேசானது - கவனிக்கக்கூடியது ஆனால் அதிகம் தலையிடவில்லை",
        moderate: "மிதமான - தினசரி நடவடிக்கைகளை பாதிக்கிறது",
        severe: "கடுமையான - வாழ்க்கையை குறிப்பிடத்தக்க அளவில் பாதிக்கிறது"
      },
      selectSymptomsTitle: "உங்கள் அறிகுறிகளைத் தேர்ந்தெடுக்கவும்",
      btnAnalyze: "அறிகுறிகளை பகுப்பாய்வு செய்யவும்",
      btnClear: "அனைத்தையும் அழிக்கவும்",
      tipsTitle: "💡 தேர்வு உதவிக்குறிப்புகள்",
      tip1: "நீங்கள் தற்போது அனுபவிக்கும் அனைத்து அறிகுறிகளையும் தேர்ந்தெடுக்கவும், லேசானவை கூட",
      tip2: "எளிதான தேர்வுக்காக உடல் அமைப்பின் அடிப்படையில் அறிகுறிகள் ஒழுங்கமைக்கப்பட்டுள்ளன",
      tip3: "நீங்கள் பல வகைகளிலிருந்து அறிகுறிகளைத் தேர்ந்தெடுக்கலாம்",
      tip4: "முழுமையாக இருங்கள் - அதிக அறிகுறிகள் மிகவும் துல்லியமான கணிப்புகளுக்கு வழிவகுக்கும்",
      tip5: "அதிகமாக தேர்ந்தெடுப்பது பற்றி கவலைப்பட வேண்டாம் - AI அவை அனைத்தையும் பகுப்பாய்வு செய்யும்",
      alternativeText: "அறிகுறிகளை இயல்பாக விவரிக்க விரும்புகிறீர்களா?",
      alternativeBtn: "அதற்கு பதிலாக AI சாட்பாட்டைப் பயன்படுத்தவும்"
    },

    // Results Page
    results: {
      title: "பகுப்பாய்வு முடிவுகள்",
      subtitle: "உங்கள் அறிகுறிகளின் அடிப்படையில், இவை மிகவும் சாத்தியமான நிலைமைகள்",
      confidence: "நம்பிக்கை",
      recommendations: "பரிந்துரைகள்",
      medications: "பரிந்துரைக்கப்பட்ட மருந்துகள்",
      btnNewAnalysis: "புதிய பகுப்பாய்வு",
      btnBackHome: "முகப்பிற்கு திரும்பவும்",
      noResults: "கணிப்புகள் எதுவும் கிடைக்கவில்லை. தயவுசெய்து உங்கள் அறிகுறிகளை மீண்டும் சரிபார்க்கவும்."
    },

    // Common
    common: {
      loading: "ஏற்றுகிறது...",
      error: "ஒரு பிழை ஏற்பட்டது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.",
      close: "மூடு",
      submit: "சமர்ப்பிக்கவும்",
      cancel: "ரத்து செய்"
    },

    // Symptom Categories
    symptomCategories: {
      general: "பொதுவான",
      headNeurological: "தலை மற்றும் நரம்பியல்",
      respiratory: "சுவாசம்",
      cardiovascular: "இதய",
      digestive: "செரிமானம்",
      muscularSkeletal: "தசை மற்றும் எலும்பு",
      mentalEmotional: "மனம் மற்றும் உணர்வு",
      skin: "தோல்",
      eent: "கண்கள், காதுகள், மூக்கு, தொண்டை",
      urinary: "சிறுநீர்",
      other: "மற்றவை"
    },

    // Individual Symptoms  
    symptoms: {
      fever: "காய்ச்சல்",
      chills: "குளிர் நடுக்கம்",
      fatigue: "சோர்வு",
      weakness: "பலவீனம்",
      weightLoss: "எடை இழப்பு",
      nightSweats: "இரவு வியர்வை",
      headache: "தலைவலி",
      dizziness: "தலைச்சுற்றல்",
      confusion: "குழப்பம்",
      memoryProblems: "நினைவாற்றல் பிரச்சனைகள்",
      visualDisturbances: "பார்வை இடையூறுகள்",
      sensitivityToLight: "ஒளி உணர்திறன்",
      cough: "இருமல்",
      shortnessOfBreath: "மூச்சு திணறல்",
      wheezing: "மூச்சுத்திணறல் சத்தம்",
      chestPain: "மார்பு வலி",
      soreThroat: "தொண்டை வலி",
      runnyNose: "மூக்கு ஒழுகுதல்",
      sneezing: "தும்மல்",
      congestion: "நெரிசல்",
      rapidHeartbeat: "வேகமான இதயத்துடிப்பு",
      irregularHeartbeat: "ஒழுங்கற்ற இதயத்துடிப்பு",
      chestPressure: "மார்பு அழுத்தம்",
      palpitations: "இதயத்துடிப்பு உணர்வு",
      swellingInLegs: "கால்களில் வீக்கம்",
      nausea: "குமட்டல்",
      vomiting: "வாந்தி",
      diarrhea: "வயிற்றுப்போக்கு",
      abdominalPain: "வயிற்று வலி",
      bloating: "வயிறு உப்புதல்",
      lossOfAppetite: "பசியின்மை",
      constipation: "மலச்சிக்கல்",
      muscleAches: "தசை வலி",
      jointPain: "மூட்டு வலி",
      backPain: "முதுகு வலி",
      stiffness: "விறைப்பு",
      weaknessInLimbs: "கை கால்களில் பலவீனம்",
      anxiety: "பதற்றம்",
      excessiveWorry: "அதிக கவலை",
      restlessness: "அமைதியின்மை",
      difficultyConcentrating: "கவனம் செலுத்த சிரமம்",
      sleepProblems: "தூக்கப் பிரச்சனைகள்",
      moodChanges: "மனநிலை மாற்றங்கள்",
      rash: "தோல் சொறி",
      itching: "அரிப்பு",
      drySkin: "வறண்ட தோல்",
      hives: "படர்",
      skinDiscoloration: "தோல் நிறமாற்றம்",
      itchyEyes: "அரிக்கும் கண்கள்",
      wateryEyes: "கண்ணீர் வடியும் கண்கள்",
      earPain: "காது வலி",
      hearingProblems: "கேட்கும் பிரச்சனைகள்",
      nasalCongestion: "மூக்கு அடைப்பு",
      lossOfSmell: "வாசனை இழப்பு",
      frequentUrination: "அடிக்கடி சிறுநீர்",
      painfulUrination: "வலியுடன் சிறுநீர்",
      darkUrine: "கருமையான சிறுநீர்",
      bloodInUrine: "சிறுநீரில் இரத்தம்",
      dehydration: "நீரிழப்பு",
      excessiveThirst: "அதிக தாகம்",
      sweating: "வியர்வை",
      tinglingInHands: "கைகளில் கூச்ச உணர்வு",
      slowHealing: "மெதுவான குணமாதல்",
      swollenGlands: "வீங்கிய சுரப்பிகள்"
    },

    // Health Information Modal
    healthInfo: {
      title: "📋 உங்கள் சுகாதார சுயவிவரம்",
      subtitle: "சில அடிப்படை சுகாதார தகவல்களை பகிர்வதன் மூலம் துல்லியமான கணிப்புகளை வழங்க எங்களுக்கு உதவுங்கள்",

      // Personal Information
      personalInfoTitle: "தனிப்பட்ட தகவல்",
      nameLabel: "பெயர்",
      namePlaceholder: "உங்கள் பெயரை உள்ளிடவும்",
      ageLabel: "வயது",
      agePlaceholder: "உங்கள் வயதை உள்ளிடவும்",
      genderLabel: "பாலினம்",
      genderPlaceholder: "பாலினத்தைத் தேர்ந்தெடுக்கவும்...",
      genderMale: "ஆண்",
      genderFemale: "பெண்",
      genderOther: "மற்றவை",
      genderPreferNot: "சொல்ல விரும்பவில்லை",

      // Physical Metrics
      physicalMetricsTitle: "உடல் அளவீடுகள்",
      weightLabel: "எடை",
      weightPlaceholder: "எடையை உள்ளிடவும்",
      heightLabel: "உயரம்",
      heightPlaceholder: "உயரத்தை உள்ளிடவும்",
      bmiDisplayDefault: "எடை மற்றும் உயரத்தை உள்ளிடவும்",
      bmiUnderweight: "குறைவான எடை",
      bmiNormal: "இயல்பான",
      bmiOverweight: "அதிக எடை",
      bmiObese: "உடல் பருமன்",

      // Vital Signs
      vitalSignsTitle: "முக்கிய அறிகுறிகள்",
      bloodPressureLabel: "இரத்த அழுத்தம்",
      temperatureLabel: "வெப்பநிலை",

      // Medical History
      medicalHistoryTitle: "மருத்துவ வரலாறு",
      conditionsLabel: "முன்பே உள்ள நோய்கள்",
      conditionDiabetes: "நீரிழிவு",
      conditionHypertension: "உயர் இரத்த அழுத்தம்",
      conditionAsthma: "ஆஸ்துமா",
      conditionHeartDisease: "இதய நோய்",
      conditionArthritis: "மூட்டு வலி",
      conditionThyroid: "தைராய்டு கோளாறு",
      medicationsLabel: "தற்போதைய மருந்துகள்",
      medicationsPlaceholder: "நீங்கள் தற்போது எடுத்துக்கொள்ளும் மருந்துகளைப் பட்டியலிடவும்...",
      allergiesLabel: "தெரிந்த ஒவ்வாமைகள்",
      allergiesPlaceholder: "தெரிந்த ஒவ்வாமைகளை பட்டியலிடவும்...",

      // Footer
      formCompletion: "படிவம் நிர்த்தல்:",
      btnSkip: "இப்பொழுது தவிர்க்கவும்",
      btnSave: "சேமித்து தொடரவும்"
    }
  },

  hi: {
    // Navigation
    nav: {
      logo: "मेडिसेंस AI",
      home: "होम",
      about: "परिचय",
      howItWorks: "यह कैसे काम करता है",
      aiChatbot: "AI चैटबॉट",
      symptomChecker: "लक्षण जांचकर्ता"
    },

    // Home Page
    home: {
      title: "मेडिसेंस AI",
      subtitle: "उन्नत AI-संचालित रोग पूर्वानुमान प्रणाली जो आपके लक्षणों का विश्लेषण करती है और सेकंड में बुद्धिमान स्वास्थ्य जानकारी प्रदान करती है",
      btnTalkToAI: "AI डॉक्टर से बात करें",
      btnCheckSymptoms: "लक्षण जांचें",
      whyChooseTitle: "मेडिसेंस AI को क्यों चुनें?",
      whyChooseSubtitle: "सटीक स्वास्थ्य पूर्वानुमान के लिए अत्याधुनिक तकनीक",

      // Features
      aiPoweredTitle: "AI-संचालित विश्लेषण",
      aiPoweredDesc: "हमारे उन्नत मशीन लर्निंग मॉडल हजारों चिकित्सा मामलों का विश्लेषण करते हैं और आपके लक्षणों के आधार पर सटीक भविष्यवाणियां प्रदान करते हैं।",
      instantResultsTitle: "तत्काल परिणाम",
      instantResultsDesc: "सेकंड में व्यापक स्वास्थ्य जानकारी प्राप्त करें। कोई प्रतीक्षा नहीं, प्रारंभिक मूल्यांकन के लिए कोई नियुक्ति की आवश्यकता नहीं।",
      privateTitle: "निजी और सुरक्षित",
      privateDesc: "आपका स्वास्थ्य डेटा कभी भी संग्रहीत या साझा नहीं किया जाता है। सभी विश्लेषण आपके ब्राउज़र में स्थानीय रूप से होता है।",
      treatmentTitle: "उपचार मार्गदर्शन",
      treatmentDesc: "अपनी स्थिति के आधार पर व्यक्तिगत सिफारिशें और दवा सुझाव प्राप्त करें।",
      chatbotTitle: "इंटरैक्टिव चैटबॉट",
      chatbotDesc: "हमारे AI डॉक्टर के साथ एक प्राकृतिक बातचीत करें जो प्रासंगिक अनुवर्ती प्रश्न पूछता है।",
      detailedReportsTitle: "विस्तृत रिपोर्ट",
      detailedReportsDesc: "विश्वास स्कोर, कई भविष्यवाणियां, और व्यापक स्वास्थ्य सिफारिशें प्राप्त करें।",

      // How to Use
      howToStartTitle: "कैसे शुरू करें",
      howToStartSubtitle: "आपकी स्वास्थ्य जानकारी के लिए तीन सरल कदम",
      step1Title: "1. इनपुट विधि चुनें",
      step1Desc: "अपनी पसंद के आधार पर हमारे संवादात्मक AI चैटबॉट या संरचित लक्षण जांचकर्ता के बीच चयन करें।",
      step2Title: "2. लक्षणों का वर्णन करें",
      step2Desc: "प्राकृतिक भाषा में अपने लक्षणों के बारे में हमें बताएं या व्यवस्थित श्रेणियों से चयन करें।",
      step3Title: "3. भविष्यवाणियां प्राप्त करें",
      step3Desc: "विश्वास स्कोर और स्वास्थ्य सिफारिशों के साथ तत्काल AI-संचालित भविष्यवाणियां प्राप्त करें।",

      // CTA
      ctaTitle: "अपने लक्षणों की जांच करने के लिए तैयार हैं?",
      ctaSubtitle: "हमारा AI आपके स्वास्थ्य को बेहतर ढंग से समझने में मदद करने के लिए तैयार है",
      ctaBtnStart: "AI चैट शुरू करें",
      ctaBtnUse: "लक्षण जांचकर्ता का उपयोग करें",

      // Footer
      disclaimerLabel: "अस्वीकरण:",
      disclaimerText: "मेडिसेंस AI केवल सूचनात्मक उद्देश्यों के लिए है और पेशेवर चिकित्सा सलाह, निदान या उपचार का विकल्प नहीं है।",
      copyright: "© 2026 मेडिसेंस AI। सर्वाधिकार सुरक्षित। | हमेशा एक योग्य स्वास्थ्य सेवा प्रदाता से परामर्श करें।"
    },

    // Chatbot Page
    chatbot: {
      title: "💬 AI चिकित्सा सहायक",
      subtitle: "अपने लक्षणों का स्वाभाविक रूप से वर्णन करें - मैं उनका विश्लेषण करने में मदद करूंगा",
      placeholder: "अपने लक्षण यहां टाइप करें...",
      tipsTitle: "💡 बेहतर परिणामों के लिए टिप्स",
      tip1: "अपने लक्षणों को प्राकृतिक भाषा में वर्णित करें - चिकित्सा शब्दों की आवश्यकता नहीं",
      tip2: "उल्लेख करें कि लक्षण कब शुरू हुए और वे कितने गंभीर हैं",
      tip3: "अवधि, आवृत्ति या ट्रिगर जैसे किसी भी प्रासंगिक विवरण को शामिल करें",
      tip4: "ईमानदार और पूर्ण रहें - AI को पूरी जानकारी की आवश्यकता है",
      tip5: "चैटबॉट द्वारा पूछे गए अनुवर्ती प्रश्नों का उत्तर दें",
      alternativeText: "संरचित दृष्टिकोण पसंद करते हैं?",
      alternativeBtn: "इसके बजाय लक्षण जांचकर्ता का उपयोग करें",

      // Bot Messages
      welcome: "नमस्ते! मैं आपका AI चिकित्सा सहायक हूं। कृपया अपने लक्षणों का वर्णन करें, और मैं उनका विश्लेषण करने में मदद करूंगा।",
      analyzing: "आपके लक्षणों का विश्लेषण कर रहा है...",
      foundSymptoms: "मुझे निम्नलिखित लक्षण मिले:",
      askMoreInfo: "क्या आप इस बारे में अधिक विवरण प्रदान कर सकते हैं कि ये लक्षण कब शुरू हुए?",
      generating: "भविष्यवाणियां उत्पन्न कर रहा है...",
      notFeelingWell: "मैं समझता हूं कि आप ठीक महसूस नहीं कर रहे हैं। क्या आप अपने लक्षणों के बारे में अधिक विशेष रूप से बता सकते हैं? उदाहरण के लिए, क्या आपको बुखार, दर्द, मतली या कोई अन्य विशिष्ट लक्षण है?",
      experiencingSymptoms: "मैं देख रहा हूं कि आप {symptoms} अनुभव कर रहे हैं। क्या आप किसी अन्य लक्षण का उल्लेख करना चाहेंगे? उदाहरण के लिए, आपके पास ये लक्षण कब से हैं?",
      thankYou: "वह जानकारी साझा करने के लिए धन्यवाद। क्या आपके पास कोई अन्य लक्षण हैं जिन्हें आप जोड़ना चाहेंगे, या मुझे अब तक आपने जो बताया है उसका विश्लेषण करना चाहिए?",
      describeOther: "क्या आप किसी अन्य लक्षण का वर्णन कर सकते हैं? या यदि आपने सब कुछ बता दिया है तो 'नहीं' टाइप करें।",
      analyzingNow: "बिल्कुल सही! मैं अभी आपके लक्षणों का विश्लेषण कर रहा हूं। कृपया एक क्षण प्रतीक्षा करें...",
      noProblem: "कोई बात नहीं! कृपया मुझे बताएं कि आपके पास और क्या लक्षण हैं या किस चीज में सुधार की आवश्यकता है।",
      confirmSymptoms: "मैं आपके द्वारा बताए गए लक्षणों की पुष्टि करता हूं:\n\n{symptoms}\n\nक्या यह सही है? विश्लेषण के साथ आगे बढ़ने के लिए 'हां' टाइप करें।",
      noSymptomsDetected: "मैंने अभी तक कोई विशिष्ट लक्षण नहीं पाया है। क्या आप कृपया बता सकते हैं कि आप क्या अनुभव कर रहे हैं?",
      needSymptoms: "विश्लेषण प्रदान करने के लिए मुझे लक्षण जानकारी चाहिए। क्या आप कृपया अपने लक्षणों का वर्णन कर सकते हैं?",
      analysisComplete: "विश्लेषण पूर्ण! आपके परिणामों पर पुनर्निर्देशित कर रहा हूं..."
    },

    // Symptom Checker Page
    symptomChecker: {
      title: "लक्षण जांचकर्ता",
      subtitle: "नीचे दी गई श्रेणियों से आप जो लक्षण अनुभव कर रहे हैं उन सभी का चयन करें",
      durationLabel: "आपको ये लक्षण कब से हैं?",
      durationPlaceholder: "अवधि चुनें...",
      durationOptions: {
        lessThan1Day: "1 दिन से कम",
        oneToThreeDays: "1-3 दिन",
        fourToSevenDays: "4-7 दिन",
        oneToTwoWeeks: "1-2 सप्ताह",
        moreThanTwoWeeks: "2 सप्ताह से अधिक"
      },
      severityLabel: "आपके लक्षण कितने गंभीर हैं?",
      severityPlaceholder: "गंभीरता चुनें...",
      severityOptions: {
        mild: "हल्का - ध्यान देने योग्य लेकिन ज्यादा हस्तक्षेप नहीं कर रहा",
        moderate: "मध्यम - दैनिक गतिविधियों को प्रभावित कर रहा है",
        severe: "गंभीर - जीवन को महत्वपूर्ण रूप से प्रभावित कर रहा है"
      },
      selectSymptomsTitle: "अपने लक्षण चुनें",
      btnAnalyze: "लक्षणों का विश्लेषण करें",
      btnClear: "सभी साफ़ करें",
      tipsTitle: "💡 चयन टिप्स",
      tip1: "आप जो भी लक्षण वर्तमान में अनुभव कर रहे हैं, उन सभी का चयन करें, यहां तक कि हल्के भी",
      tip2: "आसान चयन के लिए लक्षणों को शरीर प्रणाली द्वारा व्यवस्थित किया गया है",
      tip3: "आप कई श्रेणियों से लक्षण चुन सकते हैं",
      tip4: "संपूर्ण रहें - अधिक लक्षण अधिक सटीक भविष्यवाणियों की ओर ले जाते हैं",
      tip5: "बहुत अधिक चयन करने की चिंता न करें - AI उन सभी का विश्लेषण करेगा",
      alternativeText: "लक्षणों का स्वाभाविक रूप से वर्णन करना पसंद करते हैं?",
      alternativeBtn: "इसके बजाय AI चैटबॉट का उपयोग करें"
    },

    // Results Page
    results: {
      title: "विश्लेषण परिणाम",
      subtitle: "आपके लक्षणों के आधार पर, ये सबसे संभावित स्थितियां हैं",
      confidence: "विश्वास",
      recommendations: "सिफारिशें",
      medications: "सुझाई गई दवाएं",
      btnNewAnalysis: "नया विश्लेषण",
      btnBackHome: "होम पर वापस",
      noResults: "कोई भविष्यवाणी उपलब्ध नहीं है। कृपया अपने लक्षणों की फिर से जांच करें।"
    },

    // Common
    common: {
      loading: "लोड हो रहा है...",
      error: "एक त्रुटि हुई। कृपया पुन: प्रयास करें।",
      close: "बंद करें",
      submit: "सबमिट करें",
      cancel: "रद्द करें"
    },

    // Symptom Categories
    symptomCategories: {
      general: "सामान्य",
      headNeurological: "सिर और तंत्रिका",
      respiratory: "श्वसन",
      cardiovascular: "हृदय",
      digestive: "पाचन",
      muscularSkeletal: "मांसपेशी और कंकाल",
      mentalEmotional: "मानसिक और भावनात्मक",
      skin: "त्वचा",
      eent: "आँखें, कान, नाक, गला",
      urinary: "मूत्र",
      other: "अन्य"
    },

    // Individual Symptoms
    symptoms: {
      fever: "बुखार",
      chills: "ठंड लगना",
      fatigue: "थकान",
      weakness: "कमजोरी",
      weightLoss: "वजन कम होना",
      nightSweats: "रात को पसीना",
      headache: "सिरदर्द",
      dizziness: "चक्कर आना",
      confusion: "भ्रम",
      memoryProblems: "याददाश्त की समस्या",
      visualDisturbances: "दृष्टि विकार",
      sensitivityToLight: "प्रकाश संवेदनशीलता",
      cough: "खांसी",
      shortnessOfBreath: "सांस लेने में तकलीफ",
      wheezing: "घरघराहट",
      chestPain: "छाती में दर्द",
      soreThroat: "गले में खराश",
      runnyNose: "बहती नाक",
      sneezing: "छींक आना",
      congestion: "नाक बंद",
      rapidHeartbeat: "तेज़ दिल की धड़कन",
      irregularHeartbeat: "अनियमित दिल की धड़कन",
      chestPressure: "छाती में दबाव",
      palpitations: "धड़कन",
      swellingInLegs: "पैरों में सूजन",
      nausea: "मतली",
      vomiting: "उल्टी",
      diarrhea: "दस्त",
      abdominalPain: "पेट दर्द",
      bloating: "पेट फूलना",
      lossOfAppetite: "भूख न लगना",
      constipation: "कब्ज",
      muscleAches: "मांसपेशियों में दर्द",
      jointPain: "जोड़ों का दर्द",
      backPain: "कमर दर्द",
      stiffness: "अकड़न",
      weaknessInLimbs: "हाथ-पैरों में कमजोरी",
      anxiety: "चिंता",
      excessiveWorry: "अत्यधिक चिंता",
      restlessness: "बेचैनी",
      difficultyConcentrating: "ध्यान लगाने में कठिनाई",
      sleepProblems: "नींद की समस्या",
      moodChanges: "मूड में बदलाव",
      rash: "चकत्ते",
      itching: "खुजली",
      drySkin: "सूखी त्वचा",
      hives: "पित्ती",
      skinDiscoloration: "त्वचा का रंग बदलना",
      itchyEyes: "आँखों में खुजली",
      wateryEyes: "आँखों से पानी आना",
      earPain: "कान में दर्द",
      hearingProblems: "सुनने की समस्या",
      nasalCongestion: "नाक बंद",
      lossOfSmell: "गंध की हानि",
      frequentUrination: "बार-बार पेशाब",
      painfulUrination: "दर्दनाक पेशाब",
      darkUrine: "गहरे रंग का पेशाब",
      bloodInUrine: "पेशाब में खून",
      dehydration: "निर्जलीकरण",
      excessiveThirst: "अत्यधिक प्यास",
      sweating: "पसीना",
      tinglingInHands: "हाथों में झुनझुनी",
      slowHealing: "धीमी ठीक होना",
      swollenGlands: "सूजी हुई ग्रंथियाँ"
    },

    // Health Information Modal
    healthInfo: {
      title: "📋 आपकी स्वास्थ्य प्रोफ़ाइल",
      subtitle: "कुछ बुनियादी स्वास्थ्य जानकारी साझा करके हमें अधिक सटीक भविष्यवाणियां प्रदान करने में मदद करें",

      // Personal Information
      personalInfoTitle: "व्यक्तिगत जानकारी",
      nameLabel: "नाम",
      namePlaceholder: "अपना नाम दर्ज करें",
      ageLabel: "आयु",
      agePlaceholder: "अपनी आयु दर्ज करें",
      genderLabel: "लिंग",
      genderPlaceholder: "लिंग चुनें...",
      genderMale: "पुरुष",
      genderFemale: "महिला",
      genderOther: "अन्य",
      genderPreferNot: "नहीं बताना चाहते",

      // Physical Metrics
      physicalMetricsTitle: "शारीरिक माप",
      weightLabel: "वजन",
      weightPlaceholder: "वजन दर्ज करें",
      heightLabel: "ऊंचाई",
      heightPlaceholder: "ऊंचाई दर्ज करें",
      bmiDisplayDefault: "वजन और ऊंचाई दर्ज करें",
      bmiUnderweight: "कम वजन",
      bmiNormal: "सामान्य",
      bmiOverweight: "अधिक वजन",
      bmiObese: "मोटापा",

      // Vital Signs
      vitalSignsTitle: "महत्वपूर्ण संकेत",
      bloodPressureLabel: "रक्तचाप",
      temperatureLabel: "तापमान",

      // Medical History
      medicalHistoryTitle: "चिकित्सा इतिहास",
      conditionsLabel: "पूर्व-मौजूदा स्थितियां",
      conditionDiabetes: "मधुमेह",
      conditionHypertension: "उच्च रक्तचाप",
      conditionAsthma: "दमा",
      conditionHeartDisease: "हृदय रोग",
      conditionArthritis: "गठिया",
      conditionThyroid: "थायराइड विकार",
      medicationsLabel: "वर्तमान दवाएं",
      medicationsPlaceholder: "आप वर्तमान में जो दवाएं ले रहे हैं उन्हें सूचीबद्ध करें...",
      allergiesLabel: "ज्ञात एलर्जी",
      allergiesPlaceholder: "ज्ञात एलर्जी को सूचीबद्ध करें...",

      // Footer
      formCompletion: "फॉर्म पूर्णता:",
      btnSkip: "अभी के लिए छोड़ें",
      btnSave: "सहेजें और जारी रखें"
    }
  }
};

// Get current language from localStorage or default to English
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'en';
}

// Get translation for a key
function getTranslation(key) {
  const lang = getCurrentLanguage();
  const keys = key.split('.');
  let value = translations[lang];

  for (const k of keys) {
    if (value && value[k]) {
      value = value[k];
    } else {
      // Fallback to English if translation not found
      value = translations.en;
      for (const k of keys) {
        if (value && value[k]) {
          value = value[k];
        } else {
          return key; // Return key if not found
        }
      }
      break;
    }
  }

  return value;
}
