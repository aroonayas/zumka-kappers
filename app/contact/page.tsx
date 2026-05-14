import Link from "next/link";

const openingstijden = [
  { dag: "Maandag", tijd: "Gesloten", gesloten: true },
  { dag: "Dinsdag", tijd: "09:00 – 18:00", gesloten: false },
  { dag: "Woensdag", tijd: "09:00 – 18:00", gesloten: false },
  { dag: "Donderdag", tijd: "09:00 – 18:00", gesloten: false },
  { dag: "Vrijdag", tijd: "09:00 – 18:00", gesloten: false },
  { dag: "Zaterdag", tijd: "09:00 – 17:00", gesloten: false },
  { dag: "Zondag", tijd: "Gesloten", gesloten: true },
];

export default function ContactPage() {
  return (
    <>
      {/* Pagina header */}
      <section className="pt-32 pb-16 bg-charcoal text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-accent/60" />
            <span className="text-accent text-[10px] uppercase tracking-[0.4em]">
              Bereikbaarheid
            </span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl">
            Neem
            <br />
            <span className="italic text-accent">contact op</span>
          </h1>
        </div>
      </section>

      {/* Contact info + openingstijden */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contactgegevens */}
            <div className="lg:col-span-1">
              <h2 className="font-heading text-2xl text-charcoal mb-8">
                Contactgegevens
              </h2>

              <div className="space-y-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2">
                    Adres
                  </p>
                  <address className="not-italic text-muted text-sm leading-relaxed">
                    Stationsweg 42A<br />
                    5802 AB Venray
                  </address>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2">
                    Telefoon
                  </p>
                  <a
                    href="tel:0478642424"
                    className="text-charcoal hover:text-accent transition-colors text-sm"
                  >
                    0478 642 424
                  </a>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2">
                    E-mail
                  </p>
                  <a
                    href="mailto:info@zumkakappers.nl"
                    className="text-charcoal hover:text-accent transition-colors text-sm"
                  >
                    info@zumkakappers.nl
                  </a>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2">
                    Social media
                  </p>
                  <a
                    href="https://www.facebook.com/zumkakappers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal hover:text-accent transition-colors text-sm"
                  >
                    Facebook ↗
                  </a>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/boeken"
                  className="inline-block px-6 py-3 bg-accent text-white text-[11px] uppercase tracking-[0.2em] hover:bg-accent-dark transition-colors"
                >
                  Boek een afspraak
                </Link>
              </div>
            </div>

            {/* Openingstijden */}
            <div className="lg:col-span-1">
              <h2 className="font-heading text-2xl text-charcoal mb-8">
                Openingstijden
              </h2>
              <ul className="divide-y divide-gray-100">
                {openingstijden.map(({ dag, tijd, gesloten }) => (
                  <li key={dag} className="flex justify-between py-3 text-sm">
                    <span className={gesloten ? "text-gray-300" : "text-charcoal"}>
                      {dag}
                    </span>
                    <span className={gesloten ? "text-gray-300 italic" : "text-muted"}>
                      {tijd}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kaart */}
            <div className="lg:col-span-1">
              <h2 className="font-heading text-2xl text-charcoal mb-8">
                Locatie
              </h2>
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <iframe
                  title="Zumka Kappers locatie"
                  src="https://maps.google.com/maps?q=Stationsweg+42A,+5802+AB+Venray,+Netherlands&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://maps.google.com/?q=Stationsweg+42A,+5802+AB+Venray"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-[11px] uppercase tracking-[0.2em] text-accent hover:text-accent-dark transition-colors"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form sectie */}
      <section className="py-16 bg-surface">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent text-[10px] uppercase tracking-[0.4em] mb-4">
              Stuur een bericht
            </p>
            <h2 className="font-heading text-3xl text-charcoal">
              Heb je een vraag?
            </h2>
            <p className="text-muted text-sm mt-4">
              Stuur ons een e-mail of bel ons op. We reageren zo snel mogelijk.
            </p>
          </div>

          <div className="text-center space-y-4">
            <a
              href="mailto:info@zumkakappers.nl"
              className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white text-[11px] uppercase tracking-[0.2em] hover:bg-accent transition-colors w-full sm:w-auto justify-center"
            >
              Stuur een e-mail
            </a>
            <p className="text-muted text-xs">of bel</p>
            <a
              href="tel:0478642424"
              className="inline-flex items-center gap-3 px-8 py-4 border border-charcoal text-charcoal text-[11px] uppercase tracking-[0.2em] hover:bg-charcoal hover:text-white transition-colors w-full sm:w-auto justify-center"
            >
              0478 642 424
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
