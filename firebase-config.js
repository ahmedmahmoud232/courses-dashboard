/**
 * Firebase Integration Module & Local Fallback Store
 * System: Control Panel (لوحة التحكم) - AI in Electronic Systems Production
 */

const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyBzIQRRB7wwTzqQ-4M5lIt5MbOYBpkZaRc",
  authDomain: "courses-dashboard-ebb82.firebaseapp.com",
  projectId: "courses-dashboard-ebb82",
  storageBucket: "courses-dashboard-ebb82.firebasestorage.app",
  messagingSenderId: "155841077137",
  appId: "1:155841077137:web:fb246219cc1f5c53d84430",
  measurementId: "G-TGCWJNMQ07"
};

// Global Firebase state container
window.FirebaseSystem = {
  isConfigured: false,
  db: null,
  app: null,

  // Configuration object
  config: DEFAULT_FIREBASE_CONFIG,

  init() {
    const savedConfig = localStorage.getItem('firebase_config_course_dashboard');
    if (savedConfig) {
      try {
        this.config = JSON.parse(savedConfig);
      } catch (e) {
        console.warn("Error parsing saved Firebase config, falling back to default config:", e.message);
      }
    }

    if (this.config && this.config.projectId && window.firebase) {
      try {
        if (!window.firebase.apps.length) {
          this.app = window.firebase.initializeApp(this.config);
        } else {
          this.app = window.firebase.app();
        }
        this.db = window.firebase.firestore();
        this.isConfigured = true;
        console.log("Firebase Firestore initialized successfully for project:", this.config.projectId);
      } catch (e) {
        console.warn("Firebase initialization warning:", e.message);
      }
    } else {
      console.log("Operating in local mode or waiting for Firebase SDKs.");
    }
  },

  saveConfig(configObject) {
    localStorage.setItem('firebase_config_course_dashboard', JSON.stringify(configObject));
    window.location.reload();
  }
};

// Initialize immediately on script load
try {
  window.FirebaseSystem.init();
} catch (e) {
  console.warn("Immediate Firebase init error:", e);
}

window.addEventListener('DOMContentLoaded', () => {
  if (!window.FirebaseSystem.isConfigured) {
    window.FirebaseSystem.init();
  }
});

