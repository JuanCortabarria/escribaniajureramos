import { site } from './site';

export const consultation = {
  budget: 'Los presupuestos se solicitan por WhatsApp. Describí la gestión que necesitás y la escribanía te indicará los datos necesarios para evaluar la consulta.',
  visit: 'Antes de concurrir, consultá por WhatsApp. La necesidad de turno y la atención dependen de la gestión y de la disponibilidad.',
  corporate: 'La consulta comienza con una descripción del asunto por WhatsApp. Luego se coordina una reunión cuando corresponde.',
};

export interface ServicePage {
  slug: string;
  serviceIndex: number;
  title: string;
  seoTitle: string;
  description: string;
  introduction: string;
  scopeTitle: string;
  scope: string[];
  guidanceTitle: string;
  guidance: string;
  attention: string;
  faq: { q: string; a: string }[];
}

export const servicePages: ServicePage[] = [
  {
    slug: 'escrituras-inmuebles', serviceIndex: 0,
    title: 'Escrituras y operaciones inmobiliarias',
    seoTitle: 'Escrituras de inmuebles en Córdoba | Jure Ramos',
    description: 'Asesoramiento notarial en compraventas, donaciones y operaciones inmobiliarias en Córdoba. Consultas y presupuestos por WhatsApp con Escribanía Jure Ramos.',
    introduction: 'Asesoramiento notarial para operaciones sobre inmuebles, con atención en Nueva Córdoba. La escribanía evalúa los antecedentes y la documentación que corresponde a cada gestión.',
    scopeTitle: 'Actuaciones sobre inmuebles',
    scope: ['Compraventa de inmuebles', 'Donaciones y permutas', 'Dación en pago y derechos reales', 'Contratos vinculados a operaciones inmobiliarias'],
    guidanceTitle: 'Documentación inicial',
    guidance: 'En general, se requiere la escritura original anterior, los datos de las partes y la documentación del inmueble. Los documentos adicionales dependen de la operación. La escribanía te indicará qué presentar al evaluar tu consulta.',
    attention: consultation.visit,
    faq: site.faq.slice(0, 3),
  },
  {
    slug: 'certificaciones', serviceIndex: 1,
    title: 'Certificación de firmas y copias',
    seoTitle: 'Certificación de firmas y copias en Córdoba | Jure Ramos',
    description: 'Certificación de firmas, copias y actas notariales en Nueva Córdoba. Consultá por WhatsApp la documentación y la disponibilidad antes de concurrir.',
    introduction: 'Certificaciones y actas notariales para particulares, empresas e inmobiliarias. La atención se consulta por WhatsApp antes de concurrir, según la gestión y la disponibilidad.',
    scopeTitle: 'Certificaciones y actas',
    scope: ['Certificación de firmas', 'Certificación de copias', 'Actas notariales'],
    guidanceTitle: 'Qué consultar antes de concurrir',
    guidance: 'Indicá qué documento o gestión necesitás. La escribanía te informará la documentación que corresponde presentar y la modalidad de atención.',
    attention: consultation.visit,
    faq: [site.faq[4], { q: '¿Puedo concurrir sin turno?', a: consultation.visit }, { q: '¿Cómo solicito un presupuesto?', a: consultation.budget }],
  },
  {
    slug: 'sociedades', serviceIndex: 2,
    title: 'Asesoramiento y reestructuración societaria',
    seoTitle: 'Asesoramiento societario en Córdoba | Jure Ramos',
    description: 'Constitución, reestructuración y asesoramiento de sociedades en Córdoba. Consulta inicial por WhatsApp y reunión cuando corresponde, con Solange Jure Ramos.',
    introduction: 'Asesoramiento para la constitución, organización y reestructuración de sociedades. Atención a empresas en Nueva Córdoba, con consulta inicial por WhatsApp y reunión cuando corresponde.',
    scopeTitle: 'Sociedades y empresa',
    scope: ['Constitución de sociedades y SAS', 'Reestructuración y asesoramiento societario', 'Contratos de empresa', 'Empresa familiar y fideicomisos'],
    guidanceTitle: 'Consulta inicial',
    guidance: 'Describí por WhatsApp el asunto societario que necesitás consultar. La escribanía te indicará qué información y documentación corresponde aportar según la gestión.',
    attention: consultation.corporate,
    faq: [
      { q: '¿Cómo se inicia una consulta societaria?', a: consultation.corporate },
      { q: '¿Qué información y documentación necesito presentar?', a: 'La documentación depende del asunto societario. Al recibir la descripción de tu consulta por WhatsApp, la escribanía te indicará los datos y antecedentes necesarios.' },
      { q: '¿Cómo solicito un presupuesto?', a: consultation.budget },
    ],
  },
];

export const servicePath = (service: ServicePage) => `/servicios/${service.slug}/`;
export const serviceMarkdownPath = (service: ServicePage) => `/servicios/${service.slug}.md`;
export const serviceWhatsApp = (service: ServicePage) => `${site.whatsappUrl}%20Mi%20consulta%20es%20sobre%20${encodeURIComponent(service.title)}.`;
