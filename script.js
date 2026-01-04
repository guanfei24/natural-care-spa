document.addEventListener('DOMContentLoaded', () => {
  // 1. 滚动淡入效果 (Intersection Observer)
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        // 观察后即可停止，避免重复动画
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 为所有需要动画的元素添加属性并观察
  const animateElements = document.querySelectorAll('.card, .trustCard, .priceCard, .section__head, .about__content, .form');
  animateElements.forEach(el => {
    el.setAttribute('data-animate', '');
    observer.observe(el);
  });

  // 2. 顶部导航栏滚动效果
  const topbar = document.querySelector('.topbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      topbar.style.padding = '0.2rem 0';
      topbar.style.backgroundColor = 'rgba(11, 12, 15, 0.98)';
    } else {
      topbar.style.padding = '0';
      topbar.style.backgroundColor = 'rgba(11, 12, 15, 0.75)';
    }
  });

  // 3. 表单提交简单反馈
  const contactForm = document.querySelector('.form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button');
      const originalText = btn.textContent;

      btn.textContent = 'Sending...';
      btn.style.opacity = '0.7';

      // 模拟发送延迟
      setTimeout(() => {
        alert('Thank you! Your booking request has been sent. We will contact you shortly.');
        btn.textContent = originalText;
        btn.style.opacity = '1';
        contactForm.reset();
      }, 1500);
    });
  }
});