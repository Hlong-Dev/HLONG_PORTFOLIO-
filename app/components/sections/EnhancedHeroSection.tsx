"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useEffect, useState } from 'react'

export default function EnhancedHeroSection() {
  const [typedText, setTypedText] = useState("")
  const roles = ["Software Engineer", "C# Developer", "Java Developer", "Backend Specialist", "Full Stack Developer"]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)
  
  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    
    const type = () => {
      if (isDeleting) {
        // Deleting text
        if (typedText.length === 0) {
          setIsDeleting(false)
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
          setTypingSpeed(150)
        } else {
          setTypedText(currentRole.substring(0, typedText.length - 1))
          setTypingSpeed(50) // Faster when deleting
        }
      } else {
        // Typing text
        if (typedText.length === currentRole.length) {
          // Pause at the end of typing
          setTypingSpeed(2000) // Longer pause before deleting
          setIsDeleting(true)
        } else {
          setTypedText(currentRole.substring(0, typedText.length + 1))
          setTypingSpeed(150) // Normal typing speed
        }
      }
    }
    
    const typingTimer = setTimeout(type, typingSpeed)
    return () => clearTimeout(typingTimer)
  }, [typedText, currentRoleIndex, isDeleting, typingSpeed, roles])
  
  // Binary code animation for tech effect
  const [binaryLines, setBinaryLines] = useState<string[]>([])
  
  useEffect(() => {
    // Generate random binary strings
    const generateBinaryLine = () => {
      let line = ""
      for (let i = 0; i < 20; i++) {
        line += Math.random() > 0.5 ? "1" : "0"
      }
      return line
    }
    
    const lines = []
    for (let i = 0; i < 5; i++) {
      lines.push(generateBinaryLine())
    }
    setBinaryLines(lines)
    
    // Update binary lines occasionally
    const interval = setInterval(() => {
      const newLines = [...binaryLines]
      const randomIndex = Math.floor(Math.random() * newLines.length)
      newLines[randomIndex] = generateBinaryLine()
      setBinaryLines(newLines)
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Tech background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 right-10 text-primary/10 text-sm font-mono opacity-70">
          {binaryLines.map((line, index) => (
            <div key={index} className="my-1">{line}</div>
          ))}
        </div>
        <div className="absolute bottom-10 left-10 text-primary/10 text-sm font-mono opacity-70">
          {binaryLines.slice().reverse().map((line, index) => (
            <div key={index} className="my-1">{line}</div>
          ))}
        </div>
        
        {/* Abstract tech shapes */}
        <div className="absolute top-1/4 -right-10 w-40 h-40 rounded-full border border-primary/30 opacity-50"></div>
        <div className="absolute top-1/3 -right-5 w-20 h-20 rounded-full border border-primary/20 opacity-30"></div>
        <div className="absolute bottom-1/4 -left-10 w-40 h-40 rounded-full border border-primary/30 opacity-50"></div>
        <div className="absolute bottom-1/3 -left-5 w-20 h-20 rounded-full border border-primary/20 opacity-30"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(143,13,13,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(143,13,13,0.03)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-lg font-medium text-primary flex items-center">
                <span className="inline-block w-2 h-2 bg-primary mr-2 rounded-full"></span>
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
                Ngo Duy Hoang Long
              </h1>
              <div className="h-12">
                <h3 className="text-xl md:text-2xl font-medium text-muted-foreground flex items-center">
                  I'm a <span className="ml-2 text-primary font-mono border-r-2 border-primary pr-1">{typedText}</span>
                </h3>
              </div>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-muted-foreground text-lg max-w-xl"
            >
              C# and Java Developer with 1+ year experience building enterprise applications. 
              Expert in ASP.NET Core, Spring Boot, and RESTful APIs following OOP principles.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center space-x-4"
            >
              <Link href="https://github.com/hlong-dev" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate/10 hover:bg-primary hover:text-white text-foreground transition-all duration-300">
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link href="https://linkedin.com/in/hoanglong-work" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate/10 hover:bg-primary hover:text-white text-foreground transition-all duration-300">
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link href="mailto:hoanglong.work@outlook.com"
                className="p-2 rounded-full bg-slate/10 hover:bg-primary hover:text-white text-foreground transition-all duration-300">
                <MdEmail className="w-6 h-6" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
            >
              <Link href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 font-medium text-white hover:bg-primary/90 transition-colors group relative overflow-hidden">
                <span className="absolute inset-0 w-0 bg-white opacity-20 transition-all duration-300 group-hover:w-full"></span>
                <span className="relative">Contact Me</span>
              </Link>
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 font-medium text-foreground hover:bg-accent/20 transition-colors gap-2">
                <FaDownload className="w-4 h-4" /> Download Resume
              </Link>
            </motion.div>
            
            {/* Tech Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {["C#", "Java", "ASP.NET Core", "Spring Boot", "React", "Cloud"].map((tech, index) => (
                <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex justify-center items-center"
          >
            <div className="relative w-80 h-80">
              {/* Animated circles around avatar */}
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-primary/30 animate-spin-slow"></div>
              <div className="absolute inset-10 rounded-full bg-primary/5"></div>
              <div className="absolute inset-2 rounded-full bg-background border-2 border-primary flex items-center justify-center overflow-hidden">
                <img
                  src="/images/avt.jpg"
                  alt="Avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Tech icons around avatar */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-background rounded-full p-2 shadow-md border border-border">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <span className="text-xs font-bold">C#</span>
                </div>
              </div>
              <div className="absolute top-1/4 -right-4 bg-background rounded-full p-2 shadow-md border border-border">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <span className="text-xs font-bold">Java</span>
                </div>
              </div>
              <div className="absolute bottom-1/4 -right-4 bg-background rounded-full p-2 shadow-md border border-border">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <span className="text-xs font-bold">TS</span>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background rounded-full p-2 shadow-md border border-border">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <span className="text-xs font-bold">API</span>
                </div>
              </div>
              <div className="absolute bottom-1/4 -left-4 bg-background rounded-full p-2 shadow-md border border-border">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <span className="text-xs font-bold">SQL</span>
                </div>
              </div>
              <div className="absolute top-1/4 -left-4 bg-background rounded-full p-2 shadow-md border border-border">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <span className="text-xs font-bold">React</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Elements - More tech-focused */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-1/2 bg-accent/10 rounded-l-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 bg-primary/10 rounded-full blur-3xl"></div>
      
      {/* Circuit-like lines */}
      <svg className="absolute bottom-0 left-0 w-full h-20 text-primary/10" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 50H400V30H600V70H1000V40H1440" stroke="currentColor" strokeWidth="2"/>
        <circle cx="400" cy="50" r="4" fill="currentColor"/>
        <circle cx="600" cy="30" r="4" fill="currentColor"/>
        <circle cx="600" cy="70" r="4" fill="currentColor"/>
        <circle cx="1000" cy="70" r="4" fill="currentColor"/>
      </svg>
    </section>
  )
}