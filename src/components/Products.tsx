"use client"

import { motion } from "framer-motion"

const techIcons = [
  { name: "HTML", file: "html.png", label: "HTML5", category: "Frontend" },
  { name: "CSS", file: "css.png", label: "CSS3", category: "Frontend" },
  { name: "JavaScript", file: "javascript.png", label: "JavaScript", category: "Frontend" },
  { name: "PHP", file: "php.png", label: "PHP 8", category: "Backend" },
  { name: "MySQL", file: "mysql.png", label: "MySQL", category: "Banco" },
  { name: "Cloudinary", file: "cloudinary.png", label: "Cloudinary", category: "Imagens" },
  { name: "Mercado Pago", file: "mercado_pago.png", label: "Mercado Pago", category: "Pagamento" },
  { name: "InfinityFree", file: "inifinityfree.png", label: "InfinityFree", category: "Hospedagem" },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export default function Products() {
  return (
    <section id="tecnologias" className="relative overflow-hidden bg-cafe-black py-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-15" />

      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-red-500/10 blur-[150px]" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-yellow-400/8 blur-[150px]" />
      <div className="absolute left-1/3 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-orange-500/5 blur-[120px]" />

      <div className="absolute top-0 left-0 right-0 led-line" />
      <div className="absolute bottom-0 left-0 right-0 led-line" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-red-500/20 bg-red-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 backdrop-blur-sm">
            Stack
          </span>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Tecnologias{" "}
            <span className="text-gradient glow-text">utilizadas</span>
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Ferramentas modernas e confiáveis que fazem a CAFÉ STORE funcionar.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto grid max-w-6xl grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4"
        >
          {techIcons.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="group relative cursor-default overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-8 text-center transition-all duration-500 ease-out hover:scale-[1.04] hover:border-orange-500/20 hover:shadow-[0_0_40px_rgba(255,122,0,0.12)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white/5 p-4 transition-all duration-500 group-hover:bg-white/[0.08] group-hover:shadow-[0_0_30px_rgba(255,122,0,0.15)]">
                  <img
                    src={`/icons/${tech.file}`}
                    alt={tech.name}
                    className="h-full w-full object-contain drop-shadow-lg transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <span className="text-sm font-semibold text-zinc-400 transition-colors duration-300 group-hover:text-white">
                    {tech.label}
                  </span>
                  <p className="mt-0.5 text-xs text-zinc-600">{tech.category}</p>
                </div>
              </div>

              <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-12 text-center"
        >
          <a
            href="/documentacao"
            className="group inline-flex items-center gap-2 rounded-xl border border-zinc-800 px-8 py-3.5 text-sm font-semibold text-zinc-300 transition-all duration-300 ease-out hover:border-orange-500/30 hover:text-white hover:shadow-[0_0_30px_rgba(255,122,0,0.1)]"
          >
            Ler documentação técnica
          </a>
        </motion.div>
      </div>
    </section>
  )
}
