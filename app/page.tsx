import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, WhatsApp } from "./icons";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import Splash from "./splash";
import HeroCarousel from "./hero-carousel";

const categories = [
  {
    name: "Industrial Chemicals",
    detail: "Acids, solvents, salts and process chemicals for dependable production supply.",
    examples: "Acids · Solvents · Salts",
    href: "/products/chemicals",
    image: "/supreme/source/industrial_chemicals.png",
    imageAlt: "Laboratory glassware for industrial chemical supply",
  },
  {
    name: "Resins & Additives",
    detail: "Coating resins, cellulose products, pigments and performance additives.",
    examples: "Resins · Pigments · Cellulose",
    href: "/products/chemicals",
    image: "/supreme/source/tren-pro4.png",
    imageAlt: "Powder and liquid raw material samples",
  },
  {
    name: "Oils & Liquid Ingredients",
    detail: "Essential, medical and speciality oils supplied against your required grade.",
    examples: "Essential · Medical · Carrier",
    href: "/products/oils",
    image: "/supreme/source/essential_oil.png",
    imageAlt: "Speciality oils in laboratory bottles",
  },
  {
    name: "Custom Bulk Sourcing",
    detail: "Specified grades, bulk quantities and harder-to-find materials across categories.",
    examples: "Grade · Quantity · Destination",
    href: "/contact#enquiry",
    image: "/supreme/source/nb.png",
    imageAlt: "Bulk ingredient sample and dispensing bottle",
  },
];

const materialGroups = [
  { code: "01", name: "Industrial chemicals", note: "Acids, solvents, salts and process materials", image: "/supreme/source/industrial_chemicals.png", href: "/products/chemicals" },
  { code: "02", name: "Resins & polymers", note: "Acrylic, polyurethane and speciality resin systems", image: "/supreme/source/tren-pro4.png", href: "/products/chemicals" },
  { code: "03", name: "Additives & cellulose", note: "Wetting agents, defoamers, HPMC, HEC and CMC", image: "/supreme/source/tren-pro3.png", href: "/products/chemicals" },
  { code: "04", name: "Oils & liquids", note: "Essential, medical, carrier and speciality oils", image: "/supreme/source/essential_oil.png", href: "/products/oils" },
  { code: "05", name: "Food ingredients", note: "Powders, spices and dehydrated ingredients", image: "/supreme/source/honey_img.png", href: "/products/food-ingredients" },
  { code: "06", name: "Specified sourcing", note: "Grade-led, quantity-led and destination-led supply", image: "/supreme/source/nb.png", href: "/contact#enquiry" },
];

const whyChoose = [
  { icon: "/supreme/why-icon1.png", title: "Grade-verified sourcing", text: "Every material matched to your grade, origin and application before we quote." },
  { icon: "/supreme/achieve-icon4.png", title: "Consistent quality", text: "Reviewed batch by batch so repeat orders stay reliable and predictable." },
  { icon: "/supreme/achieve-icon3.png", title: "Wide material range", text: "Chemicals, resins, oils, food ingredients and botanicals from one desk." },
  { icon: "/supreme/achieve-icon2.png", title: "Bulk & export ready", text: "Sensible packing and clean dispatch across India and for export buyers." },
];

const facts = [
  { value: 23, suffix: "", label: "Years experience", icon: "/supreme/achieve-icon1.png" },
  { value: 50, suffix: "+", label: "Happy customers", icon: "/supreme/achieve-icon2.png" },
  { value: 800, suffix: "+", label: "Products", icon: "/supreme/achieve-icon3.png" },
  { value: 100, suffix: "%", label: "Product purity", icon: "/supreme/achieve-icon4.png" },
];

const process = [
  "Requirement mapping",
  "Material shortlisting",
  "Quality review",
  "Bulk dispatch",
];

export default function Home() {
  return (
    <main id="top">
      <Splash />
      <SiteHeader />

      <HeroCarousel />

      <section className="overflow-hidden border-y border-line bg-[#f1efe7]" aria-label="Product specialities">
        <div className="min-w-max py-[18px] flex items-center gap-[54px] animate-ticker">
          {["Chemicals", "Resins", "Additives", "Oils", "Food ingredients", "Custom sourcing"].map((t) => (
            <span key={t} className="text-deep font-heading text-[23px] font-semibold">{t}</span>
          ))}
        </div>
      </section>

      <section className="py-[118px] max-[720px]:py-[84px] px-[clamp(22px,6vw,92px)] bg-paper gs-reveal" id="range">
        <div className="section-kicker">What we source</div>
        <div className="grid grid-cols-[minmax(0,0.95fr)_minmax(280px,0.55fr)] max-[720px]:block gap-[70px] items-end mb-12">
          <h2 data-reveal className="font-heading text-[clamp(38px,5vw,66px)] leading-none font-semibold text-ink">Four material categories</h2>
          <p className="text-muted text-base leading-[1.75] mb-1.5 max-[720px]:mt-[22px]">Supreme works like a sourcing desk: understand the requirement, shortlist practical options, check material fit, then move the consignment cleanly.</p>
        </div>

        <div className="grid grid-cols-4 max-[1060px]:grid-cols-2 max-[720px]:grid-cols-1 gap-px border border-line bg-line gs-stagger">
          {categories.map((category, index) => (
            <Link className="group min-h-[440px] max-[720px]:min-h-[390px] p-[22px] grid grid-rows-[auto_154px_1fr] gap-[18px] bg-white relative overflow-hidden transition-[background,transform] duration-200 hover:bg-[#f4f6f0] hover:-translate-y-1" href={category.href} key={category.name}>
              <span className="text-clay text-xs font-black">{String(index + 1).padStart(2, "0")}</span>
              <Image src={category.image} alt={category.imageAlt} width={290} height={239} className="h-[154px] max-h-[184px] w-full self-center justify-self-center object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.04]" />
              <div>
                <h3 className="font-heading text-[29px] leading-[1.08] font-bold m-0">{category.name}</h3>
                <p className="mt-3 text-muted text-sm leading-[1.65]">{category.detail}</p>
                <small className="mt-3.5 block text-clay text-[9px] font-black tracking-[0.04em] uppercase">{category.examples}</small>
                <span className="mt-5 pb-[5px] border-b border-current inline-flex text-deep text-xs font-black">Request availability</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="gs-reveal py-28 max-[600px]:py-[78px] px-[clamp(22px,6vw,92px)] bg-paper" id="why">
        <div className="max-w-[660px] mb-[46px]">
          <div className="section-label"><i /> Why Supreme</div>
          <h2 data-reveal className="mt-[18px] text-ink font-heading text-[clamp(40px,4.6vw,64px)] leading-none font-semibold">Why buyers choose us</h2>
          <p className="max-w-[540px] mt-[18px] text-muted text-base leading-[1.7]">A sourcing partner that works to your grade, quantity and timeline.</p>
        </div>
        <div className="grid grid-cols-4 max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1 gap-[18px] gs-stagger">
          {whyChoose.map((item) => (
            <article className="p-[34px_28px] border border-line rounded-[18px] bg-white transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-black/25 hover:shadow-[0_18px_42px_rgba(19,32,27,0.08)]" key={item.title}>
              <span className="grid place-items-center w-[68px] h-[68px] mb-6 rounded-full [background:var(--herb-grad)] shadow-[0_14px_30px_rgba(28,65,51,0.24)]">
                <Image src={item.icon} alt="" width={40} height={40} className="w-[34px] h-[34px] object-contain" />
              </span>
              <h3 className="mb-2.5 font-heading text-[23px] leading-[1.1] font-bold">{item.title}</h3>
              <p className="text-muted text-[13px] leading-[1.65]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-[118px] max-[620px]:py-[82px] px-[clamp(22px,6vw,92px)] max-[620px]:px-5 bg-cream relative overflow-hidden">
        <Image className="absolute z-0 pointer-events-none right-[-3vw] top-[4vh] w-[clamp(150px,18vw,300px)] opacity-[0.42] h-auto" data-float src="/supreme/source/bg-leaf1.png" alt="" width={300} height={300} />
        <Image className="absolute z-0 pointer-events-none left-[-3vw] bottom-[-4vh] w-[clamp(120px,13vw,210px)] opacity-[0.34] h-auto" data-float src="/supreme/source/bg-leaf2.png" alt="" width={210} height={210} />

        <div className="max-w-[720px] mb-[46px] relative z-[2]">
          <div className="section-kicker">Capabilities</div>
          <h2 data-reveal className="font-heading text-[clamp(44px,5vw,72px)] leading-[0.98] font-semibold text-ink m-0">One desk, every material</h2>
          <p className="max-w-[540px] mt-5 text-muted text-base leading-[1.75]">Two decades of material knowledge, a wide supplier network and a team that reads a specification the way a buyer does.</p>
        </div>

        <div className="relative z-[2] grid grid-cols-4 max-[980px]:grid-cols-2 max-[620px]:grid-cols-1 auto-rows-[minmax(190px,auto)] gap-4">
          <article className="col-span-2 row-span-2 max-[980px]:row-span-1 max-[620px]:col-span-1 p-[30px] rounded-2xl flex flex-col justify-between gap-2.5 relative overflow-hidden [background:var(--herb-grad)] text-white transition-transform duration-300 hover:-translate-y-[5px] before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:[background:radial-gradient(circle_at_78%_12%,rgba(232,182,77,0.32),transparent_46%)]">
            <span className="relative z-[1] text-honey-soft text-[10px] font-black tracking-[0.06em] uppercase">Flagship capability</span>
            <div className="relative z-[1]">
              <h3 className="font-heading text-[clamp(26px,2.6vw,38px)] leading-[1.02] font-bold text-white m-0">Grade-led sourcing across five material families</h3>
              <p className="mt-2.5 text-white/70 text-[15px] leading-[1.6] max-w-[420px]">From industrial chemicals and coating resins to essential oils, food ingredients and speciality raw materials — matched to your grade, quantity and destination.</p>
            </div>
            <Link className="relative z-[1] w-fit text-honey-soft border-b border-current pb-[3px] text-xs font-black" href="/products">Browse the catalogue</Link>
          </article>

          <article className="p-[30px] rounded-2xl border border-line bg-white flex flex-col justify-center gap-1.5 relative overflow-hidden transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-[5px] hover:border-black/25 hover:shadow-[0_26px_60px_rgba(19,32,27,0.12)]">
            <span className="text-clay text-[10px] font-black tracking-[0.06em] uppercase">Established</span>
            <strong className="font-heading text-[clamp(46px,5vw,68px)] leading-none font-semibold text-ink">2002</strong>
            <span className="text-muted text-xs leading-[1.5]">Trading from Mumbai</span>
          </article>

          <article className="p-[30px] rounded-2xl flex flex-col justify-center gap-1.5 relative overflow-hidden [background:var(--amber-grad)] text-[#241606] transition-transform duration-300 hover:-translate-y-[5px]">
            <span className="text-[rgba(28,19,10,0.62)] text-[10px] font-black tracking-[0.06em] uppercase">Materials</span>
            <strong data-count="800" data-suffix="+" className="font-heading text-[clamp(46px,5vw,68px)] leading-none font-semibold text-[#1c130a]">800+</strong>
            <span className="text-[rgba(28,19,10,0.72)] text-xs leading-[1.5]">Grades sourced to spec</span>
          </article>

          <article className="col-span-2 max-[620px]:col-span-1 group p-[30px] rounded-2xl border border-line bg-white flex flex-col justify-end gap-2.5 relative overflow-hidden transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-[5px] hover:border-black/25 hover:shadow-[0_26px_60px_rgba(19,32,27,0.12)]">
            <Image className="absolute right-[-14px] top-[-14px] w-[46%] max-w-[200px] object-contain mix-blend-multiply opacity-90 transition-transform duration-500 group-hover:scale-[1.07] group-hover:-rotate-3" src="/supreme/source/honey_img.png" alt="" width={200} height={200} />
            <span className="text-clay text-[10px] font-black tracking-[0.06em] uppercase">Food &amp; natural</span>
            <h3 className="font-heading text-[clamp(26px,2.6vw,38px)] leading-[1.02] font-bold m-0">Honey, herbs &amp; food ingredients</h3>
            <p className="text-muted text-[13px] leading-[1.6]">Powders, spices, dehydrated ingredients and natural sweeteners for food brands and formulators.</p>
          </article>

          <article className="group p-[30px] rounded-2xl border border-line bg-white flex flex-col justify-end gap-2.5 relative overflow-hidden transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-[5px] hover:border-black/25 hover:shadow-[0_26px_60px_rgba(19,32,27,0.12)]">
            <Image className="absolute right-[-14px] top-[-14px] w-[46%] max-w-[200px] object-contain mix-blend-multiply opacity-90 transition-transform duration-500 group-hover:scale-[1.07] group-hover:-rotate-3" src="/supreme/source/essential_oil.png" alt="" width={160} height={160} />
            <span className="text-clay text-[10px] font-black tracking-[0.06em] uppercase">Oils</span>
            <h3 className="font-heading text-[clamp(26px,2.6vw,38px)] leading-[1.02] font-bold m-0">Essential &amp; carrier oils</h3>
          </article>

          <article className="p-[30px] rounded-2xl border border-line bg-white flex flex-col justify-center gap-1.5 relative overflow-hidden transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-[5px] hover:border-black/25 hover:shadow-[0_26px_60px_rgba(19,32,27,0.12)]">
            <span className="text-clay text-[10px] font-black tracking-[0.06em] uppercase">Reach</span>
            <strong className="font-heading text-[clamp(34px,3.4vw,46px)] leading-none font-semibold text-ink">India + Export</strong>
            <span className="text-muted text-xs leading-[1.5]">Bulk supply, cleanly handled</span>
          </article>
        </div>
      </section>

      <section className="min-h-[720px] py-[104px] max-[720px]:py-[84px] px-[clamp(22px,6vw,92px)] max-[720px]:px-5 grid grid-cols-[minmax(320px,0.9fr)_minmax(0,1fr)] max-[1060px]:grid-cols-1 gap-[clamp(44px,8vw,120px)] items-center bg-deep text-white relative overflow-hidden gs-reveal before:content-[''] before:absolute before:left-0 before:top-0 before:w-[36%] before:h-full before:bg-clay before:opacity-[0.18]">
        <div className="image-drift w-[min(570px,100%)] p-[clamp(10px,1.5vw,18px)] border border-white/20 rounded-lg justify-self-center bg-[rgba(251,250,245,0.96)] shadow-[0_30px_80px_rgba(0,0,0,0.24)] relative z-[2] -rotate-1">
          <Image
            src="/supreme/source/nb.png"
            alt="Ingredient and liquid material prepared for supply"
            width={570}
            height={400}
            sizes="(max-width: 720px) 92vw, 44vw"
            className="w-full h-auto rounded block"
          />
          <div className="absolute left-[-20px] bottom-[-24px] z-[3] w-[clamp(116px,13vw,140px)] aspect-square rounded-full grid place-content-center gap-[3px] text-center [background:var(--amber-grad)] text-[#241606] shadow-[0_22px_46px_rgba(150,96,10,0.34)]" aria-label="23 years of experience">
            <strong className="font-heading text-[clamp(40px,5vw,48px)] leading-none font-bold">23</strong>
            <span className="text-[10px] font-extrabold leading-[1.3] tracking-[0.04em] uppercase">Years of<br />experience</span>
          </div>
        </div>
        <div className="relative z-[2]">
          <p className="eyebrow text-[#e4b39f]"><span /> Built for trade</p>
          <h2 data-reveal className="font-heading text-[clamp(38px,5vw,66px)] leading-none font-semibold text-white m-0">Sourcing and bulk supply</h2>
          <p className="max-w-[660px] mt-7 text-white/75 text-base leading-[1.8]">Every enquiry is reviewed by material, grade, origin, handling, quantity and delivery timing.</p>
          <p className="max-w-[660px] mt-4 text-white/75 text-base leading-[1.8]">We support coating manufacturers, formulation houses, food brands, fragrance makers, wholesale traders and industrial buyers with practical material guidance and repeatable supply.</p>
        </div>
      </section>

      <section className="gs-reveal py-[106px] max-[600px]:py-[78px] px-[clamp(22px,6vw,92px)] [background:linear-gradient(180deg,#f7f1ea_0%,#f1e7dd_100%)] text-ink" id="facts">
        <div className="max-w-[640px] mb-[50px]">
          <div className="section-label bg-white [border-color:rgba(161,105,87,0.28)] text-terra-deep"><i /> Our recent achievements</div>
          <h2 data-reveal className="mt-[18px] text-ink font-heading text-[clamp(40px,4.6vw,64px)] leading-none font-semibold">Benefit from choosing the best</h2>
        </div>
        <div className="grid grid-cols-4 max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1 gap-5 gs-stagger">
          {facts.map((fact) => (
            <article className="p-[36px_24px] border [border-color:rgba(161,105,87,0.18)] rounded-[18px] bg-white flex flex-col items-center gap-3 text-center transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:[border-color:rgba(161,105,87,0.4)] hover:shadow-[0_22px_46px_rgba(161,105,87,0.16)]" key={fact.label}>
              <span className="grid place-items-center w-[72px] h-[72px] mb-2 rounded-full [background:linear-gradient(150deg,#d79a83,#a16957)] shadow-[0_14px_30px_rgba(161,105,87,0.28)]">
                <Image src={fact.icon} alt="" width={38} height={38} className="w-9 h-9 object-contain" />
              </span>
              <strong data-count={String(fact.value)} data-suffix={fact.suffix} className="font-heading text-[clamp(42px,4.8vw,56px)] leading-none font-semibold text-terra-deep">{fact.value}{fact.suffix}</strong>
              <span className="text-muted text-[13px] font-bold">{fact.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="py-[118px] max-[720px]:py-[84px] px-[clamp(22px,6vw,92px)] max-[720px]:px-5 bg-[#f1f2ec] gs-reveal" id="products">
        <div className="section-kicker">Catalogue</div>
        <div className="flex items-end justify-between gap-8 max-[720px]:block mb-12">
          <h2 data-reveal className="max-w-[720px] font-heading text-[clamp(38px,5vw,66px)] leading-none font-semibold text-ink m-0">Product categories</h2>
          <Link className="text-link max-[720px]:inline-block max-[720px]:mt-[22px]" href="/products">Explore full catalogue</Link>
        </div>

        <div className="grid grid-cols-3 max-[1060px]:grid-cols-2 max-[720px]:grid-cols-1 gap-px border border-line bg-line gs-stagger">
          {materialGroups.map((group) => (
            <article className="group min-h-[330px] p-[26px] flex flex-col bg-white transition-[background,transform] duration-200 hover:bg-[#eef1ea] hover:-translate-y-1" key={group.name}>
              <span className="text-clay text-[10px] font-black">{group.code}</span>
              <div className="h-[132px] mt-[18px] mb-6 grid place-items-center overflow-hidden">
                <Image src={group.image} alt="" width={290} height={239} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.05]" />
              </div>
              <h3 className="mt-auto mb-2.5 font-heading text-[31px] leading-none font-bold">{group.name}</h3>
              <p className="min-h-[42px] m-0 text-muted text-xs leading-[1.65]">{group.note}</p>
              <Link href={group.href} aria-label={`Browse ${group.name}`} className="w-fit mt-[22px] pb-1 border-b border-current text-deep text-[11px] font-black">Browse range</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="py-[118px] max-[720px]:py-[84px] px-[clamp(22px,6vw,92px)] max-[720px]:px-5 grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] max-[1060px]:grid-cols-1 gap-[clamp(44px,8vw,120px)] bg-paper gs-reveal" id="standard">
        <div className="sticky top-[120px] self-start max-[1060px]:static">
          <p className="eyebrow"><span /> Order handling</p>
          <h2 data-reveal className="font-heading text-[clamp(38px,5vw,66px)] leading-none font-semibold text-ink m-0">Supply process</h2>
          <p className="max-w-[520px] mt-7 text-muted text-base leading-[1.8]">Buyers do not need decorative promises. They need responsive sourcing, consistent material, sensible packing and a team that understands bulk trade.</p>
        </div>
        <div className="border-t border-line gs-stagger">
          {process.map((item, index) => (
            <article className="min-h-[122px] py-7 border-b border-line grid grid-cols-[84px_1fr] max-[720px]:grid-cols-[48px_1fr] items-center gap-5" key={item}>
              <span className="text-clay text-xs font-black">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-heading text-[42px] max-[720px]:text-[32px] leading-[1.08] font-bold m-0">{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="py-[110px] max-[760px]:py-20 px-[clamp(18px,4vw,64px)] bg-[#f6f1e8] gs-reveal" id="contact">
        <div className="max-w-[1680px] mx-auto p-[clamp(26px,4.5vw,72px)] grid grid-cols-[minmax(0,1.05fr)_minmax(430px,0.75fr)] max-[980px]:grid-cols-1 gap-[clamp(42px,7vw,110px)] items-center bg-[#123451] text-white relative isolate overflow-hidden shadow-[0_26px_70px_rgba(18,52,81,0.14)]">
          <div>
            <div className="w-fit px-3.5 py-2 border border-[#e7ba57]/35 bg-[#e7ba57]/10 flex items-center gap-2 text-[#f2cb76] text-[9px] font-black tracking-[0.11em] uppercase">
              <i className="w-1.5 h-1.5 bg-[#f2cb76]" /> Product enquiry
            </div>
            <h2 data-reveal className="max-w-[800px] mt-6 mb-0 font-heading text-[clamp(48px,5.7vw,82px)] leading-[0.94] font-semibold text-white">
              Send one complete requirement
            </h2>
            <p className="max-w-[620px] mt-7 mb-0 text-white/68 text-[15px] leading-[1.8]">
              Include the information below so the sourcing desk can review the material and respond with the right commercial option.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {["Product", "Grade", "Quantity", "Packing", "Destination"].map((item, index) => (
                <span className="px-3.5 py-2 border border-white/15 bg-white/[0.055] text-white/78 text-[10px] font-bold" key={item}>
                  <b className="mr-1.5 text-[#f2cb76]">{String(index + 1).padStart(2, "0")}</b>{item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3.5 flex-wrap">
              <Link className="group min-h-[52px] px-6 inline-flex items-center gap-3 bg-[#efc35f] text-[#123451] text-xs font-black transition-colors hover:bg-[#f8d782]" href="/contact#enquiry">
                Send requirement <ArrowUpRight />
              </Link>
              <a className="min-h-[52px] px-5 border border-white/20 inline-flex items-center gap-2.5 bg-white/[0.055] text-white text-xs font-black transition-colors hover:bg-white/10" href="https://wa.me/919920755226" target="_blank" rel="noopener noreferrer">
                <WhatsApp className="text-[#56d98b]" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 max-[520px]:grid-cols-1 gap-3.5">
            <figure className="col-span-2 max-[520px]:col-span-1 min-h-[290px] m-0 overflow-hidden relative bg-[#d9dfd6]">
              <Image className="object-cover object-[68%_center] transition-transform duration-700 hover:scale-[1.035]" src="/supreme/neutral-materials-hero.png" alt="Industrial liquids, powders and raw material samples" fill sizes="(max-width: 980px) 92vw, 42vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102f24]/80 via-transparent to-transparent" />
              <div className="absolute left-5 right-5 bottom-5 flex items-end justify-between gap-5 text-white">
                <div><span className="text-[9px] font-black tracking-[0.1em] uppercase text-[#f2cb76]">Catalogue</span><p className="mt-1 mb-0 font-heading text-[27px] leading-none">800+ listed materials</p></div>
                <Link className="w-11 h-11 grid place-items-center bg-white text-[#123451] transition-colors hover:bg-[#efc35f]" href="/products" aria-label="Open product catalogue"><ArrowUpRight /></Link>
              </div>
            </figure>

            <a className="min-h-[108px] p-[18px] border border-[#d9d1c3] flex flex-col justify-between bg-[#f5efe3] text-[#123451] transition-colors hover:border-[#9dacb8]" href="tel:+912223455226">
              <span className="text-[9px] font-black tracking-[0.11em] uppercase text-[#8b6b42]">Call</span>
              <strong className="font-sans text-[15px] leading-tight font-bold tracking-[-0.015em] whitespace-nowrap">+91 22 2345 5226</strong>
            </a>
            <a className="min-h-[108px] p-[18px] border border-[#d8aa42] flex flex-col justify-between bg-[#efc35f] text-[#123451] transition-colors hover:bg-[#f4ce78]" href="mailto:info@supremetrading.in">
              <span className="text-[9px] font-black tracking-[0.11em] uppercase text-[#71521f]">Email</span>
              <strong className="font-sans text-[14px] leading-tight font-bold tracking-[-0.015em] break-words">info@supremetrading.in</strong>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
