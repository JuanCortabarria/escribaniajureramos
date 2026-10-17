import { useEffect, useMemo, useRef, useState } from 'react';
import { MoveRight, PhoneCall } from 'lucide-react';

interface HeroProps {
  whatsappUrl: string;
  person: string;
  registration: string;
}

/** The supplied rotating-word hero, adapted to the notary's content and design. */
function Hero({ whatsappUrl, person, registration }: HeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [ready, setReady] = useState(false);
  const [hasRotated, setHasRotated] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(true);
  const titles = useMemo(() => ['Escribanía en Nueva Córdoba.', person], [person]);
  const [firstName, ...lastName] = person.split(' ');
  const moving = ready && reducedMotion === false && !paused;

  useEffect(() => {
    setReady(true);
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion = () => setReducedMotion(preference.matches);
    preference.addEventListener('change', syncMotion);
    syncMotion();
    const syncPause = () => setPaused(document.documentElement.dataset.motionPaused === 'true');
    const syncVisibility = () => setPageVisible(!document.hidden);
    const preferenceObserver = new MutationObserver(syncPause);
    preferenceObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-motion-paused'] });
    syncPause();
    syncVisibility();
    document.addEventListener('visibilitychange', syncVisibility);
    const intersection = 'IntersectionObserver' in window
      ? new IntersectionObserver(entries => setInView(entries.some(entry => entry.isIntersecting)), { threshold: .1 })
      : undefined;
    if (root.current && intersection) intersection.observe(root.current);
    else setInView(true);
    return () => {
      preference.removeEventListener('change', syncMotion);
      preferenceObserver.disconnect();
      intersection?.disconnect();
      document.removeEventListener('visibilitychange', syncVisibility);
    };
  }, []);

  useEffect(() => {
    if (!moving || !inView || !pageVisible) return;
    const timer = window.setTimeout(() => {
      setHasRotated(true);
      setTitleNumber(number => (number + 1) % titles.length);
    }, 2800);
    return () => window.clearTimeout(timer);
  }, [moving, inView, pageVisible, titleNumber, titles.length]);

  return (
    <div ref={root} data-animated-hero>
      <h1 id="hero-title" aria-label={`Escribanía en Nueva Córdoba. ${person}.`}>
        <span className="hero-title-viewport" aria-hidden="true" data-current-title={titles[titleNumber]}>
          {[0, 1].map(index => <span key={index}
            className={`hero-title-slide${index === 1 ? ' hero-title-slide--name' : ''}`}
            data-active={titleNumber === index}
            data-animate={moving && hasRotated}>
            {index === 0 ? <>Escribanía en<br/><em>Nueva Córdoba.</em></> : <>{firstName}<br/><em>{lastName.join(' ')}</em></>}
          </span>)}
        </span>
      </h1>
      <p className="hero-description">Asesoramiento notarial y legal general.</p>
      <div className="hero-actions tw:flex tw:flex-wrap tw:gap-3">
        <a className="hero-action" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><PhoneCall className="hero-phone-icon" size={20} strokeWidth={2} aria-hidden="true"/>Coordiná tu consulta <MoveRight size={18} aria-hidden="true"/></a>
      </div>
      <p className="hero-person">Esc. {person}<span>Registro Notarial N.º {registration}</span></p>
    </div>
  );
}
export { Hero };
