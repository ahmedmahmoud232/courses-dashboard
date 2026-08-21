/**
 * Course Control Panel Application Engine (لوحة التحكم)
 * Course: AI in Electronic Systems Production (الذكاء الاصطناعي في إنتاج الأنظمة الإلكترونية)
 * Performance: Ultra-Fast Light-Mode SaaS Engine
 */

// ==========================================================================
// 1. DATA SEED & INITIAL STATE
// ==========================================================================

const INITIAL_DATA = {
  students: [
    {
      id: "2026101",
      name: "أحمد علي الفارس",
      pass: "123456",
      age: 21,
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Ahmed",
      group: "شُعبة الذكاء الاصطناعي 1",
      rating: 1650, // Gold Shield
      gradeScore: 94,
      createdAt: "2026-08-01"
    },
    {
      id: "2026102",
      name: "سارة محمود الخالد",
      pass: "123456",
      age: 20,
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Sara",
      group: "شُعبة الذكاء الاصطناعي 1",
      rating: 2600, // Diamond Shield
      gradeScore: 98,
      createdAt: "2026-08-01"
    },
    {
      id: "2026103",
      name: "عمر خالد الجابر",
      pass: "123456",
      age: 22,
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Omar",
      group: "شُعبة الأنظمة المدمجة 2",
      rating: 850, // Bronze Shield
      gradeScore: 82,
      createdAt: "2026-08-02"
    },
    {
      id: "2026104",
      name: "مريم عبد الله حسن",
      pass: "123456",
      age: 20,
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Mariam",
      group: "شُعبة الأنظمة المدمجة 2",
      rating: 450, // Wooden Shield (New student default)
      gradeScore: 75,
      createdAt: "2026-08-03"
    }
  ],
  groups: [
    { id: "g1", name: "شُعبة الذكاء الاصطناعي 1", desc: "تطبيقات التعلم العميق في معالجة إشارات الدوائر الإلكترونية" },
    { id: "g2", name: "شُعبة الأنظمة المدمجة 2", desc: "برمجة متحكمات STM32 وحساسات إنترنت الأشياء IoT" }
  ],
  lectures: [
    {
      id: "l1",
      title: "المحاضرة 1: مقدمة في المستشعرات والأنظمة الإلكترونية الذكية",
      desc: "استعراض أنواع الحساسات وتكاملها مع المعالجات الدقيقة ومعالجة البيانات.",
      link: "https://example.com/lecture1.pdf"
    },
    {
      id: "l2",
      title: "المحاضرة 2: بناء وتصميم الدوائر المدمجة للذكاء الاصطناعي",
      desc: "تحليل تصميم ألواح الـ PCB وتوزيع طاقة المعالجة وتيار التغذية.",
      link: "https://example.com/lecture2.pdf"
    },
    {
      id: "l3",
      title: "المحاضرة 3: تطبيقات TinyML والشبكات العصبية المدمجة",
      desc: "تدريب نماذج TensorFlow Lite وتقليص حجم البرمجيات للعمل على المايكروكنترولر.",
      link: "https://example.com/lecture3.pdf"
    }
  ],
  tasks: [
    {
      id: "t1",
      title: "مشروع المستشعر الذكي للحرارة والتيار",
      desc: "تصميم دائرة إلكترونية لقراءة القيم وتطبيق خوارزمية التنبؤ بالأعطال.",
      deadline: "2026-09-01"
    },
    {
      id: "t2",
      title: "تقرير تقليص نموذج الشبكة العصبية TinyML",
      desc: "تقديم تقرير شامل عن قمع النماذج (Quantization) وتجربتها على المتحكم.",
      deadline: "2026-09-15"
    }
  ],
  attendance: {},
  battles: [],
  questions: [
    {
      q: "ما المقصود بتطبيقات TinyML في الأنظمة الإلكترونية؟",
      options: ["تشغيل نماذج الذكاء الاصطناعي على متحكمات منخفضة الطاقة", "استخدام خوادم ضخمة جداً", "تصنيع ألواح النحاس", "شاشات العرض الكبيرة"],
      answer: 0
    },
    {
      q: "أي من الحساسات التالية يُستخدم لقياس التسارع والزوايا في الأنظمة الذكية؟",
      options: ["حساس LDR", "حساس IMU (MPU6050)", "المقاومة الحرارية NTC", "المكثف السعوي"],
      answer: 1
    },
    {
      q: "ما الفائدة الرئيسية من تكميم النماذج (Quantization) في خوارزميات الذكاء الاصطناعي المدمج؟",
      options: ["زيادة حجم الملف", "تقليل استهلاك الذاكرة والطاقة بترقية 32-bit إلى 8-bit", "إلغاء الحاجة للتغذية الكهربائية", "تبطئ سرعة المعالجة"],
      answer: 1
    },
    {
      q: "في تصميم الدوائر المدمجة، ما الوظيفة الرئيسية للمايكروكنترولر STM32؟",
      options: ["تنفيذ التعليمات البرمجية والتحكم في المداخل والمخارج", "تخزين شحنة كهربائية", "تحويل التيار المتناوب فقط", "تبريد المكونات"],
      answer: 0
    },
    {
      q: "ما هو البروتوكول الأكثر استخداماً لتوصيل المستشعرات الذكية بالمعالج على مسافات قصيرة؟",
      options: ["I2C / SPI", "HTTP", "FTP", "HDMI"],
      answer: 0
    }
  ]
};

// ==========================================================================
// 2. GLOBAL STATE & THEME LOGIC
// ==========================================================================

let appState = {
  currentRole: 'teacher',
  activeStudent: null,
  students: [],
  groups: [],
  lectures: [],
  tasks: [],
  attendance: {},
  battles: [],
  currentBattle: null,
  themeMode: 'light' // Default White Light Mode
};

const SHIELDS = {
  WOOD: { name: "درع خشبي 🪵", min: 0, max: 500, class: "shield-wood", icon: "🪵" },
  BRONZE: { name: "درع برونزي 🥉", min: 501, max: 1000, class: "shield-bronze", icon: "🥉" },
  SILVER: { name: "درع فضي 🥈", min: 1001, max: 1500, class: "shield-silver", icon: "🥈" },
  GOLD: { name: "درع ذهبي 🥇", min: 1501, max: 2000, class: "shield-gold", icon: "🥇" },
  PLATINUM: { name: "درع بلاتيني 💎", min: 2001, max: 2500, class: "shield-platinum", icon: "💎" },
  DIAMOND: { name: "درع الأسطورة الماسي 👑", min: 2501, max: 99999, class: "shield-diamond", icon: "👑" }
};

function getShieldForRating(rating) {
  const pts = rating || 0;
  if (pts <= 500) return SHIELDS.WOOD;
  if (pts <= 1000) return SHIELDS.BRONZE;
  if (pts <= 1500) return SHIELDS.SILVER;
  if (pts <= 2000) return SHIELDS.GOLD;
  if (pts <= 2500) return SHIELDS.PLATINUM;
  return SHIELDS.DIAMOND;
}

function loadState() {
  const saved = localStorage.getItem('course_control_panel_state_v2');
  if (saved) {
    try {
      appState = { ...appState, ...JSON.parse(saved) };
    } catch (e) {
      appState = { ...appState, ...INITIAL_DATA };
    }
  } else {
    appState = { ...appState, ...INITIAL_DATA };
    saveState();
  }

  // Load saved theme
  const savedTheme = localStorage.getItem('theme_mode') || 'light';
  applyThemeMode(savedTheme);

  // Initialize Firebase Realtime Firestore Sync
  initFirebaseSync();
}

function saveState() {
  const stateData = {
    students: appState.students,
    groups: appState.groups,
    lectures: appState.lectures,
    tasks: appState.tasks,
    attendance: appState.attendance,
    battles: appState.battles,
    updatedAt: new Date().toISOString()
  };

  localStorage.setItem('course_control_panel_state_v2', JSON.stringify(stateData));

  // Sync to Firebase Firestore
  if (window.FirebaseSystem && window.FirebaseSystem.isConfigured && window.FirebaseSystem.db) {
    window.FirebaseSystem.db.collection('dashboard').doc('main_state').set(stateData)
      .then(() => {
        console.log("⚡ [Firebase] State successfully saved to Firestore!");
      })
      .catch((err) => {
        console.error("❌ [Firebase] Error saving state to Firestore:", err);
      });
  }
}

let isFirebaseListenerActive = false;

function initFirebaseSync() {
  if (isFirebaseListenerActive) return;
  
  if (window.FirebaseSystem && window.FirebaseSystem.isConfigured && window.FirebaseSystem.db) {
    isFirebaseListenerActive = true;
    console.log("⚡ [Firebase] Connecting real-time listener to Firestore...");
    
    window.FirebaseSystem.db.collection('dashboard').doc('main_state')
      .onSnapshot((doc) => {
        if (doc.exists) {
          const remoteData = doc.data();
          if (remoteData) {
            console.log("⚡ [Firebase] Received data from Firestore!", remoteData);
            if (remoteData.students) appState.students = remoteData.students;
            if (remoteData.groups) appState.groups = remoteData.groups;
            if (remoteData.lectures) appState.lectures = remoteData.lectures;
            if (remoteData.tasks) appState.tasks = remoteData.tasks;
            if (remoteData.attendance) appState.attendance = remoteData.attendance;
            if (remoteData.battles) appState.battles = remoteData.battles;

            localStorage.setItem('course_control_panel_state_v2', JSON.stringify(remoteData));
            
            // Re-render UI components with updated data
            refreshCurrentUI();
          }
        } else {
          console.log("⚡ [Firebase] No main_state found in Firestore yet. Creating initial document...");
          saveState();
        }
      }, (error) => {
        console.warn("⚠️ [Firebase] Sync listener error:", error.message);
      });
  } else {
    // Retry shortly if Firebase system is initializing
    setTimeout(() => {
      if (!isFirebaseListenerActive) initFirebaseSync();
    }, 500);
  }
}

function refreshCurrentUI() {
  renderDashboardStats();
  renderStudentsTable();
  renderGroupsGrid();
  renderLecturesGrid();
  renderTasksList();
  renderGradesTable();
}

function toggleThemeMode() {
  const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
  applyThemeMode(newTheme);
  localStorage.setItem('theme_mode', newTheme);
}

function applyThemeMode(theme) {
  appState.themeMode = theme;
  const icon = document.getElementById('theme-icon');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    if (icon) icon.className = 'fa-solid fa-sun text-amber';
  } else {
    document.body.classList.remove('dark-mode');
    if (icon) icon.className = 'fa-solid fa-moon';
  }
}

// Real Scannable QR Code Generator Engine
function generateInlineSVGQRCode(container, text) {
  if (!container) return;
  const size = 150;
  const encodedText = encodeURIComponent(text);
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodedText}&margin=2`;

  container.innerHTML = `
    <img src="${qrApiUrl}" 
         alt="QR Code" 
         width="${size}" 
         height="${size}" 
         style="background:#ffffff; border-radius:8px; padding:6px; box-shadow:0 2px 8px rgba(0,0,0,0.1); object-fit:contain;" 
         onerror="this.onerror=null; this.src='https://quickchart.io/qr?size=${size}&text=${encodedText}';" />
  `;
}

// Camera Live QR Code Scanner Engine
let html5QrScanner = null;

function openQRScannerModal() {
  openModal('qr-scanner-modal');
  const resultDiv = document.getElementById('scanner-result');
  if (resultDiv) resultDiv.textContent = 'جاري تشغيل كاميرا الجهاز...';

  if (!html5QrScanner) {
    html5QrScanner = new Html5Qrcode("qr-reader");
  }

  const config = { fps: 10, qrbox: { width: 220, height: 220 } };

  html5QrScanner.start(
    { facingMode: "environment" },
    config,
    onQrCodeScannedSuccess,
    (err) => {}
  ).catch(err => {
    console.warn("Unable to start camera scanner:", err);
    if (resultDiv) {
      resultDiv.innerHTML = `<span class="text-rose">تعذر فتح الكاميرا (يرجى السماح بالتصريح للكاميرا).</span>`;
    }
  });
}

function onQrCodeScannedSuccess(decodedText) {
  try {
    let studentId = '';

    if (decodedText.startsWith('{')) {
      const parsed = JSON.parse(decodedText);
      studentId = parsed.id;
    } else {
      studentId = decodedText.trim();
    }

    const student = appState.students.find(s => s.id === studentId);
    if (student) {
      const dateVal = document.getElementById('attendance-date')?.value || new Date().toISOString().split('T')[0];
      if (!appState.attendance[dateVal]) appState.attendance[dateVal] = {};
      
      // Prevent rapid duplicate toast alerts
      if (appState.attendance[dateVal][student.id] !== 'present') {
        appState.attendance[dateVal][student.id] = 'present';
        saveState();
        loadAttendanceForDate();
        showToast(`تم تسجيل حضور الطالب: ${student.name}`, 'success');
      }

      const resultDiv = document.getElementById('scanner-result');
      if (resultDiv) {
        resultDiv.innerHTML = `<i class="fa-solid fa-circle-check text-emerald"></i> تم تسجيل: <strong>${student.name}</strong> (${student.id})`;
      }
    } else {
      const resultDiv = document.getElementById('scanner-result');
      if (resultDiv) {
        resultDiv.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-amber"></i> رمز غير مسجل لكورس: ${decodedText}`;
      }
    }
  } catch (e) {
    console.error("QR Code processing error:", e);
  }
}

function closeQRScannerModal() {
  if (html5QrScanner && html5QrScanner.isScanning) {
    html5QrScanner.stop().then(() => {
      closeModal('qr-scanner-modal');
    }).catch(() => {
      closeModal('qr-scanner-modal');
    });
  } else {
    closeModal('qr-scanner-modal');
  }
}

// Toast Helper
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  let icon = 'fa-circle-info';
  if (type === 'success') icon = 'fa-circle-check';
  if (type === 'error') icon = 'fa-circle-xmark';

  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.remove(); }, 3500);
}

function openModal(id) {
  document.getElementById(id)?.classList.add('active');
}

function closeModal(id) {
  document.getElementById(id)?.classList.remove('active');
}

// ==========================================================================
// 3. NAVIGATION LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initUI();
  populateDropdowns();
  renderDashboardStats();
  renderStudentsTable();
  renderGroupsGrid();
  renderLecturesGrid();
  renderTasksList();
  renderGradesTable();
  loadAttendanceForDate();

  const dateInput = document.getElementById('attendance-date');
  if (dateInput) {
    dateInput.value = new Date().toISOString().split('T')[0];
  }
});

function initUI() {
  const savedStudentId = localStorage.getItem('logged_student_id');
  if (savedStudentId) {
    const st = appState.students.find(s => s.id === savedStudentId);
    if (st) appState.activeStudent = st;
  }
}

function switchRole(role) {
  appState.currentRole = role;

  const btnTeacher = document.getElementById('btn-role-teacher');
  const btnStudent = document.getElementById('btn-role-student');
  const viewTeacher = document.getElementById('view-teacher');
  const viewStudent = document.getElementById('view-student');
  const userHeaderName = document.getElementById('header-user-name');
  const userHeaderRole = document.getElementById('header-user-role');
  const btnLogout = document.getElementById('btn-logout');

  if (role === 'teacher') {
    btnTeacher.classList.add('active');
    btnStudent.classList.remove('active');
    viewTeacher.classList.add('active');
    viewStudent.classList.remove('active');

    userHeaderName.textContent = "د. المعلم";
    userHeaderRole.textContent = "المشرف الأكاديمي";
    btnLogout.classList.add('hidden');
  } else {
    btnStudent.classList.add('active');
    btnTeacher.classList.remove('active');
    viewStudent.classList.add('active');
    viewTeacher.classList.remove('active');

    if (appState.activeStudent) {
      renderStudentDashboardView();
    } else {
      document.getElementById('student-login-card').classList.remove('hidden');
      document.getElementById('student-dashboard-content').classList.add('hidden');
    }
  }
}

function showTeacherTab(tabId, clickedBtn = null) {
  // Update desktop sidebar buttons
  document.querySelectorAll('.sidebar .nav-item').forEach(btn => btn.classList.remove('active'));
  // Update mobile bottom nav buttons
  document.querySelectorAll('.mobile-bottom-nav .mobile-nav-btn').forEach(btn => btn.classList.remove('active'));

  if (clickedBtn) {
    clickedBtn.classList.add('active');
  }

  document.querySelectorAll('.content-area .tab-content').forEach(tab => tab.classList.remove('active'));
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');

  if (tabId === 'dashboard-tab') renderDashboardStats();
  if (tabId === 'students-tab') renderStudentsTable();
  if (tabId === 'groups-tab') renderGroupsGrid();
  if (tabId === 'attendance-tab') loadAttendanceForDate();
  if (tabId === 'battle-tab') populateBattleSelectors();
  if (tabId === 'grades-tab') renderGradesTable();
}

function populateDropdowns() {
  const studentGroupSel = document.getElementById('form-student-group');
  const filterGroupSel = document.getElementById('student-group-filter');

  if (studentGroupSel && filterGroupSel) {
    studentGroupSel.innerHTML = appState.groups.map(g => `<option value="${g.name}">${g.name}</option>`).join('');
    filterGroupSel.innerHTML = `<option value="all">كل المجموعات والشُعب</option>` +
      appState.groups.map(g => `<option value="${g.name}">${g.name}</option>`).join('');
  }
}

// ==========================================================================
// 4. STUDENT CRUD & RENDER
// ==========================================================================

function renderDashboardStats() {
  document.getElementById('stat-total-students').textContent = appState.students.length;
  document.getElementById('stat-total-groups').textContent = appState.groups.length;
  document.getElementById('stat-total-battles').textContent = appState.battles.length;

  const today = new Date().toISOString().split('T')[0];
  const todayRecords = appState.attendance[today] || {};
  const presentCount = Object.values(todayRecords).filter(v => v === 'present').length;
  const rate = appState.students.length > 0 ? Math.round((presentCount / appState.students.length) * 100) : 0;
  document.getElementById('stat-attendance-rate').textContent = `${rate}%`;

  const badgeList = document.getElementById('overview-badge-list');
  if (badgeList) {
    badgeList.innerHTML = appState.students.slice(0, 5).map(s => {
      const shield = getShieldForRating(s.rating);
      return `
        <div class="leaderboard-item">
          <div class="flex-align-center gap-2">
            <img src="${s.avatar}" class="avatar-sm" alt="Avatar">
            <div>
              <strong>${s.name}</strong>
              <div class="text-xs text-muted">ID: ${s.id}</div>
            </div>
          </div>
          <span class="badge-shield ${shield.class}">${shield.name}</span>
        </div>
      `;
    }).join('');
  }
}

function renderStudentsTable() {
  const tbody = document.getElementById('students-table-body');
  if (!tbody) return;

  const searchQuery = (document.getElementById('student-search-input')?.value || '').toLowerCase();
  const groupFilter = document.getElementById('student-group-filter')?.value || 'all';

  const filtered = appState.students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery) || s.id.includes(searchQuery);
    const matchesGroup = groupFilter === 'all' || s.group === groupFilter;
    return matchesSearch && matchesGroup;
  });

  tbody.innerHTML = filtered.map(s => {
    const shield = getShieldForRating(s.rating);
    return `
      <tr>
        <td>
          <div class="flex-align-center gap-2">
            <img src="${s.avatar}" class="avatar-sm" alt="Avatar">
            <strong>${s.name}</strong>
          </div>
        </td>
        <td><code class="text-indigo">${s.id}</code></td>
        <td>${s.age} سنة</td>
        <td><span class="badge bg-subtle">${s.group}</span></td>
        <td><span class="badge-shield ${shield.class}">${shield.name}</span></td>
        <td><strong class="text-amber">${s.rating}</strong></td>
        <td>
          <button class="btn btn-xs btn-outline" onclick="showStudentQRCard('${s.id}')">
            <i class="fa-solid fa-qrcode"></i> عرض QR
          </button>
        </td>
        <td>
          <div class="flex-align-center gap-1">
            <button class="btn btn-xs btn-secondary" onclick="openEditStudentModal('${s.id}')">تعديل</button>
            <button class="btn btn-xs btn-outline text-rose" onclick="deleteStudent('${s.id}')">حذف</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function openRegisterStudentModal() {
  document.getElementById('student-modal-title').textContent = "تسجيل طالب جديد";
  document.getElementById('student-form').reset();
  document.getElementById('form-student-index').value = '';
  document.getElementById('form-student-id').readOnly = false;
  openModal('student-modal');
}

function openEditStudentModal(studentId) {
  const st = appState.students.find(s => s.id === studentId);
  if (!st) return;

  document.getElementById('student-modal-title').textContent = "تعديل بيانات الطالب";
  document.getElementById('form-student-index').value = st.id;
  document.getElementById('form-student-name').value = st.name;
  document.getElementById('form-student-id').value = st.id;
  document.getElementById('form-student-id').readOnly = true;
  document.getElementById('form-student-pass').value = st.pass;
  document.getElementById('form-student-age').value = st.age;
  document.getElementById('form-student-group').value = st.group;
  document.getElementById('form-student-avatar').value = st.avatar;

  openModal('student-modal');
}

function generateRandomAvatar() {
  const randomSeed = Math.floor(Math.random() * 10000);
  document.getElementById('form-student-avatar').value = `https://api.dicebear.com/7.x/bottts/svg?seed=${randomSeed}`;
}

function saveStudentForm(event) {
  event.preventDefault();
  const editId = document.getElementById('form-student-index').value;
  const name = document.getElementById('form-student-name').value;
  const id = document.getElementById('form-student-id').value;
  const pass = document.getElementById('form-student-pass').value;
  const age = parseInt(document.getElementById('form-student-age').value);
  const group = document.getElementById('form-student-group').value;
  let avatar = document.getElementById('form-student-avatar').value || `https://api.dicebear.com/7.x/bottts/svg?seed=${id}`;

  if (editId) {
    const idx = appState.students.findIndex(s => s.id === editId);
    if (idx !== -1) {
      appState.students[idx] = { ...appState.students[idx], name, pass, age, group, avatar };
      showToast("تم تحديث الطالب بنجاح", "success");
    }
  } else {
    if (appState.students.some(s => s.id === id)) {
      showToast("الرقم الأكاديمي مستخدم بالفعل!", "error");
      return;
    }

    appState.students.push({
      id, name, pass, age, avatar, group,
      rating: 450, // Wooden shield initial
      gradeScore: 80,
      createdAt: new Date().toISOString().split('T')[0]
    });
    showToast("تم إضافة الطالب وإسناد الدرع الخشبي 🪵", "success");
  }

  saveState();
  closeModal('student-modal');
  renderStudentsTable();
  renderDashboardStats();
}

function deleteStudent(studentId) {
  if (confirm("هل أنت تأكد من حذف بيانات الطالب؟")) {
    appState.students = appState.students.filter(s => s.id !== studentId);
    saveState();
    renderStudentsTable();
    renderDashboardStats();
    showToast("تم الحذف بنجاح", "info");
  }
}

function showStudentQRCard(studentId) {
  const st = appState.students.find(s => s.id === studentId);
  if (!st) return;

  const shield = getShieldForRating(st.rating);
  document.getElementById('qr-modal-img').src = st.avatar;
  document.getElementById('qr-modal-name').textContent = st.name;
  document.getElementById('qr-modal-id').textContent = st.id;
  document.getElementById('qr-modal-shield').className = `badge-shield ${shield.class}`;
  document.getElementById('qr-modal-shield').textContent = shield.name;

  const qrHolder = document.getElementById('qr-modal-code');
  generateInlineSVGQRCode(qrHolder, JSON.stringify({ id: st.id, name: st.name }));
  openModal('qr-card-modal');
}

// ==========================================================================
// 5. GROUPS, LECTURES, TASKS & ATTENDANCE
// ==========================================================================

function renderGroupsGrid() {
  const container = document.getElementById('groups-grid');
  if (!container) return;

  container.innerHTML = appState.groups.map(g => {
    const groupStudents = appState.students.filter(s => s.group === g.name);
    return `
      <div class="card p-3">
        <div class="flex-between mb-2">
          <h3 class="text-indigo">${g.name}</h3>
          <span class="badge bg-subtle">${groupStudents.length} طلاب</span>
        </div>
        <p class="text-muted text-xs mb-3">${g.desc || 'مجموعة متخصصة في الأنظمة الذكية'}</p>
        <div class="flex-align-center gap-1 flex-wrap">
          ${groupStudents.map(s => `<img src="${s.avatar}" class="avatar-sm" title="${s.name}">`).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function saveGroupForm(event) {
  event.preventDefault();
  const name = document.getElementById('group-name-input').value;
  const desc = document.getElementById('group-desc-input').value;
  appState.groups.push({ id: `g_${Date.now()}`, name, desc });
  saveState();
  populateDropdowns();
  renderGroupsGrid();
  closeModal('create-group-modal');
  showToast("تم إنشاء الشعبة بنجاح", "success");
}

function renderLecturesGrid() {
  const container = document.getElementById('lectures-grid');
  if (!container) return;
  container.innerHTML = appState.lectures.map((l, idx) => `
    <div class="card p-3 flex-between flex-column">
      <div>
        <span class="badge bg-indigo mb-1">محاضرة ${idx + 1}</span>
        <h4 class="mb-1">${l.title}</h4>
        <p class="text-muted text-xs mb-3">${l.desc}</p>
      </div>
      <a href="${l.link || '#'}" target="_blank" class="btn btn-outline btn-sm btn-block">فتح الشرائح</a>
    </div>
  `).join('');
}

function saveLectureForm(event) {
  event.preventDefault();
  const title = document.getElementById('lec-title-input').value;
  const desc = document.getElementById('lec-desc-input').value;
  const link = document.getElementById('lec-link-input').value;
  appState.lectures.push({ id: `l_${Date.now()}`, title, desc, link });
  saveState();
  renderLecturesGrid();
  closeModal('add-lecture-modal');
  showToast("تم نشر المحاضرة", "success");
}

function renderTasksList() {
  const container = document.getElementById('tasks-list');
  if (!container) return;
  container.innerHTML = appState.tasks.map(t => `
    <div class="card p-3 mb-2 flex-between">
      <div>
        <h4>${t.title}</h4>
        <p class="text-muted text-xs mt-1">${t.desc}</p>
      </div>
      <span class="badge bg-amber">التسليم: ${t.deadline}</span>
    </div>
  `).join('');
}

function saveTaskForm(event) {
  event.preventDefault();
  const title = document.getElementById('task-title-input').value;
  const desc = document.getElementById('task-desc-input').value;
  const deadline = document.getElementById('task-deadline-input').value;
  appState.tasks.push({ id: `t_${Date.now()}`, title, desc, deadline });
  saveState();
  renderTasksList();
  closeModal('add-task-modal');
  showToast("تم إضافة الواجب", "success");
}

function loadAttendanceForDate() {
  const dateVal = document.getElementById('attendance-date')?.value || new Date().toISOString().split('T')[0];
  const tbody = document.getElementById('attendance-table-body');
  if (!tbody) return;

  const dateRecords = appState.attendance[dateVal] || {};
  tbody.innerHTML = appState.students.map(s => {
    const status = dateRecords[s.id] || 'unmarked';
    return `
      <tr>
        <td>
          <div class="flex-align-center gap-2">
            <img src="${s.avatar}" class="avatar-sm" alt="Avatar">
            <strong>${s.name}</strong>
          </div>
        </td>
        <td><span class="badge bg-subtle">${s.group}</span></td>
        <td>
          <select class="form-control-inline" onchange="updateAttendanceState('${s.id}', this.value)">
            <option value="unmarked" ${status === 'unmarked' ? 'selected' : ''}>لم يحدد</option>
            <option value="present" ${status === 'present' ? 'selected' : ''}>حاضر ✅</option>
            <option value="absent" ${status === 'absent' ? 'selected' : ''}>غائب ❌</option>
            <option value="late" ${status === 'late' ? 'selected' : ''}>متأخر ⏰</option>
          </select>
        </td>
        <td>
          <button class="btn btn-xs btn-emerald" onclick="updateAttendanceState('${s.id}', 'present'); saveAttendanceRecord();">تسجيل حضور</button>
        </td>
      </tr>
    `;
  }).join('');
}

function updateAttendanceState(studentId, status) {
  const dateVal = document.getElementById('attendance-date')?.value || new Date().toISOString().split('T')[0];
  if (!appState.attendance[dateVal]) appState.attendance[dateVal] = {};
  appState.attendance[dateVal][studentId] = status;
}

function saveAttendanceRecord() {
  saveState();
  renderDashboardStats();
  showToast("تم حفظ كشف الحضور", "success");
}

// ==========================================================================
// 6. BATTLE MODE ARENA
// ==========================================================================

function populateBattleSelectors() {
  const p1Sel = document.getElementById('battle-p1-select');
  const p2Sel = document.getElementById('battle-p2-select');
  if (!p1Sel || !p2Sel) return;

  const options = appState.students.map(s => `<option value="${s.id}">${s.name}</option>`).join('');
  p1Sel.innerHTML = options;
  p2Sel.innerHTML = options;
  if (appState.students.length > 1) p2Sel.selectedIndex = 1;

  updateBattlePreview('p1');
  updateBattlePreview('p2');
}

function updateBattlePreview(playerKey) {
  const selId = playerKey === 'p1' ? 'battle-p1-select' : 'battle-p2-select';
  const previewDiv = document.getElementById(`${playerKey}-preview`);
  const studentId = document.getElementById(selId)?.value;

  const st = appState.students.find(s => s.id === studentId);
  if (st && previewDiv) {
    const shield = getShieldForRating(st.rating);
    previewDiv.innerHTML = `
      <img src="${st.avatar}" class="avatar-md mb-1" alt="Avatar">
      <h4>${st.name}</h4>
      <div class="mt-1"><span class="badge-shield ${shield.class}">${shield.name}</span></div>
      <div class="text-indigo text-xs mt-1">النقاط: ${st.rating}</div>
    `;
  }
}

function startBattleArena() {
  const p1Id = document.getElementById('battle-p1-select').value;
  const p2Id = document.getElementById('battle-p2-select').value;

  if (p1Id === p2Id) {
    showToast("يرجى اختيار طالبين مختلفين!", "error");
    return;
  }

  const p1 = appState.students.find(s => s.id === p1Id);
  const p2 = appState.students.find(s => s.id === p2Id);

  appState.currentBattle = {
    p1, p2, p1Score: 0, p2Score: 0,
    currentQuestionIndex: 0,
    questions: [...appState.questions].sort(() => 0.5 - Math.random()).slice(0, 5)
  };

  document.getElementById('battle-setup-card').classList.add('hidden');
  const activeScreen = document.getElementById('active-battle-screen');
  activeScreen.classList.remove('hidden');
  renderBattleQuestion();
}

function renderBattleQuestion() {
  const b = appState.currentBattle;
  const activeScreen = document.getElementById('active-battle-screen');

  if (b.currentQuestionIndex >= b.questions.length) {
    finishBattleArena();
    return;
  }

  const q = b.questions[b.currentQuestionIndex];

  activeScreen.innerHTML = `
    <div class="flex-between mb-3">
      <span class="badge bg-indigo">السؤال ${b.currentQuestionIndex + 1} / ${b.questions.length}</span>
      <button class="btn btn-xs btn-outline" onclick="cancelBattleArena()">إلغاء</button>
    </div>

    <div class="grid-2col mb-3">
      <div class="card p-2 text-center border-cyan">
        <img src="${b.p1.avatar}" class="avatar-sm" alt="Avatar">
        <div class="text-xs mt-1">${b.p1.name}</div>
        <h3 class="text-indigo">${b.p1Score}</h3>
      </div>
      <div class="card p-2 text-center border-pink">
        <img src="${b.p2.avatar}" class="avatar-sm" alt="Avatar">
        <div class="text-xs mt-1">${b.p2.name}</div>
        <h3 class="text-rose">${b.p2Score}</h3>
      </div>
    </div>

    <div class="card p-3 text-center mb-3">
      <h4>${q.q}</h4>
      <div class="grid-2col gap-2 mt-3">
        ${q.options.map((opt, idx) => `
          <button class="btn btn-outline p-2 text-right" onclick="submitBattleAnswer(${idx})">
            <strong>${['أ', 'ب', 'ج', 'د'][idx]})</strong> ${opt}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function submitBattleAnswer(selectedOptIdx) {
  const b = appState.currentBattle;
  const q = b.questions[b.currentQuestionIndex];

  if (selectedOptIdx === q.answer) {
    showToast("إجابة صحيحة! +100 نقطة لكل طالب", "success");
    b.p1Score += 100;
    b.p2Score += 100;
  } else {
    showToast("إجابة خاطئة!", "error");
  }

  b.currentQuestionIndex++;
  renderBattleQuestion();
}

function finishBattleArena() {
  const b = appState.currentBattle;
  const activeScreen = document.getElementById('active-battle-screen');

  let winnerText = "تعادل حماسي!";
  if (b.p1Score > b.p2Score) winnerText = `الفائز: ${b.p1.name}! 🎉`;
  else if (b.p2Score > b.p1Score) winnerText = `الفائز: ${b.p2.name}! 🎉`;

  const p1Idx = appState.students.findIndex(s => s.id === b.p1.id);
  const p2Idx = appState.students.findIndex(s => s.id === b.p2.id);
  if (p1Idx !== -1) appState.students[p1Idx].rating += b.p1Score;
  if (p2Idx !== -1) appState.students[p2Idx].rating += b.p2Score;

  appState.battles.push({ p1: b.p1.id, p2: b.p2.id, p1Score: b.p1Score, p2Score: b.p2Score, date: new Date().toISOString() });
  saveState();

  if (window.confetti) confetti({ particleCount: 100, spread: 70 });

  activeScreen.innerHTML = `
    <div class="text-center p-4">
      <h2 class="text-indigo mb-2">${winnerText}</h2>
      <p class="text-muted text-xs mb-3">تم تحديث التقييم والدروع في النظام بنجاح</p>
      <button class="btn btn-primary" onclick="cancelBattleArena()">العودة</button>
    </div>
  `;
}

function cancelBattleArena() {
  document.getElementById('active-battle-screen').classList.add('hidden');
  document.getElementById('battle-setup-card').classList.remove('hidden');
  renderStudentsTable();
  renderDashboardStats();
}

// ==========================================================================
// 7. GRADES & STUDENT PORTAL
// ==========================================================================

function renderGradesTable() {
  const tbody = document.getElementById('grades-table-body');
  if (!tbody) return;
  tbody.innerHTML = appState.students.map(s => {
    const shield = getShieldForRating(s.rating);
    return `
      <tr>
        <td>
          <div class="flex-align-center gap-2">
            <img src="${s.avatar}" class="avatar-sm" alt="Avatar">
            <strong>${s.name}</strong>
          </div>
        </td>
        <td><span class="badge bg-subtle">${s.group}</span></td>
        <td><input type="number" class="form-control-inline" style="width:70px" value="${s.gradeScore}" onchange="updateStudentGrade('${s.id}', this.value)"></td>
        <td><strong class="text-amber">${s.rating}</strong></td>
        <td><span class="badge-shield ${shield.class}">${shield.name}</span></td>
        <td><strong class="text-emerald">${s.gradeScore >= 90 ? 'ممتاز مرتفع (A+)' : 'جيد جداً (B)'}</strong></td>
      </tr>
    `;
  }).join('');
}

function updateStudentGrade(studentId, val) {
  const idx = appState.students.findIndex(s => s.id === studentId);
  if (idx !== -1) {
    appState.students[idx].gradeScore = parseInt(val) || 0;
    saveState();
  }
}

function handleStudentLogin(event) {
  event.preventDefault();
  const id = document.getElementById('login-student-id').value;
  const pass = document.getElementById('login-student-pass').value;

  const st = appState.students.find(s => s.id === id && s.pass === pass);
  if (st) {
    appState.activeStudent = st;
    localStorage.setItem('logged_student_id', st.id);
    showToast(`مرحباً بك يا ${st.name}`, "success");
    renderStudentDashboardView();
  } else {
    showToast("الرقم الأكاديمي أو كلمة المرور غير صحيحة!", "error");
  }
}

function quickFillLogin(id, pass) {
  document.getElementById('login-student-id').value = id;
  document.getElementById('login-student-pass').value = pass;
}

function logoutStudent() {
  appState.activeStudent = null;
  localStorage.removeItem('logged_student_id');
  document.getElementById('student-login-card').classList.remove('hidden');
  document.getElementById('student-dashboard-content').classList.add('hidden');
}

function renderStudentDashboardView() {
  const st = appState.activeStudent;
  if (!st) return;

  document.getElementById('student-login-card').classList.add('hidden');
  document.getElementById('student-dashboard-content').classList.remove('hidden');

  document.getElementById('header-user-name').textContent = st.name;
  document.getElementById('header-user-role').textContent = `طالب | ${st.id}`;
  document.getElementById('header-avatar').src = st.avatar;
  document.getElementById('btn-logout').classList.remove('hidden');

  document.getElementById('st-profile-img').src = st.avatar;
  document.getElementById('st-profile-name').textContent = st.name;
  document.getElementById('st-profile-id').textContent = st.id;
  document.getElementById('st-profile-age').textContent = st.age;
  document.getElementById('st-group-tag').textContent = st.group;

  const shield = getShieldForRating(st.rating);
  document.getElementById('st-badge-floating').textContent = shield.icon;
  document.getElementById('st-badge-name').textContent = shield.name;
  document.getElementById('st-rating-pts').textContent = st.rating;
  document.getElementById('st-next-level-pts').textContent = shield.max;

  const fillPercent = Math.min(100, Math.max(10, Math.round((st.rating / shield.max) * 100)));
  document.getElementById('st-progress-fill').style.width = `${fillPercent}%`;

  const qrBox = document.getElementById('st-qr-code-box');
  generateInlineSVGQRCode(qrBox, JSON.stringify({ id: st.id, name: st.name }));

  renderStudentLeaderboard();
  renderStudentLectures();
  renderStudentAttendanceStats();
  renderStudentGrades();
}

function showStudentTab(tabId) {
  document.querySelectorAll('.student-nav-tabs .st-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.student-dashboard .st-tab-content').forEach(tab => tab.classList.remove('active'));

  event.currentTarget.classList.add('active');
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');
}

function renderStudentLeaderboard() {
  const container = document.getElementById('st-leaderboard-list');
  if (!container) return;
  const sorted = [...appState.students].sort((a, b) => b.rating - a.rating);

  container.innerHTML = sorted.map((s, idx) => {
    const shield = getShieldForRating(s.rating);
    const isSelf = s.id === appState.activeStudent.id;
    return `
      <div class="leaderboard-item ${isSelf ? 'border-indigo' : ''}">
        <div class="flex-align-center gap-2">
          <span class="font-weight-bold text-amber">#${idx + 1}</span>
          <img src="${s.avatar}" class="avatar-sm" alt="Avatar">
          <div>
            <strong>${s.name} ${isSelf ? '<span class="badge bg-indigo">أنت</span>' : ''}</strong>
            <div class="text-xs text-muted">${s.group}</div>
          </div>
        </div>
        <div class="flex-align-center gap-2">
          <span class="badge-shield ${shield.class}">${shield.name}</span>
          <strong class="text-amber">${s.rating} نقطة</strong>
        </div>
      </div>
    `;
  }).join('');
}

function renderStudentLectures() {
  const grid = document.getElementById('st-lectures-grid');
  if (!grid) return;
  grid.innerHTML = appState.lectures.map(l => `
    <div class="card p-3 flex-between flex-column">
      <div>
        <h4 class="mb-1 text-indigo">${l.title}</h4>
        <p class="text-muted text-xs mb-3">${l.desc}</p>
      </div>
      <a href="${l.link || '#'}" target="_blank" class="btn btn-primary btn-block btn-sm">استعراض المحتوى</a>
    </div>
  `).join('');
}

function renderStudentAttendanceStats() {
  const st = appState.activeStudent;
  if (!st) return;

  let present = 0, absent = 0, late = 0;
  const historyList = [];

  Object.keys(appState.attendance).forEach(date => {
    const status = appState.attendance[date][st.id];
    if (status === 'present') { present++; historyList.push({ date, status: 'حاضر ✅' }); }
    if (status === 'absent') { absent++; historyList.push({ date, status: 'غائب ❌' }); }
    if (status === 'late') { late++; historyList.push({ date, status: 'متأخر ⏰' }); }
  });

  const total = present + absent + late;
  const percent = total > 0 ? Math.round((present / total) * 100) : 100;
  document.getElementById('st-attendance-percent').textContent = `${percent}%`;

  const tbody = document.getElementById('st-attendance-history-body');
  if (tbody) {
    tbody.innerHTML = historyList.length > 0 ? historyList.map(h => `
      <tr>
        <td>${h.date}</td>
        <td><strong>${h.status}</strong></td>
      </tr>
    `).join('') : `<tr><td colspan="2" class="text-center text-muted">لا يوجد سجلات حضور مسجلة بعد</td></tr>`;
  }
}

function renderStudentGrades() {
  const st = appState.activeStudent;
  if (!st) return;

  document.getElementById('st-grade-score').textContent = `${st.gradeScore} / 100`;

  const tasksList = document.getElementById('st-tasks-list');
  if (tasksList) {
    tasksList.innerHTML = appState.tasks.map(t => `
      <div class="card p-2 mb-2 bg-subtle flex-between">
        <div>
          <strong>${t.title}</strong>
          <div class="text-xs text-muted">موعد التسليم: ${t.deadline}</div>
        </div>
        <span class="badge bg-emerald">مكتمل</span>
      </div>
    `).join('');
  }
}
