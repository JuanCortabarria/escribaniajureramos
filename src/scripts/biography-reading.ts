// Keep the complete text in HTML; reveal only its decorative copy letter by letter.
const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
const pending = new Map<HTMLElement, number>();
let nextStart = 0;
const finish = (element: HTMLElement) => {
  window.clearTimeout(pending.get(element));
  pending.delete(element);
  element.dataset.readingState = 'complete';
};
const finishActive = () => {
  if (preference.matches || document.documentElement.dataset.motionPaused === 'true') {
    pending.forEach((_, element) => finish(element));
    nextStart = 0;
  }
};
preference.addEventListener('change', finishActive);
new MutationObserver(finishActive).observe(document.documentElement, {
  attributes: true, attributeFilter: ['data-motion-paused'],
});
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const element = entry.target as HTMLElement;
      observer.unobserve(element);
      if (preference.matches || document.documentElement.dataset.motionPaused === 'true') {
        finish(element);
        return;
      }
      const count = element.querySelectorAll('.reading-character').length;
      const step = Math.min(4, 1000 / Math.max(count, 1));
      const now = performance.now();
      const delay = Math.max(0, nextStart - now);
      const duration = count * step + 70;
      nextStart = now + delay + duration + 35;
      element.style.setProperty('--reading-step', `${step}ms`);
      element.style.setProperty('--reading-delay', `${delay}ms`);
      element.closest('li')?.style.setProperty('--reading-delay', `${delay}ms`);
      element.dataset.readingState = 'playing';
      pending.set(element, window.setTimeout(() => finish(element), delay + duration));
    });
  }, { threshold: .15 });
  document.querySelectorAll<HTMLElement>('[data-reading-text]').forEach(element => observer.observe(element));
}
