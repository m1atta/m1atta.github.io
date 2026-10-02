// ---------------------------------------------------------------------------
// PROJECTS — single source of truth for the Projects section.
//
// To add a new project, copy an existing object below and fill in the
// fields. See the "id" field — it must be unique (used as a React key and
// for the detail modal's URL-free state).
//
// `github: ''` means no repository link yet. Once you upload the project to
// https://github.com/m1atta, replace '' with the full repo URL, e.g.
// 'https://github.com/m1atta/alu-vhdl'
// Leave it as '' rather than guessing — an empty string renders a
// "Code coming soon" label instead of a broken link.
// ---------------------------------------------------------------------------

export type ProjectCategory = 'hardware' | 'digital-systems' | 'software' | 'robotics' | 'ai'

export interface Project {
  id: string
  title: string
  tagline: string // one-line summary shown on the card
  description: string[] // longer paragraphs shown in the detail view
  contribution: string // what you specifically did
  concepts: string[] // relevant engineering concepts
  tools: string[]
  date: string // display string, e.g. "Dec 2025"
  category: ProjectCategory
  github: string // '' if not uploaded yet
  demo?: string // optional live/demo link
  image?: string // optional path under /public/projects/, e.g. '/projects/alu.png'
  featured: boolean // featured projects get the larger card treatment
}

export const projects: Project[] = [
  {
    id: 'alu-vhdl',
    title: 'General-Purpose Processor (ALU)',
    tagline: 'An 8-bit ALU core in VHDL, synthesized and verified on an FPGA.',
    description: [
      'Designed an 8-bit ALU core in VHDL supporting 8 arithmetic and logical operations, integrated with FSM-based control logic and a 4x16 decoder.',
      'Synthesized and deployed the complete processor onto an FPGA development board, then verified functional correctness through testbench simulation, waveform analysis, and truth-table-driven test cases.',
      'Debugged mismatches between expected and simulated behaviour back to their root cause in the control logic, and documented the design with truth tables, block/circuit diagrams, and simulation waveforms.',
    ],
    contribution:
      'Designed, implemented, and verified the full datapath and control logic independently as a course project.',
    concepts: ['Digital logic design', 'FSM control logic', 'Datapath design', 'Hardware verification'],
    tools: ['VHDL', 'Altera Quartus', 'FPGA'],
    date: 'Dec 2025',
    category: 'digital-systems',
    github: '',
    featured: true,
  },
  {
    id: 'cansat-pcb',
    title: 'CanSat IMU & Magnetometer Breakout PCB',
    tagline: 'A four-layer sensor PCB taken from requirements to a zero-DRC-error design.',
    description: [
      'Translated electrical and mechanical requirements into a four-layer, 3.3V embedded sensor PCB for a CanSat (satellite-in-a-can) project, using component datasheets to select parts and develop the schematic, netlist, and component-level layout.',
      'Applied layout considerations including trace routing and power/ground plane placement for a shared SPI interface, closing the design with 0 DRC errors and 0 unconnected items.',
      'Produced Gerber/drill files and documented requirements, trade-offs, and verification results as a complete technical package for team review, against a fixed project timeline.',
    ],
    contribution:
      'Owned the PCB design end to end: component selection, schematic capture, layout, and design-rule verification.',
    concepts: ['PCB layout', 'Schematic capture', 'Power/ground planes', 'Design rule checking'],
    tools: ['KiCad'],
    date: 'Aug 2026',
    category: 'hardware',
    github: '',
    featured: true,
  },
  {
    id: 'mosfet-amplifier',
    title: 'Low-Power MOSFET Amplifier System',
    tagline: 'A three-stage amplifier designed under a sub-1mW power budget.',
    description: [
      'Designed a three-stage common-source MOSFET amplifier topology under a 3.3V supply and sub-1mW power budget, balancing gain, bandwidth, biasing, loading, and output-drive requirements across stages.',
      'Derived DC operating points through hand bias calculations, then ran AC small-signal SPICE simulations to validate gain, bandwidth, and frequency response.',
      'Debugged the design stage by stage, comparing hand calculations against simulated behaviour until the two converged.',
    ],
    contribution: 'Designed and simulated the full three-stage topology and carried out all bias and AC analysis.',
    concepts: [
      'MOSFET biasing',
      'Small-signal AC analysis',
      'Gain/bandwidth trade-offs',
      'Analog IC design fundamentals',
    ],
    tools: ['SPICE'],
    date: 'Apr 2026',
    category: 'hardware',
    github: '',
    featured: true,
  },
  {
    id: 'great-lakes-analysis',
    title: 'Great Lakes Ice Concentration Analysis',
    tagline: 'A C program parsing three years of real NOAA data into usable statistics.',
    description: [
      'Wrote a C program to parse three years of real NOAA CSV datasets, using file I/O and string tokenization to load records into arrays for per-lake and combined statistics.',
      'Implemented functions to compute yearly/monthly averages and identify maximum/minimum values and tie cases, then generated GNUplot data files to visualize ice-concentration trends across lakes and years.',
      'Authored a structured technical report documenting the procedure, program output, and conclusions for each problem.',
    ],
    contribution: 'Wrote the full data-parsing and analysis pipeline and the accompanying technical report.',
    concepts: ['File I/O', 'Data parsing', 'Statistical analysis', 'Data visualization'],
    tools: ['C', 'GNUplot'],
    date: '2025',
    category: 'software',
    github: '',
    featured: true,
  },
  {
    id: 'ai-chatbot-prototype',
    title: 'AI Customer-Support Chatbot Prototype',
    tagline: 'A Python prototype exploring automated handling of routine support inquiries.',
    description: [
      "Built a prototype AI-powered customer-support chatbot in Python, integrating AWS cloud services to explore automated handling of routine inquiries end to end.",
      "Structured the prototype's request-handling logic and response flow, and documented the design and its known limitations for future iteration.",
    ],
    contribution: 'Designed and built the prototype independently as a personal project.',
    concepts: ['AI application prototyping', 'Cloud integration'],
    tools: ['Python', 'AWS'],
    date: '2026',
    category: 'ai',
    github: '',
    featured: false,
  },
  {
    id: 'roboracer-emergency-braking',
    title: 'RoboRacer — Emergency Braking System',
    tagline: 'An emergency braking system built for TMU Velocity onboarding, in ROS2.',
    description: [
      "Built an emergency braking system on ROS2 as an onboarding project for TMU Velocity's software team, working in Python/C++ in a Linux development environment.",
      'Part of ongoing work contributing to foundational ROS2-based robotics software and real-time controls alongside the rest of the software group, collaborating on shared code via Git.',
    ],
    contribution: 'Designed and implemented the emergency braking system as an individual onboarding project.',
    concepts: ['ROS2', 'Real-time control', 'Safety-critical systems', 'Collaborative software development'],
    tools: ['Python', 'C++', 'ROS2', 'Git', 'Linux'],
    date: 'Sept 2026 — Present',
    category: 'robotics',
    github: 'https://github.com/m1atta/roboracer-emergency-braking',
    featured: false,
  },
  {
    id: 'tmapu',
    title: 'TMapU — Campus Indoor/Outdoor Mapping App',
    tagline: 'A frontend-only campus navigation app with shortest-path routing between buildings.',
    description: [
      "Built TMapU, an interior and exterior campus map web app for Toronto Metropolitan University, as a frontend-only project in JavaScript, HTML, and CSS, hosted on Vercel.",
      'Implemented shortest-path routing across a graph of mapped building sections using Dijkstra\'s algorithm, switching between local (within-building) and overall (between-building) routing and stitching the resulting path back together.',
      'Built a location search with autocorrection against known map points, step-by-step turn navigation with dynamic map rotation so the route always points "up" on screen, and SVG-based map rendering with camera transforms, designed to work across desktop and mobile.',
    ],
    contribution:
      'Designed and built the full application independently, including the routing algorithm, SVG map-loading system, and UI, with current beta coverage across several campus buildings.',
    concepts: ['Graph algorithms (Dijkstra)', 'SVG rendering & DOM manipulation', 'Asynchronous JavaScript', 'Responsive/mobile web design'],
    tools: ['JavaScript', 'HTML', 'CSS', 'SVG', 'Vercel'],
    date: '2026',
    category: 'software',
    github: '',
    demo: 'https://tmapu-beta.vercel.app/',
    featured: false,
  },
  {
    id: 'gridsync',
    title: 'GridSYNC — AI Workload Peak Mitigation',
    tagline: 'A six-student concept for AI-assisted energy-management and peak shaving.',
    description: [
      'Collaborated in a six-student team on an AI-assisted energy-management system concept combining flexible-load scheduling, battery storage sizing, peak shaving, and automated fault recovery.',
      'Contributed research and technical content to a 19-slide presentation covering system architecture, CO2e calculations, and a six-phase implementation roadmap.',
    ],
    contribution: 'Contributed research, technical content, and presentation material as part of a 6-person team.',
    concepts: ['Energy management systems', 'Load scheduling', 'Team technical presentation'],
    tools: ['Research & systems design'],
    date: 'Sept 2026',
    category: 'ai',
    github: '',
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)
