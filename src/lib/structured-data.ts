import type { Thing, Graph, Notary, Person, WebSite, WebPage, Service, BreadcrumbList, FAQPage, Book } from 'schema-dts';
import { site } from '../config/site';
import { book } from '../config/book';
import type { ServicePage } from '../config/service-pages';

export function structuredData(canonical: string, title: string, service?: ServicePage): Graph {
  const business: Notary = {
    '@type': 'Notary', '@id': `${site.url}/#escribania`, name: site.name, url: site.url,
    telephone: site.whatsapp.replace(/[^+\d]/g, ''), email: site.email, image: `${site.url}/images/solange-jure-ramos.webp`,
    address: { '@type': 'PostalAddress', streetAddress: site.address, addressLocality: site.city, addressRegion: 'Córdoba', postalCode: site.postalCode, addressCountry: 'AR' },
    geo: { '@type': 'GeoCoordinates', latitude: site.latitude, longitude: site.longitude }, hasMap: site.maps,
    openingHoursSpecification: site.openingHours.map(hours => ({ '@type': 'OpeningHoursSpecification' as const, dayOfWeek: [...hours.days], opens: hours.opens, closes: hours.closes })),
  };
  const person: Person = { '@type': 'Person', '@id': `${site.url}/#solange`, name: site.person, jobTitle: 'Escribana', description: `Escribana titular del Registro Notarial N.º ${site.registration}, en ejercicio desde ${site.since}. ${site.credentials.join(' · ')}.`, worksFor: { '@id': `${site.url}/#escribania` } };
  const website: WebSite = { '@type': 'WebSite', '@id': `${site.url}/#website`, name: site.name, url: site.url, inLanguage: 'es-AR', publisher: { '@id': `${site.url}/#escribania` } };
  const nodes: Thing[] = [business, person, website];
  const home = canonical === `${site.url}/`;
  const bookPage = canonical === `${site.url}/libro/`;
  if (home || service || bookPage) {
    const page: WebPage = { '@type': 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: title, inLanguage: 'es-AR', isPartOf: { '@id': `${site.url}/#website` }, about: { '@id': service ? `${canonical}#service` : bookPage ? `${canonical}#book` : `${site.url}/#escribania` } };
    nodes.push(page);
    const faqs = service ? service.faq : home ? site.faq : [];
    if (faqs.length) {
      const faq: FAQPage = { '@type': 'FAQPage', '@id': `${canonical}#preguntas`, isPartOf: { '@id': `${canonical}#webpage` }, mainEntity: faqs.map(item => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
      nodes.push(faq);
    }
  }
  if (bookPage) {
    const publication: Book = { '@type': 'Book', '@id': `${canonical}#book`, name: book.title, author: { '@id': `${site.url}/#solange` }, publisher: { '@type': 'Organization', name: book.publisher }, url: canonical, image: `${site.url}/images/libro-cafe-1000.webp`, inLanguage: 'es-AR' };
    nodes.push(publication);
  }
  if (service) {
    const entity: Service = { '@type': 'Service', '@id': `${canonical}#service`, name: service.title, description: service.introduction, url: canonical, provider: { '@id': `${site.url}/#escribania` }, areaServed: { '@type': 'City', name: 'Córdoba' } };
    const breadcrumbs: BreadcrumbList = { '@type': 'BreadcrumbList', '@id': `${canonical}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${site.url}/` }, { '@type': 'ListItem', position: 2, name: service.title, item: canonical }] };
    nodes.push(entity, breadcrumbs);
  }
  return { '@context': 'https://schema.org', '@graph': nodes };
}
