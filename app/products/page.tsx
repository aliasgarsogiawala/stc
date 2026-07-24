import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import { getCatalog } from "./catalog-data";
import ProductCatalog from "./product-catalog";

// Categories with their own tailored landing page.
const dedicatedPages: Record<string, string> = {
  honey: "/products/honey",
  oils: "/products/oils",
  "herbs-spices": "/products/herbs",
  "food-herbs": "/products/food-ingredients",
  industrial: "/products/chemicals",
};

const categoryImages: Record<string, string> = {
  "herbs-spices": "/supreme/source/herbs_and_spices.png",
  oils: "/supreme/source/essential_oil.png",
  honey: "/supreme/source/honey_img.png",
  "food-herbs": "/supreme/source/food_herbs_final.png",
  industrial: "/supreme/source/industrial_chemicals.png",
};

export const metadata: Metadata = {
  title: "Product Catalogue | Supreme Trading Corp",
  description: "Search Supreme Trading Corp's range of herbs, spices, natural oils, honey, food powders and industrial chemicals.",
  openGraph: {
    title: "Product Catalogue | Supreme Trading Corp",
    description: "Search 700+ botanical, food, oil and industrial material listings.",
    images: [{ url: "/supreme/source/bredcrumb-bg.jpg", width: 1920, height: 987, alt: "Supreme Trading Corp raw material catalogue" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Catalogue | Supreme Trading Corp",
    description: "Search 700+ botanical, food, oil and industrial material listings.",
    images: ["/supreme/source/bredcrumb-bg.jpg"],
  },
};

export default async function ProductsPage() {
  const categories = await getCatalog();
  const totalProducts = categories.reduce((total, category) => total + category.products.length, 0);

  return (
    <main className="bg-paper">
      <SiteHeader theme="solid" />

      <section data-product-hero className="min-h-[610px] pt-[142px] pb-[54px] px-[clamp(22px,6vw,92px)] max-[760px]:px-5 [background:linear-gradient(115deg,#102f4c,#1b4e78_62%,#32658e)] text-white relative isolate overflow-hidden flex flex-col justify-end before:content-[''] before:absolute before:right-[-8vw] before:top-[9%] before:w-[min(46vw,650px)] before:aspect-square before:border before:border-white/[0.13] before:rounded-full before:-z-[1]">
        <Image
          className="absolute right-[clamp(20px,5vw,80px)] top-1/2 -translate-y-[47%] w-[min(41vw,560px)] h-auto object-contain -z-[1] opacity-[0.32] [filter:saturate(0.7)] mix-blend-screen max-[760px]:opacity-20"
          data-hero-media
          data-product-media
          src="/supreme/source/industrial_chemicals.png"
          alt="Industrial chemical laboratory glassware"
          width={580}
          height={478}
          priority
        />
        <div className="catalog-breadcrumb mb-auto" data-hero-item><Link href="/">Home</Link><span>/</span><span>Products</span></div>
        <h1 data-hero-item className="max-w-[900px] mb-[34px] font-heading font-semibold text-white text-[clamp(52px,7vw,100px)] leading-[0.92]">Product Catalogue</h1>
        <div className="pt-6 border-t border-white/25 flex items-center justify-between gap-[42px] max-[760px]:flex-col max-[760px]:items-start" data-hero-meta>
          <p className="max-w-[690px] m-0 text-white/72 text-[15px] leading-[1.75]">
            {totalProducts} listed products across herbs and spices, oils, honey, food ingredients and industrial chemicals.
            Grade, packing and availability are confirmed on enquiry.
          </p>
          <a className="button button-light" href="#catalog">Browse catalogue</a>
        </div>
      </section>

      <section className="pt-[88px] px-[clamp(22px,6vw,92px)] max-[760px]:px-5 gs-reveal" aria-label="Product categories">
        <div className="grid grid-cols-[0.55fr_1.45fr] max-[760px]:grid-cols-1 gap-10 max-[760px]:gap-3 items-start mb-[34px]">
          <p className="section-kicker">Catalogue</p>
          <h2 className="max-w-[850px] m-0 font-heading text-[clamp(40px,4vw,52px)] leading-none">Product categories</h2>
        </div>
        <div className="border border-line grid grid-cols-5 max-[1100px]:grid-cols-3 max-[760px]:grid-cols-1 bg-line gap-px gs-stagger">
          {categories.map((category, index) => {
            const href = dedicatedPages[category.id] ?? "#catalog";
            const CardTag = dedicatedPages[category.id] ? Link : "a";
            return (
              <CardTag className="tilt-card min-w-0 min-h-[380px] max-[760px]:min-h-[300px] p-[19px] flex flex-col bg-white transition-[background,transform,border-color] duration-200 hover:bg-[#f3f4ed]" href={href} key={category.id}>
                <div className="flex justify-between text-clay text-[11px] font-black">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{category.products.length}+</strong>
                </div>
                <Image
                  src={categoryImages[category.id]}
                  alt={`${category.name} category`}
                  width={290}
                  height={239}
                  className="w-full h-[140px] my-[18px] object-contain mix-blend-multiply max-[760px]:w-[42%] max-[760px]:self-end"
                />
                <h3 className="mt-auto mb-2.5 font-heading text-[27px] leading-[1.05]">{category.name}</h3>
                <p className="m-0 text-muted text-xs leading-[1.6]">{category.description}</p>
              </CardTag>
            );
          })}
        </div>
      </section>

      <ProductCatalog categories={categories} />

      <section className="min-h-[510px] py-[92px] max-[760px]:py-[78px] px-[clamp(22px,6vw,92px)] max-[760px]:px-5 grid grid-cols-[1.35fr_0.65fr] max-[1100px]:grid-cols-1 gap-20 max-[1100px]:gap-8 items-center bg-deep text-white gs-reveal">
        <div>
          <p className="eyebrow text-[#e4b39f]"><span /> Custom requirement</p>
          <h2 className="max-w-[780px] m-0 text-white font-heading text-[clamp(42px,5vw,64px)] leading-[0.98] font-semibold">Product sourcing enquiry</h2>
        </div>
        <div>
          <p className="text-white/70 text-sm leading-[1.75]">Include the material name, grade, required quantity, packing preference and destination for a faster response.</p>
          <Link className="button button-light mt-4" href="/contact#enquiry">Send requirement</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
