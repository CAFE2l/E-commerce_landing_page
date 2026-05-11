"use client";

import { motion } from "framer-motion";

const floatingAnimation = {
  y: [0, -12, 0],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
};

const glowPulse = {
  scale: [1, 1.15, 1],
  opacity: [0.25, 0.55, 0.25],
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
};

const ledPulse = {
  opacity: [0.2, 0.5, 0.2],
  transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" as const },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-cafe-black">
      <div className="bg-grid-light pointer-events-none absolute inset-0 opacity-40" />
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-15" />
      <div className="bg-dots-sm pointer-events-none absolute inset-0 opacity-10" />

      <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/15 blur-[150px]" />
      <div className="absolute right-0 top-1/4 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 h-[350px] w-[350px] rounded-full bg-yellow-400/8 blur-[100px]" />

      <motion.div
        animate={ledPulse}
        className="absolute top-32 left-0 right-0 led-line"
      />
      <motion.div
        animate={ledPulse}
        className="absolute bottom-40 left-0 right-0 led-line"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,122,0,0.3), rgba(255,208,0,0.3), transparent)",
        }}
      />

      <div className="absolute top-1/3 left-0 h-40 w-px bg-gradient-to-b from-transparent via-red-500/30 to-transparent" />
      <div className="absolute top-1/4 right-0 h-40 w-px bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 pt-32 pb-20 lg:flex-row lg:px-8 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-1.5 text-xs font-medium text-red-400 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            Marketplace Digital — Lançamento em 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mb-6 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="text-white">TUDO PARA SUA</span>
            <br />
            <span className="text-gradient glow-text-lg">IDENTIDADE</span>
            <br />
            <span className="text-gradient glow-text-lg">DIGITAL.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-zinc-400 lg:mx-0 lg:text-lg"
          >
            Criação de web-aplicações, agências digitais, sites e landing pages
            para você e seu negócio
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-4 sm:flex-row lg:items-start"
          >
            <a
              href="#servicos"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 p-[1px] transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_0_40px_rgba(255,122,0,0.35)]"
            >
              <span className="block rounded-xl bg-cafe-black px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-transparent">
                Explorar
              </span>
            </a>
            <a
              href="/documentacao"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 px-8 py-3.5 text-sm font-semibold text-zinc-300 transition-all duration-300 ease-out hover:border-zinc-500 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              Ver Documentação
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.4,
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="relative flex flex-1 items-center justify-center"
        >
          <motion.div
            animate={glowPulse}
            className="absolute h-[600px] w-[600px] rounded-full bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-400/15 blur-[120px]"
          />

          <motion.div
            animate={floatingAnimation}
            className="relative mt-[-120px] flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-400/10 blur-[60px] scale-110" />
              <img
                src="/imgs/mascote.png"
                alt="Mascote CAFÉ STORE"
                className="relative h-auto w-[580px] drop-shadow-2xl"
              />
            </div>
          </motion.div>

          <div className="absolute -left-12 top-[30%] h-px w-32 bg-gradient-to-r from-transparent via-red-500 to-orange-500" />
          <div className="absolute -right-12 top-[25%] h-px w-32 bg-gradient-to-l from-transparent via-yellow-400 to-orange-500" />
          <div className="absolute left-1/2 bottom-10 h-24 w-px bg-gradient-to-t from-red-500/50 via-orange-500/30 to-transparent" />

          <div className="absolute left-[15%] top-[15%] h-1.5 w-1.5 rounded-full bg-red-400/40" />
          <div className="absolute right-[20%] top-[10%] h-1 w-1 rounded-full bg-yellow-400/40" />
          <div className="absolute left-[20%] bottom-[20%] h-1 w-1 rounded-full bg-orange-400/30" />
          <div className="absolute right-[15%] bottom-[15%] h-1.5 w-1.5 rounded-full bg-red-400/30" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-red-500/60 via-orange-500/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
