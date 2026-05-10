"use client"

import { motion } from "framer-motion"

const badges = [
  "v1.0",
  "10+ páginas",
  "100% atualizado",
  "PHP + MySQL",
  "E-commerce",
]

export default function DocumentationCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative mx-auto max-w-5xl"
    >
      <div className="absolute -inset-[2px] rounded-[2.5rem] bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 opacity-50 blur-sm transition-all duration-700 group-hover:opacity-80 group-hover:blur-md" />
      <div className="absolute -inset-[2px] rounded-[2.5rem] bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 opacity-30 transition-all duration-700 group-hover:opacity-60" />

      <div className="relative rounded-[2.5rem] bg-cafe-black/90 p-[2px] backdrop-blur-xl">
        <div className="rounded-[2.45rem] bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8">
          <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black tracking-tight text-white">
                  CAFÉ
                </span>
                <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-2xl font-black tracking-tight text-transparent">
                  STORE
                </span>
                <span className="rounded-full bg-white/5 px-3 py-0.5 text-xs font-medium text-zinc-400">
                  DOCS
                </span>
              </div>
              <p className="mt-1 text-sm text-zinc-500">
                Documentação técnica oficial do projeto
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:border-red-500/20 hover:text-red-400"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/5 bg-black shadow-2xl shadow-red-500/10">
            <div className="flex items-center gap-3 border-b border-white/5 bg-white/[0.02] px-5 py-3">
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-orange-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/60" />
              </div>
              <div className="flex flex-1 items-center justify-center gap-2">
                <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-medium text-zinc-600">
                  PDF
                </span>
                <span className="text-xs text-zinc-500">E-commerce.pdf</span>
              </div>
              <span className="rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] font-medium text-red-400">
                leitura interna
              </span>
            </div>

            <div className="relative">
              {children}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
