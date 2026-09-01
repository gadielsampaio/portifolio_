/* Progressive enhancement: text is visible before, during and without this script. */
(() => {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (preference.matches || !('IntersectionObserver' in window) || !Element.prototype.animate) return;

  const active = new Set();
  const play = (element, keyframes, duration = 620) => {
    if (preference.matches || element.matches(':focus-within')) return;
    const animation = element.animate(keyframes, {
      duration,
      easing: 'cubic-bezier(.2, .7, .2, 1)',
      fill: 'none'
    });
    active.add(animation);
    animation.finished.then(() => active.delete(animation), () => active.delete(animation));
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;
      if (target.classList.contains('experience-trace')) {
        play(target, [{ transform: 'scaleY(0)' }, { transform: 'scaleY(1)' }], 850);
      } else {
        play(target, [{ transform: 'translateY(16px)' }, { transform: 'translateY(0)' }]);
      }
      observer.unobserve(target);
    });
  }, { threshold: .08 });

  document.querySelectorAll('.hero-copy, .portrait, .section-heading, .project-lead, .project-secondary article, .experience-row, .experience-trace, .competency-grid > div, .about-grid, .case-header, .case-section').forEach(element => observer.observe(element));

  const marks = document.querySelector('.registration-marks');
  if (marks) play(marks, [{ opacity: 0 }, { opacity: 1 }], 900);

  preference.addEventListener('change', event => {
    if (!event.matches) return;
    observer.disconnect();
    active.forEach(animation => animation.cancel());
    active.clear();
  });

  // Focus and printing never wait for an animation to finish.
  document.addEventListener('focusin', () => {
    active.forEach(animation => {
      const target = animation.effect.target;
      if (target && target.contains(document.activeElement)) animation.cancel();
    });
  });
  window.addEventListener('beforeprint', () => active.forEach(animation => animation.cancel()));
})();
