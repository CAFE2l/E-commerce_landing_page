"use client"

import { motion } from "framer-motion"
import { FileCode, PenTool, Clapperboard } from "lucide-react"

const toolCategories = [
  {
    icon: FileCode,
    title: "Editores",
    tools: ["Zed Editor", "VS Code", "Cursor", "Neovim"],
    color: "text-red-400",
    bg: "bg-red-500/10",
    gradient: "from-red-500/10 via-orange-500/5 to-transparent",
    desc: "Foco em performance",
  },
  {
    icon: PenTool,
    title: "Design",
    tools: ["Figma", "Canva"],
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    gradient: "from-orange-500/10 via-yellow-400/5 to-transparent",
    desc: "Interface e identidade visual",
  },
  {
    icon: Clapperboard,
    title: "Vídeo",
    tools: ["CapCut", "Filmora"],
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    gradient: "from-yellow-400/10 via-red-500/5 to-transparent",
    desc: "Edição dinâmica e criativa",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export default function Tools() {
  return (
    <section id="ferramentas" className="relative overflow-hidden bg-cafe-black py-24">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-10" />

      <div className="absolute left-1/3 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-orange-500/8 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-red-500/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-red-500/20 bg-red-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 backdrop-blur-sm">
            Ferramentas
          </span>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Tecnologia que{" "}
            <span className="text-gradient glow-text">utilizo</span>
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Para entregar resultados com performance e qualidade.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {toolCategories.map((cat) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.title}
                variants={cardVariants}
                className={`group relative cursor-default overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br ${cat.gradient} p-7 transition-all duration-500 ease-out hover:scale-[1.03] ${cat.color}`}
              >
                <div className="absolute inset-0 bg-white/[0.02] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${cat.bg} backdrop-blur-sm transition-all duration-500 group-hover:scale-110`}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="mb-2 text-base font-bold text-white">{cat.title}</h3>
                  <p className="mb-3 text-xs text-zinc-500">{cat.desc}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-white/5 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-zinc-400 transition-all duration-300 group-hover:border-white/10 group-hover:text-zinc-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
