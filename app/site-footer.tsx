import Image from "next/image";
import Link from "next/link";
import { WhatsApp } from "./icons";

const WA_HREF = `https://wa.me/919920755226?text=${encodeURIComponent("Hi Supreme Trading, I'd like to make a product enquiry.")}`;

const colClass = "flex flex-col items-start gap-[11px]";
const colHead = "mb-[11px] text-[#2f72aa] text-[9px] font-black tracking-[0.1em] uppercase";
const colLink = "text-[#4f5f70] text-xs leading-[1.65] not-italic hover:text-[#17304f] transition-colors";

export default function SiteFooter() {
  return (
    <footer className="block px-[clamp(22px,6vw,92px)] pb-[26px] border-t border-[#cbd3dc] bg-[#eef2f5] text-[#172a42] overflow-hidden">
      <div className="max-w-[1680px] mx-auto">
      <div className="border-b border-[#cbd3dc] grid grid-cols-4 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">
        <div className="min-h-[116px] py-7 pr-7 flex flex-col justify-between border-r border-[#cbd3dc] max-[900px]:border-b max-[520px]:border-r-0">
          <span className="text-[#2f72aa] text-[9px] font-black tracking-[0.1em] uppercase">Established</span>
          <strong className="font-sans text-[24px] leading-none font-semibold tracking-[-0.03em]">Mumbai · 2002</strong>
        </div>
        <div className="min-h-[116px] p-7 flex flex-col justify-between border-r border-[#cbd3dc] max-[900px]:border-r-0 max-[900px]:border-b">
          <span className="text-[#2f72aa] text-[9px] font-black tracking-[0.1em] uppercase">Catalogue</span>
          <strong className="font-sans text-[24px] leading-none font-semibold tracking-[-0.03em]">800+ materials</strong>
        </div>
        <div className="min-h-[116px] p-7 flex flex-col justify-between border-r border-[#cbd3dc] max-[520px]:border-r-0 max-[520px]:border-b">
          <span className="text-[#2f72aa] text-[9px] font-black tracking-[0.1em] uppercase">Supply</span>
          <strong className="font-sans text-[24px] leading-none font-semibold tracking-[-0.03em]">India + export</strong>
        </div>
        <a className="min-h-[116px] py-7 pl-7 flex flex-col justify-between group" href={WA_HREF} target="_blank" rel="noopener noreferrer">
          <span className="text-[#2f72aa] text-[9px] font-black tracking-[0.1em] uppercase">Direct enquiry</span>
          <strong className="inline-flex items-center gap-2.5 font-sans text-[20px] leading-none font-semibold tracking-[-0.025em]"><WhatsApp className="text-[#2f72aa]" /> +91 99207 55226</strong>
        </a>
      </div>

      <div className="py-[72px] grid grid-cols-[1.5fr_0.7fr_0.7fr_1.05fr] gap-[clamp(38px,7vw,110px)] max-[900px]:grid-cols-2 max-[900px]:gap-x-[30px] max-[900px]:gap-y-10 max-[560px]:grid-cols-1">
        <div className="max-[900px]:col-span-full">
          <Image src="/supreme/supreme_logo@3x.png" alt="Supreme Trading Corp" width={1071} height={270} unoptimized className="w-[min(300px,100%)] h-auto" />
          <p className="max-w-[400px] mt-7 text-[#5c6978] text-[13px] leading-[1.75]">Import, export and bulk trading of industrial chemicals, oils, herbs, honey and specialty raw materials — from Mumbai since 2002.</p>
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

      <div className="pt-[22px] border-t border-[#cbd3dc] flex justify-between gap-5 text-[#7a8794] text-[9px] font-semibold tracking-[0.07em] uppercase max-[720px]:flex-col max-[720px]:items-start">
        <span>© 2026 Supreme Trading Corp · Mumbai, India</span>
        <span>Wholesale · Import · Export</span>
      </div>
      </div>
    </footer>
  );
}
