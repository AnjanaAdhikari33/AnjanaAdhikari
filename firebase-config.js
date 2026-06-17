// ==========================================
// FIREBASE CONFIGURATION (COMPAT SDK)
// ==========================================
// Connected to Firebase Project: portfolio-8b430

const firebaseConfig = {
    apiKey: "AIzaSyAIprdyWYQ57wSJnmgbhqLUfE1UJU0Gg98",
    authDomain: "anjana-22768.firebaseapp.com",
    projectId: "anjana-22768",
    storageBucket: "anjana-22768",
    messagingSenderId: "895682382874",
    appId: "1:895682382874:web:5586667d34d39aed4b15a3"",
    measurementId: "G-KP6YJWJGKJ"
};

// Initialize Firebase (Only if config is set, otherwise fall back to mock data)
let firebaseApp = null;
let auth = null;
let db = null;

// Simple check to make sure the student replaced the placeholders
const isFirebaseConfigured = firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY";

if (isFirebaseConfigured) {
    try {
        firebaseApp = firebase.initializeApp(firebaseConfig);
        auth = firebase.auth();
        db = firebase.firestore();
        console.log("Firebase initialized successfully (Authentication & Firestore).");
    } catch (error) {
        console.error("Firebase initialization failed: ", error);
    }
} else {
    console.warn("Firebase is not configured yet. The portfolio will run in 'Offline Mock Data' mode.");
}

// ==========================================
// STUDENT IDENTIFIER SETTING
// ==========================================
// In a single-student portfolio, keep this consistent between index.html and admin.html.
const STUDENT_ID = "alex_morgan";
