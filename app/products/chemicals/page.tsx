import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../site-footer";
import SiteHeader from "../../site-header";
import { WhatsApp } from "../../icons";
import { getCatalog } from "../catalog-data";
import CategoryProductBrowser from "../category-product-browser";

const WA_HREF = `https://wa.me/919920755226?text=${encodeURIComponent("Hi Supreme Trading, I'd like an industrial chemicals enquiry. Please share grade, packing and availability.")}`;

export const metadata: Metadata = {
  title: "Industrial Chemicals | Supreme Trading Corp",
  description: "Industrial chemicals, resins, additives, pigments and cellulose products sourced in bulk to grade for manufacturers and formulators.",
  openGraph: {
    title: "Industrial Chemicals | Supreme Trading Corp",
    description: "Industrial chemicals and formulation materials sourced to specification.",
    images: [{ url: "/supreme/source/industrial_chemicals.png", width: 1200, height: 900, alt: "Industrial chemical laboratory glassware" }],
  },
};

const applications = [
  { number: "01", name: "Paints & coatings", detail: "Resins, pigments and performance additives." },
  { number: "02", name: "Polymer systems", detail: "Acrylic, polyurethane and speciality systems." },
  { number: "03", name: "Construction", detail: "Cellulose, dispersants and process materials." },
  { number: "04", name: "Industrial processing", detail: "Acids, salts, solvents and formulation inputs." },
  { number: "05", name: "Inks & pigments", detail: "Colour systems and supporting additives." },
  { number: "06", name: "Custom formulation", detail: "Grade-led sourcing against technical requirements." },
];

const handling = [
  ["Chemical identity", "Share the chemical, trade or CAS name where available."],
  ["Grade and purity", "State the required specification, concentration or application."],
  ["Packing", "Include pack size, handling requirement and total quantity."],
  ["Destination", "Confirm the delivery city, port or export country."],
];

export default async function ChemicalsPage() {
  const catalog = await getCatalog();
  const category = catalog.find((item) => item.id === "industrial");
  const products = category?.products ?? [];

  return (
    <main className="bg-[#f4f6f4]">
      <SiteHeader theme="solid" />

      <section className="min-h-[760px] pt-[132px] pb-[68px] px-[clamp(22px,6vw,92px)] max-[760px]:px-5 grid grid-cols-[minmax(0,0.9fr)_minmax(420px,0.8fr)] max-[920px]:grid-cols-1 gap-[clamp(44px,7vw,110px)] items-end bg-[#102f37] text-white relative overflow-hidden isolate before:content-[''] before:absolute before:inset-0 before:-z-[1] before:opacity-30 before:[background-image:linear-gradient(rgba(151,205,214,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(151,205,214,0.12)_1px,transparent_1px)] before:[background-size:72px_72px]">
        <div data-hero-copy className="relative z-[2]">
          <div className="catalog-breadcrumb mb-[74px]"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span><span>Chemicals</span></div>
          <p className="eyebrow text-[#a8d6dd]"><span /> Industrial materials</p>
          <h1 className="max-w-[780px] mb-7 font-heading text-[clamp(58px,7vw,104px)] leading-[0.88] font-semibold text-white">Industrial chemicals</h1>
          <p className="max-w-[650px] mb-0 text-white/70 text-[15px] leading-[1.8]">Resins, additives, pigments, cellulose products, acids and process chemicals sourced against grade, application and packing requirements.</p>
          <div className="mt-8 flex items-center gap-6 flex-wrap">
            <a className="button bg-[#d9edf0] border-[#d9edf0] text-[#102f37] hover:bg-white" href="#category-products">View chemical range</a>
            <Link className="text-link text-white" href="/contact#enquiry">Send specification</Link>
          </div>
        </div>

        <div data-hero-media className="min-h-[500px] max-[920px]:min-h-[380px] p-7 max-[620px]:p-4 border border-[#b8dbe0]/25 rounded-[18px] bg-[#e8f0ee] relative overflow-hidden shadow-[0_36px_100px_rgba(0,0,0,0.24)]">
          <div className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_70%_24%,rgba(89,158,171,0.32),transparent_38%),linear-gradient(145deg,#f1f5f4,#cbdcda)]" />
          <Image className="relative z-[2] w-full h-full object-contain mix-blend-multiply" src="/supreme/source/industrial_chemicals.png" alt="Laboratory glassware for industrial chemical materials" width={760} height={620} priority />
          <div className="absolute left-7 right-7 bottom-7 z-[3] py-4 border-t border-[#173e47]/25 flex justify-between gap-5 text-[#173e47] text-[9px] font-black uppercase">
            <span>Technical sourcing</span><span>{products.length} listed materials</span>
          </div>
        </div>
      </section>

      <section className="py-[112px] max-[760px]:py-20 px-[clamp(22px,6vw,92px)] max-[760px]:px-5 bg-[#e8efed] gs-reveal">
        <div className="max-w-[820px]">
          <span className="text-[#4d8792] text-[10px] font-black tracking-[0.08em] uppercase">Applications</span>
          <h2 className="mt-5 mb-0 font-heading text-[clamp(44px,5vw,72px)] leading-[0.96] font-semibold text-[#102f37]">Built around industrial use</h2>
        </div>
        <div className="mt-14 border border-[#173e47]/18 grid grid-cols-3 max-[900px]:grid-cols-2 max-[580px]:grid-cols-1 gap-px bg-[#173e47]/18 gs-stagger">
          {applications.map((application) => (
            <article className="min-h-[230px] p-7 flex flex-col bg-[#f7faf9] transition-colors hover:bg-white" key={application.number}>
              <span className="text-[#4d8792] text-[10px] font-black">{application.number}</span>
              <div className="mt-auto">
                <h3 className="mb-2 font-heading text-[28px] leading-none text-[#102f37]">{application.name}</h3>
                <p className="m-0 text-[#5b6d6d] text-xs leading-[1.65]">{application.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CategoryProductBrowser categoryName="industrial chemicals" products={products} theme="chemicals" />

      <section className="py-[108px] max-[760px]:py-20 px-[clamp(22px,6vw,92px)] max-[760px]:px-5 grid grid-cols-[0.75fr_1.25fr] max-[850px]:grid-cols-1 gap-[clamp(48px,8vw,130px)] bg-[#d8e5e2] gs-reveal">
        <div>
          <span className="text-[#4d8792] text-[10px] font-black tracking-[0.08em] uppercase">Before we quote</span>
          <h2 className="mt-5 mb-0 font-heading text-[clamp(44px,5vw,68px)] leading-[0.96] font-semibold text-[#102f37]">Send the technical requirement</h2>
        </div>
        <ol className="m-0 p-0 border-t border-[#173e47]/20 list-none gs-stagger">
          {handling.map(([title, detail], index) => (
            <li className="py-6 border-b border-[#173e47]/20 grid grid-cols-[42px_0.6fr_1fr] max-[580px]:grid-cols-[36px_1fr] gap-5 items-start" key={title}>
              <span className="text-[#4d8792] text-[9px] font-black">{String(index + 1).padStart(2, "0")}</span>
              <strong className="font-heading text-[22px] leading-none text-[#102f37]">{title}</strong>
              <p className="m-0 text-[#5b6d6d] text-xs leading-[1.65] max-[580px]:col-start-2">{detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="min-h-[440px] py-20 px-[clamp(22px,6vw,92px)] max-[760px]:px-5 grid grid-cols-[1.2fr_0.8fr] max-[800px]:grid-cols-1 gap-14 items-center bg-[#0d2b32] text-white gs-reveal">
        <div><p className="eyebrow text-[#a8d6dd]"><span /> Chemical enquiry</p><h2 className="max-w-[800px] m-0 font-heading text-[clamp(44px,5vw,72px)] leading-[0.96] text-white">Confirm grade, quantity and availability</h2></div>
        <div><p className="text-white/65 text-sm leading-[1.75]">Share the chemical name, specification, application, packing and destination.</p><a className="mt-4 w-12 h-12 grid place-items-center bg-white text-[#25a05a]" href={WA_HREF} target="_blank" rel="noopener noreferrer" aria-label="Enquire about chemicals on WhatsApp" title="WhatsApp"><WhatsApp /></a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
