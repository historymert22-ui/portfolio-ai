document.addEventListener('DOMContentLoaded', function() {
      const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
      const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                              if (entry.isIntersecting) {
                                                entry.target.classList.add('visible');
                              }
                });
      }, observerOptions);
      const revealElements = document.querySelectorAll('.reveal, .reveal-delay, .reveal-delay-2');
      revealElements.forEach(el => { observer.observe(el); });
      const cursorBlur = document.querySelector('.cursor-blur');
      if (cursorBlur) {
                document.addEventListener('mousemove', (e) => {
                              const x = e.clientX;
                              const y = e.clientY;
                              cursorBlur.style.transform = `translate(${x - 200}px, ${y - 200}px)`;
                });
      }
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                              e.preventDefault();
                              const targetId = this.getAttribute('href');
                              const targetElement = document.querySelector(targetId);
                              if (targetElement) {
                                                window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
                              }
                });
      });
      window.addEventListener('scroll', () => {
                const nav = document.querySelector('nav');
                if (window.scrollY > 100) {
                              nav.style.background = 'rgba(5, 5, 8, 0.8)';
                              nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
                } else {
                              nav.style.background = 'transparent';
                              nav.style.borderBottom = 'none';
                }
      });
});
