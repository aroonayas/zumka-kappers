import Link from "next/link";
import Image from "next/image";

const openingstijden = [
  { dag: "Maandag", tijd: "Gesloten" },
  { dag: "Dinsdag", tijd: "09:00 – 18:00" },
  { dag: "Woensdag", tijd: "09:00 – 18:00" },
  { dag: "Donderdag", tijd: "09:00 – 18:00" },
  { dag: "Vrijdag", tijd: "09:00 – 18:00" },
  { dag: "Zaterdag", tijd: "09:00 – 17:00" },
  { dag: "Zondag", tijd: "Gesloten" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <div className="relative h-10 w-32">
                <Image
                  src="/images/logo-wit.png"
                  alt="Zumka Kappers"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Professionele kapsalon in het hart van Venray. Vakmanschap met
              persoonlijke aandacht voor ieder haar.
            </p>
            <a
              href="https://www.facebook.com/zumkakappers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-white/40 hover:text-accent transition-colors text-xs uppercase tracking-widest"
            >
              Facebook ↗
            </a>
          </div>

          {/* Openingstijden */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
              Openingstijden
            </h3>
            <ul className="space-y-2">
              {openingstijden.map(({ dag, tijd }) => (
                <li key={dag} className="flex justify-between text-sm">
                  <span
                    className={
                      tijd === "Gesloten" ? "text-white/30" : "text-white/60"
                    }
                  >
                    {dag}
                  </span>
                  <span
                    className={
                      tijd === "Gesloten" ? "text-white/30" : "text-white/80"
                    }
                  >
                    {tijd}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Nav */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
              Contact
            </h3>
            <address className="not-italic text-sm text-white/60 space-y-2 mb-8">
              <p>Stationsweg 42A</p>
              <p>5802 AB Venray</p>
              <a
                href="tel:0478642424"
                className="block hover:text-white transition-colors"
              >
                0478 642 424
              </a>
              <a
                href="mailto:info@zumkakappers.nl"
                className="block hover:text-white transition-colors"
              >
                info@zumkakappers.nl
              </a>
            </address>
            <nav className="flex flex-col gap-2">
              {[
                ["Diensten", "/diensten"],
                ["Galerij", "/galerij"],
                ["Over ons", "/over-ons"],
                ["Afspraak boeken", "/boeken"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[11px] uppercase tracking-[0.15em] text-white/40 hover:text-accent transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Zumka Kappers. Alle rechten
            voorbehouden.
          </p>
          <p className="text-white/20 text-xs">Venray, Noord-Limburg</p>
        </div>
      </div>
    </footer>
  );
}
