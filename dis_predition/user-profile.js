// ============================================
// User Profile Page - JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    loadUserProfile();
    initProfileFormHandlers();
});

// Load existing user profile data
function loadUserProfile() {
    const userData = getUserHealthInfo();

    if (userData) {
        // Personal Information
        if (userData.name) document.getElementById('profile-name').value = userData.name;
        if (userData.age) document.getElementById('profile-age').value = userData.age;
        if (userData.gender) document.getElementById('profile-gender').value = userData.gender;

        // Physical Metrics
        if (userData.weight) {
            document.getElementById('profile-weight').value = userData.weight;
            document.getElementById('profile-weight-unit').value = userData.weightUnit || 'kg';
        }
        if (userData.height) {
            document.getElementById('profile-height').value = userData.height;
            document.getElementById('profile-height-unit').value = userData.heightUnit || 'cm';
        }

        // Vital Signs
        if (userData.bpSystolic) document.getElementById('profile-bp-systolic').value = userData.bpSystolic;
        if (userData.bpDiastolic) document.getElementById('profile-bp-diastolic').value = userData.bpDiastolic;
        if (userData.temperature) {
            document.getElementById('profile-temperature').value = userData.temperature;
            document.getElementById('profile-temp-unit').value = userData.tempUnit || 'C';
        }

        // Medical History - Conditions
        if (userData.conditions && Array.isArray(userData.conditions)) {
            userData.conditions.forEach(condition => {
                const checkbox = document.querySelector(`#profile-condition-diabetes, #profile-condition-hypertension, #profile-condition-asthma, #profile-condition-heart-disease, #profile-condition-arthritis, #profile-condition-thyroid`);
                const matchingCheckbox = Array.from(document.querySelectorAll('input[type="checkbox"]'))
                    .find(cb => cb.value === condition);
                if (matchingCheckbox) {
                    matchingCheckbox.checked = true;
                }
            });
        }

        if (userData.medications) document.getElementById('profile-medications').value = userData.medications;
        if (userData.allergies) document.getElementById('profile-allergies').value = userData.allergies;

        // Update BMI display
        updateProfileBMI();
    }
}

// Initialize form event handlers
function initProfileFormHandlers() {
    // Form submission
    const form = document.getElementById('profile-form');
    form.addEventListener('submit', handleProfileSave);

    // BMI calculation on weight/height change
    const weightInput = document.getElementById('profile-weight');
    const heightInput = document.getElementById('profile-height');
    const weightUnit = document.getElementById('profile-weight-unit');
    const heightUnit = document.getElementById('profile-height-unit');

    [weightInput, heightInput, weightUnit, heightUnit].forEach(element => {
        if (element) {
            element.addEventListener('input', updateProfileBMI);
            element.addEventListener('change', updateProfileBMI);
        }
    });

    // Clear profile button
    const clearButton = document.getElementById('clear-profile-btn');
    if (clearButton) {
        clearButton.addEventListener('click', handleClearProfile);
    }
}

// Handle profile form save
function handleProfileSave(e) {
    e.preventDefault();

    // Collect form data
    const profileData = {
        // Personal Information
        name: document.getElementById('profile-name').value.trim(),
        age: parseInt(document.getElementById('profile-age').value),
        gender: document.getElementById('profile-gender').value,

        // Physical Metrics
        weight: parseFloat(document.getElementById('profile-weight').value) || null,
        weightUnit: document.getElementById('profile-weight-unit').value,
        height: parseFloat(document.getElementById('profile-height').value) || null,
        heightUnit: document.getElementById('profile-height-unit').value,

        // Vital Signs
        bpSystolic: parseInt(document.getElementById('profile-bp-systolic').value) || null,
        bpDiastolic: parseInt(document.getElementById('profile-bp-diastolic').value) || null,
        bloodPressure: null,
        temperature: parseFloat(document.getElementById('profile-temperature').value) || null,
        tempUnit: document.getElementById('profile-temp-unit').value,

        // Medical History
        conditions: getProfileSelectedConditions(),
        medications: document.getElementById('profile-medications').value.trim(),
        allergies: document.getElementById('profile-allergies').value.trim(),

        // BMI
        bmi: null,
        bmiCategory: null,

        // Timestamp
        savedAt: new Date().toISOString()
    };

    // Calculate BMI if data available
    if (profileData.weight && profileData.height) {
        profileData.bmi = calculateBMI(
            profileData.weight,
            profileData.height,
            profileData.weightUnit,
            profileData.heightUnit
        );
        profileData.bmiCategory = getBMICategory(profileData.bmi);
    }

    // Format blood pressure
    if (profileData.bpSystolic && profileData.bpDiastolic) {
        profileData.bloodPressure = `${profileData.bpSystolic}/${profileData.bpDiastolic}`;
    }

    // Save to localStorage
    saveUserHealthInfo(profileData);

    // Show success message
    showSaveSuccessMessage();
}

// Get selected conditions from profile form
function getProfileSelectedConditions() {
    const conditions = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"][id^="profile-condition-"]:checked');
    checkboxes.forEach(checkbox => {
        conditions.push(checkbox.value);
    });
    return conditions;
}

// Update BMI display on profile page
function updateProfileBMI() {
    const weight = parseFloat(document.getElementById('profile-weight').value);
    const height = parseFloat(document.getElementById('profile-height').value);
    const weightUnit = document.getElementById('profile-weight-unit').value;
    const heightUnit = document.getElementById('profile-height-unit').value;

    const bmiDisplay = document.getElementById('profile-bmi-display');
    const bmiValue = document.getElementById('profile-bmi-value');
    const bmiCategory = document.getElementById('profile-bmi-category');

    if (weight && height) {
        const bmi = calculateBMI(weight, height, weightUnit, heightUnit);
        const category = getBMICategory(bmi);

        bmiValue.textContent = bmi;
        bmiCategory.textContent = category;
        bmiDisplay.style.display = 'flex';

        // Update category color
        bmiCategory.className = 'bmi-category-large';
        if (category === 'Underweight') bmiCategory.classList.add('bmi-underweight');
        else if (category === 'Normal') bmiCategory.classList.add('bmi-normal');
        else if (category === 'Overweight') bmiCategory.classList.add('bmi-overweight');
        else if (category === 'Obese') bmiCategory.classList.add('bmi-obese');
    } else {
        bmiDisplay.style.display = 'none';
    }
}

// Handle clear profile
function handleClearProfile() {
    if (confirm('Are you sure you want to clear your entire health profile? This action cannot be undone.')) {
        clearUserHealthInfo();

        // Reset form
        document.getElementById('profile-form').reset();

        // Hide BMI display
        document.getElementById('profile-bmi-display').style.display = 'none';

        // Show success message
        showSaveSuccessMessage('Profile cleared successfully!');
    }
}

// Show save success message
function showSaveSuccessMessage(message = '✅ Profile saved successfully!') {
    const messageElement = document.getElementById('save-success-message');
    messageElement.textContent = message;
    messageElement.style.display = 'block';

    // Hide after 3 seconds
    setTimeout(() => {
        messageElement.style.display = 'none';
    }, 3000);
}
