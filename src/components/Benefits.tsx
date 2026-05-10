"use client"

import { motion } from "framer-motion"
import { Zap, Shield, FolderTree } from "lucide-react"

const diferenciais = [
  {
    icon: Zap,
    title: "Performance",
    description:
      "Sites rápidos e otimizados com foco em Core Web Vitals e experiência do usuário.",
    gradient: "from-red-500/10 via-orange-500/5 to-transparent",
    borderGlow: "group-hover:border-red-500/30 group-hover:shadow-[0_0_40px_rgba(255,60,56,0.12)]",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-400",
  },
  {
    icon: Shield,
    title: "Segurança",
    description:
      "Implementação de boas práticas contra SQL Injection, XSS e outras vulnerabilidades web.",
    gradient: "from-orange-500/10 via-yellow-400/5 to-transparent",
    borderGlow: "group-hover:border-orange-500/30 group-hover:shadow-[0_0_40px_rgba(255,122,0,0.12)]",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
  },
  {
    icon: FolderTree,
    title: "Organização",
    description:
      "Código limpo, componentizado e estrutura escalável para projetos de longo prazo.",
    gradient: "from-yellow-400/10 via-red-500/5 to-transparent",
    borderGlow: "group-hover:border-yellow-400/30 group-hover:shadow-[0_0_40px_rgba(255,208,0,0.12)]",
    iconBg: "bg-yellow-400/10",
    iconColor: "text-yellow-400",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export default function Benefits() {
  return (
    <section id="diferenciais" className="relative overflow-hidden bg-cafe-black py-24">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-10" />

      <div className="absolute left-1/2 top-1/3 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-red-500/8 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-yellow-400/5 blur-[100px]" />

      <div className="absolute top-0 left-0 right-0 led-line" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-red-500/20 bg-red-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 backdrop-blur-sm">
            Diferenciais
          </span>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Por que{" "}
            <span className="text-gradient glow-text">me contratar?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Qualidade e compromisso em cada linha de código.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3"
        >
          {diferenciais.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className={`group relative cursor-default overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br ${item.gradient} p-8 transition-all duration-500 ease-out hover:scale-[1.03] ${item.borderGlow}`}
              >
                <div className="absolute inset-0 bg-white/[0.02] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${item.iconBg} backdrop-blur-sm transition-all duration-500 group-hover:scale-110 ${item.iconColor}`}
                  >
                    <Icon size={26} />
                  </div>

                  <h3 className={`mb-3 text-lg font-bold text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:via-orange-400 group-hover:to-yellow-400 group-hover:bg-clip-text`}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                    {item.description}
                  </p>
                </div>

                <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-gradient-to-br from-white/5 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
