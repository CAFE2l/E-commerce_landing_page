"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Tecnologias", href: "/#tecnologias" },
  { label: "Benefícios", href: "/#beneficios" },
  { label: "Documentação", href: "/documentacao" },
  { label: "Contato", href: "/#contato" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "border-b border-white/5 bg-cafe-black/80 shadow-lg shadow-red-500/5 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="group flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-white transition-all duration-300 group-hover:opacity-80">
            CAFÉ
          </span>
          <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-2xl font-black tracking-tight text-transparent transition-all duration-300 group-hover:opacity-80">
            STORE
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-zinc-400 transition-all duration-300 hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-all duration-300 hover:bg-white/5 hover:text-white">
            Entrar
          </button>
          <button className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 p-[1px] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,122,0,0.35)]">
            <span className="block rounded-lg bg-cafe-black px-5 py-2 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-transparent">
              Começar Agora
            </span>
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 text-white transition-colors duration-300 hover:text-red-400 md:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass-md absolute left-0 right-0 top-full border-t border-white/5 md:hidden"
          >
            <nav className="flex flex-col gap-2 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-zinc-400 transition-all duration-300 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <button className="w-full rounded-lg bg-white/5 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10">
                  Entrar
                </button>
                <button className="w-full rounded-lg bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 px-4 py-3 text-sm font-semibold text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,122,0,0.35)]">
                  Começar Agora
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
