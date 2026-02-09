/**
 * Scroll Animations for Gwenchana Landing Page
 * Использует Intersection Observer API для оптимальной производительности
 */

class ScrollAnimations {
  constructor() {
    this.observers = [];
    this.init();
  }

  init() {
    // Проверяем поддержку Intersection Observer
    if (!('IntersectionObserver' in window)) {
      console.warn('Intersection Observer не поддерживается, анимации отключены');
      return;
    }

    // Отключаем анимации на мобильных устройствах для лучшей производительности
    if (this.isMobile()) {
      return;
    }

    this.setupScrollAnimations();
    this.setupParallaxEffects();
  }

  isMobile() {
    return window.innerWidth <= 768;
  }

  setupScrollAnimations() {
    // Настройки для Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px', // Анимация начинается когда элемент на 10% видим
      threshold: 0.1
    };

    // Основной observer для scroll анимаций
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target);
          scrollObserver.unobserve(entry.target); // Анимация только один раз
        }
      });
    }, observerOptions);

    // Находим все элементы с классами анимаций
    const animatedElements = document.querySelectorAll(
      '[class*="scroll-fade"], [class*="scroll-scale"], [class*="scroll-parallax"]'
    );

    animatedElements.forEach(element => {
      scrollObserver.observe(element);
    });

    this.observers.push(scrollObserver);
  }

  setupParallaxEffects() {
    // Параллакс эффекты для декоративных элементов
    const parallaxElements = document.querySelectorAll('.scroll-parallax');
    
    if (parallaxElements.length === 0) return;

    const parallaxObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startParallax(entry.target);
        } else {
          this.stopParallax(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '50% 0px 50% 0px',
      threshold: 0
    });

    parallaxElements.forEach(element => {
      parallaxObserver.observe(element);
    });

    this.observers.push(parallaxObserver);
  }

  animateElement(element) {
    const animationType = this.getAnimationType(element);
    const delay = this.getAnimationDelay(element);

    // Применяем задержку если указана
    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('animate-in');
      }, delay);
    } else {
      element.classList.add('animate-in');
    }
  }

  getAnimationType(element) {
    const classList = element.classList;
    
    if (classList.contains('scroll-fade-up')) return 'fade-up';
    if (classList.contains('scroll-fade-left')) return 'fade-left';
    if (classList.contains('scroll-fade-right')) return 'fade-right';
    if (classList.contains('scroll-scale')) return 'scale';
    
    return 'fade-up'; // По умолчанию
  }

  getAnimationDelay(element) {
    const staggerDelay = element.dataset.staggerDelay;
    const staggerIndex = element.dataset.staggerIndex;
    
    // Если указан конкретный индекс в stagger группе
    if (staggerIndex) {
      return parseInt(staggerIndex) * 150; // 150ms между элементами
    }
    
    // Если указана конкретная задержка
    if (staggerDelay) {
      return parseInt(staggerDelay);
    }
    
    return 0;
  }

  startParallax(element) {
    const speed = parseFloat(element.dataset.parallaxSpeed) || 0.5;
    
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      
      // Параллакс только если элемент в viewport
      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        const yPos = -(scrolled - elementTop) * speed;
        element.style.transform = `translateY(${yPos}px)`;
      }
    };

    element._parallaxHandler = handleScroll;
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  stopParallax(element) {
    if (element._parallaxHandler) {
      window.removeEventListener('scroll', element._parallaxHandler);
      delete element._parallaxHandler;
      element.style.transform = '';
    }
  }

  // Метод для очистки observers при необходимости
  destroy() {
    this.observers.forEach(observer => {
      observer.disconnect();
    });
    this.observers = [];
  }
}

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
  new ScrollAnimations();
});

// Экспорт для возможного использования в других скриптах
window.ScrollAnimations = ScrollAnimations;
