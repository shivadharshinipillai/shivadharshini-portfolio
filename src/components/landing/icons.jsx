// Minimal single-weight linework icons, matching the reference image's
// thin, editorial iconography. Rendered as HTML (via drei's <Html>)
// rather than 3D geometry, so they stay perfectly crisp regardless of
// camera distance or device pixel ratio.

const common = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.3,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function AboutIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5.5 20c0-3.6 2.9-6.2 6.5-6.2s6.5 2.6 6.5 6.2" />
    </svg>
  )
}

export function WorkIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <rect x="4" y="8" width="16" height="11" rx="1.6" />
      <path d="M9 8V6.4A1.9 1.9 0 0 1 10.9 4.5h2.2A1.9 1.9 0 0 1 15 6.4V8" />
      <path d="M4 13h16" />
    </svg>
  )
}

export function SkillsIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <rect x="4" y="4" width="7" height="7" rx="1" />
      <rect x="13" y="4" width="7" height="7" rx="1" />
      <rect x="4" y="13" width="7" height="7" rx="1" />
      <rect x="13" y="13" width="7" height="7" rx="1" />
    </svg>
  )
}

export function ExperienceIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <path d="M6 3.5h9.5L19 7v13.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z" />
      <path d="M15.2 3.6V7h3.7" />
      <path d="M8 12h8M8 15.3h8M8 9h4" />
    </svg>
  )
}

export function LearningIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <path d="M12 6.2c-1.6-1.3-4-1.9-6.3-1.4V16.7c2.3-.5 4.7.1 6.3 1.4" />
      <path d="M12 6.2c1.6-1.3 4-1.9 6.3-1.4V16.7c-2.3-.5-4.7.1-6.3 1.4" />
      <path d="M12 6.2v11.9" />
    </svg>
  )
}

export function ContactIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <path d="M20 4 3.5 10.8 10 13l2.2 6.5L20 4Z" />
      <path d="M10 13l4.6-4.6" />
    </svg>
  )
}

export const ICONS = {
  about: AboutIcon,
  work: WorkIcon,
  skills: SkillsIcon,
  experience: ExperienceIcon,
  learning: LearningIcon,
  contact: ContactIcon,
}
