/**
 * Course Control Panel Application Engine (لوحة التحكم)
 * Course: AI in Electronic Systems Production (الذكاء الاصطناعي في إنتاج الأنظمة الإلكترونية)
 * Performance: Ultra-Fast SaaS Engine
 */

// ==========================================================================
// 1. DATA SEED & INITIAL STATE
// ==========================================================================

const INITIAL_DATA = {
  students: [
    {
      id: '2026101',
      name: 'محمد عصام',
      pass: '123456',
      age: 14,
      group: 'شُعبة الذكاء الاصطناعي 1',
      notes: 'المعهد النموذجي',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=MohamedEssam',
      bonusPoints: 100,
      battlePoints: 150,
      gradeScore: 95
    },
    {
      id: '2026102',
      name: 'حمزه حمدي',
      pass: '123456',
      age: 15,
      group: 'شُعبة الذكاء الاصطناعي 1',
      notes: 'الثانوية العسكرية',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=HamzaHamdy',
      bonusPoints: 100,
      battlePoints: 150,
      gradeScore: 92
    },
    {
      id: '2026103',
      name: 'محمود محمد',
      pass: '123456',
      age: 14,
      group: 'شُعبة الذكاء الاصطناعي 1',
      notes: 'المعهد النموذجي',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=MahmoudMohamed',
      bonusPoints: 100,
      battlePoints: 100,
      gradeScore: 90
    },
    {
      id: '2026104',
      name: 'أحمد محمد',
      pass: '123456',
      age: 13,
      group: 'شُعبة الذكاء الاصطناعي 1',
      notes: 'طه حسين',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=AhmedMohamed',
      bonusPoints: 100,
      battlePoints: 100,
      gradeScore: 94
    },
    {
      id: '2026105',
      name: 'محمد أحمد حسن',
      pass: '123456',
      age: 14,
      group: 'شُعبة الذكاء الاصطناعي 1',
      notes: 'المعهد النموذجي',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=MohamedAhmedHassan',
      bonusPoints: 100,
      battlePoints: 100,
      gradeScore: 96
    },
    {
      id: '2026106',
      name: 'آدم أحمد مرزوق',
      pass: '123456',
      age: 14,
      group: 'شُعبة الذكاء الاصطناعي 1',
      notes: '',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=AdamAhmed',
      bonusPoints: 100,
      battlePoints: 100,
      gradeScore: 91
    },
    {
      id: '2026107',
      name: 'د. حمدي شحات',
      pass: '123456',
      age: 20,
      group: 'شُعبة الذكاء الاصطناعي 1',
      notes: '',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=DrHamdy',
      bonusPoints: 100,
      battlePoints: 100,
      gradeScore: 98
    },
    {
      id: '2026108',
      name: 'م. عمار',
      pass: '123456',
      age: 20,
      group: 'شُعبة الذكاء الاصطناعي 1',
      notes: '',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Ammar',
      bonusPoints: 100,
      battlePoints: 100,
      gradeScore: 97
    },
    {
      id: '2026109',
      name: 'عبدالرحمن',
      pass: '123456',
      age: 16,
      group: 'شُعبة الذكاء الاصطناعي 1',
      notes: '',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Abdelrahman',
      bonusPoints: 100,
      battlePoints: 100,
      gradeScore: 93
    }
  ],
  groups: [
    {
      id: 'grp-1',
      name: 'شُعبة الذكاء الاصطناعي 1',
      sessions: [
        { id: 'sess-101', title: 'محاضرة 1: التجهيز ونظام التقييم والأنظمة', date: '2026-08-25' },
        { id: 'sess-102', title: 'محاضرة 2: تطبيقات TinyML والأنظمة الإلكترونية', date: '2026-08-27' }
      ]
    }
  ],
  questionCollections: [
    {
      id: 'col-1',
      title: 'محاضرة 1',
      desc: 'عينات الأسئلة المتضمنة في الأنظمة المدمجة والذكاء الاصطناعي',
      questions: [
        {
          q: 'ما هو الهدف الأساسي من دمج الذكاء الاصطناعي في الأنظمة المدمجة؟',
          options: ['اتخاذ قرارات ذكية محلياً على الشريحة', 'زيادة حجم الجهاز', 'إلغاء الطاقة الكهربائية', 'تبطئ سرعة المعالجة'],
          answer: 0
        },
        {
          q: 'ما هي البيئة الأساسية المستخدمة لترجمة نماذج التعلم الآلي للمتحكمات؟',
          options: ['TensorFlow Lite for Microcontrollers', 'Microsoft Paint', 'Adobe Photoshop', 'Notepad'],
          answer: 0
        }
      ]
    },
    {
      id: 'col-2',
      title: 'محاضرة 2',
      desc: 'أسئلة مسابقات وتطبيقات TinyML وتصنيع الشرائح الإلكترونية',
      questions: [
        {
          q: 'ما المقصود بتطبيقات TinyML في الأنظمة الإلكترونية؟',
          options: ['تشغيل نماذج الذكاء الاصطناعي على متحكمات منخفضة الطاقة', 'استخدام خوادم ضخمة جداً', 'تصنيع ألواح النحاس', 'شاشات العرض الكبيرة'],
          answer: 0
        },
        {
          q: 'ما فائدة استخدام تقنية الإشارات الرقمية DSP مع المتحكمات؟',
          options: ['تسريع معالجة الإشارات والصوت والحساسات', 'زيادة استهلاك البطارية', 'مسح الذاكرة العشوائية', 'إيقاف النظام'],
          answer: 0
        }
      ]
    },
    {
      id: 'col-3',
      title: 'بنك أسئلة: Define & Empathize (التفكير التصميمي)',
      desc: 'مجموعة أسئلة تفاعلية للمنافسة في مرحلتي التعاطف مع المستخدم (Empathize) وتحديد المشكلة (Define)',
      questions: [
        {
          q: 'ما هي الخطوة الأولى في منهجية التفكير التصميمي (Design Thinking)؟',
          options: ['التعاطف مع المستخدم (Empathize)', 'تحديد المشكلة (Define)', 'توليد الأفكار (Ideate)', 'بناء النموذج الأول (Prototype)'],
          answer: 0
        },
        {
          q: 'ما هو الهدف الأساسي من مرحلة التعاطف (Empathize)؟',
          options: ['فهم احتياجات وشعور وتحديات المستخدم الحقيقي', 'كتابة الأكواد البرمجية', 'بيع المنتج في السوق', 'حساب تكلفة المشروع'],
          answer: 0
        },
        {
          q: 'في مرحلة التحديد (Define)، ماذا نقوم بصياغته بناءً على نتائج التعاطف؟',
          options: ['بيان المشكلة الموجهة للمستخدم (Problem Statement / POV)', 'فاتورة الشراء', 'التصميم النهائي', 'عرض الخادم'],
          answer: 0
        },
        {
          q: 'أي من أدوات مرحلة التعاطف تُستخدم لتمثيل شخصية المستخدم المستهدف وتطلعاته؟',
          options: ['خرائط شخصية المستخدم (User Persona & Empathy Maps)', 'قواعد البيانات SQL', 'مخططات شبكات الإنترنت', 'لوحات المكونات الإلكترونية'],
          answer: 0
        },
        {
          q: 'كيف ننتقل بفاعلية من مرحلة Define إلى مرحلة توليد الأفكار Ideate؟',
          options: ['باستخدام أسئلة "كيف يمكننا؟" (How Might We - HMW)', 'بوقف المشروع', 'بإلغاء أفكار المستخدمين', 'بتقليل ميزانية التطوير'],
          answer: 0
        }
      ]
    }
  ],
  lectures: [
    {
      id: 'lec-1',
      title: 'محاضرة 1: مقدمة في الذكاء الاصطناعي والأنظمة المدمجة',
      group: 'شُعبة الذكاء الاصطناعي 1',
      date: '2026-08-25',
      description: 'شرح مفصل لمفاهيم الذكاء الاصطناعي ونظام الغياب والتقييم والأنظمة الإلكترونية المدمجة.',
      link: 'https://youtube.com'
    },
    {
      id: 'lec-2',
      title: 'محاضرة 2: تطبيقات TinyML والتعلم الآلي على المتحكمات',
      group: 'شُعبة الذكاء الاصطناعي 1',
      date: '2026-08-27',
      description: 'تشغيل نماذج التعلم الآلي والبرومبت الصحيح ومعرض الأعمال والتطبيقات العملية.',
      link: 'https://youtube.com'
    }
  ],
  tasks: [
    {
      id: 'task-1',
      title: 'تسليم مشروع البرومبت وتجهيز جهاز الأنظمة الإلكترونية',
      dueDate: '2026-08-30',
      description: 'إعداد البيئة التطويرية للأنظمة الإلكترونية وتجربة أول نموذج ذكاء اصطناعي.'
    }
  ],
  exams: [
    {
      id: 'ex-101',
      title: 'اختبار خوارزميات التعلم الآلي والأنظمة المدمجة',
      group: 'all',
      durationMinutes: 15,
      description: 'اختبار تقييمي لقياس مدى استيعاب خوارزميات التعلم الآلي والأنظمة الإلكترونية.',
      questions: [
        {
          id: 'q1',
          type: 'select',
          optionsCount: 4,
          text: 'ما هي الخوارزمية الأكثر استخداماً في تصنيف البيانات الخطية؟',
          options: ['Linear Regression', 'Logistic Regression', 'K-Means Clustering', 'Decision Trees'],
          correctIndex: 1,
          correctText: ''
        },
        {
          id: 'q2',
          type: 'select',
          optionsCount: 4,
          text: 'أي من المكونات التالية يُستخدم لمعالجة مصفوفات الأعداد في الحسابات الفائقة للذكاء الاصطناعي؟',
          options: ['GPU / TPU', 'Hard Disk Drive', 'Audio Card', 'Power Supply Unit'],
          correctIndex: 0,
          correctText: ''
        },
        {
          id: 'q3',
          type: 'text',
          text: 'ما هو اختصار مصطلح الذكاء الاصطناعي باللغة الإنجليزية؟',
          options: [],
          correctIndex: 0,
          correctText: 'AI'
        }
      ],
      createdAt: new Date().toISOString().split('T')[0]
    }
  ],
  examSubmissions: [],
  sessionAttendance: {
    'sess-101': {
      '2026101': true, '2026102': true, '2026103': true, '2026104': true,
      '2026105': true, '2026106': true, '2026107': true, '2026108': true, '2026109': true
    },
    'sess-102': {
      '2026101': true, '2026102': true, '2026103': true, '2026104': true,
      '2026105': true, '2026106': true, '2026107': true, '2026108': true, '2026109': true
    }
  },
  battles: []
};


// ==========================================================================
// 2. GLOBAL STATE & THEME LOGIC
// ==========================================================================

let appState = {
  currentRole: 'teacher',
  activeStudent: null,
  students: [],
  groups: [],
  questionCollections: [],
  lectures: [],
  tasks: [],
  exams: [],
  examSubmissions: [],
  sessionAttendance: {},
  battles: [],
  currentBattle: null,
  themeMode: 'light'
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
  const saved = localStorage.getItem('course_control_panel_state_v5') || localStorage.getItem('course_control_panel_backup_v1');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      appState = { ...appState, ...parsed };
    } catch (e) {
      appState = { ...appState, ...INITIAL_DATA };
    }
  } else {
    appState = { ...appState, ...INITIAL_DATA };
  }

  // Ensure all 9 students exist in appState.students
  if (!appState.students || appState.students.length === 0) {
    appState.students = [...INITIAL_DATA.students];
  } else {
    appState.students = mergeDataLists(appState.students, INITIAL_DATA.students, 'id');
  }

  if (!appState.groups || appState.groups.length === 0) {
    appState.groups = [...INITIAL_DATA.groups];
  } else {
    appState.groups = mergeDataLists(appState.groups, INITIAL_DATA.groups, 'id');
  }

  if (!appState.questionCollections || appState.questionCollections.length === 0) {
    appState.questionCollections = [...INITIAL_DATA.questionCollections];
  } else {
    appState.questionCollections = mergeDataLists(appState.questionCollections, INITIAL_DATA.questionCollections, 'id');
  }
  if (!appState.exams || appState.exams.length === 0) {
    appState.exams = [...INITIAL_DATA.exams];
  }
  if (!appState.examSubmissions) {
    appState.examSubmissions = [];
  }
  if (appState.groups) {
    appState.groups.forEach(g => {
      if (!g.sessions) g.sessions = [];
    });
  }
  if (!appState.sessionAttendance) appState.sessionAttendance = {};

  const savedTheme = localStorage.getItem('theme_mode') || 'light';
  applyThemeMode(savedTheme);

  initFirebaseSync();
}

let isSyncingFromCloud = false;

function saveState(syncToCloud = true) {
  if (isSyncingFromCloud) return;

  if (appState.students && Array.isArray(appState.students)) {
    appState.students.forEach(s => {
      const ptsInfo = calculateStudentPoints(s);
      s.rating = ptsInfo.total;
      s.totalPoints = ptsInfo.total;
      s.attendancePts = ptsInfo.attendancePts;
      s.examPts = ptsInfo.examPts;
      s.battlePts = ptsInfo.battlePts;
      s.battlePoints = s.battlePoints || 0;
      s.shield = getShieldForRating(s.rating).name;
    });

    if (appState.activeStudent) {
      const updatedActive = appState.students.find(s => s.id === appState.activeStudent.id);
      if (updatedActive) {
        appState.activeStudent = updatedActive;
      }
    }
  }

  const stateData = {
    students: appState.students || [],
    groups: appState.groups || [],
    questionCollections: appState.questionCollections || [],
    lectures: appState.lectures || [],
    tasks: appState.tasks || [],
    exams: appState.exams || [],
    examSubmissions: appState.examSubmissions || [],
    sessionAttendance: appState.sessionAttendance || {},
    battles: appState.battles || [],
    currentBattle: appState.currentBattle || null,
    updatedAt: new Date().toISOString()
  };

  localStorage.setItem('course_control_panel_state_v5', JSON.stringify(stateData));
  if (stateData.students.length > 0) {
    localStorage.setItem('course_control_panel_backup_v1', JSON.stringify(stateData));
  }

  if (syncToCloud && window.FirebaseSystem) {
    if (!window.FirebaseSystem.isConfigured) {
      window.FirebaseSystem.init();
    }
    if (window.FirebaseSystem.isConfigured) {
      window.FirebaseSystem.saveCloudState('dashboard', 'main_state', stateData);
    }
  }
}

function mergeDataLists(localList, remoteList, key = 'id') {
  const local = Array.isArray(localList) ? localList : [];
  const remote = Array.isArray(remoteList) ? remoteList : [];

  if (remote.length === 0) return local;
  if (local.length === 0) return remote;

  const map = new Map();

  remote.forEach(item => {
    if (!item) return;
    const k = item[key] || item.name || item.title || JSON.stringify(item);
    map.set(k, item);
  });

  local.forEach(item => {
    if (!item) return;
    const k = item[key] || item.name || item.title || JSON.stringify(item);
    if (!map.has(k)) {
      map.set(k, item);
    } else {
      const existing = map.get(k);
      const merged = { ...existing, ...item };
      if (existing.battlePoints || item.battlePoints) {
        merged.battlePoints = Math.max(existing.battlePoints || 0, item.battlePoints || 0);
      }
      if (existing.bonusPoints || item.bonusPoints) {
        merged.bonusPoints = Math.max(existing.bonusPoints || 0, item.bonusPoints || 0);
      }
      if (existing.rating || item.rating) {
        merged.rating = Math.max(existing.rating || 0, item.rating || 0);
      }
      map.set(k, merged);
    }
  });

  return Array.from(map.values());
}

function initFirebaseSync() {
  if (window.FirebaseSystem) {
    if (!window.FirebaseSystem.isConfigured) {
      window.FirebaseSystem.init();
    }
    if (window.FirebaseSystem.isConfigured) {
      window.FirebaseSystem.subscribeToDoc('dashboard', 'main_state', (remoteData) => {
        if (remoteData && typeof remoteData === 'object') {
          isSyncingFromCloud = true;

          appState.students = mergeDataLists(appState.students, remoteData.students, 'id');
          appState.groups = mergeDataLists(appState.groups, remoteData.groups, 'id');
          appState.questionCollections = mergeDataLists(appState.questionCollections, remoteData.questionCollections, 'id');
          appState.lectures = mergeDataLists(appState.lectures, remoteData.lectures, 'id');
          appState.tasks = mergeDataLists(appState.tasks, remoteData.tasks, 'id');
          appState.exams = mergeDataLists(appState.exams, remoteData.exams, 'id');
          appState.examSubmissions = mergeDataLists(appState.examSubmissions, remoteData.examSubmissions, 'id');
          appState.battles = mergeDataLists(appState.battles, remoteData.battles, 'date');

          if (remoteData.sessionAttendance) {
            appState.sessionAttendance = { ...appState.sessionAttendance, ...remoteData.sessionAttendance };
          }

          if (remoteData.currentBattle !== undefined && remoteData.currentBattle !== null) {
            appState.currentBattle = remoteData.currentBattle;
          }

          const updatedState = {
            students: appState.students,
            groups: appState.groups,
            questionCollections: appState.questionCollections,
            lectures: appState.lectures,
            tasks: appState.tasks,
            exams: appState.exams,
            examSubmissions: appState.examSubmissions,
            sessionAttendance: appState.sessionAttendance,
            battles: appState.battles,
            updatedAt: new Date().toISOString()
          };

          localStorage.setItem('course_control_panel_state_v5', JSON.stringify(updatedState));
          if (appState.students.length > 0) {
            localStorage.setItem('course_control_panel_backup_v1', JSON.stringify(updatedState));
          }

          refreshAllUI();
          isSyncingFromCloud = false;
        } else {
          if (appState.students && appState.students.length > 0) {
            console.log("☁️ Seeding initial state to Cloud Firestore...");
            saveState(true);
          }
        }
      });
    }
  }
}



function calculateStudentPoints(student) {
  if (!student) return { attendedSessionsCount: 0, attendancePts: 0, bonusPts: 0, battlePts: 0, examPts: 0, total: 0 };

  let attendedSessionsCount = 0;

  if (appState.groups && student.group) {
    appState.groups.forEach(g => {
      if (g.name === student.group && g.sessions) {
        g.sessions.forEach(sess => {
          const sessMap = appState.sessionAttendance[sess.id] || {};
          const isPresent = sessMap[student.id] !== undefined ? sessMap[student.id] : true;
          if (isPresent) attendedSessionsCount++;
        });
      }
    });
  }

  let examPts = 0;
  if (appState.examSubmissions && Array.isArray(appState.examSubmissions)) {
    const examBestCorrect = {};
    appState.examSubmissions.forEach(sub => {
      if (sub.studentId === student.id) {
        const correct = sub.correctAnswers || 0;
        if (!examBestCorrect[sub.examId] || correct > examBestCorrect[sub.examId]) {
          examBestCorrect[sub.examId] = correct;
        }
      }
    });
    Object.values(examBestCorrect).forEach(correctCount => {
      examPts += correctCount * 50;
    });
  }

  const attendancePts = attendedSessionsCount * 50;
  const bonusPts = student.bonusPoints || 0;
  const battlePts = student.battlePoints || 0;
  const total = attendancePts + bonusPts + battlePts + examPts;

  return {
    attendedSessionsCount,
    attendancePts,
    bonusPts,
    battlePts,
    examPts,
    total
  };
}

function checkAndRestoreStudentSession() {
  const savedStudentId = localStorage.getItem('logged_student_id');
  if (savedStudentId && appState.students && appState.students.length > 0) {
    const st = appState.students.find(s => s.id === savedStudentId);
    if (st) {
      appState.activeStudent = st;
      renderStudentDashboardView();
      return true;
    }
  }
  return false;
}

function refreshAllUI() {
  populateDropdowns();
  renderDashboardStats();
  renderStudentsTable();
  renderGroupsGrid();
  renderQuestionCollectionsGrid();
  renderLecturesGrid();
  renderTasksList();
  renderGradesTable();
  renderPointsManagementTable();
  populateAttendanceGroupDropdown();
  populateBattleCollectionDropdown();
  populateBattleSelectors();

  checkAndRestoreStudentSession();

  if (appState.activeStudent) {
    renderStudentDashboardView();
  }
}

function showTeacherTab(tabId, clickedBtn = null) {
  document.querySelectorAll('.sidebar .nav-item').forEach(btn => {
    const onclickAttr = btn.getAttribute('onclick') || '';
    if (clickedBtn) {
      btn.classList.toggle('active', btn === clickedBtn);
    } else {
      btn.classList.toggle('active', onclickAttr.includes(`'${tabId}'`) || onclickAttr.includes(`"${tabId}"`));
    }
  });

  document.querySelectorAll('.mobile-bottom-nav .mobile-nav-btn').forEach(btn => {
    const onclickAttr = btn.getAttribute('onclick') || '';
    if (clickedBtn) {
      btn.classList.toggle('active', btn === clickedBtn);
    } else {
      btn.classList.toggle('active', onclickAttr.includes(`'${tabId}'`) || onclickAttr.includes(`"${tabId}"`));
    }
  });

  document.querySelectorAll('.content-area .tab-content').forEach(tab => {
    tab.classList.remove('active');
  });

  const target = document.getElementById(tabId);
  if (target) {
    target.classList.add('active');
  }

  if (tabId === 'dashboard-tab') renderDashboardStats();
  if (tabId === 'students-tab') renderStudentsTable();
  if (tabId === 'groups-tab') renderGroupsGrid();
  if (tabId === 'attendance-tab') populateAttendanceGroupDropdown();
  if (tabId === 'battle-tab') {
    populateBattleCollectionDropdown();
    populateBattleSelectors();
  }
  if (tabId === 'question-collections-tab') renderQuestionCollectionsGrid();
  if (tabId === 'lectures-tab') renderLecturesGrid();
  if (tabId === 'tasks-tab') renderTasksList();
  if (tabId === 'grades-tab') renderGradesTable();
  if (tabId === 'points-tab') renderPointsManagementTable();
}


function toggleThemeMode() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = current === 'dark' ? 'light' : 'dark';
  applyThemeMode(newTheme);
  localStorage.setItem('theme_mode', newTheme);
}

function applyThemeMode(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    themeIcon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
}

// Helpers
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
  if (id === 'st-exam-modal' && window.examTimerInterval) {
    clearInterval(window.examTimerInterval);
    window.examTimerInterval = null;
  }
}

// ==========================================================================
// 3. INITIALIZATION & NAVIGATION LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  loadState();
  checkAndRestoreStudentSession();
  populateDropdowns();
  refreshAllUI();
});

function showTeacherTab(tabId, clickedBtn = null) {
  document.querySelectorAll('.sidebar .nav-item, #mobile-nav .mobile-nav-btn').forEach(btn => {
    const onclickAttr = btn.getAttribute('onclick') || '';
    if (clickedBtn) {
      btn.classList.toggle('active', btn === clickedBtn || onclickAttr.includes(`'${tabId}'`) || onclickAttr.includes(`"${tabId}"`));
    } else {
      btn.classList.toggle('active', onclickAttr.includes(`'${tabId}'`) || onclickAttr.includes(`"${tabId}"`));
    }
  });

  document.querySelectorAll('.content-area .tab-content').forEach(tab => tab.classList.remove('active'));
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');

  if (tabId === 'dashboard-tab') renderDashboardStats();
  if (tabId === 'students-tab') renderStudentsTable();
  if (tabId === 'groups-tab') renderGroupsGrid();
  if (tabId === 'attendance-tab') populateAttendanceGroupDropdown();
  if (tabId === 'battle-tab') {
    populateBattleCollectionDropdown();
    populateBattleSelectors();
  }
  if (tabId === 'question-collections-tab') renderQuestionCollectionsGrid();
  if (tabId === 'lectures-tab') renderLecturesGrid();
  if (tabId === 'tasks-tab') renderTasksList();
  if (tabId === 'grades-tab') renderGradesTable();
  if (tabId === 'points-tab') renderPointsManagementTable();
  if (tabId === 'exams-tab') renderTeacherExams();
}

function populateDropdowns() {
  const studentGroupSel = document.getElementById('form-student-group');
  const filterGroupSel = document.getElementById('student-group-filter');

  if (studentGroupSel) {
    if (appState.groups && appState.groups.length > 0) {
      studentGroupSel.innerHTML = appState.groups.map(g => `<option value="${g.name}">${g.name}</option>`).join('');
    } else {
      studentGroupSel.innerHTML = `<option value="">⚠️ يرجى إضافة مجموعة أولاً</option>`;
    }
  }

  if (filterGroupSel) {
    filterGroupSel.innerHTML = `<option value="all">كل المجموعات والشُعب</option>` +
      (appState.groups || []).map(g => `<option value="${g.name}">${g.name}</option>`).join('');
  }
}

// ==========================================================================
// 4. DASHBOARD & STUDENTS CRUD
// ==========================================================================

function renderDashboardStats() {
  const totalSt = document.getElementById('stat-total-students');
  const totalGr = document.getElementById('stat-total-groups');
  const totalBat = document.getElementById('stat-total-battles');
  const attRate = document.getElementById('stat-attendance-rate');

  if (totalSt) totalSt.textContent = appState.students.length;
  if (totalGr) totalGr.textContent = appState.groups.length;
  if (totalBat) totalBat.textContent = appState.battles.length;

  let totalSessions = 0;
  let totalPresentCount = 0;

  Object.keys(appState.sessionAttendance).forEach(sessionId => {
    const sessionMap = appState.sessionAttendance[sessionId];
    const presentInSession = Object.values(sessionMap).filter(v => v === true).length;
    totalSessions++;
    totalPresentCount += presentInSession;
  });

  const avgRate = (totalSessions > 0 && appState.students.length > 0)
    ? Math.round((totalPresentCount / (totalSessions * appState.students.length)) * 100)
    : 100;

  if (attRate) attRate.textContent = `${avgRate}%`;

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
              <div class="text-xs text-muted">ID: ${s.id} • ${s.group || 'غير محدد'}</div>
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

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="text-center p-4 text-muted">
          <i class="fa-solid fa-users-slash mb-2 block text-indigo" style="font-size: 1.5rem;"></i>
          لا يوجد طلاب مسجلين حالياً. اضغط على "تسجيل طالب جديد" للبدء.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(s => {
    const ptsInfo = calculateStudentPoints(s);
    s.rating = ptsInfo.total;
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
        <td><code>${s.pass}</code></td>
        <td>${s.age} سنة</td>
        <td><span class="badge bg-subtle text-indigo font-weight-bold">${s.group || 'غير محدد'}</span></td>
        <td><span class="badge-shield ${shield.class}">${shield.name}</span></td>
        <td><strong class="text-amber">${s.rating}</strong></td>
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

function handleStudentAvatarUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    const dataUrl = e.target.result;
    const avatarInput = document.getElementById('form-student-avatar');
    const avatarPreview = document.getElementById('form-student-avatar-preview');
    if (avatarInput) avatarInput.value = dataUrl;
    if (avatarPreview) avatarPreview.src = dataUrl;
  };
  reader.readAsDataURL(file);
}

function openRegisterStudentModal() {
  document.getElementById('student-modal-title').textContent = "تسجيل طالب جديد وتعيين المجموعة";
  document.getElementById('student-form').reset();
  document.getElementById('form-student-index').value = '';
  document.getElementById('form-student-id').readOnly = false;
  const defaultAvatar = `https://api.dicebear.com/7.x/bottts/svg?seed=${Math.floor(Math.random() * 1000)}`;
  const avatarInput = document.getElementById('form-student-avatar');
  const avatarPreview = document.getElementById('form-student-avatar-preview');
  if (avatarInput) avatarInput.value = defaultAvatar;
  if (avatarPreview) avatarPreview.src = defaultAvatar;
  populateDropdowns();
  openModal('student-modal');
}

function openEditStudentModal(studentId) {
  const st = appState.students.find(s => s.id === studentId);
  if (!st) return;

  populateDropdowns();
  document.getElementById('student-modal-title').textContent = "تعديل بيانات الطالب وتغيير المجموعة";
  document.getElementById('form-student-index').value = st.id;
  document.getElementById('form-student-name').value = st.name;
  document.getElementById('form-student-id').value = st.id;
  document.getElementById('form-student-id').readOnly = true;
  document.getElementById('form-student-pass').value = st.pass;
  document.getElementById('form-student-age').value = st.age;
  document.getElementById('form-student-group').value = st.group || '';

  const avatarInput = document.getElementById('form-student-avatar');
  const avatarPreview = document.getElementById('form-student-avatar-preview');
  if (avatarInput) avatarInput.value = st.avatar;
  if (avatarPreview) avatarPreview.src = st.avatar;

  openModal('student-modal');
}

function generateRandomAvatar() {
  const randomSeed = Math.floor(Math.random() * 10000);
  const avatarUrl = `https://api.dicebear.com/7.x/bottts/svg?seed=${randomSeed}`;
  const avatarInput = document.getElementById('form-student-avatar');
  const avatarPreview = document.getElementById('form-student-avatar-preview');
  if (avatarInput) avatarInput.value = avatarUrl;
  if (avatarPreview) avatarPreview.src = avatarUrl;
}

function saveStudentForm(event) {
  event.preventDefault();
  const editId = document.getElementById('form-student-index').value;
  const name = document.getElementById('form-student-name').value.trim();
  const id = document.getElementById('form-student-id').value.trim();
  const pass = document.getElementById('form-student-pass').value.trim();
  const age = parseInt(document.getElementById('form-student-age').value) || 20;
  const group = document.getElementById('form-student-group').value;
  let avatar = document.getElementById('form-student-avatar').value.trim() || `https://api.dicebear.com/7.x/bottts/svg?seed=${id}`;

  if (!group || group.includes('يرجى إضافة مجموعة')) {
    showToast("يرجى اختيار مجموعة دراسية للطالب أولاً أو إضافة مجموعة جديدة!", "error");
    return;
  }

  if (editId) {
    const idx = appState.students.findIndex(s => s.id === editId);
    if (idx !== -1) {
      appState.students[idx] = { ...appState.students[idx], name, pass, age, group, avatar };
      showToast("تم تحديث بيانات الطالب وتعيين مجموعته بنجاح", "success");
    }
  } else {
    if (appState.students.some(s => s.id === id)) {
      showToast("الرقم الأكاديمي مستخدم بالفعل!", "error");
      return;
    }

    appState.students.push({
      id, name, pass, age, avatar, group,
      bonusPoints: 0,
      battlePoints: 0,
      rating: 0,
      gradeScore: 80,
      createdAt: new Date().toISOString().split('T')[0]
    });
    showToast(`تم إضافة الطالب وتعيينه لـ (${group}) بنجاح! 🪵`, "success");
  }

  saveState();
  closeModal('student-modal');

  const searchInput = document.getElementById('student-search-input');
  if (searchInput) searchInput.value = '';
  const groupFilter = document.getElementById('student-group-filter');
  if (groupFilter) groupFilter.value = 'all';

  renderStudentsTable();
  renderDashboardStats();
  renderGroupsGrid();
  renderPointsManagementTable();
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

// ==========================================================================
// 5. GROUPS & SESSIONS MANAGEMENT
// ==========================================================================

function renderGroupsGrid() {
  const container = document.getElementById('groups-grid');
  if (!container) return;

  container.innerHTML = appState.groups.map(g => {
    const groupStudents = appState.students.filter(s => s.group === g.name);
    const sessions = g.sessions || [];

    return `
      <div class="card p-4">
        <div class="flex-between mb-2">
          <h3 class="text-indigo">${g.name}</h3>
          <div class="flex-align-center gap-1">
            <span class="badge bg-subtle">${groupStudents.length} طلاب</span>
            <button class="btn btn-xs btn-outline" onclick="openEditGroupModal('${g.id}')"><i class="fa-solid fa-pen"></i></button>
            <button class="btn btn-xs btn-outline text-rose" onclick="deleteGroup('${g.id}')"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
        <p class="text-muted text-xs mb-3">${g.desc || 'مجموعة دراسية'}</p>

        <div class="border-top pt-3 mt-2">
          <div class="flex-between mb-2">
            <span class="font-weight-bold text-sm"><i class="fa-solid fa-calendar-days text-indigo"></i> جلسات الحضور (${sessions.length})</span>
            <button class="btn btn-xs btn-primary" onclick="openCreateSessionModal('${g.id}')">
              <i class="fa-solid fa-plus"></i> جلسة جديدة
            </button>
          </div>

          <div class="sessions-list mb-3">
            ${sessions.length > 0 ? sessions.map(sess => `
              <div class="p-2 mb-1 bg-subtle border-radius flex-between text-xs">
                <div>
                  <strong>${sess.name}</strong>
                  <span class="text-muted block">${sess.date}</span>
                </div>
                <div class="flex-align-center gap-1">
                  <button class="btn btn-xs btn-emerald" onclick="openSessionAttendanceTab('${g.id}', '${sess.id}')">
                    <i class="fa-solid fa-clipboard-check"></i> تفقد الحضور
                  </button>
                  <button class="btn btn-xs btn-outline text-rose" onclick="deleteSession('${g.id}', '${sess.id}')">
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            `).join('') : '<span class="text-xs text-muted block text-center p-2">لا يوجد جلسات مضافة بعد</span>'}
          </div>
        </div>

        <div class="border-top pt-2 flex-align-center gap-1 flex-wrap">
          ${groupStudents.map(s => `<img src="${s.avatar}" class="avatar-sm" title="${s.name}">`).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function openCreateGroupModal() {
  document.getElementById('group-modal-title').textContent = "إنشاء مجموعة جديدة";
  document.getElementById('form-group-id').value = '';
  document.getElementById('group-name-input').value = '';
  document.getElementById('group-desc-input').value = '';
  openModal('group-modal');
}

function openEditGroupModal(groupId) {
  const g = appState.groups.find(group => group.id === groupId);
  if (!g) return;

  document.getElementById('group-modal-title').textContent = "تعديل المجموعة";
  document.getElementById('form-group-id').value = g.id;
  document.getElementById('group-name-input').value = g.name;
  document.getElementById('group-desc-input').value = g.desc || '';
  openModal('group-modal');
}

function saveGroupForm(event) {
  event.preventDefault();
  const id = document.getElementById('form-group-id').value;
  const name = document.getElementById('group-name-input').value;
  const desc = document.getElementById('group-desc-input').value;

  if (id) {
    const idx = appState.groups.findIndex(g => g.id === id);
    if (idx !== -1) {
      const oldName = appState.groups[idx].name;
      appState.groups[idx].name = name;
      appState.groups[idx].desc = desc;

      appState.students.forEach(s => {
        if (s.group === oldName) s.group = name;
      });
      showToast("تم تحديث المجموعة بنجاح", "success");
    }
  } else {
    appState.groups.push({
      id: `g_${Date.now()}`,
      name,
      desc,
      sessions: []
    });
    showToast("تم إنشاء الشعبة بنجاح", "success");
  }

  saveState();
  populateDropdowns();
  renderGroupsGrid();
  closeModal('group-modal');
}

function deleteGroup(groupId) {
  if (confirm("هل أنت تأكد من حذف هذه المجموعة؟")) {
    appState.groups = appState.groups.filter(g => g.id !== groupId);
    saveState();
    populateDropdowns();
    renderGroupsGrid();
    showToast("تم حذف المجموعة", "info");
  }
}

function openCreateSessionModal(groupId) {
  const g = appState.groups.find(group => group.id === groupId);
  if (!g) return;

  document.getElementById('session-modal-title').textContent = `إنشاء جلسة جديدة لـ (${g.name})`;
  document.getElementById('form-session-group-id').value = g.id;
  document.getElementById('form-session-id').value = '';
  document.getElementById('session-name-input').value = `الجلسة ${(g.sessions?.length || 0) + 1}`;
  document.getElementById('session-date-input').value = new Date().toISOString().split('T')[0];
  openModal('session-modal');
}

function saveSessionForm(event) {
  event.preventDefault();
  const groupId = document.getElementById('form-session-group-id').value;
  const sessionId = document.getElementById('form-session-id').value;
  const name = document.getElementById('session-name-input').value;
  const date = document.getElementById('session-date-input').value;

  const g = appState.groups.find(group => group.id === groupId);
  if (!g) return;

  if (!g.sessions) g.sessions = [];

  if (sessionId) {
    const sIdx = g.sessions.findIndex(s => s.id === sessionId);
    if (sIdx !== -1) {
      g.sessions[sIdx].name = name;
      g.sessions[sIdx].date = date;
    }
  } else {
    const newSessionId = `sess_${Date.now()}`;
    g.sessions.push({
      id: newSessionId,
      name,
      date
    });

    if (!appState.sessionAttendance[newSessionId]) {
      appState.sessionAttendance[newSessionId] = {};
      const groupStudents = appState.students.filter(s => s.group === g.name);
      groupStudents.forEach(st => {
        appState.sessionAttendance[newSessionId][st.id] = true;
      });
    }
  }

  saveState();
  renderGroupsGrid();
  closeModal('session-modal');
  showToast("تم حفظ الجلسة بنجاح", "success");
}

function deleteSession(groupId, sessionId) {
  if (confirm("هل أنت تأكد من حذف الجلسة؟")) {
    const g = appState.groups.find(group => group.id === groupId);
    if (g && g.sessions) {
      g.sessions = g.sessions.filter(s => s.id !== sessionId);
      delete appState.sessionAttendance[sessionId];
      saveState();
      renderGroupsGrid();
      showToast("تم حذف الجلسة", "info");
    }
  }
}

// ==========================================================================
// 6. QUESTION COLLECTIONS MANAGEMENT (CRUD)
// ==========================================================================

function renderQuestionCollectionsGrid() {
  const container = document.getElementById('collections-grid');
  if (!container) return;

  container.innerHTML = appState.questionCollections.map((col, idx) => {
    const questionCount = col.questions ? col.questions.length : 0;
    const sampleQuestions = col.questions && col.questions.length > 0
      ? col.questions.slice(0, 3).map(q => `<li>${q.q || q}</li>`).join('')
      : `<li>--- •</li>`;

    return `
      <div class="q-collection-card">
        <div>
          <div class="q-collection-header">
            <span class="q-collection-badge">مجموعة ${idx + 1} (${questionCount} أسئلة)</span>
            <div class="q-collection-actions">
              <button class="btn-edit-collection" onclick="openEditCollectionModal('${col.id}')">
                تعديل <i class="fa-solid fa-pen"></i>
              </button>
              <button class="btn-delete-collection" onclick="deleteCollection('${col.id}')" title="حذف">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>

          <h3 class="q-collection-title">${col.title}</h3>
          ${col.desc ? `<p class="text-muted text-xs mb-3 text-center">${col.desc}</p>` : ''}

          <div class="mt-3">
            <div class="q-collection-samples-title">عينات الأسئلة المتضمنة:</div>
            <ul class="q-collection-samples-list">
              ${sampleQuestions}
            </ul>
          </div>
        </div>

        <div class="mt-3">
          <button class="btn-battle-gradient" onclick="startBattleWithCollection('${col.id}')">
            اختيار هذا البنك للمواجهة
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function openCreateCollectionModal() {
  document.getElementById('collection-modal-title').textContent = "إنشاء مجموعة أسئلة جديد";
  document.getElementById('form-collection-id').value = '';
  document.getElementById('col-title-input').value = '';
  document.getElementById('col-desc-input').value = '';

  const qContainer = document.getElementById('collection-questions-container');
  qContainer.innerHTML = '';
  addQuestionItemToForm(); // Add one initial blank question form
  openModal('collection-modal');
}

function openEditCollectionModal(colId) {
  const col = appState.questionCollections.find(c => c.id === colId);
  if (!col) return;

  document.getElementById('collection-modal-title').textContent = "تعديل مجموعة الأسئلة";
  document.getElementById('form-collection-id').value = col.id;
  document.getElementById('col-title-input').value = col.title;
  document.getElementById('col-desc-input').value = col.desc || '';

  const qContainer = document.getElementById('collection-questions-container');
  qContainer.innerHTML = '';

  if (col.questions && col.questions.length > 0) {
    col.questions.forEach(qObj => addQuestionItemToForm(qObj));
  } else {
    addQuestionItemToForm();
  }

  openModal('collection-modal');
}

function openEditSelectedBattleCollection() {
  const colId = document.getElementById('battle-collection-select')?.value;
  if (colId) {
    openEditCollectionModal(colId);
  } else {
    showToast("يرجى اختيار بنك أسئلة أولاً أو إنشاء بنك جديد", "error");
  }
}

function addQuestionItemToForm(qData = null) {
  const container = document.getElementById('collection-questions-container');
  if (!container) return;

  const itemIndex = container.children.length;
  const qText = qData ? qData.q : '';
  const opt0 = qData && qData.options ? qData.options[0] || '' : '';
  const opt1 = qData && qData.options ? qData.options[1] || '' : '';
  const opt2 = qData && qData.options ? qData.options[2] || '' : '';
  const opt3 = qData && qData.options ? qData.options[3] || '' : '';
  const correctIdx = qData ? qData.answer : 0;

  const qCard = document.createElement('div');
  qCard.className = 'card p-3 mb-2 bg-subtle q-item-card';
  qCard.innerHTML = `
    <div class="flex-between mb-2">
      <span class="font-weight-bold text-xs text-indigo">السؤال #${itemIndex + 1}</span>
      <button type="button" class="btn btn-xs text-rose" onclick="this.closest('.q-item-card').remove()"><i class="fa-solid fa-trash"></i> حذف</button>
    </div>
    <div class="form-group mb-2">
      <input type="text" class="form-control form-control-sm q-input-title" placeholder="نص السؤال..." value="${qText}" required>
    </div>
    <div class="grid-2col gap-1 mb-2">
      <input type="text" class="form-control form-control-sm q-opt-0" placeholder="خيار (أ)" value="${opt0}" required>
      <input type="text" class="form-control form-control-sm q-opt-1" placeholder="خيار (ب)" value="${opt1}" required>
      <input type="text" class="form-control form-control-sm q-opt-2" placeholder="خيار (ج)" value="${opt2}" required>
      <input type="text" class="form-control form-control-sm q-opt-3" placeholder="خيار (د)" value="${opt3}" required>
    </div>
    <div class="form-group">
      <label class="text-xs">الإجابة الصحيحة:</label>
      <select class="form-control form-control-sm q-correct-select">
        <option value="0" ${correctIdx === 0 ? 'selected' : ''}>خيار (أ)</option>
        <option value="1" ${correctIdx === 1 ? 'selected' : ''}>خيار (ب)</option>
        <option value="2" ${correctIdx === 2 ? 'selected' : ''}>خيار (ج)</option>
        <option value="3" ${correctIdx === 3 ? 'selected' : ''}>خيار (د)</option>
      </select>
    </div>
  `;

  container.appendChild(qCard);
}

function saveCollectionForm(event) {
  event.preventDefault();
  const id = document.getElementById('form-collection-id').value;
  const title = document.getElementById('col-title-input').value;
  const desc = document.getElementById('col-desc-input').value;

  const qCards = document.querySelectorAll('#collection-questions-container .q-item-card');
  const questionsArr = [];

  qCards.forEach(card => {
    const q = card.querySelector('.q-input-title').value;
    const opt0 = card.querySelector('.q-opt-0').value;
    const opt1 = card.querySelector('.q-opt-1').value;
    const opt2 = card.querySelector('.q-opt-2').value;
    const opt3 = card.querySelector('.q-opt-3').value;
    const answer = parseInt(card.querySelector('.q-correct-select').value);

    questionsArr.push({
      q,
      options: [opt0, opt1, opt2, opt3],
      answer
    });
  });

  if (questionsArr.length === 0) {
    showToast("يرجى إضافة سؤال واحد على الأقل للمجموعة!", "error");
    return;
  }

  if (id) {
    const idx = appState.questionCollections.findIndex(c => c.id === id);
    if (idx !== -1) {
      appState.questionCollections[idx] = { id, title, desc, questions: questionsArr };
      showToast("تم تحديث مجموعة الأسئلة", "success");
    }
  } else {
    const newColId = `qc_${Date.now()}`;
    appState.questionCollections.push({
      id: newColId,
      title,
      desc,
      questions: questionsArr
    });
    showToast("تم إنشاء مجموعة الأسئلة بنجاح", "success");
  }

  saveState();
  renderQuestionCollectionsGrid();
  populateBattleCollectionDropdown();
  closeModal('collection-modal');
}

function deleteCollection(colId) {
  if (confirm("هل أنت تأكد من حذف بنك الأسئلة هذا؟")) {
    appState.questionCollections = appState.questionCollections.filter(c => c.id !== colId);
    saveState();
    renderQuestionCollectionsGrid();
    populateBattleCollectionDropdown();
    showToast("تم حذف مجموعة الأسئلة", "info");
  }
}

// ==========================================================================
// 7. ATTENDANCE SYSTEM (TOGGLE SWITCH BY SESSIONS)
// ==========================================================================

function populateAttendanceGroupDropdown() {
  const grpSel = document.getElementById('attendance-group-select');
  if (!grpSel) return;

  grpSel.innerHTML = appState.groups.map(g => `<option value="${g.id}">${g.name}</option>`).join('');
  onAttendanceGroupChange();
}

function onAttendanceGroupChange() {
  const groupId = document.getElementById('attendance-group-select')?.value;
  const sessSel = document.getElementById('attendance-session-select');
  if (!sessSel) return;

  const g = appState.groups.find(group => group.id === groupId);
  if (g && g.sessions && g.sessions.length > 0) {
    sessSel.innerHTML = g.sessions.map(s => `<option value="${s.id}">${s.name} (${s.date})</option>`).join('');
  } else {
    sessSel.innerHTML = `<option value="">لا يوجد جلسات (قم بإنشاء جلسة أولاً)</option>`;
  }

  loadAttendanceForSelectedSession();
}

function openSessionAttendanceTab(groupId, sessionId) {
  showTeacherTab('attendance-tab');
  const grpSel = document.getElementById('attendance-group-select');
  if (grpSel) grpSel.value = groupId;
  onAttendanceGroupChange();

  const sessSel = document.getElementById('attendance-session-select');
  if (sessSel) sessSel.value = sessionId;
  loadAttendanceForSelectedSession();
}

function loadAttendanceForSelectedSession() {
  const groupId = document.getElementById('attendance-group-select')?.value;
  const sessionId = document.getElementById('attendance-session-select')?.value;
  const tbody = document.getElementById('attendance-table-body');
  if (!tbody) return;

  const g = appState.groups.find(group => group.id === groupId);
  const sess = g?.sessions?.find(s => s.id === sessionId);

  if (!g || !sess) {
    document.getElementById('active-session-title').textContent = "يرجى تحديد جلسة";
    document.getElementById('active-session-date').textContent = "";
    tbody.innerHTML = `<tr><td colspan="4" class="text-center text-muted p-4">لا توجد جلسة محددة لهذه المجموعة</td></tr>`;
    return;
  }

  document.getElementById('active-session-title').textContent = sess.name;
  document.getElementById('active-session-date').textContent = `التاريخ: ${sess.date} | الشعبة: ${g.name}`;

  if (!appState.sessionAttendance[sessionId]) {
    appState.sessionAttendance[sessionId] = {};
  }
  const currentMap = appState.sessionAttendance[sessionId];

  const groupStudents = appState.students.filter(s => s.group === g.name);

  if (groupStudents.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="text-center text-muted p-4">لا يوجد طلاب ينتمون لهذه المجموعة بعد</td></tr>`;
    return;
  }

  tbody.innerHTML = groupStudents.map(s => {
    const isPresent = currentMap[s.id] !== undefined ? currentMap[s.id] : true;
    return `
      <tr>
        <td>
          <div class="flex-align-center gap-2">
            <img src="${s.avatar}" class="avatar-sm" alt="Avatar">
            <strong>${s.name}</strong>
          </div>
        </td>
        <td><code class="text-indigo">${s.id}</code></td>
        <td><span class="badge bg-subtle">${s.group}</span></td>
        <td>
          <button class="btn btn-sm ${isPresent ? 'btn-emerald' : 'btn-outline text-rose'}" 
                  onclick="toggleStudentAttendance('${sessionId}', '${s.id}')">
            ${isPresent ? '<i class="fa-solid fa-circle-check"></i> حاضر' : '<i class="fa-solid fa-circle-xmark"></i> غائب'}
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function toggleStudentAttendance(sessionId, studentId) {
  if (!appState.sessionAttendance[sessionId]) appState.sessionAttendance[sessionId] = {};
  const current = appState.sessionAttendance[sessionId][studentId];
  appState.sessionAttendance[sessionId][studentId] = current === undefined ? false : !current;
  loadAttendanceForSelectedSession();
}

function markAllSessionAttendance(isPresent) {
  const sessionId = document.getElementById('attendance-session-select')?.value;
  const groupId = document.getElementById('attendance-group-select')?.value;
  const g = appState.groups.find(group => group.id === groupId);

  if (!g || !sessionId) return;

  if (!appState.sessionAttendance[sessionId]) appState.sessionAttendance[sessionId] = {};

  const groupStudents = appState.students.filter(s => s.group === g.name);
  groupStudents.forEach(st => {
    appState.sessionAttendance[sessionId][st.id] = isPresent;
  });

  loadAttendanceForSelectedSession();
}

function saveAttendanceRecord() {
  saveState();
  renderDashboardStats();
  showToast("تم حفظ كشف الحضور للجلسة بنجاح", "success");
}

// ==========================================================================
// 8. LECTURES & TASKS CRUD
// ==========================================================================

function renderLecturesGrid() {
  const container = document.getElementById('lectures-grid');
  if (!container) return;
  container.innerHTML = appState.lectures.map((l, idx) => `
    <div class="card p-4 flex-between flex-column">
      <div>
        <div class="flex-between mb-2">
          <span class="badge bg-indigo">محاضرة ${idx + 1}</span>
          <div class="flex-align-center gap-1">
            <button class="btn btn-xs btn-outline" onclick="openEditLectureModal('${l.id}')"><i class="fa-solid fa-pen"></i></button>
            <button class="btn btn-xs btn-outline text-rose" onclick="deleteLecture('${l.id}')"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
        <h4 class="mb-2">${l.title}</h4>
        <p class="text-muted text-xs mb-3">${l.desc}</p>
      </div>
      <a href="${l.link || '#'}" target="_blank" class="btn btn-outline btn-sm btn-block">فتح الشرائح / المحتوى</a>
    </div>
  `).join('');
}

function openCreateLectureModal() {
  document.getElementById('lecture-modal-title').textContent = "إضافة محاضرة جديدة";
  document.getElementById('form-lecture-id').value = '';
  document.getElementById('lec-title-input').value = '';
  document.getElementById('lec-desc-input').value = '';
  document.getElementById('lec-link-input').value = '';
  openModal('lecture-modal');
}

function openEditLectureModal(lectureId) {
  const l = appState.lectures.find(lec => lec.id === lectureId);
  if (!l) return;

  document.getElementById('lecture-modal-title').textContent = "تعديل المحاضرة";
  document.getElementById('form-lecture-id').value = l.id;
  document.getElementById('lec-title-input').value = l.title;
  document.getElementById('lec-desc-input').value = l.desc;
  document.getElementById('lec-link-input').value = l.link || '';
  openModal('lecture-modal');
}

function saveLectureForm(event) {
  event.preventDefault();
  const id = document.getElementById('form-lecture-id').value;
  const title = document.getElementById('lec-title-input').value;
  const desc = document.getElementById('lec-desc-input').value;
  const link = document.getElementById('lec-link-input').value;

  if (id) {
    const idx = appState.lectures.findIndex(l => l.id === id);
    if (idx !== -1) {
      appState.lectures[idx] = { ...appState.lectures[idx], title, desc, link };
      showToast("تم تحديث المحاضرة بنجاح", "success");
    }
  } else {
    appState.lectures.push({ id: `l_${Date.now()}`, title, desc, link });
    showToast("تم نشر المحاضرة", "success");
  }

  saveState();
  renderLecturesGrid();
  closeModal('lecture-modal');
}

function deleteLecture(lectureId) {
  if (confirm("هل أنت تأكد من حذف المحاضرة؟")) {
    appState.lectures = appState.lectures.filter(l => l.id !== lectureId);
    saveState();
    renderLecturesGrid();
    showToast("تم حذف المحاضرة", "info");
  }
}

// Tasks CRUD
function renderTasksList() {
  const container = document.getElementById('tasks-list');
  if (!container) return;
  container.innerHTML = appState.tasks.map(t => `
    <div class="card p-3 mb-2 flex-between">
      <div>
        <h4>${t.title}</h4>
        <p class="text-muted text-xs mt-1">${t.desc}</p>
      </div>
      <div class="flex-align-center gap-2">
        <span class="badge bg-amber">التسليم: ${t.deadline}</span>
        <button class="btn btn-xs btn-outline" onclick="openEditTaskModal('${t.id}')"><i class="fa-solid fa-pen"></i></button>
        <button class="btn btn-xs btn-outline text-rose" onclick="deleteTask('${t.id}')"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  `).join('');
}

function openCreateTaskModal() {
  document.getElementById('task-modal-title').textContent = "إضافة واجب جديد";
  document.getElementById('form-task-id').value = '';
  document.getElementById('task-title-input').value = '';
  document.getElementById('task-desc-input').value = '';
  document.getElementById('task-deadline-input').value = '';
  openModal('task-modal');
}

function openEditTaskModal(taskId) {
  const t = appState.tasks.find(tk => tk.id === taskId);
  if (!t) return;

  document.getElementById('task-modal-title').textContent = "تعديل الواجب";
  document.getElementById('form-task-id').value = t.id;
  document.getElementById('task-title-input').value = t.title;
  document.getElementById('task-desc-input').value = t.desc;
  document.getElementById('task-deadline-input').value = t.deadline;
  openModal('task-modal');
}

function saveTaskForm(event) {
  event.preventDefault();
  const id = document.getElementById('form-task-id').value;
  const title = document.getElementById('task-title-input').value;
  const desc = document.getElementById('task-desc-input').value;
  const deadline = document.getElementById('task-deadline-input').value;

  if (id) {
    const idx = appState.tasks.findIndex(t => t.id === id);
    if (idx !== -1) {
      appState.tasks[idx] = { ...appState.tasks[idx], title, desc, deadline };
      showToast("تم تحديث الواجب بنجاح", "success");
    }
  } else {
    appState.tasks.push({ id: `t_${Date.now()}`, title, desc, deadline });
    showToast("تم إضافة الواجب", "success");
  }

  saveState();
  renderTasksList();
  closeModal('task-modal');
}

function deleteTask(taskId) {
  if (confirm("هل أنت تأكد من حذف هذا الواجب؟")) {
    appState.tasks = appState.tasks.filter(t => t.id !== taskId);
    saveState();
    renderTasksList();
    showToast("تم حذف الواجب", "info");
  }
}

// ==========================================================================
// 9. BATTLE MODE ARENA (WITH PASS QUESTION TO OTHER STUDENT & FAIR TIE)
// ==========================================================================

function populateBattleCollectionDropdown() {
  const colSel = document.getElementById('battle-collection-select');
  if (!colSel) return;

  if (appState.questionCollections && appState.questionCollections.length > 0) {
    colSel.innerHTML = appState.questionCollections.map(c =>
      `<option value="${c.id}">${c.title} (${c.questions ? c.questions.length : 0} أسئلة)</option>`
    ).join('');
  } else {
    colSel.innerHTML = `<option value="">لا يوجد مجموعات أسئلة مضافة</option>`;
  }

  onBattleCollectionChange();
}

function onBattleCollectionChange() {
  const colId = document.getElementById('battle-collection-select')?.value;
  const infoSpan = document.getElementById('battle-collection-info');
  const col = appState.questionCollections.find(c => c.id === colId);

  if (col && infoSpan) {
    infoSpan.textContent = `${col.desc || 'مجموعة أسئلة جاهزة للمواجهة'} • الإجمالي: ${col.questions ? col.questions.length : 0} أسئلة`;
  }
}

function startBattleWithCollection(collectionId) {
  showTeacherTab('battle-tab');
  const colSel = document.getElementById('battle-collection-select');
  if (colSel) colSel.value = collectionId;
  onBattleCollectionChange();
}

let battleTeamsState = {
  t1: [],
  t2: []
};

function populateBattleSelectors() {
  if (appState.students && appState.students.length > 0) {
    if (battleTeamsState.t1.length === 0 && battleTeamsState.t2.length === 0) {
      battleTeamsState.t1 = [appState.students[0].id];
      if (appState.students.length > 1) {
        battleTeamsState.t2 = [appState.students[1].id];
      }
    } else {
      const validIds = appState.students.map(s => s.id);
      battleTeamsState.t1 = battleTeamsState.t1.filter(id => validIds.includes(id));
      battleTeamsState.t2 = battleTeamsState.t2.filter(id => validIds.includes(id));
    }
  } else {
    battleTeamsState.t1 = [];
    battleTeamsState.t2 = [];
  }

  renderBattleTeamsSetup();
}

function renderBattleTeamsSetup() {
  const t1Container = document.getElementById('team1-student-list');
  const t2Container = document.getElementById('team2-student-list');
  if (!t1Container || !t2Container) return;

  if (!appState.students || appState.students.length === 0) {
    t1Container.innerHTML = `<div class="text-center text-xs text-muted p-2">لا يوجد طلاب مضافين</div>`;
    t2Container.innerHTML = `<div class="text-center text-xs text-muted p-2">لا يوجد طلاب مضافين</div>`;
    return;
  }

  t1Container.innerHTML = appState.students.map(s => {
    const isSelectedInT1 = battleTeamsState.t1.includes(s.id);
    const isSelectedInT2 = battleTeamsState.t2.includes(s.id);

    return `
      <label class="checklist-row row-t1 ${isSelectedInT2 ? 'disabled' : ''}" title="${isSelectedInT2 ? 'الطالب مضاف للفريق الثاني' : 'تحديد / إلغاء تحديد'}">
        <input type="checkbox" ${isSelectedInT1 ? 'checked' : ''} ${isSelectedInT2 ? 'disabled' : ''} onchange="toggleStudentInTeam('${s.id}', 't1')">
        <span class="font-weight-bold ${isSelectedInT1 ? 'text-purple' : ''}">${s.name}</span>
        ${isSelectedInT2 ? '<span class="text-xs text-muted mr-auto">(في الفريق الثاني)</span>' : ''}
      </label>
    `;
  }).join('');

  t2Container.innerHTML = appState.students.map(s => {
    const isSelectedInT1 = battleTeamsState.t1.includes(s.id);
    const isSelectedInT2 = battleTeamsState.t2.includes(s.id);

    return `
      <label class="checklist-row row-t2 ${isSelectedInT1 ? 'disabled' : ''}" title="${isSelectedInT1 ? 'الطالب مضاف للفريق الأول' : 'تحديد / إلغاء تحديد'}">
        <input type="checkbox" ${isSelectedInT2 ? 'checked' : ''} ${isSelectedInT1 ? 'disabled' : ''} onchange="toggleStudentInTeam('${s.id}', 't2')">
        <span class="font-weight-bold ${isSelectedInT2 ? 'text-rose' : ''}">${s.name}</span>
        ${isSelectedInT1 ? '<span class="text-xs text-muted mr-auto">(في الفريق الأول)</span>' : ''}
      </label>
    `;
  }).join('');

  updateTeamPreviews();
}

function toggleStudentInTeam(studentId, targetTeamKey) {
  if (targetTeamKey === 't1') {
    if (battleTeamsState.t1.includes(studentId)) {
      battleTeamsState.t1 = battleTeamsState.t1.filter(id => id !== studentId);
    } else {
      battleTeamsState.t1.push(studentId);
      battleTeamsState.t2 = battleTeamsState.t2.filter(id => id !== studentId);
    }
  } else if (targetTeamKey === 't2') {
    if (battleTeamsState.t2.includes(studentId)) {
      battleTeamsState.t2 = battleTeamsState.t2.filter(id => id !== studentId);
    } else {
      battleTeamsState.t2.push(studentId);
      battleTeamsState.t1 = battleTeamsState.t1.filter(id => id !== studentId);
    }
  }

  renderBattleTeamsSetup();
}

function randomizeBattleTeams() {
  if (!appState.students || appState.students.length === 0) return;

  const shuffled = [...appState.students].sort(() => 0.5 - Math.random());
  const half = Math.ceil(shuffled.length / 2);

  battleTeamsState.t1 = shuffled.slice(0, half).map(s => s.id);
  battleTeamsState.t2 = shuffled.slice(half).map(s => s.id);

  showToast("تم توزيع الطلاب عشوائياً بين الفريقين بنجاح", "info");
  renderBattleTeamsSetup();
}

function clearAllBattleTeams() {
  battleTeamsState.t1 = [];
  battleTeamsState.t2 = [];
  renderBattleTeamsSetup();
}

function updateTeamPreviews() {
  const t1Badge = document.getElementById('t1-count-badge');
  const t2Badge = document.getElementById('t2-count-badge');

  if (t1Badge) t1Badge.textContent = `${battleTeamsState.t1.length} طلاب`;
  if (t2Badge) t2Badge.textContent = `${battleTeamsState.t2.length} طلاب`;

  renderTeamPreview('t1', battleTeamsState.t1);
  renderTeamPreview('t2', battleTeamsState.t2);
}

function renderTeamPreview(teamKey, studentIds) {
  const previewDiv = document.getElementById(`${teamKey}-preview`);
  if (!previewDiv) return;

  const selectedStudents = appState.students.filter(s => studentIds.includes(s.id));

  if (selectedStudents.length === 0) {
    previewDiv.innerHTML = `<div class="text-muted text-xs text-center p-2">لم يتم اختيار طلاب بهذا الفريق</div>`;
    return;
  }

  if (selectedStudents.length === 1) {
    const st = selectedStudents[0];
    const shield = getShieldForRating(st.rating);
    previewDiv.innerHTML = `
      <h4 class="text-sm font-weight-bold mb-1">${st.name}</h4>
      <div><span class="badge-shield ${shield.class}">${shield.name}</span></div>
      <div class="text-indigo text-xs mt-1">النقاط: ${st.rating}</div>
    `;
  } else {
    previewDiv.innerHTML = `
      <h4 class="text-sm font-weight-bold mb-2 ${teamKey === 't1' ? 'text-purple' : 'text-rose'}">${selectedStudents.length} طلاب متنافسين</h4>
      <div class="team-members-chips">
        ${selectedStudents.map(st => `<span class="team-member-chip">${st.name}</span>`).join('')}
      </div>
    `;
  }
}

function startBattleArena() {
  const t1Ids = battleTeamsState.t1;
  const t2Ids = battleTeamsState.t2;
  const colId = document.getElementById('battle-collection-select')?.value;

  if (!t1Ids || t1Ids.length === 0) {
    showToast("يرجى اختيار طالب واحد على الأقل في الفريق الأول!", "error");
    return;
  }

  if (!t2Ids || t2Ids.length === 0) {
    showToast("يرجى اختيار طالب واحد على الأقل في الفريق الثاني!", "error");
    return;
  }

  const conflict = t1Ids.filter(id => t2Ids.includes(id));
  if (conflict.length > 0) {
    showToast("خطأ: يرجى عدم تكرار الطلاب بين الفريقين!", "error");
    return;
  }

  const selectedCol = appState.questionCollections.find(c => c.id === colId);
  let questionPool = selectedCol && selectedCol.questions && selectedCol.questions.length > 0
    ? [...selectedCol.questions]
    : [
      {
        q: "ما المقصود بتطبيقات TinyML في الأنظمة الإلكترونية؟",
        options: ["تشغيل نماذج الذكاء الاصطناعي على متحكمات منخفضة الطاقة", "استخدام خوادم ضخمة جداً", "تصنيع ألواح النحاس", "شاشات العرض الكبيرة"],
        answer: 0
      }
    ];

  const t1Students = appState.students.filter(s => t1Ids.includes(s.id));
  const t2Students = appState.students.filter(s => t2Ids.includes(s.id));

  appState.currentBattle = {
    t1Students,
    t2Students,
    t1Score: 0,
    t2Score: 0,
    t1TurnIdx: 0,
    t2TurnIdx: 0,
    turnTeam: 't1',
    currentQuestionIndex: 0,
    questions: questionPool.sort(() => 0.5 - Math.random())
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

  const isT1Turn = b.turnTeam === 't1';
  const activeTeamStudents = isT1Turn ? b.t1Students : b.t2Students;
  const activeTurnIdx = isT1Turn ? (b.t1TurnIdx % b.t1Students.length) : (b.t2TurnIdx % b.t2Students.length);
  const activePlayer = activeTeamStudents[activeTurnIdx];
  const activeTeamLabel = isT1Turn ? 'الفريق الأول (أ)' : 'الفريق الثاني (ب)';
  const otherTeamLabel = isT1Turn ? 'الفريق الثاني (ب)' : 'الفريق الأول (أ)';

  activeScreen.innerHTML = `
    <div class="flex-between mb-3">
      <span class="badge bg-indigo">السؤال ${b.currentQuestionIndex + 1} / ${b.questions.length}</span>
      <button class="btn btn-xs btn-outline text-rose" onclick="cancelBattleArena()">إلغاء المواجهة</button>
    </div>

    <!-- Live Competitor Team Cards -->
    <div class="grid-2col mb-3">
      <div class="card p-3 text-center ${isT1Turn ? 'border-indigo bg-subtle' : ''}">
        <div class="font-weight-bold text-indigo mb-2"><i class="fa-solid fa-users"></i> الفريق الأول (${b.t1Students.length} طلاب)</div>
        <div class="flex-center gap-1 flex-wrap mb-2" style="display: flex; justify-content: center; gap: 6px;">
          ${b.t1Students.map(s => `
            <span class="badge bg-purple-subtle text-xs" style="display: inline-flex; align-items: center; gap: 5px; padding: 4px 10px;">
              <img src="${s.avatar}" style="width: 20px; height: 20px; border-radius: 50%; object-fit: cover;" alt="Avatar">
              <span>${s.name}</span>
            </span>
          `).join('')}
        </div>
        <h3 class="text-indigo mt-1">+${b.t1Score} نقاط</h3>
      </div>
      
      <div class="card p-3 text-center ${!isT1Turn ? 'border-pink bg-subtle' : ''}">
        <div class="font-weight-bold text-rose mb-2"><i class="fa-solid fa-users"></i> الفريق الثاني (${b.t2Students.length} طلاب)</div>
        <div class="flex-center gap-1 flex-wrap mb-2" style="display: flex; justify-content: center; gap: 6px;">
          ${b.t2Students.map(s => `
            <span class="badge bg-rose-subtle text-xs" style="display: inline-flex; align-items: center; gap: 5px; padding: 4px 10px;">
              <img src="${s.avatar}" style="width: 20px; height: 20px; border-radius: 50%; object-fit: cover;" alt="Avatar">
              <span>${s.name}</span>
            </span>
          `).join('')}
        </div>
        <h3 class="text-rose mt-1">+${b.t2Score} نقاط</h3>
      </div>
    </div>

    <!-- Active Question Container -->
    <div class="card p-4 text-center mb-3">
      <div class="badge bg-purple mb-2 p-2" style="display: inline-flex; align-items: center; gap: 8px; justify-content: center; flex-wrap: wrap;">
        <img src="${activePlayer.avatar}" style="width: 24px; height: 24px; border-radius: 50%; border: 1.5px solid #ffffff; object-fit: cover;" alt="Avatar">
        <span>الدور الآن على: <strong>${activeTeamLabel}</strong></span>
        <span>•</span>
        <span>المجيب: <u class="text-amber font-weight-bold">${activePlayer.name}</u></span>
      </div>
      <h3 class="mb-3 mt-2">${q.q}</h3>
      <div class="grid-2col gap-2 mt-3">
        ${q.options.map((opt, idx) => `
          <button class="btn btn-outline p-3 text-right" onclick="submitBattleAnswer(${idx})">
            <strong>${['أ', 'ب', 'ج', 'د'][idx]})</strong> ${opt}
          </button>
        `).join('')}
      </div>
    </div>

    <!-- Interactive Actions: Pass to Other Team & Fair Tie -->
    <div class="border-top pt-3 text-center">
      <span class="text-xs text-muted block mb-2 font-weight-bold">خيارات التحكيم والدور:</span>
      <div class="flex-center gap-2 flex-wrap" style="display: flex; justify-content: center;">
        <button class="btn btn-purple btn-sm" onclick="passQuestionToOtherStudent()">
          <i class="fa-solid fa-share-nodes"></i> تحويل السؤال إلى (${otherTeamLabel})
        </button>
        <button class="btn btn-outline text-amber btn-sm" onclick="declareBattleManualWinner('draw')">
          <i class="fa-solid fa-handshake"></i> حسم التعادل العادل (Fair Tie)
        </button>
      </div>
    </div>
  `;
}

function submitBattleAnswer(selectedOptIdx) {
  const b = appState.currentBattle;
  const q = b.questions[b.currentQuestionIndex];

  const isT1 = b.turnTeam === 't1';
  const activeStudents = isT1 ? b.t1Students : b.t2Students;
  const activeIdx = isT1 ? (b.t1TurnIdx % b.t1Students.length) : (b.t2TurnIdx % b.t2Students.length);
  const activePlayer = activeStudents[activeIdx];
  const teamName = isT1 ? 'الفريق الأول' : 'الفريق الثاني';

  if (selectedOptIdx === q.answer) {
    showToast(`إجابة صحيحة من (${teamName} - ${activePlayer.name})! +50 نقطة`, "success");
    if (isT1) {
      b.t1Score += 50;
      b.t1TurnIdx++;
    } else {
      b.t2Score += 50;
      b.t2TurnIdx++;
    }
  } else {
    showToast(`إجابة خاطئة من (${activePlayer.name})!`, "error");
    if (isT1) b.t1TurnIdx++;
    else b.t2TurnIdx++;
  }

  b.turnTeam = isT1 ? 't2' : 't1';
  b.currentQuestionIndex++;
  renderBattleQuestion();
}

function passQuestionToOtherStudent() {
  const b = appState.currentBattle;
  if (!b) return;

  const currentTeamName = b.turnTeam === 't1' ? 'الفريق الأول' : 'الفريق الثاني';
  b.turnTeam = b.turnTeam === 't1' ? 't2' : 't1';
  const newTeamName = b.turnTeam === 't1' ? 'الفريق الأول' : 'الفريق الثاني';

  showToast(`تم تحويل نفس السؤال من (${currentTeamName}) إلى (${newTeamName})`, "info");
  renderBattleQuestion();
}

function declareBattleManualWinner(choice) {
  const b = appState.currentBattle;
  if (!b) return;

  if (choice === 'draw') {
    b.t1Score += 100;
    b.t2Score += 100;
    showToast(`تم حسم المواجهة بالتعادل العادل بين الفريقين! 🤝`, "info");
  }

  finishBattleArena();
}

function finishBattleArena() {
  const b = appState.currentBattle;
  const activeScreen = document.getElementById('active-battle-screen');

  let winnerText = "تعادل عادل وحماسي بين الفريقين! 🤝";
  if (b.t1Score > b.t2Score) {
    const names = b.t1Students.map(s => s.name).join('، ');
    winnerText = `الفائز بالمواجهة: الفريق الأول (${names})! 🎉`;
  } else if (b.t2Score > b.t1Score) {
    const names = b.t2Students.map(s => s.name).join('، ');
    winnerText = `الفائز بالمواجهة: الفريق الثاني (${names})! 🎉`;
  }

  b.t1Students.forEach(st => {
    const sIdx = appState.students.findIndex(s => s.id === st.id);
    if (sIdx !== -1) {
      appState.students[sIdx].battlePoints = (appState.students[sIdx].battlePoints || 0) + b.t1Score;
    }
  });

  b.t2Students.forEach(st => {
    const sIdx = appState.students.findIndex(s => s.id === st.id);
    if (sIdx !== -1) {
      appState.students[sIdx].battlePoints = (appState.students[sIdx].battlePoints || 0) + b.t2Score;
    }
  });

  appState.battles.push({
    t1: b.t1Students.map(s => s.id),
    t2: b.t2Students.map(s => s.id),
    t1Score: b.t1Score,
    t2Score: b.t2Score,
    date: new Date().toISOString()
  });

  saveState();

  if (window.confetti) confetti({ particleCount: 150, spread: 90 });

  activeScreen.innerHTML = `
    <div class="text-center p-4">
      <div class="login-icon-box bg-purple mx-auto mb-3">
        <i class="fa-solid fa-trophy"></i>
      </div>
      <h2 class="text-indigo mb-2">${winnerText}</h2>
      <p class="text-muted text-sm mb-4">تم احتساب وتوزيع النقاط بنجاح على جميع طلاب الفريقين المشاركين</p>
      
      <div class="grid-2col max-w-lg mx-auto mb-4 gap-3">
        <div class="card p-3 bg-subtle border-indigo text-right">
          <h4 class="text-indigo font-weight-bold mb-2 text-center">الفريق الأول (+${b.t1Score} نقاط)</h4>
          <div class="flex-column gap-2" style="display: flex; flex-direction: column; gap: 6px;">
            ${b.t1Students.map(s => `
              <div class="flex-align-center gap-2 p-2 rounded bg-card" style="display: flex; align-items: center; gap: 8px; background: var(--bg-card, #ffffff); padding: 6px 10px; border-radius: 8px;">
                <img src="${s.avatar}" style="width: 24px; height: 24px; border-radius: 50%; object-fit: cover;" alt="Avatar">
                <span class="font-weight-bold text-sm" style="flex: 1;">${s.name}</span>
                <span class="badge bg-purple-subtle text-xs">+${b.t1Score} نقطة</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="card p-3 bg-subtle border-pink text-right">
          <h4 class="text-rose font-weight-bold mb-2 text-center">الفريق الثاني (+${b.t2Score} نقاط)</h4>
          <div class="flex-column gap-2" style="display: flex; flex-direction: column; gap: 6px;">
            ${b.t2Students.map(s => `
              <div class="flex-align-center gap-2 p-2 rounded bg-card" style="display: flex; align-items: center; gap: 8px; background: var(--bg-card, #ffffff); padding: 6px 10px; border-radius: 8px;">
                <img src="${s.avatar}" style="width: 24px; height: 24px; border-radius: 50%; object-fit: cover;" alt="Avatar">
                <span class="font-weight-bold text-sm" style="flex: 1;">${s.name}</span>
                <span class="badge bg-rose-subtle text-xs">+${b.t2Score} نقطة</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      
      <button class="btn btn-primary btn-lg" onclick="cancelBattleArena()">العودة لحلبة المواجهة</button>
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
// 10. GRADES & STUDENT PORTAL INTEGRATION
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
        <td><input type="number" class="form-control-inline" style="width:75px" value="${s.gradeScore}" onchange="updateStudentGrade('${s.id}', this.value)"></td>
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

// Student Login & Portal View Handlers (Used in student.html)
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
  document.getElementById('student-app-navbar')?.classList.add('hidden');
  document.getElementById('st-mobile-bottom-nav')?.classList.add('hidden');
  document.getElementById('student-login-card')?.classList.remove('hidden');
  document.getElementById('student-dashboard-content')?.classList.add('hidden');
}

function renderStudentDashboardView() {
  const st = appState.activeStudent;
  if (!st) return;

  document.getElementById('student-app-navbar')?.classList.remove('hidden');
  document.getElementById('st-mobile-bottom-nav')?.classList.remove('hidden');
  document.getElementById('student-login-card')?.classList.add('hidden');
  document.getElementById('student-dashboard-content')?.classList.remove('hidden');

  const uName = document.getElementById('header-user-name');
  const uRole = document.getElementById('header-user-role');
  const uAvatar = document.getElementById('header-avatar');
  const uLogout = document.getElementById('btn-logout');

  if (uName) uName.textContent = st.name;
  if (uRole) uRole.textContent = `طالب | ${st.id}`;
  if (uAvatar) uAvatar.src = st.avatar;
  if (uLogout) uLogout.classList.remove('hidden');

  const pImg = document.getElementById('st-profile-img');
  const pName = document.getElementById('st-profile-name');
  const pId = document.getElementById('st-profile-id');
  const pAge = document.getElementById('st-profile-age');
  const pGrp = document.getElementById('st-group-tag');

  if (pImg) pImg.src = st.avatar;
  if (pName) pName.textContent = st.name;
  if (pId) pId.textContent = st.id;
  if (pAge) pAge.textContent = st.age;
  if (pGrp) pGrp.textContent = st.group || 'شُعبة عامة';

  const ptsInfo = calculateStudentPoints(st);
  st.rating = ptsInfo.total;
  const shield = getShieldForRating(st.rating);

  const bFloat = document.getElementById('st-badge-floating');
  const bName = document.getElementById('st-badge-name');
  const rPts = document.getElementById('st-rating-pts');
  const nPts = document.getElementById('st-next-level-pts');

  if (bFloat) bFloat.textContent = shield.icon;
  if (bName) {
    bName.className = `badge-shield ${shield.class}`;
    bName.textContent = shield.name;
  }
  if (rPts) rPts.textContent = st.rating;
  if (nPts) nPts.textContent = shield.max;

  const fillPercent = Math.min(100, Math.max(10, Math.round((st.rating / shield.max) * 100)));
  const pFill = document.getElementById('st-progress-fill');
  if (pFill) pFill.style.width = `${fillPercent}%`;

  // Populate Quick Stats Bar
  const sPts = document.getElementById('st-stat-points');
  const sShield = document.getElementById('st-stat-shield');
  const sGrade = document.getElementById('st-stat-grade');
  if (sPts) sPts.textContent = st.rating;
  if (sShield) sShield.textContent = shield.name;
  if (sGrade) sGrade.textContent = `${st.gradeScore || 95} / 100`;

  renderStudentLeaderboard();
  renderStudentLectures();
  renderStudentAttendanceStats();
  renderStudentGrades();
  renderStudentExamsView();
}

function showStudentTab(tabId, clickedBtn = null) {
  // Update desktop and mobile tab buttons
  document.querySelectorAll('.student-nav-tabs .st-tab-btn, .st-mobile-bottom-nav .st-mobile-nav-item').forEach(btn => {
    const onclickAttr = btn.getAttribute('onclick') || '';
    if (clickedBtn) {
      btn.classList.toggle('active', btn === clickedBtn || onclickAttr.includes(`'${tabId}'`) || onclickAttr.includes(`"${tabId}"`));
    } else {
      btn.classList.toggle('active', onclickAttr.includes(`'${tabId}'`) || onclickAttr.includes(`"${tabId}"`));
    }
  });

  document.querySelectorAll('.student-dashboard .st-tab-content').forEach(tab => {
    tab.classList.remove('active');
  });

  const target = document.getElementById(tabId);
  if (target) {
    target.classList.add('active');
  }

  if (tabId === 'st-exams') renderStudentExamsView();
}

function renderStudentLeaderboard() {
  const container = document.getElementById('st-leaderboard-list');
  if (!container) return;

  appState.students.forEach(s => {
    const ptsInfo = calculateStudentPoints(s);
    s.rating = ptsInfo.total;
  });

  const sorted = [...appState.students].sort((a, b) => b.rating - a.rating);

  if (sorted.length === 0) {
    container.innerHTML = `
      <div class="card p-5 text-center text-muted">
        <i class="fa-solid fa-trophy mb-2 text-amber block" style="font-size: 2rem;"></i>
        <h4 class="mb-1 text-main">لائحة الصدارة فارغة حالياً</h4>
        <p class="text-xs">سيتم عرض وترتيب جميع الطلاب هنا فور تسجيلهم وحصولهم على النقاط</p>
      </div>
    `;
    return;
  }

  container.innerHTML = sorted.map((s, idx) => {
    const isSelf = appState.activeStudent && s.id === appState.activeStudent.id;
    const rank = idx + 1;
    const rankBadge = `#${rank}`;
    const rankClass = rank <= 3 ? `rank-${rank}` : '';

    return `
      <div class="leaderboard-card ${rankClass} ${isSelf ? 'is-self' : ''}">
        <div class="flex-align-center gap-3">
          <div class="rank-badge-box">
            ${rankBadge}
          </div>
          <img src="${s.avatar}" class="avatar-md" alt="${s.name}">
          <div class="flex-align-center gap-2">
            <strong class="text-main" style="font-size: 1.05rem;">${s.name}</strong>
            ${isSelf ? '<span class="badge bg-indigo text-xs">حسابك</span>' : ''}
          </div>
        </div>

        <div class="leaderboard-points-box">
          <strong class="text-amber" style="font-size: 1.25rem;">${s.rating || 0} نقطة</strong>
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

  let totalSessions = 0;
  let attendedCount = 0;
  const historyList = [];

  appState.groups.forEach(g => {
    if (g.name === st.group && g.sessions) {
      g.sessions.forEach(sess => {
        totalSessions++;
        const sessMap = appState.sessionAttendance[sess.id] || {};
        const isPresent = sessMap[st.id] !== undefined ? sessMap[st.id] : true;
        if (isPresent) attendedCount++;
        historyList.push({
          date: sess.date,
          sessionName: sess.name,
          status: isPresent ? 'حاضر ✅' : 'غائب ❌'
        });
      });
    }
  });

  const percent = totalSessions > 0 ? Math.round((attendedCount / totalSessions) * 100) : 100;
  const pEl = document.getElementById('st-attendance-percent');
  const statAttEl = document.getElementById('st-stat-attendance');
  if (pEl) pEl.textContent = `${percent}%`;
  if (statAttEl) statAttEl.textContent = `${percent}%`;

  const tbody = document.getElementById('st-attendance-history-body');
  if (tbody) {
    tbody.innerHTML = historyList.length > 0 ? historyList.map(h => `
      <tr>
        <td>${h.date}</td>
        <td><strong>${h.sessionName}</strong></td>
        <td><strong>${h.status}</strong></td>
      </tr>
    `).join('') : `<tr><td colspan="3" class="text-center text-muted">لا يوجد جلسات حضور مسجلة لشعبتك بعد</td></tr>`;
  }
}

function renderStudentGrades() {
  const st = appState.activeStudent;
  if (!st) return;

  const scoreEl = document.getElementById('st-grade-score');
  if (scoreEl) scoreEl.textContent = `${st.gradeScore} / 100`;

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

// ==========================================================================
// 10. POINTS MANAGEMENT & CALCULATOR SYSTEM
// ==========================================================================

function renderPointsManagementTable() {
  const selectEl = document.getElementById('points-student-select');
  if (selectEl) {
    selectEl.innerHTML = appState.students.map(s => `<option value="${s.id}">${s.name} (${s.group || 'بدون مجموعة'})</option>`).join('');
  }

  const tbody = document.getElementById('points-table-body');
  if (!tbody) return;

  if (appState.students.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" class="text-center p-4 text-muted">لا يوجد طلاب مسجلين حالياً. قم بإضافة طلاب لحساب وإسناد النقاط.</td></tr>`;
    return;
  }

  tbody.innerHTML = appState.students.map(s => {
    const ptsInfo = calculateStudentPoints(s);
    s.rating = ptsInfo.total;
    const shield = getShieldForRating(s.rating);

    return `
      <tr>
        <td>
          <div class="flex-align-center gap-2">
            <img src="${s.avatar}" class="avatar-sm" alt="Avatar">
            <strong>${s.name}</strong>
          </div>
        </td>
        <td><span class="badge bg-subtle text-indigo">${s.group || 'غير محدد'}</span></td>
        <td><strong class="text-indigo">${ptsInfo.attendedSessionsCount} جلسات</strong></td>
        <td><span class="badge bg-emerald">+${ptsInfo.attendancePts} نقطة</span></td>
        <td><span class="badge bg-amber">+${ptsInfo.battlePts} نقطة</span></td>
        <td><span class="badge bg-purple">${ptsInfo.bonusPts >= 0 ? '+' : ''}${ptsInfo.bonusPts} نقطة</span></td>
        <td><strong class="text-amber" style="font-size: 1.1rem;">${ptsInfo.total} نقطة</strong></td>
        <td><span class="badge-shield ${shield.class}">${shield.name}</span></td>
        <td>
          <div class="flex-align-center gap-1">
            <button class="btn btn-xs btn-emerald" onclick="quickAddPoints('${s.id}', 50)">+50</button>
            <button class="btn btn-xs btn-purple" onclick="quickAddPoints('${s.id}', 100)">+100</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}


function grantManualPoints(event) {
  event.preventDefault();
  const studentId = document.getElementById('points-student-select').value;
  const pts = parseInt(document.getElementById('points-amount-input').value) || 0;
  const reason = document.getElementById('points-reason-input').value.trim() || 'نقاط تميز';

  const st = appState.students.find(s => s.id === studentId);
  if (!st) return;

  st.bonusPoints = (st.bonusPoints || 0) + pts;
  saveState(true);
  refreshAllUI();
  document.getElementById('points-grant-form').reset();
  showToast(`تم إضافة ${pts} نقطة للطالب (${st.name}) - ${reason}`, "success");
}

function quickAddPoints(studentId, points) {
  const st = appState.students.find(s => s.id === studentId);
  if (!st) return;
  st.bonusPoints = (st.bonusPoints || 0) + points;
  saveState(true);
  refreshAllUI();
  showToast(`تم إضافة +${points} نقطة مكافأة للطالب (${st.name})`, "success");
}


// ==========================================================================
// 12. EXAMS MANAGEMENT SYSTEM (TEACHER & STUDENT SIDES)
// ==========================================================================

function renderTeacherExams() {
  const container = document.getElementById('exams-grid');
  if (!container) return;

  const exams = appState.exams || [];
  if (exams.length === 0) {
    container.innerHTML = `
      <div class="card p-5 text-center text-muted" style="grid-column: 1 / -1;">
        <i class="fa-solid fa-file-pen display-4 mb-3 text-dim"></i>
        <h3>لا توجد اختبارات مضافة حالياً</h3>
        <p class="text-sm mt-1 mb-3">اضغط على زر إضافة اختبار جديد لإنشاء اختبار مع الأسئلة والإجابات وتحديد الإجابة الصحيحة.</p>
        <button class="btn btn-primary" onclick="openCreateExamModal()"><i class="fa-solid fa-plus"></i> إضافة اختبار جديد</button>
      </div>
    `;
    return;
  }

  container.innerHTML = exams.map(ex => {
    const questionsCount = ex.questions ? ex.questions.length : 0;
    const submissions = (appState.examSubmissions || []).filter(s => s.examId === ex.id);
    return `
      <div class="card p-4">
        <div class="flex-between mb-3">
          <span class="badge bg-indigo text-xs"><i class="fa-solid fa-file-pen"></i> اختبار أكاديمي</span>
          <span class="text-xs text-muted"><i class="fa-solid fa-clock"></i> ${ex.durationMinutes || 15} دقيقة</span>
        </div>
        <h3 class="mb-2 text-main">${ex.title}</h3>
        <p class="text-muted text-sm mb-3">${ex.description || 'اختبار لقياس مستوى استيعاب الطلاب.'}</p>
        <div class="p-3 bg-subtle border-radius mb-3 flex-between flex-wrap gap-2 text-xs text-muted">
          <span>عدد الأسئلة: <strong class="text-main">${questionsCount} سؤال</strong></span>
          <span>المجموعة: <strong class="text-indigo">${ex.group === 'all' ? 'جميع المجموعات' : ex.group}</strong></span>
          <span>إجابات الطلاب: <strong class="text-emerald">${submissions.length} إجابة</strong></span>
        </div>
        <div class="flex-between gap-2 border-top pt-3 mt-2">
          <button class="btn btn-xs btn-outline text-rose" onclick="deleteExam('${ex.id}')"><i class="fa-solid fa-trash"></i> حذف</button>
          <span class="text-xs text-muted">نقاط السؤال: <strong>50 نقطة</strong></span>
        </div>
      </div>
    `;
  }).join('');
}

let examModalQuestions = [];

function openCreateExamModal() {
  populateDropdowns();
  const select = document.getElementById('form-exam-group');
  if (select) {
    select.innerHTML = `<option value="all">جميع المجموعات والشُعب</option>` + (appState.groups || []).map(g => `<option value="${g.name}">${g.name}</option>`).join('');
  }

  document.getElementById('exam-form').reset();
  examModalQuestions = [
    { type: 'select', text: '', optionsCount: 4, options: ['', '', '', ''], correctIndex: 0, correctText: '' }
  ];
  renderExamQuestionsForm();
  openModal('exam-modal');
}

function addQuestionToExamModal() {
  examModalQuestions.push({ type: 'select', text: '', optionsCount: 4, options: ['', '', '', ''], correctIndex: 0, correctText: '' });
  renderExamQuestionsForm();
}

function removeQuestionFromExamModal(index) {
  if (examModalQuestions.length <= 1) {
    showToast("يجب أن يحتوي الاختبار على سؤال واحد على الأقل!", "error");
    return;
  }
  examModalQuestions.splice(index, 1);
  renderExamQuestionsForm();
}

function updateQuestionType(idx, type) {
  examModalQuestions[idx].type = type;
  if (type === 'select' && (!examModalQuestions[idx].options || examModalQuestions[idx].options.length === 0)) {
    examModalQuestions[idx].optionsCount = 4;
    examModalQuestions[idx].options = ['', '', '', ''];
    examModalQuestions[idx].correctIndex = 0;
  }
  renderExamQuestionsForm();
}

function updateQuestionOptionsCount(idx, count) {
  const c = parseInt(count) || 4;
  examModalQuestions[idx].optionsCount = c;
  const currentOpts = examModalQuestions[idx].options || [];
  while (currentOpts.length < c) currentOpts.push('');
  examModalQuestions[idx].options = currentOpts.slice(0, c);
  if (examModalQuestions[idx].correctIndex >= c) examModalQuestions[idx].correctIndex = 0;
  renderExamQuestionsForm();
}

function renderExamQuestionsForm() {
  const container = document.getElementById('exam-questions-container');
  if (!container) return;

  container.innerHTML = examModalQuestions.map((q, idx) => `
    <div class="card p-3 mb-3 bg-subtle border border-indigo">
      <div class="flex-between mb-2">
        <strong class="text-indigo text-sm"><i class="fa-solid fa-circle-question"></i> السؤال رقم (${idx + 1}):</strong>
        <button type="button" class="btn btn-xs btn-outline text-rose" onclick="removeQuestionFromExamModal(${idx})"><i class="fa-solid fa-trash"></i> حذف السؤال</button>
      </div>

      <div class="grid-2col gap-2 mb-2">
        <div class="form-group mb-0">
          <label class="text-xs font-weight-bold block mb-1">نوع السؤال:</label>
          <select class="form-control form-control-sm" onchange="updateQuestionType(${idx}, this.value)">
            <option value="select" ${q.type === 'select' || !q.type ? 'selected' : ''}>اختيار من متعدد (Multiple Choice)</option>
            <option value="text" ${q.type === 'text' ? 'selected' : ''}>إجابة نصية (Short Text)</option>
          </select>
        </div>
        ${(q.type === 'select' || !q.type) ? `
          <div class="form-group mb-0">
            <label class="text-xs font-weight-bold block mb-1">عدد الخيارات والإجابات:</label>
            <select class="form-control form-control-sm" onchange="updateQuestionOptionsCount(${idx}, this.value)">
              <option value="2" ${q.optionsCount === 2 ? 'selected' : ''}>خياران (2)</option>
              <option value="3" ${q.optionsCount === 3 ? 'selected' : ''}>3 خيارات</option>
              <option value="4" ${q.optionsCount === 4 || !q.optionsCount ? 'selected' : ''}>4 خيارات</option>
              <option value="5" ${q.optionsCount === 5 ? 'selected' : ''}>5 خيارات</option>
            </select>
          </div>
        ` : ''}
      </div>

      <div class="form-group mb-2">
        <label class="text-xs font-weight-bold block mb-1">نص السؤال:</label>
        <input type="text" class="form-control form-control-sm" placeholder="أدخل نص السؤال هنا..." value="${q.text || ''}" oninput="examModalQuestions[${idx}].text = this.value" required>
      </div>

      ${(q.type === 'select' || !q.type) ? `
        <div class="grid-2col gap-2 mb-2">
          ${(q.options || ['', '', '', '']).map((opt, optIdx) => `
            <div>
              <label class="text-xs block mb-1">الخيار (${optIdx + 1}):</label>
              <input type="text" class="form-control form-control-sm" placeholder="الخيار رقم ${optIdx + 1}" value="${opt}" oninput="examModalQuestions[${idx}].options[${optIdx}] = this.value" required>
            </div>
          `).join('')}
        </div>
        <div class="form-group mb-0">
          <label class="text-xs font-weight-bold block mb-1 text-emerald">اختر الإجابة الصحيحة:</label>
          <select class="form-control form-control-sm" onchange="examModalQuestions[${idx}].correctIndex = parseInt(this.value)">
            ${(q.options || []).map((opt, optIdx) => `
              <option value="${optIdx}" ${q.correctIndex === optIdx ? 'selected' : ''}>الخيار (${optIdx + 1}): ${opt || `خيار ${optIdx + 1}`}</option>
            `).join('')}
          </select>
        </div>
      ` : `
        <div class="form-group mb-0">
          <label class="text-xs font-weight-bold block mb-1 text-emerald">الإجابة النموذجية الصحيحة:</label>
          <input type="text" class="form-control form-control-sm" placeholder="أدخل الإجابة النصية النموذجية الصحيحة..." value="${q.correctText || ''}" oninput="examModalQuestions[${idx}].correctText = this.value" required>
        </div>
      `}
    </div>
  `).join('');
}

function saveExamForm(event) {
  event.preventDefault();
  const title = document.getElementById('form-exam-title').value.trim();
  const group = document.getElementById('form-exam-group').value;
  const durationMinutes = parseInt(document.getElementById('form-exam-duration').value) || 15;
  const description = document.getElementById('form-exam-desc').value.trim();

  for (let i = 0; i < examModalQuestions.length; i++) {
    const q = examModalQuestions[i];
    if (!q.text.trim()) {
      showToast(`يرجى كتابة نص السؤال رقم (${i + 1})`, "error");
      return;
    }
    if ((q.type === 'select' || !q.type) && q.options.some(opt => !opt.trim())) {
      showToast(`يرجى إكمال جميع خيارات السؤال رقم (${i + 1})`, "error");
      return;
    }
    if (q.type === 'text' && !q.correctText.trim()) {
      showToast(`يرجى تحديد الإجابة النموذجية للسؤال رقم (${i + 1})`, "error");
      return;
    }
  }

  const newExam = {
    id: 'ex-' + Date.now(),
    title,
    group,
    durationMinutes,
    description,
    questions: examModalQuestions,
    createdAt: new Date().toISOString().split('T')[0]
  };

  if (!appState.exams) appState.exams = [];
  appState.exams.push(newExam);
  saveState(true);
  closeModal('exam-modal');
  showToast("تم إنشاء الاختبار الأكاديمي وحفظه في Firebase بنجاح 📝", "success");
  renderTeacherExams();
}

function deleteExam(examId) {
  if (!confirm("هل أنت تأكد من رغبتك في حذف هذا الاختبار؟")) return;
  appState.exams = (appState.exams || []).filter(e => e.id !== examId);
  saveState(true);
  showToast("تم حذف الاختبار بنجاح", "info");
  renderTeacherExams();
}

// Student Exams System Logic
function renderStudentExamsView() {
  const container = document.getElementById('st-exams-grid');
  if (!container) return;

  const st = appState.activeStudent;
  if (!st) return;

  const allExams = appState.exams || [];
  const studentExams = allExams.filter(ex => !ex.group || ex.group === 'all' || ex.group === st.group || (st.group && ex.group && ex.group.includes(st.group)));
  const submissions = appState.examSubmissions || [];

  if (studentExams.length === 0) {
    container.innerHTML = `
      <div class="card p-5 text-center text-muted" style="grid-column: 1 / -1;">
        <i class="fa-solid fa-file-pen display-4 mb-3 text-dim"></i>
        <h3>لا توجد اختبارات مخصصة لشُعبتك حالياً</h3>
        <p class="text-sm mt-1">سيظهر أي اختبار جديد يضيفه المحاضر هنا فوراً.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = studentExams.map(ex => {
    const studentSubs = submissions.filter(s => s.studentId === st.id && s.examId === ex.id);
    const attemptsCount = studentSubs.length;
    const attemptsLeft = Math.max(0, 3 - attemptsCount);

    let bestScore = 0;
    let bestCorrect = 0;
    studentSubs.forEach(sub => {
      if ((sub.correctAnswers || 0) > bestCorrect) {
        bestCorrect = sub.correctAnswers || 0;
        bestScore = sub.score || 0;
      }
    });

    const isExhausted = attemptsCount >= 3;
    const hasAttempted = attemptsCount > 0;

    return `
      <div class="card p-4">
        <div class="flex-between mb-2">
          <span class="badge ${isExhausted ? 'bg-rose' : 'bg-indigo'} text-xs">
            ${isExhausted ? 'استنفذت المحاولات (3/3)' : `المحاولات المتبقية: ${attemptsLeft} / 3`}
          </span>
          <span class="text-xs text-muted"><i class="fa-solid fa-clock"></i> ${ex.durationMinutes || 15} دقيقة</span>
        </div>
        <h3 class="mb-2 text-main">${ex.title}</h3>
        <p class="text-muted text-sm mb-3">${ex.description || 'اختبار تفاعلي لقياس المعرفة واكتساب النقاط.'}</p>
        
        <div class="p-3 bg-subtle border-radius mb-3 flex-between flex-wrap gap-2 text-xs">
          <span>عدد الأسئلة: <strong>${ex.questions ? ex.questions.length : 0} سؤال</strong></span>
          <span>أفضل نتيجة: <strong class="text-emerald">${bestCorrect} / ${ex.questions ? ex.questions.length : 0}</strong></span>
          <span>نقاط مكتسبة: <strong class="text-amber">${bestCorrect * 50} نقطة</strong></span>
        </div>

        <div class="flex-between gap-2 pt-2 border-top flex-wrap">
          ${hasAttempted ? `
            <button class="btn btn-xs btn-outline text-indigo" onclick="viewExamFeedback('${ex.id}')">
              <i class="fa-solid fa-eye"></i> مراجعة التعقيبات
            </button>
          ` : '<span></span>'}
          ${isExhausted ? `
            <button class="btn btn-secondary btn-sm" disabled>
              <i class="fa-solid fa-lock"></i> تم استنفاد 3 محاولات
            </button>
          ` : `
            <button class="btn btn-primary btn-sm" onclick="openStudentExamModal('${ex.id}')">
              <i class="fa-solid fa-pen"></i> بدء الاختبار (${attemptsCount === 0 ? 'المحاولة الأولى' : 'محاولة تحسين'})
            </button>
          `}
        </div>
      </div>
    `;
  }).join('');
}

let activeStudentExam = null;
window.examTimerInterval = null;
let examSecondsRemaining = 0;

function formatExamTimer(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function openStudentExamModal(examId) {
  const ex = (appState.exams || []).find(e => e.id === examId);
  if (!ex) return;

  const st = appState.activeStudent;
  if (!st) return;

  const studentSubs = (appState.examSubmissions || []).filter(s => s.studentId === st.id && s.examId === ex.id);
  if (studentSubs.length >= 3) {
    showToast("لقد استنفذت الحد الأقصى للمحاولات (3 محاولات) لهذا الاختبار!", "error");
    return;
  }

  if (window.examTimerInterval) {
    clearInterval(window.examTimerInterval);
    window.examTimerInterval = null;
  }

  activeStudentExam = ex;
  document.getElementById('st-exam-modal-title').textContent = ex.title;
  document.getElementById('st-exam-modal-desc').textContent = ex.description || 'أجب على الأسئلة التالية واضغط تسليم التقييم.';

  const durationMins = ex.durationMinutes || 15;
  examSecondsRemaining = durationMins * 60;

  const timerClock = document.getElementById('st-exam-timer-clock');
  if (timerClock) timerClock.textContent = formatExamTimer(examSecondsRemaining);

  window.examTimerInterval = setInterval(() => {
    examSecondsRemaining--;
    if (timerClock) timerClock.textContent = formatExamTimer(Math.max(0, examSecondsRemaining));

    if (examSecondsRemaining <= 0) {
      clearInterval(window.examTimerInterval);
      window.examTimerInterval = null;
      showToast("⏱️ انتهى وقت الاختبار المحدد! تم تسليم إجاباتك تلقائياً.", "info");
      submitStudentExam(null);
    }
  }, 1000);

  const container = document.getElementById('st-exam-questions-list');
  if (container && ex.questions) {
    container.innerHTML = ex.questions.map((q, idx) => `
      <div class="card p-3 mb-3 bg-subtle">
        <strong class="text-main block mb-2 font-weight-bold text-sm">س${idx + 1}: ${q.text}</strong>
        ${q.type === 'text' ? `
          <input type="text" name="st-question-${idx}" class="form-control form-control-sm" placeholder="اكتب إجابتك النصية هنا...">
        ` : `
          <div class="flex-column gap-2">
            ${(q.options || []).map((opt, optIdx) => `
              <label class="exam-option-pill flex-align-center gap-2 p-2 border-radius cursor-pointer border">
                <input type="radio" name="st-question-${idx}" value="${optIdx}">
                <span class="text-sm">${opt}</span>
              </label>
            `).join('')}
          </div>
        `}
      </div>
    `).join('');
  }

  openModal('st-exam-modal');
}

function submitStudentExam(event) {
  if (event && event.preventDefault) event.preventDefault();
  if (!activeStudentExam || !appState.activeStudent) return;

  if (window.examTimerInterval) {
    clearInterval(window.examTimerInterval);
    window.examTimerInterval = null;
  }

  const ex = activeStudentExam;
  const st = appState.activeStudent;
  const questions = ex.questions || [];

  const userAnswersReview = [];
  let correctCount = 0;

  questions.forEach((q, idx) => {
    let isCorrect = false;
    let studentAnsText = '';
    let correctAnsText = '';

    if (q.type === 'text') {
      const inputEl = document.querySelector(`input[name="st-question-${idx}"]`);
      studentAnsText = inputEl ? inputEl.value.trim() : '';
      correctAnsText = (q.correctText || '').trim();

      const normStudent = studentAnsText.toLowerCase().replace(/\s+/g, ' ');
      const normCorrect = correctAnsText.toLowerCase().replace(/\s+/g, ' ');
      isCorrect = (normStudent !== '' && (normStudent === normCorrect || normCorrect.includes(normStudent)));
    } else {
      const selected = document.querySelector(`input[name="st-question-${idx}"]:checked`);
      const selectedIdx = selected ? parseInt(selected.value) : -1;
      studentAnsText = selectedIdx >= 0 && q.options && q.options[selectedIdx] ? q.options[selectedIdx] : 'لم تُحدد إجابة';
      correctAnsText = q.options && q.options[q.correctIndex] ? q.options[q.correctIndex] : '';
      isCorrect = (selectedIdx === q.correctIndex);
    }

    if (isCorrect) correctCount++;

    userAnswersReview.push({
      questionText: q.text,
      type: q.type || 'select',
      studentAnswerText: studentAnsText,
      correctAnswerText: correctAnsText,
      isCorrect
    });
  });

  const totalQuestions = questions.length;
  const scorePercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const pointsEarned = correctCount * 50;

  const studentSubs = (appState.examSubmissions || []).filter(s => s.studentId === st.id && s.examId === ex.id);
  const attemptNum = studentSubs.length + 1;

  const submissionRecord = {
    studentId: st.id,
    examId: ex.id,
    score: scorePercent,
    correctAnswers: correctCount,
    totalQuestions,
    attemptNumber: attemptNum,
    userAnswersReview,
    timestamp: new Date().toISOString()
  };

  if (!appState.examSubmissions) appState.examSubmissions = [];
  appState.examSubmissions.push(submissionRecord);

  saveState(true);
  closeModal('st-exam-modal');

  if (typeof confetti === 'function' && scorePercent >= 70) {
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
  }

  showToast(`أحسنت! الإجابات الصحيحة: ${correctCount} من ${totalQuestions} (${scorePercent}%) | +${pointsEarned} نقطة! 🎯`, "success");

  if (typeof renderStudentDashboardView === 'function') {
    renderStudentDashboardView();
  }
  renderStudentExamsView();
  showStudentExamFeedback(submissionRecord, ex.title);
}

function showStudentExamFeedback(submissionRecord, examTitle) {
  const summaryBox = document.getElementById('st-feedback-summary');
  const reviewList = document.getElementById('st-feedback-review-list');
  const subtitle = document.getElementById('st-feedback-subtitle');

  if (subtitle) subtitle.textContent = examTitle;

  if (summaryBox) {
    summaryBox.innerHTML = `
      <div class="flex-between flex-wrap gap-2 text-sm">
        <span>النتيجة الإجمالية: <strong class="text-indigo font-weight-bold block mt-1" style="font-size: 1.5rem;">${submissionRecord.score}%</strong></span>
        <span>الإجابات الصحيحة: <strong class="text-emerald font-weight-bold block mt-1" style="font-size: 1.2rem;">${submissionRecord.correctAnswers} / ${submissionRecord.totalQuestions}</strong></span>
        <span>النقاط المكتسبة: <strong class="text-amber font-weight-bold block mt-1" style="font-size: 1.2rem;">+${submissionRecord.correctAnswers * 50} نقطة</strong></span>
      </div>
    `;
  }

  if (reviewList && submissionRecord.userAnswersReview) {
    reviewList.innerHTML = submissionRecord.userAnswersReview.map((item, idx) => `
      <div class="card p-3 mb-3 ${item.isCorrect ? 'border-emerald' : 'border-rose'} bg-subtle">
        <div class="flex-between mb-2">
          <strong class="text-main text-sm">س${idx + 1}: ${item.questionText}</strong>
          <span class="badge ${item.isCorrect ? 'bg-emerald' : 'bg-rose'} text-xs">
            ${item.isCorrect ? 'إجابة صحيحة +50 نقطة ✅' : 'إجابة خاطئة ❌'}
          </span>
        </div>
        <div class="text-xs flex-column gap-1">
          <div>إجابتك: <strong class="${item.isCorrect ? 'text-emerald' : 'text-rose'}">${item.studentAnswerText || 'لا توجد'}</strong></div>
          ${!item.isCorrect ? `<div class="mt-1">الإجابة النموذجية الصحيحة: <strong class="text-emerald">${item.correctAnswerText}</strong></div>` : ''}
        </div>
      </div>
    `).join('');
  }

  openModal('st-exam-feedback-modal');
}

function viewExamFeedback(examId) {
  const st = appState.activeStudent;
  if (!st) return;
  const ex = (appState.exams || []).find(e => e.id === examId);
  if (!ex) return;

  const studentSubs = (appState.examSubmissions || []).filter(s => s.studentId === st.id && s.examId === ex.id);
  if (studentSubs.length === 0) {
    showToast("لم تقم بإجراء هذا الاختبار بعد!", "info");
    return;
  }

  let bestSub = studentSubs[0];
  studentSubs.forEach(s => {
    if ((s.correctAnswers || 0) > (bestSub.correctAnswers || 0)) bestSub = s;
  });

  showStudentExamFeedback(bestSub, ex.title);
}

