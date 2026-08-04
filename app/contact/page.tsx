import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import ContactForm from "./contact-form";
import { LocationCards, LocationMap, LocationProvider } from "./contact-locations";
import { ArrowRight, ArrowUpRight, Mail, Phone, WhatsApp } from "../icons";
import { createPageMetadata } from "../seo";
import {
  CONTACT_EMAIL,
  PRIMARY_PHONE,
  SECONDARY_PHONE,
  WHATSAPP_NUMBER,
} from "../contact-details";

const WA_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Supreme Trading, I'd like to make a product enquiry.")}`;

export const metadata = createPageMetadata({
  title: "Contact Supreme Trading Corp | Product & Bulk Enquiries",
  description: "Contact Supreme Trading Corp in Mumbai for industrial raw material sourcing, bulk supply, packing, availability and export enquiries.",
  path: "/contact",
  image: "/og.png",
  imageAlt: "Supreme Trading Corp sourcing and contact desk",
  imageWidth: 1730,
  imageHeight: 909,
});

export default function ContactPage() {
  return (
    <main className="bg-[#f8f7f3] text-[#122c44]">
      <SiteHeader theme="solid" />

      <section className="contact-hero min-h-[540px] max-[720px]:min-h-[500px] pt-[82px] max-[720px]:pt-[70px] relative isolate overflow-hidden bg-[#183f62] text-white">
        <Image
          data-hero-media
          src="/supreme/generated/contact-us-materials-hero.png"
          alt="Contact Us arranged from herbs, petals, spices, honey, resin and industrial powder"
          fill
          priority
          sizes="100vw"
          className="object-contain object-right scale-[1.18] origin-right -z-20 max-[720px]:object-cover max-[720px]:object-[72%_center] max-[720px]:scale-100"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,27,47,0.96)_0%,rgba(11,43,70,0.82)_38%,rgba(11,43,70,0.25)_76%,rgba(11,43,70,0.12)_100%)]" />

        <div className="max-w-[1760px] min-h-[458px] max-[720px]:min-h-[430px] mx-auto px-[clamp(22px,5vw,76px)] py-[58px] flex flex-col justify-between" data-hero-copy>
          <div className="flex items-center gap-2.5 text-white/65 text-[clamp(11px,0.78vw,13px)] font-bold tracking-[0.08em] uppercase">
            <Link className="hover:text-white" href="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>

          <div>
            <p className="mb-4 text-[#f0bf59] text-[clamp(11px,0.78vw,13px)] font-extrabold tracking-[0.12em] uppercase">Supreme Trading Corp</p>
            <h1 className="max-w-[760px] m-0 font-heading text-[clamp(58px,7vw,92px)] font-semibold leading-[0.94] tracking-[-0.035em]">Contact us</h1>
            <p className="max-w-[610px] mt-6 mb-0 text-white/74 text-[15px] leading-[1.8]">
              Product , grade specifications, bulk quantities and delivery enquiries are handled by our Mumbai sourcing desk.
            </p>
            <a className="w-fit mt-8 pb-2 border-b border-[#f0bf59] inline-flex items-center gap-3 text-[clamp(12px,0.85vw,15px)] font-extrabold tracking-[0.06em] uppercase" href="#enquiry">
              Send a requirement <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      <LocationProvider>
        <LocationCards />

      <section className="bg-[#dceaf6] text-[#122c44]">
        <div className="max-w-[1760px] mx-auto px-[clamp(22px,5vw,76px)] grid grid-cols-3 max-[880px]:grid-cols-1">
          <div className="min-h-[160px] py-8 pr-[clamp(20px,3vw,44px)] flex flex-col justify-between border-r max-[880px]:border-r-0 max-[880px]:border-b border-[#356fa7]/20">
            <span className="flex items-center gap-3 text-[#356fa7] text-[clamp(10px,0.72vw,12px)] font-extrabold tracking-[0.1em] uppercase"><Phone /> Call the desk</span>
            <div className="grid gap-2">
              {[PRIMARY_PHONE, SECONDARY_PHONE].map((phone) => (
                <a className="group flex items-center justify-between gap-4 text-[clamp(16px,1.65vw,21px)] font-bold tracking-[-0.025em]" href={phone.href} key={phone.tel}>
                  {phone.display} <ArrowUpRight />
                </a>
              ))}
            </div>
          </div>
          <a className="min-h-[160px] py-8 px-[clamp(20px,3vw,44px)] flex flex-col justify-between border-r max-[880px]:border-r-0 max-[880px]:border-b border-[#356fa7]/20 group" href={`mailto:${CONTACT_EMAIL}`}>
            <span className="flex items-center gap-3 text-[#356fa7] text-[clamp(10px,0.72vw,12px)] font-extrabold tracking-[0.1em] uppercase"><Mail /> Email</span>
            <strong className="flex items-center justify-between gap-4 text-[clamp(15px,1.5vw,20px)] font-bold tracking-[-0.025em] break-all">{CONTACT_EMAIL} <ArrowUpRight /></strong>
          </a>
          <a className="min-h-[160px] py-8 pl-[clamp(20px,3vw,44px)] flex flex-col justify-between group" href={WA_HREF} target="_blank" rel="noopener noreferrer">
            <span className="flex items-center gap-3 text-[#356fa7] text-[clamp(10px,0.72vw,12px)] font-extrabold tracking-[0.1em] uppercase"><WhatsApp className="text-[#27935b]" /> WhatsApp</span>
            <strong className="flex items-center justify-between gap-4 text-[clamp(17px,2vw,24px)] font-bold tracking-[-0.025em]">{PRIMARY_PHONE.display} <ArrowUpRight /></strong>
          </a>
        </div>
      </section>

      <section className="py-[clamp(76px,8vw,112px)] px-[clamp(22px,5vw,76px)] bg-[#f2f4f6] border-y border-[#173a57]/10 gs-reveal" id="enquiry">
        <div className="max-w-[1640px] mx-auto grid grid-cols-[0.72fr_1.28fr] max-[960px]:grid-cols-1 gap-[clamp(44px,7vw,96px)] items-start">
          <aside className="sticky top-[118px] max-[960px]:static">
            <div className="pl-6 border-l-[3px] border-[#174ea6]">
              <p className="mb-4 text-[#2d68a0] text-[clamp(11px,0.78vw,13px)] font-extrabold tracking-[0.1em] uppercase">Information required</p>
              <h2 className="m-0 font-heading text-[clamp(36px,4.1vw,52px)] font-semibold leading-[1.02] tracking-[-0.035em]">For an accurate quotation.</h2>
              <p className="max-w-[420px] mt-6 mb-0 text-[#687681] text-[clamp(15px,1.05vw,18px)] leading-[1.8]">The sourcing desk reviews each enquiry against specification, quantity, packing and destination.</p>
            </div>
            <ul className="mt-10 p-0 border-t border-[#173a57]/20 list-none">
              {["Product or material name", "Grade or specification", "Quantity and packing", "Delivery city or country"].map((item, index) => (
                <li className="group py-[17px] border-b border-[#173a57]/14 grid grid-cols-[36px_1fr_auto] gap-3 items-center text-[clamp(13px,0.95vw,17px)] font-bold transition-colors hover:text-[#174ea6]" key={item}>
                  <span className="text-[#2d68a0] text-[clamp(10px,0.72vw,12px)]">{String(index + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                  <span className="text-[#9aa5ae] font-normal transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </li>
              ))}
            </ul>
          </aside>
          <ContactForm />
        </div>
      </section>

        <LocationMap />
      </LocationProvider>

      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden min-[900px]:grid border-y border-l border-[#173a57]/20 bg-white shadow-[0_12px_35px_rgba(15,45,73,0.13)]" aria-label="Quick contact">
        <a className="w-12 h-12 grid place-items-center border-b border-[#173a57]/15 text-[#245b8a] hover:bg-[#245b8a] hover:text-white transition-colors" href={PRIMARY_PHONE.href} aria-label={`Call Supreme Trading Corp at ${PRIMARY_PHONE.display}`} title="Call"><Phone /></a>
        <a className="w-12 h-12 grid place-items-center border-b border-[#173a57]/15 text-[#245b8a] hover:bg-[#245b8a] hover:text-white transition-colors" href={`mailto:${CONTACT_EMAIL}`} aria-label="Email Supreme Trading Corp" title="Email"><Mail /></a>
        <a className="w-12 h-12 grid place-items-center text-[#25a05a] hover:bg-[#25a05a] hover:text-white transition-colors" href={WA_HREF} target="_blank" rel="noopener noreferrer" aria-label="Message Supreme Trading Corp on WhatsApp" title="WhatsApp"><WhatsApp /></a>
      </div>

      <SiteFooter />
    </main>
  );
}
