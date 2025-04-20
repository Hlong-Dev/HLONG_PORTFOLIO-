"use client"

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../ui/SectionTitle'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission - Replace with actual API call in production
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Feel free to contact me for any inquiries or opportunities" 
        />
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <a href="mailto:hoanglong.work@outlook.com" className="text-muted-foreground hover:text-primary transition-colors">
                    hoanglong.work@outlook.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <FaPhone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Phone</h4>
                  <a href="tel:+84868686741" className="text-muted-foreground hover:text-primary transition-colors">
                    (+84) 868 686 741
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Location</h4>
                  <p className="text-muted-foreground">
                    Ho Chi Minh City, Vietnam
                  </p>
                </div>
              </div>
            </div>
            
            <div className="py-6">
              <h4 className="font-medium text-foreground mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/hlong-dev" target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate/10 hover:bg-slate/20 text-foreground transition">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/hoanglong-work" target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate/10 hover:bg-slate/20 text-foreground transition">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="p-6 bg-background rounded-lg shadow-md border border-border">
              <h4 className="font-medium text-foreground mb-3">Available For</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Full-time positions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Freelance projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Consulting opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Remote collaboration
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-background rounded-lg shadow-md p-6 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="user@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 flex items-center justify-center rounded-md bg-primary px-6 font-medium text-white hover:bg-primary/90 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="p-3 rounded-md bg-green-500/10 text-green-500 text-sm">
                  Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-3 rounded-md bg-red-500/10 text-red-500 text-sm">
                  An error occurred while sending your message. Please try again later.
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}