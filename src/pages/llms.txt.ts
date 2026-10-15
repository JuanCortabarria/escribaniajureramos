import { site } from '../config/site';
import { servicePages, serviceMarkdownPath } from '../config/service-pages';
export function GET() {
  return new Response(`# ${site.name}

> Escribanía en Nueva Córdoba, Argentina. Esc. Solange Jure Ramos, Registro Notarial N.º 132, en ejercicio desde 2002. Asesoramiento notarial y legal general.

Atención para particulares, empresas e inmobiliarias. Consultas y presupuestos por WhatsApp; la escribanía indica los datos necesarios según la gestión. Consultar antes de concurrir.

## Información de la escribanía

- [Servicios, trayectoria y contacto](${site.url}/index.md): Contenido de la portada, ubicación, horarios y preguntas generales.

## Servicios

${servicePages.map(service=>`- [${service.title}](${site.url}${serviceMarkdownPath(service)}): Actuaciones, modalidad de atención y consultas frecuentes.`).join('\n')}
`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
