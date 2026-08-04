import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../site-footer";
import SiteHeader from "../../site-header";
import { collectionPageJsonLd, createPageMetadata, JsonLd } from "../../seo";
import { getCatalog } from "../catalog-data";
import CategoryProductBrowser from "../category-product-browser";
import NextCategory from "../next-category";

const description = "Industrial chemicals, resins, additives, pigments and cellulose products sourced in bulk to grade for manufacturers and formulators.";

export const metadata = createPageMetadata({
  title: "Industrial Chemicals | Supreme Trading Corp",
  description,
  path: "/products/chemicals",
  image: "/supreme/generated/industrial-flatlay-full-hero.png",
  imageAlt: "Top-view industrial chemicals layout with powders and process materials",
  imageWidth: 1672,
  imageHeight: 941,
});

const handling = [
  ["Specification checked", "Chemical identity, grade and purity are matched before sourcing."],
  ["Application reviewed", "The intended process and performance requirement guide selection."],
  ["Packing matched", "Pack size and handling are aligned to the material and order volume."],
  ["Dispatch documented", "Destination and supporting commercial details are confirmed before movement."],
];

export default async function ChemicalsPage() {
  const catalog = await getCatalog();
  const category = catalog.find((item) => item.id === "industrial");
  const products = category?.products ?? [];

  return (
    <main className="product-detail-page catalog-detail-page prod-page bg-[#f4f6f4]">
      <JsonLd data={collectionPageJsonLd({
        name: "Industrial chemicals",
        description,
        path: "/products/chemicals",
        items: products.map((product) => product.name),
      })} />
      <SiteHeader theme="solid" />

      <section data-product-hero className="product-detail-hero catalog-full-hero catalog-full-hero--chemicals">
        <Image data-product-media className="catalog-full-hero-image object-center" src="/supreme/generated/industrial-flatlay-full-hero.png" alt="Top-view industrial chemicals arrangement prepared for bulk supply" fill sizes="100vw" priority />
        <div className="catalog-full-hero-overlay" />
        <div data-hero-copy data-product-copy className="catalog-full-hero-copy">
          <div className="catalog-breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span><span>Chemicals</span></div>
          <h1 className="max-w-[780px] mb-7 font-heading text-[clamp(58px,7vw,104px)] leading-[0.88] font-semibold text-white">Industrial Chemicals</h1>
          <div className="mt-8 flex items-center gap-6 flex-wrap">
            <a className="button bg-[#d9edf0] border-[#d9edf0] text-[#102f37] hover:bg-white" href="#category-products">View chemical range</a>
          </div>
        </div>
      </section>

      <section className="prod-intro gs-reveal">
        <div className="prod-intro-copy">
          <h2 data-reveal>Chemicals sourced to specification</h2>
          <p>
            Industrial chemicals require an exact match between grade, purity and end use.
            We review the technical requirement, confirm suitable options and supply in the
            packing format your operation needs.
          </p>
        </div>
        <div className="prod-intro-media prod-intro-photo">
          <Image src="/supreme/generated/industrial-flatlay-full-hero.png" alt="Industrial powders, resins and process materials arranged for bulk sourcing" width={1672} height={941} />
        </div>
      </section>

      <section className="prod-quality gs-reveal">
        <div className="prod-quality-head">
          <p className="eyebrow prod-eyebrow"><span /> How we handle it</p>
          <h2 data-reveal>From specification to dispatch</h2>
        </div>
        <div className="product-process-visual">
          <Image
            src="/supreme/generated/chemicals-spec-to-dispatch.png"
            alt="Industrial chemicals moving from specification checks through controlled bag filling to palletised bulk dispatch"
            fill
            sizes="100vw"
          />
          <span aria-hidden="true" />
        </div>
        <div className="prod-quality-grid">
          {handling.map(([title, detail], index) => (
            <article className="tilt-card" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <CategoryProductBrowser categoryName="industrial chemicals" products={products} theme="chemicals" />

      <NextCategory
        currentId="industrial"
      />

      <SiteFooter />
    </main>
  );
}
