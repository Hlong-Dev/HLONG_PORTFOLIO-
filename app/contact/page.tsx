import ContactSection from '../components/sections/ContactSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Ngo Duy Hoang Long',
  description: 'Get in touch with Ngo Duy Hoang Long - Software Engineer for project inquiries, job opportunities, or collaboration.',
}

export default function ContactPage() {
  return (
    <div>
      
      
      <ContactSection />
    </div>
  )
}