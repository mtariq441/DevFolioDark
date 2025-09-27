export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
  image?: string;
}

// TODO: Replace with real project data
export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, product management, shopping cart, and secure payment integration using Stripe.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    githubLink: 'https://github.com/example/ecommerce-platform',
    liveLink: 'https://ecommerce-demo.vercel.app'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'MongoDB', 'Material-UI'],
    githubLink: 'https://github.com/example/task-manager',
    liveLink: 'https://task-manager-demo.netlify.app'
  },
  {
    id: '3',
    title: 'Social Media Dashboard',
    description: 'A comprehensive dashboard for managing multiple social media accounts with analytics, post scheduling, and performance tracking.',
    techStack: ['React', 'Redux', 'Express', 'MongoDB', 'Chart.js', 'Bootstrap'],
    githubLink: 'https://github.com/example/social-dashboard',
    liveLink: 'https://social-dashboard-demo.herokuapp.com'
  },
  {
    id: '4',
    title: 'Real Estate Listings',
    description: 'A modern real estate platform with property listings, advanced search filters, virtual tours, and agent management system.',
    techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    githubLink: 'https://github.com/example/real-estate-app',
    liveLink: 'https://realestate-demo.vercel.app'
  }
];