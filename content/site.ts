import type { Locale } from "@/lib/i18n";

export type SocialLink = {
  label: string;
  href: string;
};

export type ProfileItem = {
  title: string;
  body: string;
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  summary: string;
  bullets: string[];
};

export type SiteContent = {
  name: string;
  role: string;
  location: string;
  email: string;
  domain: string;
  intro: string;
  availability: string;
  socialLinks: SocialLink[];
  profileItems: ProfileItem[];
  skills: string[];
  experience: ExperienceItem[];
};

export type UiCopy = {
  nav: {
    home: string;
    resume: string;
    portfolio: string;
    contact: string;
  };
  switcher: {
    es: string;
    en: string;
  };
  hero: {
    eyebrow?: string;
    title: string[];
    primaryCta: string;
    secondaryCta: string;
    notesTitle: string;
    location: string;
    focus: string;
    focusValue: string;
    note: string;
  };
  profile: {
    eyebrow: string;
    title: string;
    description: string;
    mediaLabel: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    viewAll: string;
    cardLabel: string;
    viewProject: string;
    viewCode: string;
    pageTitle: string;
    pageDescription: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    introLabel: string;
    formLabel: string;
    intents: Array<{
      id: "work" | "collaboration" | "hello";
      title: string;
      description: string;
    }>;
    activeIntentLabel: string;
    fields: {
      name: string;
      email: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      message: Record<"work" | "collaboration" | "hello", string>;
    };
    submit: string;
    sending: string;
    success: string;
    error: string;
    turnstile: {
      label: string;
      expired: string;
      error: string;
      missing: string;
    };
  };
  resume: {
    eyebrow: string;
    contact: string;
    links: string;
    skills: string;
  };
  root: {
    title: string;
    description: string;
    esCta: string;
    enCta: string;
  };
};

export const siteContent: Record<Locale, SiteContent> = {
  es: {
    name: "Jordi Granada Rubio",
    role: "Frontend Developer, SCADA Developer & IT Support Specialist",
    location: "Banff, Alberta / Remote",
    email: "jordigranadarubio@gmail.com",
    domain: "jordi.is-a.dev",
    intro:
      "Cuento con 14 años de experiencia en informática, combinando desarrollo web, sistemas SCADA, soporte técnico y operaciones IT. He trabajado en entornos industriales, e-commerce y soporte enterprise.",
    availability: "Disponible para roles en desarrollo web, soporte IT y entornos técnicos híbridos.",
    socialLinks: [
      { label: "GitHub", href: "https://github.com/jordig20" },
      { label: "LinkedIn", href: "https://linkedin.com/in/tu-perfil" },
      { label: "Email", href: "mailto:jordigranadarubio@gmail.com" }
    ],
    profileItems: [
      {
        title: "Perfil técnico híbrido",
        body: "14 años entre desarrollo web, soporte técnico, sistemas y automatización industrial."
      },
      {
        title: "Outdoor",
        body: "Ski, running, hiking y mountain bike. Vivo en Banff y gran parte de mi energía fuera del trabajo está en la montaña."
      },
      {
        title: "Música",
        body: "Producción musical, mezcla y mastering como parte de mi lado más creativo y técnico."
      },
      {
        title: "Tecnología",
        body: "Más allá del trabajo, sigo construyendo cosas: apps, automatizaciones, self-hosting y sistemas con Raspberry Pi, Docker o Node-RED."
      },
      {
        title: "Aprendizaje",
        body: "Siempre estoy aprendiendo: trying to improve my English, explorar nuevas tecnologías y seguir afinando criterio técnico y creativo."
      }
    ],
    skills: [
      "JavaScript",
      "Python",
      "Angular 8",
      "NestJS",
      "MongoDB",
      "PostgreSQL",
      "Ignition SCADA",
      "Node-RED",
      "Prestashop",
      "WordPress",
      "Microsoft 365",
      "Technical Support",
      "Network Troubleshooting",
      "Node.js",
      "VPN Configuration"
    ],
    experience: [
      {
        period: "2025 - 2026",
        role: "Technical Support Specialist",
        company: "Banff Centre",
        summary:
          "Soporte IT a usuarios finales en entorno enterprise híbrido, con gestión de dispositivos, troubleshooting de red y administración de Microsoft 365.",
        bullets: [
          "Soporte técnico diario a usuarios y resolución de incidencias de hardware y software.",
          "Gestión de dispositivos y cuentas en un entorno corporativo híbrido.",
          "Troubleshooting de red y soporte sobre herramientas Microsoft 365."
        ]
      },
      {
        period: "2021 - 2023",
        role: "SCADA Developer",
        company: "ASL Control",
        summary:
          "Desarrollo de aplicaciones industriales para control de plantas fotovoltaicas y redes de abastecimiento de agua, combinando software, redes y mantenimiento técnico.",
        bullets: [
          "Desarrollo de aplicaciones SCADA para supervisión y control industrial.",
          "Configuración de redes y servidores VPN para conectividad remota.",
          "Mantenimiento técnico e infraestructura informática de oficina."
        ]
      },
      {
        period: "2017 - 2020",
        role: "Web Management & IT Technical Support",
        company: "Casa Pià SL",
        summary:
          "Trabajo orientado a e-commerce, contenido digital y soporte técnico para tiendas, con foco en operación diaria y mantenimiento del entorno comercial.",
        bullets: [
          "Desarrollo y mantenimiento e-commerce con Prestashop.",
          "Edición y diseño de fotografías de producto con Photoshop.",
          "Soporte técnico para tiendas: TPV, impresoras, hardware y software."
        ]
      },
      {
        period: "2009 - 2016",
        role: "Store Manager, Technical Support & Customer Service",
        company: "Barebone SL",
        summary:
          "Encargado de tienda, servicio técnico y atención al cliente en entorno retail, combinando gestión diaria con resolución de incidencias técnicas.",
        bullets: [
          "Gestión operativa diaria de tienda y coordinación del trabajo.",
          "Servicio técnico y resolución de incidencias sobre equipos, hardware y software.",
          "Atención al cliente y soporte técnico directo en tienda."
        ]
      }
    ]
  },
  en: {
    name: "Jordi Granada Rubio",
    role: "Frontend Developer, SCADA Developer & IT Support Specialist",
    location: "Banff, Alberta / Remote",
    email: "jordigranadarubio@gmail.com",
    domain: "jordi.is-a.dev",
    intro:
      "I have 14 years of experience in computer science across web development, SCADA systems, technical support, and IT operations. I have worked in industrial, e-commerce, and enterprise support environments.",
    availability: "Available for web development, IT support, and hybrid technical roles.",
    socialLinks: [
      { label: "GitHub", href: "https://github.com/jordig20" },
      { label: "LinkedIn", href: "https://linkedin.com/in/tu-perfil" },
      { label: "Email", href: "mailto:jordigranadarubio@gmail.com" }
    ],
    profileItems: [
      {
        title: "Hybrid technical profile",
        body: "14 years across web development, technical support, systems, and industrial automation."
      },
      {
        title: "Outdoor",
        body: "Skiing, running, hiking, and mountain biking. I live in Banff, and a big part of my time outside work happens in the mountains."
      },
      {
        title: "Music",
        body: "Music production, mixing, and mastering as part of the more creative and technical side of my work."
      },
      {
        title: "Technology",
        body: "Outside work, I keep building things: apps, automations, self-hosted tools, and Raspberry Pi systems with Docker or Node-RED."
      },
      {
        title: "Learning",
        body: "I am always learning: trying to improve my English, exploring new technologies, and sharpening both technical and creative judgment."
      }
    ],
    skills: [
      "JavaScript",
      "Python",
      "Angular 8",
      "NestJS",
      "MongoDB",
      "PostgreSQL",
      "Ignition SCADA",
      "Node-RED",
      "Prestashop",
      "WordPress",
      "Microsoft 365",
      "Technical Support",
      "Network Troubleshooting",
      "Node.js",
      "VPN Configuration"
    ],
    experience: [
      {
        period: "2025 - 2026",
        role: "Technical Support Specialist",
        company: "Banff Centre",
        summary:
          "Provided end-user IT support in a hybrid enterprise environment, covering device management, network troubleshooting, and Microsoft 365 administration.",
        bullets: [
          "Daily technical support for hardware and software incidents.",
          "Device and account administration in a corporate environment.",
          "Network troubleshooting and Microsoft 365 support."
        ]
      },
      {
        period: "2021 - 2023",
        role: "SCADA Developer",
        company: "ASL Control",
        summary:
          "Built industrial applications for photovoltaic plant monitoring and city water supply control, combining software, network setup, and technical maintenance.",
        bullets: [
          "Developed SCADA applications for industrial monitoring and control.",
          "Configured networks and VPN servers for remote connectivity.",
          "Handled office IT maintenance and technical infrastructure."
        ]
      },
      {
        period: "2017 - 2020",
        role: "Web Management & IT Technical Support",
        company: "Casa Pià SL",
        summary:
          "Worked across e-commerce, digital content, and technical support for stores, focused on day-to-day operations and commercial systems maintenance.",
        bullets: [
          "Developed and maintained e-commerce platforms with Prestashop.",
          "Created and edited product photography using Photoshop.",
          "Provided technical support for POS systems, printers, hardware, and software."
        ]
      },
      {
        period: "2009 - 2016",
        role: "Store Manager, Technical Support & Customer Service",
        company: "Barebone SL",
        summary:
          "Handled store management, technical service, and customer support in a retail environment, combining day-to-day operations with technical troubleshooting.",
        bullets: [
          "Managed day-to-day store operations and team coordination.",
          "Provided technical service and troubleshooting for hardware and software issues.",
          "Handled customer service and direct in-store technical support."
        ]
      }
    ]
  }
};

export const uiCopy: Record<Locale, UiCopy> = {
  es: {
    nav: { home: "Inicio", resume: "CV", portfolio: "Portfolio", contact: "Contacto" },
    switcher: { es: "ES", en: "EN" },
    hero: {
      title: ["Construyendo lo que amo", "desde Banff."],
      primaryCta: "Ver portfolio",
      secondaryCta: "Leer CV",
      notesTitle: "Perfil",
      location: "Ubicación",
      focus: "Foco",
      focusValue: "Web, sistemas y soporte técnico.",
      note: "Tecnología, montaña y aprendizaje constante."
    },
    profile: {
      eyebrow: "Perfil",
      title: "Tecnología, montaña y música.",
      description: "Tres pilares que explican bastante bien cómo trabajo, qué me mueve y dónde pongo la energía fuera del trabajo.",
      mediaLabel: "Lejos del escritorio"
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Trabajo técnico en distintos contextos",
      description: "Una selección de experiencias entre automatización industrial, soporte IT y entornos web orientados a negocio.",
      viewAll: "Ver todos",
      cardLabel: "Caso",
      viewProject: "Ver proyecto",
      viewCode: "Código",
      pageTitle: "Proyectos y experimentos",
      pageDescription:
        "Añade o edita proyectos directamente en content/projects.ts. Cada entrada se renderiza automáticamente aquí."
    },
    skills: {
      eyebrow: "Skills",
      title: "Stack principal",
      description: "Tecnologías, herramientas y sistemas con los que he trabajado en desarrollo web, soporte técnico y entornos industriales."
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Trayectoria técnica",
      description: "Roles que conectan desarrollo web, sistemas, soporte técnico y automatización en contextos reales."
    },
    contact: {
      eyebrow: "Contacto",
      title: "Empecemos con el contexto correcto.",
      description:
        "Si ves un punto de conexión, escríbeme. Elige el motivo y envíame un mensaje corto.",
      introLabel: "Motivo",
      formLabel: "Mensaje",
      intents: [
        {
          id: "work",
          title: "Oportunidad laboral",
          description: "Roles, procesos o conversaciones alrededor de web, sistemas o soporte técnico."
        },
        {
          id: "collaboration",
          title: "Colaboración",
          description: "Freelance, proyectos, ideas compartidas o trabajo técnico puntual."
        },
        {
          id: "hello",
          title: "Saludar",
          description: "Un mensaje directo, una pregunta o simplemente empezar una conversación."
        }
      ],
      activeIntentLabel: "Has elegido",
      fields: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje"
      },
      placeholders: {
        name: "Tu nombre",
        email: "tu@email.com",
        message: {
          work: "Cuéntame el rol, el contexto y lo que te ha llamado la atención de mi perfil.",
          collaboration: "Cuéntame qué estás construyendo, qué necesitas y cómo ves el encaje.",
          hello: "Escribe con naturalidad. Un mensaje corto es suficiente."
        }
      },
      submit: "Enviar mensaje",
      sending: "Enviando...",
      success: "Mensaje enviado. Te responderé por email cuando pueda.",
      error: "No pude enviar el mensaje. Prueba otra vez en un momento.",
      turnstile: {
        label: "Verificación rápida antes de enviar.",
        expired: "La verificación ha caducado. Vuelve a completarla.",
        error: "No pude validar la verificación. Inténtalo de nuevo.",
        missing: "Falta configurar Turnstile en el entorno."
      }
    },
    resume: {
      eyebrow: "Curriculum",
      contact: "Contacto",
      links: "Links",
      skills: "Skills"
    },
    root: {
      title: "Selecciona idioma",
      description: "Versiones completas en español e inglés del resume y portfolio.",
      esCta: "Entrar en español",
      enCta: "Enter in English"
    }
  },
  en: {
    nav: { home: "Home", resume: "Resume", portfolio: "Portfolio", contact: "Contact" },
    switcher: { es: "ES", en: "EN" },
    hero: {
      title: ["Building what I love", "from Banff."],
      primaryCta: "View portfolio",
      secondaryCta: "Read resume",
      notesTitle: "Profile",
      location: "Location",
      focus: "Focus",
      focusValue: "Web, systems, and technical support.",
      note: "Tech, mountains, and long-form learning."
    },
    profile: {
      eyebrow: "Profile",
      title: "Technology, mountains, and music.",
      description: "Three pillars that explain pretty well how I work, what drives me, and where my energy goes outside work.",
      mediaLabel: "Away from the desk"
    },
    projects: {
      eyebrow: "Projects",
      title: "Technical work across different environments",
      description: "A selection of work spanning industrial automation, IT support, and web environments tied to real operations.",
      viewAll: "View all",
      cardLabel: "Case",
      viewProject: "View project",
      viewCode: "Code",
      pageTitle: "Projects and experiments",
      pageDescription:
        "Add or edit projects directly in content/projects.ts. Each entry renders here automatically."
    },
    skills: {
      eyebrow: "Skills",
      title: "Core stack",
      description: "Technologies, tools, and systems I have worked with across web development, technical support, and industrial environments."
    },
    experience: {
      eyebrow: "Experience",
      title: "Technical trajectory",
      description: "Roles connecting web development, systems, technical support, and automation in real-world environments."
    },
    contact: {
      eyebrow: "Contact",
      title: "Start with the right context.",
      description: "If something here connects, send a note. Pick the reason and keep it short.",
      introLabel: "Intent",
      formLabel: "Message",
      intents: [
        {
          id: "work",
          title: "Work opportunity",
          description: "Roles, hiring processes, or conversations around web, systems, or technical support."
        },
        {
          id: "collaboration",
          title: "Collaboration",
          description: "Freelance work, projects, shared ideas, or focused technical help."
        },
        {
          id: "hello",
          title: "Say hi",
          description: "A direct note, a question, or simply a reason to start a conversation."
        }
      ],
      activeIntentLabel: "You picked",
      fields: {
        name: "Name",
        email: "Email",
        message: "Message"
      },
      placeholders: {
        name: "Your name",
        email: "you@email.com",
        message: {
          work: "Tell me about the role, the context, and what made you reach out.",
          collaboration: "Tell me what you are building, what you need, and how you see the fit.",
          hello: "Keep it simple. A short message is enough."
        }
      },
      submit: "Send message",
      sending: "Sending...",
      success: "Message sent. I will get back to you by email when I can.",
      error: "I could not send the message. Please try again in a moment.",
      turnstile: {
        label: "Quick verification before sending.",
        expired: "The verification expired. Please complete it again.",
        error: "I could not validate the verification. Please try again.",
        missing: "Turnstile is not configured in the environment."
      }
    },
    resume: {
      eyebrow: "Resume",
      contact: "Contact",
      links: "Links",
      skills: "Skills"
    },
    root: {
      title: "Choose language",
      description: "Full Spanish and English versions of the resume and portfolio.",
      esCta: "Open in Spanish",
      enCta: "Open in English"
    }
  }
};

export function getSiteContent(locale: Locale) {
  return siteContent[locale];
}

export function getUiCopy(locale: Locale) {
  return uiCopy[locale];
}
