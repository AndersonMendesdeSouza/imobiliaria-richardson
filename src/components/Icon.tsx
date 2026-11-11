import type { ReactNode } from 'react'

const paths = {
  arrow: <path d="M4 12h16M14 6l6 6-6 6" />,
  chevron: <path d="m9 5 7 7-7 7" />,
  pin: <><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  house: <path d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-8h6v8" />,
  area: <path d="M9 3H3v6m12-6h6v6M3 15v6h6m12-6v6h-6M3 3l6 6m12-6-6 6M3 21l6-6m12 6-6-6" />,
  bed: <path d="M3 18v3m18-3v3M3 18V8m18 10v-8H3M3 18h18M6 10V5h12v5M12 5v5" />,
  bath: <path d="M4 12h16v3a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-3ZM6 12V5a2 2 0 0 1 4 0M3 12h18M7 21v1m10-1v1" />,
  car: <path d="m5 4-3 7v8h20v-8l-3-7H5ZM2 11h20M5 19v3m14-3v3M6 15h1m10 0h1" />,
  check: <path d="m5 12 4 4L19 6" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m5 5 14 14M19 5 5 19" />,
  photos: <><rect x="3" y="6" width="15" height="15" rx="2" /><path d="M7 3h14v14M3 17l5-5 5 5 2-2 3 3" /><circle cx="13" cy="10" r="1" /></>,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z" />,
  whatsapp: <><path d="M21 11.5a9 9 0 0 1-13.3 7.9L3 21l1.6-4.7A9 9 0 1 1 21 11.5Z" /><path d="M8 7c-2 3 3 8 6 8l2-2-3-1-1 1-2-2 1-1-1-3Z" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
  shield: <><path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6l8-4Z" /><path d="m8 12 3 3 5-6" /></>,
  key: <><circle cx="8" cy="8" r="5" /><path d="m12 12 9 9m-4-4 3-3m-6 0 3-3" /></>,
  compass: <><circle cx="12" cy="12" r="10" /><path d="m16 8-3 5-5 3 3-5 5-3Z" /></>,
  leaf: <path d="M20 3C6 1 1 12 7 17S22 15 20 3ZM4 21 16 9" />,
} satisfies Record<string, ReactNode>

export type IconName = keyof typeof paths

export function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  return <svg className={`icon ${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}
