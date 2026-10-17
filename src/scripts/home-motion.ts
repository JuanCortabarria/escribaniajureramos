export {};
// Native animations enhance the existing HTML; content is never hidden by CSS.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const activeAnimations = new Set<Animation>();
const easing = 'cubic-bezier(.22, 1, .36, 1)';

function animate(element: Element, frames: Keyframe[], options: KeyframeAnimationOptions) {
  const animation = element.animate(frames, options);
  activeAnimations.add(animation);
  const cleanup = () => activeAnimations.delete(animation);
  animation.addEventListener('finish', cleanup, { once: true });
  animation.addEventListener('cancel', cleanup, { once: true });
  return animation;
}

const motionDisabled = () => motionPreference.matches || document.documentElement.dataset.motionPaused === 'true';
const finishActive = () => {
  if (motionDisabled()) activeAnimations.forEach(animation => animation.finish());
};
motionPreference.addEventListener('change', finishActive);
new MutationObserver(finishActive).observe(document.documentElement, {
  attributes: true, attributeFilter: ['data-motion-paused'],
});

if ('IntersectionObserver' in window && 'animate' in Element.prototype) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      if (motionDisabled()) continue;
      const element = entry.target;
      if (element.matches('#hero-title, #about-title')) {
        const isHero = element.matches('#hero-title');
        element.querySelectorAll('[data-title-line]').forEach((line, index) => {
          animate(line, isHero
            ? [{ opacity: .65, transform: 'translateY(28%)' }, { opacity: 1, transform: 'translateY(0)' }]
            : [{ transform: 'translateY(105%)' }, { transform: 'translateY(0)' }],
            { duration: isHero ? 560 : 720, delay: index * (isHero ? 60 : 100), easing, fill: 'backwards' });
        });
      } else if (element.matches('.hero-visual img')) {
        animate(element, [{ transform: 'scale(1.018)' }, { transform: 'scale(1)' }],
          { duration: 800, easing });
      } else if (element.matches('.hero-description, .hero-copy > .button, .hero-person, .hero-visual .services-jump-group')) {
        const delay = element.matches('.hero-copy > .button') ? 160
          : element.matches('.hero-person') ? 200 : 90;
        animate(element, [
          { opacity: .65, transform: 'translateY(8px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 420, delay, easing, fill: 'backwards' });
      } else if (element.matches('.portrait-wrap > picture')) {
        animate(element, [
          { clipPath: 'inset(0 0 14% 0)', transform: 'translateY(16px)' },
          { clipPath: 'inset(0 0 0 0)', transform: 'translateY(0)' },
        ], { duration: 850, easing });
      } else {
        const siblings = element.parentElement ? Array.from(element.parentElement.children) : [];
        const delay = element.matches('.service-card, .service-help') ? (siblings.indexOf(element) % 3) * 70 : 0;
        animate(element, [
          { opacity: .35, transform: 'translateY(18px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 600, delay, easing, fill: 'backwards' });
      }
    }
  }, { threshold: .12 });

  document.querySelectorAll('#hero-title, #about-title, .hero-visual img, .hero-description, .hero-copy > .button, .hero-person, .hero-visual .services-jump-group, .portrait-wrap > picture, main h2:not(#about-title), .service-card, .service-help, .book-visual, .book-teaser')
    .forEach(element => observer.observe(element));

  // Preserve native details semantics and keyboard activation, including rapid toggles.
  document.querySelectorAll<HTMLDetailsElement>('.faq-list details').forEach(details => {
    const summary = details.querySelector('summary');
    if (!summary) return;
    let current: Animation | undefined;
    let expanded = details.open;
    summary.addEventListener('click', event => {
      if (motionDisabled()) return;
      event.preventDefault();
      const from = details.getBoundingClientRect().height;
      if (!current) expanded = details.open;
      expanded = !expanded;
      current?.cancel();
      details.style.height = '';
      details.style.overflow = 'hidden';
      details.open = true;
      const to = expanded ? details.getBoundingClientRect().height : summary.getBoundingClientRect().height + 1;
      current = animate(details, [{ height: `${from}px` }, { height: `${to}px` }],
        { duration: 280, easing: 'cubic-bezier(.4, 0, .2, 1)' });
      current.addEventListener('finish', () => {
        details.open = expanded;
        details.style.height = '';
        details.style.overflow = '';
        current = undefined;
      }, { once: true });
    });
  });
}
