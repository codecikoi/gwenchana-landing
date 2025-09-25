const translations = {
    en: {
      nav_features: "Features",
      nav_faq: "FAQ",
      nav_download: "Download",
      hero_title: "Learn Korean smarter with AI",
      hero_subtitle: "Prepare for KIIP levels with vocabulary, grammar, writing & reading.",
      btn_appstore: "App Store",
      btn_googleplay: "Google Play",
      features_title: "Why Gwenchana?",
      features_item1: "📚 Structured KIIP lessons",
      features_item2: "🤖 AI tutor explains grammar clearly",
      features_item3: "📝 Practice vocabulary, writing & reading",
      faq_title: "FAQ",
      faq_q1: "Is Gwenchana good for beginners?",
      faq_a1: "Yes, you can start with simple words and guided practice.",
      download_title: "Download Gwenchana",
      download_subtitle: "Start your free trial today."
    },
    ru: {
      nav_features: "Возможности",
      nav_faq: "Вопросы",
      nav_download: "Скачать",
      hero_title: "Изучай корейский умнее с помощью ИИ",
      hero_subtitle: "Подготовься к уровням KIIP: слова, грамматика, письмо и чтение.",
      btn_appstore: "App Store",
      btn_googleplay: "Google Play",
      features_title: "Почему Gwenchana?",
      features_item1: "📚 Структурированные уроки KIIP",
      features_item2: "🤖 AI-репетитор объясняет грамматику просто",
      features_item3: "📝 Практика слов, письма и чтения",
      faq_title: "Часто задаваемые вопросы",
      faq_q1: "Подходит ли Gwenchana для новичков?",
      faq_a1: "Да, вы можете начать с простых слов и пошаговой практики.",
      download_title: "Скачать Gwenchana",
      download_subtitle: "Начните бесплатный пробный период уже сегодня."
    },
    ko: {
      nav_features: "기능",
      nav_faq: "자주 묻는 질문",
      nav_download: "다운로드",
      hero_title: "AI와 함께 더 똑똑하게 한국어 배우기",
      hero_subtitle: "KIIP 단계별 단어, 문법, 쓰기, 읽기를 준비하세요.",
      btn_appstore: "앱스토어",
      btn_googleplay: "구글 플레이",
      features_title: "왜 Gwenchana?",
      features_item1: "📚 KIIP 단계별 수업",
      features_item2: "🤖 AI 튜터가 문법을 쉽게 설명해줍니다",
      features_item3: "📝 어휘, 쓰기, 읽기 모두 한 앱에서",
      faq_title: "FAQ",
      faq_q1: "초보자에게도 좋나요?",
      faq_a1: "네, 기본 단어와 가이드 연습부터 시작할 수 있습니다.",
      download_title: "Gwenchana 다운로드",
      download_subtitle: "오늘 무료 체험을 시작하세요."
    }
  };
  
  function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = translations[lang][key];
    });
    localStorage.setItem("lang", lang); // сохраняем выбор
  }
  
  // При загрузке
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);
  });
  