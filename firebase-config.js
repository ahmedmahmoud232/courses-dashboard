/**
 * Firebase Integration Module & Local-First Dual Sync Engine
 * System: Control Panel (لوحة التحكم) - AI in Electronic Systems Production
 * Architecture: Enterprise Realtime Firestore Sync + Local Cache + Multi-Tab Resilience
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
  debounceTimer: null,

  init() {
    const savedConfig = localStorage.getItem('firebase_config_course_dashboard');
    if (savedConfig) {
      try {
        this.config = JSON.parse(savedConfig);
      } catch (e) {
        console.warn("⚠️ Error parsing saved Firebase config, using default:", e.message);
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

        // Enable resilient offline persistence
        this.db.enablePersistence({ synchronizeTabs: true }).catch((err) => {
          if (err.code === 'failed-precondition') {
            console.warn("ℹ️ Firestore persistence: Multiple tabs open. Active tab persistence enabled.");
          } else if (err.code === 'unimplemented') {
            console.warn("ℹ️ Firestore persistence not supported in this environment.");
          }
        });

        this.isConfigured = true;
        this.isOnline = true;
        console.log("🔥 Firebase Firestore Enterprise Engine Connected:", this.config.projectId);
      } catch (e) {
        console.warn("⚠️ Firebase initialization notice:", e.message);
        this.isOnline = false;
      }
    } else {
      console.log("ℹ️ Running in Local-First offline fallback mode.");
      this.isOnline = false;
    }
  },

  // Reconnect & Reset active listeners cleanly
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

  // Save State to Cloud Firestore with Debounced Batch Writes
  saveCloudState(collectionName, docId, data, immediate = false) {
    if (!this.isConfigured || !this.db) {
      this.init();
    }
    if (!this.isConfigured || !this.db) {
      return Promise.resolve(false);
    }

    const performSave = async () => {
      try {
        const payload = {
          ...data,
          updatedAt: window.firebase?.firestore?.FieldValue?.serverTimestamp() || new Date().toISOString()
        };
        await this.db.collection(collectionName).doc(docId).set(payload, { merge: true });
        console.log("☁️ Real-time Cloud Sync completed for doc:", docId);
        return true;
      } catch (e) {
        console.warn("☁️ Cloud Firestore save warning:", e.message);
        return false;
      }
    };

    if (immediate) {
      return performSave();
    }

    // Debounce non-critical continuous writes (300ms)
    return new Promise((resolve) => {
      if (this.debounceTimer) clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(async () => {
        const res = await performSave();
        resolve(res);
      }, 300);
    });
  },

  // Subscribe to Cloud Firestore Real-time Snapshot Updates
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
            console.log("☁️ Firestore document initializing...");
            callback(null);
          }
        }, (err) => {
          console.warn("Firestore snapshot stream notice:", err.message);
        });

      this.listeners.push(unsubscribe);
      return unsubscribe;
    } catch (e) {
      console.warn("Failed to subscribe to Firestore snapshot:", e.message);
      return null;
    }
  },

  saveConfig(configObject) {
    localStorage.setItem('firebase_config_course_dashboard', JSON.stringify(configObject));
    this.reconnect();
  }
};

// Auto-initialize on system ready
try {
  window.FirebaseSystem.init();
} catch (e) {
  console.warn("Immediate Firebase init exception:", e);
}

window.addEventListener('DOMContentLoaded', () => {
  if (!window.FirebaseSystem.isConfigured) {
    window.FirebaseSystem.init();
  }
});


