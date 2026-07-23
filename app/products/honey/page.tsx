import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../site-footer";
import SiteHeader from "../../site-header";
import HoneyHero from "./honey-hero";

export const metadata: Metadata = {
  title: "Honey | Supreme Trading Corp",
  description:
    "Raw and natural honey variants — multiflora, forest, jamun, tulsi, neem and eucalyptus — sourced in bulk for food, wellness and Ayurvedic buyers.",
  openGraph: {
    title: "Honey | Supreme Trading Corp",
    description: "Single-origin and multiflora honey sourced to grade for food, wellness and Ayurvedic use.",
    images: [{ url: "/supreme/source/honey_img.png", width: 1200, height: 1200, alt: "Supreme Trading Corp honey" }],
  },
};

const variants = [
  { name: "Multiflora Honey", note: "Balanced, all-season blend from mixed wildflower nectar.", origin: "Pan-India" },
  { name: "Raw Forest Honey", note: "Unprocessed, deep-amber honey from forest belts.", origin: "Forest belts" },
  { name: "Jamun Honey", note: "Dark, mineral-rich honey prized in wellness formulas.", origin: "Central India" },
  { name: "Tulsi Honey", note: "Aromatic holy-basil honey for Ayurvedic use.", origin: "North India" },
  { name: "Ajwain Honey", note: "Carom-blossom honey with a warm, savoury note.", origin: "West India" },
  { name: "Litchi Honey", note: "Light, floral and delicately sweet.", origin: "East India" },
  { name: "Eucalyptus Honey", note: "Cooling, herbal profile for wellness blends.", origin: "Hill regions" },
  { name: "Neem Honey", note: "Bittersweet honey valued in traditional remedies.", origin: "Pan-India" },
];

const qualities = [
  { k: "01", t: "Raw & unheated", d: "Handled to preserve natural enzymes, pollen and aroma." },
  { k: "02", t: "Moisture-checked", d: "Tested for moisture and density before dispatch." },
  { k: "03", t: "Bulk packing", d: "Food-grade drums, pails and bottles to your spec." },
  { k: "04", t: "Origin-traceable", d: "Variant and region confirmed on every consignment." },
];

export default function HoneyPage() {
  return (
    <main className="honey-page">
      <SiteHeader theme="solid" />

      <HoneyHero />

      {/* Feel-setting band */}
      <section className="honey-intro gs-reveal">
        <div className="honey-intro-copy">
          <p className="section-kicker">The honey desk</p>
          <h2 data-reveal>Honey chosen the way buyers actually use it</h2>
          <p>
            We don&apos;t treat honey as one product. Each variant carries its own colour,
            flavour and end-use — so we source by variant, check every batch, and pack to the
            grade your line needs.
          </p>
        </div>
        <div className="honey-intro-stats">
          <figure className="honey-intro-photo">
            <Image src="/supreme/premium/honey-jar.jpg" alt="Jars of natural honey with a wooden dipper" width={1000} height={760} />
          </figure>
          <article className="bento-tile bento-honey">
            <span className="bento-tag">Variants</span>
            <strong data-count="8" data-suffix="+">0</strong>
            <span>Honey types sourced to spec</span>
          </article>
          <article className="bento-tile bento-stat">
            <span className="bento-tag">Packing</span>
            <strong>Bulk</strong>
            <span>Drums, pails &amp; retail bottles</span>
          </article>
        </div>
      </section>

      {/* Variants bento */}
      <section className="honey-variants" id="variants">
        <div className="honey-variants-head">
          <p className="section-kicker">Selection</p>
          <h2 data-reveal>Honey variants</h2>
          <p>Availability, grade and packing confirmed on enquiry.</p>
        </div>
        <div className="honey-variant-grid gs-stagger">
          {variants.map((v, i) => (
            <article className="honey-variant-card" key={v.name}>
              <span className="honey-variant-index">{String(i + 1).padStart(2, "0")}</span>
              <div className="honey-variant-drop" aria-hidden="true" />
              <h3>{v.name}</h3>
              <p>{v.note}</p>
              <small>{v.origin}</small>
            </article>
          ))}
        </div>
      </section>

      {/* Quality strip */}
      <section className="honey-quality gs-reveal">
        <div className="honey-quality-head">
          <p className="eyebrow honey-eyebrow"><span /> How we handle it</p>
          <h2 data-reveal>From hive to consignment</h2>
        </div>
        <div className="honey-quality-grid gs-stagger">
          {qualities.map((q) => (
            <article key={q.k}>
              <span>{q.k}</span>
              <h3>{q.t}</h3>
              <p>{q.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="honey-cta gs-reveal">
        <Image className="honey-cta-jar" data-parallax="0.25" src="/supreme/source/honey_img.png" alt="" width={360} height={360} />
        <Image className="honey-cta-bottle" data-parallax="0.4" src="/supreme/premium/amber-bottle.png" alt="" width={220} height={220} />
        <Image className="honey-cta-spice" data-float src="/supreme/premium/spice-bowl.png" alt="" width={260} height={260} />
        <div>
          <p className="eyebrow honey-eyebrow"><span /> Bulk honey enquiry</p>
          <h2 data-reveal>Tell us the variant, grade and quantity</h2>
          <p>We&apos;ll confirm availability, packing options and lead time.</p>
          <Link className="button button-honey" href="/contact#enquiry">Send honey enquiry</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
