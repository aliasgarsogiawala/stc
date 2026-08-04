import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../site-footer";
import SiteHeader from "../../site-header";
import { collectionPageJsonLd, createPageMetadata, JsonLd } from "../../seo";
import { getCatalog } from "../catalog-data";
import NextCategory from "../next-category";
import PetalProductGrid from "./petal-product-grid";

const description = "Dried petals sourced in bulk for teas, food blends, fragrance, wellness and traditional applications.";

export const metadata = createPageMetadata({
  title: "Petals | Supreme Trading Corp",
  description,
  path: "/products/petals",
  image: "/supreme/generated/petals-flatlay-full-hero.png",
  imageAlt: "Dried petals prepared for bulk supply",
  imageWidth: 1672,
  imageHeight: 941,
});

const requirementSteps = [
  ["Botanical verified", "The required petal type and botanical identity are confirmed."],
  ["Cleaned & sorted", "Foreign matter is removed and the material is sorted to grade."],
  ["Colour protected", "Moisture and handling are controlled to retain colour and aroma."],
  ["Packed to spec", "Whole, sifted or broken petals are packed for the order volume."],
];

export default async function PetalsPage() {
  const catalog = await getCatalog();
  const category = catalog.find((item) => item.id === "petals");
  const products = category?.products ?? [];

  return (
    <main className="product-detail-page catalog-detail-page prod-page bg-[#f3f7fb]">
      <JsonLd data={collectionPageJsonLd({
        name: "Petals",
        description,
        path: "/products/petals",
        items: products.map((product) => product.name),
      })} />
      <SiteHeader theme="solid" />

      <section data-product-hero className="product-detail-hero catalog-full-hero catalog-full-hero--petals">
        <Image
          data-product-media
          className="catalog-full-hero-image object-center"
          src="/supreme/generated/petals-flatlay-full-hero.png"
          alt="Dried rose, hibiscus, chamomile and violet petals prepared for bulk supply"
          fill
          sizes="100vw"
          priority
        />
        <div className="catalog-full-hero-overlay" />
        <div data-hero-copy data-product-copy className="catalog-full-hero-copy">
          <div className="catalog-breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/products">Products</Link><span>/</span>
            <span>Petals</span>
          </div>
          <h1 className="max-w-[780px] mb-7 font-heading text-[clamp(58px,7vw,104px)] leading-[0.88] font-semibold text-white">Petals</h1>
          <p className="max-w-[650px] mb-0 text-white/72 text-[15px] leading-[1.8]">
          </p>
          <div className="mt-8 flex items-center gap-6 flex-wrap">
            <a className="button bg-[#dceaf6] border-[#dceaf6] text-[#123451] hover:bg-white" href="#category-products">View petal range</a>
          </div>
        </div>
      </section>

      <section className="prod-intro gs-reveal">
        <div className="prod-intro-copy">
          <h2 data-reveal>Each variant is assessed,graded & packed in bulk to your specification
</h2>
        </div>
        <div className="prod-intro-media prod-intro-photo">
          <Image src="/supreme/generated/petals-flatlay-full-hero.png" alt="Dried rose, hibiscus, chamomile and blue petals arranged from above" width={1672} height={941} />
        </div>
      </section>

      <section className="prod-quality gs-reveal">
        <div className="prod-quality-head">
          <p className="eyebrow prod-eyebrow"><span /> How we handle it</p>
          <h2 data-reveal>From Harvest to Fragrance & Flavor</h2>
        </div>
        <div className="product-process-visual">
          <Image
            src="/supreme/generated/petals-harvest-to-pack.png"
            alt="Petals progressing from cultivated flowers through drying and grading to protected bulk packing"
            fill
            sizes="100vw"
          />
          <span aria-hidden="true" />
        </div>
        <div className="prod-quality-grid">
          {requirementSteps.map(([title, detail], index) => (
            <article className="tilt-card" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <PetalProductGrid products={products} />

      <NextCategory
        currentId="petals"
      />

      <SiteFooter />
    </main>
  );
}
