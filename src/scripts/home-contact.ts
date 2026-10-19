export {};
// Avoid covering the photo's service link while the main contact action is visible.
const action = document.querySelector('.hero-actions');
if (action && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    document.body.dataset.showContactShortcut = String(!entries.some(entry => entry.isIntersecting));
  });
  observer.observe(action);
}
