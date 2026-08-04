import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../site-footer";
import SiteHeader from "../../site-header";
import { collectionPageJsonLd, createPageMetadata, JsonLd } from "../../seo";
import CategoryProductBrowser from "../category-product-browser";
import { getCatalog } from "../catalog-data";
import NextCategory from "../next-category";

const description = "Whole botanicals, roots, barks, seeds, flowers and trade spices sourced in bulk to grade for food, wellness and Ayurvedic buyers.";

export const metadata = createPageMetadata({
  title: "Medicinal Herbs & Spices | Supreme Trading Corp",
  description,
  path: "/products/herbs",
  image: "/supreme/generated/medicinal-herbs-flatlay.jpg",
  imageAlt: "Bulk herbs, roots and spices",
  imageWidth: 1600,
  imageHeight: 1066,
});

const qualities = [
  { k: "01", t: "Cleaned & sorted", d: "Graded, de-stoned and sieved to your specification." },
  { k: "02", t: "Moisture-safe", d: "Dried and checked to prevent spoilage in transit." },
  { k: "03", t: "Whole or milled", d: "Supplied whole, cut or powdered to your requirement." },
  { k: "04", t: "Origin-traceable", d: "Botanical name and region confirmed per consignment." },
];

export default async function HerbsPage() {
  const catalog = await getCatalog();
  const category = catalog.find((item) => item.id === "herbs-spices");
  const products = category?.products ?? [];

  return (
    <main className="product-detail-page prod-page herbs-page">
      <JsonLd data={collectionPageJsonLd({
        name: "Medicinal herbs and spices",
        description,
        path: "/products/herbs",
        items: products.map((product) => product.name),
      })} />
      <SiteHeader theme="solid" />

      <section className="product-detail-hero prod-hero">
        <Image
          className="prod-hero-video"
          src="/supreme/generated/medicinal-herbs-flatlay.jpg"
          alt="Top view of medicinal herbs, roots, petals and spices"
          fill
          priority
          sizes="100vw"
        />
        <div className="prod-hero-tint" />
        <div className="prod-hero-inner">
          <div className="catalog-breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/products">Products</Link><span>/</span>
            <span>Medicinal Herbs &amp; Spices</span>
          </div>
          <h1>Medicinal Herbs &amp; Spices</h1>

          <div className="prod-hero-actions">
            <a className="button button-accent" href="#category-products">Catalogue</a>
          </div>
        </div>
      </section>

      <section className="prod-intro gs-reveal">
        <div className="prod-intro-copy">
          <h2 data-reveal>Herbs sourced clean and graded</h2>
          <p>
            Roots, barks, seeds, flowers and whole herbs each need different handling.
            We clean, grade and check moisture, then supply whole, cut or powdered to spec.
          </p>
        </div>
        <div className="prod-intro-media prod-intro-photo">
          <Image
            src="/supreme/generated/herbs-spices-flatlay-full-hero-v2.png"
            alt="Overhead arrangement of medicinal herbs, roots, leaves and whole spices"
            width={1672}
            height={941}
          />
        </div>
      </section>
      <section className="prod-quality gs-reveal">
        <div className="prod-quality-head">
          <p className="eyebrow prod-eyebrow"><span /> How we handle it</p>
          <h2 data-reveal>From field to consignment</h2>
        </div>
        <div className="product-process-visual">
          <Image
            src="/supreme/generated/herbs-field-to-consignment.png"
            alt="Medicinal herbs progressing from cultivated fields to bulk storage and packing"
            fill
            sizes="100vw"
          />
          <span aria-hidden="true" />
        </div>
        <div className="prod-quality-grid herbs-quality-grid">
          {qualities.map((q) => (
            <article className="tilt-card" key={q.k}>
              <span>{q.k}</span>
              <h3>{q.t}</h3>
              <p>{q.d}</p>
            </article>
          ))}
        </div>
      </section>

      <CategoryProductBrowser categoryName="medicinal herbs and spices" products={products} theme="petals" />

      <NextCategory
        currentId="herbs-spices"
      />

      <SiteFooter />
    </main>
  );
}
