import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: "About Supreme Trading Corp | Mumbai",
  description: "Supreme Trading Corp was established in Mumbai in 2002 and supplies raw materials for industrial, food, fragrance, Ayurvedic and Unani applications.",
  openGraph: {
    title: "About Supreme Trading Corp",
    description: "Raw material import, export and wholesale supply from Mumbai since 2002.",
    images: [{ url: "/supreme/source/abouts.png", width: 570, height: 354, alt: "Supreme Trading Corp raw materials" }],
  },
};

const industries = [
  "Paint & polish",
  "Perfumery & essence",
  "Agarbatti",
  "Ayurvedic pharmacy",
  "Unani pharmacy",
  "Food manufacturing",
  "Industrial formulation",
  "Wholesale trade",
];

const qualitySteps = [
  { number: "01", title: "Requirement review", text: "Material, grade, intended application, quantity and destination are established before sourcing." },
  { number: "02", title: "Material assessment", text: "Products are reviewed against the required specification and the appropriate supply option is shortlisted." },
  { number: "03", title: "Packing and handling", text: "Packing format and handling requirements are aligned with the product and order size." },
  { number: "04", title: "Dispatch coordination", text: "Orders are prepared for domestic or export movement with clear delivery coordination." },
];

const label = "text-clay text-[9px] font-black tracking-[0.08em] uppercase";
const h2 = "font-heading text-[clamp(46px,5vw,76px)] leading-[0.96] font-semibold m-0";

export default function AboutPage() {
  return (
    <main className="bg-paper">
      <SiteHeader theme="solid" />

      <section className="min-h-[760px] pt-[150px] pb-[78px] px-[clamp(22px,6vw,92px)] grid grid-cols-[minmax(0,0.92fr)_minmax(420px,0.78fr)] max-[980px]:grid-cols-1 gap-[clamp(50px,7vw,120px)] items-end bg-[#e8e9e1] relative overflow-hidden before:content-[''] before:absolute before:right-[-19vw] before:top-[-16vw] before:w-[52vw] before:h-[52vw] before:border before:border-[rgba(19,32,27,0.11)] before:rounded-full before:shadow-[0_0_0_90px_rgba(19,32,27,0.025),0_0_0_180px_rgba(19,32,27,0.018)]">
        <div className="relative z-[2]" data-hero-copy>
          <div className="catalog-breadcrumb mb-[82px] text-muted [&_a]:text-ink"><Link href="/">Home</Link><span>/</span><span>About</span></div>
          <p className="eyebrow"><span /> Mumbai · Since 2002</p>
          <h1 className="max-w-[740px] mb-[26px] text-ink font-heading font-semibold text-[clamp(62px,7vw,108px)] leading-[0.88]">About Supreme Trading Corp</h1>
          <p className="max-w-[580px] text-muted text-[15px] leading-[1.75]">Import, export and wholesale supply of raw materials for manufacturers and traders.</p>
        </div>

        <div className="relative z-[2] p-4 bg-paper max-[980px]:w-[min(700px,100%)]" data-hero-media>
          <Image className="image-drift w-full h-auto block" src="/supreme/source/abouts.png" alt="Raw materials handled by Supreme Trading Corp" width={570} height={354} priority sizes="(max-width: 820px) 92vw, 48vw" />
          <div className="pt-[18px] px-1 pb-0.5 flex justify-between gap-5 text-muted text-[9px] uppercase" data-hero-meta>
            <span>Head office</span>
            <strong className="text-ink">Mumbai, Maharashtra</strong>
          </div>
        </div>
      </section>

      <section className="py-[118px] max-[720px]:py-[82px] px-[clamp(22px,6vw,92px)] grid grid-cols-[0.32fr_1.68fr] max-[720px]:grid-cols-1 gap-[42px] gs-reveal">
        <div className={label}>Company</div>
        <div>
          <h2 className={h2}>Trading and sourcing across material categories</h2>
          <div className="mt-[46px] pt-8 border-t border-line grid grid-cols-2 max-[720px]:grid-cols-1 gap-[clamp(30px,5vw,76px)]">
            <p className="m-0 text-muted text-sm leading-[1.85]">Supreme Trading Corp was established in Mumbai in 2002 with a focus on reliable supply and product quality. The company operates in imports, exports and wholesale trading.</p>
            <p className="m-0 text-muted text-sm leading-[1.85]">Its range serves Ayurvedic and Unani medicine, perfumery, essence, paint, polish, food and other industrial applications. The catalogue includes industrial chemicals, oils, gums, food ingredients, spices and botanical raw materials.</p>
          </div>
        </div>
      </section>

      <section className="mx-[clamp(22px,6vw,92px)] max-[720px]:mx-5 border-y border-line grid grid-cols-4 max-[980px]:grid-cols-2 max-[720px]:grid-cols-1 gs-stagger" aria-label="Company facts">
        {[
          { s: "Established", n: "2002", p: "Mumbai, Maharashtra" },
          { s: "Catalogue", n: "800+", p: "Listed raw materials" },
          { s: "Trade", n: "India", p: "Domestic and export enquiries" },
          { s: "Supply", n: "Bulk", p: "Wholesale requirements" },
        ].map((f) => (
          <article className="min-h-[210px] max-[720px]:min-h-[170px] p-7 border-r border-line last:border-r-0 max-[980px]:[&:nth-child(2)]:border-r-0 max-[720px]:border-r-0 max-[720px]:border-b flex flex-col" key={f.s}>
            <span className="text-clay text-[9px] font-black uppercase">{f.s}</span>
            <strong className="mt-auto font-heading text-[55px] leading-none">{f.n}</strong>
            <p className="mt-[7px] text-muted text-[10px]">{f.p}</p>
          </article>
        ))}
      </section>

      <section className="py-[130px] max-[720px]:py-[82px] px-[clamp(22px,6vw,92px)] grid grid-cols-[minmax(260px,0.8fr)_minmax(220px,0.55fr)_minmax(340px,0.75fr)] max-[980px]:grid-cols-[1fr_0.75fr] gap-[22px] items-center bg-deep text-white overflow-hidden gs-reveal">
        <div className="overflow-hidden image-drift">
          <Image src="/supreme/source/abu.png" alt="Raw material preparation and handling" width={570} height={354} className="w-full h-auto block" />
        </div>
        <div className="overflow-hidden image-drift mt-[130px] max-[980px]:mt-0 max-[980px]:ml-[18%]">
          <Image src="/supreme/source/nb.png" alt="Liquid and powdered material samples" width={570} height={400} className="w-full h-auto block" />
        </div>
        <div className="pl-[clamp(18px,4vw,64px)] max-[980px]:col-span-full max-[980px]:pl-0 max-[980px]:pt-[50px]">
          <span className={label}>Applications</span>
          <h2 className={`${h2} mt-3.5 text-white`}>Industries supplied</h2>
          <div className="mt-[42px] border-t border-white/20 grid max-[980px]:grid-cols-2 gs-stagger">
            {industries.map((industry, index) => (
              <div className="py-[13px] border-b border-white/20 grid grid-cols-[38px_1fr] gap-3 text-[11px]" key={industry}>
                <b className="text-[#dfa98f] text-[8px]">{String(index + 1).padStart(2, "0")}</b><span>{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[126px] max-[720px]:py-[82px] px-[clamp(22px,6vw,92px)] gs-reveal">
        <div className="max-w-[900px]">
          <span className={label}>Quality and order handling</span>
          <h2 className={`${h2} mt-4`}>From enquiry to dispatch</h2>
          <p className="max-w-[580px] mt-7 text-muted text-[13px] leading-[1.75]">Material fit, quality requirements and handling details are reviewed before an order moves forward.</p>
        </div>
        <div className="mt-[66px] border border-line grid grid-cols-4 max-[980px]:grid-cols-2 max-[720px]:grid-cols-1 bg-line gap-px gs-stagger">
          {qualitySteps.map((step) => (
            <article className="min-h-[310px] max-[720px]:min-h-[250px] p-[25px] flex flex-col bg-white" key={step.number}>
              <span className="text-clay text-[9px] font-black">{step.number}</span>
              <h3 className="mt-auto mb-3.5 font-heading text-[30px] leading-none">{step.title}</h3>
              <p className="m-0 text-muted text-[11px] leading-[1.7]">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-[104px] max-[720px]:py-[82px] px-[clamp(22px,6vw,92px)] grid grid-cols-[minmax(300px,0.8fr)_minmax(360px,1.2fr)] max-[720px]:grid-cols-1 gap-[clamp(54px,9vw,150px)] bg-[#ebece5] gs-reveal">
        <div>
          <span className={label}>Working principles</span>
          <h2 className={`${h2} mt-4`}>Commercially practical supply</h2>
        </div>
        <ul className="m-0 p-0 border-t border-line list-none">
          {["Product quality and material fit", "Customisation against buyer requirements", "Competitive commercial terms", "Timely delivery coordination", "Clear payment and order communication"].map((li) => (
            <li className="py-[22px] px-1 border-b border-line font-heading text-[25px]" key={li}>{li}</li>
          ))}
        </ul>
      </section>

      <section className="min-h-[450px] py-[90px] max-[720px]:py-[82px] px-[clamp(22px,6vw,92px)] grid grid-cols-[1.25fr_0.75fr] max-[720px]:grid-cols-1 gap-[clamp(48px,8vw,120px)] items-center bg-deep text-white gs-reveal">
        <div>
          <span className={label}>Next step</span>
          <h2 className={`${h2} mt-4 text-white`}>Discuss a material requirement</h2>
        </div>
        <div>
          <p className="max-w-[430px] text-white/65 text-[13px] leading-[1.7]">Share the product name, grade, quantity, packing and destination.</p>
          <Link className="button button-light mt-[18px]" href="/contact#enquiry">Send enquiry</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
