import Hero from '../components/sections/Hero'
import AboutOwner from '../components/sections/AboutOwner'
import ProductGrid from '../components/sections/ProductGrid'
import TrustSection from '../components/sections/TrustSection'
import ContactCTA from '../components/sections/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutOwner />
      <ProductGrid />
      <TrustSection />
      <ContactCTA />
    </>
  )
}
