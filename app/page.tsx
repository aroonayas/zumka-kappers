import Link from "next/link";
import Image from "next/image";

const diensten = [
  {
    titel: "Knippen",
    beschrijving:
      "Een verzorgde knipbeurt afgestemd op jouw gezichtsvorm en levensstijl.",
    icon: "✂",
  },
  {
    titel: "Kleuren",
    beschrijving:
      "Highlights, balayage of een egale kleur — met Lanza producten van topkwaliteit.",
    icon: "◈",
  },
  {
    titel: "Behandelingen",
    beschrijving:
      "Verzorgende behandelingen voor gezond, stralend haar van wortel tot punt.",
    icon: "◇",
  },
  {
    titel: "Abonnement",
    beschrijving:
      "Altijd verzorgd haar via SlimKnippen. Regelmatig genieten voor een vaste prijs.",
    icon: "◎",
  },
];

const galerij = [
  { src: "/images/galerij-1.jpg", alt: "Kapsel", aspect: "aspect-[4/5]" },
  { src: "/images/galerij-6.jpg", alt: "Kleurwerk", aspect: "aspect-square" },
  { src: "/images/galerij-8.jpg", alt: "Haar behandeling", aspect: "aspect-square" },
  { src: "/images/galerij-5.jpg", alt: "Styling", aspect: "aspect-[4/5]" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex items-center justify-center min-h-screen bg-charcoal overflow-hidden">
        {/* Hero achtergrondafbeelding */}
        <Image
          src="/images/hero.png"
          alt="Zumka Kappers salon"
          fill
          className="object-cover opacity-30"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/50 to-charcoal/80" />

        {/* Decoratieve goud-lijn */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-px h-[40vh] bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-accent/60" />
            <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-sans">
              Kapsalon Venray
            </span>
            <div className="h-px w-12 bg-accent/60" />
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-white leading-[1.1] mb-8">
            Vakmanschap
            <br />
            <span className="italic text-accent">dat straalt</span>
          </h1>

          <p className="text-white/50 text-base sm:text-lg max-w-md mx-auto mb-12 leading-relaxed">
            Persoonlijke aandacht, professioneel resultaat. Bij Zumka Kappers in
            Venray ben je in goede handen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/boeken"
              className="px-8 py-4 bg-accent text-white text-[11px] uppercase tracking-[0.25em] hover:bg-accent-dark transition-colors"
            >
              Boek een afspraak
            </Link>
            <Link
              href="/galerij"
              className="px-8 py-4 border border-white/20 text-white/70 text-[11px] uppercase tracking-[0.25em] hover:border-white/60 hover:text-white transition-colors"
            >
              Bekijk ons werk
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/20 mx-auto" />
        </div>
      </section>

      {/* ── Diensten ── */}
      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-[10px] uppercase tracking-[0.4em] mb-4">
              Wat wij bieden
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal">
              Onze diensten
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diensten.map(({ titel, beschrijving, icon }) => (
              <div
                key={titel}
                className="bg-white p-8 border-t-2 border-accent hover:shadow-lg transition-shadow"
              >
                <span className="block text-accent text-2xl mb-6">{icon}</span>
                <h3 className="font-heading text-xl text-charcoal mb-3">
                  {titel}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {beschrijving}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/diensten"
              className="text-[11px] uppercase tracking-[0.2em] text-accent hover:text-accent-dark transition-colors border-b border-accent/40 pb-0.5"
            >
              Alle diensten & prijzen →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Over ons ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Foto */}
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/images/kleuradvies.png"
                  alt="Kleuradvies bij Zumka Kappers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-accent/30" />
            </div>

            {/* Tekst */}
            <div>
              <p className="text-accent text-[10px] uppercase tracking-[0.4em] mb-4">
                Ons verhaal
              </p>
              <h2 className="font-heading text-4xl md:text-5xl text-charcoal mb-8 leading-tight">
                In mijn eentje
                <br />
                <span className="italic">begonnen</span>
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Zumka Kappers startte als een eenpersoonszaak met een grote
                  passie voor haar en mensen. Inmiddels werken we met twee
                  professionele kapsters die elke klant met dezelfde
                  persoonlijke aandacht behandelen.
                </p>
                <p>
                  We geloven dat een goede knipbeurt meer is dan knippen alleen.
                  Het is een moment voor jezelf — en dat voel je bij ons.
                </p>
              </div>
              <div className="mt-10">
                <Link
                  href="/over-ons"
                  className="text-[11px] uppercase tracking-[0.2em] text-accent hover:text-accent-dark transition-colors border-b border-accent/40 pb-0.5"
                >
                  Lees meer over ons →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Galerij preview ── */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-[10px] uppercase tracking-[0.4em] mb-4">
              Ons werk
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-white">
              Een inkijk in
              <br />
              <span className="italic">de salon</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {galerij.map(({ src, alt, aspect }, i) => (
              <div
                key={i}
                className={`${aspect} relative overflow-hidden group`}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/galerij"
              className="inline-block px-8 py-4 border border-white/20 text-white text-[11px] uppercase tracking-[0.25em] hover:border-accent hover:text-accent transition-colors"
            >
              Bekijk alle foto&#39;s
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 bg-accent">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
            Klaar voor een
            <br />
            <span className="italic">nieuwe look?</span>
          </h2>
          <p className="text-white/70 mb-10 leading-relaxed">
            Maak snel en eenvoudig een afspraak. We staan voor je klaar.
          </p>
          <Link
            href="/boeken"
            className="inline-block px-10 py-4 bg-charcoal text-white text-[11px] uppercase tracking-[0.25em] hover:bg-white hover:text-charcoal transition-colors"
          >
            Boek nu een afspraak
          </Link>
        </div>
      </section>
    </>
  );
}
