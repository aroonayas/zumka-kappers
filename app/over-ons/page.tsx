import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const waarden = [
  {
    titel: "Vakmanschap",
    tekst: "Jarenlange ervaring en constante bijscholing zorgen voor een resultaat waar je trots op bent.",
  },
  {
    titel: "Persoonlijk",
    tekst: "Elke klant is uniek. We nemen de tijd om te luisteren en te adviseren.",
  },
  {
    titel: "Kwaliteit",
    tekst: "We werken exclusief met Lanza — professionele producten voor het beste resultaat.",
  },
];

export default function OverOnsPage() {
  return (
    <>
      {/* Pagina header */}
      <section className="pt-32 pb-16 bg-charcoal text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-accent/60" />
            <span className="text-accent text-[10px] uppercase tracking-[0.4em]">
              Ons verhaal
            </span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl">
            Over
            <br />
            <span className="italic text-accent">Zumka Kappers</span>
          </h1>
        </div>
      </section>

      {/* Verhaal */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Foto */}
            <div className="relative sticky top-24">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/images/pexels-3992875.jpg"
                  alt="Kapster aan het werk bij Zumka Kappers"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-accent/30" />
            </div>

            {/* Tekst */}
            <div>
              <h2 className="font-heading text-3xl text-charcoal mb-8 leading-tight">
                In mijn eentje ben ik gestart —
                <br />
                <span className="italic text-accent">inmiddels met twee</span>
              </h2>
              <div className="space-y-6 text-muted leading-relaxed">
                <p>
                  Zumka Kappers begon als een droom en een schaar. In het hart
                  van Venray opende ik mijn eigen kapsalon, gedreven door een
                  passie voor mooi haar en een gevoel voor mensen.
                </p>
                <p>
                  Inmiddels werken we met twee professionele kapsters. Maar de
                  kern is hetzelfde gebleven: persoonlijke aandacht, eerlijk
                  advies en trots op het resultaat.
                </p>
                <p>
                  Bij ons kom je niet voor een standaard knipbeurt. Je komt voor
                  een moment van rust en aandacht — en je gaat weg met haar
                  dat precies bij jou past.
                </p>
              </div>

              {/* Waarden */}
              <div className="mt-12 space-y-6">
                {waarden.map(({ titel, tekst }) => (
                  <div key={titel} className="flex gap-6">
                    <div className="w-px bg-accent/40 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading text-lg text-charcoal mb-1">
                        {titel}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {tekst}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Link
                  href="/boeken"
                  className="inline-block px-8 py-4 bg-accent text-white text-[11px] uppercase tracking-[0.25em] hover:bg-accent-dark transition-colors"
                >
                  Maak een afspraak
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Producten sectie */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <p className="text-accent text-[10px] uppercase tracking-[0.4em] mb-4">
                Onze producten
              </p>
              <h2 className="font-heading text-3xl text-charcoal mb-4">
                Wij werken met Lanza
              </h2>
              <p className="text-muted leading-relaxed">
                Lanza is een professioneel haarverzorgingsmerk dat speciaal is
                ontwikkeld voor salon gebruik. De producten zijn vrij van
                schadelijke stoffen en zorgen voor langdurig resultaat.
              </p>
            </div>
            <div className="bg-charcoal overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/galerij-7.jpg"
                  alt="L'ANZA Healing Haircare"
                  fill
                  className="object-cover object-top opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
              </div>
              <p className="text-white/50 text-xs uppercase tracking-widest text-center pb-6 pt-3">
                Officieel L&apos;ANZA salon
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
