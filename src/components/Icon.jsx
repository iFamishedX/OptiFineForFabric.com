/**
 * Icon — inline SVG icon component.
 * Usage: <Icon name="bolt" size={24} className="..." />
 * Add new icons to the `icons` map below.
 */

const icons = {
  bolt: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
    />
  ),
  cpu: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </>
  ),
  star: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    />
  ),
  sparkles: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75L19 14z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 18l.5 1.5L7 20l-1.5.5L5 22l-.5-1.5L3 20l1.5-.5L5 18z"
      />
    </>
  ),
  palette: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 1.657-1.343 3-3 3h-1.5a1.5 1.5 0 000 3H19a1 1 0 010 2h-7zm-5-9a1 1 0 100-2 1 1 0 000 2zm3-4a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2zm3 4a1 1 0 100-2 1 1 0 000 2z"
    />
  ),
  zoom: (
    <>
      <circle cx="11" cy="11" r="8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
    </>
  ),
  lightbulb: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 21h6M12 3a6 6 0 016 6c0 2.22-1.2 4.16-3 5.2V17H9v-2.8A6 6 0 0112 3z"
      />
    </>
  ),
  puzzle: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 003 12a9 9 0 009 9 9.003 9.003 0 006.354-2.646zM14.5 8A1.5 1.5 0 0013 9.5V11h-1.5a1.5 1.5 0 000 3H13v1.5a1.5 1.5 0 003 0V14h1.5a1.5 1.5 0 000-3H16V9.5A1.5 1.5 0 0014.5 8z"
    />
  ),
  download: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v13M7 11l5 5 5-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 19h18" />
    </>
  ),
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l3 3 5-5" />
    </>
  ),
  xCircle: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-6 6M9 9l6 6" />
    </>
  ),
  play: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
  ),
  folder: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
    />
  ),
  tool: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
    />
  ),
  cube: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-.375c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v.375c0 .621.504 1.125 1.125 1.125z"
    />
  ),
  github: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
    />
  ),
  discord: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"
    />
  ),
  modrinth: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 110 16A8 8 0 0112 4zm0 2a6 6 0 100 12A6 6 0 0012 6zm0 2a4 4 0 110 8 4 4 0 010-8z"
    />
  ),
  arrowRight: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
  ),
  chevronDown: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
  ),
  warning: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4M12 17h.01" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    </>
  ),
  check: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
  ),
  x: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
  ),
  battery: (
    <>
      <rect x="2" y="7" width="16" height="10" rx="2" />
      <path strokeLinecap="round" d="M22 11v2" />
      <path strokeLinecap="round" d="M6 11h8" />
    </>
  ),
}

export default function Icon({ name, size = 20, className = "", strokeWidth = 1.75 }) {
  const paths = icons[name]
  if (!paths) return null

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
    >
      {paths}
    </svg>
  )
}
