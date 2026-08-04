import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, WhatsApp } from "./icons";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import Splash from "./splash";
import HeroCarousel from "./hero-carousel";
import {
  CONTACT_EMAIL,
  PRIMARY_PHONE,
  SECONDARY_PHONE,
  WHATSAPP_NUMBER,
} from "./contact-details";
import { productCategoryCards } from "./products/category-config";

const tickerItems = productCategoryCards.map((category) => category.name);

const whyChoose = [
  { icon: "/supreme/why-icon1.png", title: "Grade-verified sourcing", text: "Every material matched to your grade, origin and application before we quote." },
  { icon: "/supreme/achieve-icon4.png", title: "Consistent quality", text: "Reviewed batch by batch so repeat orders stay reliable and predictable." },
  { icon: "/supreme/achieve-icon3.png", title: "Wide material range", text: "Chemicals, resins, food herbs and botanicals from one desk." },
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

      <section className="home-ticker" aria-label="Product specialities">
        <div className="home-ticker-track">
          {[0, 1].map((copy) => (
            <div className="home-ticker-set" aria-hidden={copy === 1} key={copy}>
              {tickerItems.map((item) => (
                <span className="home-ticker-item" key={`${copy}-${item}`}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="gs-reveal py-28 max-[600px]:py-[78px] px-[clamp(22px,4.5vw,76px)] bg-paper" id="why">
        <div className="max-w-[1240px] mx-auto mb-[46px] text-center">
          <h2 data-reveal className="text-ink font-heading text-[clamp(40px,4.6vw,68px)] leading-none font-semibold text-center whitespace-nowrap max-[760px]:whitespace-normal">Why buyers choose us</h2>
          <p className="max-w-[clamp(540px,42vw,700px)] mx-auto mt-[18px] text-muted text-[clamp(16px,1.15vw,21px)] leading-[1.7]">A sourcing partner that works to your grade, quantity and timeline.</p>
        </div>
        <div className="grid grid-cols-4 max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1 gap-[18px] gs-stagger">
          {whyChoose.map((item) => (
            <article className="tilt-card p-[34px_28px] border border-line rounded-2xl bg-white transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-black/25 hover:shadow-[0_18px_42px_rgba(19,32,27,0.08)]" key={item.title}>
              <span className="grid place-items-center w-[68px] h-[68px] mb-6 rounded-full [background:var(--herb-grad)] shadow-[0_14px_30px_rgba(24,74,116,0.24)]">
                <Image src={item.icon} alt="" width={40} height={40} className="w-[34px] h-[34px] object-contain" />
              </span>
              <h3 className="mb-2.5 font-heading text-[clamp(23px,1.75vw,30px)] leading-[1.1] font-bold">{item.title}</h3>
              <p className="text-muted text-[clamp(14px,1vw,18px)] leading-[1.65]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-[118px] max-[620px]:py-[82px] px-[clamp(22px,4.5vw,76px)] max-[620px]:px-5 bg-cream relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto mb-[46px] relative z-[2] text-center">
          <div className="section-kicker">Capabilities</div>
          <h2 data-reveal className="font-heading text-[clamp(44px,5vw,76px)] leading-[0.98] font-semibold text-ink m-0 text-center whitespace-nowrap max-[860px]:whitespace-normal">One stop , Complete solution</h2>
          <p className="max-w-[clamp(540px,44vw,720px)] mx-auto mt-5 text-muted text-[clamp(16px,1.15vw,21px)] leading-[1.75]">Two decades of material knowledge, a wide supplier network and a team that reads a specification the way a buyer does.</p>
        </div>

        <div className="home-bento-grid relative z-[2] grid grid-cols-4 grid-flow-dense max-[980px]:grid-cols-2 max-[620px]:grid-cols-1 auto-rows-[minmax(190px,auto)] gap-4">
          <article className="tilt-card col-span-2 row-span-2 max-[980px]:row-span-1 max-[620px]:col-span-1 p-[30px] rounded-2xl flex flex-col justify-between gap-2.5 relative overflow-hidden [background:var(--herb-grad)] text-white transition-transform duration-300 before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:[background:radial-gradient(circle_at_78%_12%,rgba(232,182,77,0.32),transparent_46%)]">
            <span className="relative z-[1] text-honey-soft text-[clamp(11px,0.78vw,13px)] font-black tracking-[0.06em] uppercase">Flagship capability</span>
            <div className="relative z-[1]">
              <h3 className="font-heading text-[clamp(26px,2.6vw,38px)] leading-[1.02] font-bold text-white m-0">Grade-led sourcing across four material families</h3>
              <p className="mt-2.5 text-white/70 text-[clamp(15px,1.08vw,19px)] leading-[1.62] max-w-[clamp(420px,30vw,540px)]">From industrial chemicals and coating resins to food herbs and speciality raw materials — matched to your grade, quantity and destination.</p>
            </div>
            <Link className="relative z-[1] w-fit text-honey-soft border-b border-current pb-[3px] text-[clamp(13px,0.95vw,16px)] font-black" href="/products">Browse catalogue</Link>
          </article>

          <article className="tilt-card p-[30px] rounded-2xl border border-line bg-white flex flex-col justify-center gap-1.5 relative overflow-hidden transition-[transform,box-shadow,border-color] duration-300 hover:border-black/25 hover:shadow-[0_26px_60px_rgba(19,32,27,0.12)]">
            <span className="text-clay text-[clamp(11px,0.78vw,13px)] font-black tracking-[0.06em] uppercase">Established</span>
            <strong className="font-heading text-[clamp(46px,5vw,68px)] leading-none font-semibold text-ink">2002</strong>
            <span className="text-muted text-[clamp(13px,0.92vw,16px)] leading-[1.5]">Trading from Mumbai</span>
          </article>

          <article className="tilt-card p-[30px] rounded-2xl flex flex-col justify-center gap-1.5 relative overflow-hidden [background:var(--amber-grad)] text-[#241606] transition-transform duration-300">
            <span className="text-[rgba(28,19,10,0.62)] text-[clamp(11px,0.78vw,13px)] font-black tracking-[0.06em] uppercase">Products</span>
            <strong data-count="800" data-suffix="+" className="font-heading text-[clamp(46px,5vw,68px)] leading-none font-semibold text-[#1c130a]">800+</strong>
          </article>

          <article className="tilt-card col-span-2 max-[620px]:col-span-1 p-[30px] rounded-2xl border border-line bg-white flex flex-col justify-center gap-1.5 relative overflow-hidden transition-[transform,box-shadow,border-color] duration-300 hover:border-black/25 hover:shadow-[0_26px_60px_rgba(19,32,27,0.12)]">
            <span className="text-clay text-[clamp(11px,0.78vw,13px)] font-black tracking-[0.06em] uppercase">Reach</span>
            <strong className="font-heading text-[clamp(34px,3.4vw,46px)] leading-none font-semibold text-ink">India + Global</strong>
          </article>
        </div>
      </section>

      <section className="min-h-[720px] py-[104px] max-[720px]:py-[84px] px-[clamp(22px,4.5vw,76px)] max-[720px]:px-5 grid grid-cols-[minmax(320px,0.9fr)_minmax(0,1fr)] max-[1060px]:grid-cols-1 gap-[clamp(44px,8vw,120px)] items-center bg-deep text-white relative overflow-hidden gs-reveal before:content-[''] before:absolute before:left-0 before:top-0 before:w-[36%] before:h-full before:bg-clay before:opacity-[0.18]">
        <div className="image-drift w-[min(570px,100%)] p-[clamp(10px,1.5vw,18px)] border border-white/20 rounded-lg justify-self-center bg-[rgba(251,250,245,0.96)] shadow-[0_30px_80px_rgba(0,0,0,0.24)] relative z-[2] -rotate-1">
          <div className="home-product-collage" aria-label="Supreme Trading Corp product categories">
            <div className="home-product-collage-item">
              <Image src="/supreme/generated/industrial-flatlay-full-hero.png" alt="Industrial chemicals" fill sizes="(max-width: 720px) 44vw, 20vw" />
            </div>
            <div className="home-product-collage-item">
              <Image src="/supreme/generated/herbs-spices-flatlay-full-hero-v2.png" alt="Medicinal herbs and spices" fill sizes="(max-width: 720px) 38vw, 16vw" />
            </div>
            <div className="home-product-collage-item">
              <Image src="/supreme/generated/honey/honey-editorial-v2.png" alt="Natural honey" fill sizes="(max-width: 720px) 30vw, 12vw" />
            </div>
            <div className="home-product-collage-item">
              <Image src="/supreme/generated/petals-flatlay-full-hero.png" alt="Dried petals" fill sizes="(max-width: 720px) 30vw, 12vw" />
            </div>
            <div className="home-product-collage-item">
              <Image src="/supreme/generated/food-herbs-flatlay-full-hero.png" alt="Food herbs" fill sizes="(max-width: 720px) 38vw, 16vw" />
            </div>
          </div>
          <div className="absolute left-[-20px] bottom-[-24px] z-[3] w-[clamp(116px,13vw,140px)] aspect-square rounded-full grid place-content-center gap-[3px] text-center [background:var(--amber-grad)] text-[#241606] shadow-[0_22px_46px_rgba(150,96,10,0.34)]" aria-label="23 years of experience">
            <strong className="font-heading text-[clamp(40px,5vw,48px)] leading-none font-bold">23</strong>
            <span className="text-[clamp(11px,0.78vw,13px)] font-extrabold leading-[1.3] tracking-[0.04em] uppercase">Years of<br />experience</span>
          </div>
        </div>
        <div className="relative z-[2]">
          <p className="eyebrow justify-center text-[#e4b39f]"><span /> Built for trade</p>
          <h2 data-reveal className="font-heading text-[clamp(38px,5vw,66px)] leading-none font-semibold text-white m-0 text-center">Sourcing and bulk supply</h2>
          <p className="max-w-[clamp(660px,52vw,880px)] mt-7 text-white/75 text-[clamp(16px,1.2vw,22px)] leading-[1.75]">Every enquiry is reviewed by material, grade, origin, handling, quantity and delivery timing.</p>
          <p className="max-w-[clamp(660px,52vw,880px)] mt-4 text-white/75 text-[clamp(16px,1.2vw,22px)] leading-[1.75]">We support coating manufacturers, formulation houses, food brands, fragrance makers, wholesale traders and industrial buyers with practical material guidance and repeatable supply.</p>
        </div>
      </section>

      <section className="gs-reveal py-[106px] max-[600px]:py-[78px] px-[clamp(22px,4.5vw,76px)] [background:linear-gradient(180deg,#f3f7fb_0%,#eaf2f8_100%)] text-ink" id="facts">
        <div className="max-w-[1240px] mx-auto mb-[50px] text-center">
          <h2 data-reveal className="text-ink font-heading text-[clamp(40px,4.6vw,64px)] leading-none font-semibold text-center whitespace-nowrap max-[920px]:whitespace-normal">Benefit from choosing the best</h2>
        </div>
        <div className="grid grid-cols-4 max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1 gap-5 gs-stagger">
          {facts.map((fact) => (
            <article className="tilt-card p-[36px_24px] border [border-color:rgba(53,111,167,0.18)] rounded-2xl bg-white flex flex-col items-center gap-3 text-center transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:[border-color:rgba(53,111,167,0.42)] hover:shadow-[0_22px_46px_rgba(53,111,167,0.14)]" key={fact.label}>
              <span className="grid place-items-center w-[72px] h-[72px] mb-2 rounded-full [background:linear-gradient(150deg,#5f91c0,#356fa7)] shadow-[0_14px_30px_rgba(53,111,167,0.24)]">
                <Image src={fact.icon} alt="" width={38} height={38} className="w-9 h-9 object-contain" />
              </span>
              <strong data-count={String(fact.value)} data-suffix={fact.suffix} className="font-heading text-[clamp(42px,4.8vw,56px)] leading-none font-semibold text-[#356fa7]">{fact.value}{fact.suffix}</strong>
              <span className="text-muted text-[clamp(14px,1vw,17px)] font-bold">{fact.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="py-[118px] max-[720px]:py-[84px] px-[clamp(22px,4.5vw,76px)] max-[720px]:px-5 bg-[#f1f2ec] gs-reveal" id="products">
        <div className="section-kicker text-center">Catalogue</div>
        <div className="flex flex-col items-center gap-5 mb-12 text-center">
          <h2 data-reveal className="max-w-[920px] font-heading text-[clamp(38px,5vw,66px)] leading-none font-semibold text-ink m-0 text-center whitespace-nowrap max-[620px]:whitespace-normal">Product categories</h2>
          <Link className="text-link inline-block" href="/products">Explore full catalogue</Link>
        </div>

        <div className="grid grid-cols-6 max-[1060px]:grid-cols-2 max-[720px]:grid-cols-1 auto-rows-fr gap-5 gs-stagger">
          {productCategoryCards.map((group, index) => (
            <article className={`tilt-card group col-span-2 max-[1060px]:col-span-1 max-[1060px]:col-start-auto min-h-[420px] h-full rounded-2xl border border-[#173a57]/14 flex flex-col bg-white overflow-hidden transition-colors duration-300 hover:border-[#2d68a0]/45 ${index === 3 ? "col-start-2" : ""} ${index === 4 ? "col-start-4" : ""}`} key={group.name}>
              <div className="h-[228px] bg-[#eaf0f5] relative overflow-hidden">
                <Image
                  src={group.image}
                  alt=""
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1060px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
                />
                <span className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(8,35,59,0.06),transparent_35%,rgba(8,35,59,0.12))]" />
                <span className="absolute left-5 top-5 min-w-9 h-9 px-2 grid place-items-center bg-white/92 text-[#2d68a0] text-[clamp(11px,0.8vw,13px)] font-black tracking-[0.08em]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-[26px_26px_24px] flex flex-1 flex-col">
                <h3 className="mb-3 font-heading text-[clamp(26px,2.1vw,32px)] leading-[1.02] font-semibold tracking-[-0.025em]">{group.name}</h3>
                <p className="m-0 text-muted text-[clamp(14px,1vw,18px)] leading-[1.65]">{group.note}</p>
                <Link href={group.href} aria-label={`Browse ${group.name}`} className="w-full mt-auto pt-7 inline-flex items-center justify-between gap-4 text-[#2d68a0] text-[clamp(13px,0.92vw,16px)] font-extrabold tracking-[0.01em] group/link">
                  <span>Browse range</span>
                  <span className="text-[23px] leading-none font-light transition-transform duration-300 group-hover/link:translate-x-1.5" aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-[118px] max-[720px]:py-[84px] px-[clamp(22px,4.5vw,76px)] max-[720px]:px-5 grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] max-[1060px]:grid-cols-1 gap-[clamp(44px,8vw,120px)] bg-paper gs-reveal" id="standard">
        <div className="sticky top-[120px] self-start max-[1060px]:static">
          <p className="eyebrow justify-center"><span /> Order handling</p>
          <h2 data-reveal className="font-heading text-[clamp(38px,5vw,66px)] leading-none font-semibold text-ink m-0 text-center">Supply process</h2>
          <p className="max-w-[clamp(520px,38vw,700px)] mt-7 text-muted text-[clamp(16px,1.2vw,21px)] leading-[1.75]">Buyers do not need decorative promises. They need responsive sourcing, consistent material, sensible packing and a team that understands bulk trade.</p>
        </div>
        <div className="border-t border-line gs-stagger">
          {process.map((item, index) => (
            <article className="min-h-[122px] py-7 border-b border-line grid grid-cols-[84px_1fr] max-[720px]:grid-cols-[48px_1fr] items-center gap-5" key={item}>
              <span className="text-clay text-[clamp(13px,0.92vw,16px)] font-black">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-heading text-[42px] max-[720px]:text-[32px] leading-[1.08] font-bold m-0">{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="py-[110px] max-[760px]:py-20 px-[clamp(18px,3.4vw,58px)] bg-[#f6f1e8] gs-reveal" id="contact">
        <div className="max-w-[1860px] mx-auto p-[clamp(26px,4.5vw,72px)] grid grid-cols-[minmax(0,1.05fr)_minmax(430px,0.75fr)] max-[980px]:grid-cols-1 gap-[clamp(42px,7vw,110px)] items-center bg-[#123451] text-white relative isolate overflow-hidden shadow-[0_26px_70px_rgba(18,52,81,0.14)]">
          <div>
           
            <h2 data-reveal className="max-w-[800px] mx-auto mt-6 mb-0 font-heading text-[clamp(48px,5.7vw,82px)] leading-[0.94] font-semibold text-white text-center">
              Send one complete requirement
            </h2>
            <p className="max-w-[620px] mt-7 mb-0 text-white/68 text-[clamp(16px,1.15vw,21px)] leading-[1.75]">
              Include the information below so the sourcing desk can review the material and respond with the right commercial option.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {["Product", "Grade", "Quantity", "Packing", "Destination"].map((item, index) => (
                <span className="px-3.5 py-2 border border-white/15 bg-white/[0.055] text-white/78 text-[clamp(11px,0.8vw,14px)] font-bold" key={item}>
                  <b className="mr-1.5 text-[#f2cb76]">{String(index + 1).padStart(2, "0")}</b>{item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3.5 flex-wrap">
              <Link className="group min-h-[52px] px-6 inline-flex items-center gap-3 bg-[#efc35f] text-[#123451] text-[clamp(13px,0.95vw,15px)] font-black transition-colors hover:bg-[#f8d782]" href="/contact#enquiry">
                Send requirement <ArrowUpRight />
              </Link>
              <a className="min-h-[52px] px-5 border border-white/20 inline-flex items-center gap-2.5 bg-white/[0.055] text-white text-[clamp(13px,0.95vw,15px)] font-black transition-colors hover:bg-white/10" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                <WhatsApp className="text-[#56d98b]" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 max-[520px]:grid-cols-1 gap-3.5">
            <figure className="col-span-2 max-[520px]:col-span-1 min-h-[290px] m-0 overflow-hidden relative bg-[#d9dfd6]">
              <Image className="object-cover object-[68%_center] transition-transform duration-700 hover:scale-[1.035]" src="/supreme/neutral-materials-hero.png" alt="Industrial liquids, powders and raw material samples" fill sizes="(max-width: 980px) 92vw, 42vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102f4c]/80 via-transparent to-transparent" />
              <div className="absolute left-5 right-5 bottom-5 flex items-end justify-between gap-5 text-white">
                <div><span className="text-[clamp(10px,0.72vw,12px)] font-black tracking-[0.1em] uppercase text-[#f2cb76]">Catalogue</span><p className="mt-1 mb-0 font-heading text-[27px] leading-none">800+ listed materials</p></div>
                <Link className="w-11 h-11 grid place-items-center bg-white text-[#123451] transition-colors hover:bg-[#efc35f]" href="/products" aria-label="Open product catalogue"><ArrowUpRight /></Link>
              </div>
            </figure>

            <div className="min-h-[78px] p-3 border border-[#d9d1c3] flex flex-col justify-between gap-1.5 bg-[#f5efe3] text-[#123451]">
              <span className="text-[clamp(10px,0.72vw,12px)] font-black tracking-[0.11em] uppercase text-[#8b6b42]">Call</span>
              <div className="flex flex-col items-start gap-0.5">
                <a className="font-sans text-[clamp(13px,0.95vw,17px)] leading-tight font-bold tracking-[-0.015em] whitespace-nowrap hover:text-[#356fa7]" href={PRIMARY_PHONE.href}>{PRIMARY_PHONE.display}</a>
                <a className="font-sans text-[clamp(13px,0.95vw,17px)] leading-tight font-bold tracking-[-0.015em] whitespace-nowrap hover:text-[#356fa7]" href={SECONDARY_PHONE.href}>{SECONDARY_PHONE.display}</a>
              </div>
            </div>
            <a className="min-h-[78px] p-3 border border-[#d8aa42] flex flex-col justify-between gap-1.5 bg-[#efc35f] text-[#123451] transition-colors hover:bg-[#f4ce78]" href={`mailto:${CONTACT_EMAIL}`}>
              <span className="text-[clamp(10px,0.72vw,12px)] font-black tracking-[0.11em] uppercase text-[#71521f]">Email</span>
              <strong className="font-sans text-[clamp(14px,1vw,18px)] leading-tight font-bold tracking-[-0.015em] break-words">{CONTACT_EMAIL}</strong>
            </a>
          </div>
        </div>
      </section>

      <section className="py-[110px] max-[760px]:py-20 px-[clamp(18px,3.4vw,58px)] bg-[#e8eef2] gs-reveal" aria-labelledby="certifications-title">
        <div className="max-w-[1780px] mx-auto">
          <h2 id="certifications-title" data-reveal className="m-0 text-center font-heading text-[clamp(42px,5vw,68px)] leading-none font-semibold text-[#123451]">
            Licences &amp; certifications
          </h2>

          <div className="mt-14 mx-auto grid max-w-[1280px] grid-cols-2 gap-8 max-[720px]:grid-cols-1 gs-stagger">
            <a
              className="group block overflow-hidden border border-[#c8d5df] bg-white transition-colors hover:border-[#356fa7]"
              href="/supreme/certificates/fssai-state-license.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Supreme Trading Corp FSSAI State License"
            >
              <div className="relative aspect-[3/4] bg-[#f0f5f8] overflow-hidden">
                <Image
                  className="object-contain p-[clamp(14px,2vw,26px)] transition-transform duration-500 group-hover:scale-[1.012]"
                  src="/supreme/certificates/fssai-state-license-preview.png"
                  alt="Preview of Supreme Trading Corp FSSAI State License"
                  fill
                  sizes="(max-width: 720px) 92vw, 500px"
                />
              </div>
            </a>

            <a
              className="group block overflow-hidden border border-[#c8d5df] bg-white transition-colors hover:border-[#356fa7]"
              href="/supreme/certificates/iso-9001-2015.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Supreme Trading Corp ISO 9001:2015 certificate"
            >
              <div className="relative aspect-[3/4] bg-[#f0f5f8] overflow-hidden">
                <Image
                  className="object-contain p-[clamp(14px,2vw,26px)] transition-transform duration-500 group-hover:scale-[1.012]"
                  src="/supreme/certificates/iso-9001-2015-preview.png"
                  alt="Preview of Supreme Trading Corp ISO 9001:2015 certificate"
                  fill
                  sizes="(max-width: 720px) 92vw, 500px"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
