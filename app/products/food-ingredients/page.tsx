import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../site-footer";
import SiteHeader from "../../site-header";
import { WhatsApp } from "../../icons";
import { getCatalog } from "../catalog-data";
import CategoryProductBrowser from "../category-product-browser";

const WA_HREF = `https://wa.me/919920755226?text=${encodeURIComponent("Hi Supreme Trading, I'd like a food ingredients enquiry. Please share form, grade, packing and availability.")}`;

export const metadata: Metadata = {
  title: "Food Herbs & Powders | Supreme Trading Corp",
  description: "Dehydrated vegetables, food herbs, spices and fruit and vegetable powders sourced in bulk for food and nutritional manufacturing.",
  openGraph: {
    title: "Food Herbs & Powders | Supreme Trading Corp",
    description: "Food ingredients, powders and dehydrated materials supplied in bulk.",
    images: [{ url: "/supreme/source/food_herbs_final.png", width: 1200, height: 900, alt: "Food herbs and dried ingredients" }],
  },
};

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
    <main className="bg-[#fffaf3]">
      <SiteHeader theme="solid" />

      <section className="min-h-[760px] pt-[132px] pb-[68px] px-[clamp(22px,6vw,92px)] max-[760px]:px-5 grid grid-cols-[minmax(0,0.92fr)_minmax(420px,0.78fr)] max-[920px]:grid-cols-1 gap-[clamp(44px,7vw,110px)] items-end bg-[#713b27] text-white relative overflow-hidden isolate before:content-[''] before:absolute before:inset-0 before:-z-[1] before:opacity-40 before:[background:radial-gradient(circle_at_78%_18%,rgba(237,180,92,0.38),transparent_30%),linear-gradient(145deg,#713b27,#9b5432)]">
        <div data-hero-copy className="relative z-[2]">
          <div className="catalog-breadcrumb mb-[74px]"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span><span>Food ingredients</span></div>
          <p className="eyebrow text-[#f0c584]"><span /> Food materials</p>
          <h1 className="max-w-[780px] mb-7 font-heading text-[clamp(58px,7vw,104px)] leading-[0.88] font-semibold text-white">Food herbs & powders</h1>
          <p className="max-w-[650px] mb-0 text-white/72 text-[15px] leading-[1.8]">Dehydrated vegetables, spices, herbal powders and spray-dried ingredients supplied by form, processing requirement and pack size.</p>
          <div className="mt-8 flex items-center gap-6 flex-wrap">
            <a className="button bg-[#f4d7a6] border-[#f4d7a6] text-[#572b1d] hover:bg-white" href="#category-products">View ingredient range</a>
            <Link className="text-link text-white" href="/contact#enquiry">Send requirement</Link>
          </div>
        </div>

        <div data-hero-media className="min-h-[500px] max-[920px]:min-h-[380px] p-7 max-[620px]:p-4 border border-[#f3c77e]/30 rounded-[18px] bg-[#f7e9d5] relative overflow-hidden shadow-[0_36px_100px_rgba(52,21,8,0.28)]">
          <div className="absolute inset-0 opacity-70 [background:radial-gradient(circle_at_72%_24%,rgba(215,132,62,0.38),transparent_38%),linear-gradient(145deg,#fff7ea,#ecd2ae)]" />
          <Image className="relative z-[2] w-full h-full object-contain mix-blend-multiply" src="/supreme/source/food_herbs_final.png" alt="Dried food ingredients prepared for bulk supply" width={760} height={620} priority />
          <div className="absolute left-7 right-7 bottom-7 z-[3] py-4 border-t border-[#713b27]/25 flex justify-between gap-5 text-[#713b27] text-[9px] font-black uppercase">
            <span>Food-grade sourcing</span><span>{products.length} listed materials</span>
          </div>
        </div>
      </section>

      <section className="py-[112px] max-[760px]:py-20 px-[clamp(22px,6vw,92px)] max-[760px]:px-5 bg-[#f7ead8] gs-reveal">
        <div className="max-w-[820px]">
          <span className="text-[#a95632] text-[10px] font-black tracking-[0.08em] uppercase">Ingredient families</span>
          <h2 className="mt-5 mb-0 font-heading text-[clamp(44px,5vw,72px)] leading-[0.96] font-semibold text-[#572b1d]">Built for food production</h2>
        </div>
        <div className="mt-14 border border-[#713b27]/18 grid grid-cols-3 max-[900px]:grid-cols-2 max-[580px]:grid-cols-1 gap-px bg-[#713b27]/18 gs-stagger">
          {families.map((family) => (
            <article className="min-h-[230px] p-7 flex flex-col bg-[#fffaf3] transition-colors hover:bg-white" key={family.number}>
              <span className="text-[#b5653e] text-[10px] font-black">{family.number}</span>
              <div className="mt-auto">
                <h3 className="mb-2 font-heading text-[28px] leading-none text-[#572b1d]">{family.name}</h3>
                <p className="m-0 text-[#806050] text-xs leading-[1.65]">{family.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CategoryProductBrowser categoryName="food ingredients" products={products} theme="food" />

      <section className="py-[108px] max-[760px]:py-20 px-[clamp(22px,6vw,92px)] max-[760px]:px-5 grid grid-cols-[0.75fr_1.25fr] max-[850px]:grid-cols-1 gap-[clamp(48px,8vw,130px)] bg-[#efd8bd] gs-reveal">
        <div>
          <span className="text-[#a95632] text-[10px] font-black tracking-[0.08em] uppercase">Before we quote</span>
          <h2 className="mt-5 mb-0 font-heading text-[clamp(44px,5vw,68px)] leading-[0.96] font-semibold text-[#572b1d]">Send the ingredient requirement</h2>
        </div>
        <ol className="m-0 p-0 border-t border-[#713b27]/20 list-none gs-stagger">
          {requirementSteps.map(([title, detail], index) => (
            <li className="py-6 border-b border-[#713b27]/20 grid grid-cols-[42px_0.6fr_1fr] max-[580px]:grid-cols-[36px_1fr] gap-5 items-start" key={title}>
              <span className="text-[#b5653e] text-[9px] font-black">{String(index + 1).padStart(2, "0")}</span>
              <strong className="font-heading text-[22px] leading-none text-[#572b1d]">{title}</strong>
              <p className="m-0 text-[#806050] text-xs leading-[1.65] max-[580px]:col-start-2">{detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="min-h-[440px] py-20 px-[clamp(22px,6vw,92px)] max-[760px]:px-5 grid grid-cols-[1.2fr_0.8fr] max-[800px]:grid-cols-1 gap-14 items-center bg-[#572b1d] text-white gs-reveal">
        <div><p className="eyebrow text-[#f0c584]"><span /> Ingredient enquiry</p><h2 className="max-w-[800px] m-0 font-heading text-[clamp(44px,5vw,72px)] leading-[0.96] text-white">Confirm form, quantity and availability</h2></div>
        <div><p className="text-white/65 text-sm leading-[1.75]">Share the ingredient name, form, processing detail, pack size and destination.</p><a className="mt-4 w-12 h-12 grid place-items-center bg-white text-[#25a05a]" href={WA_HREF} target="_blank" rel="noopener noreferrer" aria-label="Enquire about food ingredients on WhatsApp" title="WhatsApp"><WhatsApp /></a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
