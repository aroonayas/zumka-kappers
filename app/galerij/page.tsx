import Image from "next/image";

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
      {/* Pagina header */}
      <section className="pt-32 pb-16 bg-charcoal text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-accent/60" />
            <span className="text-accent text-[10px] uppercase tracking-[0.4em]">
              Ons werk
            </span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl">
            Een kleine inkijk
            <br />
            <span className="italic text-accent">in ons werk</span>
          </h1>
        </div>
      </section>

      {/* Galerij grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-muted text-sm max-w-lg mb-12">
            Een selectie van ons werk — van klassieke knipbeurten tot
            uitgebreide kleurbehandelingen met Lanza producten.
          </p>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {fotos.map(({ src, alt, aspect }, i) => (
              <div
                key={i}
                className={`break-inside-avoid ${aspect} relative overflow-hidden group`}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
              </div>
            ))}
          </div>

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
        </div>
      </section>
    </>
  );
}
