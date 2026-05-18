import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const categorieen = [
  {
    naam: "Knippen",
    diensten: [
      { naam: "Knippen dames", prijs: "op aanvraag" },
      { naam: "Knippen heren", prijs: "op aanvraag" },
      { naam: "Knippen kind (t/m 12 jaar)", prijs: "op aanvraag" },
      { naam: "Wassen & föhnen", prijs: "op aanvraag" },
    ],
  },
  {
    naam: "Kleuren",
    diensten: [
      { naam: "Volledig verven", prijs: "op aanvraag" },
      { naam: "Highlights / lowlights", prijs: "op aanvraag" },
      { naam: "Balayage", prijs: "op aanvraag" },
      { naam: "Toning", prijs: "op aanvraag" },
    ],
  },
  {
    naam: "Behandelingen",
    diensten: [
      { naam: "Haarbehandeling Lanza", prijs: "op aanvraag" },
      { naam: "Keratine behandeling", prijs: "op aanvraag" },
      { naam: "Hoofdhuidbehandeling", prijs: "op aanvraag" },
    ],
  },
];

export default function DienstenPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-charcoal text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-accent/60" />
              <span className="text-accent text-[10px] uppercase tracking-[0.4em]">Wat wij doen</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl">
              Onze diensten<br /><span className="italic text-accent">&amp; prijzen</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="text-muted text-sm leading-relaxed mb-16 max-w-xl">
              Onze prijzen zijn afhankelijk van haarlengte en behandeling. Neem contact op of boek een afspraak voor een persoonlijk advies op maat.
            </p>
          </FadeIn>

          <div className="space-y-16">
            {categorieen.map(({ naam, diensten }, i) => (
              <FadeIn key={naam} delay={i * 0.1}>
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="font-heading text-3xl text-charcoal">{naam}</h2>
                    <div className="flex-1 h-px bg-accent/20" />
                  </div>
                  <ul className="divide-y divide-gray-100">
                    {diensten.map(({ naam: dienstNaam, prijs }) => (
                      <li
                        key={dienstNaam}
                        className="flex justify-between py-4 text-sm group hover:pl-2 transition-all duration-300"
                      >
                        <span className="text-charcoal group-hover:text-accent transition-colors">{dienstNaam}</span>
                        <span className="text-muted italic">{prijs}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted italic">
            * Prijzen worden gecommuniceerd tijdens de afspraak op basis van jouw haar en wensen.
          </p>
        </div>
      </section>

      {/* ── Video strip ── */}
      <section className="relative h-72 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/krullen.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-charcoal/65" />
        <FadeIn>
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <p className="font-heading text-3xl md:text-5xl text-white italic">
              &ldquo;Elk kapsel, een kunstwerk&rdquo;
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-accent text-[10px] uppercase tracking-[0.4em] mb-4">Abonnement</p>
                <h2 className="font-heading text-4xl text-charcoal mb-6">
                  SlimKnippen —<br /><span className="italic">altijd verzorgd</span>
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  Met een SlimKnippen abonnement betaal je een vast bedrag per maand en kun je onbeperkt komen voor een knipbeurt. Nooit meer nadenken over je haar — gewoon altijd top.
                </p>
                <a
                  href="https://www.slimknippen.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] uppercase tracking-[0.2em] text-accent hover:text-accent-dark transition-colors border-b border-accent/40 pb-0.5"
                >
                  Meer over SlimKnippen ↗
                </a>
              </div>
              <div className="bg-charcoal p-10 text-center">
                <div className="w-16 h-16 border border-accent/40 flex items-center justify-center mx-auto mb-6">
                  <span className="text-accent text-2xl">◎</span>
                </div>
                <h3 className="font-heading text-2xl text-white mb-3">Maandabonnement</h3>
                <p className="text-white/50 text-sm mb-8">Vaste prijs, onbeperkt knippen, altijd verzorgd haar.</p>
                <Link
                  href="/boeken"
                  className="inline-block px-6 py-3 bg-accent text-white text-[11px] uppercase tracking-[0.2em] hover:bg-accent-dark transition-colors"
                >
                  Vraag informatie aan
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-muted mb-6">Wil je een afspraak maken?</p>
            <Link
              href="/boeken"
              className="inline-block px-8 py-4 bg-accent text-white text-[11px] uppercase tracking-[0.25em] hover:bg-accent-dark transition-colors hover:shadow-lg hover:shadow-accent/20"
            >
              Boek een afspraak
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
