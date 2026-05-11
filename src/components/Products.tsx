"use client";

import React from "react";
import { motion } from "framer-motion";
import { Palette, Video } from "lucide-react";

const services = [
  {
    img: "/icons/vscode.png",
    icon: undefined,
    title: "Desenvolvimento Full-Stack",
    description: "Criação de sites, e-commerces e aplicações web robustas.",
    techs: ["HTML5", "CSS3", "JavaScript", "React", "PHP", "MySQL"],
    gradient: "from-red-500/10 via-orange-500/5 to-transparent",
    borderGlow: "group-hover:border-red-500/30",
    iconColor: "text-red-400",
    iconBg: "bg-red-500/10",
  },
  {
    img: "/icons/figma.png",
    title: "Design & UI/UX",
    description:
      "Interfaces modernas, focadas em experiência do usuário e identidade visual forte.",
    techs: ["Figma", "Canva"],
    gradient: "from-orange-500/10 via-yellow-400/5 to-transparent",
    borderGlow: "group-hover:border-orange-500/30",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10",
  },
  {
    img: "icons/video.png",
    title: "Edição de Vídeo & Motion",
    description:
      "Edição dinâmica para redes sociais e apresentações comerciais.",
    techs: ["CapCut", "Filmora"],
    gradient: "from-yellow-400/10 via-red-500/5 to-transparent",
    borderGlow: "group-hover:border-yellow-400/30",
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-400/10",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Products() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-cafe-black py-24"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-15" />

      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-red-500/10 blur-[150px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-yellow-400/8 blur-[120px]" />

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
            Serviços
          </span>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Stack & <span className="text-gradient glow-text">Serviços</span>
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Desenvolvimento full-stack, design e criação de conteúdo digital.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon as React.ElementType | undefined;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`group relative cursor-default overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br ${service.gradient} p-8 transition-all duration-500 ease-out hover:scale-[1.03] ${service.borderGlow} hover:shadow-[0_0_40px_rgba(255,122,0,0.1)]`}
              >
                <div className="absolute inset-0 bg-white/[0.02] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${service.iconBg} backdrop-blur-sm transition-all duration-500 group-hover:scale-110 ${service.iconColor}`}
                  >
                    {service.img ? (
                      <img
                        src={service.img}
                        alt={service.title}
                        className="h-7 w-7 object-contain"
                      />
                    ) : Icon ? (
                      <Icon size={26} />
                    ) : null}
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-zinc-400">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.techs.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-500 transition-all duration-300 group-hover:border-white/10 group-hover:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-gradient-to-br from-white/5 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
