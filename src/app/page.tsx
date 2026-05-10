import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Products from "@/components/Products"
import Tools from "@/components/Tools"
import Benefits from "@/components/Benefits"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-cafe-black">
      <Header />
      <Hero />
      <Products />
      <Tools />
      <Benefits />
      <CTA />
      <Footer />
    </main>
  )
}
