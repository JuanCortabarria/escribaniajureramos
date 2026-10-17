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
  {
    slug: 'familia', serviceIndex: 3,
    title: 'Familia',
    seoTitle: 'Actuaciones notariales de familia en Córdoba | Jure Ramos',
    description: 'Protección de la vivienda, régimen patrimonial, pactos de convivencia y autorizaciones. Consultas notariales de familia en Nueva Córdoba por WhatsApp.',
    introduction: 'Asesoramiento notarial sobre actos y acuerdos familiares, con atención en Nueva Córdoba. Consultas sobre vivienda, régimen patrimonial, convivencia y autorizaciones.',
    scopeTitle: 'Actos y acuerdos familiares',
    scope: ['Protección de la vivienda', 'Régimen patrimonial del matrimonio', 'Uniones convivenciales y pactos de convivencia', 'Autorizaciones para viajar y para conducir'],
    guidanceTitle: 'Información para la consulta',
    guidance: 'Describí por WhatsApp la gestión familiar que necesitás consultar. La escribanía te indicará qué información y documentación corresponde presentar según el trámite.',
    attention: consultation.visit,
    faq: [
      { q: '¿Qué consultas de familia puedo realizar?', a: 'Podés consultar por protección de la vivienda, régimen patrimonial del matrimonio, uniones convivenciales, pactos de convivencia y autorizaciones para viajar o conducir.' },
      { q: '¿Qué documentación necesito presentar?', a: 'La documentación depende de la actuación que necesites. Consultá por WhatsApp antes de concurrir para recibir las indicaciones correspondientes a tu gestión.' },
      { q: '¿Cómo solicito un presupuesto?', a: consultation.budget },
    ],
  },
  {
    slug: 'sucesiones-prevision', serviceIndex: 4,
    title: 'Sucesiones y previsión',
    seoTitle: 'Sucesiones y planificación patrimonial en Córdoba | Jure Ramos',
    description: 'Asesoramiento notarial sobre herencias, cesiones hereditarias, testamentos y actos de autoprotección en Córdoba. Consultas y presupuestos por WhatsApp.',
    introduction: 'Asesoramiento notarial sobre herencias y planificación patrimonial, con atención en Nueva Córdoba. Consultas sobre cesiones de derechos hereditarios, testamentos y actos de previsión personal.',
    scopeTitle: 'Actuaciones sucesorias y de previsión',
    scope: ['Herencias y cesiones de derechos hereditarios', 'Testamentos y legados', 'Actos de autoprotección', 'Directivas médicas anticipadas'],
    guidanceTitle: 'Consulta y antecedentes',
    guidance: 'Describí por WhatsApp el asunto que necesitás consultar. Según la gestión sucesoria o de previsión, la escribanía te indicará qué información y antecedentes corresponde aportar.',
    attention: consultation.visit,
    faq: [
      { q: '¿Puedo consultar sobre testamentos y planificación patrimonial?', a: 'Sí. La escribanía brinda asesoramiento notarial sobre testamentos, legados, cesiones de derechos hereditarios y actos de previsión personal.' },
      { q: '¿Qué antecedentes necesito para la primera consulta?', a: 'Los antecedentes dependen del asunto que se consulta. Al describir tu gestión por WhatsApp, la escribanía te indicará qué información y documentación corresponde presentar.' },
      { q: '¿Cómo solicito un presupuesto?', a: consultation.budget },
    ],
  },
];

export const servicePath = (service: ServicePage) => `/servicios/${service.slug}/`;
export const serviceMarkdownPath = (service: ServicePage) => `/servicios/${service.slug}.md`;
export const serviceWhatsApp = (service: ServicePage) => `${site.whatsappUrl}%20Mi%20consulta%20es%20sobre%20${encodeURIComponent(service.title)}.`;

// Contextual links from the existing home FAQ to the relevant service page.
export const faqServiceLink = (index: number) => {
  const page = index <= 2 ? servicePages[0] : index === 4 ? servicePages[1] : undefined;
  return page ? { href: servicePath(page), label: page.title } : undefined;
};
