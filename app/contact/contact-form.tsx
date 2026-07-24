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

  const labelCls = "grid gap-2 text-ink text-[10px] font-black uppercase";
  const inputCls = "w-full h-[46px] border-0 border-b border-line rounded-none outline-0 bg-transparent text-ink text-sm font-medium normal-case focus:border-[#d99a2b] focus:shadow-[0_1px_0_#d99a2b]";

  return (
    <form className="p-[clamp(26px,4vw,54px)] bg-white rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.22)]" onSubmit={handleSubmit}>
      <div className="mb-9">
        <span className="text-honey text-[10px] font-black uppercase">Product enquiry</span>
        <h2 className="mt-3 font-heading text-[58px] leading-none">Send a requirement</h2>
        <p className="mt-3 text-muted text-[11px]">The form prepares an email in your default mail application.</p>
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

      <button className="button button-honey mt-[30px]" type="submit">Prepare email</button>
    </form>
  );
}
