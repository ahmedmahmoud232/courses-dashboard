/**
 * Firebase Integration Module & Local Fallback Store
 * System: Control Panel (لوحة التحكم) - AI in Electronic Systems Production
 * Refactored Architecture for Dual Sync (Firestore + LocalStorage)
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

// Global Firebase Architecture Manager
window.FirebaseSystem = {
  isConfigured: false,
  isOnline: false,
  db: null,
  app: null,
  config: DEFAULT_FIREBASE_CONFIG,
  listeners: [],

  init() {
    const savedConfig = localStorage.getItem('firebase_config_course_dashboard');
    if (savedConfig) {
      try {
        this.config = JSON.parse(savedConfig);
      } catch (e) {
        console.warn("Error parsing saved Firebase config, falling back to default:", e.message);
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
        this.isOnline = true;
        console.log("🔥 Firebase Firestore initialized successfully for project:", this.config.projectId);
      } catch (e) {
        console.warn("⚠️ Firebase initialization notice:", e.message);
        this.isOnline = false;
      }
    } else {
      console.log("ℹ️ Operating in offline / LocalStorage fallback mode.");
      this.isOnline = false;
    }
  },

  // Save State to Cloud Firestore with Fallback
  async saveCloudState(collectionName, docId, data) {
    if (!this.isConfigured || !this.db) {
      return false;
    }
    try {
      await this.db.collection(collectionName).doc(docId).set({
        ...data,
        updatedAt: window.firebase?.firestore?.FieldValue?.serverTimestamp() || new Date().toISOString()
      }, { merge: true });
      return true;
    } catch (e) {
      console.warn("Cloud Firestore save warning:", e.message);
      return false;
    }
  },

  // Listen to Cloud Firestore Real-time Updates
  subscribeToDoc(collectionName, docId, callback) {
    if (!this.isConfigured || !this.db) return null;
    try {
      const unsubscribe = this.db.collection(collectionName).doc(docId)
        .onSnapshot((doc) => {
          if (doc.exists) {
            callback(doc.data());
          }
        }, (err) => {
          console.warn("Firestore snapshot error:", err.message);
        });
      this.listeners.push(unsubscribe);
      return unsubscribe;
    } catch (e) {
      console.warn("Failed to subscribe to Firestore doc:", e.message);
      return null;
    }
  },

  saveConfig(configObject) {
    localStorage.setItem('firebase_config_course_dashboard', JSON.stringify(configObject));
    window.location.reload();
  }
};

// Initialize on load
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

