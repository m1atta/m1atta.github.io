// SKILLS — grouped by category for the Skills section.
// Add/remove items freely; each category renders as its own group.

export interface SkillGroup {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Programming',
    items: ['Python', 'C', 'C++', 'Java (working knowledge)', 'Git'],
  },
  {
    category: 'Digital Systems & FPGA',
    items: ['VHDL', 'Altera Quartus', 'FSM design', 'Testbench simulation', 'Waveform analysis'],
  },
  {
    category: 'Hardware & Electronics',
    items: ['Circuit analysis', 'Analog electronics', 'MOSFET biasing', 'PCB design', 'Datasheet interpretation'],
  },
  {
    category: 'Engineering & Design Tools',
    items: ['KiCad', 'SPICE', 'MultiSIM', 'GNUplot'],
  },
  {
    category: 'Robotics & Systems',
    items: ['ROS2', 'Linux terminal', 'Windows PowerShell'],
  },
  {
    category: 'AI & Cloud',
    items: ['AWS (prototype-level)', 'AI application prototyping', 'AWS AI Agent Engineer Nanodegree (in progress)'],
  },
]
