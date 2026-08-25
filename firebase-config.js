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

        // Enable offline persistence for seamless local & cloud synchronization
        this.db.enablePersistence({ synchronizeTabs: true }).catch((err) => {
          if (err.code === 'failed-precondition') {
            console.warn("Firestore persistence precondition failed (multiple tabs open)");
          } else if (err.code === 'unimplemented') {
            console.warn("Firestore persistence not supported in this browser");
          }
        });

        this.isConfigured = true;
        this.isOnline = true;
        console.log("🔥 Firebase Firestore connected successfully for project:", this.config.projectId);
      } catch (e) {
        console.warn("⚠️ Firebase initialization notice:", e.message);
        this.isOnline = false;
      }
    } else {
      console.log("ℹ️ Operating in offline / LocalStorage fallback mode.");
      this.isOnline = false;
    }
  },

  // Reconnect / Reset Firebase connection cleanly
  reconnect() {
    try {
      this.listeners.forEach(unsub => {
        if (typeof unsub === 'function') unsub();
      });
      this.listeners = [];
      this.isConfigured = false;
      this.init();
      return this.isConfigured;
    } catch (e) {
      console.error("Firebase reconnect error:", e);
      return false;
    }
  },

  // Save State to Cloud Firestore with Fallback
  async saveCloudState(collectionName, docId, data) {
    if (!this.isConfigured || !this.db) {
      this.init();
    }
    if (!this.isConfigured || !this.db) {
      console.warn("Firebase not configured; saved state stored locally.");
      return false;
    }
    try {
      await this.db.collection(collectionName).doc(docId).set({
        ...data,
        updatedAt: window.firebase?.firestore?.FieldValue?.serverTimestamp() || new Date().toISOString()
      }, { merge: true });
      console.log("☁️ State successfully saved to Firebase Firestore doc:", docId);
      return true;
    } catch (e) {
      console.warn("Cloud Firestore save warning:", e.message);
      return false;
    }
  },

  // Listen to Cloud Firestore Real-time Updates
  subscribeToDoc(collectionName, docId, callback) {
    if (!this.isConfigured || !this.db) {
      this.init();
    }
    if (!this.isConfigured || !this.db) return null;
    try {
      const unsubscribe = this.db.collection(collectionName).doc(docId)
        .onSnapshot((doc) => {
          if (doc.exists) {
            callback(doc.data());
          } else {
            console.log("☁️ Document does not exist in Cloud Firestore yet. Calling initial seed fallback.");
            callback(null);
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
    this.reconnect();
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


