const translations = {
  tr: {
    title: "Berkin Ekin Tügen — Mekatronik Mühendisi",
    nav_about: "Hakkımda",
    nav_projects: "Projeler",
    nav_contact: "İletişim",
    hero_title: "Mekatronik Mühendisi",
    hero_text:
      "Üretim ve lojistik için yazılım geliştiriyorum — saha yönetim sistemleri, yapay zekâ destekli iş akışları ve arasındaki her şey.",
    about_label: "Hakkımda",
    about_title: "Hakkımda",
    about_text:
      "Üretim ve lojistik süreçleri için yazılım çözümleri geliştiriyorum. Full-stack yazılım geliştirici ve veritabanı yöneticisiyim.",
    work_label: "Hizmetler",
    work_title: "Neler Yapıyorum",
    item1_title: "Saha yönetim sistemleri (Shopfloor management)",
    item1_text:
      "ERP sisteminizle entegre, masaüstü ve mobilde çalışan çözümler.",
    item2_title: "Yapay zekâ destekli otomasyon iş akışları",
    item2_text:
      "Kalite kontrol sistemleri ve yapay zekâ destekli çağrı merkezi asistanları.",
    projects_label: "Portföy",
    projects_title: "Projeler",
    projects_empty: "Yakında yeni projeler eklenecek.",
    contact_label: "İletişime geç",
    contact_title: "İletişim",
  },
  en: {
    title: "Berkin Ekin Tügen — Mechatronics Engineer",
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_title: "Mechatronics Engineer",
    hero_text:
      "I build software for manufacturing and logistics — shopfloor systems, AI-powered workflows, and everything in between.",
    about_label: "About",
    about_title: "About me",
    about_text:
      "I build software solutions for manufacturing and logistics. Full-stack developer and database administrator.",
    work_label: "Services",
    work_title: "What I do",
    item1_title: "Shopfloor management systems",
    item1_text: "Integrated with your ERP, available on desktop and mobile.",
    item2_title: "AI-powered automated workflows",
    item2_text:
      "Quality assurance systems and AI-driven call center agents.",
    projects_label: "Portfolio",
    projects_title: "Projects",
    projects_empty: "New projects coming soon.",
    contact_label: "Get in touch",
    contact_title: "Contact",
  },
  de: {
    title: "Berkin Ekin Tügen — Mechatronik-Ingenieur",
    nav_about: "Über mich",
    nav_projects: "Projekte",
    nav_contact: "Kontakt",
    hero_title: "Mechatronik-Ingenieur",
    hero_text:
      "Ich entwickle Software für Fertigung und Logistik — Shopfloor-Systeme, KI-gestützte Workflows und alles dazwischen.",
    about_label: "Über mich",
    about_title: "Über mich",
    about_text:
      "Ich entwickle Softwarelösungen für Fertigung und Logistik. Full-Stack-Entwickler und Datenbankadministrator.",
    work_label: "Leistungen",
    work_title: "Was ich mache",
    item1_title: "Shopfloor-Management-Systeme",
    item1_text:
      "Integriert in Ihr ERP, verfügbar für Desktop und Mobilgeräte.",
    item2_title: "KI-gestützte automatisierte Workflows",
    item2_text:
      "Qualitätssicherungssysteme und KI-gestützte Callcenter-Agenten.",
    projects_label: "Portfolio",
    projects_title: "Projekte",
    projects_empty: "Bald kommen neue Projekte.",
    contact_label: "Kontakt aufnehmen",
    contact_title: "Kontakt",
  },
};

// ============================================================
// PROJELER
// ------------------------------------------------------------
// Yeni bir proje eklemek için:
//
//   1) Resmi "images/projects/" klasörüne koy.
//      Önerilen boyut: 1200x675 (16:9), format: .jpg / .png / .webp
//      Örn: images/projects/benim-projem.jpg
//
//   2) Aşağıdaki "projects" dizisine yeni bir obje ekle.
//      Mevcut objelerden birini kopyalayıp doldurabilirsin.
//
//   3) Her dil (tr, en, de) için "title" ve "description" doldur.
//
// Alanlar:
//   id          -> benzersiz kimlik (küçük harf, tire ile, örn: "shopfloor")
//   image       -> resim yolu; boş bırakırsan ("") baş harflerle placeholder gösterilir
//   link        -> opsiyonel dış link (canlı demo, GitHub vs.); boşsa kart tıklanamaz
//   tr / en / de -> her dil için { title, description }
// ============================================================
const projects = [
  {
    id: "ornek-proje",
    image: "", // örn: "images/projects/ornek.jpg" — boşsa placeholder gösterilir
    link: "", // örn: "https://github.com/berkintugen/ornek" — boşsa link olmaz
    tr: {
      title: "Örnek Proje",
      description:
        "Bu bir örnek karttır. Kendi projeni eklemek için script.js dosyasındaki 'projects' dizisini düzenle.",
    },
    en: {
      title: "Example Project",
      description:
        "This is a sample card. To add your own project, edit the 'projects' array in script.js.",
    },
    de: {
      title: "Beispielprojekt",
      description:
        "Dies ist eine Beispielkarte. Um dein eigenes Projekt hinzuzufügen, bearbeite das 'projects'-Array in script.js.",
    },
  },
];

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

function getInitials(text) {
  return text
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function renderProjects(lang) {
  const container = document.getElementById("proje-izgara");
  if (!container) return;

  container.innerHTML = "";

  if (!projects.length) {
    const bos = document.createElement("p");
    bos.className = "proje-bos-durum";
    bos.textContent =
      translations[lang]?.projects_empty || translations.en.projects_empty;
    container.appendChild(bos);
    return;
  }

  const fragment = document.createDocumentFragment();

  projects.forEach((proje) => {
    const content = proje[lang] || proje.en || proje.tr;
    const title = content?.title || "";
    const description = content?.description || "";
    const hasLink = Boolean(proje.link);

    const kart = document.createElement(hasLink ? "a" : "article");
    kart.className = "proje-kart" + (hasLink ? " proje-kart--baglanti" : "");
    kart.dataset.projectId = proje.id;

    if (hasLink) {
      kart.href = proje.link;
      kart.target = "_blank";
      kart.rel = "noopener noreferrer";
    }

    if (proje.image) {
      const img = document.createElement("img");
      img.className = "proje-kart-gorsel";
      img.src = proje.image;
      img.alt = title;
      img.loading = "lazy";
      kart.appendChild(img);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "proje-kart-gorsel proje-kart-gorsel--bos";
      placeholder.setAttribute("aria-hidden", "true");
      placeholder.textContent = getInitials(title) || "◆";
      kart.appendChild(placeholder);
    }

    const govde = document.createElement("div");
    govde.className = "proje-kart-govde";

    const baslik = document.createElement("h3");
    baslik.className = "proje-kart-baslik";
    baslik.textContent = title;

    const aciklama = document.createElement("p");
    aciklama.className = "proje-kart-aciklama";
    aciklama.textContent = description;

    govde.appendChild(baslik);
    govde.appendChild(aciklama);
    kart.appendChild(govde);

    fragment.appendChild(kart);
  });

  container.appendChild(fragment);
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

  renderProjects(lang);

  setStoredLang(lang);
}

document.querySelectorAll(".dil-secici button").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLanguage(btn.getAttribute("data-lang"));
  });
});

applyLanguage(detectLanguage());
