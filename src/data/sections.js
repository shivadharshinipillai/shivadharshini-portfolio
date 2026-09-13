// Landing-page destinations. Positions are hand-tuned world-space
// coordinates (not pixels) aiming to reproduce the reference image's
// layout under a perspective camera at roughly [0, 0.3, 6] looking at
// the origin. If you nudge the camera in Scene.jsx, re-check these.
//
// Screen-quadrant intent (matches the reference):
//   about       upper-left
//   skills      left-middle
//   work        centre
//   experience  lower-middle / right
//   learning    upper-right
//   contact     lower-right

export const SECTIONS = [
  {
    id: 'about',
    label: 'ABOUT',
    path: '/about',
    icon: 'about',
    position: [-4.4, 1.65, -3.2],
    cloudScale: 1.05,
  },
  {
    id: 'skills',
    label: 'SKILLS',
    path: '/skills',
    icon: 'skills',
    position: [-5.8, -0.35, -4.6],
    cloudScale: 1.15,
  },
  {
    id: 'work',
    label: 'WORK',
    path: '/work',
    icon: 'work',
    position: [-0.2, 0.75, -2.6],
    cloudScale: 1.3,
  },
  {
    id: 'experience',
    label: 'EXPERIENCE',
    path: '/experience',
    icon: 'experience',
    position: [1.7, -1.05, -3.8],
    cloudScale: 1.1,
  },
  {
    id: 'learning',
    label: 'LEARNING',
    path: '/learning',
    icon: 'learning',
    position: [4.7, 1.6, -3.6],
    cloudScale: 1.1,
  },
  {
    id: 'contact',
    label: 'CONTACT',
    path: '/contact',
    icon: 'contact',
    position: [6.1, -1.2, -5.0],
    cloudScale: 1.0,
  },
]

// Timing lives in one place so JS state-machine timers and any CSS
// transition-durations passed down as custom properties can never
// drift apart. All values in milliseconds.
export const TIMING = {
  settle: 200, // pause so the "selected" dim registers before departure
  approach: 1400, // plane flies from wherever it is to the chosen cloud
  fill: 700, // cloud grows to fill the viewport
  atmosphere: 1000, // warm evening bloom -> quick dip to night for continuity
  hold: 150, // brief hold before the actual route change
}

export const REDUCED_TIMING = {
  settle: 60,
  approach: 220,
  fill: 160,
  atmosphere: 260,
  hold: 80,
}
