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

const applications = [
  { number: "01", name: "Tea & infusions", detail: "Whole petals for loose-leaf and blended teas." },
  { number: "02", name: "Food blends", detail: "Colour, aroma and garnish for culinary formulations." },
  { number: "03", name: "Fragrance", detail: "Dried floral material for perfume, incense and potpourri." },
  { number: "04", name: "Wellness", detail: "Selected petals for traditional and personal-care products." },
  { number: "05", name: "Extracts", detail: "Botanical inputs supplied against processing requirements." },
  { number: "06", name: "Custom grades", detail: "Whole, sifted or broken material packed to specification." },
];

const requirementSteps = [
  ["Petal type", "State the botanical, common or trade name required."],
  ["Form and grade", "Specify whole, loose, sifted or powdered petals."],
  ["Quality detail", "Share colour, aroma, moisture and cleanliness expectations."],
  ["Quantity and packing", "Include bulk volume, preferred pack size and destination."],
];

export default async function PetalsPage() {
  const catalog = await getCatalog();
  const category = catalog.find((item) => item.id === "petals");
  const products = category?.products ?? [];

  return (
    <main className="product-detail-page catalog-detail-page bg-[#f3f7fb]">
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
            Rose, hibiscus, chamomile and other dried petals supplied by botanical,
            form, grade and packing requirement.
          </p>
          <div className="mt-8 flex items-center gap-6 flex-wrap">
            <a className="button bg-[#dceaf6] border-[#dceaf6] text-[#123451] hover:bg-white" href="#category-products">View petal range</a>
            <Link className="text-link text-white" href="/contact#enquiry">Send requirement</Link>
          </div>
        </div>
      </section>

      <section className="py-[112px] max-[760px]:py-20 px-[clamp(22px,4.5vw,76px)] max-[760px]:px-5 bg-[#e8f1f8] gs-reveal">
        <div className="max-w-[820px]">
          <span className="text-[#356fa7] text-[clamp(11px,0.78vw,13px)] font-black tracking-[0.08em] uppercase">Applications</span>
          <h2 className="mt-5 mb-0 font-heading text-[clamp(44px,5vw,72px)] leading-[0.96] font-semibold text-[#123451]">Petals, selected to use</h2>
        </div>
        <div className="mt-14 border border-[#356fa7]/18 grid grid-cols-3 max-[900px]:grid-cols-2 max-[580px]:grid-cols-1 gap-px bg-[#356fa7]/18 gs-stagger">
          {applications.map((application) => (
            <article className="tilt-card min-h-[230px] p-7 flex flex-col bg-[#f8fbfd] transition-colors hover:bg-white" key={application.number}>
              <span className="text-[#4d78a5] text-[clamp(11px,0.78vw,13px)] font-black">{application.number}</span>
              <div className="mt-auto">
                <h3 className="mb-2 font-heading text-[28px] leading-none text-[#123451]">{application.name}</h3>
                <p className="m-0 text-[#607384] text-[clamp(13px,0.92vw,16px)] leading-[1.65]">{application.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PetalProductGrid products={products} />

      <section className="py-[108px] max-[760px]:py-20 px-[clamp(22px,4.5vw,76px)] max-[760px]:px-5 grid grid-cols-[0.75fr_1.25fr] max-[850px]:grid-cols-1 gap-[clamp(48px,8vw,130px)] bg-[#dceaf6] gs-reveal">
        <div>
          <span className="text-[#356fa7] text-[clamp(11px,0.78vw,13px)] font-black tracking-[0.08em] uppercase">Before we quote</span>
          <h2 className="mt-5 mb-0 font-heading text-[clamp(44px,5vw,68px)] leading-[0.96] font-semibold text-[#123451]">Send the petal requirement</h2>
        </div>
        <ol className="m-0 p-0 border-t border-[#356fa7]/20 list-none gs-stagger">
          {requirementSteps.map(([title, detail], index) => (
            <li className="py-6 border-b border-[#356fa7]/20 grid grid-cols-[42px_0.6fr_1fr] max-[580px]:grid-cols-[36px_1fr] gap-5 items-start" key={title}>
              <span className="text-[#4d78a5] text-[clamp(10px,0.72vw,12px)] font-black">{String(index + 1).padStart(2, "0")}</span>
              <strong className="font-heading text-[22px] leading-none text-[#123451]">{title}</strong>
              <p className="m-0 text-[#607384] text-[clamp(13px,0.92vw,16px)] leading-[1.65] max-[580px]:col-start-2">{detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <NextCategory
        currentId="petals"
      />

      <SiteFooter />
    </main>
  );
}
