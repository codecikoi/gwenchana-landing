const translations = {
    en: {
      nav_features: "Features",
      nav_faq: "FAQ",
      nav_download: "Download",
      nav_about: "About",
      nav_menu: "Menu",
      hero_heading: "Gwenchana",
      hero_tagline: "Not just another Korean learning app",
      hero_support: "AI tutor makes Korean grammar easier to understand",
      btn_appstore_pretitle: "Download on the",
      btn_appstore: "App Store",
      btn_googleplay_pretitle: "Get it on",
      btn_googleplay: "Google Play",
      features_title: "Why Gwenchana?",
      features_item1: "📚 Structured KIIP lessons",
      features_item2: "🤖 AI tutor explains grammar clearly",
      features_item3: "📝 Practice vocabulary, writing & reading",
      faq_title: "FAQ",
      faq_q1: "Is Gwenchana good for beginners?",
      faq_a1: "Yes, you can start with simple words and guided practice.",
      download_title: "Download Gwenchana",
      download_subtitle: "Start your free trial today.",
      about_title: "Built with learners first",
      about_body: "Gwenchana is created by KIIP alumni and Korean teachers who collaborate with AI engineers. Together we map every lesson to real cultural scenarios so you can learn language that actually lands in conversation.",
      about_card1_title: "Community wisdom",
      about_card1_body: "Weekly focus groups with expats and locals shape the curriculum.",
      about_card2_title: "AI you can trust",
      about_card2_body: "Every explanation is reviewed by certified instructors before launch."
    },
    ru: {
      nav_features: "Возможности",
      nav_faq: "Вопросы",
      nav_download: "Скачать",
      nav_about: "О нас",
      nav_menu: "Меню",
      hero_heading: "Gwenchana",
      hero_tagline: "Не просто очередное приложение для изучения корейского",
      hero_support: "ИИ-репетитор делает корейскую грамматику понятной",
      btn_appstore_pretitle: "Скачать в",
      btn_appstore: "App Store",
      btn_googleplay_pretitle: "Доступно в",
      btn_googleplay: "Google Play",
      features_title: "Почему Gwenchana?",
      features_item1: "📚 Структурированные уроки KIIP",
      features_item2: "🤖 AI-репетитор объясняет грамматику просто",
      features_item3: "📝 Практика слов, письма и чтения",
      faq_title: "Часто задаваемые вопросы",
      faq_q1: "Подходит ли Gwenchana для новичков?",
      faq_a1: "Да, вы можете начать с простых слов и пошаговой практики.",
      download_title: "Скачать Gwenchana",
      download_subtitle: "Начните бесплатный пробный период уже сегодня.",
      about_title: "Создано для учеников",
      about_body: "Команда Gwenchana — выпускники KIIP, преподаватели корейского и инженеры ИИ. Вместе мы привязываем уроки к реальным культурным ситуациям, чтобы вы усваивали язык, который работает в диалоге.",
      about_card1_title: "Мудрость сообщества",
      about_card1_body: "Еженедельные группы экспатов и местных помогают формировать программу.",
      about_card2_title: "Надёжный ИИ",
      about_card2_body: "Каждое объяснение проверяет сертифицированный преподаватель перед релизом."
    },
    ko: {
      nav_features: "기능",
      nav_faq: "자주 묻는 질문",
      nav_download: "다운로드",
      nav_about: "소개",
      nav_menu: "메뉴",
      hero_heading: "Gwenchana",
      hero_tagline: "그저 그런 한국어 학습 앱이 아니에요",
      hero_support: "AI 튜터가 한국어 문법을 더 쉽게 풀어줘요",
      btn_appstore_pretitle: "App Store에서",
      btn_appstore: "앱스토어",
      btn_googleplay_pretitle: "Google Play에서",
      btn_googleplay: "구글 플레이",
      features_title: "왜 Gwenchana?",
      features_item1: "📚 KIIP 단계별 수업",
      features_item2: "🤖 AI 튜터가 문법을 쉽게 설명해줍니다",
      features_item3: "📝 어휘, 쓰기, 읽기 모두 한 앱에서",
      faq_title: "FAQ",
      faq_q1: "초보자에게도 좋나요?",
      faq_a1: "네, 기본 단어와 가이드 연습부터 시작할 수 있습니다.",
      download_title: "Gwenchana 다운로드",
      download_subtitle: "오늘 무료 체험을 시작하세요.",
      about_title: "학습자를 먼저 생각합니다",
      about_body: "Gwenchana는 KIIP 졸업생과 한국어 선생님, AI 엔지니어가 함께 만들었습니다. 모든 레슨을 실제 문화 상황에 맞춰 설계해 대화에서 통하는 표현을 배울 수 있게 해요.",
      about_card1_title: "커뮤니티 인사이트",
      about_card1_body: "주간 포커스 그룹에서 외국인과 현지인이 커리큘럼을 함께 다듬습니다.",
      about_card2_title: "신뢰할 수 있는 AI",
      about_card2_body: "모든 설명은 출시 전에 공인 강사가 검수합니다."
    }
  };
  
  // Metadata for UI: labels and flags
  const languageMeta = {
    en: { label: 'EN', name: 'English', flag: '🇺🇸' },
    ru: { label: 'RU', name: 'Русский', flag: '🇷🇺' },
    ko: { label: 'KO', name: '한국어', flag: '🇰🇷' },
  };

  function updateLangToggleUI(lang) {
    const meta = languageMeta[lang] || languageMeta.en;
    const toggle = document.getElementById('langToggle');
    if (!toggle) return;
    const flagEl = toggle.querySelector('.flag');
    const labelEl = toggle.querySelector('.label');
    if (flagEl) flagEl.textContent = meta.flag;
    if (labelEl) labelEl.textContent = meta.label;

    // Update options selected state
    document.querySelectorAll('.lang-option').forEach(btn => {
      const isSelected = btn.getAttribute('data-lang') === lang;
      const li = btn.closest('li');
      if (li) li.setAttribute('aria-selected', String(isSelected));
      btn.setAttribute('aria-selected', String(isSelected));
    });
  }

  function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const value = translations[lang]?.[key] ?? translations.en?.[key];
      if (typeof value === 'string') {
        el.textContent = value;
      }
    });
    localStorage.setItem("lang", lang); // save choice
    // reflect in UI
    updateLangToggleUI(lang);
    // update html lang attribute
    document.documentElement.setAttribute('lang', lang);
  }
  
  // On load: initialize language and dropdown behavior
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);

    const dropdown = document.getElementById('langDropdown');
    const toggle = document.getElementById('langToggle');
    const menu = document.getElementById('langMenu');
    const header = document.getElementById('appBar');
    const primaryNav = document.getElementById('primaryNav');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (toggle && dropdown && menu) {
      const openMenu = () => {
        dropdown.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
        // focus first selected or first item
        const selected = menu.querySelector('.lang-option[aria-selected="true"]');
        (selected || menu.querySelector('.lang-option'))?.focus?.();
      };
      const closeMenu = () => {
        dropdown.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      };

      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dropdown.classList.contains('open');
        if (isOpen) closeMenu(); else openMenu();
      });

      // Option click
      menu.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const lang = btn.getAttribute('data-lang');
          if (lang) setLanguage(lang);
          closeMenu();
        });
      });

      // Click outside closes
      document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
          closeMenu();
        }
      });

      // Keyboard interactions
      toggle.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openMenu();
        }
      });
      menu.addEventListener('keydown', (e) => {
        const options = Array.from(menu.querySelectorAll('.lang-option'));
        const idx = options.indexOf(document.activeElement);
        if (e.key === 'Escape') { closeMenu(); toggle.focus(); }
        else if (e.key === 'ArrowDown') {
          e.preventDefault();
          const next = options[Math.min(options.length - 1, idx + 1)] || options[0];
          next.focus();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          const prev = options[Math.max(0, idx - 1)] || options[options.length - 1];
          prev.focus();
        } else if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const activeBtn = document.activeElement;
          if (activeBtn && activeBtn.classList.contains('lang-option')) {
            const lang = activeBtn.getAttribute('data-lang');
            if (lang) setLanguage(lang);
            closeMenu();
            toggle.focus();
          }
        }
      });
    }

    if (header) {
      const updateHeaderState = () => {
        const shouldElevate = window.scrollY > 12;
        header.classList.toggle('is-scrolled', shouldElevate);
      };

      updateHeaderState();
      window.addEventListener('scroll', updateHeaderState, { passive: true });
    }

    if (primaryNav && menuToggle && navLinks) {
      const openNavMenu = () => {
        navLinks.classList.add('is-open');
        menuToggle.classList.add('is-open');
        menuToggle.setAttribute('aria-expanded', 'true');
      };

      const closeNavMenu = () => {
        navLinks.classList.remove('is-open');
        menuToggle.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      };

      menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        if (isOpen) closeNavMenu(); else openNavMenu();
      });

      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => closeNavMenu());
      });

      document.addEventListener('click', (event) => {
        if (!primaryNav.contains(event.target)) {
          closeNavMenu();
        }
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
          closeNavMenu();
        }
      });

      primaryNav.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          closeNavMenu();
          menuToggle.focus();
        }
      });
    }
  });
  
