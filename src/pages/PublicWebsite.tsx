import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

interface PublicWebsiteProps {
  isDark: boolean
  setIsDark: (isDark: boolean) => void
}

export default function PublicWebsite({ isDark, setIsDark }: PublicWebsiteProps) {
  return (
    <div>
      <Navbar isDark={isDark} setIsDark={setIsDark} isPublic={true} />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}