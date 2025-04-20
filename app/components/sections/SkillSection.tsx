"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../ui/SectionTitle'
import { FaCode, FaDatabase, FaCloud, FaTools } from 'react-icons/fa'

// Define the skill categories
const skillCategories = [
  {
    icon: <FaCode className="w-6 h-6" />,
    title: "Programming Languages",
    skills: [
      { name: "C#", level: 90 },
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "TypeScript", level: 85 },
      { name: "C++", level: 75 },
      { name: "Dart", level: 70 },
    ],
  },
  {
    icon: <FaDatabase className="w-6 h-6" />,
    title: "Databases & Backend",
    skills: [
      { name: "ASP.NET Core", level: 90 },
      { name: "Spring Boot", level: 85 },
      { name: "RDBMS", level: 85 },
      { name: "Neo4j", level: 75 },
      { name: "NoSQL", level: 80 },
      { name: "RESTful APIs", level: 90 },
    ],
  },
  {
    icon: <FaTools className="w-6 h-6" />,
    title: "Frontend & Tools",
    skills: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Swift", level: 65 },
      { name: "Git/GitHub", level: 90 },
    ],
  },
  {
    icon: <FaCloud className="w-6 h-6" />,
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 80 },
      { name: "Azure", level: 85 },
      { name: "AWS", level: 75 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Microservices", level: 85 },
      { name: "System Integration", level: 80 },
    ],
  },
]

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="My Skills" 
          subtitle="Technology expertise and competencies" 
        />
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-background rounded-lg shadow-md p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary">{category.icon}</div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-accent/20 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 + skillIndex * 0.1 }}
                        className="bg-primary h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {["Communication", "Teamwork", "Agile Mindset", "Documentation", "Adaptability", "Leadership"].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-accent/10 text-foreground rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}