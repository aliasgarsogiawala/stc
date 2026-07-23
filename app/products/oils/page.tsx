import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../site-footer";
import SiteHeader from "../../site-header";
import { WhatsApp } from "../../icons";

const WA_HREF = `https://wa.me/919920755226?text=${encodeURIComponent("Hi Supreme Trading, I'd like an oils enquiry. Please share the range, grade and packing.")}`;

export const metadata: Metadata = {
  title: "Essential & Medical Oils | Supreme Trading Corp",
  description:
    "Natural, essential, aroma and medical oils — cold-pressed and steam-distilled — sourced in bulk to grade for personal care, wellness and formulation buyers.",
  openGraph: {
    title: "Essential & Medical Oils | Supreme Trading Corp",
    description: "Essential, carrier and medical oils sourced to grade for wellness and formulation.",
    images: [{ url: "/supreme/media/oils-loop-poster.jpg", width: 1920, height: 1080, alt: "Golden essential oil dropper" }],
  },
};

const variants = [
  { name: "Almond Oil", note: "Light carrier oil for cosmetics and massage blends.", origin: "Cold-pressed" },
  { name: "Argan Oil", note: "Premium hair and skin oil, rich in vitamin E.", origin: "Cold-pressed" },
  { name: "Amla Oil", note: "Traditional hair-care oil from Indian gooseberry.", origin: "Infused" },
  { name: "Basil / Tulsi Oil", note: "Aromatic essential oil for wellness formulas.", origin: "Steam-distilled" },
  { name: "Eucalyptus Oil", note: "Cooling, herbal oil for balms and inhalants.", origin: "Steam-distilled" },
  { name: "Lavender Oil", note: "Calming floral oil for aroma and personal care.", origin: "Steam-distilled" },
  { name: "Rosemary Oil", note: "Herbaceous oil for hair and scalp care.", origin: "Steam-distilled" },
  { name: "Citronella Oil", note: "Fresh, citrus-herbal oil for fragrance use.", origin: "Steam-distilled" },
];

const qualities = [
  { k: "01", t: "Grade-verified", d: "Essential, aroma, carrier or medical grade confirmed per order." },
  { k: "02", t: "Purity checked", d: "Sourced against your purity and profile requirement." },
  { k: "03", t: "Amber packing", d: "Light-safe amber glass, drums and bulk containers." },
  { k: "04", t: "Batch-traceable", d: "Method and origin confirmed on every consignment." },
];

export default function OilsPage() {
  return (
    <main className="prod-page oils-page">
      <SiteHeader theme="solid" />

      <section className="prod-hero">
        <video className="prod-hero-video" autoPlay muted loop playsInline poster="/supreme/media/oils-loop-poster.jpg">
          <source src="/supreme/media/oils-loop.mp4" type="video/mp4" />
        </video>
        <div className="prod-hero-tint" />
        <div className="prod-hero-inner">
          <div className="catalog-breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/products">Products</Link><span>/</span>
            <span>Oils</span>
          </div>
          <p className="eyebrow prod-eyebrow"><span /> Distilled &amp; pressed</p>
          <h1>Essential &amp; medical oils</h1>
          <p className="prod-hero-lead">
            Steam-distilled essential oils and cold-pressed carrier oils, supplied in bulk
            and packed light-safe to protect the profile.
          </p>
          <div className="prod-hero-actions">
            <a className="button button-accent" href="#variants">View oil range</a>
            <Link className="text-link" href="/contact#enquiry">Request a sample</Link>
          </div>
        </div>
      </section>

      <section className="prod-intro gs-reveal">
        <div className="prod-intro-copy">
          <p className="section-kicker">The oils desk</p>
          <h2 data-reveal>Oils sourced by method and grade</h2>
          <p>
            Essential oils, aroma oils, carrier oils and traditional oils each behave differently.
            We source by extraction method, check every batch, and pack light-safe to protect the profile.
          </p>
        </div>
        <div className="prod-intro-media">
          <Image src="/supreme/premium/amber-bottle.png" alt="Amber glass dropper bottle of essential oil" width={440} height={440} />
        </div>
      </section>

      <section className="prod-variants" id="variants">
        <div className="prod-variants-head">
          <p className="section-kicker">Selection</p>
          <h2 data-reveal>Oil range</h2>
          <p>Availability, grade and packing confirmed on enquiry.</p>
        </div>
        <div className="prod-variant-grid gs-stagger">
          {variants.map((v, i) => (
            <article className="prod-variant-card" key={v.name}>
              <span className="pv-index">{String(i + 1).padStart(2, "0")}</span>
              <div className="prod-variant-mark" aria-hidden="true" />
              <h3>{v.name}</h3>
              <p>{v.note}</p>
              <small>{v.origin}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="prod-quality gs-reveal">
        <div className="prod-quality-head">
          <p className="eyebrow prod-eyebrow"><span /> How we handle it</p>
          <h2 data-reveal>From distillery to drum</h2>
        </div>
        <div className="prod-quality-grid gs-stagger">
          {qualities.map((q) => (
            <article key={q.k}>
              <span>{q.k}</span>
              <h3>{q.t}</h3>
              <p>{q.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="prod-cta gs-reveal">
        <Image className="prod-cta-art" data-parallax="0.3" src="/supreme/premium/amber-bottle.png" alt="" width={300} height={300} />
        <div>
          <p className="eyebrow prod-eyebrow"><span /> Bulk oil enquiry</p>
          <h2 data-reveal>Tell us the oil, grade and quantity</h2>
          <p>We&apos;ll confirm availability, packing options and lead time.</p>
          <a className="button button-accent button-wa" href={WA_HREF} target="_blank" rel="noopener noreferrer"><WhatsApp /> Enquire on WhatsApp</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
