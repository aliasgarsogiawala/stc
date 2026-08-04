import Image from "next/image";
import SiteFooter from "../../site-footer";
import SiteHeader from "../../site-header";
import HoneyHero from "./honey-hero";
import HoneyCatalog from "./honey-catalog";
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
    <main className="product-detail-page honey-page prod-page">
      <JsonLd data={collectionPageJsonLd({
        name: "Raw and natural honey",
        description,
        path: "/products/honey",
        items: variants.map((variant) => variant.name),
      })} />
      <SiteHeader theme="solid" />

      <HoneyHero />

      <section className="prod-intro gs-reveal">
        <div className="prod-intro-copy">
          <h2 data-reveal>Each variant has a different flavour, colour & end use. Sourced against
            buyer&apos;s required variant & grade</h2>
          <p />
        </div>
        <div className="prod-intro-media prod-intro-photo">
          <Image src="/supreme/generated/honey/honey-editorial-v2.png" alt="Premium natural honey, honeycomb and wooden dipper" width={1693} height={929} />
        </div>
      </section>

      <section className="prod-quality gs-reveal">
        <div className="prod-quality-head">
          <p className="eyebrow prod-eyebrow"><span /> How we handle it</p>
          <h2 data-reveal>From Hive to Shelf</h2>
        </div>
        <div className="product-process-visual">
          <Image
            src="/supreme/generated/honey-hive-to-shelf.png"
            alt="Honey progressing from apiary through extraction and filtration to shelf-ready jars and bulk pails"
            fill
            sizes="100vw"
          />
          <span aria-hidden="true" />
        </div>
        <div className="prod-quality-grid">
          {qualities.map((q) => (
            <article className="tilt-card" key={q.k}>
              <span>{q.k}</span>
              <h3>{q.t}</h3>
              <p>{q.d}</p>
            </article>
          ))}
        </div>
      </section>

      <HoneyCatalog naturalHoney={naturalHoney} infusedHoney={infusedHoney} />

      <NextCategory
        currentId="honey"
      />

      <SiteFooter />
    </main>
  );
}
