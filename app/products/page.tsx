import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import { getCatalog } from "./catalog-data";

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

const categoryTones: Record<string, string> = {
  "herbs-spices": "bg-[#e7eee8]",
  oils: "bg-[#e8edf1]",
  honey: "bg-[#f3e8cf]",
  "food-herbs": "bg-[#efe5da]",
  industrial: "bg-[#dceaf3]",
};

const categoryOfferings: Record<string, string[]> = {
  "herbs-spices": ["Whole herbs", "Roots & barks", "Seeds & flowers", "Trade spices"],
  oils: ["Essential oils", "Carrier oils", "Aroma oils", "Traditional oils"],
  honey: ["Multiflora honey", "Forest honey", "Monofloral honey", "Bulk packing"],
  "food-herbs": ["Dehydrated vegetables", "Ayurvedic powders", "Ground spices", "Spray-dried powders"],
  industrial: ["Resins", "Performance additives", "Pigments", "Cellulose & process chemicals"],
};

export const metadata: Metadata = {
  title: "Product Categories | Supreme Trading Corp",
  description: "Explore Supreme Trading Corp's herbs, spices, oils, honey, food ingredients and industrial chemical categories.",
  openGraph: {
    title: "Product Categories | Supreme Trading Corp",
    description: "Explore botanical, food, oil and industrial material categories.",
    images: [{ url: "/supreme/source/bredcrumb-bg.jpg", width: 1920, height: 987, alt: "Supreme Trading Corp raw material catalogue" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Categories | Supreme Trading Corp",
    description: "Explore botanical, food, oil and industrial material categories.",
    images: ["/supreme/source/bredcrumb-bg.jpg"],
  },
};

export default async function ProductsPage() {
  const categories = await getCatalog();
  const totalProducts = categories.reduce((total, category) => total + category.products.length, 0);

  return (
    <main className="bg-paper">
      <SiteHeader theme="solid" />

      <section data-product-hero className="min-h-[610px] pt-[142px] pb-[54px] px-[clamp(22px,6vw,92px)] max-[760px]:px-5 bg-[#102f4c] text-white relative isolate overflow-hidden flex flex-col justify-end">
        <Image
          className="absolute left-0 top-[-8%] w-full h-[116%] object-cover object-center -z-[2]"
          data-hero-media
          data-product-media
          src="/supreme/product-categories-hero.png"
          alt="Industrial powders, resin granules, oils, honey and food ingredients arranged for bulk trade"
          width={3168}
          height={1344}
          priority
        />
        <div className="absolute inset-0 -z-[1] bg-[linear-gradient(90deg,rgba(7,27,47,0.94)_0%,rgba(10,39,65,0.78)_38%,rgba(10,39,65,0.34)_70%,rgba(10,39,65,0.2)_100%),linear-gradient(0deg,rgba(7,27,47,0.58)_0%,transparent_52%)]" />
        <div className="catalog-breadcrumb mb-auto" data-hero-item><Link href="/">Home</Link><span>/</span><span>Products</span></div>
        <h1 data-hero-item className="max-w-[900px] mb-[34px] font-heading font-semibold text-white text-[clamp(52px,7vw,100px)] leading-[0.92]">Product Categories</h1>
        <div className="pt-6 border-t border-white/25 flex items-center justify-between gap-[42px] max-[760px]:flex-col max-[760px]:items-start" data-hero-meta>
          <p className="max-w-[690px] m-0 text-white/72 text-[15px] leading-[1.75]">
            {totalProducts} listed products across herbs and spices, oils, honey, food ingredients and industrial chemicals.
            Grade, packing and availability are confirmed on enquiry.
          </p>
          <a className="button button-light" href="#catalog">Explore categories</a>
        </div>
      </section>

      <section id="catalog" className="py-[104px] max-[760px]:py-20 px-[clamp(22px,6vw,92px)] max-[760px]:px-5 gs-reveal" aria-label="Product categories">
        <div className="grid grid-cols-[0.55fr_1.45fr] max-[760px]:grid-cols-1 gap-10 max-[760px]:gap-3 items-start mb-14">
          <p className="section-kicker">Catalogue</p>
          <div>
            <h2 className="max-w-[850px] m-0 font-heading text-[clamp(42px,5vw,64px)] font-semibold leading-none tracking-[-0.03em]">Product categories</h2>
            <p className="max-w-[680px] mt-5 mb-0 text-muted text-[15px] leading-[1.75]">Choose a material family to review the relevant range, sourcing approach and enquiry information.</p>
          </div>
        </div>
        <div className="border-t border-[#173a57]/18">
          {categories.map((category, index) => {
            const href = dedicatedPages[category.id] ?? "/contact#enquiry";
            const imageFirst = index % 2 === 0;
            const offers = categoryOfferings[category.id] ?? category.products.slice(0, 4).map((product) => product.name);
            return (
              <article className="group min-h-[500px] max-[820px]:min-h-0 border-b border-[#173a57]/18 grid grid-cols-2 max-[820px]:grid-cols-1 overflow-hidden gs-reveal" key={category.id}>
                <div className={`min-h-[500px] max-[820px]:min-h-[330px] relative overflow-hidden ${categoryTones[category.id] ?? "bg-[#e8edf1]"} ${imageFirst ? "order-1" : "order-2"} max-[820px]:order-1`}>
                  <Image
                    src={categoryImages[category.id]}
                    alt={`${category.name} category`}
                    fill
                    sizes="(max-width: 820px) 100vw, 50vw"
                    className="object-contain p-[clamp(34px,5vw,76px)] mix-blend-multiply transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.055]"
                  />
                  <span className="absolute left-7 top-7 w-11 h-11 border border-[#173a57]/18 bg-white/70 grid place-items-center text-[#174ea6] text-[10px] font-black tracking-[0.08em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className={`p-[clamp(32px,5vw,76px)] flex flex-col justify-center bg-white ${imageFirst ? "order-2" : "order-1"} max-[820px]:order-2`}>
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
                    Explore category <span className="text-base transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

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
