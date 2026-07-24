import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import ContactForm from "./contact-form";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone, WhatsApp } from "../icons";

const WA_HREF = `https://wa.me/919920755226?text=${encodeURIComponent("Hi Supreme Trading, I'd like to make a product enquiry.")}`;

export const metadata: Metadata = {
  title: "Contact | Supreme Trading Corp",
  description: "Contact Supreme Trading Corp for industrial raw material sourcing, supply and export enquiries.",
};

const offices = [
  {
    type: "Head office",
    city: "Mumbai",
    address: "51/A, Essaji Street, Opp. Shah Roadways, Vadgadi, Masjid Bunder (W), Mumbai 400003, Maharashtra, India",
  },
  { type: "Branch office", city: "Indore", address: "Loha Mandi, Siyaganj, Indore, Madhya Pradesh" },
  { type: "Branch office", city: "Haridwar", address: "Jamalpur Kalan, District Haridwar, Uttarakhand" },
];

export default function ContactPage() {
  return (
    <main className="bg-[#f8f7f3] text-[#122c44]">
      <SiteHeader theme="solid" />

      <section className="min-h-[540px] max-[720px]:min-h-[500px] pt-[82px] max-[720px]:pt-[70px] relative isolate overflow-hidden text-white">
        <Image
          data-hero-media
          src="/supreme/neutral-materials-hero.png"
          alt="Industrial liquids, powders and specialty raw material samples"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] -z-20"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,27,47,0.96)_0%,rgba(11,43,70,0.82)_38%,rgba(11,43,70,0.25)_76%,rgba(11,43,70,0.12)_100%)]" />

        <div className="max-w-[1480px] min-h-[458px] max-[720px]:min-h-[430px] mx-auto px-[clamp(22px,5vw,76px)] py-[58px] flex flex-col justify-between" data-hero-copy>
          <div className="flex items-center gap-2.5 text-white/65 text-[10px] font-bold tracking-[0.08em] uppercase">
            <Link className="hover:text-white" href="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>

          <div>
            <p className="mb-4 text-[#f0bf59] text-[10px] font-extrabold tracking-[0.12em] uppercase">Supreme Trading Corp</p>
            <h1 className="max-w-[760px] m-0 font-heading text-[clamp(58px,7vw,92px)] font-semibold leading-[0.94] tracking-[-0.035em]">Contact us</h1>
            <p className="max-w-[610px] mt-6 mb-0 text-white/74 text-[15px] leading-[1.8]">
              Product availability, grade specifications, bulk quantities and delivery enquiries are handled by our Mumbai sourcing desk.
            </p>
            <a className="w-fit mt-8 pb-2 border-b border-[#f0bf59] inline-flex items-center gap-3 text-[11px] font-extrabold tracking-[0.06em] uppercase" href="#enquiry">
              Send a requirement <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      <section className="py-[clamp(76px,8vw,112px)] px-[clamp(22px,5vw,76px)] bg-white gs-reveal">
        <div className="max-w-[1360px] mx-auto">
          <div className="mb-12 grid grid-cols-[0.58fr_1.42fr] max-[760px]:grid-cols-1 gap-7 items-end">
            <p className="m-0 text-[#2d68a0] text-[10px] font-extrabold tracking-[0.1em] uppercase">Office network</p>
            <div>
              <h2 className="m-0 font-heading text-[clamp(38px,4.5vw,60px)] font-semibold leading-[1.02] tracking-[-0.03em]">Locations</h2>
              <p className="max-w-[570px] mt-4 mb-0 text-[#687681] text-sm leading-[1.75]">Head office in Mumbai with branch presence in Madhya Pradesh and Uttarakhand.</p>
            </div>
          </div>

          <div className="contact-office-grid grid grid-cols-3 max-[900px]:grid-cols-1 border border-[#173a57]/16 bg-[#173a57]/16 gap-px gs-stagger relative">
            <span className="absolute z-[3] left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] top-[66px] h-px bg-[#2d68a0]/18 max-[900px]:hidden pointer-events-none" aria-hidden="true">
              <i className="contact-office-line-fill block w-full h-full bg-[#2d68a0]" />
            </span>
            {offices.map((office, index) => (
              <article className="tilt-card min-h-[330px] p-[clamp(26px,3vw,42px)] bg-[#f8f7f3] flex flex-col transition-colors hover:bg-white" key={office.city}>
                <div className="flex items-start justify-between gap-4">
                  <span className="relative z-[5] w-12 h-12 border border-[#2d68a0]/30 grid place-items-center bg-[#f8f7f3] text-[#2d68a0]"><MapPin /></span>
                  <span className="text-[#85909a] text-[10px] font-bold">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="mt-auto pt-14">
                  <p className="mb-2 text-[#9a7331] text-[9px] font-extrabold tracking-[0.1em] uppercase">{office.type}</p>
                  <h3 className="mb-4 font-heading text-[26px] font-semibold tracking-[-0.02em]">{office.city}</h3>
                  <address className="m-0 text-[#65737e] text-[12px] not-italic leading-[1.8]">{office.address}</address>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#102f4c] text-white">
        <div className="max-w-[1480px] mx-auto px-[clamp(22px,5vw,76px)] grid grid-cols-3 max-[880px]:grid-cols-1">
          <a className="min-h-[160px] py-8 pr-[clamp(20px,3vw,44px)] flex flex-col justify-between border-r max-[880px]:border-r-0 max-[880px]:border-b border-white/15 group" href="tel:+912223455226">
            <span className="flex items-center gap-3 text-[#f0bf59] text-[9px] font-extrabold tracking-[0.1em] uppercase"><Phone /> Call the desk</span>
            <strong className="flex items-center justify-between gap-4 text-[clamp(17px,2vw,24px)] font-bold tracking-[-0.025em]">+91 22 2345 5226 <ArrowUpRight /></strong>
          </a>
          <a className="min-h-[160px] py-8 px-[clamp(20px,3vw,44px)] flex flex-col justify-between border-r max-[880px]:border-r-0 max-[880px]:border-b border-white/15 group" href="mailto:info@supremetrading.in">
            <span className="flex items-center gap-3 text-[#f0bf59] text-[9px] font-extrabold tracking-[0.1em] uppercase"><Mail /> Email</span>
            <strong className="flex items-center justify-between gap-4 text-[clamp(15px,1.5vw,20px)] font-bold tracking-[-0.025em] break-all">info@supremetrading.in <ArrowUpRight /></strong>
          </a>
          <a className="min-h-[160px] py-8 pl-[clamp(20px,3vw,44px)] flex flex-col justify-between group" href={WA_HREF} target="_blank" rel="noopener noreferrer">
            <span className="flex items-center gap-3 text-[#f0bf59] text-[9px] font-extrabold tracking-[0.1em] uppercase"><WhatsApp className="text-[#5ddd91]" /> WhatsApp</span>
            <strong className="flex items-center justify-between gap-4 text-[clamp(17px,2vw,24px)] font-bold tracking-[-0.025em]">+91 99207 55226 <ArrowUpRight /></strong>
          </a>
        </div>
      </section>

      <section className="py-[clamp(76px,8vw,112px)] px-[clamp(22px,5vw,76px)] bg-[#f2f4f6] border-y border-[#173a57]/10 gs-reveal" id="enquiry">
        <div className="max-w-[1360px] mx-auto grid grid-cols-[0.72fr_1.28fr] max-[960px]:grid-cols-1 gap-[clamp(44px,7vw,96px)] items-start">
          <aside className="sticky top-[118px] max-[960px]:static">
            <div className="pl-6 border-l-[3px] border-[#174ea6]">
              <p className="mb-4 text-[#2d68a0] text-[10px] font-extrabold tracking-[0.1em] uppercase">Information required</p>
              <h2 className="m-0 font-heading text-[clamp(36px,4.1vw,52px)] font-semibold leading-[1.02] tracking-[-0.035em]">For an accurate quotation.</h2>
              <p className="max-w-[420px] mt-6 mb-0 text-[#687681] text-sm leading-[1.8]">The sourcing desk reviews each enquiry against specification, quantity, packing and destination.</p>
            </div>
            <ul className="mt-10 p-0 border-t border-[#173a57]/20 list-none">
              {["Product or material name", "Grade or specification", "Quantity and packing", "Delivery city or country"].map((item, index) => (
                <li className="group py-[17px] border-b border-[#173a57]/14 grid grid-cols-[36px_1fr_auto] gap-3 items-center text-[12px] font-bold transition-colors hover:text-[#174ea6]" key={item}>
                  <span className="text-[#2d68a0] text-[9px]">{String(index + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                  <span className="text-[#9aa5ae] font-normal transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </li>
              ))}
            </ul>
          </aside>
          <ContactForm />
        </div>
      </section>

      <section className="bg-white gs-reveal">
        <div className="max-w-[1480px] mx-auto px-[clamp(22px,5vw,76px)] pt-[clamp(76px,8vw,108px)]">
          <div className="mb-9 flex max-[680px]:block items-end justify-between gap-10">
            <div>
              <p className="mb-3 text-[#2d68a0] text-[10px] font-extrabold tracking-[0.1em] uppercase">Mumbai head office</p>
              <h2 className="m-0 font-heading text-[clamp(38px,4.5vw,58px)] font-semibold tracking-[-0.03em]">Find us</h2>
            </div>
            <address className="max-[680px]:mt-4 max-w-[520px] m-0 text-[#687681] text-xs not-italic leading-[1.75]">51/A, Essaji Street, Vadgadi, Masjid Bunder (W), Mumbai 400003, Maharashtra, India</address>
          </div>
        </div>
        <div className="contact-map-reveal relative overflow-hidden">
          <iframe
            title="Supreme Trading Corp Mumbai head office map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30188.49523647128!2d72.835988!3d18.950776!3m2!1i1024!1i768!4f13.1!3m3!1m2!1s0x3be7ce2445fe9359%3A0xe8c4e71d26263e7a!2sTitanium%20Dioxide%20Suppliers%20-%20Supreme%20Trading%20Corp.!5e0!3m2!1sen!2sin!4v1765969497421!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="w-full h-[480px] max-[720px]:h-[380px] block border-0 [filter:saturate(0.65)_contrast(1.03)]"
          />
          <span className="contact-map-curtain absolute inset-0 z-[2] bg-[#174ea6] pointer-events-none" aria-hidden="true" />
        </div>
      </section>

      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden min-[900px]:grid border-y border-l border-[#173a57]/20 bg-white shadow-[0_12px_35px_rgba(15,45,73,0.13)]" aria-label="Quick contact">
        <a className="w-12 h-12 grid place-items-center border-b border-[#173a57]/15 text-[#245b8a] hover:bg-[#245b8a] hover:text-white transition-colors" href="tel:+912223455226" aria-label="Call Supreme Trading Corp" title="Call"><Phone /></a>
        <a className="w-12 h-12 grid place-items-center border-b border-[#173a57]/15 text-[#245b8a] hover:bg-[#245b8a] hover:text-white transition-colors" href="mailto:info@supremetrading.in" aria-label="Email Supreme Trading Corp" title="Email"><Mail /></a>
        <a className="w-12 h-12 grid place-items-center text-[#25a05a] hover:bg-[#25a05a] hover:text-white transition-colors" href={WA_HREF} target="_blank" rel="noopener noreferrer" aria-label="Message Supreme Trading Corp on WhatsApp" title="WhatsApp"><WhatsApp /></a>
      </div>

      <SiteFooter />
    </main>
  );
}
