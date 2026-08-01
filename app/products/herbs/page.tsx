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
          <h1>Medicinal herbs &amp; spices</h1>
          <p className="prod-hero-lead">
            Whole botanicals, roots, barks, seeds and flowers, cleaned and graded, then
            supplied in bulk — whole, cut or milled to your spec.
          </p>
          <div className="prod-hero-actions">
            <a className="button button-accent" href="#category-products">View the range</a>
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

      <CategoryProductBrowser categoryName="medicinal herbs and spices" products={products} theme="petals" />

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
        currentId="herbs-spices"
      />

      <SiteFooter />
    </main>
  );
}
