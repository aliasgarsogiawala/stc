import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../site-footer";
import SiteHeader from "../../site-header";
import { HerbSprig } from "../../icons";
import { collectionPageJsonLd, createPageMetadata, JsonLd } from "../../seo";
import NextCategory from "../next-category";

const description = "Whole botanicals, roots, barks, seeds, flowers and trade spices sourced in bulk to grade for food, wellness and Ayurvedic buyers.";

export const metadata = createPageMetadata({
  title: "Herbs & Spices | Supreme Trading Corp",
  description,
  path: "/products/herbs",
  image: "/supreme/media/herbs-loop-poster.jpg",
  imageAlt: "Bulk herbs, roots and spices",
  imageWidth: 1920,
  imageHeight: 1080,
});

const variants = [
  { name: "Ashwagandha", note: "Withania root, a cornerstone Ayurvedic botanical.", origin: "Root" },
  { name: "Haldi (Turmeric)", note: "Whole and ground turmeric for food and wellness.", origin: "Rhizome" },
  { name: "Dalchini (Cinnamon)", note: "Aromatic bark for spice and extract use.", origin: "Bark" },
  { name: "Mulethi (Liquorice)", note: "Sweet root for wellness and confectionery.", origin: "Root" },
  { name: "Isabgol (Psyllium)", note: "Husk prized for fibre and digestive products.", origin: "Seed husk" },
  { name: "Amla", note: "Indian gooseberry, vitamin-C rich botanical.", origin: "Fruit" },
  { name: "Gulab (Rose Petals)", note: "Dried petals for teas, blends and fragrance.", origin: "Flower" },
  { name: "Giloy", note: "Moon-creeper stem valued in Ayurveda.", origin: "Stem" },
];

const qualities = [
  { k: "01", t: "Cleaned & sorted", d: "Graded, de-stoned and sieved to your specification." },
  { k: "02", t: "Moisture-safe", d: "Dried and checked to prevent spoilage in transit." },
  { k: "03", t: "Whole or milled", d: "Supplied whole, cut or powdered to your requirement." },
  { k: "04", t: "Origin-traceable", d: "Botanical name and region confirmed per consignment." },
];

export default function HerbsPage() {
  return (
    <main className="product-detail-page prod-page herbs-page">
      <JsonLd data={collectionPageJsonLd({
        name: "Herbs and spices",
        description,
        path: "/products/herbs",
        items: variants.map((variant) => variant.name),
      })} />
      <SiteHeader theme="solid" />

      <section className="product-detail-hero prod-hero">
        <video className="prod-hero-video" autoPlay muted loop playsInline poster="/supreme/media/herbs-loop-poster.jpg">
          <source src="/supreme/media/herbs-loop.mp4" type="video/mp4" />
        </video>
        <div className="prod-hero-tint" />
        <div className="prod-hero-inner">
          <div className="catalog-breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/products">Products</Link><span>/</span>
            <span>Herbs &amp; Spices</span>
          </div>
          <h1>Herbs, roots &amp; trade spices</h1>
          <p className="prod-hero-lead">
            Whole botanicals, roots, barks, seeds and flowers, cleaned and graded, then
            supplied in bulk — whole, cut or milled to your spec.
          </p>
          <div className="prod-hero-actions">
            <a className="button button-accent" href="#variants">View the range</a>
            <Link className="text-link" href="/contact#enquiry">Request a sample</Link>
          </div>
        </div>
      </section>

      <section className="prod-intro gs-reveal">
        <div className="prod-intro-copy">
          <p className="section-kicker">The botanical desk</p>
          <h2 data-reveal>Botanicals sourced clean and graded</h2>
          <p>
            Roots, barks, seeds, flowers and whole herbs each need different handling.
            We clean, grade and check moisture, then supply whole, cut or powdered to spec.
          </p>
        </div>
        <div className="prod-intro-media">
          <Image src="/supreme/premium/spice-bowl.png" alt="Wooden bowl of ground spice with scoop" width={480} height={480} />
        </div>
      </section>

      <section className="prod-variants" id="variants">
        <div className="prod-variants-head">
          <p className="section-kicker">Selection</p>
          <h2 data-reveal>Herbs &amp; spices</h2>
          <p>A sample of the range — availability and grade confirmed on enquiry.</p>
        </div>
        <div className="prod-variant-grid gs-stagger">
          {variants.map((v, i) => (
            <article className="prod-variant-card tilt-card" id={v.name.startsWith("Gulab") ? "petals" : undefined} key={v.name}>
              <span className="pv-index">{String(i + 1).padStart(2, "0")}</span>
              <div className="product-card-glyph" aria-hidden="true"><HerbSprig /></div>
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
          <h2 data-reveal>From field to consignment</h2>
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
        href="/products/petals"
        image="/supreme/generated/petals-flatlay-full-hero.png"
        imageAlt="Dried petals and flowers prepared for bulk supply"
        name="Petals & flowers"
      />

      <SiteFooter />
    </main>
  );
}
