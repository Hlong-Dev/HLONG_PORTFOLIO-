import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-lg text-primary mb-4">Ngo Duy Hoang Long</h3>
            <p className="text-sm text-muted-foreground mb-4">
              C# and Java Developer with expertise in ASP.NET Core, Spring Boot, and RESTful APIs.
              Building secure, high-performance applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/hlong-dev" target="_blank" rel="noopener noreferrer" 
                className="text-foreground hover:text-primary transition">
                <FaGithub className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com/in/hoanglong-work" target="_blank" rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition">
                <FaLinkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:hoanglong.work@outlook.com"
                className="text-foreground hover:text-primary transition">
                <FaEnvelope className="h-5 w-5" />
              </Link>
              <Link href="tel:+84868686741"
                className="text-foreground hover:text-primary transition">
                <FaPhone className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition">
                Home
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition">
                About
              </Link>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition">
                Projects
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Ho Chi Minh City, Vietnam</p>
              <p>hoanglong.work@outlook.com</p>
              <p>(+84) 868 686 741</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-center text-xs text-muted-foreground">
            © {currentYear} Ngo Duy Hoang Long. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}