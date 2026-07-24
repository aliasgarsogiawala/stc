import Image from "next/image";
import Link from "next/link";
import { WhatsApp } from "./icons";

const WA_HREF = `https://wa.me/919920755226?text=${encodeURIComponent("Hi Supreme Trading, I'd like to make a product enquiry.")}`;

const colClass = "flex flex-col items-start gap-[11px]";
const colHead = "mb-[11px] text-[#dfa98f] text-[9px] font-black tracking-[0.08em] uppercase";
const colLink = "text-white/70 text-xs leading-[1.65] not-italic hover:text-white transition-colors";

export default function SiteFooter() {
  return (
    <footer className="block pt-0 px-[clamp(22px,6vw,92px)] pb-[26px] bg-[#22402f] text-white">
      <div className="py-16 border-b border-white/15 flex items-center justify-between gap-10 flex-wrap max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-6">
        <div>
          <p className="m-0 mb-3 text-honey-soft text-[11px] font-black tracking-[0.14em] uppercase">Get in touch</p>
          <h2 className="max-w-[16ch] m-0 font-heading text-[clamp(30px,3.6vw,48px)] leading-[1.02] font-semibold text-white">Let&apos;s source your next material.</h2>
        </div>
        <div className="flex items-center gap-[22px] flex-wrap">
          <Link className="button button-light" href="/contact#enquiry">Contact the desk</Link>
          <a className="inline-flex items-center gap-[9px] text-white/85 text-sm font-bold hover:text-white transition-colors" href={WA_HREF} target="_blank" rel="noopener noreferrer">
            <WhatsApp className="text-[#4fd07f]" /> +91 99207 55226
          </a>
        </div>
      </div>

      <div className="py-16 grid grid-cols-[1.5fr_0.7fr_0.7fr_1.05fr] gap-[clamp(38px,7vw,110px)] max-[900px]:grid-cols-2 max-[900px]:gap-x-[30px] max-[900px]:gap-y-10 max-[560px]:grid-cols-1">
        <div className="max-[900px]:col-span-full">
          <Image src="/supreme/supreme_logo@3x.png" alt="Supreme Trading Corp" width={1071} height={270} unoptimized className="w-[min(280px,100%)] h-auto [filter:brightness(0)_invert(1)]" />
          <p className="max-w-[380px] mt-7 text-white/60 text-[13px] leading-[1.7]">Import, export and bulk trading of industrial chemicals, oils, herbs, honey and specialty raw materials — from Mumbai since 2002.</p>
        </div>

        <div className={colClass}>
          <p className={colHead}>Company</p>
          <Link className={colLink} href="/">Home</Link>
          <Link className={colLink} href="/about">About</Link>
          <Link className={colLink} href="/products">Products</Link>
          <Link className={colLink} href="/contact">Contact</Link>
        </div>

        <div className={colClass}>
          <p className={colHead}>Range</p>
          <Link className={colLink} href="/products/chemicals">Industrial chemicals</Link>
          <Link className={colLink} href="/products/food-ingredients">Food ingredients</Link>
          <Link className={colLink} href="/products/honey">Honey</Link>
          <Link className={colLink} href="/products/herbs">Herbs &amp; spices</Link>
          <Link className={colLink} href="/products/oils">Essential oils</Link>
        </div>

        <div className={colClass}>
          <p className={colHead}>Mumbai head office</p>
          <address className={colLink}>51/A, Essaji Street, Vadgadi,<br />Masjid Bunder (W), Mumbai 400003</address>
          <a className={colLink} href="tel:+912223455226">+91 22 2345 5226</a>
          <a className={colLink} href="mailto:info@supremetrading.in">info@supremetrading.in</a>
        </div>
      </div>

      <div className="pt-[22px] flex justify-between gap-5 text-white/40 text-[9px] tracking-[0.06em] uppercase max-[720px]:flex-col max-[720px]:items-start">
        <span>© 2026 Supreme Trading Corp · Mumbai, India</span>
        <span>Wholesale · Import · Export</span>
      </div>
    </footer>
  );
}
