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

  const labelCls = "grid gap-2.5 text-[#5b6d7c] text-[9px] font-extrabold tracking-[0.08em] uppercase";
  const inputCls = "w-full h-[48px] border-0 border-b border-[#173a57]/20 rounded-none outline-0 bg-transparent text-[#102b45] text-sm font-semibold normal-case placeholder:text-[#82909b] focus:border-[#2d68a0] focus:shadow-[0_1px_0_#2d68a0]";

  return (
    <form className="p-[clamp(28px,4vw,56px)] bg-white border border-[#173a57]/14 shadow-[0_22px_60px_rgba(22,49,72,0.08)]" onSubmit={handleSubmit}>
      <div className="mb-10 pb-8 border-b border-[#173a57]/12">
        <span className="text-[#2d68a0] text-[10px] font-black tracking-[0.09em] uppercase">Product enquiry</span>
        <h2 className="mt-3 mb-0 font-heading text-[clamp(43px,5vw,62px)] font-semibold leading-[0.95] text-[#102b45]">Send a requirement</h2>
        <p className="mt-4 mb-0 max-w-[560px] text-[#667580] text-xs leading-[1.7]">Share the product, grade and commercial details. Submitting opens a prepared email to our sourcing desk.</p>
      </div>

      <div className="grid grid-cols-2 max-[720px]:grid-cols-1 gap-x-[18px] gap-y-[22px]">
        <label className={labelCls}>
          Name
          <input className={inputCls} name="name" autoComplete="name" required />
        </label>
        <label className={labelCls}>
          Company
          <input className={inputCls} name="company" autoComplete="organization" required />
        </label>
        <label className={labelCls}>
          Phone
          <input className={inputCls} name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label className={labelCls}>
          Product or material
          <input className={inputCls} name="product" required />
        </label>
        <label className={labelCls}>
          Required quantity
          <input className={inputCls} name="quantity" placeholder="For example: 500 kg" required />
        </label>
        <label className={labelCls}>
          Delivery location
          <input className={inputCls} name="destination" autoComplete="shipping locality" required />
        </label>
        <label className={`${labelCls} col-span-full`}>
          Grade, packing or other details
          <textarea className={`${inputCls} h-auto py-3 resize-y`} name="message" rows={5} />
        </label>
      </div>

      <button className="mt-9 min-h-[50px] px-7 border border-[#123451] bg-[#123451] text-white text-[11px] font-extrabold tracking-[0.065em] uppercase transition-colors hover:bg-[#2d68a0] hover:border-[#2d68a0]" type="submit">Prepare enquiry email</button>
    </form>
  );
}
