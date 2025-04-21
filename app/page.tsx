import EnhancedHeroSection from './components/sections/EnhancedHeroSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillSection'
import ExperienceSection from './components/sections/ExperienceSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <EnhancedHeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}