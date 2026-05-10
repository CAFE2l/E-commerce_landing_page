import DocumentationViewer from "@/components/DocumentationViewer"
import DocumentationCard from "@/components/DocumentationCard"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { FileText, Database, LayoutDashboard, ShoppingCart, Map, Layers } from "lucide-react"

const infoItems = [
  { icon: FileText, text: "Visão geral do projeto" },
  { icon: Layers, text: "Stack oficial" },
  { icon: Database, text: "Banco de dados" },
  { icon: LayoutDashboard, text: "Funcionalidades" },
  { icon: ShoppingCart, text: "Checkout" },
  { icon: Map, text: "Roadmap" },
]

const techBadges = [
  "PHP 8", "MySQL", "Cloudinary", "Mercado Pago", "InfinityFree",
]

export default function DocumentacaoPage() {
  return (
    <main className="min-h-screen bg-cafe-black">
      <Header />

      <section className="relative overflow-hidden bg-cafe-black pt-32 pb-16">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-15" />
        <div className="bg-dots pointer-events-none absolute inset-0 opacity-10" />

        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[150px]" />
        <div className="absolute right-0 top-1/4 h-[300px] w-[300px] rounded-full bg-orange-500/5 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Documentação Técnica da{" "}
            <span className="text-gradient glow-text">CAFÉ STORE</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-zinc-400">
            Explore a estrutura, stack, funcionalidades e roadmap do e-commerce
            sem sair do site.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-400 backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto px-6 lg:px-8">
          <DocumentationCard>
            <DocumentationViewer />
          </DocumentationCard>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {infoItems.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.text}
                  className="glass group flex items-center gap-3 rounded-xl border border-white/5 px-5 py-4 transition-all duration-300 hover:border-red-500/20 hover:shadow-[0_0_30px_rgba(255,60,56,0.08)]"
                >
                  <Icon size={18} className="shrink-0 text-red-400" />
                  <span className="text-sm text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200">
                    {item.text}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="mb-6 text-sm leading-relaxed text-zinc-500">
            Quer voltar para a página inicial?
          </p>
          <a
            href="/"
            className="group inline-flex items-center gap-2 rounded-xl border border-zinc-800 px-8 py-3.5 text-sm font-semibold text-zinc-300 transition-all duration-300 ease-out hover:border-red-500/30 hover:text-white hover:shadow-[0_0_30px_rgba(255,60,56,0.1)]"
          >
            ← Voltar para a CAFÉ STORE
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
