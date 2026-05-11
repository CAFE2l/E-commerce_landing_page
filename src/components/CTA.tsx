"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-cafe-black py-32">
      <div className="bg-grid-light pointer-events-none absolute inset-0 opacity-20" />
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-10" />

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-red-500/20 via-orange-500/15 to-yellow-400/20 blur-[150px]" />
      <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-red-500/25 via-orange-500/20 to-yellow-400/25 blur-[100px]" />

      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
        className="absolute top-0 left-0 right-0 led-line"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 1.5,
        }}
        className="absolute bottom-0 left-0 right-0 led-line"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-1.5 text-xs font-medium text-red-400 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            Chegou a hora
          </motion.span>

          <h2 className="mb-6 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            PRONTO PARA CONSTRUIR SUA
            <br />
            <span className="text-gradient glow-text-lg">
              IDENTIDADE DIGITAL
            </span>
            ?
          </h2>

          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-zinc-400">
            Junte-se aos serviços oferecidos pela CAFÉ STORE.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <a
                href="/documentacao"
                className="inline-flex items-center overflow-hidden rounded-2xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 p-[2px] transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,122,0,0.4)] hover:shadow-red-500/25"
              >
                <span className="block rounded-2xl bg-cafe-black px-8 py-4 text-base font-bold text-white transition-all duration-500 hover:bg-transparent sm:text-lg">
                  Acessar Documentação Completa
                </span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 via-orange-500/30 to-transparent" />
    </section>
  );
}
