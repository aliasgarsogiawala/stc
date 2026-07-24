"use client";

import type { FormEvent } from "react";

export default function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const product = String(data.get("product") ?? "").trim();
    const quantity = String(data.get("quantity") ?? "").trim();
    const destination = String(data.get("destination") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = product ? `Product enquiry: ${product}` : "Product sourcing enquiry";
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Phone: ${phone}`,
      `Product / material: ${product}`,
      `Quantity: ${quantity}`,
      `Delivery location: ${destination}`,
      "",
      "Additional details:",
      message,
    ].join("\n");

    window.location.href = `mailto:info@supremetrading.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const labelCls = "group grid gap-2 text-[#627384] text-[9px] font-extrabold tracking-[0.09em] uppercase";
  const inputCls = "w-full h-[46px] px-0 border-0 border-b border-[#173a57]/22 rounded-none outline-0 bg-transparent text-[#102b45] text-[14px] font-semibold normal-case placeholder:text-[#9aa6af] placeholder:font-medium transition-[border-color,background-color] focus:border-[#174ea6]";

  return (
    <form className="bg-white border border-[#173a57]/18 border-t-[4px] border-t-[#174ea6]" onSubmit={handleSubmit}>
      <div className="px-[clamp(24px,3.5vw,44px)] py-[clamp(25px,3vw,36px)] border-b border-[#173a57]/12 grid grid-cols-[auto_1fr] max-[620px]:grid-cols-1 gap-x-8 gap-y-3 items-start">
        <span className="pt-1 text-[#174ea6] text-[10px] font-black tracking-[0.12em] uppercase">STC / Enquiry</span>
        <div>
          <h2 className="m-0 font-heading text-[clamp(32px,3.4vw,44px)] font-semibold leading-none tracking-[-0.03em] text-[#102b45]">Buying requirement</h2>
          <p className="mt-3 mb-0 max-w-[580px] text-[#667580] text-xs leading-[1.7]">Enter the commercial details available to you. Submitting opens a prepared email for review before sending.</p>
        </div>
      </div>

      <div className="p-[clamp(24px,3.5vw,44px)] grid grid-cols-2 max-[720px]:grid-cols-1 gap-x-8 gap-y-7">
        <label className={labelCls}>
          <span>01 — Name</span>
          <input className={inputCls} name="name" autoComplete="name" placeholder="Your full name" required />
        </label>
        <label className={labelCls}>
          <span>02 — Company</span>
          <input className={inputCls} name="company" autoComplete="organization" placeholder="Company or organisation" required />
        </label>
        <label className={labelCls}>
          <span>03 — Phone</span>
          <input className={inputCls} name="phone" type="tel" autoComplete="tel" placeholder="+91" required />
        </label>
        <label className={labelCls}>
          <span>04 — Product or material</span>
          <input className={inputCls} name="product" placeholder="Material name" required />
        </label>
        <label className={labelCls}>
          <span>05 — Required quantity</span>
          <input className={inputCls} name="quantity" placeholder="For example, 500 kg" required />
        </label>
        <label className={labelCls}>
          <span>06 — Delivery location</span>
          <input className={inputCls} name="destination" autoComplete="shipping locality" placeholder="City, port or country" required />
        </label>
        <label className={`${labelCls} col-span-full mt-1`}>
          <span>07 — Grade, packing or other details</span>
          <textarea className={`${inputCls} min-h-[92px] h-auto py-3 resize-y leading-[1.65]`} name="message" rows={3} placeholder="Grade, specification, packing preference and intended application" />
        </label>
      </div>

      <div className="px-[clamp(24px,3.5vw,44px)] py-6 border-t border-[#173a57]/12 flex max-[620px]:items-stretch max-[620px]:flex-col items-center justify-between gap-5 bg-[#f7f9fb]">
        <p className="m-0 text-[#71808c] text-[10px] leading-[1.6]">Fields 01–06 are required.</p>
        <button className="min-h-[50px] px-7 border border-[#123451] bg-[#123451] text-white text-[11px] font-extrabold tracking-[0.065em] uppercase transition-colors hover:bg-[#174ea6] hover:border-[#174ea6]" type="submit">Create enquiry email <span aria-hidden="true">↗</span></button>
      </div>
    </form>
  );
}
