import type { Metadata } from 'next'
import Link from 'next/link'
import SectionTitle from '../components/ui/SectionTitle'
import { FaGithub, FaGlobe, FaCode, FaServer, FaDatabase } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Projects - Ngo Duy Hoang Long',
  description: 'Explore my software development portfolio including enterprise backends, web applications, and open-source contributions.',
}

// Full project data with more details
const projects = [
  {
    id: "cinemate",
    title: "CineMate - Collaborative Streaming Platform",
    description: "A real-time video watching application with synchronized playback for remote teams, allowing users to watch content together from multiple sources with integrated chat and video conferencing capabilities.",
    longDescription: "CineMate was developed to solve the problem of remote teams wanting to watch training videos, presentations, or entertainment content together. The application uses a microservices architecture built with ASP.NET Core for the backend services and React for the frontend. It leverages WebSockets for real-time communication and WebRTC for peer-to-peer video streaming, ensuring minimal latency across different geographic locations.",
    role: "Lead Developer & Architect",
    image: "/images/cinemate.jpg",
    githubUrl: "https://github.com/hlong-dev/cinemate",
    liveUrl: "https://cinemate.website",
    technologies: [
      { name: "ASP.NET Core", type: "backend" },
      { name: "SignalR", type: "backend" },
      { name: "WebRTC", type: "frontend" },
      { name: "React", type: "frontend" },
      { name: "Redis", type: "database" },
      { name: "PostgreSQL", type: "database" },
      { name: "Docker", type: "devops" },
      { name: "Azure", type: "devops" }
    ],
    keyFeatures: [
      "Low-latency synchronized video playback across multiple devices",
      "Integration with popular streaming platforms including YouTube and Netflix",
      "End-to-end encrypted WebRTC video conferencing",
      "OAuth 2.0 and JWT authentication system",
      "Customizable user rooms with admin controls",
      "Cross-platform compatibility (web, desktop via Electron)"
    ],
    challenges: "The biggest challenge was achieving true synchronization across users with varying internet speeds and device capabilities. This was solved by implementing an adaptive buffer system and custom network latency compensation algorithms."
  },
  {
    id: "noteworth",
    title: "NoteWorth - Collaborative Note-Taking App",
    description: "A full-stack note management application with advanced collaboration features, allowing users to create, share, and collaboratively edit notes in real-time with markdown support.",
    longDescription: "NoteWorth addresses the need for teams to collaborate on documentation and notes in real-time. Using a modern technology stack, it provides a seamless editing experience with version history, access controls, and rich formatting options. The application is built with performance and security in mind, featuring end-to-end encryption for sensitive notes and offline capabilities.",
    role: "Full-Stack Developer",
    image: "/images/noteworth.jpg",
    githubUrl: "https://github.com/hlong-dev/noteworth",
    liveUrl: "https://noteworth.vercel.app",
    technologies: [
      { name: "Next.js", type: "frontend" },
      { name: "TypeScript", type: "frontend" },
      { name: "Node.js", type: "backend" },
      { name: "MongoDB", type: "database" },
      { name: "Tailwind CSS", type: "frontend" },
      { name: "Docker", type: "devops" },
      { name: "Vercel", type: "devops" }
    ],
    keyFeatures: [
      "Real-time collaborative editing with operational transformation",
      "Advanced markdown support with live preview",
      "Hierarchical organization system with tags and folders",
      "Version history and rollback capabilities",
      "Fine-grained access control and permission system",
      "PWA support for offline access and editing"
    ],
    challenges: "Implementing conflict resolution for simultaneous edits was a significant challenge. I developed a custom operational transformation algorithm that ensures consistency across all clients while preserving user intent."
  },
  {
    id: "supermetric",
    title: "Supermetric - E-commerce Analytics Platform",
    description: "A custom analytics platform aggregating sales data from multiple e-commerce channels into a unified dashboard with advanced visualization and reporting tools.",
    longDescription: "Supermetric was developed for Bach Tuong Phat Trading Investment JSC to consolidate and analyze their e-commerce performance across multiple platforms. The solution includes automated data collection via APIs and web scraping, data normalization, and a comprehensive analytics dashboard. This helped the company move from spreadsheet-based reporting to a real-time data visualization platform.",
    role: "Lead Developer",
    image: "/images/supermetric.jpg",
    githubUrl: "https://github.com/hlong-dev/supermetric",
    liveUrl: "https://supermetric-demo.vercel.app",
    technologies: [
      { name: "Python", type: "backend" },
      { name: "Django", type: "backend" },
      { name: "React", type: "frontend" },
      { name: "PostgreSQL", type: "database" },
      { name: "Selenium", type: "backend" },
      { name: "Beautiful Soup", type: "backend" },
      { name: "Azure", type: "devops" }
    ],
    keyFeatures: [
      "Automated data collection from Shopee, TikTok, and DienMayXanh",
      "Machine learning-based sales forecasting",
      "Custom KPI tracking and goal setting",
      "Interactive data visualization dashboards",
      "Scheduled report generation and email distribution",
      "API integration with inventory management systems"
    ],
    challenges: "The main challenge was handling the inconsistent data formats across different e-commerce platforms and building resilient scrapers that could adapt to platform UI changes. This was solved by implementing a modular architecture with platform-specific adapters and automatic error detection and reporting."
  },
  {
    id: "hexasync",
    title: "HexaSync - Enterprise Integration Platform",
    description: "A system integration platform for synchronizing data between disparate business systems, enabling seamless information flow across the enterprise.",
    longDescription: "During my time at Beehexa Corporation, I contributed to the HexaSync platform, which facilitates data integration between various enterprise systems like ERP, CRM, and e-commerce platforms. The system uses a message-based architecture with configurable data transformation pipelines to ensure accurate and reliable data synchronization.",
    role: "Backend Developer",
    image: "/images/hexasync.jpg",
    githubUrl: "https://github.com/hlong-dev/hexasync-module",
    liveUrl: "https://www.beehexa.com/products/hexasync",
    technologies: [
      { name: "Java", type: "backend" },
      { name: "Spring Boot", type: "backend" },
      { name: "RabbitMQ", type: "backend" },
      { name: "MySQL", type: "database" },
      { name: "Redis", type: "database" },
      { name: "Docker", type: "devops" },
      { name: "Kubernetes", type: "devops" }
    ],
    keyFeatures: [
      "Configurable data mapping and transformation rules",
      "Error handling and retry mechanisms",
      "Real-time monitoring and alerting",
      "Scheduled and event-triggered synchronization",
      "Secure API gateway with rate limiting",
      "Comprehensive audit logging"
    ],
    challenges: "Ensuring data consistency across systems with different transaction models was challenging. We implemented a distributed transaction management system with compensating transactions to maintain data integrity."
  }
]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Page Header */}
      <div className="w-full bg-accent/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">My Projects</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A collection of my recent professional work and personal projects, showcasing expertise
            in various technologies and domains within software development.
          </p>
        </div>
      </div>
      
      {/* Project Filter */}
      <div className="w-full py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
              All Projects
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-foreground hover:bg-accent/20 transition-colors">
              Web Applications
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-foreground hover:bg-accent/20 transition-colors">
              Backend Systems
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-foreground hover:bg-accent/20 transition-colors">
              Integrations
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-foreground hover:bg-accent/20 transition-colors">
              Data Analytics
            </button>
          </div>
        </div>
      </div>
      
      {/* Projects List */}
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Project image */}
                <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'} rounded-lg overflow-hidden shadow-lg border border-border h-64 bg-slate/5 flex items-center justify-center group-hover:border-primary transition-colors`}>
                  <div className="text-5xl font-bold text-primary/20">
                    {project.title.split(' - ')[0]}
                  </div>
                  {
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />}
                </div>
                
                {/* Project info */}
                <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <p className="text-foreground mb-4">
                    <span className="font-medium">Role:</span> {project.role}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} 
                        className={`px-3 py-1 rounded-full text-xs ${
                          tech.type === 'backend' ? 'bg-primary/10 text-primary' :
                          tech.type === 'frontend' ? 'bg-accent/20 text-accent-foreground' :
                          tech.type === 'database' ? 'bg-secondary/10 text-secondary' :
                          'bg-slate/10 text-foreground'
                        }`}>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-2 rounded-md bg-primary text-white px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors">
                      <FaCode /> View Details
                    </Link>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-slate text-white px-4 py-2 text-sm font-medium hover:bg-slate/90 transition-colors">
                      <FaGithub /> GitHub
                    </Link>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent/20 transition-colors">
                      <FaGlobe /> Live Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Open Source Section */}
      <div className="w-full bg-accent/5 py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Open Source Contributions" 
            subtitle="Projects I've contributed to in the open source community" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg shadow-md border border-border hover:border-primary transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-foreground">Spring Data Neo4j Extensions</h3>
                <FaGithub className="text-slate h-5 w-5" />
              </div>
              <p className="text-muted-foreground mb-4">
                Contributed performance improvements and new features to the Spring Data Neo4j project, enabling better integration between Spring Boot and Neo4j graph databases.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Java</span>
                </div>
                <Link href="https://github.com/spring-projects/spring-data-neo4j" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline">
                  View on GitHub
                </Link>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-md border border-border hover:border-primary transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-foreground">ASP.NET Core Auth Extensions</h3>
                <FaGithub className="text-slate h-5 w-5" />
              </div>
              <p className="text-muted-foreground mb-4">
                Created a library of extensions for ASP.NET Core identity system, adding advanced features like two-factor authentication, role-based policies, and enhanced JWT handling.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-xs text-muted-foreground">C#</span>
                </div>
                <Link href="https://github.com/hlong-dev/aspnet-auth-extensions" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline">
                  View on GitHub
                </Link>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-md border border-border hover:border-primary transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-foreground">Next.js UI Component Library</h3>
                <FaGithub className="text-slate h-5 w-5" />
              </div>
              <p className="text-muted-foreground mb-4">
                Developed and maintained a collection of reusable React components optimized for Next.js, featuring accessibility compliance, dark mode support, and responsive design.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-xs text-muted-foreground">TypeScript</span>
                </div>
                <Link href="https://github.com/hlong-dev/nextjs-ui-components" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline">
                  View on GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="w-full py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Interested in working together?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 font-medium text-white hover:bg-primary/90 transition-colors">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  )
}