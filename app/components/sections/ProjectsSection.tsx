"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import SectionTitle from '../ui/SectionTitle'
import { FaGithub, FaGlobe, FaMicrochip, FaNetworkWired, FaLock, FaUsers, FaRocket, FaDatabase } from 'react-icons/fa'

// Project data
const projects = [
  {
    title: "CineMate - Collaborative Streaming Platform",
    description: "A real-time video watching application with synchronized playback for remote teams, allowing users to watch content together from multiple sources.",
    image: "/images/cinemate.jpg", // You'll need to add this image to your public folder
    githubUrl: "https://github.com/hlong-dev/cinemate",
    liveUrl: "https://cinemate.website",
    tags: ["Microservices", "Real-time Streaming", "WebSocket", "WebRTC", "OAuth 2.0", "React"],
    features: [
      {
        icon: <FaMicrochip />,
        title: "Low-Latency Streaming",
        description: "Implemented using QUIC protocol, reducing network interruptions by 60%"
      },
      {
        icon: <FaNetworkWired />,
        title: "Cross-Platform Integration",
        description: "Synchronized playback from local files, YouTube, Netflix, and other platforms"
      },
      {
        icon: <FaUsers />,
        title: "WebRTC Chat System",
        description: "Video conferencing capabilities for enhanced collaboration during viewing"
      },
      {
        icon: <FaLock />,
        title: "Secure Authentication",
        description: "OAuth 2.0 implementation for protected streaming sessions"
      }
    ]
  },
  {
    title: "NoteWorth - Collaborative Note-Taking App",
    description: "A full-stack note management application with advanced collaboration features, allowing users to create, share, and collaboratively edit notes in real-time.",
    image: "/images/noteworth.jpg", // You'll need to add this image to your public folder
    githubUrl: "https://github.com/hlong-dev/noteworth",
    liveUrl: "https://noteworth.vercel.app/vi",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Docker", "Vercel", "RadixUI"],
    features: [
      {
        icon: <FaRocket />,
        title: "Modern UI",
        description: "Built with Tailwind CSS and RadixUI component library for a responsive design"
      },
      {
        icon: <FaLock />,
        title: "Secure Authentication",
        description: "Protects user data with industry-standard encryption"
      },
      {
        icon: <FaDatabase />,
        title: "RESTful API",
        description: "Comprehensive CRUD operations with role-based access control"
      },
      {
        icon: <FaNetworkWired />,
        title: "Collaborative Editing",
        description: "Real-time collaboration with advanced markdown support"
      }
    ]
  }
]

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Showcase of my recent work and personal projects" 
        />
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Project tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeProject === index 
                    ? 'bg-primary text-white' 
                    : 'bg-accent/10 text-foreground hover:bg-accent/20'
                }`}
              >
                {project.title.split(' - ')[0]}
              </button>
            ))}
          </div>
          
          {/* Project details */}
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={activeProject === index && inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20, display: 'none' }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Project image */}
              <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg border border-border h-64 bg-slate/5 flex items-center justify-center">
                <div className="text-5xl font-bold text-primary/20">
                  {project.title.split(' - ')[0]}
                </div>
                {/* If you have actual project images, uncomment this:
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                /> */}
              </div>
              
              {/* Project info */}
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="text-primary mt-1">{feature.icon}</div>
                      <div>
                        <div className="font-medium text-foreground">{feature.title}</div>
                        <div className="text-sm text-muted-foreground">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-slate text-white px-4 py-2 text-sm font-medium hover:bg-slate/90 transition-colors">
                    <FaGithub /> GitHub
                  </Link>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-primary text-white px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors">
                    <FaGlobe /> Live Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Link href="/projects"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 font-medium text-foreground hover:bg-accent/20 transition-colors">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}