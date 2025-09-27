export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
  image?: string;
}

// Muhammad Tariq's Portfolio Projects
export const projects: Project[] = [
  {
    id: '1',
    title: 'TechHub - Developer Community Platform',
    description: 'A comprehensive developer community platform featuring real-time chat, code sharing, project collaboration, and skill-based matching. Built with modern MERN stack and real-time capabilities.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT', 'Tailwind CSS'],
    githubLink: 'https://github.com/muhammadtariq/techhub-platform',
    liveLink: 'https://techhub-community.vercel.app'
  },
  {
    id: '2',
    title: 'SmartFinance - Personal Finance Tracker',
    description: 'An intelligent personal finance management app with expense tracking, budget planning, investment insights, and AI-powered financial recommendations. Features advanced data visualization and secure banking integration.',
    techStack: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'Plaid API', 'Material-UI'],
    githubLink: 'https://github.com/muhammadtariq/smartfinance-app',
    liveLink: 'https://smartfinance-tracker.netlify.app'
  },
  {
    id: '3',
    title: 'EcoMarket - Sustainable E-Commerce',
    description: 'A green e-commerce platform promoting sustainable products with carbon footprint tracking, eco-score ratings, and blockchain-based supply chain transparency. Integrated with multiple payment gateways and advanced analytics.',
    techStack: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'PayPal', 'Web3.js', 'Tailwind CSS'],
    githubLink: 'https://github.com/muhammadtariq/ecomarket-platform',
    liveLink: 'https://ecomarket-sustainable.vercel.app'
  },
  {
    id: '4',
    title: 'CodeCollab - Real-time Code Editor',
    description: 'A collaborative coding environment with real-time code editing, voice/video chat, screen sharing, and integrated terminal. Features syntax highlighting for 20+ languages and live code execution.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'Monaco Editor', 'WebRTC', 'Docker', 'PostgreSQL'],
    githubLink: 'https://github.com/muhammadtariq/codecollab-editor',
    liveLink: 'https://codecollab-realtime.herokuapp.com'
  },
  {
    id: '5',
    title: 'HealthTrack - Medical Records System',
    description: 'A comprehensive healthcare management system for patients and doctors with appointment scheduling, medical history tracking, prescription management, and telemedicine capabilities.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe', 'Zoom SDK', 'Chart.js'],
    githubLink: 'https://github.com/muhammadtariq/healthtrack-system',
    liveLink: 'https://healthtrack-medical.vercel.app'
  },
  {
    id: '6',
    title: 'EventMaster - Event Management Platform',
    description: 'A full-featured event management platform with ticket booking, event promotion, attendee management, and real-time event analytics. Includes QR code generation and mobile app support.',
    techStack: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'QR Code', 'React Native'],
    githubLink: 'https://github.com/muhammadtariq/eventmaster-platform',
    liveLink: 'https://eventmaster-pro.netlify.app'
  }
];