// EXPERIENCE — shown in the Experience section, most recent first.
// Add a new role by copying an object below.

export interface ExperienceItem {
  id: string
  title: string
  org: string
  period: string
  summary: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'tmu-velocity',
    title: 'Software Developer',
    org: 'TMU Velocity Design Team',
    period: 'Sept 2026 — Present',
    summary:
      "Building ROS2-based robotics software for TMU Velocity's vehicle platform alongside a student software team.",
    highlights: [
      'Writing real-time controls and robotics software in Python and C++ in a Linux development environment',
      'Collaborating with other developers on a shared codebase using Git',
    ],
  },
  {
    id: 'student-support-specialist',
    title: 'Student Support Specialist',
    org: 'TMU Student Life & Learning Support',
    period: 'Sept 2026 — Present',
    summary:
      'Frontline support at the Student Learning Centre, handling inquiries and coordinating with accommodation administrators.',
    highlights: [
      'Triage reception, phone, and email inquiries across multiple student support programs',
      'Coordinate with Academic Accommodation Support staff on intake and detail-sensitive workflows while protecting confidential information',
    ],
  },
  {
    id: 'vfc-inventory-ops',
    title: 'Inventory & Operations Project Member',
    org: 'Venture for Canada (La Casa Grill Restaurant)',
    period: 'Jul 2026 — Sept 2026',
    summary:
      'Built inventory and purchasing workflows for a small restaurant client, remotely, as part of a short-term operations project.',
    highlights: [
      'Structured supplier records, purchasing schedules, and reorder-threshold concepts across restaurant, prepared-food, and dessert operations',
      'Translated changing founder requirements into documented processes, coordinating remotely across a small team',
    ],
  },
  {
    id: 'first-year-ambassador',
    title: 'First-Year Engineering Ambassador',
    org: 'Faculty of Engineering and Architectural Science, TMU',
    period: 'Apr 2025 — May 2026',
    summary: 'Mentored incoming engineering students and represented the faculty at recruitment events.',
    highlights: [
      "Mentored first-year engineering students through their transition into the program",
      "Represented TMU Engineering at events including the Ontario Universities' Fair and Open House",
    ],
  },
]
