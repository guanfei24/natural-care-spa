document.addEventListener('DOMContentLoaded', () => {
  // 设置当前年份
  document.getElementById('year').textContent = new Date().getFullYear();

  // 滚动观察器：元素进入时淡入
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
});