import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const fotos = [
  { src: "/images/galerij-1.jpg", alt: "Kapsel", aspect: "aspect-square" },
  { src: "/images/galerij-2.jpg", alt: "Lanza product", aspect: "aspect-[4/5]" },
  { src: "/images/galerij-3.jpg", alt: "Haarstyling", aspect: "aspect-square" },
  { src: "/images/galerij-4.jpg", alt: "Kleurwerk", aspect: "aspect-[3/4]" },
  { src: "/images/galerij-5.jpg", alt: "Lanza behandeling", aspect: "aspect-square" },
  { src: "/images/galerij-6.jpg", alt: "Haar na behandeling", aspect: "aspect-[4/5]" },
  { src: "/images/galerij-7.jpg", alt: "Styling resultaat", aspect: "aspect-square" },
  { src: "/images/galerij-8.jpg", alt: "Lanza producten", aspect: "aspect-[4/5]" },
];

export default function GalerijPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-charcoal text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-accent/60" />
              <span className="text-accent text-[10px] uppercase tracking-[0.4em]">
                Ons werk
              </span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl">
              Een kleine inkijk
              <br />
              <span className="italic text-accent">in ons werk</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <p className="text-muted text-sm max-w-lg mb-12">
              Een selectie van ons werk — van klassieke knipbeurten tot
              uitgebreide kleurbehandelingen met Lanza producten.
            </p>
          </FadeIn>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {fotos.map(({ src, alt, aspect }, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className={`break-inside-avoid ${aspect} relative overflow-hidden group`}>
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-400" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                    <span className="text-white/80 text-[10px] uppercase tracking-widest">{alt}</span>
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
    </>
  );
}
