import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import ContactForm from "./contact-form";
import { WhatsApp } from "../icons";

const WA_HREF = `https://wa.me/919920755226?text=${encodeURIComponent("Hi Supreme Trading, I'd like to make a product enquiry.")}`;

export const metadata: Metadata = {
  title: "Contact | Supreme Trading Corp",
  description: "Supreme Trading Corp office addresses, phone numbers, email and product enquiry details.",
  openGraph: {
    title: "Contact | Supreme Trading Corp",
    description: "Mumbai head office and branch office contact information for Supreme Trading Corp.",
    images: [{ url: "/supreme/contact-source-hero.jpg", width: 1920, height: 987, alt: "Supreme Trading Corp contact" }],
  },
};

const offices = [
  { type: "Head office", city: "Mumbai", address: "51/A, Essaji Street, Opp. Shah Roadways, Vadgadi, Masjid Bunder (W), Mumbai 400003, Maharashtra, India" },
  { type: "Branch office", city: "Indore", address: "Loha Mandi, Siyaganj, Indore, Madhya Pradesh" },
  { type: "Branch office", city: "Haridwar", address: "Jamalpur Kalan, District Haridwar, Uttarakhand" },
];

const phoneNumbers = [
  { display: "+91 22 2345 5226", href: "+912223455226" },
  { display: "+91 99207 55226", href: "+919920755226" },
  { display: "+91 97138 55870", href: "+919713855870" },
];

const heading = "font-heading text-[58px] leading-none m-0";
const clayLabel = "text-clay text-[10px] font-black tracking-[0.05em] uppercase";

export default function ContactPage() {
  return (
    <main className="bg-paper">
      <SiteHeader theme="solid" />

      <section className="min-h-[640px] pt-[130px] pb-[70px] px-[clamp(22px,6vw,92px)] flex items-end relative isolate overflow-hidden text-white">
        <Image data-hero-media src="/supreme/contact-source-hero.jpg" alt="Mortar, pestle and raw materials" fill priority sizes="100vw" className="object-cover object-center -z-20 [filter:saturate(0.7)_contrast(1.02)]" />
        <div className="absolute inset-0 -z-10 [background:linear-gradient(90deg,rgba(8,18,14,0.92),rgba(8,18,14,0.42)_62%,rgba(8,18,14,0.24)),linear-gradient(0deg,rgba(8,18,14,0.76),transparent_55%)]" />
        <div className="w-[min(920px,100%)]" data-hero-copy>
          <div className="catalog-breadcrumb mb-[70px]"><Link href="/">Home</Link><span>/</span><span>Contact</span></div>
          <p className="eyebrow text-honey-soft"><span /> Talk to the sourcing desk</p>
          <h1 className="mb-[22px] font-heading font-semibold text-white text-[clamp(66px,9vw,132px)] leading-[0.82]">Let&apos;s talk material</h1>
          <p className="max-w-[540px] m-0 text-white/78 text-base leading-[1.7]">Head office in Mumbai, with branch offices in Indore and Haridwar. Tell us what you need and we&apos;ll get the specifics back to you quickly.</p>
        </div>
      </section>

      <section className="py-[104px] max-[720px]:py-[76px] px-[clamp(22px,6vw,92px)] max-[720px]:px-5 gs-reveal">
        <div className="grid grid-cols-[0.55fr_1.45fr] max-[720px]:grid-cols-1 gap-10 max-[720px]:gap-3 items-start mb-[42px]">
          <span className={clayLabel}>Office details</span>
          <h2 className={`${heading} max-[720px]:text-[42px]`}>Locations and direct contacts</h2>
        </div>

        <div className="border border-line grid grid-cols-3 max-[900px]:grid-cols-1 gap-px bg-line gs-stagger">
          {offices.map((office, index) => (
            <article className="min-h-[330px] max-[900px]:min-h-[260px] p-[26px] flex flex-col bg-white relative overflow-hidden transition-[background,transform] duration-300 hover:bg-[#f6f4ec] hover:-translate-y-1 before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-[3px] before:[background:var(--amber-grad)] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100" key={office.city}>
              <div className="flex items-start justify-between">
                <Image src="/supreme/contact-pin.png" alt="" width={32} height={32} />
                <span className="px-[9px] py-[5px] rounded-full [background:color-mix(in_srgb,var(--amber),transparent_86%)] text-honey-deep text-[10px] font-black">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-auto mb-2 text-clay text-[9px] font-black uppercase">{office.type}</p>
              <h3 className="mb-4 font-heading text-[40px] leading-none">{office.city}</h3>
              <address className="max-w-[360px] text-muted text-xs not-italic leading-[1.75]">{office.address}</address>
            </article>
          ))}
        </div>

        <div className="mt-3.5 grid grid-cols-3 max-[900px]:grid-cols-1 gap-3.5 gs-stagger">
          <article className="min-h-[178px] p-[26px] rounded-xl grid grid-cols-[42px_1fr] gap-[18px] bg-[#f1f3ec] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(19,32,27,0.09)]">
            <Image src="/supreme/contact-phone.png" alt="" width={32} height={32} className="w-[30px] h-[30px] object-contain p-2 box-content rounded-[10px] bg-white shadow-[0_6px_16px_rgba(19,32,27,0.08)]" />
            <div className="flex flex-col items-start gap-1.5">
              <span className="mb-1.5 text-clay text-[9px] font-black uppercase">Phone</span>
              {phoneNumbers.map((phone) => <a className="m-0 text-ink text-[13px] leading-[1.55] border-b border-transparent hover:border-current" href={`tel:${phone.href}`} key={phone.href}>{phone.display}</a>)}
            </div>
          </article>
          <article className="min-h-[178px] p-[26px] rounded-xl grid grid-cols-[42px_1fr] gap-[18px] bg-[#f1f3ec] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(19,32,27,0.09)]">
            <Image src="/supreme/contact-email.png" alt="" width={24} height={24} className="w-[30px] h-[30px] object-contain p-2 box-content rounded-[10px] bg-white shadow-[0_6px_16px_rgba(19,32,27,0.08)]" />
            <div className="flex flex-col items-start gap-1.5">
              <span className="mb-1.5 text-clay text-[9px] font-black uppercase">Email</span>
              <a className="m-0 text-ink text-[13px] leading-[1.55] border-b border-transparent hover:border-current" href="mailto:info@supremetrading.in">info@supremetrading.in</a>
            </div>
          </article>
          <article className="min-h-[178px] p-[26px] rounded-xl grid grid-cols-[42px_1fr] gap-[18px] bg-[#f1f3ec] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(19,32,27,0.09)]">
            <span className="grid place-items-center w-[30px] h-[30px] p-2 box-content rounded-[10px] bg-[#25a05a] text-white shadow-[0_6px_16px_rgba(37,160,90,0.3)]"><WhatsApp /></span>
            <div className="flex flex-col items-start gap-1.5">
              <span className="mb-1.5 text-clay text-[9px] font-black uppercase">WhatsApp</span>
              <a className="m-0 text-ink text-[13px] leading-[1.55] border-b border-transparent hover:border-current" href={WA_HREF} target="_blank" rel="noopener noreferrer">Chat with the sourcing desk</a>
              <p className="m-0 text-muted text-xs">+91 99207 55226</p>
            </div>
          </article>
        </div>
      </section>

      <section className="py-[100px] max-[720px]:py-[76px] px-[clamp(22px,6vw,92px)] max-[720px]:px-5 grid grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)] max-[900px]:grid-cols-1 gap-[clamp(34px,6vw,90px)] items-start [background:var(--herb-grad)] gs-reveal" id="enquiry">
        <ContactForm />
        <aside className="text-white sticky top-[120px] max-[900px]:static">
          <span className="text-honey-soft text-[10px] font-black tracking-[0.05em] uppercase">Information to include</span>
          <ol className="mt-[22px] p-0 border-t border-white/20 list-none">
            {[
              { t: "Product name", d: "Trade name or English name." },
              { t: "Grade", d: "Required specification or application." },
              { t: "Quantity", d: "Trial, wholesale or bulk requirement." },
              { t: "Destination", d: "City, state or export country." },
            ].map((g, i) => (
              <li className="min-h-[104px] py-5 border-b border-white/20 grid grid-cols-[46px_1fr] gap-[18px]" key={g.t}>
                <b className="text-honey-soft text-[10px]">{String(i + 1).padStart(2, "0")}</b>
                <div><strong className="font-heading text-[25px]">{g.t}</strong><p className="mt-[5px] text-white/60 text-[11px] leading-[1.55]">{g.d}</p></div>
              </li>
            ))}
          </ol>
        </aside>
      </section>

      <section className="py-[100px] max-[720px]:py-[76px] px-[clamp(22px,6vw,92px)] max-[720px]:px-5 gs-reveal">
        <div className="grid grid-cols-[0.55fr_1.45fr] max-[720px]:grid-cols-1 gap-10 max-[720px]:gap-3 items-start mb-[42px]">
          <span className={clayLabel}>Mumbai head office</span>
          <h2 className="font-heading text-[clamp(46px,6vw,72px)] leading-none m-0">Map</h2>
        </div>
        <iframe
          title="Supreme Trading Corp Mumbai head office map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30188.49523647128!2d72.835988!3d18.950776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce2445fe9359%3A0xe8c4e71d26263e7a!2sTitanium%20Dioxide%20Suppliers%20-%20Supreme%20Trading%20Corp.!5e0!3m2!1sen!2sin!4v1765969497421!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="w-full h-[520px] max-[720px]:h-[420px] block rounded-[14px] border border-[rgba(19,32,27,0.14)] [filter:saturate(0.7)_contrast(1.03)]"
        />
      </section>

      <SiteFooter />
    </main>
  );
}
