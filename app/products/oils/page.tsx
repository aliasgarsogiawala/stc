import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../site-footer";
import SiteHeader from "../../site-header";
import { OilDrop } from "../../icons";
import { collectionPageJsonLd, createPageMetadata, JsonLd } from "../../seo";
import NextCategory from "../next-category";

const description = "Natural, essential, aroma and medical oils — cold-pressed and steam-distilled — sourced in bulk to grade for personal care, wellness and formulation buyers.";

export const metadata = createPageMetadata({
  title: "Essential & Medical Oils | Supreme Trading Corp",
  description,
  path: "/products/oils",
  image: "/supreme/media/oils-loop-poster.jpg",
  imageAlt: "Golden essential oil and glass dropper",
  imageWidth: 1920,
  imageHeight: 1080,
});

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
    <main className="product-detail-page prod-page oils-page">
      <JsonLd data={collectionPageJsonLd({
        name: "Essential and medical oils",
        description,
        path: "/products/oils",
        items: variants.map((variant) => variant.name),
      })} />
      <SiteHeader theme="solid" />

      <section className="product-detail-hero prod-hero">
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
        <div className="prod-intro-media prod-intro-photo">
          <Image src="/supreme/media/oils-loop-poster.jpg" alt="Amber bottles and essential oil prepared for bulk supply" fill sizes="(max-width: 1000px) 100vw, 40vw" />
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
            <article className="prod-variant-card tilt-card" key={v.name}>
              <span className="pv-index">{String(i + 1).padStart(2, "0")}</span>
              <div className="product-card-glyph" aria-hidden="true"><OilDrop /></div>
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
            <article className="tilt-card" key={q.k}>
              <span>{q.k}</span>
              <h3>{q.t}</h3>
              <p>{q.d}</p>
            </article>
          ))}
        </div>
      </section>

      <NextCategory
        href="/products/honey"
        image="/supreme/media/honey-pour-loop-poster.jpg"
        imageAlt="Natural honey being poured"
        name="Honey"
      />

      <SiteFooter />
    </main>
  );
}
