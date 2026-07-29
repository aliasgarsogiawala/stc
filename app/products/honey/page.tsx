import Image from "next/image";
import SiteFooter from "../../site-footer";
import SiteHeader from "../../site-header";
import HoneyHero from "./honey-hero";
import { collectionPageJsonLd, createPageMetadata, JsonLd } from "../../seo";
import NextCategory from "../next-category";

const description = "Natural and infused honey varieties sourced in bulk for food, wellness and Ayurvedic buyers.";

export const metadata = createPageMetadata({
  title: "Bulk Raw & Natural Honey | Supreme Trading Corp",
  description,
  path: "/products/honey",
  image: "/supreme/generated/honey-flatlay-full-hero.png",
  imageAlt: "Top-view natural honey assortment prepared for bulk supply",
  imageWidth: 1672,
  imageHeight: 941,
});

const naturalHoney = [
  { name: "Wild Forest Honey", detail: "Apis dorsata" },
  { name: "Black Forest Honey", detail: "Apis dorsata" },
  { name: "Himalayan Multi-flora Honey" },
  { name: "Sidr / Berry / Jujube Honey" },
  { name: "Litchi Honey" },
  { name: "Jamun / Wild Berry Honey" },
  { name: "Tulsi Honey" },
  { name: "Shisham / Rosewood Honey" },
  { name: "Eucalyptus / Safeda Honey" },
  { name: "Ajwain / Carom Seeds Honey" },
  { name: "Sunflower Honey" },
  { name: "Mustard / White / Creamy Honey" },
  { name: "Barseem / Clover Honey" },
  { name: "Rajasthan Acacia / Kikar / Babool Honey" },
  { name: "Kashmiri Acacia / Keekar Honey" },
  { name: "Saunf / Aniseed Honey" },
  { name: "Coriander / Dhaniya Honey" },
  { name: "Red Honey" },
  { name: "Karanj Honey" },
  {
    name: "Brankut Honey",
    detail: "Aravalli Hills, Rajasthan · rare, limited stock",
  },
  { name: "Sundarvan Forest / Mangrove Honey" },
];

const infusedHoney = [
  { name: "Cinnamon Honey" },
  { name: "Lemon Honey" },
  { name: "Ginger Honey" },
  { name: "Vanilla Honey" },
  { name: "Ashwagandha Honey" },
  { name: "Coffee Honey" },
  { name: "Amla Honey" },
  { name: "Moringa Honey" },
  { name: "Chocolate Honey" },
];

const variants = [...naturalHoney, ...infusedHoney];

const qualities = [
  { k: "01", t: "Raw & unheated", d: "Handled to preserve natural enzymes, pollen and aroma." },
  { k: "02", t: "Moisture-checked", d: "Tested for moisture and density before dispatch." },
  { k: "03", t: "Bulk packing", d: "Food-grade drums, pails and bottles to your spec." },
  { k: "04", t: "Origin-traceable", d: "Variant and region confirmed on every consignment." },
];

export default function HoneyPage() {
  return (
    <main className="product-detail-page honey-page">
      <JsonLd data={collectionPageJsonLd({
        name: "Raw and natural honey",
        description,
        path: "/products/honey",
        items: variants.map((variant) => variant.name),
      })} />
      <SiteHeader theme="solid" />

      <HoneyHero />

      <section className="honey-intro gs-reveal">
        <div className="honey-intro-copy">
          <p className="section-kicker">Honey supply</p>
          <h2 data-reveal>Selected by variant and requirement</h2>
          <p>
            Each variant has a different flavour, colour and end use. We source against the
            buyer&apos;s required variant, grade, quantity and packing format.
          </p>
        </div>
        <div className="honey-intro-stats">
          <figure className="honey-intro-photo">
            <Image
              src="/supreme/generated/honey/honey-editorial-v2.png"
              alt="Premium natural honey, honeycomb and wooden dipper"
              width={1693}
              height={929}
            />
          </figure>
          <article className="bento-tile bento-honey tilt-card">
            <span className="bento-tag">Variants</span>
            <strong data-count="30" data-suffix="+">0</strong>
            <span>Honey types sourced to spec</span>
          </article>
          <article className="bento-tile bento-stat tilt-card">
            <span className="bento-tag">Packing</span>
            <strong>Bulk</strong>
            <span>Drums, pails &amp; retail bottles</span>
          </article>
        </div>
      </section>

      <section className="honey-variants" id="variants">
        <div className="honey-variants-head">
          <h2 data-reveal>Honey range</h2>
          <p>Natural and infused varieties available against your required grade and quantity.</p>
        </div>

        <div className="honey-catalog-group">
          <div className="honey-catalog-heading">
            <div>
              <span>01</span>
              <h3>Natural Honey</h3>
            </div>
            <p>{naturalHoney.length} varieties</p>
          </div>
          <div className="honey-variant-grid honey-catalog-grid gs-stagger">
            {naturalHoney.map((variant, index) => (
              <article className="honey-variant-card honey-catalog-card tilt-card" key={variant.name}>
                <span className="honey-variant-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{variant.name}</h3>
                {variant.detail && <p>{variant.detail}</p>}
                <a
                  className="honey-catalog-enquire"
                  href={`mailto:info@supremetrading.in?subject=${encodeURIComponent(`Honey enquiry: ${variant.name}`)}`}
                >
                  Enquire
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className="honey-catalog-group honey-catalog-group-infused">
          <div className="honey-catalog-heading">
            <div>
              <span>02</span>
              <h3>Infused Natural Honey</h3>
            </div>
            <p>{infusedHoney.length} varieties</p>
          </div>
          <div className="honey-variant-grid honey-catalog-grid gs-stagger">
            {infusedHoney.map((variant, index) => (
              <article className="honey-variant-card honey-catalog-card tilt-card" key={variant.name}>
                <span className="honey-variant-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{variant.name}</h3>
                <a
                  className="honey-catalog-enquire"
                  href={`mailto:info@supremetrading.in?subject=${encodeURIComponent(`Honey enquiry: ${variant.name}`)}`}
                >
                  Enquire
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="honey-quality gs-reveal">
        <div className="honey-quality-head">
          <p className="eyebrow honey-eyebrow"><span /> How we handle it</p>
          <h2 data-reveal>From hive to consignment</h2>
        </div>
        <div className="honey-quality-grid gs-stagger">
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
        href="/products/herbs"
        image="/supreme/generated/medicinal-herbs-flatlay.jpg"
        imageAlt="Bulk medicinal herbs and spices"
        name="Medicinal herbs & spices"
      />

      <SiteFooter />
    </main>
  );
}
