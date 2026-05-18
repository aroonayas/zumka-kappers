"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const videos = [
  { src: "/videos/haar-wassen.mp4", label: "Haar wassen" },
  { src: "/videos/haar-f%C3%B6hnen.mp4", label: "Haar föhnen" },
  { src: "/videos/krullen.mp4", label: "Krullen" },
];

const fotos = [
  { src: "/images/galerij-1.jpg", alt: "Artistiek kapsel" },
  { src: "/images/pexels-3993443.jpg", alt: "Knippen" },
  { src: "/images/galerij-2.jpg", alt: "Zilverblond haar" },
  { src: "/images/pexels-3993467.jpg", alt: "Föhnen" },
  { src: "/images/galerij-3.jpg", alt: "Opgestoken haar" },
  { src: "/images/pexels-3993462.jpg", alt: "Knippen close-up" },
  { src: "/images/galerij-8.jpg", alt: "Kleurverloop" },
  { src: "/images/pexels-4783286.jpg", alt: "Haar wassen" },
  { src: "/images/pexels-3992875.jpg", alt: "Styling" },
];

export default function GalerijPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="pt-32 pb-16 bg-charcoal text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-accent/60" />
              <span className="text-accent text-[10px] uppercase tracking-[0.4em]">Ons werk</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl">
              Een kleine inkijk<br /><span className="italic text-accent">in ons werk</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ── Video sectie ── */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] mb-10">In actie</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {videos.map(({ src, label }, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  className="relative aspect-[9/16] overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  >
                    <source src={src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                    <span className="text-white/80 text-[10px] uppercase tracking-widest">{label}</span>
                    <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                      <span className="text-white/60 text-xs ml-0.5">▶</span>
                    </span>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Foto masonry grid ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="text-muted text-sm max-w-lg mb-12">
              Een selectie van ons werk — van klassieke knipbeurten tot uitgebreide kleurbehandelingen met Lanza producten.
            </p>
          </FadeIn>

          <div className="columns-2 md:columns-3 gap-4">
            {fotos.map(({ src, alt }, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="break-inside-avoid overflow-hidden group cursor-pointer mb-4">
                  <div className="relative">
                    <Image
                      src={src}
                      alt={alt}
                      width={600}
                      height={800}
                      className="w-full h-auto block transition-transform duration-700 group-hover:scale-110 origin-center"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                      <span className="text-white/80 text-[10px] uppercase tracking-widest">{alt}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-16 p-8 bg-surface border-l-2 border-accent">
              <p className="text-muted text-sm leading-relaxed">
                <span className="text-charcoal font-medium">Nieuw werk </span>
                wordt regelmatig toegevoegd. Volg ons op{" "}
                <a
                  href="https://www.facebook.com/zumkakappers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-dark transition-colors"
                >
                  Facebook
                </a>{" "}
                voor de meest recente updates.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-charcoal text-center">
        <FadeIn>
          <p className="text-white/40 mb-6 text-sm">Wil jij ook zo&#39;n resultaat?</p>
          <Link
            href="/boeken"
            className="inline-block px-10 py-4 bg-accent text-white text-[11px] uppercase tracking-[0.3em] hover:bg-accent-dark transition-colors hover:shadow-lg hover:shadow-accent/20"
          >
            Boek een afspraak
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
