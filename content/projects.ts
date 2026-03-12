import type { Locale } from "@/lib/i18n";

export type Project = {
  slug: string;
  title: string;
  year: string;
  description: string;
  stack: string[];
  href?: string;
  repo?: string;
  impact: string;
};

export const projectsByLocale: Record<Locale, Project[]> = {
  es: [
    {
      slug: "scada-industrial",
      title: "SCADA para industria y utilities",
      year: "2021 - 2023",
      description:
        "Desarrollo de aplicaciones industriales para supervisar y controlar plantas fotovoltaicas y sistemas de abastecimiento de agua.",
      stack: ["Ignition SCADA", "Node-RED", "Python", "PostgreSQL", "VPN", "Networking"],
      impact: "Experiencia directa en automatización, conectividad remota y operación técnica sobre sistemas críticos."
    },
    {
      slug: "ecommerce-operations",
      title: "E-commerce y soporte técnico retail",
      year: "2017 - 2020",
      description:
        "Mantenimiento y evolución de tiendas online en Prestashop junto con soporte técnico para puntos de venta y equipamiento comercial.",
      stack: ["Prestashop", "WordPress", "JavaScript", "Photoshop", "POS Systems"],
      impact: "Perfil orientado a negocio real, operación diaria y resolución de incidencias técnicas en tienda."
    },
    {
      slug: "enterprise-it-support",
      title: "Soporte IT en entorno enterprise",
      year: "2025 - 2026",
      description:
        "Soporte técnico a usuarios, administración de dispositivos y troubleshooting de red en un entorno híbrido con Microsoft 365.",
      stack: ["Microsoft 365", "IT Support", "Device Management", "Networking"],
      impact: "Capacidad para moverme entre soporte, sistemas, operación y resolución rápida de problemas técnicos."
    }
  ],
  en: [
    {
      slug: "scada-industrial",
      title: "Industrial SCADA Systems",
      year: "2021 - 2023",
      description:
        "Development of industrial applications to monitor and control photovoltaic plants and water supply systems.",
      stack: ["Ignition SCADA", "Node-RED", "Python", "PostgreSQL", "VPN", "Networking"],
      impact: "Direct experience in automation, remote connectivity, and technical operation over critical systems."
    },
    {
      slug: "ecommerce-operations",
      title: "E-commerce and Retail Technical Support",
      year: "2017 - 2020",
      description:
        "Maintenance and day-to-day evolution of Prestashop stores together with technical support for retail systems and shop equipment.",
      stack: ["Prestashop", "WordPress", "JavaScript", "Photoshop", "POS Systems"],
      impact: "A profile grounded in real business operations, store workflows, and technical issue resolution."
    },
    {
      slug: "enterprise-it-support",
      title: "Enterprise IT Support",
      year: "2025 - 2026",
      description:
        "End-user support, device administration, and network troubleshooting in a hybrid environment using Microsoft 365.",
      stack: ["Microsoft 365", "IT Support", "Device Management", "Networking"],
      impact: "Ability to move across support, systems, operations, and fast technical problem solving."
    }
  ]
};

export function getProjects(locale: Locale) {
  return projectsByLocale[locale];
}
