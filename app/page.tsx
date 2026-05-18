"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import AnimatedCounter from "@/components/AnimatedCounter";

const diensten = [
  { titel: "Knippen", beschrijving: "Een verzorgde knipbeurt afgestemd op jouw gezichtsvorm en levensstijl.", icon: "✂" },
  { titel: "Kleuren", beschrijving: "Highlights, balayage of een egale kleur — met Lanza producten van topkwaliteit.", icon: "◈" },
  { titel: "Behandelingen", beschrijving: "Verzorgende behandelingen voor gezond, stralend haar van wortel tot punt.", icon: "◇" },
  { titel: "Abonnement", beschrijving: "Altijd verzorgd haar via SlimKnippen. Regelmatig genieten voor een vaste prijs.", icon: "◎" },
];

const stats = [
  { getal: 2, suffix: "", label: "Professionele kapsters" },
  { getal: 10, suffix: "+", label: "Jaar ervaring" },
  { getal: 500, suffix: "+", label: "Tevreden klanten" },
  { getal: 1, suffix: "", label: "Lanza partner salon" },
];

const heroGalerij = [
  { src: "/images/pexels-1654834.jpg", alt: "Haarstyling" },
  { src: "/images/pexels-4783329.jpg", alt: "Kleurwerk" },
  { src: "/images/pexels-8834071.jpg", alt: "Haar behandeling" },
];

const heroWords = ["Vakmanschap", "dat", "straalt"];

export default function HomePage() {
  return (
    <>
      {/* ── Hero met video achtergrond ── */}
      <section className="relative flex items-center justify-center min-h-screen bg-charcoal overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/videos/haar-wassen.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/90" />

        <motion.div
          className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <div className="w-px h-24 bg-gradient-to-b from-transparent to-accent/50" />
          <span className="text-accent/40 text-[9px] tracking-[0.4em] [writing-mode:vertical-lr]">VENRAY</span>
          <div className="w-px h-24 bg-gradient-to-b from-accent/50 to-transparent" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <motion.div
            className="flex items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-12 bg-accent/60" />
            <span className="text-accent text-[10px] uppercase tracking-[0.4em]">Kapsalon Venray</span>
            <div className="h-px w-12 bg-accent/60" />
          </motion.div>

          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl text-white leading-[1.05] mb-8">
            {heroWords.map((word, i) => (
              <motion.span
                key={word}
                className={`inline-block mr-4 ${i === 2 ? "italic text-accent" : ""}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="text-white/50 text-base sm:text-lg max-w-md mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Persoonlijke aandacht, professioneel resultaat. Bij Zumka Kappers in Venray ben je in goede handen.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <Link
              href="/boeken"
              className="px-10 py-4 bg-accent text-white text-[11px] uppercase tracking-[0.3em] hover:bg-accent-dark transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              Boek een afspraak
            </Link>
            <Link
              href="/galerij"
              className="px-10 py-4 border border-white/20 text-white/70 text-[11px] uppercase tracking-[0.3em] hover:border-accent/60 hover:text-white transition-all duration-300"
            >
              Bekijk ons werk
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <motion.div
            className="w-px bg-accent/40"
            animate={{ height: ["0px", "48px", "0px"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ getal, suffix, label }, i) => (
              <FadeIn key={label} delay={i * 0.1} direction="up">
                <div className="text-center group">
                  <p className="font-heading text-4xl md:text-5xl text-charcoal mb-2">
                    <AnimatedCounter end={getal} suffix={suffix} />
                  </p>
                  <div className="w-8 h-px bg-accent mx-auto mb-3 transition-all duration-300 group-hover:w-16" />
                  <p className="text-muted text-xs uppercase tracking-[0.15em]">{label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Diensten ── */}
      <section className="py-28 bg-surface">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="text-accent text-[10px] uppercase tracking-[0.4em] mb-4">Wat wij bieden</p>
              <h2 className="font-heading text-4xl md:text-6xl text-charcoal">Onze diensten</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diensten.map(({ titel, beschrijving, icon }, i) => (
              <FadeIn key={titel} delay={i * 0.1}>
                <motion.div
                  className="bg-white p-8 border-t-2 border-accent h-full cursor-default"
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    className="block text-accent text-3xl mb-6"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {icon}
                  </motion.span>
                  <h3 className="font-heading text-xl text-charcoal mb-3">{titel}</h3>
                  <p className="text-muted text-sm leading-relaxed">{beschrijving}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-14">
              <Link
                href="/diensten"
                className="text-[11px] uppercase tracking-[0.2em] text-accent hover:text-accent-dark transition-colors border-b border-accent/40 pb-0.5"
              >
                Alle diensten &amp; prijzen →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Video strip ── */}
      <section className="relative h-[65vh] min-h-96 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/haar-f%C3%B6hnen.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-charcoal/60" />
        <FadeIn>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-accent/60" />
              <span className="text-accent text-[10px] uppercase tracking-[0.4em]">Ons vakmanschap</span>
              <div className="h-px w-12 bg-accent/60" />
            </div>
            <h2 className="font-heading text-4xl md:text-6xl text-white leading-tight mb-10">
              Meer dan een<br /><span className="italic text-accent">knipbeurt</span>
            </h2>
            <Link
              href="/boeken"
              className="px-10 py-4 border border-white/40 text-white text-[11px] uppercase tracking-[0.3em] hover:border-accent hover:text-accent transition-all duration-300"
            >
              Maak een afspraak
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ── Over ons ── */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="aspect-[4/5] relative overflow-hidden group">
                  <Image
                    src="/images/pexels-4783286.jpg"
                    alt="Zumka Kappers salon"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
                </div>
                <motion.div
                  className="absolute -bottom-6 -right-6 w-40 h-40 border border-accent/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                />
                <motion.div
                  className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 border border-accent/20"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div>
                <p className="text-accent text-[10px] uppercase tracking-[0.4em] mb-4">Ons verhaal</p>
                <h2 className="font-heading text-4xl md:text-6xl text-charcoal mb-10 leading-tight">
                  In mijn eentje<br /><span className="italic">begonnen</span>
                </h2>
                <div className="space-y-5 text-muted leading-relaxed">
                  <p>
                    Zumka Kappers startte als een eenpersoonszaak met een grote passie voor haar en mensen. Inmiddels werken we met twee professionele kapsters die elke klant met dezelfde persoonlijke aandacht behandelen.
                  </p>
                  <p>
                    We geloven dat een goede knipbeurt meer is dan knippen alleen. Het is een moment voor jezelf — en dat voel je bij ons.
                  </p>
                </div>
                <div className="mt-10 pl-6 border-l-2 border-accent">
                  <p className="font-heading text-lg text-charcoal italic">&ldquo;Elk hoofd is uniek — elk kapsel ook.&rdquo;</p>
                </div>
                <div className="mt-10">
                  <Link
                    href="/over-ons"
                    className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-accent hover:text-accent-dark transition-colors group"
                  >
                    Lees meer over ons
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Galerij preview — 3 foto's in een rij met zoom hover ── */}
      <section className="py-28 bg-charcoal overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="text-accent text-[10px] uppercase tracking-[0.4em] mb-4">Ons werk</p>
                <h2 className="font-heading text-4xl md:text-6xl text-white">
                  Een inkijk in<br /><span className="italic">de salon</span>
                </h2>
              </div>
              <Link
                href="/galerij"
                className="flex-shrink-0 text-[11px] uppercase tracking-[0.2em] text-white/40 hover:text-accent transition-colors self-start md:self-end"
              >
                Alle foto&#39;s &amp; video&#39;s →
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-3 gap-4">
            {heroGalerij.map(({ src, alt }, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="aspect-[3/4] relative overflow-hidden group cursor-pointer">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                    <span className="text-white/80 text-[10px] uppercase tracking-widest">{alt}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-32 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
        </div>

        <FadeIn>
          <div className="relative max-w-2xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px w-12 bg-accent/40" />
              <span className="text-accent/60 text-[10px] uppercase tracking-[0.4em]">Maak een afspraak</span>
              <div className="h-px w-12 bg-accent/40" />
            </div>
            <h2 className="font-heading text-5xl md:text-6xl text-white mb-8 leading-tight">
              Klaar voor een<br /><span className="italic text-accent">nieuwe look?</span>
            </h2>
            <p className="text-white/40 mb-12 leading-relaxed">
              Maak snel en eenvoudig een afspraak online. We staan voor je klaar.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
              <Link
                href="/boeken"
                className="inline-block px-12 py-5 bg-accent text-white text-[11px] uppercase tracking-[0.3em] hover:bg-accent-dark transition-colors hover:shadow-xl hover:shadow-accent/20"
              >
                Boek nu een afspraak
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
