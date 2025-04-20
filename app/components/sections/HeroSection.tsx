"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-lg font-medium text-primary">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
                Ngo Duy Hoang Long
              </h1>
              <h3 className="text-xl md:text-2xl font-medium text-muted-foreground">
                Software Engineer & Fullstack Developer
              </h3>
            </div>
            
            <p className="text-muted-foreground text-lg max-w-xl">
              C# and Java Developer with 1+ year experience building enterprise applications. 
              Expert in ASP.NET Core, Spring Boot, and RESTful APIs following OOP principles.
            </p>
            
            <div className="flex items-center space-x-4">
              <Link href="https://github.com/hlong-dev" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate/10 hover:bg-slate/20 text-foreground transition">
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link href="https://linkedin.com/in/hoanglong-work" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate/10 hover:bg-slate/20 text-foreground transition">
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link href="mailto:hoanglong.work@outlook.com"
                className="p-2 rounded-full bg-slate/10 hover:bg-slate/20 text-foreground transition">
                <MdEmail className="w-6 h-6" />
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Link href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 font-medium text-white hover:bg-primary/90 transition-colors">
                Contact Me
              </Link>
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 font-medium text-foreground hover:bg-accent/20 transition-colors">
                Download Resume
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex justify-center items-center"
          >
            <div className="relative w-80 h-80">
  <div className="absolute inset-0 rounded-full bg-primary/20 animate-float"></div>
  <div className="absolute inset-2 rounded-full bg-background border-2 border-primary flex items-center justify-center overflow-hidden">
    <img
      src="/images/avt.jpg"
      alt="Avatar"
      className="w-full h-full object-cover rounded-full"
    />
  </div>
</div>

          </motion.div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-1/2 bg-accent/20 rounded-l-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 bg-primary/20 rounded-full blur-3xl"></div>
    </section>
  )
}