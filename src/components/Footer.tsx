"use client"

import { motion } from "framer-motion"
import { Code2, Globe } from "lucide-react"

const footerLinks = [
  {
    label: "Tecnologias",
    links: [
      { name: "HTML/CSS", href: "#" },
      { name: "JavaScript", href: "#" },
      { name: "PHP 8", href: "#" },
      { name: "MySQL", href: "#" },
    ],
  },
  {
    label: "Serviços",
    links: [
      { name: "Cloudinary", href: "https://cloudinary.com" },
      { name: "Mercado Pago", href: "#" },
      { name: "InfinityFree", href: "#" },
    ],
  },
  {
    label: "Links",
    links: [
      { name: "Documentação", href: "/documentacao" },
      { name: "Status", href: "#" },
      { name: "Changelog", href: "#" },
    ],
  },
]

const socialLinks = [
  { label: "GitHub", href: "#", icon: <Code2 size={18} /> },
  {
    label: "Discord",
    href: "#",
    icon: (
      <img
        src="/icons/8-bit/discord.png"
        alt="Discord"
        className="h-5 w-5 object-contain pixelated"
      />
    ),
  },
  {
    label: "E-mail",
    href: "#",
    icon: (
      <img
        src="/icons/8-bit/gmail.png"
        alt="E-mail"
        className="h-5 w-5 object-contain pixelated"
      />
    ),
  },
  { label: "Site", href: "#", icon: <Globe size={18} /> },
]

const brandIcons = [
  { file: "youtube.png", label: "YouTube" },
  { file: "twitter.png", label: "Twitter" },
  { file: "whatsapp.png", label: "WhatsApp" },
  { file: "telegram.png", label: "Telegram" },
  { file: "linkedin.png", label: "LinkedIn" },
  { file: "pinterest.png", label: "Pinterest" },
]

export default function Footer() {
  return (
    <footer
      id="contato"
      className="relative overflow-hidden border-t border-white/5 bg-cafe-black"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-10" />
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-5" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 via-orange-500/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-8 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-1"
          >
            <a href="/" className="group mb-4 flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-white transition-all duration-300 group-hover:opacity-80">
                CAFÉ
              </span>
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-2xl font-black tracking-tight text-transparent transition-all duration-300 group-hover:opacity-80">
                STORE
              </span>
            </a>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-zinc-500">
              Sua identidade digital começa aqui. Overlays, assets e muito mais
              para creators modernos.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-zinc-500 transition-all duration-300 hover:bg-red-500/10 hover:text-red-400 hover:shadow-[0_0_15px_rgba(255,60,56,0.15)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1 * (i + 1),
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
                {group.label}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-500 transition-all duration-300 hover:text-white hover:pl-1"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 border-t border-white/5 pt-8"
        >
          <p className="mb-4 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
            Presença digital do criador
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {brandIcons.map((brand) => (
              <div
                key={brand.label}
                className="group relative flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.03] transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,60,56,0.1)]"
              >
                <img
                  src={`/icons/8-bit/${brand.file}`}
                  alt={brand.label}
                  className="h-6 w-6 object-contain opacity-60 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 pixelated"
                />
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] text-zinc-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {brand.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row"
        >
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} CAFÉ STORE. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-zinc-600 transition-colors duration-300 hover:text-zinc-400"
            >
              Privacidade
            </a>
            <a
              href="#"
              className="text-xs text-zinc-600 transition-colors duration-300 hover:text-zinc-400"
            >
              Termos
            </a>
            <a
              href="#"
              className="text-xs text-zinc-600 transition-colors duration-300 hover:text-zinc-400"
            >
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
