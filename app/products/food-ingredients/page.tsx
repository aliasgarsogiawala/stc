import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../site-footer";
import SiteHeader from "../../site-header";
import { collectionPageJsonLd, createPageMetadata, JsonLd } from "../../seo";
import { getCatalog } from "../catalog-data";
import CategoryProductBrowser from "../category-product-browser";
import NextCategory from "../next-category";

const description = "Dehydrated vegetables, food herbs, spices and fruit and vegetable powders sourced in bulk for food and nutritional manufacturing.";

export const metadata = createPageMetadata({
  title: "Food Herbs | Supreme Trading Corp",
  description,
  path: "/products/food-ingredients",
  image: "/supreme/generated/food-herbs-flatlay-full-hero.png",
  imageAlt: "Food herbs prepared for bulk supply",
  imageWidth: 1672,
  imageHeight: 941,
});

const requirementSteps = [
  ["Form matched", "Whole, flakes, granules, powder or spray-dried form is confirmed."],
  ["Moisture checked", "Processing and moisture requirements are reviewed for stable supply."],
  ["Batch consistent", "Colour, aroma and particle size are checked against the requirement."],
  ["Food-safe packing", "Bulk volume and pack size are aligned to production and transit needs."],
];

export default async function FoodHerbsPage() {
  const catalog = await getCatalog();
  const category = catalog.find((item) => item.id === "food-herbs");
  const products = category?.products ?? [];

  return (
    <main className="product-detail-page catalog-detail-page prod-page bg-[#f3f7fb]">
      <JsonLd data={collectionPageJsonLd({
        name: "Food herbs",
        description,
        path: "/products/food-ingredients",
        items: products.map((product) => product.name),
      })} />
      <SiteHeader theme="solid" />

      <section data-product-hero className="product-detail-hero catalog-full-hero catalog-full-hero--food">
        <Image data-product-media className="catalog-full-hero-image object-center" src="/supreme/generated/food-herbs-flatlay-full-hero.png" alt="Food herbs, dehydrated ingredients and powders prepared for bulk supply" fill sizes="100vw" priority />
        <div className="catalog-full-hero-overlay" />
        <div data-hero-copy data-product-copy className="catalog-full-hero-copy">
          <div className="catalog-breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span><span>Food herbs</span></div>
          <h1 className="max-w-[780px] mb-7 font-heading text-[clamp(58px,7vw,104px)] leading-[0.88] font-semibold text-white">Food herbs</h1>
          <p className="max-w-[650px] mb-0 text-white/72 text-[15px] leading-[1.8]">Dehydrated vegetables, spices, herbal powders and spray-dried ingredients supplied by form, processing requirement and pack size.</p>
          <div className="mt-8 flex items-center gap-6 flex-wrap">
            <a className="button bg-[#dceaf6] border-[#dceaf6] text-[#123451] hover:bg-white" href="#category-products">View ingredient range</a>
          </div>
        </div>
      </section>

      <section className="prod-intro gs-reveal">
        <div className="prod-intro-copy">
          <h2 data-reveal>Food herbs prepared for production</h2>
          <p>
            Dehydrated vegetables, culinary herbs and powders each need the right form,
            moisture and particle size. We source and prepare them around the buyer&apos;s
            processing, packing and volume requirements.
          </p>
        </div>
        <div className="prod-intro-media prod-intro-photo">
          <Image src="/supreme/generated/food-herbs-flatlay-full-hero.png" alt="Food herbs, dehydrated ingredients and powders arranged from above" width={1672} height={941} />
        </div>
      </section>

      <section className="prod-quality gs-reveal">
        <div className="prod-quality-head">
          <p className="eyebrow prod-eyebrow"><span /> How we handle it</p>
          <h2 data-reveal>From ingredient to production pack</h2>
        </div>
        <div className="product-process-visual">
          <Image
            src="/supreme/generated/food-herbs-field-to-pack.png"
            alt="Food herbs progressing from cultivated fields through drying and milling to food-safe bulk packing"
            fill
            sizes="100vw"
          />
          <span aria-hidden="true" />
        </div>
        <div className="prod-quality-grid gs-stagger">
          {requirementSteps.map(([title, detail], index) => (
            <article className="tilt-card" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <CategoryProductBrowser categoryName="food herbs" products={products} theme="petals" />

      <NextCategory
        currentId="food-herbs"
      />

      <SiteFooter />
    </main>
  );
}
