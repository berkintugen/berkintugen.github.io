const translations = {
  tr: {
    title: "Berkin Ekin Tügen — Mekatronik Mühendisi",
    tagline: "Mekatronik Mühendisi",
    about_title: "Hakkımda",
    about_text:
      "Üretim ve lojistik süreçleri için yazılım çözümleri geliştiriyorum. Full-stack yazılım geliştirici ve veritabanı yöneticisiyim.",
    work_title: "Neler Yapıyorum",
    item1_title: "Saha yönetim sistemleri (Shopfloor management)",
    item1_text:
      "ERP sisteminizle entegre, masaüstü ve mobilde çalışan çözümler.",
    item1_link: "Detaylar",
    item2_title: "Yapay zekâ destekli otomasyon iş akışları",
    item2_text:
      "Kalite kontrol sistemleri ve yapay zekâ destekli çağrı merkezi asistanları.",
    contact_title: "İletişim",
  },
  en: {
    title: "Berkin Ekin Tügen — Mechatronics Engineer",
    tagline: "Mechatronics Engineer",
    about_title: "About me",
    about_text:
      "I build software solutions for manufacturing and logistics. Full-stack developer and database administrator.",
    work_title: "What I do",
    item1_title: "Shopfloor management systems",
    item1_text:
      "Integrated with your ERP, available on desktop and mobile.",
    item1_link: "Learn more",
    item2_title: "AI-powered automated workflows",
    item2_text:
      "Quality assurance systems and AI-driven call center agents.",
    contact_title: "Contact",
  },
  de: {
    title: "Berkin Ekin Tügen — Mechatronik-Ingenieur",
    tagline: "Mechatronik-Ingenieur",
    about_title: "Über mich",
    about_text:
      "Ich entwickle Softwarelösungen für Fertigung und Logistik. Full-Stack-Entwickler und Datenbankadministrator.",
    work_title: "Was ich mache",
    item1_title: "Shopfloor-Management-Systeme",
    item1_text:
      "Integriert in Ihr ERP, verfügbar für Desktop und Mobilgeräte.",
    item1_link: "Mehr erfahren",
    item2_title: "KI-gestützte automatisierte Workflows",
    item2_text:
      "Qualitätssicherungssysteme und KI-gestützte Callcenter-Agenten.",
    contact_title: "Kontakt",
  },
};

const SUPPORTED_LANGS = Object.keys(translations);
const STORAGE_KEY = "lang";

function getStoredLang() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function setStoredLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // localStorage kullanılamıyorsa (gizli sekme vb.) sessizce yok say
  }
}

function detectLanguage() {
  const saved = getStoredLang();
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;

  const browserLang = (navigator.language || "en").slice(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(browserLang) ? browserLang : "en";
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.documentElement.lang = lang;
  document.title = dict.title;

  document.querySelectorAll(".dil-secici button").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.setAttribute("aria-current", String(isActive));
  });

  setStoredLang(lang);
}

document.querySelectorAll(".dil-secici button").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLanguage(btn.getAttribute("data-lang"));
  });
});

applyLanguage(detectLanguage());
