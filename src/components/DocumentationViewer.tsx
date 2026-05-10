"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileText } from "lucide-react"

export default function DocumentationViewer() {
  const [error, setError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      {error ? (
        <div className="flex flex-col items-center justify-center gap-4 px-6 py-24 text-center">
          <FileText size={48} className="text-zinc-600" />
          <p className="text-sm text-zinc-500">
            Não foi possível carregar o PDF. Verifique se o arquivo está em
            public/docs/E-commerce.pdf.
          </p>
        </div>
      ) : (
        <iframe
          src="/docs/E-commerce.pdf#toolbar=0&navpanes=0"
          className="h-[70vh] w-full sm:h-[80vh]"
          style={{ borderRadius: "0 0 24px 24px" }}
          onError={() => setError(true)}
          title="Documentação CAFÉ STORE"
        />
      )}
    </motion.div>
  )
}
