import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import { ArrowRight } from "../icons";
import { collectionPageJsonLd, createPageMetadata, JsonLd } from "../seo";
import { getCatalog } from "./catalog-data";
import ProductGridPlayground from "./product-grid-playground";

// Categories with their own tailored landing page.
const dedicatedPages: Record<string, string> = {
  honey: "/products/honey",
  petals: "/products/petals",
  "herbs-spices": "/products/herbs",
  "food-herbs": "/products/food-ingredients",
  industrial: "/products/chemicals",
};

const categoryImages: Record<string, string> = {
  "herbs-spices": "/supreme/media/herbs-loop-poster.jpg",
  petals: "/supreme/generated/petals-flatlay-full-hero.png",
  honey: "/supreme/media/honey-pour-loop-poster.jpg",
  "food-herbs": "/supreme/generated/food-herbs-flatlay-full-hero.png",
  industrial: "/supreme/neutral-materials-hero.png",
};

const categoryTones: Record<string, string> = {
  "herbs-spices": "bg-[#e7eee8]",
  petals: "bg-[#edf2f7]",
  honey: "bg-[#f3e8cf]",
  "food-herbs": "bg-[#efe5da]",
  industrial: "bg-[#dceaf3]",
};

const categoryOfferings: Record<string, string[]> = {
  "herbs-spices": ["Whole herbs", "Roots & barks", "Seeds & flowers", "Trade spices"],
  petals: ["Rose petals", "Hibiscus petals", "Chamomile petals", "Traditional petals"],
  honey: ["Multiflora honey", "Forest honey", "Monofloral honey", "Bulk packing"],
  "food-herbs": ["Dehydrated vegetables", "Ayurvedic powders", "Ground spices", "Spray-dried powders"],
  industrial: ["Resins", "Performance additives", "Pigments", "Cellulose & process chemicals"],
};

const description = "Explore Supreme Trading Corp's industrial chemicals, food herbs, petals, botanicals and honey categories for bulk and export supply.";

export const metadata = createPageMetadata({
  title: "Product Categories | Supreme Trading Corp",
  description,
  path: "/products",
  image: "/og-products.png",
  imageAlt: "Supreme Trading Corp product categories",
  imageWidth: 1727,
  imageHeight: 911,
});

export default async function ProductsPage() {
  const categories = await getCatalog();
  const totalProducts = categories.reduce((total, category) => total + category.products.length, 0);

  return (
    <main className="bg-paper">
      <JsonLd data={collectionPageJsonLd({
        name: "Supreme Trading Corp product categories",
        description,
        path: "/products",
        items: categories.map((category) => category.name),
      })} />
      <SiteHeader theme="solid" />

      <section data-product-hero className="products-index-hero products-grid-hero">
        <ProductGridPlayground />
        <div className="products-grid-hero-copy" data-hero-copy data-product-copy>
          <div className="catalog-breadcrumb products-grid-breadcrumb"><Link href="/">Home</Link><span>/</span><span>Products</span></div>
          <h1>Product categories</h1>
          <p>{totalProducts} listed materials across industrial chemicals, honey, petals, herbs and food ingredients.</p>
          <a className="next-category-button products-grid-hero-button" href="#catalog">Explore categories <ArrowRight /></a>
        </div>
      </section>

      <section id="catalog" className="py-[104px] max-[760px]:py-20 px-[clamp(22px,6vw,92px)] max-[760px]:px-5 gs-reveal" aria-label="Product categories">
        <div className="max-w-[760px] mb-14">
          <h2 className="max-w-[850px] m-0 font-heading text-[clamp(42px,5vw,64px)] font-semibold leading-none tracking-[-0.03em]">Explore the range</h2>
          <p className="max-w-[680px] mt-5 mb-0 text-muted text-[15px] leading-[1.75]">Choose a material family to review the relevant range, sourcing approach and enquiry information.</p>
        </div>
        <div className="border-t border-[#173a57]/18">
          {categories.map((category, index) => {
            const href = dedicatedPages[category.id] ?? "/contact#enquiry";
            const imageFirst = index % 2 === 0;
            const offers = categoryOfferings[category.id] ?? category.products.slice(0, 4).map((product) => product.name);
            return (
              <article className="product-category-row group min-h-[500px] max-[820px]:min-h-0 border-b border-[#173a57]/18 grid grid-cols-2 max-[820px]:grid-cols-1 overflow-hidden gs-reveal" key={category.id}>
                <div className={`product-category-media min-h-[500px] max-[820px]:min-h-[330px] relative overflow-hidden ${categoryTones[category.id] ?? "bg-[#e8edf1]"} ${imageFirst ? "order-1" : "order-2"} max-[820px]:order-1`}>
                  <Image
                    src={categoryImages[category.id]}
                    alt={`${category.name} category`}
                    fill
                    sizes="(max-width: 820px) 100vw, 50vw"
                    className={`object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045] ${
                      category.id === "industrial"
                        ? "object-[68%_center]"
                        : category.id === "food-herbs"
                          ? "object-[78%_center]"
                          : "object-center"
                    }`}
                  />
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_54%,rgba(10,39,65,0.18))]" aria-hidden="true" />
                  <span className="absolute left-7 top-7 w-11 h-11 border border-[#173a57]/18 bg-white/70 grid place-items-center text-[#174ea6] text-[10px] font-black tracking-[0.08em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className={`product-category-copy p-[clamp(32px,5vw,76px)] flex flex-col justify-center bg-white ${imageFirst ? "order-2" : "order-1"} max-[820px]:order-2`}>
                  <div className="flex items-center justify-between gap-5 text-[10px] font-extrabold tracking-[0.08em] uppercase">
                    <span className="text-[#2d68a0]">Material family</span>
                    <span className="text-[#7d8994]">{category.products.length} listed</span>
                  </div>
                  <h3 className="max-w-[640px] mt-6 mb-5 font-heading text-[clamp(38px,4.5vw,64px)] leading-[0.95] font-semibold tracking-[-0.035em]">{category.name}</h3>
                  <p className="max-w-[590px] m-0 text-muted text-[15px] leading-[1.75]">{category.description}</p>

                  <div className="mt-9 pt-6 border-t border-[#173a57]/16">
                    <p className="mb-4 text-[#7b8792] text-[9px] font-extrabold tracking-[0.1em] uppercase">What we offer</p>
                    <ul className="m-0 p-0 grid grid-cols-2 max-[520px]:grid-cols-1 gap-x-7 list-none">
                      {offers.map((offer) => (
                        <li className="py-3 border-b border-[#173a57]/11 flex items-center gap-3 text-[#24384b] text-[12px] font-semibold leading-[1.45]" key={offer}>
                          <span className="w-1.5 h-1.5 bg-[#2d68a0]" aria-hidden="true" />
                          {offer}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link className="w-fit mt-8 inline-flex items-center gap-3 text-[#174ea6] text-[11px] font-extrabold tracking-[0.03em] uppercase group/link" href={href}>
                    Explore category <ArrowRight />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="min-h-[510px] py-[92px] max-[760px]:py-[78px] px-[clamp(22px,6vw,92px)] max-[760px]:px-5 grid grid-cols-[1.35fr_0.65fr] max-[1100px]:grid-cols-1 gap-20 max-[1100px]:gap-8 items-center bg-[#dceaf6] text-[#122c44] gs-reveal">
        <div>
          <p className="eyebrow text-[#356fa7]"><span className="!bg-[#356fa7]" /> Custom requirement</p>
          <h2 className="max-w-[780px] m-0 text-[#122c44] font-heading text-[clamp(42px,5vw,64px)] leading-[0.98] font-semibold">Product sourcing enquiry</h2>
        </div>
        <div>
          <p className="text-[#526b80] text-sm leading-[1.75]">Include the material name, grade, required quantity, packing preference and destination for a faster response.</p>
          <Link className="button mt-4 bg-[#356fa7] border-[#356fa7] text-white hover:bg-[#2d6193]" href="/contact#enquiry">Send requirement</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
