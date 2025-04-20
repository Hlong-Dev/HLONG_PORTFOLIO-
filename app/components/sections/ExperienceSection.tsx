"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../ui/SectionTitle'
import { FaBriefcase, FaGraduationCap, FaCertificate, FaTrophy } from 'react-icons/fa'

const experiences = [
  {
    type: "work",
    icon: <FaBriefcase />,
    title: "Remote Outsourcing",
    company: "Bach Tuong Phat Trading Investment JSC",
    period: "01/11/2024 - Present",
    location: "Ha Noi",
    description: [
      "Independently developed Supermetric, a custom e-commerce analytics platform that aggregates and visualizes monthly sales data from multiple platforms (Shopee, TikTok, DienMayXanh)",
      "Engineered Python-based web crawling tools to automatically extract and process sales data from multiple e-commerce platforms",
      "Designed and implemented an end-to-end automated system on Azure Cloud virtual machines for data collection, processing, and visualization",
      "Built and maintain the full-stack web application for internal company use, enabling data-driven decision making based on consolidated sales analytics"
    ],
    tags: ["Python", "Web Scraping", "Data Automation", "E-commerce Analytics", "Azure Cloud", "Full-Stack Development"]
  },
  {
    type: "work",
    icon: <FaBriefcase />,
    title: "Full Stack Developer",
    company: "Beehexa Corporation",
    period: "20/3/2024 - 01/01/2025",
    location: "Ho Chi Minh",
    description: [
      "Engineered backend services in C# implementing N-tier architecture with RESTful APIs and SOLID design principles for modular, maintainable code structure",
      "Architected and optimized social relationship data model using Neo4j graph database",
      "Deployed and maintained application on Azure cloud infrastructure",
      "Integrated real-time notifications and messaging functionality via SignalR WebSockets",
      "Implemented OAuth2.0 and JWT-based authentication system with role-based access control, enhancing platform security",
      "Utilized HexaSync integration platform to automate data synchronization across multiple business systems",
      "Helped monitor and improve HexaSync's performance, ensuring smooth integration"
    ],
    tags: ["C#/.NET Core", "Neo4j", "RESTful API", "Microservices", "Azure DevOps", "SignalR", "System Integration"]
  },
  {
    type: "work",
    icon: <FaBriefcase />,
    title: "Internship",
    company: "Beehexa Corporation",
    period: "12/12/2023 - 15/3/2024",
    location: "Ho Chi Minh",
    description: [
      "Handled data processing and scraped questions from Stack Overflow to develop an open-source library",
      "Participated in the project of training a chatbot for the Beehexa's website"
    ],
    tags: ["Data Processing", "Web Scraping", "Chatbot Development"]
  },
  {
    type: "education",
    icon: <FaGraduationCap />,
    title: "B.S. in Software Engineering",
    company: "Ho Chi Minh City University of Technology",
    period: "Sept 2021 - April 2025",
    location: "Ho Chi Minh City",
    description: [
      "GPA: 3.22/4.0",
      "Achieved perfect 4.0 GPA for one semester, ranking among the top 20 students out of 4,000 for that term"
    ],
    tags: ["Software Engineering", "Computer Science", "Academic Excellence"]
  }
]

const certifications = [
  {
    icon: <FaCertificate />,
    title: "English Proficiency",
    organization: "CEFR B2 Level"
  },
  {
    icon: <FaCertificate />,
    title: "Agile Methodology",
    organization: "Professional Scrum Master (PSM I)"
  },
  {
    icon: <FaCertificate />,
    title: "Cloud Computing",
    organization: "AWS Certified Cloud Practitioner (In Progress)"
  }
]

const awards = [
  {
    icon: <FaTrophy />,
    title: "Outstanding Student",
    organization: "3 Consecutive Years"
  },
  {
    icon: <FaTrophy />,
    title: "My First Website 2024",
    organization: "Third Place"
  },
  {
    icon: <FaTrophy />,
    title: "IT GOT Talents 2024",
    organization: "Third Place"
  },
  {
    icon: <FaTrophy />,
    title: "MATHEMATICAL IQ 2023",
    organization: "Second Place"
  }
]

export default function ExperienceSection() {
  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [certificationsRef, certificationsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Experience & Education" 
          subtitle="My professional journey and academic background" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <motion.div
              ref={timelineRef}
              className="relative border-l-2 border-primary pl-6 ml-4 space-y-10"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-10 p-2 rounded-full bg-primary/20 text-primary border border-primary">
                    {exp.icon}
                  </div>
                  
                  <div className="bg-background rounded-lg shadow-md p-6 border border-border">
                    <div className="flex flex-col sm:flex-row justify-between mb-4">
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-4">
                      <div className="text-primary font-medium">{exp.company}</div>
                      <div className="hidden sm:block text-muted-foreground">•</div>
                      <div className="text-sm text-muted-foreground">{exp.location}</div>
                    </div>
                    
                    <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Certifications & Awards */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <motion.div
              ref={certificationsRef}
              className="space-y-8"
            >
              {/* Certifications */}
              <div className="bg-background rounded-lg shadow-md p-6 border border-border">
                <h3 className="text-xl font-bold mb-4 text-foreground">Certifications</h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={certificationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="text-primary">{cert.icon}</div>
                      <div>
                        <div className="font-medium text-foreground">{cert.title}</div>
                        <div className="text-sm text-muted-foreground">{cert.organization}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Awards */}
              <div className="bg-background rounded-lg shadow-md p-6 border border-border">
                <h3 className="text-xl font-bold mb-4 text-foreground">Awards & Achievements</h3>
                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={certificationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="text-accent">{award.icon}</div>
                      <div>
                        <div className="font-medium text-foreground">{award.title}</div>
                        <div className="text-sm text-muted-foreground">{award.organization}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}