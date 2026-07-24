import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import ContactForm from "./contact-form";
import { ArrowUpRight, WhatsApp } from "../icons";

const WA_HREF = `https://wa.me/919920755226?text=${encodeURIComponent("Hi Supreme Trading, I'd like to make a product enquiry.")}`;

export const metadata: Metadata = {
  title: "Contact | Supreme Trading Corp",
  description: "Contact Supreme Trading Corp for industrial raw material sourcing, supply and export enquiries.",
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

export default function ContactPage() {
  return (
    <main className="bg-[#faf9f5] text-[#102b45]">
      <SiteHeader theme="solid" />

      <section className="pt-[90px] max-[720px]:pt-[72px] grid grid-cols-[0.88fr_1.12fr] max-[900px]:grid-cols-1 min-h-[690px] max-[900px]:min-h-0 border-b border-[#173a57]/15">
        <div className="px-[clamp(24px,6vw,92px)] py-[clamp(70px,8vw,118px)] flex flex-col justify-between bg-[#f2efe7]" data-hero-copy>
          <div className="catalog-breadcrumb text-[#667580]">
            <Link href="/">Home</Link><span>/</span><span>Contact</span>
          </div>
          <div className="mt-24 max-[900px]:mt-20">
            <p className="mb-5 flex items-center gap-3 text-[#2d68a0] text-[10px] font-black tracking-[0.11em] uppercase">
              <span className="w-9 h-px bg-[#2d68a0]" /> Contact
            </p>
            <h1 className="max-w-[690px] m-0 font-heading font-semibold text-[#102b45] text-[clamp(64px,8vw,118px)] leading-[0.82] tracking-[-0.035em]">
              Speak to the sourcing desk
            </h1>
            <p className="max-w-[520px] mt-8 mb-0 text-[#5f6f7b] text-[15px] leading-[1.85]">
              Send the material, grade, quantity and delivery location. Our team will review the requirement and respond with the relevant supply details.
            </p>
          </div>
        </div>

        <div className="min-h-[600px] max-[900px]:min-h-[500px] relative overflow-hidden" data-hero-media>
          <Image
            src="/supreme/contact-source-hero.jpg"
            alt="Raw materials prepared for commercial sourcing"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 56vw"
            className="object-cover object-center [filter:saturate(0.72)_contrast(1.06)]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,42,69,0.04),rgba(13,42,69,0.48))]" />
          <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 max-[520px]:grid-cols-1 bg-[#102b45]/94 text-white backdrop-blur-sm">
            <a className="min-h-[112px] px-[clamp(22px,3vw,42px)] py-6 flex flex-col justify-between border-r max-[520px]:border-r-0 max-[520px]:border-b border-white/15 group" href="tel:+912223455226">
              <span className="text-[#efbd52] text-[9px] font-black tracking-[0.1em] uppercase">Call directly</span>
              <span className="flex items-center justify-between gap-4 text-sm font-bold">+91 22 2345 5226 <ArrowUpRight /></span>
            </a>
            <a className="min-h-[112px] px-[clamp(22px,3vw,42px)] py-6 flex flex-col justify-between group" href="mailto:info@supremetrading.in">
              <span className="text-[#efbd52] text-[9px] font-black tracking-[0.1em] uppercase">Email</span>
              <span className="flex items-center justify-between gap-4 text-sm font-bold break-all">info@supremetrading.in <ArrowUpRight /></span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-[110px] max-[720px]:py-20 px-[clamp(22px,6vw,92px)] max-[720px]:px-5 gs-reveal">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-[0.48fr_1.52fr] max-[760px]:grid-cols-1 gap-8 items-start mb-12">
            <span className="text-[#2d68a0] text-[10px] font-black tracking-[0.1em] uppercase">Our offices</span>
            <div>
              <h2 className="m-0 max-w-[860px] font-heading font-semibold text-[clamp(48px,6vw,78px)] leading-[0.94] tracking-[-0.025em]">Commercial contacts across India</h2>
              <p className="max-w-[620px] mt-5 mb-0 text-[#667580] text-sm leading-[1.8]">Mumbai is our principal trading office, supported by branch operations in central and northern India.</p>
            </div>
          </div>

          <div className="border-y border-[#173a57]/18 gs-stagger">
            {offices.map((office, index) => (
              <article className="grid grid-cols-[90px_0.65fr_1.35fr] max-[760px]:grid-cols-[48px_1fr] gap-[clamp(18px,3vw,52px)] py-9 border-b last:border-b-0 border-[#173a57]/14 items-start transition-colors hover:bg-[#edf1f4]" key={office.city}>
                <span className="text-[#2d68a0] text-[11px] font-black">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="mb-2 text-[#8d6c32] text-[9px] font-black tracking-[0.09em] uppercase">{office.type}</p>
                  <h3 className="m-0 font-heading font-semibold text-[38px] leading-none">{office.city}</h3>
                </div>
                <address className="max-[760px]:col-start-2 max-w-[600px] text-[#667580] text-[13px] not-italic leading-[1.8]">{office.address}</address>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[clamp(22px,6vw,92px)] max-[720px]:px-5 pb-[110px] max-[720px]:pb-20 gs-reveal">
        <div className="max-w-[1500px] mx-auto grid grid-cols-3 max-[900px]:grid-cols-1 border border-[#173a57]/16 bg-[#102b45] text-white">
          <article className="min-h-[210px] p-[clamp(26px,3vw,42px)] border-r max-[900px]:border-r-0 max-[900px]:border-b border-white/15 flex flex-col">
            <span className="text-[#efbd52] text-[9px] font-black tracking-[0.1em] uppercase">Telephone</span>
            <div className="mt-auto grid gap-2">
              {phoneNumbers.map((phone) => (
                <a className="w-fit text-sm font-semibold text-white/85 hover:text-white" href={`tel:${phone.href}`} key={phone.href}>{phone.display}</a>
              ))}
            </div>
          </article>
          <article className="min-h-[210px] p-[clamp(26px,3vw,42px)] border-r max-[900px]:border-r-0 max-[900px]:border-b border-white/15 flex flex-col">
            <span className="text-[#efbd52] text-[9px] font-black tracking-[0.1em] uppercase">Email</span>
            <a className="mt-auto w-fit text-[clamp(16px,1.5vw,22px)] font-semibold text-white hover:text-[#efbd52] break-all" href="mailto:info@supremetrading.in">info@supremetrading.in</a>
          </article>
          <article className="min-h-[210px] p-[clamp(26px,3vw,42px)] flex flex-col">
            <span className="text-[#efbd52] text-[9px] font-black tracking-[0.1em] uppercase">WhatsApp</span>
            <a className="mt-auto flex items-center justify-between gap-5 text-sm font-bold text-white hover:text-[#efbd52]" href={WA_HREF} target="_blank" rel="noopener noreferrer">
              <span className="flex items-center gap-3"><WhatsApp className="text-[#5ddd91]" /> Chat with the desk</span>
              <ArrowUpRight />
            </a>
          </article>
        </div>
      </section>

      <section className="py-[110px] max-[720px]:py-20 px-[clamp(22px,6vw,92px)] max-[720px]:px-5 bg-[#e9eef2] border-y border-[#173a57]/12 gs-reveal" id="enquiry">
        <div className="max-w-[1500px] mx-auto grid grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)] max-[940px]:grid-cols-1 gap-0 items-stretch">
          <ContactForm />
          <aside className="p-[clamp(28px,4vw,54px)] bg-[#102b45] text-white">
            <span className="text-[#efbd52] text-[10px] font-black tracking-[0.1em] uppercase">Before you send</span>
            <h3 className="mt-4 mb-0 font-heading text-[clamp(34px,4vw,50px)] font-semibold leading-[0.95]">Include the details that affect supply.</h3>
            <ol className="mt-10 p-0 border-t border-white/18 list-none">
              {[
                { t: "Product name", d: "Trade name or English name" },
                { t: "Grade", d: "Specification or end use" },
                { t: "Quantity", d: "Trial, wholesale or bulk" },
                { t: "Destination", d: "City, state or export country" },
              ].map((item, index) => (
                <li className="py-5 border-b border-white/18 grid grid-cols-[42px_1fr] gap-3" key={item.t}>
                  <b className="text-[#efbd52] text-[10px]">{String(index + 1).padStart(2, "0")}</b>
                  <div>
                    <strong className="text-sm font-bold">{item.t}</strong>
                    <p className="mt-1 mb-0 text-white/55 text-[11px] leading-[1.55]">{item.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      <section className="py-[110px] max-[720px]:py-20 px-[clamp(22px,6vw,92px)] max-[720px]:px-5 gs-reveal">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-[0.48fr_1.52fr] max-[760px]:grid-cols-1 gap-8 items-end mb-10">
            <span className="text-[#2d68a0] text-[10px] font-black tracking-[0.1em] uppercase">Mumbai head office</span>
            <h2 className="m-0 font-heading text-[clamp(48px,6vw,76px)] font-semibold leading-none">Find us</h2>
          </div>
          <iframe
            title="Supreme Trading Corp Mumbai head office map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30188.49523647128!2d72.835988!3d18.950776!3m2!1i1024!1i768!4f13.1!3m3!1m2!1s0x3be7ce2445fe9359%3A0xe8c4e71d26263e7a!2sTitanium%20Dioxide%20Suppliers%20-%20Supreme%20Trading%20Corp.!5e0!3m2!1sen!2sin!4v1765969497421!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="w-full h-[500px] max-[720px]:h-[400px] block border border-[#173a57]/16 [filter:saturate(0.55)_contrast(1.04)]"
          />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
