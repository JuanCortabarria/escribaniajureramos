import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  const root = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(true);
  const titles = useMemo(() => ['Escribanía en Nueva Córdoba.', 'Jure Ramos'], []);
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
    const intersection = new IntersectionObserver(entries => setInView(entries.some(entry => entry.isIntersecting)), { threshold: .1 });
    if (root.current) intersection.observe(root.current);
    return () => {
      preference.removeEventListener('change', syncMotion);
      preferenceObserver.disconnect();
      intersection.disconnect();
      document.removeEventListener('visibilitychange', syncVisibility);
    };
  }, []);

  useEffect(() => {
    if (!moving || !inView || !pageVisible) return;
    const timer = window.setTimeout(() => setTitleNumber(number => (number + 1) % titles.length), 2800);
    return () => window.clearTimeout(timer);
  }, [moving, inView, pageVisible, titleNumber, titles.length]);

  return (
    <div ref={root} data-animated-hero>
      <h1 id="hero-title" aria-label="Escribanía en Nueva Córdoba. Jure Ramos.">
        <span className="hero-title-viewport" aria-hidden="true" data-current-title={titles[titleNumber]}>
          {moving ? <LazyMotion features={domAnimation} strict><AnimatePresence initial={false}>
            <m.span className={`hero-title-slide${titleNumber === 1 ? ' hero-title-slide--name' : ''}`} key={titleNumber} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -28 }} transition={{ type: 'spring', stiffness: 90, damping: 21, mass: .8 }}>
              {titleNumber === 0 ? <>Escribanía en<br/><em>Nueva Córdoba.</em></> : <>Jure <em>Ramos</em></>}
            </m.span>
          </AnimatePresence></LazyMotion> : <span className={`hero-title-slide${titleNumber === 1 ? ' hero-title-slide--name' : ''}`}>
            {titleNumber === 0 ? <>Escribanía en<br/><em>Nueva Córdoba.</em></> : <>Jure <em>Ramos</em></>}
          </span>}
        </span>
      </h1>
      <p className="hero-description">Asesoramiento notarial y legal general.</p>
      <div className="hero-actions tw:flex tw:flex-wrap tw:gap-3">
        <Button asChild size="lg" className="hero-action"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><span className="hero-phone-emoji" aria-hidden="true">📲</span>Coordiná tu consulta <MoveRight size={18} aria-hidden="true"/></a></Button>
      </div>
      <p className="hero-person">Esc. {person}<span>Registro Notarial N.º {registration}</span></p>
    </div>
  );
}
export { Hero };
