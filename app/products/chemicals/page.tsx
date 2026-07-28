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
  image: "/supreme/neutral-materials-hero.png",
  imageAlt: "Industrial powders, liquids and raw material samples",
  imageWidth: 1672,
  imageHeight: 941,
});

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
    <main className="product-detail-page catalog-detail-page bg-[#f4f6f4]">
      <JsonLd data={collectionPageJsonLd({
        name: "Industrial chemicals",
        description,
        path: "/products/chemicals",
        items: products.map((product) => product.name),
      })} />
      <SiteHeader theme="solid" />

      <section data-product-hero className="product-detail-hero catalog-full-hero catalog-full-hero--chemicals">
        <Image data-product-media className="catalog-full-hero-image object-[62%_center]" src="/supreme/neutral-materials-hero.png" alt="Industrial liquids, powders and raw material samples" fill sizes="100vw" priority />
        <div className="catalog-full-hero-overlay" />
        <div data-hero-copy data-product-copy className="catalog-full-hero-copy">
          <div className="catalog-breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span><span>Chemicals</span></div>
          <h1 className="max-w-[780px] mb-7 font-heading text-[clamp(58px,7vw,104px)] leading-[0.88] font-semibold text-white">Industrial chemicals</h1>
          <p className="max-w-[650px] mb-0 text-white/70 text-[15px] leading-[1.8]">Resins, additives, pigments, cellulose products, acids and process chemicals sourced against grade, application and packing requirements.</p>
          <div className="mt-8 flex items-center gap-6 flex-wrap">
            <a className="button bg-[#d9edf0] border-[#d9edf0] text-[#102f37] hover:bg-white" href="#category-products">View chemical range</a>
            <Link className="text-link text-white" href="/contact#enquiry">Send specification</Link>
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
            <article className="tilt-card min-h-[230px] p-7 flex flex-col bg-[#f7faf9] transition-colors hover:bg-white" key={application.number}>
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

      <NextCategory
        href="/products/honey"
        image="/supreme/media/honey-pour-loop-poster.jpg"
        imageAlt="Honey prepared for bulk supply"
        name="Honey"
      />

      <SiteFooter />
    </main>
  );
}
