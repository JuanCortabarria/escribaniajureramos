import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import { MoveRight, PhoneCall, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  whatsappUrl: string;
  phoneHref: string;
  person: string;
  registration: string;
}

/** The supplied rotating-word hero, adapted to the notary's content and design. */
function Hero({ whatsappUrl, phoneHref, person, registration }: HeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [ready, setReady] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(true);
  const titles = useMemo(() => ['Inmuebles', 'Certificaciones', 'Sociedades'], []);
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

  const toggleMotion = () => {
    document.documentElement.dataset.motionPaused = String(!paused);
    document.dispatchEvent(new Event('motion-preference-change'));
  };

  return (
    <div ref={root} data-animated-hero>
      <h1 id="hero-title"><span className="title-line"><span data-title-line>Escribanía en</span></span>{' '}<span className="title-line"><em data-title-line>Nueva Córdoba.</em></span></h1>
      <p className="hero-description">Asesoramiento notarial y legal general.</p>
      <div className="hero-specialties">
        <div className="hero-specialties-top"><span>ÁREAS DE PRÁCTICA</span>
          {ready && reducedMotion === false ? <Button type="button" variant="ghost" size="icon" className="hero-rotation-toggle" onClick={toggleMotion} aria-label={paused ? 'Reanudar movimiento' : 'Pausar movimiento'} aria-pressed={paused}>
            {paused ? <Play size={13} aria-hidden="true"/> : <Pause size={13} aria-hidden="true"/>}
          </Button> : null}
        </div>
        <span className="hero-specialties-accessible">Inmuebles, certificaciones y sociedades.</span>
        <div className="hero-rotating-word" aria-hidden="true" data-current-area={titles[titleNumber]}>
          {moving ? <LazyMotion features={domAnimation} strict><AnimatePresence initial={false} mode="popLayout">
            <m.span key={titleNumber} initial={moving ? { opacity: 0, y: 28 } : false} animate={{ opacity: 1, y: 0 }} exit={moving ? { opacity: 0, y: -28 } : { opacity: 0 }} transition={moving ? { type: 'spring', stiffness: 90, damping: 21, mass: .8 } : { duration: 0 }}>
              {titles[titleNumber]}
            </m.span>
          </AnimatePresence></LazyMotion> : <span>{titles[titleNumber]}</span>}
        </div>
      </div>
      <div className="hero-actions tw:flex tw:flex-wrap tw:gap-3">
        <Button asChild size="lg" className="hero-action"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Coordiná tu consulta <MoveRight size={18} aria-hidden="true"/></a></Button>
        <Button asChild variant="outline" size="lg" className="hero-action hero-call"><a href={`tel:${phoneHref}`}><PhoneCall size={16} aria-hidden="true"/>Llamar</a></Button>
      </div>
      <p className="hero-person">Esc. {person}<span>Registro Notarial N.º {registration}</span></p>
    </div>
  );
}
export { Hero };
