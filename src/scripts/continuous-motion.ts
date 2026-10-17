// Two synchronized, keyboard-accessible controls pause the continuous effects.
const controls = document.querySelectorAll<HTMLButtonElement>('[data-motion-toggle]');
const syncControls = () => {
  const paused = document.documentElement.dataset.motionPaused === 'true';
  controls.forEach(button => {
    button.setAttribute('aria-pressed', String(paused));
    button.textContent = paused ? 'Reanudar movimiento' : 'Pausar movimiento';
  });
};
document.addEventListener('motion-preference-change', syncControls);
controls.forEach(control => {
  control.hidden = false;
  control.addEventListener('click', () => {
    const paused = document.documentElement.dataset.motionPaused !== 'true';
    document.documentElement.dataset.motionPaused = String(paused);
    syncControls();
  });
});
