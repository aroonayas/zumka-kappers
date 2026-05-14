"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BoekenPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "afspraak" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <>
      {/* Pagina header */}
      <section className="pt-32 pb-12 bg-charcoal text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-accent/60" />
            <span className="text-accent text-[10px] uppercase tracking-[0.4em]">
              Maak een afspraak
            </span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl">
            Boek jouw
            <br />
            <span className="italic text-accent">afspraak</span>
          </h1>
          <p className="text-white/50 mt-6 max-w-md leading-relaxed text-sm">
            Kies een moment dat jou uitkomt. Na het boeken ontvang je een
            bevestiging per e-mail.
          </p>
        </div>
      </section>

      {/* Cal.com embed */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
          {/* VERVANG "zumkakappers/afspraak" met jouw Cal.com link nadat het account is aangemaakt */}
          <Cal
            namespace="afspraak"
            calLink="net-post-xjebth/60-minuten-afspraak"
            style={{ width: "100%", height: "700px", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </section>

      {/* Alternatief contact */}
      <section className="py-12 bg-surface border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2">
                Liever telefonisch?
              </p>
              <p className="text-muted text-sm">
                Bel ons tijdens openingstijden en we plannen een afspraak voor je.
              </p>
            </div>
            <a
              href="tel:0478642424"
              className="flex-shrink-0 inline-block px-6 py-3 border border-charcoal text-charcoal text-[11px] uppercase tracking-[0.2em] hover:bg-charcoal hover:text-white transition-colors"
            >
              0478 642 424
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
