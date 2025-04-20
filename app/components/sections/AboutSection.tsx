"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../ui/SectionTitle'
import { FaGraduationCap, FaCode, FaServer, FaProjectDiagram } from 'react-icons/fa'

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Me" 
          subtitle="A passionate software engineer focused on building innovative solutions" 
        />
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          <div className="space-y-6">
            <p className="text-lg text-foreground">
              I'm a Software Engineer specializing in fullstack development with a strong background in C#, Java, and modern web technologies. Born in 2003, I've been passionate about technology from an early age and have developed a comprehensive skill set in both backend and frontend development.
            </p>
            <p className="text-lg text-foreground">
              Currently pursuing my B.S. in Software Engineering at Ho Chi Minh City University of Technology, I've maintained a strong academic record with a 3.22/4.0 GPA, even achieving a perfect 4.0 GPA for one semester.
            </p>
            <p className="text-lg text-foreground">
              Outside of my academic pursuits, I've gained professional experience at Beehexa Corporation, where I worked on complex projects including a social media platform and integration systems. I'm currently handling remote outsourcing work for Bach Tuong Phat Trading Investment JSC, developing custom e-commerce analytics tools.
            </p>
            <p className="text-lg text-foreground">
              I'm passionate about creating elegant, efficient solutions to complex problems and continuously expanding my knowledge in emerging technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-background rounded-lg shadow-md p-6 border border-border hover:border-primary transition-colors">
              <div className="text-primary mb-4">
                <FaGraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-muted-foreground">B.S. in Software Engineering with 3.22/4.0 GPA at HCMUT</p>
            </div>
            
            <div className="bg-background rounded-lg shadow-md p-6 border border-border hover:border-primary transition-colors">
              <div className="text-primary mb-4">
                <FaCode className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Frontend</h3>
              <p className="text-muted-foreground">Expertise in React, TypeScript, Next.js, and modern UI frameworks</p>
            </div>
            
            <div className="bg-background rounded-lg shadow-md p-6 border border-border hover:border-primary transition-colors">
              <div className="text-primary mb-4">
                <FaServer className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Backend</h3>
              <p className="text-muted-foreground">Strong skills in C#, Java, ASP.NET Core, and Spring Boot</p>
            </div>
            
            <div className="bg-background rounded-lg shadow-md p-6 border border-border hover:border-primary transition-colors">
              <div className="text-primary mb-4">
                <FaProjectDiagram className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Architecture</h3>
              <p className="text-muted-foreground">Experience with microservices, cloud deployment, and SOLID principles</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}