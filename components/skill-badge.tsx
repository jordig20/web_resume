import { Activity, BriefcaseBusiness, Network, ShieldCheck, Wrench } from "lucide-react";
import {
  siAngular,
  siDocker,
  siJavascript,
  siMongodb,
  siNestjs,
  siNodedotjs,
  siNodered,
  siPostgresql,
  siPrestashop,
  siPython,
  siRaspberrypi,
  siWordpress
} from "simple-icons";

const iconMap = {
  JavaScript: siJavascript,
  Python: siPython,
  "Angular 8": siAngular,
  NestJS: siNestjs,
  MongoDB: siMongodb,
  PostgreSQL: siPostgresql,
  "Node-RED": siNodered,
  Prestashop: siPrestashop,
  WordPress: siWordpress,
  "Node.js": siNodedotjs,
  Docker: siDocker,
  "Raspberry Pi": siRaspberrypi
} as const;

function SkillIcon({ skill }: { skill: string }) {
  const icon = iconMap[skill as keyof typeof iconMap];

  if (skill === "Ignition SCADA") {
    return <Activity aria-hidden="true" className="h-4 w-4 shrink-0 text-[color:var(--accent-deep)]" strokeWidth={2} />;
  }

  if (skill === "Microsoft 365") {
    return (
      <BriefcaseBusiness aria-hidden="true" className="h-4 w-4 shrink-0 text-[color:var(--accent-deep)]" strokeWidth={2} />
    );
  }

  if (skill === "Technical Support") {
    return <Wrench aria-hidden="true" className="h-4 w-4 shrink-0 text-[color:var(--accent-deep)]" strokeWidth={2} />;
  }

  if (skill === "Network Troubleshooting") {
    return <Network aria-hidden="true" className="h-4 w-4 shrink-0 text-[color:var(--accent-deep)]" strokeWidth={2} />;
  }

  if (skill === "VPN Configuration") {
    return <ShieldCheck aria-hidden="true" className="h-4 w-4 shrink-0 text-[color:var(--accent-deep)]" strokeWidth={2} />;
  }

  if (!icon) {
    return (
      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[color:rgba(24,78,103,0.12)] text-[10px] font-semibold text-[color:var(--accent-deep)]">
        {skill.slice(0, 1)}
      </span>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 fill-[color:var(--accent-deep)]"
    >
      <path d={icon.path} />
    </svg>
  );
}

export function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:rgba(248,251,252,0.8)] px-4 py-2 text-sm shadow-[var(--shadow)]">
      <SkillIcon skill={skill} />
      <span>{skill}</span>
    </span>
  );
}
