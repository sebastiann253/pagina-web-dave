import { Instagram, Search, Fingerprint, PenTool } from "lucide-react";

const IG_URL = "https://www.instagram.com/davepararealtors/";

const services = [
  { icon: Search, title: "Diagnóstico de perfil y tono de voz", text: "Revisamos cómo te ve un cliente en cinco segundos y si tu forma de comunicar genera confianza o dudas." },
  { icon: Fingerprint, title: "Auditoría de la identidad de tu marca", text: "Evaluamos tu imagen, tus colores y tu mensaje para que se te reconozca entre cientos de agentes." },
  { icon: PenTool, title: "Corrección de debilidades, diseño y narrativa", text: "Arreglamos lo que frena tu perfil y le damos una historia clara que conecte con quien busca propiedad." },
];

const steps = [
  { title: "Me escribes por Instagram", text: "Envíame un mensaje directo y coordinamos tu sesión de diagnóstico." },
  { title: "Analizamos tu perfil a fondo", text: "Revisamos tu identidad visual, tu tono de voz y tu narrativa actual." },
  { title: "Recibes tu hoja de ruta", text: "Te entrego correcciones claras, listas para aplicar en tus redes." },
];

function Button({ children, inverted = false }) {
  const base = "group inline-flex items-center gap-3 rounded-full px-7 py-4 text-base font-medium transition duration-300 hover:-translate-y-0.5 active:translate-y-0";
  const tone = inverted
    ? "bg-paper text-emerald hover:bg-white"
    : "bg-emerald text-paper hover:bg-emerald-dark hover:shadow-lg hover:shadow-emerald/20";
  return (
    <a href={IG_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${tone}`}>
      <Instagram size={20} strokeWidth={1.75} className="transition-transform duration-300 group-hover:scale-110" />
      {children}
    </a>
  );
}

export default function App() {
  return (
    <>
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-7 md:px-8">
        <a href="#top" className="flex items-baseline gap-2" aria-label="Dave, Marketing e IA">
          <span className="font-serif text-2xl font-semibold tracking-tight">Dave</span>
          <span className="text-sm text-muted">Marketing & IA</span>
        </a>
        <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted transition-colors hover:text-emerald">
          @davepararealtors
        </a>
      </header>

      <main id="top">
        <section className="mx-auto max-w-5xl px-6 pb-28 pt-16 md:px-8 md:pb-40 md:pt-28">
          <h1 className="max-w-3xl font-serif text-[2.75rem] font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            ¿Tu perfil inmobiliario ha muerto?
          </h1>
          <svg viewBox="0 0 600 100" className="mt-10 h-16 w-full max-w-xl md:h-20" fill="none" aria-hidden="true">
            <path className="pulse-line" pathLength="1" d="M0 50 H170 L190 50 L205 18 L225 84 L242 34 L254 50 H600" stroke="#0f5a44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            Ayudo a Realtors a destacar en redes, corregir debilidades y dominar su narrativa con el poder de la IA.
          </p>
          <div className="mt-12">
            <Button>Agenda tu diagnóstico por Instagram</Button>
          </div>
        </section>

        <section className="bg-mist py-24 md:py-32">
          <div className="mx-auto max-w-5xl px-6 md:px-8">
            <h2 className="max-w-xl font-serif text-3xl font-medium leading-tight md:text-5xl">Qué revisamos en tu perfil</h2>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {services.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-2xl border border-ink/10 bg-paper p-8 transition duration-300 hover:-translate-y-1 hover:border-emerald/50">
                  <Icon size={28} strokeWidth={1.5} className="text-emerald" />
                  <h3 className="mt-8 font-serif text-xl font-medium leading-snug">{title}</h3>
                  <p className="mt-4 leading-relaxed text-muted">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-24 md:px-8 md:py-32">
          <h2 className="max-w-xl font-serif text-3xl font-medium leading-tight md:text-5xl">Cómo funciona</h2>
          <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t border-ink/15 pt-6">
                <span className="font-serif text-5xl font-medium text-emerald">{i + 1}</span>
                <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="px-4 pb-24 md:px-8 md:pb-32">
          <div className="mx-auto max-w-5xl rounded-3xl bg-emerald px-8 py-20 text-paper md:px-16 md:py-28">
            <h2 className="max-w-2xl font-serif text-3xl font-medium leading-tight md:text-5xl">
              Cada semana con un perfil débil es una propiedad que se queda sin comprador.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">
              Dale vida a tu perfil de Instagram y vende más propiedades. El primer paso es un mensaje.
            </p>
            <div className="mt-10">
              <Button inverted>Escríbeme por Instagram</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p><span className="font-serif text-base font-semibold text-ink">Dave</span> Marketing & IA, para Realtors en Venezuela</p>
          <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-emerald">
            <Instagram size={18} strokeWidth={1.75} /> @davepararealtors
          </a>
        </div>
      </footer>
    </>
  );
}
