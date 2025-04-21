import AboutSection from '../components/sections/AboutSection'
import ExperienceSection from '../components/sections/ExperienceSection'
import SkillsSection from '../components/sections/SkillSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Ngo Duy Hoang Long',
  description: 'Learn more about Ngo Duy Hoang Long - Software Engineer with expertise in C#, Java, and modern web technologies.',
}

export default function AboutPage() {
  return (
    <div>
      
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
    </div>
  )
}