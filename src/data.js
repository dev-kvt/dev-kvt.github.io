export const SITE = {
  name: 'Divyansh Singh',
  role: 'Software Engineer',
  location: 'Greater Noida, Uttar Pradesh',
  email: 'dvnsh.work@gmail.com',
  phone: '+91 6378918236',
  github: 'dev-kvt',
  linkedin: 'https://linkedin.com/in/devkvt',
  summary:
    'I build secure APIs, developer tooling, and data-first interfaces that scale from prototypes to production. My work blends backend reliability with a sharp focus on developer experience.',
  resumePath: 'resume_nodejs.pdf'
};

export const SKILLS = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'React Native', 'Expo']
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'Spring Boot', 'Fastify', 'Redis', 'JWT', 'OAuth 2.0']
  },
  {
    title: 'Languages',
    items: ['Java', 'JavaScript (Node.js)', 'TypeScript', 'Python', 'C']
  },
  {
    title: 'Data',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Mongoose', 'Prisma']
  },
  {
    title: 'DevOps & Tooling',
    items: ['Docker', 'Git', 'GitHub Actions', 'Postman', 'HTTPie', 'Vim', 'NeoVim']
  }
];

export const PROJECTS = [
  {
    title: 'SubAPI2',
    subtitle: 'High-Security Subscription API',
    description:
      'Built a secure REST API for authentication and subscription management, with robust authorization, hashing, and rate limiting.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Arcjet'],
    links: [
      {
        label: 'Repository',
        url: 'https://github.com/dev-kvt/subscription-api2'
      }
    ]
  },
  {
    title: 'Nova',
    subtitle: 'CLI for AI-Driven Commit Standardization',
    description:
      'Designed a dual-mode CLI with Git hook automation, optimized API communication, and production-ready logging.',
    stack: ['Node.js', 'Commander.js', 'OpenAI/Ollama', 'Git Hooks', 'CI/CD'],
    links: [
      {
        label: 'Repository',
        url: 'https://github.com/dev-kvt/Nova'
      },
      {
        label: 'NPM',
        url: 'https://www.npmjs.com/package/nova-commit'
      }
    ]
  },
  {
    title: 'Potato Theme',
    subtitle: 'VS Code Color Theme',
    description:
      'Crafted a low-eye-strain palette with semantic highlighting across 15+ languages and published it to the Marketplace.',
    stack: ['JSON', 'VS Code Extension API', 'Design Systems'],
    links: [
      {
        label: 'Marketplace',
        url: 'https://tinyurl.com/vscode-theme'
      }
    ]
  },
  {
    title: 'KhetConnect',
    subtitle: 'Agricultural IoT Measurement System',
    description:
      'Full-stack platform for soil monitoring with live dashboards, resilient ingestion APIs, and hardware integration.',
    stack: ['React', 'Express.js', 'Node.js', 'Arduino', 'Raspberry Pi Pico'],
    links: [
      {
        label: 'Repository',
        url: 'https://github.com/dev-kvt/port-your-soil-sensors-and-arduino'
      },
      {
        label: 'Research Thesis',
        url: 'https://zenodo.org/records/17135749'
      },
      {
        label: 'Live Demo',
        url: 'https://khetconnect.vercel.app/'
      }
    ]
  }
];

export const SOCIALS = [
  {
    label: 'GitHub',
    url: 'https://github.com/dev-kvt'
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/devkvt'
  }
];
