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
  title: "Food Ingredients | Supreme Trading Corp",
  description,
  path: "/products/food-ingredients",
  image: "/supreme/generated/food-herbs-flatlay-full-hero.png",
  imageAlt: "Food ingredients prepared for bulk supply",
  imageWidth: 1672,
  imageHeight: 941,
});

const families = [
  { number: "01", name: "Dehydrated vegetables", detail: "Flakes, granules and powders for packaged food." },
  { number: "02", name: "Herbal powders", detail: "Processed powders for nutritional and traditional use." },
  { number: "03", name: "Culinary spices", detail: "Whole and milled ingredients for seasoning systems." },
  { number: "04", name: "Spray-dried powders", detail: "Fruit and vegetable powders for dry formulations." },
  { number: "05", name: "Beverage ingredients", detail: "Powders and botanicals for premixes and infusions." },
  { number: "06", name: "Custom blends", detail: "Form, mesh and packing aligned to production needs." },
];

const requirementSteps = [
  ["Ingredient form", "Whole, flakes, granules, powder or spray-dried form."],
  ["Processing detail", "Share mesh, moisture or other processing requirements."],
  ["Quantity and packing", "Include trial or bulk volume and preferred pack size."],
  ["End application", "State food, beverage, nutrition or private-label use."],
];

export default async function FoodIngredientsPage() {
  const catalog = await getCatalog();
  const category = catalog.find((item) => item.id === "food-herbs");
  const products = category?.products ?? [];

  return (
    <main className="product-detail-page catalog-detail-page bg-[#f3f7fb]">
      <JsonLd data={collectionPageJsonLd({
        name: "Food ingredients",
        description,
        path: "/products/food-ingredients",
        items: products.map((product) => product.name),
      })} />
      <SiteHeader theme="solid" />

      <section data-product-hero className="product-detail-hero catalog-full-hero catalog-full-hero--food">
        <Image data-product-media className="catalog-full-hero-image object-center" src="/supreme/generated/food-herbs-flatlay-full-hero.png" alt="Food herbs, dehydrated ingredients and powders prepared for bulk supply" fill sizes="100vw" priority />
        <div className="catalog-full-hero-overlay" />
        <div data-hero-copy data-product-copy className="catalog-full-hero-copy">
          <div className="catalog-breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span><span>Food ingredients</span></div>
          <h1 className="max-w-[780px] mb-7 font-heading text-[clamp(58px,7vw,104px)] leading-[0.88] font-semibold text-white">Food ingredients</h1>
          <p className="max-w-[650px] mb-0 text-white/72 text-[15px] leading-[1.8]">Dehydrated vegetables, spices, herbal powders and spray-dried ingredients supplied by form, processing requirement and pack size.</p>
          <div className="mt-8 flex items-center gap-6 flex-wrap">
            <a className="button bg-[#dceaf6] border-[#dceaf6] text-[#123451] hover:bg-white" href="#category-products">View ingredient range</a>
            <Link className="text-link text-white" href="/contact#enquiry">Send requirement</Link>
          </div>
        </div>
      </section>

      <section className="py-[112px] max-[760px]:py-20 px-[clamp(22px,6vw,92px)] max-[760px]:px-5 bg-[#e8f1f8] gs-reveal">
        <div className="max-w-[820px]">
          <span className="text-[#356fa7] text-[10px] font-black tracking-[0.08em] uppercase">Ingredient families</span>
          <h2 className="mt-5 mb-0 font-heading text-[clamp(44px,5vw,72px)] leading-[0.96] font-semibold text-[#123451]">Built for food production</h2>
        </div>
        <div className="mt-14 border border-[#356fa7]/18 grid grid-cols-3 max-[900px]:grid-cols-2 max-[580px]:grid-cols-1 gap-px bg-[#356fa7]/18 gs-stagger">
          {families.map((family) => (
            <article className="tilt-card min-h-[230px] p-7 flex flex-col bg-[#f8fbfd] transition-colors hover:bg-white" key={family.number}>
              <span className="text-[#4d78a5] text-[10px] font-black">{family.number}</span>
              <div className="mt-auto">
                <h3 className="mb-2 font-heading text-[28px] leading-none text-[#123451]">{family.name}</h3>
                <p className="m-0 text-[#607384] text-xs leading-[1.65]">{family.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CategoryProductBrowser categoryName="food ingredients" products={products} theme="petals" />

      <section className="py-[108px] max-[760px]:py-20 px-[clamp(22px,6vw,92px)] max-[760px]:px-5 grid grid-cols-[0.75fr_1.25fr] max-[850px]:grid-cols-1 gap-[clamp(48px,8vw,130px)] bg-[#dceaf6] gs-reveal">
        <div>
          <span className="text-[#356fa7] text-[10px] font-black tracking-[0.08em] uppercase">Before we quote</span>
          <h2 className="mt-5 mb-0 font-heading text-[clamp(44px,5vw,68px)] leading-[0.96] font-semibold text-[#123451]">Send the ingredient requirement</h2>
        </div>
        <ol className="m-0 p-0 border-t border-[#356fa7]/20 list-none gs-stagger">
          {requirementSteps.map(([title, detail], index) => (
            <li className="py-6 border-b border-[#356fa7]/20 grid grid-cols-[42px_0.6fr_1fr] max-[580px]:grid-cols-[36px_1fr] gap-5 items-start" key={title}>
              <span className="text-[#4d78a5] text-[9px] font-black">{String(index + 1).padStart(2, "0")}</span>
              <strong className="font-heading text-[22px] leading-none text-[#123451]">{title}</strong>
              <p className="m-0 text-[#607384] text-xs leading-[1.65] max-[580px]:col-start-2">{detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <NextCategory
        href="/products/chemicals"
        image="/supreme/neutral-materials-hero.png"
        imageAlt="Industrial liquids, powders and material samples"
        name="Industrial chemicals"
      />

      <SiteFooter />
    </main>
  );
}
