import type { APIRoute } from 'astro';
import { site } from '../../config/site';
import { consultation, servicePages, servicePath, serviceWhatsApp, type ServicePage } from '../../config/service-pages';
export function getStaticPaths() { return servicePages.map(service => ({ params: { slug: service.slug }, props: { service } })); }
export const GET: APIRoute = ({ props }) => {
  const service = props.service as ServicePage;
  const text = `# ${service.title}

${service.introduction}

## ${service.scopeTitle}

${service.scope.map(item=>`- ${item}`).join('\n')}

## ${service.guidanceTitle}

${service.guidance}

## Modalidad de atención

${service.attention}

## Solicitud de presupuesto

${consultation.budget}

## Preguntas frecuentes

${service.faq.map(item=>`### ${item.q}\n\n${item.a}`).join('\n\n')}

## Profesional y contacto

Esc. ${site.person}. Registro Notarial N.º ${site.registration}.

- Dirección: ${site.address}, Nueva Córdoba, Córdoba, Argentina.
- Horario: ${site.hours}.
- Teléfono: ${site.phone}.
- Email: ${site.email}.
- [Consultar por WhatsApp](${serviceWhatsApp(service)}).
- [Página del servicio](${site.url}${servicePath(service)}).
- [Trayectoria profesional](${site.url}/#escribana).

Última actualización: ${site.updated}.
`;
  return new Response(text, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
