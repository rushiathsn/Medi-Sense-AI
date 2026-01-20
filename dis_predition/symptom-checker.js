// ============================================
// MediSense AI - Symptom Checker Logic
// ============================================

// Symptom categories and options with translation keys
const symptomCategories = {
    'General': ['Fever', 'Chills', 'Fatigue', 'Weakness', 'Weight Loss', 'Night Sweats'],
    'Head & Neurological': ['Headache', 'Dizziness', 'Confusion', 'Memory Problems', 'Visual Disturbances', 'Sensitivity to Light'],
    'Respiratory': ['Cough', 'Shortness of Breath', 'Wheezing', 'Chest Pain', 'Sore Throat', 'Runny Nose', 'Sneezing', 'Congestion'],
    'Cardiovascular': ['Rapid Heartbeat', 'Irregular Heartbeat', 'Chest Pressure', 'Palpitations', 'Swelling in Legs'],
    'Digestive': ['Nausea', 'Vomiting', 'Diarrhea', 'Abdominal Pain', 'Bloating', 'Loss of Appetite', 'Constipation'],
    'Muscular & Skeletal': ['Muscle Aches', 'Joint Pain', 'Back Pain', 'Stiffness', 'Weakness in Limbs'],
    'Mental & Emotional': ['Anxiety', 'Excessive Worry', 'Restlessness', 'Difficulty Concentrating', 'Sleep Problems', 'Mood Changes'],
    'Skin': ['Rash', 'Itching', 'Dry Skin', 'Hives', 'Skin Discoloration'],
    'Eyes, Ears, Nose, Throat': ['Itchy Eyes', 'Watery Eyes', 'Ear Pain', 'Hearing Problems', 'Nasal Congestion', 'Loss of Smell'],
    'Urinary': ['Frequent Urination', 'Painful Urination', 'Dark Urine', 'Blood in Urine'],
    'Other': ['Dehydration', 'Excessive Thirst', 'Sweating', 'Tingling in Hands', 'Slow Healing', 'Swollen Glands']
};

// Medical icon images for each symptom (using free medical icons)
const symptomImages = {
    'Fever': 'https://cdn-icons-png.flaticon.com/128/2785/2785482.png',
    'Chills': 'https://cdn-icons-png.flaticon.com/128/4320/4320371.png',
    'Fatigue': 'https://cdn-icons-png.flaticon.com/128/2913/2913133.png',
    'Weakness': 'https://cdn-icons-png.flaticon.com/128/3588/3588592.png',
    'Weight Loss': 'https://cdn-icons-png.flaticon.com/128/2913/2913117.png',
    'Night Sweats': 'https://cdn-icons-png.flaticon.com/128/3588/3588614.png',
    'Headache': 'https://cdn-icons-png.flaticon.com/128/2785/2785454.png',
    'Dizziness': 'https://cdn-icons-png.flaticon.com/128/3588/3588593.png',
    'Confusion': 'https://cdn-icons-png.flaticon.com/128/6134/6134346.png',
    'Memory Problems': 'https://cdn-icons-png.flaticon.com/128/4228/4228758.png',
    'Visual Disturbances': 'https://cdn-icons-png.flaticon.com/128/2738/2738053.png',
    'Sensitivity to Light': 'https://cdn-icons-png.flaticon.com/128/4149/4149706.png',
    'Cough': 'https://cdn-icons-png.flaticon.com/128/2785/2785490.png',
    'Shortness of Breath': 'https://cdn-icons-png.flaticon.com/128/3588/3588618.png',
    'Wheezing': 'https://cdn-icons-png.flaticon.com/128/2913/2913095.png',
    'Chest Pain': 'https://cdn-icons-png.flaticon.com/128/2785/2785459.png',
    'Sore Throat': 'https://cdn-icons-png.flaticon.com/128/2785/2785491.png',
    'Runny Nose': 'https://cdn-icons-png.flaticon.com/128/2785/2785484.png',
    'Sneezing': 'https://cdn-icons-png.flaticon.com/128/2785/2785485.png',
    'Congestion': 'https://cdn-icons-png.flaticon.com/128/3588/3588601.png',
    'Rapid Heartbeat': 'https://cdn-icons-png.flaticon.com/128/2913/2913106.png',
    'Irregular Heartbeat': 'https://cdn-icons-png.flaticon.com/128/4228/4228681.png',
    'Chest Pressure': 'https://cdn-icons-png.flaticon.com/128/3588/3588578.png',
    'Palpitations': 'https://cdn-icons-png.flaticon.com/128/4320/4320378.png',
    'Swelling in Legs': 'https://cdn-icons-png.flaticon.com/128/3588/3588609.png',
    'Nausea': 'https://cdn-icons-png.flaticon.com/128/2785/2785488.png',
    'Vomiting': 'https://cdn-icons-png.flaticon.com/128/3588/3588621.png',
    'Diarrhea': 'https://cdn-icons-png.flaticon.com/128/2785/2785486.png',
    'Abdominal Pain': 'https://cdn-icons-png.flaticon.com/128/2785/2785453.png',
    'Bloating': 'https://cdn-icons-png.flaticon.com/128/3588/3588574.png',
    'Loss of Appetite': 'https://cdn-icons-png.flaticon.com/128/3588/3588603.png',
    'Constipation': 'https://cdn-icons-png.flaticon.com/128/2913/2913091.png',
    'Muscle Aches': 'https://cdn-icons-png.flaticon.com/128/2785/2785472.png',
    'Joint Pain': 'https://cdn-icons-png.flaticon.com/128/2785/2785466.png',
    'Back Pain': 'https://cdn-icons-png.flaticon.com/128/2785/2785452.png',
    'Stiffness': 'https://cdn-icons-png.flaticon.com/128/3588/3588608.png',
    'Weakness in Limbs': 'https://cdn-icons-png.flaticon.com/128/4320/4320364.png',
    'Anxiety': 'https://cdn-icons-png.flaticon.com/128/2785/2785456.png',
    'Excessive Worry': 'https://cdn-icons-png.flaticon.com/128/3588/3588622.png',
    'Restlessness': 'https://cdn-icons-png.flaticon.com/128/4320/4320375.png',
    'Difficulty Concentrating': 'https://cdn-icons-png.flaticon.com/128/4228/4228710.png',
    'Sleep Problems': 'https://cdn-icons-png.flaticon.com/128/2785/2785489.png',
    'Mood Changes': 'https://cdn-icons-png.flaticon.com/128/3588/3588577.png',
    'Rash': 'https://cdn-icons-png.flaticon.com/128/2785/2785492.png',
    'Itching': 'https://cdn-icons-png.flaticon.com/128/3588/3588600.png',
    'Dry Skin': 'https://cdn-icons-png.flaticon.com/128/2913/2913120.png',
    'Hives': 'https://cdn-icons-png.flaticon.com/128/4320/4320369.png',
    'Skin Discoloration': 'https://cdn-icons-png.flaticon.com/128/3588/3588607.png',
    'Itchy Eyes': 'https://cdn-icons-png.flaticon.com/128/2785/2785465.png',
    'Watery Eyes': 'https://cdn-icons-png.flaticon.com/128/3588/3588620.png',
    'Ear Pain': 'https://cdn-icons-png.flaticon.com/128/2785/2785460.png',
    'Hearing Problems': 'https://cdn-icons-png.flaticon.com/128/2913/2913103.png',
    'Nasal Congestion': 'https://cdn-icons-png.flaticon.com/128/2785/2785484.png',
    'Loss of Smell': 'https://cdn-icons-png.flaticon.com/128/3588/3588604.png',
    'Frequent Urination': 'https://cdn-icons-png.flaticon.com/128/2785/2785493.png',
    'Painful Urination': 'https://cdn-icons-png.flaticon.com/128/3588/3588605.png',
    'Dark Urine': 'https://cdn-icons-png.flaticon.com/128/2913/2913131.png',
    'Blood in Urine': 'https://cdn-icons-png.flaticon.com/128/4320/4320365.png',
    'Dehydration': 'https://cdn-icons-png.flaticon.com/128/2785/2785458.png',
    'Excessive Thirst': 'https://cdn-icons-png.flaticon.com/128/3588/3588594.png',
    'Sweating': 'https://cdn-icons-png.flaticon.com/128/2785/2785494.png',
    'Tingling in Hands': 'https://cdn-icons-png.flaticon.com/128/3588/3588613.png',
    'Slow Healing': 'https://cdn-icons-png.flaticon.com/128/2913/2913089.png',
    'Swollen Glands': 'https://cdn-icons-png.flaticon.com/128/3588/3588611.png'
};

// Map category names to translation keys
const categoryTranslationKeys = {
    'General': 'general',
    'Head & Neurological': 'headNeurological',
    'Respiratory': 'respiratory',
    'Cardiovascular': 'cardiovascular',
    'Digestive': 'digestive',
    'Muscular & Skeletal': 'muscularSkeletal',
    'Mental & Emotional': 'mentalEmotional',
    'Skin': 'skin',
    'Eyes, Ears, Nose, Throat': 'eent',
    'Urinary': 'urinary',
    'Other': 'other'
};

// Map symptom names to translation keys (convert to camelCase)
function getSymptomTranslationKey(symptom) {
    // Convert "Loss of Smell" -> "lossOfSmell", "Blood in Urine" -> "bloodInUrine"
    return symptom
        .split(' ')                    // Split by spaces
        .map((word, index) => {
            word = word.replace(/[&']/g, '');  // Remove special chars
            if (index === 0) {
                // First word: lowercase
                return word.toLowerCase();
            } else {
                // Subsequent words: capitalize first letter
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
        })
        .join('');                     // Join back together
}

// Initialize symptom checker
document.addEventListener('DOMContentLoaded', () => {
    renderSymptomCategories();

    const form = document.getElementById('symptom-form');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }

    // Re-render when language changes
    const languageSelect = document.querySelector('.language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', () => {
            setTimeout(() => renderSymptomCategories(), 100);
        });
    }
});

// Render symptom categories
function renderSymptomCategories() {
    const container = document.getElementById('symptom-categories');
    if (!container) return;

    // Clear existing content
    container.innerHTML = '';

    for (const [category, symptoms] of Object.entries(symptomCategories)) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'symptom-category';
        categoryDiv.style.marginBottom = '2rem';

        // Category header - translated
        const header = document.createElement('h3');
        const categoryKey = categoryTranslationKeys[category];
        header.textContent = getTranslation(`symptomCategories.${categoryKey}`);
        header.style.color = 'var(--primary-blue)';
        header.style.marginBottom = '1rem';
        categoryDiv.appendChild(header);

        // Symptom checkboxes
        const checkboxGroup = document.createElement('div');
        checkboxGroup.className = 'checkbox-group';

        symptoms.forEach(symptom => {
            const checkboxItem = document.createElement('label');
            checkboxItem.className = 'checkbox-item';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'symptoms';
            checkbox.value = symptom.toLowerCase();
            checkbox.id = `symptom-${symptom.toLowerCase().replace(/\s+/g, '-')}`;

            const label = document.createElement('span');
            // Translate symptom name
            const symptomKey = getSymptomTranslationKey(symptom);
            label.textContent = getTranslation(`symptoms.${symptomKey}`);
            label.className = 'symptom-label';

            checkboxItem.appendChild(checkbox);
            checkboxItem.appendChild(label);
            checkboxGroup.appendChild(checkboxItem);
        });

        categoryDiv.appendChild(checkboxGroup);
        container.appendChild(categoryDiv);
    }
}

// Handle form submission
function handleSubmit(e) {
    e.preventDefault();

    // Get selected symptoms
    const checkboxes = document.querySelectorAll('input[name="symptoms"]:checked');
    const selectedSymptoms = Array.from(checkboxes).map(cb => cb.value);

    // Validate
    if (selectedSymptoms.length === 0) {
        alert(getTranslation('common.error') || 'Please select at least one symptom to analyze.');
        return;
    }

    // Get duration and severity
    const duration = document.getElementById('duration').value;
    const severity = document.getElementById('severity').value;

    // Show loading state
    const submitBtn = document.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = getTranslation('common.loading') || 'Analyzing...';
    submitBtn.disabled = true;

    // Simulate processing delay
    setTimeout(() => {
        // Navigate to results with selected symptoms
        showResults(selectedSymptoms);
    }, 1000);
}

// Clear all selections
function clearSelections() {
    const checkboxes = document.querySelectorAll('input[name="symptoms"]:checked');
    checkboxes.forEach(cb => cb.checked = false);

    document.getElementById('duration').value = '';
    document.getElementById('severity').value = '';
}
